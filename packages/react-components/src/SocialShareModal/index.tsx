// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import React, { useCallback } from 'react';
import { FacebookShareButton, RedditShareButton, TelegramShareButton, TwitterShareButton } from 'react-share';
import Modal from 'semantic-ui-react/dist/commonjs/modules/Modal/Modal';
import Popup from 'semantic-ui-react/dist/commonjs/modules/Popup';

import closeIcon from './closeIconBlack.svg';
import copyIcon from './copyIcon.svg';
import facebookIcon from './facebookIcon.svg';
import redditIcon from './redditIcon.svg';
import telegramIcon from './telegramIcon.svg';
import twitterIcon from './twitterIcon.svg';

interface Props {
  closeModal: () => void;
}

function SocialShareModal ({ closeModal }: Props): React.ReactElement<Props> {
  const copyUrl = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    navigator.clipboard.writeText(window.location.href);
    /* Alert the copied text */
    // alert(`Copied the text: ${window.location.href}`);
  }, []);

  return (
    <Modal
      className='unique-modal share-modal'
      onClose={closeModal}
      open
      size='mini'
    >
      <Modal.Header>
        <h2>Share</h2>
        <img
          alt='Close modal'
          onClick={closeModal}
          src={closeIcon as string}
        />
      </Modal.Header>
      <Modal.Content>
        <TwitterShareButton url={window.location.href}>
          <img
            alt='twitterIcon'
            src={twitterIcon as string}
          />
          Twitter
        </TwitterShareButton>
        <RedditShareButton url={window.location.href}>
          <img
            alt='redditIcon'
            src={redditIcon as string}
          />
          Reddit
        </RedditShareButton>
        <TelegramShareButton url={window.location.href}>
          <img
            alt='telegramIcon'
            src={telegramIcon as string}
          />
          Telegram
        </TelegramShareButton>
        <div
          className='copy-link'
          onClick={copyUrl}
        >
          <Popup
            className={'help copy-btn'}
            content={'Copied'}
            on={'click'}
            position={'right center'}
            trigger={<div className='copy-icon 12'>
              <img
                alt='question'
                src={copyIcon as string}
                title='Help'
              />
              <p>Copy link</p>
            </div>}
          />
        </div>
        <FacebookShareButton url={window.location.href}>
          <img
            alt='facebookIcon'
            src={facebookIcon as string}
          />
          Facebook
        </FacebookShareButton>
      </Modal.Content>
    </Modal>
  );
}

export default React.memo(SocialShareModal);
