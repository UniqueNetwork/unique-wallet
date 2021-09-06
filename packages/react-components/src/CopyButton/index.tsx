// Copyright 2017-2021 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useCallback, useContext } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import styled from 'styled-components';

import StatusContext from '../Status/Context';
import { useTranslation } from '../translate';
import Icon from './copyIcon.svg';

interface Props {
  children?: React.ReactNode;
  className?: string;
  label?: React.ReactNode;
  type?: string;
  isMnemonic?: boolean;
  value: string;
}

const NOOP = () => undefined;

function CopyButton ({ children, className = '', type, value }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const { queueAction } = useContext(StatusContext);

  const _onCopy = useCallback(
    (): void => {
      queueAction && queueAction({
        action: t<string>('clipboard'),
        message: t<string>('{{type}} copied', { replace: { type: type || t<string>('value') } }),
        status: 'queued'
      });
    },
    [type, queueAction, t]
  );

  return (
    <div className={`ui--CopyButton ${className}`}>
      <CopyToClipboard
        onCopy={_onCopy}
        text={value}
      >
        <div className='copyContainer'>
          {children}
          <div
            className='icon-button show-on-hover'
            onClick={NOOP}
          >
            <img alt='copy'
              src={Icon as string}/>
          </div>
        </div>
      </CopyToClipboard>
    </div>
  );
}

export default React.memo(CopyButton);
