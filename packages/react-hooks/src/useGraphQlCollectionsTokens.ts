// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { gql, useQuery } from '@apollo/client';
import { useCallback, useEffect, useState } from 'react';

import { useCollections, useIsMountedRef } from '@polkadot/react-hooks';
import { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';

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
};

const USER_COLLECTIONS_TOKENS = gql`
  query Tokens($owner: String!) {
     tokens(distinct_on: [collection_id], where: { owner: { _eq: $owner } }, order_by: { collection_id: desc }) {
      collection_id
      owner
      token_id
    }
  }
`;

/*
  Hook to get all collections user have tokens in
 */
export const useGraphQlCollectionsTokens = (account: string | undefined): UseGraphQlInterface => {
  const [userCollections, setUserCollections] = useState<NftCollectionInterface[]>([]);
  const [userCollectionsIds, setUserCollectionsIds] = useState<string[]>([]);
  const mountedRef = useIsMountedRef();
  const { presetCollections } = useCollections();
  // can be useLazyQuery
  const { data: userTokens } = useQuery(USER_COLLECTIONS_TOKENS, {
    fetchPolicy: 'network-only', // Used for first execution
    nextFetchPolicy: 'cache-first',
    variables: { owner: account }
  }) as unknown as { data: UserTokensWrapper, error: string, loading: boolean };

  const initializeCollections = useCallback(async () => {
    if (account && userTokens && userTokens.tokens) {
      const firstCollectionIds: number[] = [...new Set(userTokens.tokens.map((item: UserToken) => item.collection_id))];
      const firstCollections: NftCollectionInterface[] = await presetCollections(firstCollectionIds);

      if (firstCollections?.length && mountedRef.current) {
        setUserCollections(firstCollections);
        setUserCollectionsIds(firstCollections.map((collection) => collection.id));
      }
    }
  }, [account, mountedRef, presetCollections, userTokens]);

  useEffect(() => {
    void initializeCollections();
  }, [initializeCollections]);

  return {
    userCollections,
    userCollectionsIds
  };
};

export default useGraphQlCollectionsTokens;
