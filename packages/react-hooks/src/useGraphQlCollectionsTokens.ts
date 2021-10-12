// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { gql, useQuery } from '@apollo/client';
import { useCallback, useEffect, useState } from 'react';

import { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';
import { useCollections } from '@polkadot/react-hooks/useCollections';
import { useIsMountedRef } from '@polkadot/react-hooks/useIsMountedRef';

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
};

const USER_TOKENS = gql`
  query Tokens($limit: Int!, $offset: Int!, $order: order_by!, $owner: String!) {
     tokens(limit: $limit, where: { owner: { _eq: $owner } }, order_by: { token_id: $order }, offset: $offset) {
      collection_id
      owner
      token_id
    }
    tokens_aggregate(where: {owner: {_eq: $owner }}) {
      aggregate {
        count
      }
    }
  }
`;

/*
  Hook to get all collections user have tokens in
 */
export const useGraphQlCollectionsTokens = (limit: number, offset: number, order: 'desc' | 'asc', account: string | undefined): UseGraphQlInterface => {
  const [userCollections, setUserCollections] = useState<NftCollectionInterface[]>([]);
  const mountedRef = useIsMountedRef();
  const { presetCollections } = useCollections();
  // can be useLazyQuery
  const { data: userTokens } = useQuery(USER_TOKENS, {
    fetchPolicy: 'network-only', // Used for first execution
    nextFetchPolicy: 'cache-first',
    variables: { limit, offset, order, owner: account }
  }) as unknown as { data: UserTokensWrapper, error: string, loading: boolean };

  const initializeCollections = useCallback(async () => {
    if (account && userTokens && userTokens.tokens) {
      const firstCollectionIds: number[] = [...new Set(userTokens.tokens.map((item: UserToken) => item.collection_id))];
      const firstCollections: NftCollectionInterface[] = await presetCollections(firstCollectionIds);

      if (firstCollections?.length) {
        mountedRef.current && setUserCollections(firstCollections);
      }
    }
  }, [account, mountedRef, presetCollections, userTokens]);

  useEffect(() => {
    void initializeCollections();
  }, [initializeCollections]);

  return {
    userCollections
  };
};

export default useGraphQlCollectionsTokens;
