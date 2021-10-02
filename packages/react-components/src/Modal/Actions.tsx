// Copyright 2017-2021 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ActionsProps } from './types';

import React from 'react';
import { Modal as SUIModal } from 'semantic-ui-react';

import Button from '../Button';
import CloseIcon from './images/close-icon.svg';

function Actions ({ children, className = '', onCancel }: ActionsProps): React.ReactElement<ActionsProps> {
  return (
    <SUIModal.Actions>
      <div
        className='close-btn'
        onClick={onCancel}
      >
        <img
          alt='close'
          src={CloseIcon as string}
        />
      </div>
      <Button.Group className={className}>
        {children}
      </Button.Group>
    </SUIModal.Actions>
  );
}

export default React.memo(Actions);
