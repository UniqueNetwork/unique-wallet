// Copyright 2017-2021 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TabItem } from './types';

import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import Badge from '../Badge';

interface Props extends TabItem {
  basePath: string;
  className?: string;
  count?: number;
  disabled?: boolean;
  index: number;
}

function Tab ({ basePath, className = '', count, disabled, hasParams, index, isExact, isRoot, name, text }: Props): React.ReactElement<Props> {
  const to = isRoot
    ? basePath
    : `${basePath}/${name}`;

  // only do exact matching when not the fallback (first position tab),
  // params are problematic for dynamic hidden such as app-accounts
  const tabIsExact = isExact || !hasParams || index === 0;

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
    }
  }, [disabled]);

  return (
    <NavLink
      activeClassName='tabLinkActive'
      className={`ui--Tab ${className} ${disabled ? 'disabled' : ''}`}
      exact={tabIsExact}
      onClick={handleClick}
      strict={tabIsExact}
      to={to}
    >
      {text}{!!count && (
        <Badge
          className='tabCounter'
          color='counter'
          info={count}
        />
      )}
    </NavLink>
  );
}

export default React.memo(Tab);
