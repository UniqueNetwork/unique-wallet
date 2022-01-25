// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import BN from 'bn.js';
import type { ContractPromise } from '@polkadot/api-contract';
import type { AbiMessage } from '@polkadot/api-contract/types';
import type { AccountId } from '@polkadot/types/interfaces';
import { IKeyringPair } from '@polkadot/types/types';
import { formatBalance } from '@polkadot/util';
import envConfig from '@polkadot/apps-config/envConfig';

const { decimals, minPrice } = envConfig;

export type CrossAccountId = {
  Substrate: string,
} | {
  Ethereum: string,
};

export const findCallMethodByName = (contractInstance: ContractPromise | null, methodName: string): AbiMessage | null => {
  const message = contractInstance && Object.values(contractInstance.abi.messages).find((message) => message.identifier === methodName);

  return message || null;
};

export function strToUTF16 (str: string): any {
  const buf: number[] = [];

  for (let i = 0, strLen = str.length; i < strLen; i++) {
    buf.push(str.charCodeAt(i));
  }

  return buf;
}

export function normalizeAccountId (input: string | AccountId | CrossAccountId | IKeyringPair): CrossAccountId {
  if (typeof input === 'string') {
    if (input.length === 48 || input.length === 47) {
      return { Substrate: input };
    } else if (input.length === 42 && input.startsWith('0x')) {
      return { Ethereum: input.toLowerCase() };
    } else if (input.length === 40 && !input.startsWith('0x')) {
      return { Ethereum: '0x' + input.toLowerCase() };
    } else {
      throw new Error(`Unknown address format: "${input}"`);
    }
  }

  if ('address' in input) {
    return { Substrate: input.address };
  }

  if ('Ethereum' in input) {
    return {
      Ethereum: input.Ethereum.toLowerCase()
    };
  } else if ('ethereum' in input) {
    return {
      Ethereum: (input as { ethereum: string }).ethereum.toLowerCase()
    };
  } else if ('Substrate' in input) {
    return input;
  } else if ('substrate' in input) {
    return {
      Substrate: (input as { substrate: string }).substrate
    };
  }

  // AccountId
  return { Substrate: input.toString() };
}

export function formatStrBalance (value: BN | undefined = new BN(0), incomeDecimals?: number): string {
  if (!value || value.toString() === '0') {
    return '0';
  }

  const tokenDecimals = incomeDecimals || formatBalance.getDefaults().decimals;

  if (value.lte(new BN(minPrice * Math.pow(10, tokenDecimals)))) {
    return ` ${minPrice}`;
  }

  // calculate number after decimal point
  const decNum = value?.toString().length - tokenDecimals;
  let balanceStr = '';

  if (decNum < 0) {
    balanceStr = ['0', '.', ...Array.from('0'.repeat(Math.abs(decNum))), ...value.toString()].join('');
  }

  if (decNum > 0) {
    balanceStr = [...value.toString().substr(0, decNum), '.', ...value.toString().substr(decNum, tokenDecimals - decNum)].join('');
  }

  if (decNum === 0) {
    balanceStr = ['0', '.', ...value.toString().substr(decNum, tokenDecimals - decNum)].join('');
  }

  const arr = balanceStr.toString().split('.');

  return `${arr[0]}${arr[1] ? `.${arr[1].substr(0, decimals)}` : ''}`;
}
