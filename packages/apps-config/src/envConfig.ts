// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

export type EnvConfigType = {
  environment: string;
  faviconPath: string;
  kusamaDecimals: number; // 12
  maxGas: number; // 1000000000000
  midTedCollection: number;
  minPrice: number;
  quoteId: number; // 2
  uniqueTelegram: string;
  uniqueCollectionIds: string[]; // ['23']
  uniqueApi: string;
  uniqueSubstrateApi: string;
  value: number; // 0
  version: string;
  whiteLabelUrl: string;
};

const envConfig: EnvConfigType = {
  environment: (process.env.ENVIRONMENT as string),
  faviconPath: (process.env.FAVICON_PATH as string),
  kusamaDecimals: +(process.env.KUSAMA_DECIMALS as string),
  maxGas: +(process.env.MAX_GAS as string),
  midTedCollection: +(process.env.MIN_TED_COLLECTION as string),
  minPrice: +(process.env.MIN_PRICE as string),
  quoteId: +(process.env.QUOTE_ID as string),
  uniqueApi: (process.env.UNIQUE_API as string),
  uniqueCollectionIds: (process.env.UNIQUE_COLLECTION_IDS as string).split(','),
  uniqueSubstrateApi: (process.env.UNIQUE_SUBSTRATE_API as string),
  uniqueTelegram: (process.env.UNQ_TELEGRAM as string),
  value: +(process.env.VALUE as string),
  version: (process.env.VERSION as string),
  whiteLabelUrl: (process.env.WHITE_LABEL_URL as string)
};

export default envConfig;
