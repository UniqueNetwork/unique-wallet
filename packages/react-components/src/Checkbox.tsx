// Copyright 2017-2021 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useCallback } from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  isDisabled?: boolean;
  label: React.ReactNode;
  onChange?: (isChecked: boolean) => void;
  value?: boolean;
}

function Checkbox ({ className = '', isDisabled, label, onChange, value }: Props): React.ReactElement<Props> {
  const _onClick = useCallback(
    (): void => {
      !isDisabled && onChange && onChange(!value);
    },
    [isDisabled, onChange, value]
  );

  return (
    <div
      className={`ui--Checkbox${isDisabled ? ' isDisabled' : ''} ${className}`}
      onClick={_onClick}
    >
      <input checked={value}
        onChange={_onClick}
        type='checkbox'/>
      {label && <label>{label}</label>}
    </div>
  );
}

export default React.memo(styled(Checkbox)`
  display: flex;
  align-items: center;
  cursor: pointer;

  &.isDisabled {
    opacity: 0.5;
  }

  &:not(.isDisabled) {
    cursor: pointer;
  }

  > label {
    color: var(--color-text);
    display: inline-block;
    opacity: 1;
    cursor: pointer;
    user-select: none;
    margin-left: 8px;
  }

  input[type="checkbox"] {
    position: relative;
    cursor: pointer;
    width: 22px;

    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 22px;
      height: 22px;
      border: 1px solid var(--card-border-color);
      background-color: white;
      border-radius: 4px;
      transform: translateY(-20%);
    }

    &:checked {

      &:before {
        border-radius: 4px;
        content: "";
        display: block;
        position: absolute;
        width: 22px;
        height: 22px;
        background-color: var(--button-color);
      }

      &:after {
        content: "";
        display: block;
        width: 9px;
        height: 15px;
        border: 1px solid var(--input-background-color);
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
        top: -3px;
        left: 6.5px;
      }
    }
  }
`);
