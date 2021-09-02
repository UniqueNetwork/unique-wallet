// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import React, { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';
import Loader from 'semantic-ui-react/dist/commonjs/elements/Loader';

import { SocialShareModal, TransferModal } from '@polkadot/react-components';
import { useDecoder, useMarketplaceStages, useSchema, useToggle } from '@polkadot/react-hooks';

import AccordionArrow from './AccordionArrow';
// import burnTokenIcon from './burnTokenIcon.svg';
import shareIcon from './shareIcon.svg';

interface NftDetailsProps {
  account: string;
}

function NftDetails ({ account }: NftDetailsProps): React.ReactElement<NftDetailsProps> {
  const query = new URLSearchParams(useLocation().search);
  const tokenId = query.get('tokenId') || '';
  const collectionId = query.get('collectionId') || '';
  const [showTransferForm, setShowTransferForm] = useState<boolean>(false);
  const [showSocialShareModal, setShowSocialShareModal] = useState<boolean>(false);
  const { hex2a } = useDecoder();
  const { attributes, collectionInfo, reFungibleBalance, tokenUrl } = useSchema(account, collectionId, tokenId);
  const { tokenInfo } = useMarketplaceStages(account, collectionInfo, tokenId);
  const { collectionName16Decoder } = useDecoder();
  const [isCollectionCollapsed, toggleCollectionCollapsed] = useToggle(true);
  const [isAttributesCollapsed, toggleAttributesCollapsed] = useToggle(true);

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
            <div className='token-info--row--attributes--block'>
              <Header as='h2'>
                {collectionInfo && <span>{hex2a(collectionInfo.TokenPrefix)}</span>} #{tokenId}
              </Header>
              <div className='share'>
                <a
                  className='share-link'
                  onClick={setShowSocialShareModal.bind(null, true)}
                >
                  <img
                    alt='share-icon'
                    src={shareIcon as string}
                  />
                  Share link
                </a>
              </div>
              { (!uOwnIt && tokenInfo?.Owner) && (
                <div className='info-row'><strong>Owner:</strong> {tokenInfo?.Owner?.toString()}</div>
              )}
              { uOwnIt && (
                <div className='action-block'>
                  <Button
                    content='Send'
                    onClick={setShowTransferForm.bind(null, !showTransferForm)}
                  />
                  {/* <Button
                    className='warning-action'
                    content={
                      <>
                        <img
                          alt='burn token'
                          src={burnTokenIcon as string}
                        />
                        Burn token
                      </>
                    }
                    onClick={setShowTransferForm.bind(null, !showTransferForm)}
                  /> */}
                </div>
              )}
            </div>

            { collectionInfo && (
              <div className='token-info--row--attributes--block'>
                <div className='accordion-left'>
                  <div
                    className={`accordion-left--header ${isCollectionCollapsed ? '' : 'closed'}`}
                    onClick={toggleCollectionCollapsed}
                  >
                    COLLECTION
                    <AccordionArrow
                      color={'var(--text-color)'}
                    />
                  </div>
                  { isCollectionCollapsed && (
                    <div className='accordion-left--body'>
                      <p>
                        <strong>Name: </strong>
                        {/* <a onClick={() => console.log('click')}>
                          {collectionName16Decoder(collectionInfo.Name)}
                        </a> */}
                        {collectionName16Decoder(collectionInfo.Name)}
                      </p>
                      <p>
                        <strong>Collection ID: </strong>
                        {collectionInfo.id}
                      </p>
                      <p>
                        <strong>Description: </strong>
                        {collectionName16Decoder(collectionInfo.Description)}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
            { attributes && Object.values(attributes).length > 0 && (
              <div className='token-info--row--attributes--block'>
                <div className='accordion-left'>
                  <div
                    className={`accordion-left--header ${isAttributesCollapsed ? '' : 'closed'}`}
                    onClick={toggleAttributesCollapsed}
                  >
                    ATTRIBUTES
                    <AccordionArrow color={'var(--text-color)'} />
                  </div>
                  { isAttributesCollapsed && (
                    <div className='accordion-left--body'>
                      {Object.keys(attributes).map((attrKey) => {
                        if (!Array.isArray(attributes[attrKey])) {
                          return <p key={attrKey}><strong>{attrKey}</strong>: {attributes[attrKey]}</p>;
                        }

                        return (
                          <p key={attrKey}><strong>{attrKey}:</strong> {(attributes[attrKey] as string[]).join(', ')}</p>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}
            { showSocialShareModal && (
              <SocialShareModal
                closeModal={setShowSocialShareModal.bind(null, false)}
              />
            )}
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
