// Copyright 2017-2021 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KeyringSectionOption } from '@polkadot/ui-keyring/options/types';
import type { Option } from './types';

import React from 'react';

import KeyPair from './KeyPair';

export default function CreateItem (option: KeyringSectionOption, isUppercase = true): Option {
  return {
    ...option,
    text: (
      <KeyPair
        address={option.key || ''}
        isUppercase={isUppercase}
        key={option.key || option.name}
        name={option.name}
      />
    )
  };
}
