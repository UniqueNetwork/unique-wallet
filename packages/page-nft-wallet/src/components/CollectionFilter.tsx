// Copyright 2017-2022 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { memo, useCallback, useEffect, useState } from 'react';
import Loader from 'semantic-ui-react/dist/commonjs/elements/Loader';

import { NftCollectionInterface, useCollection } from '@polkadot/react-hooks';

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

  const { getCollectionCoverImageUrl } = useCollection();
  const [images, setImages] = useState <CollectionImagesType>({});

  const updateImageUrl = useCallback(() => {
    collections.forEach((collection: NftCollectionInterface) => {
      const res = getCollectionCoverImageUrl(collection);

      if (res) {
        setImages((prev) => ({ ...prev, [collection.id]: res }));
      }
    });
  }, [collections, getCollectionCoverImageUrl]);

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
            {
              !collectionsLoading && !collections?.length &&
              <div className='no-collections'>
                <p className='no-collections-text'>
                  You have no collections
                </p>
              </div>
            }
            { !collectionsLoading && collections.map((collection, index) => (
              <CollectionFilterItem
                collectionId={collection.id}
                collectionName={collection.name}
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
