// Copyright 2017-2022 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import React, { memo, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import { NftCollectionInterface, useDecoder } from '@polkadot/react-hooks';

import breadcrumbArrow from './breadcrumbArrow.svg';

interface Props {
  collectionInfo?: NftCollectionInterface;
  tokenId?: string;
  setCollectionId: (id: string) => void;
}

function Breadcrumbs ({ collectionInfo, setCollectionId, tokenId }: Props): React.ReactElement<Props> {
  const { collectionName16Decoder } = useDecoder();

  const handleCollectionNameClick = useCallback(() => {
    collectionInfo && collectionInfo.id && setCollectionId(collectionInfo.id);
  }, [collectionInfo, setCollectionId]);

  const handleNFTClick = useCallback(() => {
    collectionInfo && collectionInfo.id && setCollectionId('');
  }, [collectionInfo, setCollectionId]);

  return (
    <div
      className='unique-breadcrumbs'
    >
      <div className='unique-breadcrumbs--path'>
        My tokens
        <img
          alt='breadcrumbArrow'
          src={breadcrumbArrow as string}
        />
      </div>
      <div
        className='unique-breadcrumbs--path'
        onClick={handleNFTClick}
      >
        <NavLink
          to={'/myStuff/nft'}
        >
          NFT
          <img
            alt='breadcrumbArrow'
            src={breadcrumbArrow as string}
          />
        </NavLink>
      </div>
      { collectionInfo && (
        <>
          <div
            className='unique-breadcrumbs--path'
            onClick={handleCollectionNameClick}
          >
            <NavLink
              to={'/myStuff/nft'}
            >
              Collection: {collectionName16Decoder(collectionInfo.name)}
              <img
                alt='breadcrumbArrow'
                src={breadcrumbArrow as string}
              />
            </NavLink>
          </div>
          { tokenId && (
            <div className='unique-breadcrumbs--path'>
              {collectionInfo && <span>{collectionInfo.tokenPrefix}</span>} #{tokenId}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default memo(Breadcrumbs);
