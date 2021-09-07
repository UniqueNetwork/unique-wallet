// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import type { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';

import NftTokenCard from '@polkadot/app-nft-wallet/components/NftTokenCard';
import { OpenPanelType } from '@polkadot/apps-routing/types';
import { TransferModal } from '@polkadot/react-components';
import { useCollections } from '@polkadot/react-hooks';

import CollectionFilter from '../../components/CollectionFilter';
// import { useCollections } from '@polkadot/react-hooks';
import TokensSearch from '../../components/TokensSearch';
// import NftCollectionCard from '../../components/NftCollectionCard';
// import noMyTokensIcon from './noMyTokensIcon.svg';

interface NftWalletProps {
  account?: string;
  addCollection: (collection: NftCollectionInterface) => void;
  collections: NftCollectionInterface[];
  openPanel?: OpenPanelType;
  removeCollectionFromList: (collectionToRemove: string) => void;
  setOpenPanel?: (openPanel: OpenPanelType) => void;
  setCollections: (collections: (prevCollections: NftCollectionInterface[]) => (NftCollectionInterface[])) => void;
  setShouldUpdateTokens: (value: string) => void;
  shouldUpdateTokens?: string;
}

function NftWallet ({ account, addCollection, collections, openPanel, removeCollectionFromList, setCollections, setOpenPanel, setShouldUpdateTokens, shouldUpdateTokens }: NftWalletProps): React.ReactElement {
  const [openTransfer, setOpenTransfer] = useState<{ collection: NftCollectionInterface, tokenId: string, balance: number } | null>(null);
  const [showCollectionsFilter, toggleCollectionsFilter] = useState<boolean>(true);
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
  const currentAccount = useRef<string | null | undefined>();
  const { presetCollections } = useCollections();
  const cleanup = useRef<boolean>(false);
  const history = useHistory();

  /* const openTransferModal = useCallback((collection: NftCollectionInterface, tokenId: string, balance: number) => {
    setOpenTransfer({ balance, collection, tokenId });
  }, []); */

  const updateTokens = useCallback((collectionId) => {
    setShouldUpdateTokens(collectionId);
  }, [setShouldUpdateTokens]);

  const clearCheckedValues = useCallback(() => {
    setSelectedCollections([]);
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
    currentAccount.current = account;
    setShouldUpdateTokens('all');
  }, [account, setShouldUpdateTokens]);

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
      { openTransfer && openTransfer.tokenId && openTransfer.collection && (
        <TransferModal
          account={account}
          closeModal={setOpenTransfer.bind(null, null)}
          collection={openTransfer.collection}
          reFungibleBalance={openTransfer.balance}
          tokenId={openTransfer.tokenId}
          updateTokens={updateTokens}
        />
      )}
    </div>
  );
}

export default React.memo(NftWallet);
