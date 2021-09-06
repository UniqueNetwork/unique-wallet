// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KeyringAddress } from '@polkadot/ui-keyring/types';

import React from 'react';
import Popup from 'semantic-ui-react/dist/commonjs/modules/Popup';

import { SortedAccount } from '../types';
import AccountTableItem from './AccountTableItem';
import question from './question.svg';

interface Props {
  accounts: SortedAccount[] | undefined;
}

function AccountTable ({ accounts }: Props): React.ReactElement<Props> | null {
  return (
    <div className='accounts-table'>
      <div className='accounts-table--header'>
        <span className='with-tooltip'>
          Accounts
          <Popup
            className='help'
            content='Substrate account addresses (Kusama, Quartz Polkadot, Unique, etc.) may look different, but they can be converted between each other because they use the same public key. You can see all transformations of any address on Subscan'
            on={'click'}
            position={'right center'}
            trigger={<img
              alt='question'
              src={question as string}
              title='help'
            />}
          />
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
