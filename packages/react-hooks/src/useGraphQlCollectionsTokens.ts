// Copyright 2017-2022 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { gql, useQuery } from '@apollo/client';
import { useCallback, useEffect, useState } from 'react';

import { NftCollectionInterface, useCollections, useIsMountedRef } from '@polkadot/react-hooks';

export type UserToken = {
  'collection_id': number;
  owner: string;
  'token_id': number;
}

export type UserTokensWrapper = {
  tokens: UserToken[];
  'tokens_aggregate': {
    aggregate: {
      count: number;
    }
  };
}

export type UseGraphQlInterface = {
  userCollections: NftCollectionInterface[];
  userCollectionsIds: string[];
  userCollectionsLoading: boolean;
};

const USER_COLLECTIONS_TOKENS = gql`
  query Tokens($owner: String!) {
     tokens(distinct_on: [collection_id],
     where: {
       _or: [
          { owner: { _eq: $owner } },
          { owner_normalized: { _eq: $owner } }
       ]
      },
      order_by: { collection_id: desc }) {
      collection_id
      owner
      owner_normalized
      token_id
    }
  }
`;

// const normalizeSubstrate = (account?: string) => account ? encodeAddress(decodeAddress(account)) : undefined;

/*
  Hook to get all collections user have tokens in
 */
export const useGraphQlCollectionsTokens = (account: string | undefined): UseGraphQlInterface => {
  const [userCollections, setUserCollections] = useState<NftCollectionInterface[]>([]);
  const [userCollectionsIds, setUserCollectionsIds] = useState<string[]>([]);
  const mountedRef = useIsMountedRef();
  const { presetCollections } = useCollections();
  // can be useLazyQuery
  const { data: userTokens, loading: userCollectionsLoading } = useQuery(USER_COLLECTIONS_TOKENS, {
    fetchPolicy: 'network-only', // Used for first execution
    nextFetchPolicy: 'cache-first',
    variables: { owner: account }
  }) as unknown as { data: UserTokensWrapper, error: string, loading: boolean };

  const initializeCollections = useCallback(async () => {
    if (account) {
      if (userTokens && userTokens.tokens) {
        const firstCollectionIds: number[] = [...new Set(userTokens.tokens.map((item: UserToken) => item.collection_id))];
        const firstCollections: NftCollectionInterface[] = await presetCollections(firstCollectionIds);

        if (firstCollections?.length) {
          mountedRef.current && setUserCollections(firstCollections);
          mountedRef.current && setUserCollectionsIds(firstCollections.map((collection) => collection.id));
        } else {
          mountedRef.current && setUserCollections([]);
          mountedRef.current && setUserCollectionsIds([]);
        }
      } else {
        mountedRef.current && setUserCollections([]);
        mountedRef.current && setUserCollectionsIds([]);
      }
    }
  }, [account, mountedRef, presetCollections, userTokens]);

  useEffect(() => {
    void initializeCollections();
  }, [initializeCollections]);

  return {
    userCollections,
    userCollectionsIds,
    userCollectionsLoading
  };
};

export default useGraphQlCollectionsTokens;
