// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import React, { memo, ReactElement, useCallback } from 'react';

import ArrowDown from '../../components/ArrowDown';
import ArrowUp from '../../components/ArrowUp';

interface PropTypes {
  active: boolean;
  order: 'asc' | 'desc';
  setSort: (key: string) => void;
  sortKey: string;
  text: string;
}

const SortItem = ({ active, order, setSort, sortKey, text }: PropTypes): ReactElement => {

  const onSetSort = useCallback(() => {
    setSort(sortKey);
  }, [sortKey, setSort]);

  return (
    <div
      className={active ? 'current active' : 'current'}
      onClick={onSetSort}
    >
      {text}
      {order === 'asc' && (
        <ArrowUp />
      )}
      {order === 'desc' && (
        <ArrowDown />
      )}
    </div>
  );
};

export default memo(SortItem);
