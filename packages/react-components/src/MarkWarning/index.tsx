// Copyright 2017-2021 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';

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
          ? <img alt='info'
            src={InfoIconBlue as string}/>
          : <img alt='info'
            src={InfoIcon as string}/>
      }
      {content}{children}
    </article>
  );
}

export default React.memo(styled(Index)`
  display: flex;
  margin-top:40px;
  background-color: #fef6da;
  color:#E7AA0F;
  font-size: 14px;
  font-family: var(--font-roboto);
  line-height: 22px;
  border-radius: 4px;
  padding: 8px;

  img{
    margin-right: 8px;
  }

  .ui--Icon {
    color: rgba(255, 196, 12, 1);
    margin-right: 0.5rem;
  }
`);
