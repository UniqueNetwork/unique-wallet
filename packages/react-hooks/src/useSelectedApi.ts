// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountInfoWithProviders, AccountInfoWithRefCount } from '@polkadot/types/interfaces';

import { useCallback, useEffect, useState } from 'react';

import { ApiPromise } from '@polkadot/api/promise';
import { DeriveBalancesAll } from '@polkadot/api-derive/types';
import { useApi, useCall, useKusamaApi } from '@polkadot/react-hooks';

interface UseSelectedApiInterface {
  currentAccountInfo: AccountInfoWithProviders | AccountInfoWithRefCount | undefined;
  currentApi: ApiPromise | undefined;
  currentBalanceAll: DeriveBalancesAll | undefined;
}

export const useSelectedApi = (account?: string, isKusama?: boolean): UseSelectedApiInterface => {
  const { kusamaApi } = useKusamaApi();
  const { api } = useApi();
  const [currentApi, setCurrentApi] = useState<ApiPromise>();
  const [currentBalanceAll, setCurrentBalanceAll] = useState<DeriveBalancesAll>();
  const [currentAccountInfo, setCurrentAccountInfo] = useState<AccountInfoWithProviders | AccountInfoWithRefCount>();
  const balanceAll = useCall<DeriveBalancesAll>(currentApi?.derive.balances?.all, [account]);
  const accountInfo = useCall<AccountInfoWithProviders | AccountInfoWithRefCount>(api?.query.system.account, [account]);

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

  const setBalanceValue = useCallback(() => {
    if (balanceAll) {
      setCurrentBalanceAll(balanceAll);
    }
  }, [balanceAll]);

  const setAccountInfo = useCallback(() => {
    if (accountInfo) {
      setCurrentAccountInfo(accountInfo);
    }
  }, [accountInfo]);

  useEffect(setBalanceValue, [setBalanceValue]);

  useEffect(setAccountInfo, [setAccountInfo]);

  return {
    currentAccountInfo,
    currentApi,
    currentBalanceAll
  };
};
