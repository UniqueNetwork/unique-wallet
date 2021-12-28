// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable no-template-curly-in-string */

(function (window) {
  function defaults (variable, defaults) {
    if (/^\$\{(.*)\}$/.test(variable)) {
      if (/^\$\{(.*)\}$/.test(defaults)) {
        return undefined;
      }

      return defaults;
    }

    switch (typeof defaults) {
      case 'boolean':
        if (variable === true.toString()) {
          return true;
        } else if (variable === false.toString()) {
          return false;
        } else {
          return !!variable;
        }

      case 'number':
        return Number(variable);
    }

    return variable || defaults;
  }

  window.ENV = window.ENV || {
    FAVICON_PATH: defaults('${FAVICON_PATH}', 'favicons/marketplace'),
    IPFS_GATEWAY: defaults('${IPFS_GATEWAY}', 'https://dev-ipfs.unique.network/ipfs'),
    KUSAMA_DECIMALS: defaults('${KUSAMA_DECIMALS}', 12),
    MAX_GAS: defaults('${MAX_GAS}', 1000000000000),
    MIN_PRICE: defaults('${MIN_PRICE}', 0.000001),
    MIN_TED_COLLECTION: defaults('${MIN_TED_COLLECTION}', 1),
    QUOTE_ID: defaults('${QUOTE_ID}', 2),
    VALUE: defaults('${VALUE}', 0),
    WHITE_LABEL_URL: defaults('${WHITE_LABEL_URL}', 'https://whitelabel.unique.network'),
    UNIQUE_COLLECTION_IDS: defaults('${UNIQUE_COLLECTION_IDS}', [3].join(',')),
    UNIQUE_SUBSTRATE_API: defaults('${UNIQUE_SUBSTRATE_API}', 'wss://opal.unique.network'),
    // UNIQUE_SUBSTRATE_API: defaults('${UNIQUE_SUBSTRATE_API}', 'wss://quartz.unique.network'),
    UNIQUE_TELEGRAM: defaults('${UNIQUE_TELEGRAM}', '' /* 'https://t.me/unique2faucetbot' */),
    KUSAMA_API: defaults('${KUSAMA_API}', 'wss://kusama-rpc.polkadot.io'),
    KUSAMA_BACKUP_API: defaults('${KUSAMA_BACKUP_API}', 'wss://polkadot.api.onfinality.io/public-ws'),
    GRAPH_QL_API: defaults('${GRAPH_QL_API}', 'https://dev-api-explorer.unique.network/v1/graphql'),
    //GRAPH_QL_API: defaults('${GRAPH_QL_API}', 'https://quartz-explorer-api.unique.network/v1/graphql'),
    GRAPH_QL_ADMIN_SECRET: defaults('${GRAPH_QL_ADMIN_SECRET}', '')
  };

  // eslint-disable-next-line no-template-curly-in-string
  window.ENV.TAG = defaults('${TAG}', '');

  // eslint-disable-next-line no-template-curly-in-string
  window.ENV.PRODUCTION = defaults('${PRODUCTION}', false);
}(this));
