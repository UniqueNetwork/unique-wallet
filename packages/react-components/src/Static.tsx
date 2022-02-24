// Copyright 2017-2021 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import CopyButton from './CopyButton';
import Labelled from './Labelled';

interface Props {
  children?: React.ReactNode;
  className?: string;
  defaultValue?: any;
  help?: React.ReactNode;
  isDisabled?: boolean;
  isError?: boolean;
  isFull?: boolean;
  isHidden?: boolean;
  isSmall?: boolean;
  label?: React.ReactNode;
  value?: React.ReactNode;
  withCopy?: boolean;
  withLabel?: boolean;
}

function Static ({ children, className = '', defaultValue, help, isFull, isHidden, isSmall, label, value, withCopy, withLabel }: Props): React.ReactElement<Props> {
  return (
    <Labelled
      className={className}
      help={help}
      isFull={isFull}
      isHidden={isHidden}
      isSmall={isSmall}
      label={label}
      withLabel={withLabel}
    >
      <div className='step-3-texts'>
        {value || defaultValue}
        {children}
      </div>
      {withCopy && (
        <CopyButton value={value as string} />
      )}
    </Labelled>
  );
}

export default React.memo(Static);
