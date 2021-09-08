// Copyright 2017-2021 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KeyringSectionOption } from '@polkadot/ui-keyring/options/types';

import React, { useCallback } from 'react';
import { useHistory } from 'react-router';

import Dropdown from '../Dropdown';

interface createHeaderProps{
  option: KeyringSectionOption
}

export const CreateHeader: React.FC<createHeaderProps> = ({ option }) => {
  const history = useHistory();

  const onAccounts = useCallback(() => {
    history.push('/accounts');
  }, [history]);

  return (<>
    <a
      className='manage-accounts--link'
      onClick={onAccounts}
    >
        Manage accounts
    </a>
    <Dropdown.Header
      content='Choose the account'
    />
  </>);
};

export default CreateHeader;
