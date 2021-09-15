// Copyright 2017-2021 @polkadot/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './style.scss';

import React from 'react';

import { Button, MarkWarning, Modal } from '@polkadot/react-components';
import closeIcon from '@polkadot/react-components/TransferModal/closeIconBlack.svg';

interface Props {
  className?: string;
  isKusama?: boolean;
  onClose: () => void;
  recipientId?: string;
  senderId?: string;
}

function GetModal ({ className = '', onClose }: Props): React.ReactElement<Props> {
  return (
    <Modal
      className='unique-modal'
      onClose={onClose}
      open
      size='tiny'
    >
      <Modal.Header>
        <h2>Get</h2>
        <img
          alt='Close modal'
          onClick={onClose}
          src={closeIcon as string}
        />
      </Modal.Header>
      <Modal.Content>

        <MarkWarning content={'texttexttexttexttexttexttexttexttexttext  text v vtexttexttexttexttexttext'} />
      </Modal.Content>
      <Button
        isFilled={true}
        label={'Confirm'}
      />
    </Modal>
  );
}

export default React.memo(GetModal);
