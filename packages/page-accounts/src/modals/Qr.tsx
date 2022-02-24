// Copyright 2017-2021 @polkadot/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ActionStatus } from '@polkadot/react-components/Status/types';
import type { ModalProps } from '../types';

import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { AddressRow, Button, Input, InputAddress, Modal, QrScanAddress } from '@polkadot/react-components';
import { useApi, useIpfs } from '@polkadot/react-hooks';
import { keyring } from '@polkadot/ui-keyring';

import PasswordInput from './PasswordInput';

interface Scanned {
  content: string;
  isAddress: boolean;
  genesisHash: string;
  name?: string;
}

interface Props extends ModalProps {
  className?: string;
  onClose: () => void;
  onStatusChange: (status: ActionStatus) => void;
}

interface Address {
  address: string;
  isAddress: boolean;
  scanned: Scanned | null;
}

function QrModal ({ className = '', onClose, onStatusChange }: Props): React.ReactElement<Props> {
  const { api } = useApi();
  const { isIpfs } = useIpfs();
  const [{ isNameValid, name }, setName] = useState({ isNameValid: false, name: '' });
  const [{ address, isAddress, scanned }, setAddress] = useState<Address>({ address: '', isAddress: false, scanned: null });
  const [{ isPasswordValid, password }, setPassword] = useState({ isPasswordValid: false, password: '' });

  const isValid = !!address && isNameValid && (isAddress || isPasswordValid);

  const _onNameChange = useCallback(
    (name: string) => setName({ isNameValid: !!name.trim(), name }),
    []
  );

  const _onPasswordChange = useCallback(
    (password: string, isPasswordValid: boolean) => setPassword({ isPasswordValid, password }),
    []
  );

  const _onScan = useCallback(
    (scanned: Scanned): void => {
      setAddress({
        address: scanned.isAddress
          ? scanned.content
          : keyring.createFromUri(scanned.content, {}, 'sr25519').address,
        isAddress: scanned.isAddress,
        scanned
      });

      if (scanned.name) {
        _onNameChange(scanned.name);
      }
    },
    [_onNameChange]
  );

  const _onSave = useCallback(
    (): void => {
      if (!scanned || !isValid) {
        return;
      }

      const { content, isAddress } = scanned;
      const meta = {
        genesisHash: scanned.genesisHash || api.genesisHash.toHex(),
        name: name.trim()
      };
      const account = isAddress
        ? keyring.addExternal(content, meta).pair.address
        : keyring.addUri(content, password, meta, 'sr25519').pair.address;

      InputAddress.setLastValue('account', account);

      onStatusChange({
        account,
        action: 'create',
        message: 'created account',
        status: 'success'
      });
      onClose();
    },
    [api, isValid, name, onClose, onStatusChange, password, scanned]
  );

  return (
    <Modal
      className={className}
      header={'Add an account via QR-code'}
      onCancel={onClose}
      size='large'
    >
      <p className='info-text-qr'>Provide the account QR from the module/external application for scanning. Once detected as valid, you will be taken to the next step to add the account to your list.</p>
      <Modal.Content>
        {scanned
          ? (
            <>
              <Modal.Columns>
                <Modal.Column>
                  <AddressRow
                    defaultName={name}
                    noDefaultNameOpacity
                    value={scanned.content}
                  />
                </Modal.Column>
              </Modal.Columns>
              <Modal.Columns>
                <Modal.Column>
                  <Input
                    autoFocus
                    className='full'
                    help={'Name given to this account. You can change it at any point in the future.'}
                    isError={!isNameValid}
                    label={'name'}
                    onChange={_onNameChange}
                    onEnter={_onSave}
                    value={name}
                  />
                </Modal.Column>
                <Modal.Column>
                  <p>{'The local name for this account. Changing this does not affect your on-line identity, so this is only used to indicate the name of the account locally.'}</p>
                </Modal.Column>
              </Modal.Columns>
              {!isAddress && (
                <PasswordInput
                  onChange={_onPasswordChange}
                  onEnter={_onSave}
                />
              )}
            </>
          )
          : (
            <Modal.Columns>
              <Modal.Column>
                <div className='qr-wrapper'>
                  <QrScanAddress onScan={_onScan} />
                </div>
              </Modal.Column>
              <Modal.Column>
                <p>Provide the account QR from the module/external application for scanning. Once detected as valid, you will be taken to the next step to add the account to your list.</p>
              </Modal.Column>
            </Modal.Columns>
          )
        }
      </Modal.Content>
      <Modal.Actions
        className='footer'
        onCancel={onClose}
      >
        <div className='btn-container'>
          <Button
            isDisabled={!scanned || !isValid || (!isAddress && isIpfs)}
            isFilled={true}
            label={'Save'}
            onClick={_onSave}
          />
        </div>
      </Modal.Actions>
    </Modal>
  );
}

export default React.memo(styled(QrModal)`
  .qr-wrapper {
    margin: 0 auto;
    max-width: 30rem;
  }
  .info-text-qr{
    margin: 24px 24px 12px 24px;
    font-size: 14px;
    line-height: 22px;
    font-family: var(--font-roboto);
    color: var(--tabs-color);
  }
  .btn-container{
    margin: 0 !important;
  }
    .footer{
      padding-top: 12px !important;
    }
`);
