// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu';

interface Props {
  isPopupActive?: boolean
}

const PopupMenu = (props: Props) => {
  const { isPopupActive } = props;

  return (
    <div className={`manage-balances ${isPopupActive ? 'popup active' : 'popup'}`}>
      <div className='popup-link'>
        <Menu.Item
          active={location.pathname === '/myStuff/Tokens'}
          as={NavLink}
          className=''
          name='View all tokens'
          to='/myStuff/Tokens'
        />
      </div>
    </div>
  );
};

export default memo(PopupMenu);
