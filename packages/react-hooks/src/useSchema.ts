// Copyright 2017-2022 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AttributesDecoded, NftCollectionInterface, TokenDetailsInterface } from './nftTypes';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import envConfig from '@polkadot/apps-config/envConfig';
import { useCollection, useIsMountedRef, useToken } from '@polkadot/react-hooks';

const { ipfsGateway } = envConfig;

interface UseSchemaInterface {
  attributes?: AttributesDecoded;
  attributesConst?: string;
  attributesVar?: string;
  collectionInfo?: NftCollectionInterface;
  getCollectionInfo: () => Promise<void>;
  getTokenDetails: () => Promise<void>;
  tokenDetails?: TokenDetailsInterface;
  tokenName: { name: string, value: string } | null;
  tokenUrl: string;
  shouldUpdateOwner?: boolean;
}

export type IpfsJsonType = { ipfs: string, type: 'image' };

export function useSchema (account: string | undefined, collectionId: string, tokenId: string | number): UseSchemaInterface {
  const [collectionInfo, setCollectionInfo] = useState<NftCollectionInterface>();
  const [tokenUrl, setTokenUrl] = useState<string>('');
  const [attributes, setAttributes] = useState<AttributesDecoded>();
  const [tokenDetails, setTokenDetails] = useState<TokenDetailsInterface>();
  const { getDetailedTokenInfo } = useToken();
  const { getCollectionPropertyValueByKey, getDetailedCollectionInfo, getTokenImageUrl } = useCollection();
  const mountedRef = useIsMountedRef();
  const cleanup = useRef<boolean>(false);
  const { getTokenAttributes } = useToken();

  const tokenName = useMemo(() => {
    if (attributes) {
      const name = Object.keys(attributes).find((attributeKey: string) => attributeKey.toLowerCase().includes('name'));

      if (name) {
        return { name, value: attributes[name] as string };
      }
    }

    return null;
  }, [attributes]);

  const getCollectionInfo = useCallback(async () => {
    if (collectionId) {
      const info: NftCollectionInterface = await getDetailedCollectionInfo(collectionId) as unknown as NftCollectionInterface;

      if (cleanup.current) {
        return;
      }

      if (info && Object.keys(info).length) {
        setCollectionInfo({
          ...info,
          id: collectionId
        });
      }
    }
  }, [collectionId, getDetailedCollectionInfo]);

  const getTokenDetails = useCallback(async () => {
    if (tokenId && collectionId) {
      const tokenDetailsData = await getDetailedTokenInfo(collectionId, tokenId.toString());

      if (cleanup.current || !tokenDetailsData) {
        return;
      }

      setTokenDetails(tokenDetailsData);
    }
  }, [collectionId, getDetailedTokenInfo, tokenId]);

  const mergeTokenAttributes = useCallback(async () => {
    if (collectionInfo && tokenId) {
      const attrs = await getTokenAttributes(collectionInfo, tokenId.toString());

      if (cleanup.current) {
        return;
      }

      setAttributes(attrs);
    }
  }, [collectionInfo, getTokenAttributes, tokenId]);

  const saveTokenImageUrl = useCallback(async (collectionInf: NftCollectionInterface, tokenId: string) => {
    let tokenImageUrl: string;
    let ipfsJson: IpfsJsonType;

    const schemaVersion = getCollectionPropertyValueByKey(collectionInf, '_old_schemaVersion');

    if (schemaVersion === 'Unique' && attributes?.ipfsJson) {
      try {
        ipfsJson = JSON.parse(attributes.ipfsJson as string) as IpfsJsonType;
        tokenImageUrl = `${ipfsGateway}/${ipfsJson?.ipfs}`;
      } catch (e) {
        console.log('ipfsJson parse error', e);
        tokenImageUrl = '';
      }
    } else {
      // use old logic
      tokenImageUrl = await getTokenImageUrl(collectionInf, tokenId);
    }

    mountedRef.current && setTokenUrl(tokenImageUrl);
  }, [attributes?.ipfsJson, getCollectionPropertyValueByKey, getTokenImageUrl, mountedRef]);

  useEffect(() => {
    if (collectionInfo) {
      void saveTokenImageUrl(collectionInfo, tokenId.toString());
    }
  }, [collectionInfo, getTokenDetails, saveTokenImageUrl, tokenId]);

  useEffect(() => {
    void getCollectionInfo();
  }, [getCollectionInfo]);

  useEffect(() => {
    if (collectionInfo && tokenDetails) {
      void mergeTokenAttributes();
    }
  }, [collectionInfo, mergeTokenAttributes, tokenDetails]);

  return {
    attributes,
    collectionInfo,
    getCollectionInfo,
    getTokenDetails,
    tokenDetails,
    tokenName,
    tokenUrl
  };
}
