// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { memo, useCallback, useEffect, useState } from 'react';

import { useDecoder, useMetadata } from '@polkadot/react-hooks';
import { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';

interface Props {
  clearCheckedValues: () => void;
  collections: NftCollectionInterface[];
  selectedCollections: string[];
  filterCurrent: (id: string) => void;
  isShowCollection: boolean;
  setIsShowCollection: (isShowCollection: boolean) => void;
}

function CollectionFilter (props: Props): React.ReactElement<Props> {
  const { clearCheckedValues, collections, filterCurrent, isShowCollection, selectedCollections, setIsShowCollection } = props;
  const { collectionName16Decoder } = useDecoder();
  const { getTokenImageUrl } = useMetadata();
  const [images, setImages] = useState<string[]>([]);

  const updateImageUrl = useCallback(() => {
    collections.forEach((element: NftCollectionInterface) => {
      void getTokenImageUrl(element, '1')
        .then((res) => {
          if (res) {
            setImages((prev) => [...prev, res]);
          } else setImages((prev) => ['', ...prev]);
        });
    });
  }, [collections, getTokenImageUrl]);

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
            onClick={setIsShowCollection.bind(null, !isShowCollection)}
          />
        </div>
      </div>
      { isShowCollection && (
        <div className='collection-filter--body'>
          <div className='collection-list'>
            {collections.map((collection, index) => {
              return (
                <div
                  className={`collections-main ${selectedCollections.includes(String(collection.id)) ? 'collections-main-background' : ''}`}
                  key={collection.id}
                  onClick={filterCurrent.bind(null, collection.id)}
                >
                  <div className='custom-checkbox'>
                    <div className='checkbox-input'>
                      <input
                        checked={selectedCollections.includes(String(collection.id))}
                        data-current={collection.id}
                        onChange={() => null}
                        type='checkbox'
                      />
                    </div>
                    <div className='checkbox-title'>{collectionName16Decoder(collection.Name)}</div>
                  </div>
                  { images.length === collections.length && images[index] !== '' && (
                    <div className='collection-img'
                      style={ { backgroundImage: `url(${images.length === collections.length ? images[index] : ''})` }} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(CollectionFilter);
