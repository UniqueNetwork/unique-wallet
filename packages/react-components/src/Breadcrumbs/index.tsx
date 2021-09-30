// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import React, { memo, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import { useDecoder } from '@polkadot/react-hooks';
import { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';

import breadcrumbArrow from './breadcrumbArrow.svg';

interface Props {
  collectionInfo?: NftCollectionInterface;
  tokenId?: string;
  setCollectionId: (id: string) => void;
}

function Breadcrumbs ({ collectionInfo, setCollectionId, tokenId }: Props): React.ReactElement<Props> {
  const { collectionName16Decoder, hex2a } = useDecoder();

  const handleCollectionNameClick = useCallback(() => {
    collectionInfo && collectionInfo.id && setCollectionId(collectionInfo.id);
  }, [collectionInfo, setCollectionId]);

  return (
    <div
      className='unique-breadcrumbs'
    >
      <div className='unique-breadcrumbs--path'>
        My stuff
        <img
          alt='breadcrumbArrow'
          src={breadcrumbArrow as string}
        />
      </div>
      <div className='unique-breadcrumbs--path'>
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
              Collection: {collectionName16Decoder(collectionInfo.Name)}
              <img
                alt='breadcrumbArrow'
                src={breadcrumbArrow as string}
              />
            </NavLink>
          </div>
          { tokenId && (
            <div className='unique-breadcrumbs--path'>
              {collectionInfo && <span>{hex2a(collectionInfo.TokenPrefix)}</span>} #{tokenId}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default memo(Breadcrumbs);
