// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KeyringAddress } from '@polkadot/ui-keyring/types';

import React from 'react';

import { SortedAccount } from '../types';
import AccountTableItem from './AccountTableItem';

interface Props {
  accounts: SortedAccount[] | undefined;
}

function AccountTable ({ accounts }: Props): React.ReactElement<Props> | null {
  return (
    <div className='accounts-table'>
      <div className='accounts-table--header'>
        <span>
          Accounts
        </span>
        <span>
          Balances
        </span>
      </div>
      <div className='accounts-table--body'>
        { accounts?.map(({ account }: { account: KeyringAddress }) => (
          <AccountTableItem
            account={account}
            key={account.address}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(AccountTable);
