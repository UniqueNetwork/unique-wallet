// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import React, { memo, ReactElement } from 'react';

import { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';

import CollectionFilter from '../CollectionFilter';

interface Props {
  clearCheckedValues: () => void;
  collections: NftCollectionInterface[];
  selectedCollections: string[];
  filterCurrent: (id: string) => void;
  isShowCollection: boolean;
  openFilters: boolean;
  setIsShowCollection: (isShowCollection: boolean) => void;
}

const WalletFilters = (props: Props): ReactElement => {
  const { clearCheckedValues, collections, filterCurrent, isShowCollection, openFilters, selectedCollections, setIsShowCollection } = props;

  return (
    <div className={`filter-main ${openFilters ? 'open' : ''}`}>
      <CollectionFilter
        clearCheckedValues={clearCheckedValues}
        collections={collections}
        filterCurrent={filterCurrent}
        isShowCollection={isShowCollection}
        selectedCollections={selectedCollections}
        setIsShowCollection={setIsShowCollection}
      />
    </div>
  );
};

export default memo(WalletFilters);
