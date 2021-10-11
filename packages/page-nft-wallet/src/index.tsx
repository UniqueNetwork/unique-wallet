// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// external imports
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header/Header';

import { NftDetails, Tabs } from '@polkadot/react-components';
// local imports and components
import { AppProps as Props } from '@polkadot/react-components/types';
import { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';

import NetworkWallet from './containers/NetworkWallet';
import NftWallet from './containers/NftWallet';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': 'tPRzYEcOvNkBZasYn7Vf8Jx5GJAZx'
  },
  uri: 'http://18.206.170.50:8082/v1/graphql'
});

function PageNftWallet ({ account, basePath, openPanel, setOpenPanel }: Props): React.ReactElement<Props> {
  const location = useLocation();
  const history = useHistory();
  const [shouldUpdateTokens, setShouldUpdateTokens] = useState<string>();
  const collectionsStorage: NftCollectionInterface[] = JSON.parse(localStorage.getItem('tokenCollections') || '[]') as NftCollectionInterface[];
  const [collections, setCollections] = useState<NftCollectionInterface[]>(collectionsStorage);
  // To get collection id in token page
  const [collectionId, setCollectionId] = useState<string>();

  const addCollection = useCallback((collection: NftCollectionInterface) => {
    setCollections((prevCollections: NftCollectionInterface[]) => {
      let newCollections = [...prevCollections];

      if (!prevCollections.find((prevCollection) => prevCollection.id === collection.id)) {
        newCollections = [...prevCollections, collection];
      }

      localStorage.setItem('tokenCollections', JSON.stringify(newCollections));

      return newCollections;
    });
  }, []);

  const removeCollectionFromList = useCallback((collectionToRemove: string) => {
    const newCollectionList = collections.filter((item: NftCollectionInterface) => item.id !== collectionToRemove);

    setCollections(newCollectionList);
    localStorage.setItem('tokenCollections', JSON.stringify(newCollectionList));
  }, [collections]);

  const items = useMemo(() => [
    {
      name: 'nft',
      text: 'NFT'
    },
    {
      disabled: true,
      name: 'RFT',
      text: 'RFT'
    },
    {
      name: 'tokens',
      text: 'Tokens'
    }
  ], []);

  useEffect(() => {
    if (location.pathname === '/myStuff') {
      history.push('/myStuff/nft');
    }
  }, [history, location]);

  return (
    <div className='my-tokens'>
      { !location.pathname.includes('token-details') && !location.pathname.includes('manage-') && openPanel === 'tokens' && (
        <>
          <Header as='h1'>My stuff</Header>
        </>
      )}
      { !location.pathname.includes('token-details') && !location.pathname.includes('manage-') && openPanel === 'tokens' && (
        <Tabs
          basePath={basePath}
          className='stuff-tabs'
          items={items}
        />
      )}
      { (openPanel === 'filters' || openPanel === 'sort') && (
        <Button.Group className='stuff-filter-tabs'>
          <Button
            onClick={setOpenPanel && setOpenPanel.bind(null, 'filters')}
            primary={openPanel === 'filters'}
          >
            Filter
          </Button>
          <Button
            onClick={setOpenPanel && setOpenPanel.bind(null, 'sort')}
            primary={openPanel === 'sort'}
          >
            Sort
          </Button>
        </Button.Group>
      )}
      <Switch>
        <Route path={`${basePath}/token-details`}>
          <NftDetails
            account={account || ''}
            setCollectionId={setCollectionId}
          />
        </Route>
        <Route path={`${basePath}/nft`}>
          <ApolloProvider client={client}>
            <NftWallet
              account={account}
              addCollection={addCollection}
              collectionId={collectionId}
              collections={collections}
              openPanel={openPanel}
              setCollections={setCollections}
              setOpenPanel={setOpenPanel}
            />
          </ApolloProvider>
        </Route>
        <Route path={`${basePath}/tokens`}>
          <NetworkWallet
            account={account}
            addCollection={addCollection}
            collections={collections}
            openPanel={openPanel}
            removeCollectionFromList={removeCollectionFromList}
            setCollections={setCollections}
            setOpenPanel={setOpenPanel}
            setShouldUpdateTokens={setShouldUpdateTokens}
            shouldUpdateTokens={shouldUpdateTokens}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default React.memo(PageNftWallet);
