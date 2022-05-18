// Copyright 2017-2022 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { gql, useQuery } from '@apollo/client';

export type UserCollection = {
  id: string;
}

export type UseGraphQlInterface = {
  userCollections: UserCollection[];
  userCollectionsError: any;
  userCollectionsLoading: boolean;
};

const USER_COLLECTIONS = gql`
  query Collections {
    collection {
      collection_id
      description
      name
      offchain_schema
      owner
      owner_normalized
      token_limit
    }
  }
`;

export const useGraphQlCollections = (): UseGraphQlInterface => {
  // can be useLazyQuery
  const { data: userCollections, error: userCollectionsError, loading: userCollectionsLoading } = useQuery(USER_COLLECTIONS, {
    fetchPolicy: 'network-only', // Used for first execution
    nextFetchPolicy: 'cache-first'
  }) as unknown as { data: UserCollection[], error: string, loading: boolean };

  return {
    userCollections,
    userCollectionsError,
    userCollectionsLoading
  };
};

export default useGraphQlCollections;
