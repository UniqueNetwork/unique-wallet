// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import type { NftCollectionInterface } from '@polkadot/react-hooks/useCollection';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Form from 'semantic-ui-react/dist/commonjs/collections/Form';
import Dropdown, { DropdownProps } from 'semantic-ui-react/dist/commonjs/modules/Dropdown';

import { Filters } from '@polkadot/app-nft-wallet/containers/NftWallet';
// import { SearchFilter } from '@polkadot/react-components';
import { useCollections, useDecoder } from '@polkadot/react-hooks';

import ArrowDown from '../ArrowDown';
import ArrowUp from '../ArrowUp';

interface Props {
  account: string | null | undefined;
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

function TokensSearch ({ account, filters, setFilters }: Props): React.ReactElement<Props> {
  const [collectionsAvailable, setCollectionsAvailable] = useState<Array<NftCollectionInterface>>([]);
  const [collectionsMatched, setCollectionsMatched] = useState<Array<NftCollectionInterface>>([]);
  const [searchString, setSearchString] = useState<string>('');
  const [sortValue, setSortValue] = useState<string>('tokenId-desc');
  const { presetTokensCollections } = useCollections();
  const currentAccount = useRef<string | null | undefined>();
  const { collectionName16Decoder } = useDecoder();

  const optionNode = useCallback((active: boolean, order: string, text: string) => {
    return (
      <div className={active ? 'current active' : 'current'}>
        {text}
        {order === 'asc' && (
          <ArrowUp active={active} />
        )}
        {order === 'desc' && (
          <ArrowDown active={active} />
        )}
      </div>
    );
  }, []);

  const sortOptions = useMemo(() => ([
    { content: (optionNode(false, 'asc', 'Token ID')), key: 'TokenIDUp', text: 'Token ID', value: 'tokenId-asc' },
    { content: (optionNode(false, 'desc', 'Token ID')), key: 'TokenIDDown', text: 'Token ID', value: 'tokenId-desc' }
  ]), [optionNode]);

  const setSort = useCallback((event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
    const { value } = data;

    const key = value?.toString() || 'tokenId-desc';

    setSortValue(key);

    if (key && filters) {
      setFilters({ ...filters, sort: `${key.split('-')[1]}` as 'asc' | 'desc' });
    }
  }, [filters, setFilters]);

  const clearFilters = useCallback(() => {
    // clearAllFilters();
    setSearchString('');
  }, []);

  const currentValue = useMemo(() => {
    if (sortValue) {
      const currentOption = sortOptions.find((opt: { value: string }) => opt.value === sortValue);

      if (currentOption) {
        return optionNode(false, sortValue.split('-')[1], currentOption.text);
      }
    }

    return optionNode(false, 'none', 'Sort by');
  }, [optionNode, sortOptions, sortValue]);

  const searchCollection = useCallback(() => {
    const filteredCollections = collectionsAvailable.filter((collection) => {
      const collectionName = collectionName16Decoder(collection.Name).toLowerCase();

      if (collectionName.indexOf(searchString.toLowerCase()) !== -1 || collection.id.toString().toLowerCase().indexOf(searchString.toLowerCase()) !== -1
      ) {
        return collection;
      }

      return null;
    });

    setCollectionsMatched(filteredCollections);
  }, [collectionName16Decoder, collectionsAvailable, searchString]);

  const getCollections = useCallback(async () => {
    const collections = await presetTokensCollections();

    if (collections && collections.length) {
      setCollectionsAvailable(collections);
      setCollectionsMatched(collections);
    }
  }, [presetTokensCollections]);

  /* const clearSearch = useCallback(() => {
    setSearchString('');
    setCollectionsMatched([]);
  }, []); */

  useEffect(() => {
    if (searchString.length >= 3) {
      searchCollection();
    }
  }, [searchCollection, searchString]);

  // clear search results if account changed
  useEffect(() => {
    if (currentAccount.current && currentAccount.current !== account) {
      setCollectionsMatched([]);
      setSearchString('');
    }

    currentAccount.current = account;
  }, [account]);

  useEffect(() => {
    void getCollections();
  }, [getCollections]);

  const areFiltersActive = true;

  return (
    <Form className='tokens-search'>
      {/* <Form.Field className='search-field'>
        <SearchFilter
          clearSearch={clearSearch}
          searchString={searchString}
          setSearchString={setSearchString}
        />
      </Form.Field> */}
      <Form.Field className='sort-field'>
        <Dropdown
          onChange={setSort}
          options={sortOptions}
          trigger={currentValue}
        />
      </Form.Field>
      <Form.Field className='search-results'>
        <span>
          {collectionsMatched.length} items
        </span>
        { areFiltersActive && <a onClick={clearFilters}>Clear all filters</a> }
      </Form.Field>
    </Form>
  );
}

export default React.memo(TokensSearch);
