// Copyright 2017-2021 @polkadot/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import type { AccountInfoWithProviders, AccountInfoWithRefCount } from '@polkadot/types/interfaces';

import BN from 'bn.js';
import React, { useCallback, useEffect, useState } from 'react';

import { checkAddress } from '@polkadot/phishing';
import { MarkWarning, Modal, TxButton } from '@polkadot/react-components';
import closeIcon from '@polkadot/react-components/TransferModal/closeIconBlack.svg';
import { useSelectedApi } from '@polkadot/react-hooks';
import { formatKsmBalance } from '@polkadot/react-hooks/useKusamaApi';
import FormatBalance from '@polkadot/react-query/FormatBalance';
import { BN_HUNDRED, BN_ZERO, isFunction } from '@polkadot/util';

import InputAddressLight from './InputAddressLight';
import InputBalanceWithMax from './InputBalanceWithMax';

interface Props {
  className?: string;
  isKusama?: boolean;
  onClose: () => void;
  recipientId?: string;
  senderId: string;
}

function isRefcount (accountInfo: AccountInfoWithProviders | AccountInfoWithRefCount): accountInfo is AccountInfoWithRefCount {
  return !!(accountInfo as AccountInfoWithRefCount).refcount;
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

function TransferModal ({ isKusama, onClose, recipientId: propRecipientId, senderId: propSenderId }: Props): React.ReactElement<Props> {
  const [recipientId, setRecipientId] = useState<string>();
  const { currentAccountInfo: accountInfo, currentApi: api, currentBalanceAll: balances } = useSelectedApi(propSenderId, isKusama);
  const { currentBalanceAll: recipientBalances } = useSelectedApi(recipientId, isKusama);
  const [amount, setAmount] = useState<BN | undefined>(BN_ZERO);
  const [isProtected] = useState(true);
  const [hasAvailable, setHasAvailable] = useState(true);
  const [isAll] = useState(false);
  const [[maxTransfer, noFees], setMaxTransfer] = useState<[BN | null, boolean]>([null, false]);
  const [[, recipientPhish], setPhishing] = useState<[string | null, string | null]>([null, null]);

  const onCloseModal = useCallback(() => {
    console.log('onClose');
  }, []);

  /* const checkBalanceEnough = useCallback(async () => {
    if (api && senderId && recipientId && amount) {
      const transferFee = await api?.tx.balances.transfer(recipientId, amount).paymentInfo(senderId) as { partialFee: BN };

      if (transferFee && (!balances?.availableBalance || balances?.availableBalance.sub(transferFee.partialFee).lt(api.consts.balances.existentialDeposit))) {
        setBalanceTooLow(true);
      } else {
        setBalanceTooLow(false);
      }
    }
  }, [account, api, balance, collection, decimalPoints, recipient, tokenId, tokenPart]); */

  // set max transfer the sender can make
  useEffect((): void => {
    const toId = propRecipientId || recipientId as string;

    if (api && balances && balances.accountId.eq(propSenderId) && propSenderId && toId && isFunction(api.rpc.payment?.queryInfo)) {
      setTimeout((): void => {
        try {
          api.tx.balances
            .transfer(toId, balances.availableBalance)
            .paymentInfo(propSenderId)
            .then(({ partialFee }): void => {
              const adjFee = partialFee.muln(110).div(BN_HUNDRED);
              const maxTransfer = balances.availableBalance.sub(adjFee);

              setMaxTransfer(
                maxTransfer.gt(api.consts.balances.existentialDeposit)
                  ? [maxTransfer, false]
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
  }, [api, balances, propRecipientId, propSenderId, recipientId]);

  useEffect((): void => {
    checkPhishing(propSenderId, propRecipientId || recipientId)
      .then(setPhishing)
      .catch(console.error);
  }, [propRecipientId, propSenderId, recipientId]);

  const noReference = accountInfo
    ? isRefcount(accountInfo)
      ? accountInfo.refcount.isZero()
      : accountInfo.consumers.isZero()
    : true;

  const canToggleAll = balances && balances.accountId.eq(propSenderId) && maxTransfer && noReference;

  console.log('currentApi', isKusama);

  const accountName = 'AccountName';

  return (
    <Modal
      className='unique-modal'
      onClose={onClose}
      open
      size='tiny'
    >
      <Modal.Header>
        <h2>Send funds</h2>
        <img
          alt='Close modal'
          onClick={onClose}
          src={closeIcon as string}
        />
      </Modal.Header>
      <Modal.Content>
        <div className='transfer-modal-content'>
          <div className='transfer-modal-content--row'>
            <header>From</header>
            <InputAddressLight
              defaultValue={propSenderId}
              isDisabled
              label={'send from account'}
              type='account'
            />
            { isKusama && (
              <span>{formatKsmBalance(balances?.availableBalance)} KSM</span>
            )}
            { !isKusama && (
              <FormatBalance
                label={''}
                value={balances?.availableBalance}
              />
            )}
          </div>
          <div className='transfer-modal-content--row'>
            <header>To</header>
            <InputAddressLight
              defaultValue={propRecipientId}
              isDisabled={!!propRecipientId}
              label={'send to address'}
              onChange={setRecipientId}
              type='allPlus'
            />
            { isKusama && (
              <span>{formatKsmBalance(recipientBalances?.availableBalance)} KSM</span>
            )}
            { !isKusama && (
              <FormatBalance
                label={''}
                value={recipientBalances?.availableBalance}
              />
            )}
          </div>
          {/* <InputBalance
            autoFocus
            className='isSmall'
            defaultValue={maxTransfer}
            help={'The full account balance to be transferred, minus the transaction fees'}
            isError={!hasAvailable}
            isZeroable
            key={maxTransfer?.toString()}
            label={'transferrable minus fees'}
          /> */}
          <InputBalanceWithMax
            autoFocus
            className='isSmall'
            help={'Type the amount you want to transfer. Note that you can select the unit on the right e.g sending 1 milli is equivalent to sending 0.001.'}
            isError={!hasAvailable}
            isZeroable
            label={'amount'}
            onChange={setAmount}
          />
          {/* {canToggleAll && isAll
            ? (
              <InputBalance
                autoFocus
                className='isSmall'
                defaultValue={maxTransfer}
                help={'The full account balance to be transferred, minus the transaction fees'}
                isDisabled
                key={maxTransfer?.toString()}
                label={'transferrable minus fees'}
              />
            )
            : (
              <InputBalance
                autoFocus
                className='isSmall'
                help={'Type the amount you want to transfer. Note that you can select the unit on the right e.g sending 1 milli is equivalent to sending 0.001.'}
                isError={!hasAvailable}
                isZeroable
                label={'amount'}
                onChange={setAmount}
              />
            )
          } */}
          <MarkWarning content={'There is an existing reference count on the sender account. As such the account cannot be reaped from the state.'} />

          {/* {!isProtected && !noReference && (
            <MarkWarning content={'There is an existing reference count on the sender account. As such the account cannot be reaped from the state.'} />
          )}
          */}
          {/* @todo - sponsoring <MarkWarning content={`Next free transaction is possible in ${23} hours ${56} minutes.`} /> */}
          <MarkWarning content={`Аccount ${accountName} requires more funds to cover the transaction fee.`} />
          <div className='fees-info'>
            A fee of ~ 0.000000000000052 testUNQ can be applied to the transaction, unless the transaction is sponsored
          </div>
          {noFees && (
            <MarkWarning content={`Аccount ${accountName} requires more funds to cover the transaction fee.`} />
          )}
        </div>
      </Modal.Content>
      <Modal.Actions onCancel={onCloseModal}>
        { propSenderId && (
          <TxButton
            accountId={propSenderId}
            icon='paper-plane'
            isDisabled={!hasAvailable || !(propRecipientId || recipientId) || !amount || !!recipientPhish}
            label={'Make Transfer'}
            onStart={onCloseModal}
            params={
              canToggleAll && isAll
                ? [propRecipientId || recipientId, maxTransfer]
                : [propRecipientId || recipientId, amount]
            }
            tx={(isProtected && api?.tx.balances.transferKeepAlive) || api?.tx.balances.transfer}
          />
        )}
      </Modal.Actions>
    </Modal>
  );
}

export default React.memo(TransferModal);
