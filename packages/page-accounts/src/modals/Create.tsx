// Copyright 2017-2021 @polkadot/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ActionStatus } from '@polkadot/react-components/Status/types';
import type { CreateResult } from '@polkadot/ui-keyring/types';
import type { ModalProps } from '../types';

import FileSaver from 'file-saver';
import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

import { DEV_PHRASE } from '@polkadot/keyring/defaults';
import { getEnvironment } from '@polkadot/react-api/util';
import { AddressRow, Button, Checkbox, CopyButton, Dropdown, HelpTooltip, Input, InputAddress, Modal, TextArea } from '@polkadot/react-components';
import { useApi, useStepper } from '@polkadot/react-hooks';
import { keyring } from '@polkadot/ui-keyring';
import { isHex, u8aToHex } from '@polkadot/util';
import { hdLedger, hdValidatePath, keyExtractSuri, mnemonicGenerate, mnemonicValidate, randomAsU8a } from '@polkadot/util-crypto';

import CreateConfirmation from './CreateConfirmation';
import ExternalWarning from './ExternalWarning';
import PasswordInput from './PasswordInput';

const ETH_DEFAULT_PATH = "m/44'/60'/0'/0/0";

type PairType = 'ecdsa' | 'ed25519' | 'ed25519-ledger' | 'ethereum' | 'sr25519';

interface Props extends ModalProps {
  className?: string;
  onClose: () => void;
  onStatusChange: (status: ActionStatus) => void;
  restoreFromSeed?: boolean;
  seed?: string;
  type?: PairType;
}

type SeedType = 'bip' | 'raw' | 'dev';

interface AddressState {
  address: string | null;
  derivePath: string;
  deriveValidation?: DeriveValidationOutput
  isSeedValid: boolean;
  pairType: PairType;
  seed: string;
  seedType: SeedType;
}

interface CreateOptions {
  genesisHash?: string;
  name: string;
  tags?: string[];
}

interface DeriveValidationOutput {
  error?: string;
  warning?: string;
}

const DEFAULT_PAIR_TYPE = 'sr25519';
const STEPS_COUNT = 3;

function getSuri (seed: string, derivePath: string, pairType: PairType): string {
  return pairType === 'ed25519-ledger'
    ? u8aToHex(hdLedger(seed, derivePath).secretKey.slice(0, 32))
    : pairType === 'ethereum'
      ? `${seed}/${derivePath}`
      : `${seed}${derivePath}`;
}

