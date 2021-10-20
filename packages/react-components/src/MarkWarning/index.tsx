// Copyright 2017-2021 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import React from 'react';

import InfoIcon from './info-icon.svg';
import InfoIconBlue from './info-icon-blue.svg';

interface Props {
  children?: React.ReactNode;
  className?: string;
  content?: React.ReactNode;
  step?: number
}

function Index ({ children, className = '', content, step }: Props): React.ReactElement<Props> {
  return (
    <article className={`mark warning ${className}`}>
      {
        step === 3
          ? <img
            alt='info'
            src={InfoIconBlue as string}
          />
          : <img
            alt='info'
            src={InfoIcon as string}
          />
      }
      {content}{children}
    </article>
  );
}

export default React.memo(Index);
