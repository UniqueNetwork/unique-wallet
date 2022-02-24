// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

// external imports
import React from 'react';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header/Header';

// local imports and components
import { AppProps as Props } from '@polkadot/react-components/types';

function Faq (): React.ReactElement<Props> {
  return (
    <main className='faq-page'>
      <Header as='h1'>FAQ</Header>
      <div className='faq'>
        <Header as='h4'>Q: How can I connect my wallet?</Header>
        <p>A: You can use either <a href='https://polkadot.js.org/extension/'>https://polkadot.js.org/extension/</a> or `Manage accounts` page. Restore your wallet through the seed phrase, JSON file+password or QR code.</p>
        <p>Make sure that using Chrome or Firefox desktop with the Polkadot.js browser extension you’ve set your wallet account setting to `allow use on any chain`.</p>
        <p>Note that this option is not available to Ledger or TrustWallet users, their support will be added later. Rest assured your NFT is still safe in your wallet!</p>
        <Header as='h4'>Q: I connected the right wallet to the app but it shows that my SubstraPunk|Chelobrick belongs to a different address. Why?</Header>
        <p>A: Substrate account addresses (Polkadot, Kusama etc.) may look different on different networks but they have all the same private key underneath. You can see all transformations of any address on <a href='https://polkadot.subscan.io/tools/ss58_transform'>https://polkadot.subscan.io/tools/ss58_transform</a></p>
        <Header as='h4'>Q: How can I create a wallet?</Header>
        <p>A: You can use either <a href='https://polkadot.js.org/extension/'>https://polkadot.js.org/extension/</a> or `Manage accounts` page and follow the instructions. </p>
        <p>Keep your wallet seed phrase safe! Write it down on paper or export the JSON key with a password you would never forget.</p>
        <Header as='h4'>Q: How can I get KSM to my account?</Header>
        <p>A: You need to transfer (withdraw) from the other wallet or exchange. To do that:</p>
        <ol>
          <li>Autorise with your account;</li>
          <li>Copy your Kusama network address at My Tokens Coins page;</li>
          <li>Use this Kusama address to send KSM from any wallet or exchange.</li>
        </ol>
      </div>
    </main>
  );
}

export default React.memo(Faq);
