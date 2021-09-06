// Copyright 2017-2021 @polkadot/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KeypairType } from '@polkadot/util-crypto/types';

import React from 'react';

import { AddressRow, MarkWarning, Modal, Static } from '@polkadot/react-components';

import QuestionIcon from './images/question-icon.svg';

interface Props {
  address?: string;
  derivePath: string;
  isBusy: boolean;
  name?: string;
  pairType: KeypairType;
  seed?: string;
}

function CreateConfirmation ({ address, derivePath, name, pairType, seed }: Props): React.ReactElement<Props> | null {
  // in design was shown full seed phrase, uncomment for short one

  // const splitSeed = seed && seed.split(' ');
  // const shortSeed = isHex(seed)
  //   ? `${seed.substr(10)} … ${seed.substr(-8)}`
  //   : splitSeed && splitSeed.map((value, index) => (index % 3) ? '…' : value).join(' ');

  return (
    <>
      <Modal.Columns>
        <Modal.Column>
          {address && name && <AddressRow
            defaultName={name}
            isInline
            noDefaultNameOpacity
            value={address}
          />}
          <div className='step-3-titles'>
            <p>Partial seed</p>
            <img alt='?'
              src={QuestionIcon as string}/>
          </div>
          {seed && (
            <Static
              label={'partial seed'}
              value={seed}
            />
          )}
          <div className='step-3-titles'>
            <p>Derivation path</p>
            <img alt='?'
              src={QuestionIcon as string}/>
          </div>
          <Static
            label={'keypair type'}
            value={pairType}
          />
          <div className='step-3-titles'>
            <p>Derivation path</p>
            <img alt='?'
              src={QuestionIcon as string}/>
          </div>
          <Static
            label={'derivation path'}
            value={derivePath || '<none provided>'}
          />
        </Modal.Column>
      </Modal.Columns>
      <div className='step-3-warning'>
        <MarkWarning content={<>{'We will provide you with a generated backup file after your account is created. Please make sure to save this file in a secure location as it is required, together with your password, to restore your account.'}</>}
          step={3} />
      </div>
    </>
  );
}

export default React.memo(CreateConfirmation);
