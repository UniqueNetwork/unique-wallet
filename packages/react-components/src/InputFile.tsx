// Copyright 2017-2021 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { createRef, useCallback, useState } from 'react';
import Dropzone, { DropzoneRef } from 'react-dropzone';
import styled from 'styled-components';

import { formatNumber, hexToU8a, isHex, u8aToString } from '@polkadot/util';

import FileIcon from './images/file.svg';
import Labelled from './Labelled';

export interface InputFilePropsBase {
  className?: string;
  clearContent?: boolean;
  help?: React.ReactNode;
  isDisabled?: boolean;
  isError?: boolean;
  isFull?: boolean;
  label: React.ReactNode;
  placeholder?: React.ReactNode | null | false;
  withEllipsis?: boolean;
  withLabel?: boolean;
}

export interface InputFileProps extends InputFilePropsBase {
  // Reference Example Usage: https://github.com/react-dropzone/react-dropzone/tree/master/examples/Accept
  // i.e. MIME types: 'application/json, text/plain', or '.json, .txt'
  accept?: string;
  onChange?: (contents: Uint8Array, name: string) => void;
}

interface FileState {
  name: string;
  size: number;
}

const BYTE_STR_0 = '0'.charCodeAt(0);
const BYTE_STR_X = 'x'.charCodeAt(0);
const STR_NL = '\n';
const NOOP = (): void => undefined;

function convertResult (result: ArrayBuffer): Uint8Array {
  const data = new Uint8Array(result);

  // this converts the input (if detected as hex), via the hex conversion route
  if (data[0] === BYTE_STR_0 && data[1] === BYTE_STR_X) {
    let hex = u8aToString(data);

    while (hex[hex.length - 1] === STR_NL) {
      hex = hex.substr(0, hex.length - 1);
    }

    if (isHex(hex)) {
      return hexToU8a(hex);
    }
  }

  return data;
}

function InputFile ({ accept, className = '', clearContent, help, isDisabled, isError = false, isFull, label, onChange, placeholder, withEllipsis, withLabel }: InputFileProps): React.ReactElement<InputFileProps> {
  const dropRef = createRef<DropzoneRef>();
  const [file, setFile] = useState<FileState | undefined>();

  const _onDrop = useCallback(
    (files: File[]): void => {
      files.forEach((file): void => {
        const reader = new FileReader();

        reader.onabort = NOOP;
        reader.onerror = NOOP;

        reader.onload = ({ target }: ProgressEvent<FileReader>): void => {
          if (target && target.result) {
            const name = file.name;
            const data = convertResult(target.result as ArrayBuffer);

            onChange && onChange(data, name);
            dropRef && setFile({
              name,
              size: data.length
            });
          }
        };

        reader.readAsArrayBuffer(file);
      });
    },
    [dropRef, onChange]
  );

  const dropZone = (
    <Dropzone
      accept={accept}
      disabled={isDisabled}
      multiple={false}
      onDrop={_onDrop}
      ref={dropRef}
    >
      {({ getInputProps, getRootProps }): JSX.Element => (
        <div {...getRootProps({ className: `ui--InputFile${isError ? ' error' : ''} ${className}` })} >
          <input {...getInputProps()} />
          <em className='label' >
            {
              !file || clearContent
                ? placeholder || <div className='selectInput'>
                  <img alt='file'
                    src={FileIcon as string}/><p>Click to select or drag and drop the file here</p></div>
                : placeholder || '{{name}} ({{size}} bytes)'.replace('{{name}}', file.name).replace('{{size}}', formatNumber(file.size))
            }
          </em>
        </div>
      )}
    </Dropzone>
  );

  return label
    ? (
      <Labelled
        help={help}
        isFull={isFull}
        label={label}
        withEllipsis={withEllipsis}
        withLabel={withLabel}
      >
        {dropZone}
      </Labelled>
    )
    : dropZone;
}

export default React.memo(styled(InputFile)`
  background: var(--bg-input);
  font-size: 1rem;
  margin: 0.25rem 0;
  width: 100% !important;
  border: 1px dashed var(--link-color);
  border-radius: 8px;
  padding: 24px 27px;

  &.error {
    background: var(--bg-input-error);
    border-color: #e0b4b4;
  }

  &:hover {
    cursor: pointer;
  }

  .selectInput{
    display: flex;
    align-items: center;

    p{
      margin-left: 11.75px;
      color: var(--tabs-color);
      font-size: 16px;
      font-family: var(--font-roboto);
      font-style: normal;
    }
  }
`);
