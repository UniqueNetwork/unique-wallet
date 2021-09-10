// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useCallback, useEffect, useState } from 'react';

import { ApiPromise } from '@polkadot/api/promise';
import { useApi, useKusamaApi } from '@polkadot/react-hooks';

interface UseSelectedApiInterface {
  currentApi: ApiPromise | undefined;
}

export const useSelectedApi = (isKusama?: boolean): UseSelectedApiInterface => {
  const { kusamaApi } = useKusamaApi();
  const { api } = useApi();
  const [currentApi, setCurrentApi] = useState<ApiPromise>();

  const selectApiByProps = useCallback(() => {
    if (isKusama && kusamaApi) {
      setCurrentApi(kusamaApi);
    } else if (!isKusama && api) {
      setCurrentApi(api);
    }
  }, [api, isKusama, kusamaApi]);

  useEffect(() => {
    selectApiByProps();
  }, [selectApiByProps]);

  return {
    currentApi
  };
};
