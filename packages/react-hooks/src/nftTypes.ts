// Copyright 2017-2022 @polkadot/UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

export type SchemaVersionTypes = 'Custom' | 'ImageUrl' | 'TokenURI' | 'Unique';

// { key: '_old_offchainSchema', value: '' },
// { key: '_old_schemaVersion', value: 'Unique' },
// { key: '_old_variableOnChainSchema', value: '' },
// { key: '_old_constOnChainSchema', value: JSON.stringify(protobufJson) }
export interface CollectionProperty {
  key: string;
  value: string;
}
//  key: '_old_constData', permission: { collectionAdmin: true, mutable: false, tokenOwner: false }
export interface PropertyPermission {
  collectionAdmin: boolean;
  mutable: boolean;
  tokenOwner: boolean;
}

export interface CollectionPropertyPermission {
  key: string;
  permission: PropertyPermission;
}

export interface CollectionPermissions {
  access?: 'Normal' | 'WhiteList'
  mintMode?: boolean;
  nesting?: {
    owner: string | null,
  };
}

export interface NftCollectionBase {
  description: number[];
  mode: {
    nft?: null;
    fungible?: null;
    reFungible?: null;
    invalid?: null;
  };
  name: number[];
  tokenPrefix: number[];
  sponsorship?: {
    confirmed?: string;
    disabled?: string | null;
    unconfirmed?: string | null;
  };
  limits?: {
    accountTokenOwnershipLimit?: number;
    sponsoredDataSize?: number;
    sponsoredDataRateLimit?: number;
    sponsoredMintSize?: number;
    tokenLimit?: number;
    sponsorTimeout?: number;
    ownerCanTransfer?: boolean;
    ownerCanDestroy?: boolean;
  },
  permissions?: CollectionPermissions;
  properties: CollectionProperty[];
  tokenPropertyPermissions: CollectionPropertyPermission[];
}

export interface NftCollectionInterface extends NftCollectionBase {
  id: string;
  owner?: string;
}

export interface TokenDetailsInterface {
  owner?: { Ethereum?: string, Substrate?: string };
  properties: [
    { key: '_old_constData', value: string }
  ]
}

export type AttributesDecoded = {
  [key: string]: string | string[],
}
