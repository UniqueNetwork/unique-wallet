// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import React from 'react';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';
import Card from 'semantic-ui-react/dist/commonjs/views/Card';

import { useDecoder, useSchema } from '@polkadot/react-hooks';

interface Props {
  account: string | undefined;
  collectionId: string;
  openDetailedInformationModal: (collectionId: string, tokenId: string) => void;
  token: { tokenId: string };
}

const NftTokenCard = ({ account, collectionId, openDetailedInformationModal, token }: Props): React.ReactElement<Props> => {
  const { collectionInfo, tokenName, tokenUrl } = useSchema(account, collectionId, token.tokenId);
  const { collectionName16Decoder, hex2a } = useDecoder();

  return (
    <Card
      className='token-card'
      key={token.tokenId}
      onClick={openDetailedInformationModal.bind(null, collectionId, token.tokenId)}
    >
      { token && (
        <Image
          src={tokenUrl}
          ui={false}
          wrapped
        />
      )}
      { !!(token && collectionInfo) && (
        <Card.Content>
          <Card.Description>
            <div className='card-name'>
              <div className='card-name__title'>{hex2a(collectionInfo.TokenPrefix)} {`#${token.tokenId}`} {tokenName?.value}</div>
              <div className='card-name__field'>{ collectionName16Decoder(collectionInfo.Name)}</div>
            </div>
          </Card.Description>
        </Card.Content>
      )}
    </Card>
  );
};

export default React.memo(NftTokenCard);
