// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

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

    return variable;
  }

  window.ENV = window.ENV || {
    FAVICON_PATH: 'favicons/marketplace',
    KUSAMA_DECIMALS: 12,
    MAX_GAS: 1000000000000,
    MIN_PRICE: 0.000001,
    MIN_TED_COLLECTION: 1,
    QUOTE_ID: 2,
    VALUE: 0,
    WHITE_LABEL_URL: 'https://whitelabel.unique.network',
    UNIQUE_COLLECTION_IDS: [23, 25, 155],
    UNIQUE_SUBSTRATE_API: 'wss://testnet2.uniquenetwork.io',
    KUSAMA_API: 'wss://kusama-rpc.polkadot.io',
    KUSAMA_BACKUP_API: 'wss://polkadot.api.onfinality.io/public-ws',
    GRAPH_QL_API: 'https://dev-api-explorer.unique.network/v1/graphql',
    GRAPH_QL_ADMIN_SECRET: 'tPRzYEcOvNkBZasYn7Vf8Jx5GJAZx'
  };

  // eslint-disable-next-line no-template-curly-in-string
  window.ENV.TAG = defaults('${TAG}', '');

  // eslint-disable-next-line no-template-curly-in-string
  window.ENV.PRODUCTION = defaults('${PRODUCTION}', false);
}(this));
