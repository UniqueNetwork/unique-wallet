// Copyright 2017-2021 @polkadot/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import BN from 'bn.js';
import React, { useCallback, useEffect, useState } from 'react';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';
import Loader from 'semantic-ui-react/dist/commonjs/elements/Loader';

import { checkAddress } from '@polkadot/phishing';
import { MarkError, Modal, TxButton } from '@polkadot/react-components';
import { getAddressName } from '@polkadot/react-components/util';
import { useSelectedApi } from '@polkadot/react-hooks';
import { formatKsmBalance } from '@polkadot/react-hooks/useKusamaApi';
import FormatBalance from '@polkadot/react-query/FormatBalance';
import { keyring } from '@polkadot/ui-keyring';
import { BN_HUNDRED, BN_ZERO, formatBalance, isFunction } from '@polkadot/util';

import InputAddressLight from './InputAddressLight';
import InputBalanceWithMax from './InputBalanceWithMax';

interface Props {
  className?: string;
  isKusama?: boolean;
  onClose: () => void;
  recipientId?: string;
  senderId: string;
}

async function checkPhishing (_senderId: string | undefined, recipientId: string | undefined): Promise<[string | null, string | null]> {
  return [
    // not being checked atm
    // senderId
    //   ? await checkAddress(senderId)
    //   : null,
    null,
    recipientId
      ? await checkAddress(recipientId)
      : null
  ];
}

