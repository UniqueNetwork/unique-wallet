// Copyright 2017-2021 @polkadot/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KeyringPair, KeyringPair$Json } from '@polkadot/keyring/types';
import type { ActionStatus } from '@polkadot/react-components/Status/types';
import type { ModalProps } from '../types';

import React, { useCallback, useMemo, useState } from 'react';

import { AddressRow, Button, InputAddress, InputFile, MarkWarning, Modal, Password } from '@polkadot/react-components';
import { useApi } from '@polkadot/react-hooks';
import { keyring } from '@polkadot/ui-keyring';
import { u8aToString } from '@polkadot/util';

import ExternalWarning from './ExternalWarning';

interface Props extends ModalProps {
  className?: string;
  onClose: () => void;
  onStatusChange: (status: ActionStatus) => void;
}

interface PassState {
  isPassValid: boolean;
  password: string;
}

const acceptedFormats = ['application/json', 'text/plain'].join(', ');

function parseFile (file: Uint8Array, genesisHash?: string | null): KeyringPair | null {
  try {
    return keyring.createFromJson(JSON.parse(u8aToString(file)) as KeyringPair$Json, { genesisHash });
  } catch (error) {
    console.error(error);
  }

  return null;
}

function Import ({ className = '', onClose, onStatusChange }: Props): React.ReactElement<Props> {
  const { api, isDevelopment } = useApi();
  const [isBusy, setIsBusy] = useState(false);
  const [pair, setPair] = useState<KeyringPair | null>(null);
  const [{ isPassValid, password }, setPass] = useState<PassState>({ isPassValid: false, password: '' });
  const apiGenesisHash = useMemo(() => isDevelopment ? null : api.genesisHash.toHex(), [api, isDevelopment]);
  const differentGenesis = useMemo(() => pair?.meta.genesisHash && pair.meta.genesisHash !== apiGenesisHash, [apiGenesisHash, pair]);

  const _onChangeFile = useCallback(
    (file: Uint8Array) => setPair(parseFile(file, apiGenesisHash)),
    [apiGenesisHash]
  );

  const _onChangePass = useCallback(
    (password: string) => setPass({ isPassValid: keyring.isPassValid(password), password }),
    []
  );

  const _onSave = useCallback(
    (): void => {
      if (!pair) {
        return;
      }

      setIsBusy(true);
      setTimeout((): void => {
        const status: Partial<ActionStatus> = { action: 'restore' };

        try {
          keyring.addPair(pair, password);

          status.status = 'success';
          status.account = pair.address;
          status.message = 'account restored';

          InputAddress.setLastValue('account', pair.address);
        } catch (error) {
          setPass((state: PassState) => ({ ...state, isPassValid: false }));

          status.status = 'error';
          status.message = (error as Error).message;
          console.error(error);
        }

        setIsBusy(false);
        onStatusChange(status as ActionStatus);

        if (status.status !== 'error') {
          onClose();
        }
      }, 0);
    },
    [onClose, onStatusChange, pair, password]
  );

  return (
    <Modal
      className={className}
      header={'Add an account via backup JSON file'}
      onCancel={onClose}
      size='small'
    >
      <Modal.Content>
        <Modal.Columns>
          <Modal.Column>
            <AddressRow
              defaultName={(pair?.meta.name as string) || null}
              label='Account'
              noDefaultNameOpacity
              value={pair?.address || null}
            />
          </Modal.Column>
        </Modal.Columns>
        <Modal.Columns>
          <Modal.Column>
            <InputFile
              accept={acceptedFormats}
              className='isSmall'
              help={'Select the JSON key file that was downloaded when you created the account. This JSON file contains your private key encrypted with your password.'}
              isError={!pair}
              label={'backup file'}
              onChange={_onChangeFile}
              withLabel
            />
            {differentGenesis && (
              <MarkWarning content={'The network from which this account was originally generated is different than the network you are currently connected to. Once imported ensure you toggle the "allow on any network" option for the account to keep it visible on the current network.'} />
            )}
            <p className='info-text'>Provide a backup JSON file encrypted with your account password</p>
          </Modal.Column>
        </Modal.Columns>
        <Modal.Columns>
          <Modal.Column>
            <Password
              autoFocus
              className='isSmall'
              help={'Type the password chosen at the account creation. It was used to encrypt your account\'s private key in the backup file.'}
              isError={!isPassValid}
              label={'password'}
              onChange={_onChangePass}
              onEnter={_onSave}
              value={password}
            />
            <p className='info-text'>The password that was previously used to encrypt this account</p>
          </Modal.Column>
        </Modal.Columns>
        <ExternalWarning />
      </Modal.Content>
      <Modal.Actions className='footer'
        onCancel={onClose}>
        <div className='btn-container'>
          <Button
            isBusy={isBusy}
            isDisabled={!pair || !isPassValid}
            isFilled={true}
            label={'Restore'}
            onClick={_onSave}
          />
        </div>
      </Modal.Actions>
    </Modal>
  );
}

export default React.memo(Import);
