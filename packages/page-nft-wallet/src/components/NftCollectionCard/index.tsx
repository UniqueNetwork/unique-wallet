// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import type { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Loader from 'semantic-ui-react/dist/commonjs/elements/Loader';
import Item from 'semantic-ui-react/dist/commonjs/views/Item';

import { Expander } from '@polkadot/react-components';
import { useDecoder, useMetadata, useMyTokens } from '@polkadot/react-hooks';

import NftTokenCard from '../NftTokenCard';

interface Props {
  account?: string;
  canTransferTokens: boolean;
  collection: NftCollectionInterface;
  removeCollection: (collection: string) => void;
  openTransferModal: (collection: NftCollectionInterface, tokenId: string, balance: number) => void;
}

const perPage = 5;

function NftCollectionCard ({ account, canTransferTokens, collection, openTransferModal }: Props): React.ReactElement<Props> {
  const [opened, setOpened] = useState(true);
  const [currentPerPage, setCurrentPerPage] = useState(5);
  const [collectionImageUrl, setCollectionImageUrl] = useState<string>();
  const { collectionName16Decoder } = useDecoder();
  const cleanup = useRef<boolean>(false);
  const { getTokenImageUrl } = useMetadata();
  const { allMyTokens, allTokensCount, ownTokensCount, tokensOnPage } = useMyTokens(account, collection, currentPerPage);
  const nftWalletPanel = useRef<HTMLDivElement>(null);

  const hasMore = tokensOnPage.length < allMyTokens.length;

  const openCollection = useCallback((isOpen) => {
    setOpened(isOpen);
  }, []);

  const defineCollectionImage = useCallback(async () => {
    const collectionImage = await getTokenImageUrl(collection, '1');

    if (cleanup.current) {
      return;
    }

    setCollectionImageUrl(collectionImage);
  }, [collection, getTokenImageUrl]);

  const loadMore = useCallback((page: number) => {
    // handle load more on scroll action
    setCurrentPerPage(page * perPage);
  }, []);

  // set scroll parent to initialize scroll container in mobile or desktop
  const getScrollParent = useCallback(() => {
    if (nftWalletPanel.current && nftWalletPanel.current.offsetWidth > 1024) {
      return nftWalletPanel.current;
    }

    return null;
  }, [nftWalletPanel]);

  useEffect(() => {
    if (!collectionImageUrl && collection) {
      void defineCollectionImage();
    }
  }, [collection, collectionImageUrl, defineCollectionImage]);

  useEffect(() => {
    return () => {
      cleanup.current = true;
    };
  }, []);

  const useWindow = !getScrollParent();

  return (
    <Expander
      className='nft-collection-item'
      isOpen={opened}
      onClick={openCollection}
      summary={
        <div className='expander-content'>
          <div className='token-image'>
            { collectionImageUrl && (
              <Item.Image
                size='mini'
                src={collectionImageUrl}
              />
            )}
          </div>
          <div className='collection-info-row'>
            <div className='collection-info-attributes'>
              <div className='collection-name'>{collectionName16Decoder(collection.Name)}
                { Object.prototype.hasOwnProperty.call(collection.Mode, 'reFungible') &&
                <strong>, re-fungible. </strong>
                }
              </div>
              { collection.Description && (
                <div className='collection-description'>{collectionName16Decoder(collection.Description)}</div>
              )}
            </div>
          </div>
          <div className='tokens-count'>
            <span>Total: {allTokensCount} {!allTokensCount || allTokensCount > 1 ? 'items' : 'item'} (own: {ownTokensCount || 0})</span>
          </div>
          <div className='link-button' />
        </div>
      }
    >
      <div
        className='expander-inner'
        ref={nftWalletPanel}
      >
        <InfiniteScroll
          getScrollParent={getScrollParent}
          hasMore={hasMore}
          initialLoad={false}
          loadMore={loadMore}
          loader={<Loader
            active
            className='load-more'
            inline='centered'
            key={'collection-card'}
          />}
          pageStart={1}
          threshold={100}
          useWindow={useWindow}
        >
          <div className='token-table'>
            { account && tokensOnPage.map((token: string, index: number) => (
              <NftTokenCard
                account={account}
                canTransferTokens={canTransferTokens}
                collection={collection}
                key={`${token}-${index}`}
                openTransferModal={openTransferModal}
                token={token}
              />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </Expander>
  );
}

export default React.memo(NftCollectionCard);
