// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import React, { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';
import Loader from 'semantic-ui-react/dist/commonjs/elements/Loader';
import { TransferModal } from '@polkadot/react-components';
import { useDecoder, useMarketplaceStages, useSchema } from '@polkadot/react-hooks';

interface NftDetailsProps {
  account: string;
}

function NftDetails ({ account }: NftDetailsProps): React.ReactElement<NftDetailsProps> {
  const query = new URLSearchParams(useLocation().search);
  const tokenId = query.get('tokenId') || '';
  const collectionId = query.get('collectionId') || '';
  const [showTransferForm, setShowTransferForm] = useState<boolean>(false);
  const { hex2a } = useDecoder();
  const { attributes, collectionInfo, reFungibleBalance, tokenUrl } = useSchema(account, collectionId, tokenId);
  const { tokenInfo } = useMarketplaceStages(account, collectionInfo, tokenId);

  const uOwnIt = tokenInfo?.Owner?.toString() === account;

  const goBack = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    history.back();
  }, []);

  const onTransferSuccess = useCallback(() => {
    setShowTransferForm(false);
  }, []);

  return (
    <div className='toke-details'>
      <a
        className='go-back'
        href='/'
        onClick={goBack}
      >
        <svg fill='none'
          height='16'
          viewBox='0 0 16 16'
          width='16'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M13.5 8H2.5'
            stroke='var(--card-link-color)'
            strokeLinecap='round'
            strokeLinejoin='round'/>
          <path d='M7 3.5L2.5 8L7 12.5'
            stroke='var(--card-link-color)'
            strokeLinecap='round'
            strokeLinejoin='round'/>
        </svg>
        back
      </a>
      <div className='token-info'>
        { !collectionInfo && (
          <Loader
            active
            className='load-info'
            inline='centered'
          />
        )}
        <div className='token-info--row'>
          <div className='token-info--row--image'>
            { collectionInfo && (
              <Image
                className='token-image-big'
                src={tokenUrl}
              />
            )}
          </div>
          <div className='token-info--row--attributes'>
            <Header as='h3'>
              {collectionInfo && <span>{hex2a(collectionInfo.TokenPrefix)}</span>} #{tokenId}
            </Header>
            { attributes && Object.values(attributes).length > 0 && (
              <div className='accessories'>
                Attributes:
                {Object.keys(attributes).map((attrKey) => {
                  if (!Array.isArray(attributes[attrKey])) {
                    return <p key={attrKey}>{attrKey}: {attributes[attrKey]}</p>;
                  }

                  return (
                    <p key={attrKey}>{attrKey}: {(attributes[attrKey] as string[]).join(', ')}</p>
                  );
                })}
              </div>
            )}

            <div className='divider' />
            { (!uOwnIt && tokenInfo?.Owner) && (
              <div className='info-row'><strong>Owner:</strong> {tokenInfo?.Owner?.toString()}</div>
            )}


            <div className='buttons'>
              { uOwnIt && (
                <Button
                  content='Transfer'
                  onClick={setShowTransferForm.bind(null, !showTransferForm)}
                />
              )}
            </div>

            { (showTransferForm && collectionInfo) && (
              <TransferModal
                account={account}
                closeModal={setShowTransferForm.bind(null, false)}
                collection={collectionInfo}
                reFungibleBalance={reFungibleBalance}
                tokenId={tokenId}
                updateTokens={onTransferSuccess}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(NftDetails);
