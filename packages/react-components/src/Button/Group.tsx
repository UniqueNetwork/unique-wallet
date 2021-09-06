// Copyright 2017-2021 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { GroupProps } from './types';

import React from 'react';
import styled from 'styled-components';

function ButtonGroup ({ children, className = '', isCentered }: GroupProps): React.ReactElement<GroupProps> {
  return (
    <div className={`ui--Button-Group${isCentered ? ' isCentered' : ''} ${className}`}>
      {children}
    </div>
  );
}

export default React.memo(styled(ButtonGroup)`
  &.isCentered {
    margin-bottom: 0.5rem;
    text-align: center;
  }

  &+.ui--Table {
    margin-top: 1.5rem;
  }
`);
