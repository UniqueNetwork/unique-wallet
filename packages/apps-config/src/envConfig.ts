// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

export type EnvConfigType = {
  environment: string;
  faviconPath: string;
  graphQlAdminSecret: string;
  graphQlApi: string;
  kusamaApiUrl: string;
  kusamaBackupApiUrl: string;
  kusamaDecimals: number; // 12
  maxGas: number; // 1000000000000
  minPrice: number;
  quoteId: number; // 2
  uniqueCollectionIds: string[]; // ['23']
  uniqueSubstrateApi: string;
  value: number; // 0
  version: string;
  whiteLabelUrl: string;
};

const envConfig: EnvConfigType = {
  environment: (process.env.ENVIRONMENT as string),
  faviconPath: (process.env.FAVICON_PATH as string),
  graphQlAdminSecret: (process.env.GRAPH_QL_ADMIN_SECRET as string),
  graphQlApi: (process.env.GRAPH_QL_API as string),
  kusamaApiUrl: (process.env.KUSAMA_API as string),
  kusamaBackupApiUrl: (process.env.KUSAMA_BACKUP_API as string),
  kusamaDecimals: +(process.env.KUSAMA_DECIMALS as string),
  maxGas: +(process.env.MAX_GAS as string),
  minPrice: +(process.env.MIN_PRICE as string),
  quoteId: +(process.env.QUOTE_ID as string),
  uniqueCollectionIds: (process.env.UNIQUE_COLLECTION_IDS as string).split(','),
  uniqueSubstrateApi: (process.env.UNIQUE_SUBSTRATE_API as string),
  value: +(process.env.VALUE as string),
  version: (process.env.VERSION as string),
  whiteLabelUrl: (process.env.WHITE_LABEL_URL as string)
};

export default envConfig;
