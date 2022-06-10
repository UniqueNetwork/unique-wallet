// Copyright 2017-2022 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useCallback } from 'react';

import { deserializeNft, ProtobufAttributeType } from '@polkadot/react-components/util/protobufUtils';

import { AttributesDecoded } from './nftTypes';

interface UseMetadataInterface {
  decodeStruct: ({ attr, data }: { attr?: any, data?: string }) => AttributesDecoded;
}

export type MetadataJsonType = {
  audio?: string;
  image?: string;
  page?: string;
  video?: string;
}

export const useMetadata = (): UseMetadataInterface => {
  const decodeStruct = useCallback(({ attr, data }: { attr?: ProtobufAttributeType, data?: string }): AttributesDecoded => {
    if (attr && data) {
      try {
        if (attr?.nested) {
          return deserializeNft(attr, Buffer.from(data.slice(2), 'hex'), 'en');
        }
      } catch (e) {
        console.log('decodeStruct error', e);
      }
    }

    return {};
  }, []);

  return {
    decodeStruct
  };
};
