// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';
import Loader from 'semantic-ui-react/dist/commonjs/elements/Loader';

import { Breadcrumbs, SocialShareModal, TransferModal } from '@polkadot/react-components';
import { useDecoder, useSchema, useToggle } from '@polkadot/react-hooks';

import AccordionArrow from './AccordionArrow';
import shareIcon from './shareIcon.svg';

interface NftDetailsProps {
  account: string;
  setCollectionId: (id: string) => void;
}

function NftDetails ({ account, setCollectionId }: NftDetailsProps): React.ReactElement<NftDetailsProps> {
  const query = new URLSearchParams(useLocation().search);
  const tokenId = query.get('tokenId') || '';
  const collectionId = query.get('collectionId') || '';
  const [showTransferForm, setShowTransferForm] = useToggle(false);
  const [showSocialShareModal, setShowSocialShareModal] = useToggle(false);
  const [shouldUpdateOwner, setShouldUpdateOwner] = useState<boolean>(false);
  const { hex2a } = useDecoder();
  const { attributes, collectionInfo, reFungibleBalance, tokenDetails, tokenUrl } = useSchema(account, collectionId, tokenId, shouldUpdateOwner);
  const { collectionName16Decoder } = useDecoder();
  const [isCollectionCollapsed, toggleCollectionCollapsed] = useToggle(true);
  const [isAttributesCollapsed, toggleAttributesCollapsed] = useToggle(true);
  const uOwnIt = tokenDetails?.owner?.Substrate?.toString() === account;

  useEffect(() => {
    setShouldUpdateOwner(false);
  }, [account]);

  const onTransferSuccess = useCallback(() => {
    setShouldUpdateOwner(true);
  }, []);

  return (
    <div className='token-details'>
      <Breadcrumbs
        collectionInfo={collectionInfo}
        setCollectionId={setCollectionId}
        tokenId={tokenId}
      />
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
                {collectionInfo && <span>{hex2a(collectionInfo.tokenPrefix)}</span>} #{tokenId}
              </Header>
              <div className='share'>
                <a
                  className='share-link'
                  onClick={setShowSocialShareModal}
                >
                  <img
                    alt='share-icon'
                    src={shareIcon as string}
                  />
                  Share link
                </a>
              </div>
              { (!uOwnIt && tokenDetails?.owner) && (
                <div className='info-row'><strong>Owner:</strong> <p>{tokenDetails?.owner?.Substrate?.toString()}</p></div>
              )}
              { uOwnIt && (
                <div className='action-block'>
                  <Button
                    content='Send'
                    onClick={setShowTransferForm}
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
                        <a>{collectionName16Decoder(collectionInfo.name)}</a>
                      </p>
                      <p>
                        <strong>Collection ID: </strong>
                        {collectionInfo.id}
                      </p>
                      <p>
                        <strong>Description: </strong>
                        {collectionName16Decoder(collectionInfo.description)}
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
                        if (attrKey === 'ipfsJson') {
                          return null;
                        }

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
                closeModal={setShowSocialShareModal}
              />
            )}
            { (showTransferForm && collectionInfo) && (
              <TransferModal
                account={account}
                closeModal={setShowTransferForm}
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
