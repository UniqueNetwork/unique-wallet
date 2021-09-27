// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
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
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

export const useGraphQl = (account: string | undefined): UseGraphQlInterface => {
  // can be useLazyQuery
  const { data: userCollections, error: userCollectionsError, loading: userCollectionsLoading } = useQuery(USER_COLLECTIONS, {
    fetchPolicy: 'network-only', // Used for first execution
    nextFetchPolicy: 'cache-first',
    variables: { account }
  }) as unknown as { data: UserCollection[], error: string, loading: boolean };

  return {
    userCollections,
    userCollectionsError,
    userCollectionsLoading
  };
};

export default useGraphQl;
