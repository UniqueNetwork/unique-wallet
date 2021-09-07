// Copyright 2017-2021 @polkadot/apps-routing, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TFunction } from 'i18next';
import React from 'react';

import { Route } from './types';

// import Component from '@polkadot/app-nft-ether';

const Component = React.lazy(() => import('@polkadot/app-nft-ether'));

export default function create (t: TFunction): Route {
  return {
    Component,
    display: {
      needsApi: []
    },
    group: 'nft',
    icon: 'users',
    name: 'myStuffEther',
    text: t('nav.nftEther', 'My stuff Ether', { ns: 'apps-routing' })
  };
}