function deriveValidate (seed: string, seedType: SeedType, derivePath: string, pairType: PairType): DeriveValidationOutput {
  try {
    const { password, path } = keyExtractSuri(pairType === 'ethereum' ? `${seed}/${derivePath}` : `${seed}${derivePath}`);
    let result: DeriveValidationOutput = {};

    // show a warning in case the password contains an unintended / character
    if (password?.includes('/')) {
      result = { warning: 'WARNING_SLASH_PASSWORD' };
    }

    // we don't allow soft for ed25519
    if (pairType === 'ed25519' && path.some(({ isSoft }): boolean => isSoft)) {
      return { ...result, error: 'SOFT_NOT_ALLOWED' };
    }

    // we don't allow password for hex seed
    if (seedType === 'raw' && password) {
      return { ...result, error: 'PASSWORD_IGNORED' };
    }

    if (pairType === 'ethereum' && !hdValidatePath(derivePath)) {
      return { ...result, error: 'INVALID_DERIVATION_PATH' };
    }

    return result;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

function isHexSeed (seed: string): boolean {
  return isHex(seed) && seed.length === 66;
}

function rawValidate (seed: string): boolean {
  return ((seed.length > 0) && (seed.length <= 32)) || isHexSeed(seed);
}

function addressFromSeed (seed: string, derivePath: string, pairType: PairType): string {
  return keyring
    .createFromUri(getSuri(seed, derivePath, pairType), {}, pairType === 'ed25519-ledger' ? 'ed25519' : pairType)
    .address;
}

function newSeed (seed: string | undefined | null, seedType: SeedType): string {
  switch (seedType) {
    case 'bip':
      return mnemonicGenerate();
    case 'dev':
      return DEV_PHRASE;
    default:
      return seed || u8aToHex(randomAsU8a());
  }
}

function generateSeed (_seed: string | undefined | null, derivePath: string, seedType: SeedType, pairType: PairType = DEFAULT_PAIR_TYPE): AddressState {
  const seed = newSeed(_seed, seedType);
  const address = addressFromSeed(seed, derivePath, pairType);

  return {
    address,
    derivePath,
    deriveValidation: undefined,
    isSeedValid: true,
    pairType,
    seed,
    seedType
  };
}

function updateAddress (seed: string, derivePath: string, seedType: SeedType, pairType: PairType): AddressState {
  let address: string | null = null;
  let deriveValidation: DeriveValidationOutput = deriveValidate(seed, seedType, derivePath, pairType);
  let isSeedValid = seedType === 'raw'
    ? rawValidate(seed)
    : mnemonicValidate(seed);

  if (!deriveValidation?.error && isSeedValid) {
    try {
      address = addressFromSeed(seed, derivePath, pairType);
    } catch (error) {
      console.error(error);
      deriveValidation = { error: (error as Error).message ? (error as Error).message : (error as Error).toString() };
      isSeedValid = false;
    }
  }

  return {
    address,
    derivePath,
    deriveValidation,
    isSeedValid,
    pairType,
    seed,
    seedType
  };
}

export function downloadAccount ({ json, pair }: CreateResult): void {
  const blob = new Blob([JSON.stringify(json)], { type: 'application/json; charset=utf-8' });

  FileSaver.saveAs(blob, `${pair.address}.json`);
}

function createAccount (seed: string, derivePath: string, pairType: PairType, { genesisHash, name, tags = [] }: CreateOptions, password: string, success: string): ActionStatus {
  // we will fill in all the details below
  const status = { action: 'create' } as ActionStatus;

  try {
    const result = keyring.addUri(getSuri(seed, derivePath, pairType), password, { genesisHash, isHardware: false, name, tags }, pairType === 'ed25519-ledger' ? 'ed25519' : pairType);
    const { address } = result.pair;

    status.account = address;
    status.status = 'success';
    status.message = success;

    InputAddress.setLastValue('account', address);

    if (getEnvironment() === 'web') {
      downloadAccount(result);
    }
  } catch (error) {
    status.status = 'error';
    status.message = (error as Error).message;
  }

  return status;
}

function Create ({ className = '', onClose, onStatusChange, restoreFromSeed, seed: propsSeed, type: propsType }: Props): React.ReactElement<Props> {
  const { api, isDevelopment, isEthereum } = useApi();
  const [text, setText] = useState<string>('');
  const [{ address, derivePath, deriveValidation, isSeedValid, pairType, seed, seedType }, setAddress] = useState<AddressState>(() => generateSeed(
    propsSeed,
    isEthereum ? ETH_DEFAULT_PATH : '',
    propsSeed ? 'raw' : 'bip',
    isEthereum ? 'ethereum' : propsType
  ));
  const [isMnemonicSaved, setIsMnemonicSaved] = useState<boolean>(false);
  const [step, nextStep, prevStep] = useStepper();
  const [isBusy, setIsBusy] = useState(false);
  const [{ isNameValid, name }, setName] = useState({ isNameValid: false, name: '' });
  const [{ isPasswordValid, password }, setPassword] = useState({ isPasswordValid: false, password: '' });
  const isFirstStepValid = !!address && isMnemonicSaved && !deriveValidation?.error && isSeedValid && (restoreFromSeed ? text : true);
  const isSecondStepValid = isNameValid && isPasswordValid;
  const isValid = isFirstStepValid && isSecondStepValid;

  const seedOpt = useRef((
    isDevelopment
      ? [{ text: 'Development', value: 'dev' }]
      : []
  ).concat(
    { text: 'Mnemonic', value: 'bip' },
    isEthereum
      ? { text: 'Private Key', value: 'raw' }
      : { text: 'Raw seed', value: 'raw' }
  ));
  const content = useCallback(() => {
    return (
      <span>Find out more on <a
        href='https://wiki.polkadot.network/'
        rel='noreferrer'
        target='_blank'
      >Polkadot Wiki
      </a>
      </span>
    );
  }, []);

  const _onChangeSeed = useCallback(
    (newSeed: string) => {
      restoreFromSeed && setText(newSeed);
      setAddress(
        updateAddress(newSeed, derivePath, seedType, pairType)
      );
    },
    [derivePath, pairType, seedType, restoreFromSeed]
  );

  const _selectSeedType = useCallback(
    (newSeedType: SeedType): void => {
      if (newSeedType !== seedType) {
        setAddress(generateSeed(null, derivePath, newSeedType, pairType));
      }
    },
    [derivePath, pairType, seedType]
  );

  const _onChangeName = useCallback(
    (name: string) => setName({ isNameValid: !!name.trim(), name }),
    []
  );

  const _onPasswordChange = useCallback(
    (password: string, isPasswordValid: boolean) => setPassword({ isPasswordValid, password }),
    []
  );

  const _toggleMnemonicSaved = useCallback(() => {
    setIsMnemonicSaved(!isMnemonicSaved);
  }, [isMnemonicSaved]);

  const _onCommit = useCallback(
    (): void => {
      if (!isValid) {
        return;
      }

      setIsBusy(true);
      setTimeout((): void => {
        const options = { genesisHash: isDevelopment ? undefined : api.genesisHash.toString(), isHardware: false, name: name.trim() };
        const status = createAccount(seed, derivePath, pairType, options, password, 'created account');

        onStatusChange(status);
        setIsBusy(false);
        onClose();
      }, 0);
    },
    [api, derivePath, isDevelopment, isValid, name, onClose, onStatusChange, pairType, password, seed]
  );

  return (
    <Modal
      className={className}
      header={restoreFromSeed ? 'Restore an account from seed phrase' : 'Add an account via seed phrase'}
      size='small'
    >
      <Modal.Content>
        <Modal.Columns>
          <Modal.Column>
            <AddressRow
              defaultName={name}
              fullLength
              isEditableName={false}
              label='Account'
              noDefaultNameOpacity
              value={restoreFromSeed ? text === '' ? '' : isSeedValid ? address : '' : isSeedValid ? address : ''}
            />
          </Modal.Column>
        </Modal.Columns>
        {step === 1 && <>
          <p className='info-text label'>The secret seed value for this account</p>
          { restoreFromSeed
            ? null
            : (
              <div className='type-row'>
                <Dropdown
                  defaultValue={seedType}
                  isButton
                  onChange={_selectSeedType}
                  options={seedOpt.current}
                />
                <HelpTooltip
                  className={'help'}
                  content={content()}
                  defaultPosition='top right'
                  mobilePosition='top right'
                />
              </div>) }
          <div className='seed-row'>
            <TextArea
              className={restoreFromSeed ? 'textRow' : ''}
              help={isEthereum
                ? 'Your ethereum key pair is derived from your private key. Don\'t divulge this key.'
                : 'The private key for your account is derived from this seed. This seed must be kept secret as anyone in its possession has access to the funds of this account. If you validate, use the seed of the session account as the "--key" parameter of your node.'}
              isError={!isSeedValid}
              isReadOnly={seedType === 'dev'}
              label={
                seedType === 'bip'
                  ? 'mnemonic seed'
                  : seedType === 'dev'
                    ? 'development seed'
                    : isEthereum
                      ? 'ethereum private key'
                      : 'seed (hex or string)'
              }
              onChange={_onChangeSeed}
              seed={restoreFromSeed ? text : seed}
              withLabel
            />
            {
              restoreFromSeed
                ? null
                : (
                  <CopyButton
                    className='copyMoved'
                    type={seedType === 'bip' ? 'mnemonic' : seedType === 'raw' ? isEthereum ? 'private key' : 'seed' : 'raw seed'}
                    value={seed}
                  />)
            }
          </div>
          <p className='info-text'>{'Ensure that you keep this in a safe place, with access to the seed you can re-create the account.'}</p>
          <ExternalWarning />
          <div className='saveToggle'>
            <Checkbox
              label={<>{'I have saved my mnemonic seed safely'}</>}
              onChange={_toggleMnemonicSaved}
              value={isMnemonicSaved}
            />
          </div>
        </>}
        {step === 2 && <>
          <Input
            autoFocus
            className='isSmall'
            help={'Name given to this account. You can edit it. To use the account to validate or nominate, it is a good practice to append the function of the account in the name, e.g "name_you_want - stash".'}
            isError={!isNameValid}
            label={'Name'}
            onChange={_onChangeName}
            onEnter={_onCommit}
            placeholder={'Name'}
            value={name}
          />
          <p className='info-text'>{'The name of this account and how it will appear under your addresses. With the person in the chain, it can be accessed by others.'}</p>
          <PasswordInput
            onChange={_onPasswordChange}
            onEnter={_onCommit}
          />
          <p className='info-text'>{'Password and password confirmation for this account. This is necessary to authenticate all committed transactions and encrypt the key pair. Ensure you are using a strong password for proper account protection.'}</p>
          <ExternalWarning />
        </>}
        {step === 3 && address && (
          <CreateConfirmation
            derivePath={derivePath}
            isBusy={isBusy}
            pairType={
              pairType === 'ed25519-ledger'
                ? 'ed25519'
                : pairType
            }
            seed={seed}
          />
        )}
      </Modal.Content>
      <div className='footer'>
        <div className='step'>
          {`Step ${'{{step}}/{{STEPS_COUNT}}'.replace('{{STEPS_COUNT}}', STEPS_COUNT.toString()).replace('{{step}}', step.toString())}`}
        </div>
        <Modal.Actions onCancel={onClose}>
          <div className='btn-container'>
            {step === 1 &&
            <Button
              isDisabled={!isFirstStepValid}
              isFilled={true}
              label={'Next'}
              onClick={nextStep}
            />
            }
            {step === 2 && (
              <>
                <Button
                  isOutlined={true}
                  label={'Previous'}
                  onClick={prevStep}
                />
                <Button
                  isDisabled={!isSecondStepValid}
                  isFilled={true}
                  label={'Next'}
                  onClick={nextStep}
                />
              </>
            )}
            {step === 3 && (
              <>
                <Button
                  isOutlined={true}
                  label={'Previous'}
                  onClick={prevStep}
                />
                <Button
                  isBusy={isBusy}
                  isFilled={true}
                  label={'Save'}
                  onClick={_onCommit}
                />
              </>
            )}
          </div>
        </Modal.Actions>
      </div>
    </Modal>
  );
}

export default React.memo(styled(Create)`
  .accounts--Creator-advanced {
    margin-top: 1rem;
    overflow: visible;
  }

  .ui--Modal{
    background-color: var(--white-color);

    .header{
      border-bottom: 2px solid red;
    }
  }

  .ui--CopyButton.copyMoved {
    display: flex;
    align-items: center;
    margin-left: 16px;

    .copyContainer .icon-button{
      display: flex;
      cursor: pointer;
    }

    .ui--Icon {
      background: var(--text-color);
    }
  }

  .type-row {
    display: flex;
    width: 100%;
    margin-bottom: 24px;

    img {
      margin-left: 16px;
      cursor: pointer;
    }
  }

  .seed-row {
    display: flex;
    align-items: center;
    width: 100%;

    .ui--Labelled {
      width: 100%;
    }
  }

  && .TextAreaWithDropdown {
    display: flex;

    textarea {
      border-radius: 4px;
      height: 40px;
      outline: none;
      resize: none;
      font-family: var(--font-roboto);
    }
  }

  .ui.buttons {
    width: 100%;
    height: 40px;

    .ui.button.selection.dropdown {
      color: var(--title-color);
      padding: 8px 16px;
      font-size: 16px;
      font-family: var(--font-roboto);
      border: 1px solid var(--border-color);
      border-radius: 4px;

      .text {
        padding: 4px;
      }

      .menu {
        background: var(--input-background-color);
        border-radius: 4px;
        border: 0;
        margin: 0;
      }
    }
  }

  .ui.input.ui--Input {

    input {
      border-radius: 4px;
      outline: none;
      font-family: var(--font-roboto);
    }
  }

  .password-input {
    margin-top: 28px;



    &:nth-child(1) input{
      margin-bottom: 24px;
      border: 1px solid red;
    }
  }

  .saveToggle {
    text-align: left;
    font-family: var(--font-roboto);
    font-size: 16px;
    color: var(--title-color);
    margin-top: 32px;

    .ui--Checkbox {
      margin: 0.8rem 0 0 0;


      > label {
        font-weight: var(--font-weight-normal);
      }
    }
  }
    .textRow textarea{
    width: 100% !important;
  }
  .footer{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .step{
      font-size: 16px;
      font-family: var(--font-roboto);
      line-height: 24px;
      color: var(--title-color);
    }
  }
  .step-3-titles{
    display: flex;
    align-items: center;

    p{
      font-size: 14px;
      font-family: var(--font-roboto);
      color: var(--tabs-color);
      margin:  0 6.25px  14.25px 0;
    }
    img{
      margin-bottom: 14.25px;
      cursor: pointer;
    }
  }
  .step-3-texts{
      border: 1px solid var(--border-color);
      border-radius: 4px;
      background-color: var(--input-background-disabled-color);
      min-height: 40px ;
      margin-bottom: 26.25px;
      padding: 8px 16px;
  }
  .step-3-warning{
    article{
      background-color:var(--link-light-color) !important; ;
      margin: 0 !important; ;
      color: var(--link-color)!important;
    }
  }
`);
