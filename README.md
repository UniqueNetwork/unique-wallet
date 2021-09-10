# Wallet-app

Unique network wallet application

## Commands

Start project locally

Starts project on [http://localhost:3000](http://localhost:3000) into development mode.

### `yarn start`

For production build

### `yarn build`

Docker build

`docker build -t unique-marketplace:prod .`

`docker run -p 8080:80 -t unique-marketplace:prod`

apps - application enter point

apps-config - settings including envConfig, api endpoints and others network things.

apps-routing - router, if you want to add a new page describe it here.

page-accounts - create, import, and store non-extension accounts, transfer assets.

page-nft-wallet - wallet, show and manage your tokens.

react-api - the polkadot api connection context.

react-components - reusable components for pages.

react-hooks - reusable hooks.

react-params - components settings.

react-query - transactions query.

react-signer - transactions signer.

test-support - tests and mocks.
