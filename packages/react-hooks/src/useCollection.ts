// Copyright 2017-2022 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { NftCollectionInterface } from './nftTypes';

import BN from 'bn.js';
import { useCallback } from 'react';

import envConfig from '@polkadot/apps-config/envConfig';
import { ProtobufAttributeType } from '@polkadot/react-components/util/protobufUtils';
import { useApi } from '@polkadot/react-hooks/useApi';
import { useDecoder } from '@polkadot/react-hooks/useDecoder';

const { ipfsGateway } = envConfig;

export function useCollection () {
  const { api } = useApi();
  const { hex2a } = useDecoder();

  const getCollectionTokensCount = useCallback(async (collectionId: string) => {
    if (!api || !collectionId) {
      return [];
    }

    try {
      return ((await api.rpc.unique.lastTokenId(collectionId)) as unknown as BN).toNumber();
    } catch (e) {
      console.log('getCollectionTokensCount error', e);
    }

    return 0;
  }, [api]);

  const getCreatedCollectionCount = useCallback(async () => {
    try {
      return (await api.rpc.unique.collectionStats() as unknown as { created: BN }).created.toNumber();
    } catch (e) {
      console.log('getCreatedCollectionCount error', e);
    }

    return 0;
  }, [api]);

  const getDetailedCollectionInfo = useCallback(async (collectionId: string) => {
    if (!api) {
      return null;
    }

    try {
      const collectionInfo = (await api.rpc.unique.collectionById(collectionId)).toHuman() as unknown as NftCollectionInterface | null;

      return {
        ...collectionInfo,
        id: collectionId
      };
    } catch (e) {
      console.log('getDetailedCollectionInfo error', e);
    }

    return {};
  }, [api]);

  const getCollectionPropertyValueByKey = useCallback((collectionInfo: NftCollectionInterface, key: string) => {
    return collectionInfo?.properties.find((property) => property.key === key)?.value;
  }, []);

  const getCollectionOnChainSchema = useCallback((collectionInfo: NftCollectionInterface): { constSchema: ProtobufAttributeType | undefined, variableSchema: { collectionCover: string } | undefined } => {
    const result: {
      constSchema: ProtobufAttributeType | undefined,
      variableSchema: { collectionCover: string } | undefined
    } = {
      constSchema: undefined,
      variableSchema: undefined
    };

    try {
      const constSchema = getCollectionPropertyValueByKey(collectionInfo, '_old_constOnChainSchema');
      const varSchema = getCollectionPropertyValueByKey(collectionInfo, '_old_variableOnChainSchema');

      if (constSchema && constSchema.length) {
        result.constSchema = JSON.parse(constSchema) as ProtobufAttributeType;
      }

      if (varSchema && varSchema.length) {
        result.variableSchema = JSON.parse(varSchema) as { collectionCover: string } | undefined;
      }

      console.log('result', result);

      return result;
    } catch (e) {
      console.log('getCollectionOnChainSchema error');
    }

    return result;
  }, [getCollectionPropertyValueByKey]);

  const tokenImageUrl = useCallback((urlString: string, tokenId: string): string => {
    if (urlString.indexOf('{id}') !== -1) {
      return urlString.replace('{id}', tokenId);
    }

    return urlString;
  }, []);

  const getTokenImageUrl = useCallback((collectionInfo: NftCollectionInterface, tokenId: string) => {
    if (collectionInfo) {
      const offchainSchema = getCollectionPropertyValueByKey(collectionInfo, '_old_offchainSchema');
      const schemaVersion = getCollectionPropertyValueByKey(collectionInfo, '_old_schemaVersion');

      if (offchainSchema && (schemaVersion === 'ImageURL' || schemaVersion === 'TokenURI')) {
        return tokenImageUrl(hex2a(offchainSchema), tokenId);
      }
    }

    return '';
  }, [getCollectionPropertyValueByKey, hex2a, tokenImageUrl]);

  const getCollectionCoverImageUrl = useCallback((collectionInfo: NftCollectionInterface): string => {
    const coverImgObj = getCollectionPropertyValueByKey(collectionInfo, '_old_variableOnChainSchema');

    if (coverImgObj) {
      const coverImgJson = JSON.parse(coverImgObj) as { collectionCover: string };

      if (coverImgJson?.collectionCover) {
        return `${ipfsGateway}/${coverImgJson?.collectionCover}`;
      }
    }

    return getTokenImageUrl(collectionInfo, '1');
  }, [getCollectionPropertyValueByKey, getTokenImageUrl]);

  return {
    getCollectionCoverImageUrl,
    getCollectionOnChainSchema,
    getCollectionPropertyValueByKey,
    getCollectionTokensCount,
    getCreatedCollectionCount,
    getDetailedCollectionInfo,
    getTokenImageUrl
  };
}
