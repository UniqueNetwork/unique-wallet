// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { memo, useRef } from 'react';
import Loader from 'semantic-ui-react/dist/commonjs/elements/Loader';

import { WalletIconSvg } from '@polkadot/react-components/WalletIconSvg';
import { useBalances } from '@polkadot/react-hooks';
import { FormatBalance } from '@polkadot/react-query';

interface Props {
  account?: string,
}

function BalancesHeader (props: Props): React.ReactElement<{ account?: string }> {
  const { account } = props;
  const { freeBalance } = useBalances(account);
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className='app-balances'
      ref = {headerRef}
    >
      <div className='app-balances-items'>
        <div className='app-balances-items-item'>
          <div className='item-icon'>
            <WalletIconSvg />
          </div>
          { freeBalance && (
            <FormatBalance
              className='result'
              value={freeBalance}
            />
          )}
          { !freeBalance && (
            <Loader
              active
              className='centered'
              inline='centered'
            />
          )}
        </div>
      </div>
      {/* <div className={isPopupActive ? 'rotate-icon' : 'icon'}>
        <img
          alt='menu-arrow'
          onClick={onClick}
          src={menuArrow as string}
        />
      </div>
      <PopupMenu
        isPopupActive={isPopupActive}
        setIsPopupActive={setIsPopupActive}
      /> */}
    </div>
  );
}

export default memo(BalancesHeader);
