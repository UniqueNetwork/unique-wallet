// Copyright 2017-2021 @polkadot/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './style.scss';

import React from 'react';

import { Modal } from '@polkadot/react-components';

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
      </Modal.Header>
      <Modal.Content>
        <div className='modal-text  '>
          <p>You can get testUNQ for free from the faucet bot on Telegram via @unique2faucetbot</p>
        </div>
      </Modal.Content>
      <Modal.Actions onCancel={onClose}>
        <div className='modal-btn'>
          <a
            href={'https://web.telegram.org/'}
            rel='noreferrer'
            target='_blank'
          >Go to telegram</a>
        </div>
      </Modal.Actions>
    </Modal>
  );
}

export default React.memo(GetTestUNQModal);
