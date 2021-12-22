// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DeriveBalancesAll } from '@polkadot/api-derive/types';

import BN from 'bn.js';
import { useEffect, useState } from 'react';

import { useApi, useCall, useKusamaApi } from '@polkadot/react-hooks';

interface UseBalancesInterface {
  encodedKusamaAccount: string | undefined;
  freeBalance: BN | undefined;
  freeKusamaBalance: BN | undefined;
  fullBalance: DeriveBalancesAll | undefined;
  fullKusamaBalance: DeriveBalancesAll | undefined;
}

export const useBalances = (account: string | undefined, getUserDeposit?: () => Promise<BN | null>): UseBalancesInterface => {
  const { api } = useApi();
  const { encodedKusamaAccount, kusamaApi } = useKusamaApi(account || '');
  const balancesAll = useCall<DeriveBalancesAll>(api?.derive.balances?.all, [account]);
  const kusamaBalancesAll = useCall<DeriveBalancesAll>(kusamaApi?.derive.balances?.all, [account]);
  const [freeBalance, setFreeBalance] = useState<BN>();
  const [freeKusamaBalance, setFreeKusamaBalance] = useState<BN>();
  const [fullBalance, setFullBalance] = useState<DeriveBalancesAll>();
  const [fullKusamaBalance, setFullKusamaBalance] = useState<DeriveBalancesAll>();

  useEffect(() => {
    // available balance used as free (transferable)
    if (balancesAll) {
      setFreeBalance(balancesAll.availableBalance);
      setFullBalance(balancesAll);
    }
  }, [balancesAll]);

  useEffect(() => {
    // available balance used as free (transferable)
    if (kusamaBalancesAll) {
      setFreeKusamaBalance(kusamaBalancesAll.availableBalance);
      setFullKusamaBalance(kusamaBalancesAll);
    }
  }, [kusamaBalancesAll]);

  useEffect(() => {
    getUserDeposit && getUserDeposit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [freeBalance, freeKusamaBalance]);

  return {
    encodedKusamaAccount,
    freeBalance,
    freeKusamaBalance,
    fullBalance,
    fullKusamaBalance
  };
};
