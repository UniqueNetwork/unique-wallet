// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { memo, useCallback, useEffect, useState } from 'react';
import Loader from 'semantic-ui-react/dist/commonjs/elements/Loader';

import { useMetadata } from '@polkadot/react-hooks';
import { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';

import CollectionFilterItem from './CollectionFilterItem';

export type CollectionImagesType = { [key: string]: string; };

interface Props {
  clearCheckedValues: () => void;
  collections: NftCollectionInterface[];
  collectionsLoading?: boolean;
  selectedCollections: string[];
  filterCurrent: (id: string) => void;
  isShowCollection: boolean;
  setIsShowCollection: (isShowCollection: boolean) => void;
}

function CollectionFilter (props: Props): React.ReactElement<Props> {
  const { clearCheckedValues, collections, collectionsLoading, filterCurrent, isShowCollection, selectedCollections, setIsShowCollection } = props;

  console.log('end', collections, selectedCollections);

  const { getTokenImageUrl } = useMetadata();
  const [images, setImages] = useState <CollectionImagesType>({});

  const updateImageUrl = useCallback(() => {
    collections.forEach((collection: NftCollectionInterface) => {
      void getTokenImageUrl(collection, '1').then((res) => {
        if (res) {
          setImages((prev) => ({ ...prev, [collection.id]: res }));
        }
      });
    });
  }, [collections, getTokenImageUrl]);

  const onShowCollectionsClick = useCallback(() => {
    setIsShowCollection(!isShowCollection);
  }, [isShowCollection, setIsShowCollection]);

  useEffect(() => {
    void updateImageUrl();
  }, [updateImageUrl]);

  return (
    <div className='collection-filter unique-card'>
      <div className='collection-filter--title'>
        <div>Collections</div>
        <div className='clear'>
          <div
            className={`clear-title ${selectedCollections.length ? 'clear-title-active' : ''}`}
            onClick={clearCheckedValues}
          >
            Clear
          </div>
          <div
            className={`filter-arrow-icon ${isShowCollection ? 'rotate-icon' : ''}`}
            onClick={onShowCollectionsClick}
          />
        </div>
      </div>
      { isShowCollection && (
        <div className='collection-filter--body'>
          <div className='collection-list'>
            { collectionsLoading && (
              <Loader
                active
                className='load-info'
                inline='centered'
              />
            )}
            { !collectionsLoading && collections.map((collection, index) => (
              <CollectionFilterItem
                collectionId={collection.id}
                collectionName={collection.Name}
                collections={collections}
                filterCurrent={filterCurrent}
                images={images}
                index={index}
                key={collection.id}
                selectedCollections={selectedCollections}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(CollectionFilter);
