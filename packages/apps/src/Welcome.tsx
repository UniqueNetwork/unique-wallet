// [object Object]
// SPDX-License-Identifier: Apache-2.0

// eslint-disable-next-line header/header
import React from 'react';

import AccountButtonsGroup from '@polkadot/react-components/AccountButtonGroup';
import { ActionStatus } from '@polkadot/react-components/Status/types';

interface WelcomeProps {
  onStatusChange: (status: ActionStatus) => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStatusChange }) => {
  return <div className='unique-card welcome'>
    <h1 className='header-text'>Welcome to Unique network</h1>
    <div className='description'>
      <p className='text'>You need to connect a substrate account to use all the features.
      </p>
      <p className='text'>Please select one of the options:
      </p>
    </div>
    <AccountButtonsGroup onStatusChange={onStatusChange}/>

  </div>;
};

export default Welcome;
