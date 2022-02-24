// Copyright 2017-2021 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';

import EyeIcon from './images/eye.svg';
import EyeCloseIcon from './images/eye-close.svg';
import Input from './Input';

interface Props {
  autoFocus?: boolean;
  children?: React.ReactNode;
  className?: string;
  defaultValue?: string;
  help?: string;
  isDisabled?: boolean;
  isError?: boolean;
  isFull?: boolean;
  label?: string;
  labelExtra?: React.ReactNode;
  name?: string;
  onChange: (value: string) => void;
  onEnter?: () => void;
  onEscape?: () => void;
  placeholder?: string;
  tabIndex?: number;
  value: string;
  withLabel?: boolean;
}

function Password ({ autoFocus, children, className = '', defaultValue, help, isDisabled, isError, isFull, label, labelExtra, name, onChange, onEnter, onEscape, placeholder, tabIndex, value, withLabel }: Props): React.ReactElement<Props> {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <Input
      autoFocus={autoFocus}
      className={`ui--Password ${className}`}
      defaultValue={defaultValue}
      help={help}
      isDisabled={isDisabled}
      isError={isError}
      isFull={isFull}
      label={label}
      labelExtra={labelExtra}
      name={name}
      onChange={onChange}
      onEnter={onEnter}
      onEscape={onEscape}
      placeholder={placeholder}
      tabIndex={tabIndex}
      type={isPasswordVisible ? 'text' : 'password'}
      value={value}
      withLabel={withLabel}
    >
      {children}
      <div className='see-password-button'
        onClick={setIsPasswordVisible.bind(null, (prev) => !prev)}>
        {isPasswordVisible
          ? <img alt='see'
            src={EyeIcon as string}/>
          : <img alt='see'
            src={EyeCloseIcon as string}/>
        }
      </div>
    </Input>
  );
}

export default React.memo(Password);
