// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';
import type { MetadataType } from '@polkadot/react-hooks/useCollections';
import type { TokenDetailsInterface } from '@polkadot/react-hooks/useToken';

import { useCallback } from 'react';

import envConfig from '@polkadot/apps-config/envConfig';
import { deserializeNft, ProtobufAttributeType } from '@polkadot/react-components/util/protobufUtils';
import { useDecoder } from '@polkadot/react-hooks/useDecoder';
import { AttributesDecoded } from '@polkadot/react-hooks/useSchema';
import { useToken } from '@polkadot/react-hooks/useToken';

import { useCollection } from '.';

const { ipfsGateway } = envConfig;

interface UseMetadataInterface {
  decodeStruct: ({ attr, data }: { attr?: any, data?: string }) => AttributesDecoded;
  getAndParseOffchainSchemaMetadata: (collectionInfo: NftCollectionInterface) => Promise<{ metadata: string, metadataJson: MetadataJsonType }>
  getOnChainSchema: (collectionInfo: NftCollectionInterface) => { attributesConst: string, attributesVar: string };
  getTokenAttributes: (collectionInfo: NftCollectionInterface, tokenId: string) => Promise<AttributesDecoded>;
  getTokenImageUrl: (collectionInfo: NftCollectionInterface, tokenId: string) => Promise<string>;
  getCollectionCoverImageUrl: (collectionInfo: NftCollectionInterface) => Promise<string>;
  setUnique: (collectionInfo: NftCollectionInterface, tokenId: string) => Promise<string>;
  tokenImageUrl: (urlString: string, tokenId: string) => string;
}

export type MetadataJsonType = {
  audio?: string;
  image?: string;
  page?: string;
  video?: string;
}

export const useMetadata = (): UseMetadataInterface => {
  const { hex2a } = useDecoder();
  const { getDetailedTokenInfo } = useToken();
  const { getCollectionOnChainSchema } = useCollection();

  const decodeStruct = useCallback(({ attr, data }: { attr?: string, data?: string }): AttributesDecoded => {
    if (attr && data) {
      try {
        const schema = JSON.parse(attr) as ProtobufAttributeType;

        if (schema?.nested) {
          return deserializeNft(schema, Buffer.from(data.slice(2), 'hex'), 'en');
        }
      } catch (e) {
        console.log('decodeStruct error', e);
      }
    }

    return {};
  }, []);

  const tokenImageUrl = useCallback((urlString: string, tokenId: string): string => {
    if (urlString.indexOf('{id}') !== -1) {
      return urlString.replace('{id}', tokenId);
    }

    return urlString;
  }, []);

  // uses for token image path
  const setUnique = useCallback(async (collectionInfo: NftCollectionInterface, tokenId: string): Promise<string> => {
    try {
      const collectionMetadata = JSON.parse(hex2a(collectionInfo.offchainSchema)) as MetadataType;

      if (collectionMetadata.metadata) {
        const dataUrl = tokenImageUrl(collectionMetadata.metadata, tokenId);
        const urlResponse = await fetch(dataUrl);
        const jsonData = await urlResponse.json() as { image: string };

        return jsonData.image;
      }
    } catch (e) {
      console.log('image metadata parse error', e);
    }

    return '';
  }, [hex2a, tokenImageUrl]);

  const getTokenImageUrl = useCallback(async (collectionInfo: NftCollectionInterface, tokenId: string): Promise<string> => {
    if (collectionInfo) {
      if (collectionInfo.schemaVersion === 'ImageURL' || collectionInfo.schemaVersion === 'TokenURI') {
        return tokenImageUrl(hex2a(collectionInfo.offchainSchema), tokenId);
      } else {
        return await setUnique(collectionInfo, tokenId);
      }
    }

    return '';
  }, [hex2a, setUnique, tokenImageUrl]);

  const getCollectionCoverImageUrl = useCallback(async (collectionInfo: NftCollectionInterface): Promise<string> => {
    if (collectionInfo?.variableOnChainSchema && hex2a(collectionInfo?.variableOnChainSchema)) {
      const collectionSchema = getCollectionOnChainSchema(collectionInfo);
      const image = collectionSchema?.variableSchema?.collectionCover as string;

      return `${ipfsGateway}/${image}`;
    } else {
      return await getTokenImageUrl(collectionInfo, '1');
    }
  }, [getCollectionOnChainSchema, getTokenImageUrl, hex2a]);

  const getAndParseOffchainSchemaMetadata = useCallback(async (collectionInfo: NftCollectionInterface) => {
    try {
      const offChainSchema: { metadata: string } = JSON.parse(hex2a(collectionInfo.offchainSchema)) as unknown as { metadata: string };

      const metadataResponse = await fetch(offChainSchema.metadata.replace('{id}', '1'));
      const metadataJson = await metadataResponse.json() as MetadataJsonType;

      return {
        metadata: offChainSchema.metadata,
        metadataJson
      };
    } catch (e) {
      console.log('getEndParseOffchainSchemaMetadata error', e);
    }

    return {
      metadata: '',
      metadataJson: {}
    };
  }, [hex2a]);

  const getOnChainSchema = useCallback((collectionInf: NftCollectionInterface): { attributesConst: string, attributesVar: string } => {
    if (collectionInf) {
      return {
        attributesConst: hex2a(collectionInf.constOnChainSchema),
        attributesVar: hex2a(collectionInf.variableOnChainSchema)
      };
    }

    return {
      attributesConst: '',
      attributesVar: ''
    };
  }, [hex2a]);

  const getTokenDetails = useCallback(async (collectionInfo: NftCollectionInterface, tokenId: string) => {
    let tokenDetailsData: TokenDetailsInterface = {};

    if (tokenId && collectionInfo) {
      if (Object.prototype.hasOwnProperty.call(collectionInfo.mode, 'nft')) {
        tokenDetailsData = await getDetailedTokenInfo(collectionInfo.id, tokenId.toString());
      }

      return tokenDetailsData;
    }

    return tokenDetailsData;
  }, [getDetailedTokenInfo]);

  const getTokenAttributes = useCallback(async (collectionInfo: NftCollectionInterface, tokenId: string): Promise<AttributesDecoded> => {
    const onChainSchema = getOnChainSchema(collectionInfo);
    const tokenDetails = await getTokenDetails(collectionInfo, tokenId);

    return {
      ...decodeStruct({ attr: onChainSchema.attributesConst, data: tokenDetails?.constData }),
      ...decodeStruct({ attr: onChainSchema.attributesVar, data: tokenDetails?.variableData })
    };
  }, [getOnChainSchema, getTokenDetails, decodeStruct]);

  return {
    decodeStruct,
    getAndParseOffchainSchemaMetadata,
    getCollectionCoverImageUrl,
    getOnChainSchema,
    getTokenAttributes,
    getTokenImageUrl,
    setUnique,
    tokenImageUrl
  };
};
