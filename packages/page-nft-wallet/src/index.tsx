// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

// external imports
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header/Header';

import { NftDetails, Tabs } from '@polkadot/react-components';
// local imports and components
import { AppProps as Props } from '@polkadot/react-components/types';
import { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';

import NetworkWallet from './containers/NetworkWallet';
import NftWallet from './containers/NftWallet';

function PageNftWallet ({ account, basePath, openPanel, setOpenPanel }: Props): React.ReactElement<Props> {
  const location = useLocation();
  const history = useHistory();
  const [shouldUpdateTokens, setShouldUpdateTokens] = useState<string>();
  const collectionsStorage: NftCollectionInterface[] = JSON.parse(localStorage.getItem('tokenCollections') || '[]') as NftCollectionInterface[];
  const [collections, setCollections] = useState<NftCollectionInterface[]>(collectionsStorage);

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
      { !location.pathname.includes('token-details') && !location.pathname.includes('manage-') && (
        <>
          <Header as='h1'>My stuff</Header>
        </>
      )}
      { !location.pathname.includes('token-details') && !location.pathname.includes('manage-') && (
        <Tabs
          basePath={basePath}
          className='stuff-tabs'
          items={items}
        />
      )}
      <Switch>
        <Route path={`${basePath}/token-details`}>
          <NftDetails
            account={account || ''}
          />
        </Route>
        <Route path={`${basePath}/nft`}>
          <NftWallet
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
