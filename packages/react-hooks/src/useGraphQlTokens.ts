// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { gql, useQuery } from '@apollo/client';

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
  userTokens: UserTokensWrapper;
  userTokensError: any;
  userTokensLoading: boolean;
};

const USER_TOKENS = gql`
  query Tokens($limit: Int!, $offset: Int!, $order: order_by!, $owner: String!, $collectionIds: [Int!]) {
     tokens(limit: $limit, where: {
        _and: [
          { owner: { _eq: $owner } }
          { collection_id: {_in: $collectionIds }}
        ]
      }, order_by: { token_id: $order }, offset: $offset) {
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

export const useGraphQlTokens = (limit: number, offset: number, order: 'desc' | 'asc', collectionIds: string[], account: string | undefined): UseGraphQlInterface => {
  const intCollectionIds = collectionIds ? collectionIds.map((item) => +item) : [];

  console.log('limit', limit, 'offset', offset, 'order', order, 'intCollectionIds', intCollectionIds);
  // can be useLazyQuery
  const { data: userTokens, error: userTokensError, loading: userTokensLoading } = useQuery(USER_TOKENS, {
    fetchPolicy: 'network-only', // Used for first execution
    nextFetchPolicy: 'cache-first',
    variables: { collectionIds: [], limit, offset, order, owner: account }
  }) as unknown as { data: UserTokensWrapper, error: string, loading: boolean };

  return {
    userTokens,
    userTokensError,
    userTokensLoading
  };
};

export default useGraphQlTokens;
