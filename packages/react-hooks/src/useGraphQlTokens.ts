// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { gql, useQuery } from '@apollo/client';

export type UserToken = {
  id: string;
}

export type UseGraphQlInterface = {
  userTokens: UserToken[];
  userTokensError: any;
  userTokensLoading: boolean;
};

const USER_TOKENS = gql`
  query Tokens($collectionId: Int!, $owner: String!) {
     tokens(limit: 5, where: {collection_id: {_eq: $collectionId} }, order_by: {owner: desc}, offset: 10) {
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

export const useGraphQlTokens = (account: string | undefined): UseGraphQlInterface => {
  // can be useLazyQuery
  const { data: userTokens, error: userTokensError, loading: userTokensLoading } = useQuery(USER_TOKENS, {
    fetchPolicy: 'network-only', // Used for first execution
    nextFetchPolicy: 'cache-first',
    variables: { collectionId: 18, owner: account }
  }) as unknown as { data: UserToken[], error: string, loading: boolean };

  return {
    userTokens,
    userTokensError,
    userTokensLoading
  };
};

export default useGraphQlTokens;
