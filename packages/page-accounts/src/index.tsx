// Copyright 2017-2021 @polkadot/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import type { AppProps as Props } from '@polkadot/react-components/types';

import React from 'react';

import Accounts from './Accounts';
import useCounter from './useCounter';

export { useCounter };

function AccountsApp ({ onStatusChange, setAccount }: Props): React.ReactElement<Props> {
  return (
    <main className='accounts--App'>
      <Accounts
        onStatusChange={onStatusChange}
        setAccount={setAccount}
      />
    </main>
  );
}

export default React.memo(AccountsApp);
