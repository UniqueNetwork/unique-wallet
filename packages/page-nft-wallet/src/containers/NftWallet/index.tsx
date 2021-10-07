// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import type { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import equal from 'deep-equal';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';
import Loader from 'semantic-ui-react/dist/commonjs/elements/Loader';

import NftTokenCard from '@polkadot/app-nft-wallet/components/NftTokenCard';
import { OpenPanelType } from '@polkadot/apps-routing/types';
import { useCollections, useIsMountedRef } from '@polkadot/react-hooks';

import CollectionFilter from '../../components/CollectionFilter';
import WalletFilters from '../../components/WalletFilters';
import WalletSort from '../../components/WalletSort';
import noMyTokensIcon from './noMyTokensIcon.svg';

export type Filters = {
  collectionIds: string[];
  sort: string;
}

interface NftWalletProps {
  account?: string;
  addCollection: (collection: NftCollectionInterface) => void;
  collections: NftCollectionInterface[];
  openPanel?: OpenPanelType;
  collectionId?: string;
  setOpenPanel?: (openPanel: OpenPanelType) => void;
  setCollections: (collections: NftCollectionInterface[]) => void;
}

const defaultFilters = {
  collectionIds: [],
  sort: 'desc(creationDate)'
};

export type MyTokensType = { collectionId: string, tokenId: string };

function NftWallet ({ account, collectionId, collections, openPanel, setCollections, setOpenPanel }: NftWalletProps): React.ReactElement {
  const storageFilters = JSON.parse(sessionStorage.getItem('filters') as string) as Filters;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const initialFilters = storageFilters && !equal(storageFilters, defaultFilters) ? storageFilters : defaultFilters;
  const [showCollectionsFilter, toggleCollectionsFilter] = useState<boolean>(true);
  const [selectedCollections, setSelectedCollections] = useState<string[]>(collectionId ? [collectionId] : []);
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [myTokens, setMyTokens] = useState<MyTokensType[]>([]);
  const [tokensLoading, setTokensLoading] = useState<boolean>(true);
  const [myFilteredTokens, setMyFilteredTokens] = useState<MyTokensType[]>([]);
  const { getTokensOfCollection, presetCollections } = useCollections();
  const mountedRef = useIsMountedRef();
  const history = useHistory();

  const clearCheckedValues = useCallback(() => {
    mountedRef && setSelectedCollections([]);
  }, [mountedRef]);

  const clearAllFilters = useCallback(() => {
    if (mountedRef) {
      setFilters(defaultFilters);
      setSelectedCollections([]);
      sessionStorage.removeItem('filters');
      setOpenPanel && setOpenPanel('tokens');
    }
  }, [mountedRef, setOpenPanel]);

  const onCollectionCheck = useCallback((id: string) => {
    let newIds: string[] = [];

    if (selectedCollections.includes(id)) {
      newIds = selectedCollections.filter((item) => item !== id);
    } else {
      newIds = [...selectedCollections, id];
    }

    mountedRef && setSelectedCollections(newIds);
  }, [mountedRef, selectedCollections]);

  const initializeCollections = useCallback(async () => {
    const firstCollections: NftCollectionInterface[] = await presetCollections();

    if (firstCollections?.length) {
      mountedRef.current && setCollections(firstCollections);

      if (account) {
        const myTokensList: MyTokensType[] = [];

        mountedRef && setTokensLoading(true);

        for (let i = 0; i < firstCollections.length; i++) {
          const tokens: number[] = (await getTokensOfCollection(firstCollections[i].id, account)) as unknown as number[];

          if (tokens?.length) {
            for (let j = 0; j < tokens.length; j++) {
              myTokensList.push({
                collectionId: firstCollections[i].id,
                tokenId: tokens[j].toString()
              });
            }
          }
        }

        mountedRef && setTokensLoading(false);
        mountedRef && setMyTokens(myTokensList);
      }
    }
  }, [account, getTokensOfCollection, mountedRef, setCollections, presetCollections]);

  const openDetailedInformationModal = useCallback((collectionId: string, tokenId: string) => {
    history.push(`/myStuff/token-details?collectionId=${collectionId}&tokenId=${tokenId}`);
  }, [history]);

  const setFilteredTokens = useCallback(() => {
    if (myTokens?.length && mountedRef) {
      if (selectedCollections.length) {
        setMyFilteredTokens(myTokens.filter((item: MyTokensType) => selectedCollections.includes(item.collectionId)));
      } else {
        setMyFilteredTokens(myTokens);
      }
    }
  }, [mountedRef, myTokens, selectedCollections]);

  useEffect(() => {
    setFilteredTokens();
  }, [setFilteredTokens]);

  useEffect(() => {
    void initializeCollections();
  }, [initializeCollections]);

  return (
    <div className={`nft-wallet ${openPanel || ''}`}>
      <div className='nft-wallet--row'>
        <CollectionFilter
          clearCheckedValues={clearCheckedValues}
          collections={collections}
          filterCurrent={onCollectionCheck}
          isShowCollection={showCollectionsFilter}
          myTokens={myTokens}
          selectedCollections={selectedCollections}
          setIsShowCollection={toggleCollectionsFilter}
        />
        <div className='collection-list'>
          {/* <div className='unique-card'>
            <TokensSearch
              account={account}
              addCollection={addCollection}
              collections={collections}
            />
          </div> */}
          <div
            className={`unique-card ${myFilteredTokens.length ? '' : 'empty'}`}
          >
            { tokensLoading && (
              <Loader
                active
                className='load-info'
                inline='centered'
              />
            )}
            { myFilteredTokens.length
              ? (
                <div className='tokens-list'>                    {
                  myFilteredTokens.map(({ collectionId, tokenId }: MyTokensType) => (
                    <NftTokenCard
                      account={account}
                      collectionId={collectionId}
                      key={`${collectionId}-${tokenId}`}
                      openDetailedInformationModal={openDetailedInformationModal}
                      tokenId={tokenId}
                    />
                  ))
                }
                </div>
              )
              : !tokensLoading && (
                <div className='no-tokens'>
                  <img
                    alt='no tokens'
                    src={noMyTokensIcon as string}
                  />
                  <p className='no-tokens-text'>You have no tokens</p>
                </div>
              )
            }
          </div>
        </div>
      </div>
      { openPanel === 'filters' && (
        <WalletFilters
          clearCheckedValues={clearCheckedValues}
          collections={collections}
          filterCurrent={onCollectionCheck}
          isShowCollection={showCollectionsFilter}
          myTokens={myTokens}
          selectedCollections={selectedCollections}
          setIsShowCollection={toggleCollectionsFilter}
        />
      )}
      { openPanel === 'sort' && (
        <WalletSort
          filters={filters}
          setFilters={setFilters}
        />
      )}
      <div className='nft-wallet--footer'>
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
        { (openPanel === 'filters' || openPanel === 'sort') && (
          <Button
            className='footer-button'
            fluid
            onClick={setOpenPanel && setOpenPanel.bind(null, 'tokens')}
          >
              SHOW
          </Button>
        )}
        { openPanel === 'filters' && (
          <Button
            className='footer-button clear'
            fluid
            onClick={clearAllFilters}
          >Clear all
          </Button>
        )}
      </div>
    </div>
  );
}

export default React.memo(NftWallet);
