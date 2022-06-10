// Copyright 2017-2022 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ErrorType } from '@polkadot/react-hooks/useFetch';
import type { NftCollectionInterface, TokenDetailsInterface } from './nftTypes';

import BN from 'bn.js';
import { useCallback, useEffect, useState } from 'react';

import { useApi, useCollection, useIsMountedRef } from '@polkadot/react-hooks';

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

  const presetTokensCollections = useCallback(async (): Promise<NftCollectionInterface[]> => {
    if (!api) {
      return [];
    }

    try {
      mountedRef.current && setCollectionsLoading(true);
      const createdCollectionCount = (await api.rpc.unique.collectionStats() as unknown as { created: BN }).created.toNumber();

      console.log('createdCollectionCount', createdCollectionCount);

      const destroyedCollectionCount = (await api.rpc.unique.collectionStats() as unknown as { destroyed: BN }).destroyed.toNumber();
      const collectionsCount = createdCollectionCount - destroyedCollectionCount;
      const collections: Array<NftCollectionInterface> = [];

      for (let i = 1; i <= collectionsCount; i++) {
        const collectionInf = await getDetailedCollectionInfo(i.toString()) as unknown as NftCollectionInterface;

        if (collectionInf && collectionInf.owner && collectionInf.owner.toString() !== '5C4hrfjw9DjXZTzV3MwzrrAr9P1MJhSrvWGWqi1eSuyUpnhM') {
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
    const tokenCount = ((await api.rpc.unique.lastTokenId(collectionId)) as unknown as BN).toNumber();

    return {
      info,
      tokenCount
    };
  }, [api.rpc.unique, getDetailedCollectionInfo]);

  const presetCollections = useCallback(async (collectionIds: number[]): Promise<NftCollectionInterface[]> => {
    try {
      const collections: Array<NftCollectionInterface> = [];

      const collectionIdsList = (collectionIds?.length ? collectionIds.map((item) => item.toString()) : []);

      for (let i = 0; i < collectionIdsList.length; i++) {
        const mintCollectionInfo = await getDetailedCollectionInfo(collectionIdsList[i]) as unknown as NftCollectionInterface;

        console.log('mintCollectionInfo', mintCollectionInfo);

        if (mintCollectionInfo && mintCollectionInfo.owner && mintCollectionInfo.owner.toString() !== '5C4hrfjw9DjXZTzV3MwzrrAr9P1MJhSrvWGWqi1eSuyUpnhM' && !collections.find((collection) => collection.id === collectionIdsList[i])) {
          collections.push({ ...mintCollectionInfo, id: collectionIdsList[i] });
        }
      }

      return collections;
    } catch (e) {
      console.log('presetTokensCollections error', e);

      return [];
    }
  }, [getDetailedCollectionInfo]);

  useEffect(() => {
    void presetCollections([1, 2, 3]);
  }, [presetCollections]);

  return {
    collectionsLoading,
    error,
    getCollectionWithTokenCount,
    getDetailedCollectionInfo,
    presetCollections,
    presetTokensCollections
  };
}
