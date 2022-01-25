// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import BN from 'bn.js';
import { useCallback, useContext } from 'react';

import { StatusContext } from '@polkadot/react-components';
import { ProtobufAttributeType } from '@polkadot/react-components/util/protobufUtils';
import { useApi } from '@polkadot/react-hooks/useApi';
import { useDecoder } from '@polkadot/react-hooks/useDecoder';
import { strToUTF16 } from '@polkadot/react-hooks/utils';

export type SchemaVersionTypes = 'ImageURL' | 'Unique';

export interface NftCollectionInterface {
  access?: 'Normal' | 'WhiteList'
  id: string;
  decimalPoints: BN | number;
  description: number[];
  tokenPrefix: string;
  mintMode?: boolean;
  mode: {
    nft: null;
    fungible: null;
    reFungible: null;
    invalid: null;
  };
  name: number[];
  offchainSchema: string;
  owner?: string;
  schemaVersion: SchemaVersionTypes;
  sponsorship: {
    confirmed?: string;
    disabled?: string | null;
    unconfirmed?: string | null;
  };
  limits?: {
    accountTokenOwnershipLimit: string;
    sponsoredDataSize: string;
    sponsoredDataRateLimit: string;
    sponsoredMintSize: string;
    tokenLimit: string;
    sponsorTimeout: string;
    ownerCanTransfer: boolean;
    ownerCanDestroy: boolean;
  },
  variableOnChainSchema: string;
  constOnChainSchema: string;
}

interface TransactionCallBacks {
  onFailed?: () => void;
  onStart?: () => void;
  onSuccess?: () => void;
  onUpdate?: () => void;
}

