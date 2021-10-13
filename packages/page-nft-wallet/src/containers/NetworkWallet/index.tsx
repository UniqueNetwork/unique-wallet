// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk';
import React, { useCallback, useContext } from 'react';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';
import Loader from 'semantic-ui-react/dist/commonjs/elements/Loader';

import GetTestUNQModal from '@polkadot/app-nft-wallet/components/GetTestUNQModal';
import { OpenPanelType } from '@polkadot/apps-routing/types';
import { ChainImg, CopyIcon } from '@polkadot/react-components';
import StatusContext from '@polkadot/react-components/Status/Context';
import { useBalances, useNetworkInfo, useToggle } from '@polkadot/react-hooks';
import { formatKsmBalance } from '@polkadot/react-hooks/useKusamaApi';
import { FormatBalance } from '@polkadot/react-query';
import { formatBalance } from '@polkadot/util';

import TransferModal from '../../components/TransferModal';

interface NftWalletProps {
  account?: string;
  openPanel?: OpenPanelType;
  setOpenPanel?: (openPanel: OpenPanelType) => void;
  setShouldUpdateTokens: (value: string) => void;
  shouldUpdateTokens?: string;
}

function NetworkWallet ({ account }: NftWalletProps): React.ReactElement {
  const { encodedKusamaAccount, fullBalance, fullKusamaBalance } = useBalances(account);
  const { chain, kusamaChain } = useNetworkInfo();
  const [isTransferOpen, toggleTransfer] = useToggle();
  const [isKusamaTransferOpen, toggleKusamaTransfer] = useToggle();
  const [isGetTestUNQModalOpen, toggleGetTestUNQModal] = useToggle();
  const { queueAction } = useContext(StatusContext);
  const [major, rest] = formatBalance(fullBalance?.availableBalance);

  const copyAddress = useCallback(
    (account: string) => {
      void navigator.clipboard.writeText(account);

      return queueAction({
        account,
        action: 'clipboard',
        message: 'address copied',
        status: 'queued'
      });
    },
    [queueAction]
  );

  const handleGetKSMClickByRamp = useCallback(() => {
    const RampModal = new RampInstantSDK({
      hostAppName: 'Maker DAO',
      hostLogoUrl: `${window.location.origin}/logos/logoForRamp.svg`,
      swapAsset: 'KSM',
      variant: 'auto'
    });

    RampModal.show();
  }, []);

  const onCopyKusamaAccount = useCallback(() => {
    encodedKusamaAccount && copyAddress(encodedKusamaAccount);
  }, [copyAddress, encodedKusamaAccount]);

  const onCopyAccount = useCallback(() => {
    account && copyAddress(account);
  }, [account, copyAddress]);

  return (
    <div className='network-wallet'>
      <div className='network-wallet--block'>
        <div className='network-wallet--block--header'>
          Network tokens
        </div>
        <div className='network-wallet--block--body'>
          <div className='token-item'>
            <div className='token-item--account'>
              <span>
                { !!chain && (
                  <>
                    <ChainImg
                      className='endpointIcon'
                      isInline
                      withoutHl
                    />
                    {chain}
                  </>
                )}
                { !chain && (
                  <Loader
                    active
                    inline='centered'
                    key={'nft-wallet'}
                    size='tiny'
                  />
                )}
              </span>
              <span>
                {account}
                <a
                  onClick={onCopyAccount}
                >
                  <CopyIcon color={'var(--input-placeholder-search-color)'} />
                </a>
              </span>
            </div>
            <div className='token-item--balances'>
              <span className='token-item--balances--row'>
                { !fullBalance && (
                  <Loader
                    active
                    inline='centered'
                    key={'nft-wallet'}
                    size='tiny'
                  />
                )}
                { fullBalance && (
                  <FormatBalance
                    className='result'
                    value={fullBalance?.freeBalance}
                  />
                )}
              </span>
              <span className='token-item--balances--row'>
                <span>
                  { !fullBalance && (
                    <Loader
                      active
                      inline='centered'
                      key={'nft-wallet'}
                      size='tiny'
                    />
                  )}
                  { fullBalance && (
                    <>
                      <FormatBalance
                        className='result'
                        value={fullBalance?.availableBalance}
                      /> transferable
                    </>
                  )}
                </span>
                <span>
                  { !fullBalance && (
                    <Loader
                      active
                      inline='centered'
                      key={'nft-wallet'}
                      size='tiny'
                    />
                  )}
                  { fullBalance && (
                    <>
                      <FormatBalance
                        className='result'
                        value={fullBalance?.lockedBalance}
                      /> locked
                    </>
                  )}
                </span>
              </span>
            </div>
            <div className='token-item--actions'>
              <Button
                disabled={!+major && !+rest}
                onClick={toggleTransfer}
              >
                  Send
              </Button>
              <Button
                onClick={toggleGetTestUNQModal}
              >
                  Get
              </Button>
            </div>
          </div>
          <div className='token-item'>
            <div className='token-item--account'>
              <span>
                { !!kusamaChain && (
                  <>
                    <ChainImg
                      className='endpointIcon'
                      isInline
                      logo={kusamaChain.toLowerCase()}
                      withoutHl
                    />
                    {kusamaChain}
                  </>
                )}
                { !kusamaChain && (
                  <Loader
                    active
                    inline='centered'
                    key={'nft-wallet'}
                    size='tiny'
                  />
                )}
              </span>
              <span>
                {encodedKusamaAccount}
                <a
                  onClick={onCopyKusamaAccount}
                >
                  <CopyIcon color={'var(--input-placeholder-search-color)'} />
                </a>
              </span>
            </div>
            <div className='token-item--balances'>
              <span className='token-item--balances--row'>
                { !fullKusamaBalance && (
                  <Loader
                    active
                    inline='centered'
                    key={'nft-wallet'}
                    size='tiny'
                  />
                )}
                { fullKusamaBalance && (
                  <>
                    {formatKsmBalance(fullKusamaBalance?.freeBalance)} KSM
                  </>
                )}
              </span>
              <span className='token-item--balances--row'>
                <span>
                  { !fullKusamaBalance && (
                    <Loader
                      active
                      inline='centered'
                      key={'nft-wallet'}
                      size='tiny'
                    />
                  )}
                  { fullKusamaBalance && (
                    <>
                      {formatKsmBalance(fullKusamaBalance?.availableBalance)} KSM transferrable
                    </>
                  )}
                </span>
                <span>
                  { !fullKusamaBalance && (
                    <Loader
                      active
                      inline='centered'
                      key={'nft-wallet'}
                      size='tiny'
                    />
                  )}
                  { fullKusamaBalance && (
                    <>
                      {formatKsmBalance(fullKusamaBalance?.lockedBalance)} KSM locked
                    </>
                  )}
                </span>
              </span>
            </div>
            <div className='token-item--actions'>
              <Button
                disabled={!+formatKsmBalance(fullKusamaBalance?.availableBalance)}
                onClick={toggleKusamaTransfer}
              >
                Send
              </Button>
              <Button
                disabled={true}
                onClick={handleGetKSMClickByRamp}
              >
                Get
              </Button>
            </div>
          </div>
        </div>
      </div>
      { (isTransferOpen && account) && (
        <TransferModal
          key='modal-transfer'
          onClose={toggleTransfer}
          senderId={account}
        />
      )}
      { (isKusamaTransferOpen && account) && (
        <TransferModal
          isKusama
          key='modal-transfer'
          onClose={toggleKusamaTransfer}
          senderId={account}
        />
      )}
      { isGetTestUNQModalOpen && (
        <GetTestUNQModal
          key='modal-transfer'
          onClose={toggleGetTestUNQModal}
        />
      )}
    </div>
  );
}

export default React.memo(NetworkWallet);
