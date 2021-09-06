// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KeyringAddress } from '@polkadot/ui-keyring/types';

import React, { useCallback } from 'react';
import { useHistory } from 'react-router';

import { AddressSmall, CopyIcon } from '@polkadot/react-components';

interface Props {
  account: KeyringAddress;
}

function AccountTableItem ({ account }: Props): React.ReactElement<Props> | null {
  const history = useHistory();

  const copyAddress = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    navigator.clipboard.writeText(window.location.href);
  }, []);

  const viewAllTokens = useCallback(() => {
    history.push('/myStuff');
  }, []);

  return (
    <div className='accounts-table-item'>
      <div className='item'>
        <AddressSmall value={account.address} />
        <div className='item--address'>
          <span>{account.address}</span>
          <a
            onClick={copyAddress}
          >
            <CopyIcon />
          </a>
        </div>
      </div>
      <a
        onClick={viewAllTokens}>
        View All Tokens
      </a>
    </div>
  );
}

export default React.memo(AccountTableItem);
