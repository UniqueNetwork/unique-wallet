// Copyright 2017-2021 @polkadot/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KeypairType } from '@polkadot/util-crypto/types';

import React from 'react';

import { AddressRow, MarkWarning, Modal, Static } from '@polkadot/react-components';
import HelpTooltip from '@polkadot/react-components/HelpTooltip';

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
            <HelpTooltip
              className='help'
              content={<span>The seed is your key to the account. Knowing the seed allows you, or anyone else who knows the seed, to re-generate and control this account.</span>}
            />
          </div>
          {seed && (
            <Static
              label={'partial seed'}
              value={seed}
            />
          )}
          <div className='step-3-titles'>
            <p>Derivation path</p>
            <HelpTooltip
              className='help'
              content={<span>Substrate supports a number of different crypto mechanisms. As such the keyring allows for the creation and management of different types of crypto.</span>}
            />
          </div>
          <Static
            label={'keypair type'}
            value={pairType}
          />
          <div className='step-3-titles'>
            <p>Derivation path</p>
            <HelpTooltip
              className='help'
              content={<span>If you would like to create and manage several accounts on the network using the same seed, you can use derivation paths.</span>}
            />
          </div>
          <Static
            label={'derivation path'}
            value={derivePath || '<none provided>'}
          />
        </Modal.Column>
      </Modal.Columns>
      <div className='step-3-warning'>
        <MarkWarning
          content={<>{'We will provide you with a generated backup file after your account is created. Please make sure to save this file in a secure location as it is required, together with your password, to restore your account.'}</>}
          step={3}
        />
      </div>
    </>
  );
}

export default React.memo(CreateConfirmation);
