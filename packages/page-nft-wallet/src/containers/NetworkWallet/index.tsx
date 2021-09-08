// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import type { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';

import React, {useCallback} from 'react';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';

import { OpenPanelType } from '@polkadot/apps-routing/types';
import { AddressInfo, AddressSmall } from '@polkadot/react-components';
import { useBalances } from '@polkadot/react-hooks';
import { formatKsmBalance } from '@polkadot/react-hooks/useKusamaApi';
import { FormatBalance } from '@polkadot/react-query';

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
  const { fullBalance, fullKusamaBalance } = useBalances(account);

  console.log('fullBalance', fullBalance);

  const onSend = useCallback(() => {
    console.log('onSend');
  }, []);

  const onGet = useCallback(() => {
    console.log('onGet');
  }, []);

  return (
    <div className='network-wallet'>
      <div className='network-wallet--block'>
        <div className='network-wallet--block--header'>
          Network tokens
        </div>
        <div className='network-wallet--block--body'>
          <div className='token-item'>
            <AddressSmall value={account} />
            <div className='token-item--balances'>
              <strong>{formatKsmBalance(fullBalance?.freeBalance)} KSM</strong>
              <small>
                {formatKsmBalance(fullKusamaBalance?.availableBalance)} KSM transferrable
              </small>
              <small>
                {formatKsmBalance(fullKusamaBalance?.lockedBalance)} KSM locked
              </small>
            </div>
          </div>
          <div className='token-item'>
            <AddressSmall value={account} />
            <div className='token-item--balances'>
              <strong>
                <FormatBalance
                  className='result'
                  value={fullBalance?.freeBalance}
                />
              </strong>
              <small>
                <FormatBalance
                  className='result'
                  value={fullBalance?.availableBalance}
                /> transferable
              </small>
              <small>
                {/* {formatStrBalance(15, fullBalance?.lockedBalance)} UNQ locked */}
                <FormatBalance
                  className='result'
                  value={fullBalance?.lockedBalance}
                /> locked
              </small>
            </div>
            <div className='token-item--actions'>
              <Button
                onClick={onSend}
              >
                Send
              </Button>
              <Button
                onClick={onGet}
              >
                Get
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(NetworkWallet);
