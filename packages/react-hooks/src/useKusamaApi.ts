// Copyright 2017-2022 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import BN from 'bn.js';
import { useCallback, useContext, useEffect, useState } from 'react';

import { ApiPromise } from '@polkadot/api/promise';
import envConfig from '@polkadot/apps-config/envConfig';
import { StatusContext } from '@polkadot/react-components';
import { useApi } from '@polkadot/react-hooks/useApi';
import { useKusamaBalance } from '@polkadot/react-hooks/useKusamaBalance';
import { formatStrBalance } from '@polkadot/react-hooks/utils';
import { encodeAddress } from '@polkadot/util-crypto';

const { kusamaDecimals } = envConfig;

interface UseKusamaApiInterface {
  encodedKusamaAccount: string | undefined;
  formatKsmBalance: (balance: BN | undefined) => string;
  getKusamaTransferFee: (recipient: string, value: BN) => Promise<BN | null>;
  kusamaApi: ApiPromise | undefined;
  kusamaAvailableBalance: BN | undefined;
  kusamaTransfer: (recipient: string, value: BN, onSuccess: (status: string) => void, onFail: (status: string) => void) => void;
}

export function formatKsmBalance (value: BN | undefined = new BN(0)): string {
  return formatStrBalance(value, kusamaDecimals);
}

export const useKusamaApi = (account?: string): UseKusamaApiInterface => {
  const { isKusamaApiConnected, isKusamaApiReady, kusamaApi } = useApi();
  const [api, setApi] = useState<ApiPromise>();
  const [encodedKusamaAccount, setEncodedKusamaAccount] = useState<string>();
  const { queueExtrinsic } = useContext(StatusContext);
  const { kusamaAvailableBalance } = useKusamaBalance(api, account);

  const kusamaTransfer = useCallback((recipient: string, value: BN, onSuccess: (status: string) => void, onFail: (status: string) => void) => {
    if (encodedKusamaAccount && api) {
      queueExtrinsic({
        accountId: encodedKusamaAccount,
        extrinsic: api.tx.balances
          .transfer(recipient, value),
        isUnsigned: false,
        txFailedCb: () => { onFail('SEND_MONEY_FAIL'); },
        txStartCb: () => { onSuccess('SEND_MONEY_SUCCESS'); },
        txSuccessCb: () => { console.log('success'); },
        txUpdateCb: () => { console.log('update'); }
      });
    }
  }, [api, encodedKusamaAccount, queueExtrinsic]);

  const getKusamaTransferFee = useCallback(async (recipient: string, value: BN): Promise<BN | null> => {
    if (encodedKusamaAccount && api) {
      const transferFee = await api.tx.balances.transfer(recipient, value).paymentInfo(encodedKusamaAccount) as { partialFee: BN };

      return transferFee.partialFee;
    }

return null;
  }, [encodedKusamaAccount, api]);

  const initKusamaApi = useCallback(() => {
    if (isKusamaApiReady && isKusamaApiConnected) {
      setApi(kusamaApi);
    }
  }, [isKusamaApiReady, isKusamaApiConnected, kusamaApi]);

  useEffect(() => {
    if (account) {
      setEncodedKusamaAccount(encodeAddress(account, 2));
    }
  }, [account]);

  useEffect(() => {
    initKusamaApi();
  }, [initKusamaApi]);

  return {
    encodedKusamaAccount,
    formatKsmBalance,
    getKusamaTransferFee,
    kusamaApi: api,
    kusamaAvailableBalance,
    kusamaTransfer
  };
};
