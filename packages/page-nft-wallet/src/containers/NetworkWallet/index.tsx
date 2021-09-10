// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import type { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';

import React, { useCallback, useContext } from 'react';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';

import { OpenPanelType } from '@polkadot/apps-routing/types';
import { ChainImg, CopyIcon } from '@polkadot/react-components';
import StatusContext from '@polkadot/react-components/Status/Context';
import { useBalances, useNetworkInfo, useToggle } from '@polkadot/react-hooks';
import { formatKsmBalance } from '@polkadot/react-hooks/useKusamaApi';
import { FormatBalance } from '@polkadot/react-query';

import TransferModal from '../../components/TransferModal';

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
  const { encodedKusamaAccount, fullBalance, fullKusamaBalance } = useBalances(account);
  const { chain, kusamaChain } = useNetworkInfo();
  const [isTransferOpen, toggleTransfer] = useToggle();
  const [isKusamaTransferOpen, toggleKusamaTransfer] = useToggle();
  const { queueAction } = useContext(StatusContext);

  const onGet = useCallback(() => {
    console.log('onGet');
  }, []);

  const _onCopy = useCallback(
    (address: string) => queueAction({
      account: address,
      action: 'clipboard',
      message: 'address copied',
      status: 'queued'
    }),
    [queueAction]
  );

  return (
    <div className='network-wallet'>
      <div className='network-wallet--block'>
        <div className='network-wallet--block--header'>
          Network tokens
        </div>
        <div className='network-wallet--block--body'>
          { kusamaChain && (
            <div className='token-item'>
              <div className='token-item--account'>
                <span>
                  <ChainImg
                    className='endpointIcon'
                    isInline
                    logo={kusamaChain.toLowerCase()}
                    withoutHl
                  />
                  {kusamaChain}
                </span>
                <span>
                  {encodedKusamaAccount}
                  <a onClick={account ? _onCopy.bind(null, account) : () => null }>
                    <CopyIcon color={'var(--input-placeholder-search-color)'} />
                  </a>
                </span>
              </div>
              <div className='token-item--balances'>
                <span className='token-item--balances--row'>
                  {formatKsmBalance(fullKusamaBalance?.freeBalance)} KSM
                </span>
                <span className='token-item--balances--row'>
                  <span>{formatKsmBalance(fullKusamaBalance?.availableBalance)} KSM transferrable</span>
                  <span>{formatKsmBalance(fullKusamaBalance?.lockedBalance)} KSM locked</span>
                </span>
              </div>
              <div className='token-item--actions'>
                <Button
                  onClick={toggleTransfer}
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
          )}
          <div className='token-item'>
            <div className='token-item--account'>
              <span>
                <ChainImg
                  className='endpointIcon'
                  isInline
                  withoutHl
                />
                {chain}
              </span>
              <span>
                {account}
                <a onClick={account ? _onCopy.bind(null, account) : () => null }>
                  <CopyIcon />
                </a>
              </span>
            </div>
            <div className='token-item--balances'>
              <span className='token-item--balances--row'>
                <FormatBalance
                  className='result'
                  value={fullBalance?.freeBalance}
                />
              </span>
              <span className='token-item--balances--row'>
                <span>
                  <FormatBalance
                    className='result'
                    value={fullBalance?.availableBalance}
                  /> transferable
                </span>
                <span>
                  <FormatBalance
                    className='result'
                    value={fullBalance?.lockedBalance}
                  /> locked
                </span>
              </span>
            </div>
            <div className='token-item--actions'>
              <Button
                onClick={toggleTransfer}
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
      { isTransferOpen && (
        <TransferModal
          key='modal-transfer'
          onClose={toggleTransfer}
          senderId={account}
        />
      )}
      { isKusamaTransferOpen && (
        <TransferModal
          key='modal-transfer'
          onClose={toggleKusamaTransfer}
          senderId={account}
        />
      )}
    </div>
  );
}

export default React.memo(NetworkWallet);
