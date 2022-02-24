// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { memo, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu';

interface Props {
  isPopupActive?: boolean
  setIsPopupActive: (active: boolean) => void;
}

const PopupMenu = (props: Props) => {
  const { isPopupActive, setIsPopupActive } = props;
  const history = useHistory();
  const location = useLocation();

  const goToMyTokens = useCallback(() => {
    history.push('/myStuff/Tokens');
    setIsPopupActive(false);
  }, [history, setIsPopupActive]);

  return (
    <div className={`manage-balances ${isPopupActive ? 'popup active' : 'popup'}`}>
      <div className='popup-link'>
        <Menu.Item
          active={location.pathname === '/myStuff/Tokens'}
          className=''
          name='View all coins'
          onClick={goToMyTokens}
        />
      </div>
    </div>
  );
};

export default memo(PopupMenu);
