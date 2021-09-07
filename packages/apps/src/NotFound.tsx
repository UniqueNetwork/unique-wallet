// Copyright 2017-2021 @polkadot/apps authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { Redirect } from 'react-router';

import envConfig from '@polkadot/apps-config/envConfig';

const { walletMode } = envConfig;

interface Props {
  basePath: string;
  missingApis?: (string | string[])[];
}

function NotFound ({ basePath, missingApis = [] }: Props): React.ReactElement {
  console.log(`Redirecting from route "${basePath}" to "/market"${missingApis.length ? `, missing the following APIs: ${JSON.stringify(missingApis)}` : ''}`);

  if (walletMode) {
    return (
      <Redirect to='/myStuff' />
    );
  }

  return (
    <Redirect to='/myStuff' />
  );
}

export default React.memo(NotFound);
