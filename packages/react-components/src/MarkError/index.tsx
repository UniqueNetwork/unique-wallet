// Copyright 2017-2021 @polkadot/react-components and UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import React from 'react';

import errorIcon from './error-icon.svg';

interface Props {
  children?: React.ReactNode;
  className?: string;
  content?: React.ReactNode;
}

function MarkError ({ children, className = '', content }: Props): React.ReactElement<Props> {
  return (
    <article className={`mark error ${className}`}>
      <img
        alt='info'
        src={errorIcon as string}
      />
      {content}{children}
    </article>
  );
}

export default React.memo(MarkError);
