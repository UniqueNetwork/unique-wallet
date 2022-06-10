// Copyright 2017-2022 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useCallback, useEffect, useState } from 'react';

import envConfig from '@polkadot/apps-config/envConfig';
import { NftCollectionInterface, useCollection } from '@polkadot/react-hooks';

const { ipfsGateway } = envConfig;

export function useCollectionCover (collectionInfo: NftCollectionInterface | undefined): { imgUrl: string | undefined } {
  const [imgUrl, setImgUrl] = useState<string>();
  const { getCollectionPropertyValueByKey } = useCollection();

  const fillCollectionCover = useCallback(() => {
    if (!collectionInfo) {
      return;
    }

    try {
      const coverImgObj = getCollectionPropertyValueByKey(collectionInfo, '_old_variableOnChainSchema');

      if (!coverImgObj) {
        return;
      }

      const coverImgJson = JSON.parse(coverImgObj) as { collectionCover: string };

      if (coverImgJson?.collectionCover) {
        setImgUrl(`${ipfsGateway}/${coverImgJson?.collectionCover}`);
      } else {
        console.log('onChainSchema is empty');
      }
    } catch (e) {
      console.log('fillCollectionCover error', e);
    }
  }, [collectionInfo, getCollectionPropertyValueByKey]);

  useEffect(() => {
    fillCollectionCover();
  }, [fillCollectionCover]);

  return {
    imgUrl
  };
}
