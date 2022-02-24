// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { memo, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { OpenPanelType } from '@polkadot/apps-routing/types';

interface Props {
  account?: string;
  setOpenPanel: (openPanel: OpenPanelType) => void;
  theme: { theme: string, logo?: string; };
}

const MobileMenuHeader = (props: Props): React.ReactElement<Props> => {
  const { account, setOpenPanel } = props;
  const location = useLocation();
  const currentLocation = useRef<string>();

  useEffect(() => {
    if (currentLocation.current && currentLocation.current !== location.pathname) {
      setOpenPanel('tokens');
    }

    currentLocation.current = location.pathname;
  }, [location, setOpenPanel]);

  return (
    <div className={`menu-mobile ${account ? '' : 'no-accounts'}`}>
      <NavLink
        className={`menu-mobile--link ${location.pathname.includes('myStuff') ? 'active' : ''}`}
        exact={true}
        strict={true}
        to={'/myStuff'}
      >
        My tokens
      </NavLink>
      <NavLink
        className={`menu-mobile--link ${location.pathname.includes('faq') ? 'active' : ''}`}
        exact={true}
        strict={true}
        to={'/faq'}
      >
        FAQ
      </NavLink>
    </div>
  );
};

export default memo(MobileMenuHeader);
