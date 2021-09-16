// Copyright 2017-2021 @polkadot/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './style.scss';

import React from 'react';

import { Modal } from '@polkadot/react-components';
import closeIcon from '@polkadot/react-components/TransferModal/closeIconBlack.svg';

interface Props {
  onClose: () => void;
}

function GetTestUNQModal ({ onClose }: Props): React.ReactElement<Props> {
  return (
    <Modal
      className='unique-modal'
      onClose={onClose}
      open
      size='tiny'
    >
      <Modal.Header>
        <h2>Get testUNQ</h2>
        <img
          alt='Close modal'
          onClick={onClose}
          src={closeIcon as string}
        />
      </Modal.Header>
      <Modal.Content>
        <div className='modal-text'>
          <p>You can get testUNQ for free from the faucet bot on Telegram: <span>@unique2faucetbot</span></p>
          <p>Copy your account address from Polkadot&#123;.js&#125; extension or ‘Accounts’ page and send it to the faucet bot. The limit is 200 testUNQ per 120 hours.</p>
        </div>
      </Modal.Content>
      <div className='modal-btn'>
        <a href={'https://web.telegram.org/'}
          rel='noreferrer'
          target='_blank'>Go to telegram</a>
      </div>
    </Modal>
  );
}

export default React.memo(GetTestUNQModal);
