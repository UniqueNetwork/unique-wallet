// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { useDecoder } from '@polkadot/react-hooks';
import { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';

import breadcrumbArrow from './breadcrumbArrow.svg';

interface Props {
  collectionInfo?: NftCollectionInterface;
  tokenId?: string;
}

function Breadcrumbs ({ collectionInfo, tokenId }: Props): React.ReactElement<Props> {
  const { collectionName16Decoder, hex2a } = useDecoder();

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
          <div className='unique-breadcrumbs--path'>
            <a
              onClick={() => console.log('filter by collection')}
            >
              Collection: {collectionName16Decoder(collectionInfo.Name)}
            </a>
            <img
              alt='breadcrumbArrow'
              src={breadcrumbArrow as string}
            />
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
