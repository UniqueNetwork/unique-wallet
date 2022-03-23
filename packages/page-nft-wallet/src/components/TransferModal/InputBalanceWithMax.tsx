// Copyright 2017-2021 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import BN from 'bn.js';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import envConfig from '@polkadot/apps-config/envConfig';
import { Input } from '@polkadot/react-components';
import { formatKsmBalance } from '@polkadot/react-hooks/useKusamaApi';
import { formatStrBalance } from '@polkadot/react-hooks/utils';
import { formatBalance } from '@polkadot/util';

const { kusamaDecimals } = envConfig;

interface Props {
  autoFocus?: boolean;
  children?: React.ReactNode;
  className?: string;
  defaultValue?: BN;
  help?: React.ReactNode;
  isDisabled?: boolean;
  isError?: boolean;
  isFull?: boolean;
  isKusama?: boolean;
  isWarning?: boolean;
  isZeroable?: boolean;
  label?: React.ReactNode;
  labelExtra?: React.ReactNode;
  maxTransfer: BN | null;
  onChange: (value?: BN) => void;
  onEnter?: () => void;
  onEscape?: () => void;
  placeholder?: string;
  value?: BN;
  withEllipsis?: boolean;
  withLabel?: boolean;
  withMax?: boolean;
  // ограничение на длину числового значения передаваемых коинов в кошельке
  limitNumberDigits?: number;
}

interface CustomSyntheticEvent extends React.SyntheticEvent{
  key: string;
}

function reformat (value: BN | undefined, isKusama: boolean): string {
  if (!value) {
    return '0';
  }

  if (isKusama) {
    return formatKsmBalance(value);
  }

  return formatStrBalance(value, formatBalance.getDefaults().decimals);
}

function InputBalanceWithMax ({ autoFocus, defaultValue: inDefault, isDisabled, isError, isKusama, label, maxTransfer, onChange, onEnter, onEscape, placeholder, withLabel, limitNumberDigits = 0 }: Props): React.ReactElement<Props> {
  const [valueLocal, setValueLocal] = useState<string>('0');

  const defaultValue = useMemo(
    () => inDefault ? reformat(inDefault, !!isKusama) : undefined,
    [inDefault, isKusama]
  );

  const onValueLocalChange = useCallback((val: string) => {

    if(limitNumberDigits !== 0 && val.replace(/\D/g,'').length > limitNumberDigits) {
      return;
    }

    let arr: string[] = [];

    if (val.includes('.')) {
      arr = val.split('.');
    } else if (val.includes(',')) {
      arr = val.split(',');
    }

    const decimals = isKusama ? kusamaDecimals : formatBalance.getDefaults().decimals;

    if (arr[0]?.length > decimals || arr[1]?.length > decimals) {
      return;
    }

    setValueLocal(val);
  }, [isKusama]);

  const onValueChange = useCallback((val: string) => {
    const decimals = new BN(isKusama ? kusamaDecimals : formatBalance.getDefaults().decimals);
    const normalizedVal = val.replace('.', '');
    const parts = val.split('.');
    // converting price: "1.000000000000000001" -> BN:1000000000000000001 | "0.000000000000000123" -> BN:123
    const price = new BN(normalizedVal).mul(new BN(10).pow(decimals.sub(new BN(normalizedVal.length - parts[0].length))));

    if (!Number(price.toString()[0])) {
      return;
    }

    onChange(price);
  }, [isKusama, onChange]);

  const onSetMax = useCallback(() => {
    if (maxTransfer) {
      setValueLocal(reformat(maxTransfer, !!isKusama));
    }
  }, [isKusama, maxTransfer]);

  const onKeyDown = (event: CustomSyntheticEvent) => {
    ((event.key === ',' || event.key === '.') && !valueLocal?.length) && event.preventDefault();
    ['e', 'E', '+', '-'].includes(event.key) && event.preventDefault();
  };

  useEffect(() => {
    onValueChange(valueLocal);
  }, [onValueChange, valueLocal]);

  return (
    <div className='input-balance-with-max'>
      <Input
        autoFocus={autoFocus}
        className='isSmall'
        defaultValue={defaultValue}
        isDisabled={isDisabled}
        isError={isError}
        label={label}
        onChange={onValueLocalChange}
        onEnter={onEnter}
        onEscape={onEscape}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        type='number'
        value={valueLocal}
        withLabel={withLabel}
      />
      <a
        className='set-max-amount'
        onClick={onSetMax}
      >
        Max
      </a>
    </div>
  );
}

export default React.memo(InputBalanceWithMax);
