// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KeyringAddress } from '@polkadot/ui-keyring/types';

import React, { useCallback, useEffect, useState } from 'react';
import Popup from 'semantic-ui-react/dist/commonjs/modules/Popup';

import { Modal } from '@polkadot/react-components';
import { useToggle } from '@polkadot/react-hooks';

import { SortedAccount } from '../types';
import AccountTableItem from './AccountTableItem';
import question from './question.svg';

interface Props {
  accounts: SortedAccount[] | undefined;
  setAccount?: (account?: string) => void;
}

function AccountTable ({ accounts, setAccount }: Props): React.ReactElement<Props> | null {
  const mqList = window.matchMedia('(max-width: 767px)');

  const [isOpenMobileModal, setIsOpenMobileModal] = useState(mqList.matches);
  const [isModalOpen, setIsModalOpen] = useToggle(false);

  useEffect(() => {
    const onChange = () => setIsOpenMobileModal(mqList.matches);

    mqList.addEventListener('change', onChange);

    return () => mqList.removeEventListener('change', onChange);
  }, [mqList]);

  const content = useCallback(() => {
    return (
      <span>
        Substrate account addresses (Kusama, Quartz Polkadot, Unique, etc.) may look different, but they can be converted between each other because they use the same public key. You can see all transformations of any address on
        <a
          href='https://polkadot.subscan.io/tools/ss58_transform'
          rel='noreferrer'
          target='_blank'
        > Subscan
        </a>
      </span>
    );
  }, []);

  return (
    <div className='accounts-table'>
      <div className='accounts-table--header'>
        <span className='with-tooltip'>
          Accounts
          <Popup
            className='help'
            content={content()}
            on={'click'}
            position={'right center'}
            trigger={<img
              alt='question'
              onClick={setIsModalOpen}
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
            setAccount={setAccount}
          />
        ))}
      </div>
      {isModalOpen && isOpenMobileModal && (
        <Modal
          className='mobile-modal-help-text'
          header=' '
          onCancel={setIsModalOpen}
          size='small'
        >
          <Modal.Content>
            {content()}
          </Modal.Content>
        </Modal>
      )}
    </div>
  );
}

export default React.memo(AccountTable);
