// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useCallback, useEffect, useState } from 'react';

import { ApiPromise } from '@polkadot/api/promise';
import { DeriveBalancesAll } from '@polkadot/api-derive/types';
import { useApi, useCall, useKusamaApi } from '@polkadot/react-hooks';

interface UseSelectedApiInterface {
  currentApi: ApiPromise | undefined;
  currentBalanceAll: DeriveBalancesAll | undefined;
}

export const useSelectedApi = (account?: string, isKusama?: boolean): UseSelectedApiInterface => {
  const { kusamaApi } = useKusamaApi();
  const { api } = useApi();
  const [currentApi, setCurrentApi] = useState<ApiPromise>();
  const [currentBalanceAll, setCurrentBalanceAll] = useState<DeriveBalancesAll>();
  const balanceAll = useCall<DeriveBalancesAll>(currentApi?.derive.balances?.all, [account]);

  const selectApiByProps = useCallback(() => {
    if (isKusama && kusamaApi) {
      setCurrentApi(kusamaApi);
    } else if (!isKusama && api) {
      setCurrentApi(api);
    }
  }, [api, isKusama, kusamaApi]);

  // set the actual nickname, local name, accountIndex, accountId
  /* useEffect((): void => {
    const { accountId, accountIndex, identity, nickname } = accountInfo || {};
    const cacheAddr = (accountId || value || '').toString();

    if (identity?.parent) {
      parentCache.set(cacheAddr, identity.parent.toString());
    }

    if (isFunction(api.query.identity?.identityOf)) {
      setName(() =>
        identity?.display
          ? extractIdentity(cacheAddr, identity)
          : extractName(cacheAddr, accountIndex)
      );
    } else if (nickname) {
      setName(nickname);
    } else {
      setName(defaultOrAddr(defaultName, cacheAddr, accountIndex));
    }
  }, [api, defaultName, info, toggle, value]); */

  useEffect(() => {
    selectApiByProps();
  }, [selectApiByProps]);

  const setBalanceValue = useCallback(() => {
    if (balanceAll) {
      setCurrentBalanceAll(balanceAll);
    }
  }, [balanceAll]);

  useEffect(setBalanceValue, [setBalanceValue]);

  return {
    currentApi,
    currentBalanceAll
  };
};
