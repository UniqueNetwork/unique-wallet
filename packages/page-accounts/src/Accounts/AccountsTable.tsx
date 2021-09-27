// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KeyringAddress } from '@polkadot/ui-keyring/types';

import React, { useCallback, useRef } from 'react';

import HelpTooltip from '@polkadot/react-components/HelpTooltip';
import closeIcon from '@polkadot/react-components/TransferModal/closeIconBlack.svg';
import { useToggle } from '@polkadot/react-hooks';

import { SortedAccount } from '../types';
import AccountTableItem from './AccountTableItem';

interface Props {
  accounts: SortedAccount[] | undefined;
  setAccount?: (account?: string) => void;
}

function AccountTable ({ accounts, setAccount }: Props): React.ReactElement<Props> | null {
  const [isModalOpen, setIsModalOpen] = useToggle();
  const popupContentRef = useRef<HTMLElement>(null);

  const content = useCallback(() => {
    return (
      <span ref={popupContentRef}>
        <div
          className='close-btn'
        >
          <img
            alt='X'
            onClick={setIsModalOpen}
            src={closeIcon as string}
          />
        </div>
        Substrate account addresses (Kusama, Quartz Polkadot, Unique, etc.) may look different, but they can be converted between each other because they use the same public key. You can see all transformations of any address on
        <a
          href='https://polkadot.subscan.io/tools/ss58_transform'
          rel='noreferrer'
          target='_blank'
        > Subscan
        </a>
      </span>
    );
  }, [setIsModalOpen]);

  return (
    <div className='accounts-table'>
      <div className='accounts-table--header'>
        <span className='with-tooltip'>
          Accounts
          {<HelpTooltip
            className={'help'}
            content={content()}
            isModalOpen={isModalOpen}
            popupContentRef={popupContentRef}
            setIsModalOpen={setIsModalOpen}
          />}
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
            setAccount={setAccount}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(AccountTable);
