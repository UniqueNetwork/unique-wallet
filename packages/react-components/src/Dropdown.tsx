// Copyright 2017-2021 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DropdownProps } from 'semantic-ui-react';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button as SUIButton, Dropdown as SUIDropdown } from 'semantic-ui-react';
import styled from 'styled-components';

import { isUndefined } from '@polkadot/util';

import Labelled from './Labelled';

interface Props<Option> {
  allowAdd?: boolean;
  children?: React.ReactNode;
  className?: string;
  defaultValue?: any;
  dropdownClassName?: string;
  help?: React.ReactNode;
  isButton?: boolean;
  isDisabled?: boolean;
  isError?: boolean;
  isFull?: boolean;
  isItem?: boolean;
  isMultiple?: boolean;
  isSimple?: boolean;
  label?: React.ReactNode;
  labelExtra?: React.ReactNode;
  onAdd?: (value: any) => void;
  onBlur?: () => void;
  onChange?: (value: any) => void;
  onClose?: () => void;
  onSearch?: (filteredOptions: any[], query: string) => Option[];
  options: Option[];
  placeholder?: string;
  renderLabel?: (item: any) => any;
  searchInput?: { autoFocus: boolean };
  tabIndex?: number;
  text?: string;
  transform?: (value: any) => any;
  value?: any;
  withEllipsis?: boolean;
  withLabel?: boolean;
}

export type IDropdown<Option> = React.ComponentType<Props<Option>> & {
  Header: React.ComponentType<{ content: React.ReactNode }>;
}

function BaseDropdown<Option> ({ allowAdd = false, children, className = '', defaultValue, dropdownClassName, help, isButton, isDisabled, isError, isFull, isItem, isMultiple, isSimple, label, labelExtra, onAdd, onBlur, onChange, onClose, onSearch, options, placeholder, renderLabel, searchInput, tabIndex, text, transform, value, withEllipsis, withLabel }: Props<Option>): React.ReactElement<Props<Option>> {
  const lastUpdate = useRef<string>('');
  const [stored, setStored] = useState<string | undefined>();

  const _setStored = useCallback(
    (value: string): void => {
      const json = JSON.stringify({ v: value });

      if (lastUpdate.current !== json) {
        lastUpdate.current = json;

        setStored(value);

        onChange && onChange(
          transform
            ? transform(value)
            : value
        );
      }
    },
    [onChange, transform]
  );

  useEffect((): void => {
    _setStored(isUndefined(value) ? defaultValue : value);
  }, [_setStored, defaultValue, value]);

  const _onAdd = useCallback(
    (_: React.SyntheticEvent<HTMLElement>, { value }: DropdownProps): void =>
      onAdd && onAdd(value),
    [onAdd]
  );

  const _onChange = useCallback(
    (_: React.SyntheticEvent<HTMLElement> | null, { value }: DropdownProps): void =>
      _setStored(value as string),
    [_setStored]
  );

  const dropdown = (
    <SUIDropdown
      allowAdditions={allowAdd}
      button={isButton}
      className={dropdownClassName}
      compact={isButton}
      disabled={isDisabled}
      error={isError}
      floating={isButton}
      item={isItem}
      multiple={isMultiple}
      onAddItem={_onAdd}
      onBlur={onBlur}
      onChange={_onChange}
      onClose={onClose}
      options={options}
      placeholder={placeholder}
      renderLabel={renderLabel}
      search={onSearch || allowAdd}
      searchInput={searchInput}
      selection
      simple={isSimple}
      tabIndex={tabIndex}
      text={text}
      value={stored}
    />
  );

  return isButton
    ? <SUIButton.Group>{dropdown}{children}</SUIButton.Group>
    : (
      <Labelled
        className={`ui--Dropdown ${className}`}
        help={help}
        isFull={isFull}
        label={label}
        labelExtra={labelExtra}
        withEllipsis={withEllipsis}
        withLabel={withLabel}
      >
        {dropdown}
        {children}
      </Labelled>
    );
}

const Dropdown = React.memo(styled(BaseDropdown)`
  .ui--Dropdown-item {
    position: relative;
    white-space: nowrap;

    .ui--Dropdown-icon,
    .ui--Dropdown-name {
      display: inline-block;
    }

    .ui--Dropdown-icon {
      height: 32px;
      left: 0;
      position: absolute;
      top: -9px;
      width: 32px;

      &.opaque {
        opacity: 0.5;
      }
    }

    .ui--Dropdown-name {
      margin-left: 3rem;
    }
  }

   .header {
     text-transform: none !important;
     font-weight: normal !important;
     font-size: 14px !important;
     margin: 16px 0 !important;
     font-family: var(--font-roboto);
   }

  .ui.selection.dropdown {

    &:hover .menu{
      border-color: transparent;
      box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
    }

    border: 1px solid transparent;
    border-radius: 4px;
    height: 48px;

    .menu {
      background-color: var(--white-color);
      border-color: transparent;
      box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
      max-height: 405px;

      &:hover {
        border-color: transparent;
        box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
      }
      .info-panel{
        background-color: var(--link-light-color);
        color: var(--link-color) ;
        padding: 6.25px;
        margin: 16px;
        display: flex;
        border-radius: 4px;
        align-items: center;

        img{
          margin: 0 10.25px;
        }
      }
    }

    > .text > .ui--Dropdown-item {
      .ui--Dropdown-icon {
        left: -2.6rem;
        top: -1.15rem;
        opacity: 1;
      }

      .ui--Dropdown-name {
        margin-left: 0;
      }
    }
  }
`) as unknown as IDropdown<any>;

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
(Dropdown as any).Header = SUIDropdown.Header;

export default Dropdown;
