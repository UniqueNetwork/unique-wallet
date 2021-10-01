// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { memo, useCallback, useEffect, useState } from 'react';

import { MyTokensType } from '@polkadot/app-nft-wallet/containers/NftWallet';
import { useMetadata } from '@polkadot/react-hooks';
import { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';

import CollectionFilterItem from './CollectionFilterItem';

export type CollectionImagesType = { [key: string]: string; };

interface Props {
  clearCheckedValues: () => void;
  collections: NftCollectionInterface[];
  selectedCollections: string[];
  filterCurrent: (id: string) => void;
  isShowCollection: boolean;
  setIsShowCollection: (isShowCollection: boolean) => void;
  myTokens: MyTokensType[]
}

function CollectionFilter (props: Props): React.ReactElement<Props> {
  const { clearCheckedValues, collections, filterCurrent, isShowCollection, myTokens, selectedCollections, setIsShowCollection } = props;
  const { getTokenImageUrl } = useMetadata();
  const [images, setImages] = useState <CollectionImagesType>({});

  const updateImageUrl = useCallback(() => {
    collections.forEach((element: NftCollectionInterface) => {
      for (let i = 0; i < myTokens.length; i++) {
        if (myTokens[i].collectionId === element.id) {
          void getTokenImageUrl(element, myTokens[i].tokenId)
            .then((res) => {
              if (res) {
                setImages((prev) => ({ ...prev, [myTokens[i].collectionId]: res }));
              }
            });
          break;
        }
      }
    });
  }, [collections, getTokenImageUrl, myTokens]);

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
            {collections.map((collection, index) => (
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
