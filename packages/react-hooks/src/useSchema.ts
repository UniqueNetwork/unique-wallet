// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';
import type { TokenDetailsInterface } from '@polkadot/react-hooks/useToken';

import BN from 'bn.js';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { useMetadata, useToken } from '@polkadot/react-hooks';
import { useCollection } from '@polkadot/react-hooks/useCollection';

export type AttributesDecoded = {
  [key: string]: string | string[],
}

interface UseSchemaInterface {
  attributes?: AttributesDecoded;
  attributesConst?: string;
  attributesVar?: string;
  collectionInfo?: NftCollectionInterface;
  getCollectionInfo: () => void;
  getTokenDetails: () => void;
  reFungibleBalance: number;
  tokenDetails?: TokenDetailsInterface;
  tokenName: { name: string, value: string } | null;
  tokenUrl: string;
  shouldUpdateOwner?: boolean;
}

export function useSchema (account: string | undefined, collectionId: string, tokenId: string | number, shouldUpdateOwner?: boolean): UseSchemaInterface {
  const [collectionInfo, setCollectionInfo] = useState<NftCollectionInterface>();
  const [reFungibleBalance, setReFungibleBalance] = useState<number>(0);
  const [tokenUrl, setTokenUrl] = useState<string>('');
  const [attributes, setAttributes] = useState<AttributesDecoded>();
  const [tokenDetails, setTokenDetails] = useState<TokenDetailsInterface>();
  const { getTokenInfo } = useToken();
  const { getDetailedCollectionInfo } = useCollection();
  const cleanup = useRef<boolean>(false);
  const { getTokenAttributes, getTokenImageUrl } = useMetadata();

  const tokenName = useMemo(() => {
    if (attributes) {
      const name = Object.keys(attributes).find((attributeKey: string) => attributeKey.toLowerCase().includes('name'));

      if (name) {
        return { name, value: attributes[name] as string };
      }
    }

    return null;
  }, [attributes]);

  const getReFungibleDetails = useCallback(() => {
    try {
      if (account && tokenDetails?.owner) {
        if (Object.prototype.hasOwnProperty.call(collectionInfo?.mode, 'reFungible')) {
          const owner = tokenDetails.owner.find((item: { fraction: BN, owner: string }) => item.owner.Substrate.toString() === account) as { fraction: BN, owner: string } | undefined;

          if (typeof collectionInfo?.decimalPoints === 'number') {
            const balance = owner && owner.fraction.toNumber() / Math.pow(10, collectionInfo.decimalPoints);

            if (cleanup.current) {
              return;
            }

            setReFungibleBalance(balance || 0);
          }
        }
      }
    } catch (e) {
      console.error('token balance calculation error', e);
    }
  }, [account, collectionInfo, tokenDetails?.owner]);

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
    if (tokenId && collectionInfo) {
      const tokenDetailsData = await getTokenInfo(collectionInfo, tokenId.toString());

      if (cleanup.current) {
        return;
      }

      setTokenDetails(tokenDetailsData);
    }
  }, [collectionInfo, getTokenInfo, tokenId]);

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
    const tokenImageUrl = await getTokenImageUrl(collectionInf, tokenId);

    if (cleanup.current) {
      return;
    }

    setTokenUrl(tokenImageUrl);
  }, [getTokenImageUrl]);

  useEffect(() => {
    if (collectionInfo) {
      void saveTokenImageUrl(collectionInfo, tokenId.toString());
      void getTokenDetails();
    }
  }, [collectionInfo, getTokenDetails, saveTokenImageUrl, tokenId]);

  useEffect(() => {
    void getCollectionInfo();
  }, [getCollectionInfo]);

  useEffect(() => {
    void getTokenDetails();
  }, [getTokenDetails, shouldUpdateOwner]);

  useEffect(() => {
    if (collectionInfo && tokenDetails) {
      void mergeTokenAttributes();
    }
  }, [collectionInfo, mergeTokenAttributes, tokenDetails]);

  useEffect(() => {
    void getReFungibleDetails();
  }, [getReFungibleDetails]);

  useEffect(() => {
    return () => {
      cleanup.current = true;
    };
  }, []);

  return {
    attributes,
    collectionInfo,
    getCollectionInfo,
    getTokenDetails,
    reFungibleBalance,
    tokenDetails,
    tokenName,
    tokenUrl
  };
}
