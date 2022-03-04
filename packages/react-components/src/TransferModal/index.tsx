// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import type { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';

import React, { useCallback, useContext, useState } from 'react';
import Form from 'semantic-ui-react/dist/commonjs/collections/Form/Form';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Modal from 'semantic-ui-react/dist/commonjs/modules/Modal/Modal';

import { Input, StatusContext } from '@polkadot/react-components';
import { useApi } from '@polkadot/react-hooks';
import { keyring } from '@polkadot/ui-keyring';

import infoIcon from '../MarkWarning/info-icon.svg';
import closeIcon from './closeIconBlack.svg';

interface Props {
  account?: string;
  collection: NftCollectionInterface;
  closeModal: () => void;
  tokenId: string;
  updateTokens: (collectionId: string) => void;
}

function TransferModal ({ account, closeModal, collection, tokenId, updateTokens }: Props): React.ReactElement<Props> {
  const { api } = useApi();
  const [recipient, setRecipient] = useState<string>();
  // const { balance } = useBalance(account);
  const { queueExtrinsic } = useContext(StatusContext);
  // const [balanceTooLow, setBalanceTooLow] = useState<boolean>(false);
  const [isAddressError, setIsAddressError] = useState<boolean>(true);

  const transferToken = useCallback(() => {
    queueExtrinsic({
      accountId: account && account.toString(),
      extrinsic: api.tx.unique.transfer({ Substrate: recipient }, collection.id, tokenId, 1),
      isUnsigned: false,
      txStartCb: () => { closeModal(); },
      txSuccessCb: () => { updateTokens(collection.id); }
    });
  }, [account, api, closeModal, collection, recipient, tokenId, updateTokens, queueExtrinsic]);

  const setRecipientAddress = useCallback((value: string) => {
    try {
      keyring.decodeAddress(value);
      setIsAddressError(false);
      setRecipient(value);
    } catch (e) {
      setIsAddressError(true);
      setRecipient(undefined);
    }
  }, [setIsAddressError, setRecipient]);

  /* const checkBalanceEnough = useCallback(async () => {
    if (account && recipient) {
      const transferFee = await api.tx.nft.transfer(recipient, collection.id, tokenId, (tokenPart * Math.pow(10, decimalPoints))).paymentInfo(account) as { partialFee: BN };
      if (transferFee && (!balance?.free || balance?.free.sub(transferFee.partialFee).lt(api.consts.balances.existentialDeposit))) {
        setBalanceTooLow(true);
      } else {
        setBalanceTooLow(false);
      }
    }
  }, [account, api, balance, collection, decimalPoints, recipient, tokenId, tokenPart]); */

  /* useEffect(() => {
    void checkBalanceEnough();
  }, [checkBalanceEnough]); */

  return (
    <Modal
      className='unique-modal'
      open
      size='tiny'
    >
      <Modal.Header>
        <h2>Send NFT token</h2>
        <img
          alt='Close modal'
          onClick={closeModal}
          src={closeIcon as string}
        />
      </Modal.Header>
      <Modal.Content>
        <Form className='transfer-form'>
          <Modal.Description className='modalDescription'>
            <img
              src={infoIcon as string}
            />
            <div>
              <p> Be careful, the transaction cannot be reverted.</p>
              <p> Make sure to use the Substrate address created with polkadot&#123;.js&#125;.</p>
              <p> Do not use address of third party wallets, exchanges or hardware signers, like ledger nano.</p>
            </div>
          </Modal.Description>
          <Form.Field>
            <Input
              className='isSmall'
              isError={isAddressError}
              label='Please enter an address you want to transfer'
              onChange={setRecipientAddress}
              placeholder='Recipient address'
            />
          </Form.Field>
        </Form>
        {/* { balanceTooLow && (
          <div className='warning-block'>Your balance is too low to pay fees. <a href='https://t.me/unique2faucetbot'
            rel='noreferrer nooperer'
            target='_blank'>Get testUNQ here.</a></div>
        )} */}
      </Modal.Content>

      <Modal.Actions>
        <Button
          content='Submit'
          disabled={!recipient}
          onClick={transferToken}
        />
      </Modal.Actions>
    </Modal>
  );
}

export default React.memo(TransferModal);
