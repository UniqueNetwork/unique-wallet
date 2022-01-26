// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

export type EnvConfigType = {
  environment: string;
  faviconPath: string;
  graphQlAdminSecret: string;
  graphQlApi: string;
  ipfsGateway: string;
  kusamaApiUrl: string;
  kusamaBackupApiUrl: string;
  kusamaDecimals: number; // 12
  maxGas: number; // 1000000000000
  minPrice: number;
  quoteId: number; // 2
  uniqueCollectionIds: string[]; // ['23']
  uniqueSubstrateApi: string;
  uniqueTelegram: string,
  value: number; // 0
  version: string;
  whiteLabelUrl: string;
};

declare global {
  interface Window {
    ENV?: {
      ENVIRONMENT: string;
      FAVICON_PATH: string;
      GRAPH_QL_ADMIN_SECRET: string;
      GRAPH_QL_API: string;
      IPFS_GATEWAY: string;
      KUSAMA_API: string;
      KUSAMA_BACKUP_API: string;
      KUSAMA_DECIMALS: number; // 12
      MAX_GAS: number; // 1000000000000
      MIN_PRICE: number;
      QUOTE_ID: number; // 2
      UNIQUE_COLLECTION_IDS: string; // ['23']
      UNIQUE_SUBSTRATE_API: string;
      UNIQUE_TELEGRAM: string;
      VALUE: number; // 0
      VERSION: string;
      WHITE_LABEL_URL: string;
    }
  }
}

const envConfig: EnvConfigType = {
  environment: window.ENV?.ENVIRONMENT || process.env.ENVIRONMENT,
  faviconPath: window.ENV?.FAVICON_PATH || process.env.FAVICON_PATH,
  graphQlAdminSecret: window.ENV?.GRAPH_QL_ADMIN_SECRET || process.env.GRAPH_QL_ADMIN_SECRET,
  graphQlApi: window.ENV?.GRAPH_QL_API || process.env.GRAPH_QL_API,
  ipfsGateway: window.ENV?.IPFS_GATEWAY || process.env.IPFS_GATEWAY,
  kusamaApiUrl: window.ENV?.KUSAMA_API || process.env.KUSAMA_API,
  kusamaBackupApiUrl: window.ENV?.KUSAMA_BACKUP_API || process.env.KUSAMA_BACKUP_API,
  kusamaDecimals: +(window.ENV?.KUSAMA_DECIMALS || process.env.KUSAMA_DECIMALS),
  maxGas: +(window.ENV?.MAX_GAS || process.env.MAX_GAS),
  minPrice: +(window.ENV?.MIN_PRICE || process.env.MIN_PRICE),
  quoteId: +(window.ENV?.QUOTE_ID || process.env.QUOTE_ID),
  uniqueCollectionIds: (window.ENV?.UNIQUE_COLLECTION_IDS || process.env.UNIQUE_COLLECTION_IDS).split(','),
  uniqueSubstrateApi: window.ENV?.UNIQUE_SUBSTRATE_API || process.env.UNIQUE_SUBSTRATE_API,
  uniqueTelegram: typeof window.ENV?.UNIQUE_TELEGRAM === 'string' ? window.ENV?.UNIQUE_TELEGRAM : process.env.UNIQUE_TELEGRAM,
  value: Number(window.ENV?.VALUE || process.env.VALUE),
  version: window.ENV?.VERSION || process.env.VERSION,
  whiteLabelUrl: window.ENV?.WHITE_LABEL_URL || process.env.WHITE_LABEL_URL
};

export default envConfig;