function TransferModal ({ isKusama, onClose, senderId }: Props): React.ReactElement<Props> {
  const [recipientId, setRecipientId] = useState<string>();
  const { currentApi: api, currentBalanceAll: balances } = useSelectedApi(senderId, isKusama);
  const { currentBalanceAll: recipientBalances } = useSelectedApi(recipientId, isKusama);
  const [amount, setAmount] = useState<BN | undefined>(BN_ZERO);
  const [isAddressError, setIsAddressError] = useState<boolean>(false);
  const [isProtected] = useState(true);
  const [accountName, setAccountName] = useState<string>('');
  const [transferFees, setTransferFees] = useState<BN>();
  // maxTransfer - max amount we can transfer without removing out account, noFees - true if we have too low balance to pay fees.
  const [[maxTransfer, noFees], setMaxTransfer] = useState<[BN | null, boolean]>([null, false]);
  const [[, recipientPhish], setPhishing] = useState<[string | null, string | null]>([null, null]);

  const getAccountName = useCallback(() => {
    if (senderId) {
      const [,, name] = getAddressName(senderId, null, 'defaultName');

      setAccountName(name);
    }
  }, [senderId]);

  const onSetRecipientAddress = useCallback((value: string | undefined) => {
    try {
      if (value) {
        keyring.decodeAddress(value);
        setIsAddressError(false);
        setRecipientId(value);
      }
    } catch (e) {
      setIsAddressError(true);
      setRecipientId(undefined);
    }
  }, [setIsAddressError, setRecipientId]);

  const checkBalanceEnough = useCallback(() => {
    const toId = recipientId as string;

    if (api && balances && balances.accountId.eq(senderId) && senderId && toId && isFunction(api.rpc.payment?.queryInfo)) {
      setTimeout((): void => {
        try {
          api.tx.balances
            .transfer(toId, balances.availableBalance)
            .paymentInfo(senderId)
            .then(({ partialFee }): void => {
              const adjFee = partialFee.muln(110).div(BN_HUNDRED);

              setTransferFees(adjFee);

              const max = balances.availableBalance.sub(adjFee);

              console.log('max', max);

              setMaxTransfer(
                max.gt(api.consts.balances.existentialDeposit as BN)
                  ? [max, false]
                  : [null, true]
              );
            })
            .catch(console.error);
        } catch (error) {
          console.error((error as Error).message);
        }
      }, 0);
    } else {
      setMaxTransfer([null, false]);
    }
  }, [api, balances, senderId, recipientId]);

  // set max transfer the sender can make
  useEffect((): void => {
    checkBalanceEnough();
  }, [checkBalanceEnough]);

  useEffect((): void => {
    checkPhishing(senderId, recipientId)
      .then(setPhishing)
      .catch(console.error);
  }, [senderId, recipientId]);

  useEffect(() => {
    getAccountName();
  }, [getAccountName]);

  // console.log('noFees', noFees, 'recipientId', recipientId, 'amount', amount?.toString(), 'recipientPhish', recipientPhish, 'maxTransfer', maxTransfer?.toString());

  return (
    <Modal
      className='unique-modal transfer-token'
      open
      size='tiny'
    >
      <Modal.Header>
        { !noFees && (
          <h2>Send funds</h2>
        )}
        { noFees && (
          <h2>Transaction is not possible</h2>
        )}
      </Modal.Header>
      <Modal.Content>
        { !noFees && (
          <div className='transfer-modal-content'>
            <div className='transfer-modal-content--row'>
              <header>From</header>
              <InputAddressLight
                defaultValue={senderId}
                isDisabled
                label={'send from account'}
                type='account'
              />
              { !balances && (
                <Loader
                  active
                  inline='centered'
                  key={'nft-wallet'}
                  size='tiny'
                />
              )}
              { (!!balances && isKusama) && (
                <span className='balance-value'>{formatKsmBalance(balances?.availableBalance)} KSM</span>
              )}
              { (!!balances && !isKusama) && (
                <FormatBalance
                  label={''}
                  value={balances?.availableBalance}
                />
              )}
            </div>
            <div className='transfer-modal-content--row'>
              <header>To</header>
              <InputAddressLight
                isError={isAddressError}
                label={'send to address'}
                onChange={onSetRecipientAddress}
                type='allPlus'
              />
              { !recipientBalances && (
                <Loader
                  active
                  inline='centered'
                  key={'nft-wallet'}
                  size='tiny'
                />
              )}
              { (isKusama && recipientBalances) && (
                <span className='balance-value'>{formatKsmBalance(recipientBalances.availableBalance)} KSM</span>
              )}
              { (!isKusama && recipientBalances) && (
                <FormatBalance
                  label={''}
                  value={recipientBalances.availableBalance}
                />
              )}
            </div>
            <InputBalanceWithMax
              autoFocus
              className='isSmall'
              help={'Type the amount you want to transfer. Note that you can select the unit on the right e.g sending 1 milli is equivalent to sending 0.001.'}
              isError={!noFees}
              isKusama={isKusama}
              isZeroable
              label={'amount'}
              maxTransfer={maxTransfer}
              onChange={setAmount}
              placeholder='Enter the amount'
              value={amount}
            />
            { transferFees && (
              <div className='fees-info'>
                A fee of ~ {isKusama ? `${formatKsmBalance(transferFees)} KSM` : `${formatBalance(transferFees)}`} can be applied to the transaction, unless the transaction is sponsored
              </div>
            )}
            { !transferFees && (
              <Loader
                active
                inline='centered'
                key={'nft-wallet'}
                size='tiny'
              />
            )}
            {/* @todo - sponsoring <MarkWarning content={`Next free transaction is possible in ${23} hours ${56} minutes.`} step={3} /> */}
          </div>
        )}
        { noFees && (
          <MarkError content={`Аccount ${accountName} requires more funds to cover the transaction fee.`} />
        )}
      </Modal.Content>
      <Modal.Actions onCancel={onClose}>
        { noFees && (
          <Button
            onClick={onClose}
          >
            OK
          </Button>
        )}
        { !noFees && senderId && (
          <TxButton
            accountId={senderId}
            isDisabled={!recipientId || !amount || !!recipientPhish}
            label={'Confirm'}
            onStart={onClose}
            params={[recipientId, amount]}
            tx={(isProtected && api?.tx.balances.transferKeepAlive) || api?.tx.balances.transfer}
          />
        )}
      </Modal.Actions>
    </Modal>
  );
}

export default React.memo(TransferModal);
