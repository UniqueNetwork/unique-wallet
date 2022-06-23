// Copyright 2017-2022 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useCallback } from 'react';

import { useApi } from '@polkadot/react-hooks/useApi';
import { useCollection } from '@polkadot/react-hooks/useCollection';
import { useMetadata } from '@polkadot/react-hooks/useMetadata';

import { AttributesDecoded, NftCollectionInterface, TokenDetailsInterface } from './nftTypes';

interface UseTokenInterface {
  getDetailedTokenInfo: (collectionId: string, tokenId: string) => Promise<TokenDetailsInterface | null>
  getTokenAttributes: (collectionInfo: NftCollectionInterface, tokenId: string) => Promise<AttributesDecoded>;
}

export function useToken (): UseTokenInterface {
  const { api } = useApi();
  const { getCollectionOnChainSchema } = useCollection();
  const { decodeStruct } = useMetadata();

  const getTokenPropertyValueByKey = useCallback((tokenInfo: TokenDetailsInterface, key: string) => {
    return tokenInfo?.properties.find((property) => property.key === key)?.value;
  }, []);

  const getDetailedTokenInfo = useCallback(async (collectionId: string, tokenId: string): Promise<TokenDetailsInterface | null> => {
    if (!api) {
      return null;
    }

    try {
      const tokenInfo = (await api.rpc.unique.tokenData(collectionId, tokenId)) as TokenDetailsInterface;

      return {
        owner: tokenInfo?.owner?.toHuman(),
        properties: tokenInfo?.properties?.map((x) => ({ key: x.key.toHuman(), value: x?.value?.toJSON() }))
      };
    } catch (e) {
      console.log('getDetailedTokenInfo error', e);

      return null;
    }
  }, [api]);

  const getTokenAttributes = useCallback(async (collectionInfo: NftCollectionInterface, tokenId: string): Promise<AttributesDecoded> => {
    const onChainSchema = getCollectionOnChainSchema(collectionInfo);
    const tokenDetails = await getDetailedTokenInfo(collectionInfo.id, tokenId);

    if (tokenDetails) {
      const tokenConstData = getTokenPropertyValueByKey(tokenDetails, '_old_constData');

      console.log('onChainSchema', onChainSchema, 'tokenDetails', tokenDetails, 'tokenConstData', tokenConstData);

      return {
        ...decodeStruct({ attr: onChainSchema.constSchema, data: tokenConstData })
      };
    }

    return {};
  }, [decodeStruct, getCollectionOnChainSchema, getDetailedTokenInfo, getTokenPropertyValueByKey]);

  return {
    getDetailedTokenInfo,
    getTokenAttributes
  };
}
