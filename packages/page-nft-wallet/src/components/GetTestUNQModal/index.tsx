// Copyright 2017-2022 @polkadot/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './style.scss';

import React from 'react';

import envConfig from '@polkadot/apps-config/envConfig';
import { Modal } from '@polkadot/react-components';
import { useApi } from '@polkadot/react-hooks';

interface Props {
  onClose: () => void;
}

// ex: https://t.me/unique2faucet_opal_bot
const getTelegramBotAddress = (telegramLink: string) => {
  if (!telegramLink) {
    return '';
  }

  const regExp = /https?:\/\/t.me\/(.+).*/g;
  const match = regExp.exec(telegramLink);

  return match && `@${match[1]}`;
};

function GetTestUNQModal ({ onClose }: Props): React.ReactElement<Props> {
  // const { chain } = useNetworkInfo();
  const { api } = useApi();
  const token = api?.registry?.chainTokens[0];
  const telegramLink = envConfig?.uniqueTelegram;
  const botAddress = React.useMemo(() => getTelegramBotAddress(telegramLink), [telegramLink]);

  return (
    <Modal
      className='unique-modal'
      onClose={onClose}
      open
      size='tiny'
    >
      <Modal.Header>
        <h2>Get {token}</h2>
      </Modal.Header>
      <Modal.Content>
        <div className='modal-text  '>
          <p>You can get {token} for free from the faucet bot on Telegram via {botAddress}</p>
        </div>
      </Modal.Content>
      <Modal.Actions onCancel={onClose}>
        <div className='modal-btn'>
          <a
            href={telegramLink}
            rel='noreferrer'
            target='_blank'
          >Go to telegram</a>
        </div>
      </Modal.Actions>
    </Modal>
  );
}

export default React.memo(GetTestUNQModal);