export function useCollection () {
  const { api } = useApi();
  const { queueExtrinsic } = useContext(StatusContext);
  const { hex2a } = useDecoder();

  const getCollectionTokensCount = useCallback(async (collectionId: string) => {
    if (!api || !collectionId) {
      return [];
    }

    try {
      return await api.query.nft.itemListIndex(collectionId);
    } catch (e) {
      console.log('getTokensOfCollection error', e);
    }

    return 0;
  }, [api]);

  const getCreatedCollectionCount = useCallback(async () => {
    try {
      return (await api.rpc.unique.collectionStats()).created.toNumber();
    } catch (e) {
      console.log('getCreatedCollectionCount error', e);
    }

    return 0;
  }, [api]);

  const createCollection = useCallback((account: string, { description, modeprm, name, tokenPrefix }: { name: string, description: string, tokenPrefix: string, modeprm: { nft?: null, fungible?: null, refungible?: null, invalid?: null }}, callBacks?: TransactionCallBacks) => {
    const transaction = api.tx.nft.createCollection(strToUTF16(name), strToUTF16(description), strToUTF16(tokenPrefix), modeprm);

    queueExtrinsic({
      accountId: account && account.toString(),
      extrinsic: transaction,
      isUnsigned: false,
      txFailedCb: () => { callBacks?.onFailed && callBacks.onFailed(); console.log('create collection failed'); },
      txStartCb: () => { callBacks?.onStart && callBacks.onStart(); console.log('create collection start'); },
      txSuccessCb: () => { callBacks?.onSuccess && callBacks.onSuccess(); console.log('create collection success'); },
      txUpdateCb: () => { callBacks?.onUpdate && callBacks.onUpdate(); console.log('create collection update'); }
    });
  }, [api, queueExtrinsic]);

  const setCollectionSponsor = useCallback(({ account, collectionId, errorCallback, newSponsor, successCallback }: { account: string, collectionId: string, newSponsor: string, successCallback?: () => void, errorCallback?: () => void }) => {
    const transaction = api.tx.nft.setCollectionSponsor(collectionId, newSponsor);

    queueExtrinsic({
      accountId: account && account.toString(),
      extrinsic: transaction,
      isUnsigned: false,
      txFailedCb: () => { console.log('set collection sponsor fail'); errorCallback && errorCallback(); },
      txStartCb: () => { console.log('set collection sponsor start'); },
      txSuccessCb: () => { console.log('set collection sponsor success'); successCallback && successCallback(); },
      txUpdateCb: () => { console.log('set collection sponsor update'); }
    });
  }, [api, queueExtrinsic]);

  const removeCollectionSponsor = useCallback(({ account, collectionId, errorCallback, successCallback }: { account: string, collectionId: string, successCallback?: () => void, errorCallback?: () => void }) => {
    const transaction = api.tx.nft.removeCollectionSponsor(collectionId);

    queueExtrinsic({
      accountId: account && account.toString(),
      extrinsic: transaction,
      isUnsigned: false,
      txFailedCb: () => { console.log('remove collection sponsor fail'); errorCallback && errorCallback(); },
      txStartCb: () => { console.log('remove collection sponsor start'); },
      txSuccessCb: () => { console.log('remove collection sponsor success'); successCallback && successCallback(); },
      txUpdateCb: () => { console.log('remove collection sponsor update'); }
    });
  }, [api, queueExtrinsic]);

  const confirmSponsorship = useCallback(({ account, collectionId, errorCallback, successCallback }: { account: string, collectionId: string, successCallback?: () => void, errorCallback?: () => void }) => {
    const transaction = api.tx.nft.confirmSponsorship(collectionId);

    queueExtrinsic({
      accountId: account && account.toString(),
      extrinsic: transaction,
      isUnsigned: false,
      txFailedCb: () => { console.log('confirm sponsorship fail'); errorCallback && errorCallback(); },
      txStartCb: () => { console.log('confirm sponsorship start'); },
      txSuccessCb: () => { console.log('confirm sponsorship success'); successCallback && successCallback(); },
      txUpdateCb: () => { console.log('confirm sponsorship update'); }
    });
  }, [api, queueExtrinsic]);

  const getCollectionAdminList = useCallback(async (collectionId: string) => {
    if (!api || !collectionId) {
      return [];
    }

    try {
      return (await api.rpc.unique.adminlist(collectionId)).toHuman() as string[];
    } catch (e) {
      console.log('getCollectionAdminList error', e);
    }

    return [];
  }, [api]);

  const setSchemaVersion = useCallback(({ account, collectionId, errorCallback, schemaVersion, successCallback }: { account: string, schemaVersion: SchemaVersionTypes, collectionId: string, successCallback?: () => void, errorCallback?: () => void }) => {
    const transaction = api.tx.nft.setSchemaVersion(collectionId, schemaVersion);

    queueExtrinsic({
      accountId: account && account.toString(),
      extrinsic: transaction,
      isUnsigned: false,
      txFailedCb: () => { console.log('set schema version fail'); errorCallback && errorCallback(); },
      txStartCb: () => { console.log('set schema version  start'); },
      txSuccessCb: () => { console.log('set schema version  success'); successCallback && successCallback(); },
      txUpdateCb: () => { console.log('set schema version  update'); }
    });
  }, [api, queueExtrinsic]);

  const setOffChainSchema = useCallback(({ account, collectionId, errorCallback, schema, successCallback }: { account: string, schema: string, collectionId: string, successCallback?: () => void, errorCallback?: () => void }) => {
    const transaction = api.tx.nft.setOffchainSchema(collectionId, schema);

    console.log('schema!!!', schema);

    queueExtrinsic({
      accountId: account && account.toString(),
      extrinsic: transaction,
      isUnsigned: false,
      txFailedCb: () => { console.log('set offChain schema fail'); errorCallback && errorCallback(); },
      txStartCb: () => { console.log('set offChain schema start'); },
      txSuccessCb: () => { console.log('set offChain schema success'); successCallback && successCallback(); },
      txUpdateCb: () => { console.log('set offChain schema update'); }
    });
  }, [api, queueExtrinsic]);

  const addCollectionAdmin = useCallback(({ account, collectionId, errorCallback, newAdminAddress, successCallback }: { account: string, collectionId: string, newAdminAddress: string, successCallback?: () => void, errorCallback?: () => void }) => {
    const transaction = api.tx.nft.addCollectionAdmin(collectionId, newAdminAddress);

    queueExtrinsic({
      accountId: account && account.toString(),
      extrinsic: transaction,
      isUnsigned: false,
      txFailedCb: () => { console.log('add collection admin fail'); errorCallback && errorCallback(); },
      txStartCb: () => { console.log('add collection admin start'); },
      txSuccessCb: () => { console.log('add collection admin success'); successCallback && successCallback(); },
      txUpdateCb: () => { console.log('add collection admin update'); }
    });
  }, [api, queueExtrinsic]);

  const removeCollectionAdmin = useCallback(({ account, adminAddress, collectionId, errorCallback, successCallback }: { account: string, collectionId: string, adminAddress: string, successCallback?: () => void, errorCallback?: () => void }) => {
    const transaction = api.tx.nft.removeCollectionAdmin(collectionId, adminAddress);

    queueExtrinsic({
      accountId: account && account.toString(),
      extrinsic: transaction,
      isUnsigned: false,
      txFailedCb: () => { console.log('remove collection admin fail'); errorCallback && errorCallback(); },
      txStartCb: () => { console.log('remove collection admin start'); },
      txSuccessCb: () => { console.log('remove collection admin success'); successCallback && successCallback(); },
      txUpdateCb: () => { console.log('remove collection admin update'); }
    });
  }, [api, queueExtrinsic]);

  const saveConstOnChainSchema = useCallback(({ account, collectionId, errorCallback, schema, successCallback }: { account: string, collectionId: string, schema: string, successCallback?: () => void, errorCallback?: () => void }) => {
    const transaction = api.tx.nft.setConstOnChainSchema(collectionId, schema);

    queueExtrinsic({
      accountId: account && account.toString(),
      extrinsic: transaction,
      isUnsigned: false,
      txFailedCb: () => { console.log('set collection constOnChain fail'); errorCallback && errorCallback(); },
      txStartCb: () => { console.log('set collection constOnChain start'); },
      txSuccessCb: () => { console.log('set collection constOnChain success'); successCallback && successCallback(); },
      txUpdateCb: () => { console.log('set collection constOnChain update'); }
    });
  }, [api, queueExtrinsic]);

  const saveVariableOnChainSchema = useCallback(({ account, collectionId, errorCallback, schema, successCallback }: { account: string, collectionId: string, schema: string, successCallback?: () => void, errorCallback?: () => void }) => {
    const transaction = api.tx.nft.setVariableOnChainSchema(collectionId, schema);

    queueExtrinsic({
      accountId: account && account.toString(),
      extrinsic: transaction,
      isUnsigned: false,
      txFailedCb: () => { console.log('set collection varOnChain fail'); errorCallback && errorCallback(); },
      txStartCb: () => { console.log('set collection varOnChain start'); },
      txSuccessCb: () => { console.log('set collection varOnChain success'); successCallback && successCallback(); },
      txUpdateCb: () => { console.log('set collection varOnChain update'); }
    });
  }, [api, queueExtrinsic]);

  const getDetailedCollectionInfo = useCallback(async (collectionId: string) => {
    if (!api) {
      return null;
    }

    try {
      const collectionInfo = (await api.rpc.unique.collectionById(collectionId)).toJSON() as unknown as NftCollectionInterface | null;

      return {
        ...collectionInfo,
        id: collectionId
      };
    } catch (e) {
      console.log('getDetailedCollectionInfo error', e);
    }

    return {};
  }, [api]);

  const getCollectionOnChainSchema = useCallback((collectionInfo: NftCollectionInterface): { constSchema: ProtobufAttributeType | undefined, variableSchema: { collectionCover: string } | undefined } => {
    const result: {
      constSchema: ProtobufAttributeType | undefined,
      variableSchema: { collectionCover: string } | undefined,
    } = {
      constSchema: undefined,
      variableSchema: undefined
    };

    try {
      const constSchema = hex2a(collectionInfo.constOnChainSchema);
      const varSchema = hex2a(collectionInfo.variableOnChainSchema);

      if (constSchema && constSchema.length) {
        result.constSchema = JSON.parse(constSchema) as ProtobufAttributeType;
      }

      if (varSchema && varSchema.length) {
        result.variableSchema = JSON.parse(varSchema) as { collectionCover: string } | undefined;
      }

      return result;
    } catch (e) {
      console.log('getCollectionOnChainSchema error');
    }

    return result;
  }, [hex2a]);

  const getTokensOfCollection = useCallback(async (collectionId: string, ownerId: string) => {
    if (!api || !collectionId || !ownerId) {
      return [];
    }

    try {
      return await api.query.unique.accountTokens(collectionId, { Substrate: ownerId });
    } catch (e) {
      console.log('getTokensOfCollection error', e);
    }

    return [];
  }, [api]);

  return {
    addCollectionAdmin,
    confirmSponsorship,
    createCollection,
    getCollectionAdminList,
    getCollectionOnChainSchema,
    getCollectionTokensCount,
    getCreatedCollectionCount,
    getDetailedCollectionInfo,
    getTokensOfCollection,
    removeCollectionAdmin,
    removeCollectionSponsor,
    saveConstOnChainSchema,
    saveVariableOnChainSchema,
    setCollectionSponsor,
    setOffChainSchema,
    setSchemaVersion
  };
}
