// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { memo, useCallback } from 'react';

import { useDecoder } from '@polkadot/react-hooks';
import { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';

interface Props {
  collectionId: string;
  collectionName: number[];
  collections: NftCollectionInterface[];
  filterCurrent: (id: string) => void;
  index: number;
  images: string[];
  selectedCollections: string[];
}

function CollectionFilterItem (props: Props): React.ReactElement<Props> {
  const { collectionId, collectionName, collections, filterCurrent, images, index, selectedCollections } = props;
  const { collectionName16Decoder } = useDecoder();

  const onFilterCurrent = useCallback(() => {
    filterCurrent(collectionId);
  }, [collectionId, filterCurrent]);

  return (
    <div
      className={`collections-main ${selectedCollections.includes(String(collectionId)) ? 'collections-main-background' : ''}`}
      key={collectionId}
      onClick={onFilterCurrent}
    >
      <div className='custom-checkbox'>
        <div className='checkbox-input'>
          <input
            checked={selectedCollections.includes(String(collectionId))}
            data-current={collectionId}
            type='checkbox'
          />
        </div>
        <div className='checkbox-title'>{collectionName16Decoder(collectionName)}</div>
      </div>
      { images.length === collections.length && images[index] !== '' && (
        <div
          className='collection-img'
          style={ { backgroundImage: `url(${images.length === collections.length ? images[index] : ''})` }}
        />
      )}
    </div>
  );
}

export default memo(CollectionFilterItem);
