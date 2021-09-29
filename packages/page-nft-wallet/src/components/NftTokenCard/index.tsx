// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import React, { useCallback } from 'react';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';
import Card from 'semantic-ui-react/dist/commonjs/views/Card';

import { useDecoder, useSchema } from '@polkadot/react-hooks';

interface Props {
  account: string | undefined;
  collectionId: string;
  openDetailedInformationModal: (collectionId: string, tokenId: string) => void;
  tokenId: string;
}

const NftTokenCard = ({ account, collectionId, openDetailedInformationModal, tokenId }: Props): React.ReactElement<Props> => {
  const { collectionInfo, tokenName, tokenUrl } = useSchema(account, collectionId, tokenId);
  const { collectionName16Decoder, hex2a } = useDecoder();

  const onOpenTokenPage = useCallback(() => {
    openDetailedInformationModal(collectionId, tokenId);
  }, [collectionId, openDetailedInformationModal, tokenId]);

  return (
    <Card
      className='token-card'
      key={tokenId}
      onClick={onOpenTokenPage}
    >
      { tokenId && (
        <Image
          src={tokenUrl}
          ui={false}
          wrapped
        />
      )}
      { !!(tokenId && collectionInfo) && (
        <Card.Content>
          <Card.Description>
            <div className='card-name'>
              <div className='card-name__title'>{hex2a(collectionInfo.TokenPrefix)} {`#${tokenId}`} {tokenName?.value}</div>
              <div className='card-name__field'>{ collectionName16Decoder(collectionInfo.Name)}</div>
            </div>
          </Card.Description>
        </Card.Content>
      )}
    </Card>
  );
};

export default React.memo(NftTokenCard);
