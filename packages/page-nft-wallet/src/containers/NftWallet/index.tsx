// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import type { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import equal from 'deep-equal';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';

import NftTokenCard from '@polkadot/app-nft-wallet/components/NftTokenCard';
import { OpenPanelType } from '@polkadot/apps-routing/types';
import { useCollections } from '@polkadot/react-hooks';

import CollectionFilter from '../../components/CollectionFilter';
import TokensSearch from '../../components/TokensSearch';
import WalletFilters from '../../components/WalletFilters';
import WalletSort from '../../components/WalletSort';

export type Filters = {
  collectionIds: string[];
  sort: string;
}

interface NftWalletProps {
  account?: string;
  addCollection: (collection: NftCollectionInterface) => void;
  collections: NftCollectionInterface[];
  openPanel?: OpenPanelType;
  setOpenPanel?: (openPanel: OpenPanelType) => void;
  setCollections: (collections: (prevCollections: NftCollectionInterface[]) => (NftCollectionInterface[])) => void;
}

const defaultFilters = {
  collectionIds: [],
  sort: 'desc(creationDate)'
};

function NftWallet ({ account, addCollection, collections, openPanel, setCollections, setOpenPanel }: NftWalletProps): React.ReactElement {
  const storageFilters = JSON.parse(sessionStorage.getItem('filters') as string) as Filters;
  const initialFilters = storageFilters && !equal(storageFilters, defaultFilters) ? storageFilters : defaultFilters;
  const [showCollectionsFilter, toggleCollectionsFilter] = useState<boolean>(true);
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const { presetCollections } = useCollections();
  const cleanup = useRef<boolean>(false);
  const history = useHistory();

  const clearCheckedValues = useCallback(() => {
    setSelectedCollections([]);
  }, []);

  const clearAllFilters = useCallback(() => {
    setFilters(defaultFilters);
    sessionStorage.removeItem('filters');
    setOpenPanel && setOpenPanel('tokens');
  }, []);

  const onCollectionCheck = useCallback((id: string) => {
    let newIds: string[] = [];

    if (selectedCollections.includes(id)) {
      newIds = selectedCollections.filter((item) => item !== id);
    } else {
      newIds = [...selectedCollections, id];
    }

    setSelectedCollections(newIds);
  }, [selectedCollections]);

  const addMintCollectionToList = useCallback(async () => {
    const firstCollections: NftCollectionInterface[] = await presetCollections();

    if (cleanup.current) {
      return;
    }

    setCollections((prevCollections: NftCollectionInterface[]) => {
      if (JSON.stringify(firstCollections) !== JSON.stringify(prevCollections)) {
        return [...firstCollections];
      } else {
        return prevCollections;
      }
    });
  }, [setCollections, presetCollections]);

  const openDetailedInformationModal = useCallback((collectionId: string, tokenId: string) => {
    history.push(`/myStuff/token-details?collectionId=${collectionId}&tokenId=${tokenId}`);
  }, [history]);

  useEffect(() => {
    void addMintCollectionToList();
  }, [addMintCollectionToList]);

  useEffect(() => {
    return () => {
      cleanup.current = true;
    };
  }, []);

  return (
    <div className={`nft-wallet ${openPanel || ''}`}>
      {/* {(collections.length === 0) && (
          <div className='market-pallet empty'>
            <img
              alt='no tokens'
              src={noMyTokensIcon as string}
            />
            <p className='no-tokens-text'>You have no tokens</p>
          </div>
        )} */}
      <div className='nft-wallet--body'>
        <div className='nft-wallet--row'>
          <CollectionFilter
            clearCheckedValues={clearCheckedValues}
            collections={collections}
            filterCurrent={onCollectionCheck}
            isShowCollection={showCollectionsFilter}
            selectedCollections={selectedCollections}
            setIsShowCollection={toggleCollectionsFilter}
          />
          <div className='collection-list'>
            <div className='unique-card'>
              <TokensSearch
                account={account}
                addCollection={addCollection}
                collections={collections}
              />
            </div>
            <div className='unique-card tokens-list'>
              { collections?.length > 0 && collections.map((collection: NftCollectionInterface) => (
                <NftTokenCard
                  account={account}
                  collectionId={collection.id}
                  key={collection.id}
                  openDetailedInformationModal={openDetailedInformationModal}
                  token={{ tokenId: '1' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <WalletFilters
        clearCheckedValues={clearCheckedValues}
        collections={collections}
        filterCurrent={onCollectionCheck}
        isShowCollection={showCollectionsFilter}
        openFilters={openPanel === 'filters'}
        selectedCollections={selectedCollections}
        setIsShowCollection={toggleCollectionsFilter}
      />
      <WalletSort
        filters={filters}
        openSort={openPanel === 'sort'}
        setFilters={setFilters}
      />
      <div className={`nft-wallet--footer ${openPanel === 'sort' ? 'hide' : ''}`}>
        { openPanel === 'tokens' && (
          <>
            <Button
              className='footer-button'
              fluid
              onClick={setOpenPanel && setOpenPanel.bind(null, 'filters')}
              primary
            >
              Filters and sort
            </Button>
          </>
        )}
        { openPanel === 'filters' && (
          <Button
            className='footer-button clear'
            fluid
            onClick={clearAllFilters}
          >
            Clear all filters
          </Button>
        )}
      </div>
    </div>
  );
}

export default React.memo(NftWallet);
