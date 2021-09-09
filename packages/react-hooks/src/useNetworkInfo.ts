// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useCallback, useEffect, useState } from 'react';

import { useApi, useKusamaApi } from '@polkadot/react-hooks';

interface UseBalancesInterface {
  chain: string;
  name: string;
  kusamaChain: string;
  kusamaName: string;
}

export const useNetworkInfo = (): UseBalancesInterface => {
  const { systemChain, systemName } = useApi();
  const { kusamaApi } = useKusamaApi();
  const [name, setName] = useState<string>('');
  const [chain, setChain] = useState<string>('');
  const [kusamaName, setKusamaName] = useState<string>('');
  const [kusamaChain, setKusamaChain] = useState<string>('');

  const getKusamaNetworkInfo = useCallback(async () => {
    if (kusamaApi) {
      const kusamaSystemChain = await kusamaApi.rpc.system.chain();
      const kusamaSystemName = await kusamaApi.rpc.system.name();

      setKusamaName(kusamaSystemName.toString());
      setKusamaChain(kusamaSystemChain.toString());
    }
  }, [kusamaApi]);

  const getNetworkInfo = useCallback(() => {
    if (systemChain) {
      setChain(systemChain);
    }

    if (systemName) {
      setName(systemName);
    }
  }, [systemChain, systemName]);

  useEffect(() => {
    void getKusamaNetworkInfo();
  }, [getKusamaNetworkInfo]);

  useEffect(() => {
    getNetworkInfo();
  }, [getNetworkInfo]);

  return {
    chain,
    kusamaChain,
    kusamaName,
    name
  };
};
