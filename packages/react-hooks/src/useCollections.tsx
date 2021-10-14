// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';
import type { ErrorType } from '@polkadot/react-hooks/useFetch';
import type { TokenDetailsInterface } from '@polkadot/react-hooks/useToken';

import BN from 'bn.js';
import { useCallback, useState } from 'react';

import envConfig from '@polkadot/apps-config/envConfig';
import { useApi, useCollection, useIsMountedRef /*, useFetch */ } from '@polkadot/react-hooks';

const { uniqueCollectionIds } = envConfig;

export type MetadataType = {
  metadata?: string;
}

export interface TokenInterface extends TokenDetailsInterface {
  collectionId: string;
  id: string;
}

export type CollectionWithTokensCount = { info: NftCollectionInterface, tokenCount: number };

export function useCollections () {
  const { api } = useApi();
  const mountedRef = useIsMountedRef();
  // const { fetchData } = useFetch();
  const [error] = useState<ErrorType>();
  const [collectionsLoading, setCollectionsLoading] = useState<boolean>(false);
  const { getDetailedCollectionInfo } = useCollection();

  const getTokensOfCollection = useCallback(async (collectionId: string, ownerId: string) => {
    if (!api || !collectionId || !ownerId) {
      return [];
    }

    try {
      return (await api.query.nft.addressTokens(collectionId, ownerId)).toJSON();
    } catch (e) {
      console.log('getTokensOfCollection error', e);
    }

    return [];
  }, [api]);

  const presetTokensCollections = useCallback(async (): Promise<NftCollectionInterface[]> => {
    if (!api) {
      return [];
    }

    try {
      mountedRef.current && setCollectionsLoading(true);
      const createdCollectionCount = (await api.query.nft.createdCollectionCount() as unknown as BN).toNumber();
      const destroyedCollectionCount = (await api.query.nft.destroyedCollectionCount() as unknown as BN).toNumber();
      const collectionsCount = createdCollectionCount - destroyedCollectionCount;
      const collections: Array<NftCollectionInterface> = [];

      for (let i = 1; i <= collectionsCount; i++) {
        const collectionInf = await getDetailedCollectionInfo(i.toString()) as unknown as NftCollectionInterface;

        if (collectionInf && collectionInf.Owner && collectionInf.Owner.toString() !== '5C4hrfjw9DjXZTzV3MwzrrAr9P1MJhSrvWGWqi1eSuyUpnhM') {
          collections.push({ ...collectionInf, id: i.toString() });
        }
      }

      mountedRef.current && setCollectionsLoading(false);

      return collections;
    } catch (e) {
      console.log('preset tokens collections error', e);

      return [];
    }
  }, [api, getDetailedCollectionInfo, mountedRef]);

  const getCollectionWithTokenCount = useCallback(async (collectionId: string): Promise<CollectionWithTokensCount> => {
    const info = (await getDetailedCollectionInfo(collectionId)) as unknown as NftCollectionInterface;
    const tokenCount = ((await api.query.nft.itemListIndex(collectionId)) as unknown as BN).toNumber();

    return {
      info,
      tokenCount
    };
  }, [api.query.nft, getDetailedCollectionInfo]);

  const presetCollections = useCallback(async (collectionIds: number[]): Promise<NftCollectionInterface[]> => {
    try {
      console.log('presetCollections');

      const collections: Array<NftCollectionInterface> = []; // JSON.parse(localStorage.getItem('tokenCollections') || '[]') as NftCollectionInterface[];

      const collectionIdsList = (collectionIds?.length ? collectionIds.map((item) => item.toString()) : uniqueCollectionIds);

      for (let i = 0; i < collectionIdsList.length; i++) {
        const mintCollectionInfo = await getDetailedCollectionInfo(collectionIdsList[i]) as unknown as NftCollectionInterface;

        if (mintCollectionInfo && mintCollectionInfo.Owner && mintCollectionInfo.Owner.toString() !== '5C4hrfjw9DjXZTzV3MwzrrAr9P1MJhSrvWGWqi1eSuyUpnhM' && !collections.find((collection) => collection.id === collectionIdsList[i])) {
          collections.push({ ...mintCollectionInfo, id: collectionIdsList[i] });
        }
      }

      localStorage.setItem('tokenCollections', JSON.stringify(collections));

      return collections;
    } catch (e) {
      console.log('presetTokensCollections error', e);

      return [];
    }
  }, [getDetailedCollectionInfo]);

  return {
    collectionsLoading,
    error,
    getCollectionWithTokenCount,
    getDetailedCollectionInfo,
    getTokensOfCollection,
    presetCollections,
    presetTokensCollections
  };
}
