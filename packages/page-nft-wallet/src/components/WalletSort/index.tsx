// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import React, { memo, ReactElement, useCallback, useEffect, useState } from 'react';

import { Filters } from '../../containers/NftWallet';
import SortItem from './SortItem';

interface PropTypes {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

const WalletSort = ({ filters, setFilters }: PropTypes): ReactElement => {
  const [sortValue, setSortValue] = useState<string>('tokenId-desc');

  const setSort = useCallback((key: string) => {
    setSortValue(key || 'tokenId-desc');

    if (key && filters) {
      setFilters({ ...filters, sort: `${key.split('-')[1]}` as 'asc' | 'desc' });
    }
  }, [filters, setFilters]);

  const setSortByFilter = useCallback(() => {
    const sort = filters.sort;

    // desc(creationDate)
    setSortValue(`tokenId-${sort}`);
  }, [filters]);

  useEffect(() => {
    setSortByFilter();
  }, [setSortByFilter]);

  return (
    <div className='sort-main'>
      <SortItem
        active={sortValue === 'tokenId-desc'}
        order={'desc'}
        setSort={setSort}
        sortKey={'tokenId-desc'}
        text={'Token ID'}
      />
      <SortItem
        active={sortValue === 'tokenId-asc'}
        order={'asc'}
        setSort={setSort}
        sortKey={'tokenId-asc'}
        text={'Token ID'}
      />
    </div>
  );
};

export default memo(WalletSort);
