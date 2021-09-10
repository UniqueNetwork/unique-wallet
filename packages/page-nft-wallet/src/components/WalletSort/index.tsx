// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import React, { memo, ReactElement, useCallback, useEffect, useState } from 'react';

import ArrowDown from '../../components/ArrowDown';
import ArrowUp from '../../components/ArrowUp';
import { Filters } from '../../containers/NftWallet';

interface PropTypes {
  filters: Filters;
  openSort: boolean;
  setFilters: (filters: Filters) => void;
}

const WalletSort = ({ filters, openSort, setFilters }: PropTypes): ReactElement => {
  const [sortValue, setSortValue] = useState<string>('creationDate-desc');

  const setSort = useCallback((key: string) => {
    setSortValue(key || 'creationDate-desc');

    if (key && filters) {
      setFilters({ ...filters, sort: `${key.split('-')[1]}(${key.split('-')[0]})` });
    }
  }, [filters, setFilters]);

  const sortItem = useCallback((active: boolean, order: 'asc' | 'desc', text: string, key: string) => {
    return (
      <div
        className={active ? 'current active' : 'current'}
        onClick={setSort.bind(null, key)}
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
  }, [setSort]);

  const setSortByFilter = useCallback(() => {
    const sort = filters.sort;

    // desc(creationDate)
    if (sort.includes('(') && sort.includes(')')) {
      const sortString = sort.replace(')', '').replace('(', '-');
      const sortArr = sortString.split('-');

      // 'creationDate-desc'
      setSortValue(`${sortArr[1]}-${sortArr[0]}`);
    } else {
      console.log('something wrong with sort filer');
    }
  }, [filters]);

  useEffect(() => {
    setSortByFilter();
  }, [setSortByFilter]);

  // console.log('filters', filters, 'sortValue', sortValue);

  return (
    <div className={`sort-main ${openSort ? 'open' : ''}`}>
      {sortItem(sortValue === 'tokenId-desc', 'desc', 'Token ID', 'tokenId-desc')}
      {sortItem(sortValue === 'tokenId-asc', 'asc', 'Token ID', 'tokenId-asc')}
    </div>
  );
};

export default memo(WalletSort);
