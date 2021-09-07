// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import type { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';

import React from 'react';

import { OpenPanelType } from '@polkadot/apps-routing/types';

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

function NetworkWallet ({ account, addCollection, collections, openPanel, removeCollectionFromList, setCollections, setOpenPanel, setShouldUpdateTokens, shouldUpdateTokens }: NftWalletProps): React.ReactElement {
  return (
    <div className='network-wallet'>
      Tokens
    </div>
  );
}

export default React.memo(NetworkWallet);
