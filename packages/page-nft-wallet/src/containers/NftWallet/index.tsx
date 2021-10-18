// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import equal from 'deep-equal';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useHistory } from 'react-router';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';
import Loader from 'semantic-ui-react/dist/commonjs/elements/Loader';

import NftTokenCard from '@polkadot/app-nft-wallet/components/NftTokenCard';
import { OpenPanelType } from '@polkadot/apps-routing/types';
import { useGraphQlCollectionsTokens, useGraphQlTokens, useIsMountedRef } from '@polkadot/react-hooks';

import CollectionFilter from '../../components/CollectionFilter';
import TokensSearch from '../../components/TokensSearch';
import WalletFilters from '../../components/WalletFilters';
import WalletSort from '../../components/WalletSort';
import noMyTokensIcon from './noMyTokensIcon.svg';

export type Filters = {
  collectionIds: string[];
  sort: 'asc' | 'desc';
}

interface NftWalletProps {
  account?: string;
  openPanel?: OpenPanelType;
  collectionId?: string;
  setOpenPanel?: (openPanel: OpenPanelType) => void;
}

const defaultFilters: Filters = {
  collectionIds: [],
  sort: 'desc'
};

export type MyTokensType = { collectionId: string, tokenId: string };
export type MyTokensListType = {
  [key: string]: MyTokensType
};

const limit = 10;

function NftWallet ({ account, collectionId, openPanel, setOpenPanel }: NftWalletProps): React.ReactElement {
  const storageFilters = JSON.parse(sessionStorage.getItem('filters') as string) as Filters;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const initialFilters = storageFilters && !equal(storageFilters, defaultFilters) ? storageFilters : defaultFilters;
  const [showCollectionsFilter, toggleCollectionsFilter] = useState<boolean>(true);
  const [filters, setFilters] = useState<Filters>(collectionId ? { ...initialFilters, collectionIds: [collectionId] } : initialFilters);
  const [myTokens, setMyTokens] = useState<MyTokensListType>({});
  const mountedRef = useIsMountedRef();
  const history = useHistory();
  const [page, setPage] = useState<number>(1);
  const { userCollections, userCollectionsIds } = useGraphQlCollectionsTokens(account);
  const { userTokens, userTokensLoading } = useGraphQlTokens(limit, (page - 1) * limit, filters.sort, filters.collectionIds?.length ? filters.collectionIds : userCollectionsIds, account);
  const tokensCount = userTokens?.tokens_aggregate?.aggregate?.count || 0;
  const hasMore = !!(tokensCount && Object.keys(myTokens).length < tokensCount);
  const currentFilter = useRef<Filters>(defaultFilters);

  const clearCheckedValues = useCallback(() => {
    mountedRef && setFilters((prevState) => ({ ...prevState, collectionIds: [] }));
  }, [mountedRef]);

  const clearAllFilters = useCallback(() => {
    if (mountedRef) {
      setFilters(defaultFilters);
      sessionStorage.removeItem('filters');
      setOpenPanel && setOpenPanel('tokens');
    }
  }, [mountedRef, setOpenPanel]);

  const onCollectionCheck = useCallback((id: string) => {
    let newIds: string[] = [];

    if (filters.collectionIds.includes(id)) {
      newIds = filters.collectionIds.filter((item) => item !== id);
    } else {
      newIds = [...filters.collectionIds, id];
    }

    mountedRef && setFilters((prevState) => ({ ...prevState, collectionIds: newIds }));
  }, [mountedRef, filters]);

  const initializeTokens = useCallback(() => {
    if (account && !userTokensLoading) {
      mountedRef.current && setMyTokens((prevState: MyTokensListType) => {
        const myTokensList: MyTokensListType = { ...prevState };

        for (let j = 0; j < userTokens.tokens.length; j++) {
          myTokensList[`${userTokens.tokens[j].collection_id}-${userTokens.tokens[j].token_id}`] = {
            collectionId: userTokens.tokens[j].collection_id.toString(),
            tokenId: userTokens.tokens[j].token_id.toString()
          };
        }

        return myTokensList;
      });
    }
  }, [account, mountedRef, userTokens, userTokensLoading]);

  const fetchScrolledData = useCallback(() => {
    !userTokensLoading && setPage((prevPage: number) => prevPage + 1);
  }, [userTokensLoading]);

  const openDetailedInformationModal = useCallback((collectionId: string, tokenId: string) => {
    history.push(`/myStuff/token-details?collectionId=${collectionId}&tokenId=${tokenId}`);
  }, [history]);

  const refillTokens = useCallback(() => {
    if (currentFilter.current !== filters) {
      setPage(1);
      setMyTokens({});
      currentFilter.current = filters;
    }

    initializeTokens();
  }, [currentFilter, filters, initializeTokens]);

  useEffect(() => {
    refillTokens();
  }, [refillTokens]);

  return (
    <div className={`nft-wallet ${openPanel || ''}`}>
      <div className='nft-wallet--row'>
        <CollectionFilter
          clearCheckedValues={clearCheckedValues}
          collections={userCollections}
          filterCurrent={onCollectionCheck}
          isShowCollection={showCollectionsFilter}
          selectedCollections={filters.collectionIds}
          setIsShowCollection={toggleCollectionsFilter}
        />
        <div className='collection-list'>
          <div className='unique-card'>
            <TokensSearch
              account={account}
              filters={filters}
              setFilters={setFilters}
              tokensCount={tokensCount}
            />
          </div>
          <div className={`unique-card ${Object.keys(myTokens).length ? '' : 'empty'}`}>
            { (userTokensLoading && Object.keys(myTokens).length === 0) && (
              <Loader
                active
                className='load-info'
                inline='centered'
              />
            )}
            { Object.keys(myTokens).length > 0 && (
              <InfiniteScroll
                hasMore={hasMore}
                initialLoad={false}
                loadMore={fetchScrolledData}
                pageStart={1}
                threshold={200}
                useWindow={true}
              >
                <div className='tokens-list'>
                  {Object.values(myTokens).map(({ collectionId, tokenId }: MyTokensType) => (
                    <NftTokenCard
                      account={account}
                      collectionId={collectionId}
                      key={`${collectionId}-${tokenId}`}
                      openDetailedInformationModal={openDetailedInformationModal}
                      tokenId={tokenId}
                    />
                  ))}
                  { userTokensLoading && (
                    <Loader
                      active
                      className='load-info'
                      inline='centered'
                    />
                  )}
                </div>
              </InfiniteScroll>
            )}
            {(!userTokensLoading && !tokensCount) && (
              <div className='no-tokens'>
                <img
                  alt='no tokens'
                  src={noMyTokensIcon as string}
                />
                <p className='no-tokens-text'>You have no tokens</p>
              </div>
            )}
          </div>
        </div>
      </div>
      { openPanel === 'filters' && (
        <WalletFilters
          clearCheckedValues={clearCheckedValues}
          collections={userCollections}
          filterCurrent={onCollectionCheck}
          isShowCollection={showCollectionsFilter}
          selectedCollections={filters.collectionIds}
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
