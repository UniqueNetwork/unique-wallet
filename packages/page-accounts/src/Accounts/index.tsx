// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './styles.scss';

import type { ActionStatus } from '@polkadot/react-components/Status/types';
import type { AccountId, ProxyDefinition, ProxyType, Voting } from '@polkadot/types/interfaces';
import type { Delegation, SortedAccount } from '../types';

import BN from 'bn.js';
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
// import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';

import clearIcon from '@polkadot/app-nft-wallet/components/CollectionSearch/clearIcon.svg';
import searchIcon from '@polkadot/app-nft-wallet/components/CollectionSearch/searchIcon.svg';
import { Input, StatusContext } from '@polkadot/react-components';
import AccountButtonsGroup from '@polkadot/react-components/AccountButtonGroup';
import { useAccounts, useApi, useCall, useFavorites, /* useIpfs, */ useLoadingDelay/*, useToggle */ } from '@polkadot/react-hooks';

// import { FormatBalance } from '@polkadot/react-query';
// import { BN_ZERO } from '@polkadot/util';
/* import CreateModal from '../modals/Create';
import ImportModal from '../modals/Import';
import Ledger from '../modals/Ledger';
import Multisig from '../modals/MultisigCreate';
import Proxy from '../modals/ProxiedAdd';
import Qr from '../modals/Qr'; */
import { sortAccounts } from '../util';
// import Account from './Account';
import AccountsTable from './AccountsTable';

interface Balances {
  accounts: Record<string, BN>;
  balanceTotal?: BN;
}

interface Sorted {
  sortedAccounts: SortedAccount[];
  sortedAddresses: string[];
}

interface Props {
  className?: string;
  onStatusChange: (status: ActionStatus) => void;
  setAccount?: (account?: string) => void;
}

function Overview ({ className = 'page-accounts', onStatusChange, setAccount }: Props): React.ReactElement<Props> {
  //const { api } = useApi();
  const { allAccounts } = useAccounts();
  const { queueAction } = useContext(StatusContext);
  /* const { isIpfs } = useIpfs();
  const [isCreateOpen, toggleCreate] = useToggle();
  const [isRestoreOpen, toggleRestore] = useToggle();
  const [isImportOpen, toggleImport] = useToggle();
  const [isLedgerOpen, toggleLedger] = useToggle();
  const [isMultisigOpen, toggleMultisig] = useToggle();
  const [isProxyOpen, toggleProxy] = useToggle();
  const [isQrOpen, toggleQr] = useToggle(); */
  const [filterOn, setFilter] = useState<string>('');
  const [{ sortedAccounts, sortedAddresses }, setSorted] = useState<Sorted>({ sortedAccounts: [], sortedAddresses: [] });
  const [sortedAccountsWithAccountName, setSortedAccountsWithAccountName] = useState<SortedAccount[] | undefined>();
  // const delegations = useCall<Voting[]>(api.query.democracy?.votingOf?.multi, [sortedAddresses]);
  // const proxies = useCall<[ProxyDefinition[], BN][]>(api.query.proxy?.proxies.multi, [sortedAddresses], {
  //   transform: (result: [([AccountId, ProxyType] | ProxyDefinition)[], BN][]): [ProxyDefinition[], BN][] =>
  //     api.tx.proxy.addProxy.meta.args.length === 3
  //       ? result as [ProxyDefinition[], BN][]
  //       : (result as [[AccountId, ProxyType][], BN][]).map(([arr, bn]): [ProxyDefinition[], BN] =>
  //         [arr.map(([delegate, proxyType]): ProxyDefinition => api.createType('ProxyDefinition', { delegate, proxyType })), bn]
  //       )
  // });

  const clearSearch = useCallback(() => {
    setFilter('');
  }, []);

  useEffect((): void => {
    const sortedAccounts = sortAccounts(allAccounts, []);
    const sortedAddresses = sortedAccounts.map((a) => a.account.address);

    setSorted({ sortedAccounts, sortedAddresses });
    setSortedAccountsWithAccountName(sortedAccounts)
  }, [allAccounts]);

  useEffect(() => {
    setSortedAccountsWithAccountName(sortedAccounts?.filter((item) => item.account.meta.name?.includes(filterOn.toLowerCase()) || item.account.meta.name?.includes(filterOn.toLocaleUpperCase()) ));
  }, [filterOn]);


  /* const _setBalance = useCallback(
    (account: string, balance: BN) =>
      setBalances(({ accounts }: Balances): Balances => {
        accounts[account] = balance;

        return {
          accounts,
          balanceTotal: Object.values(accounts).reduce((total: BN, value: BN) => total.add(value), BN_ZERO)
        };
      }),
    []
  ); */

  /* const footer = useMemo(() => (
    <tr>
      <td colSpan={3} />
      <td colSpan={2} />
      <td className='number'>
        {balanceTotal && <FormatBalance value={balanceTotal} />}
      </td>
    </tr>
  ), [balanceTotal]); */

  /* const filter = useMemo(() => (
    <div className='filter--tags'>
      <Input
        autoFocus
        className='isSmall'
        label={'filter by name or tags'}
        onChange={setFilter}
        value={filterOn}
      />
    </div>
  ), [filterOn]); */

  return (
    <div className='page-accounts'>
      <Header as='h1'
        className='mobile-header'>Manage accounts</Header>
      <div className='page-accounts--card'>
        <div className='page-accounts--card--header'>
          <AccountButtonsGroup onStatusChange={queueAction} />
          <div className='accounts-filter'>
            {/* <Input
              autoFocus
              className='isSmall'
              label={'filter by name or tags'}
              onChange={setFilter}
              value={filterOn}
            /> */}
            <Input
              autoFocus
              className='isSmall'
              icon={
                <img
                  alt='search'
                  className='search-icon'
                  src={searchIcon as string}
                />
              }
              onChange={setFilter}
              placeholder='Search by account name'
              value={filterOn}
              withLabel
            >
              { filterOn?.length > 0 && (
                <img
                  alt='clear'
                  className='clear-icon'
                  onClick={clearSearch}
                  src={clearIcon as string}
                />
              )}
            </Input>
          </div>
        </div>
        <AccountsTable
          accounts={sortedAccountsWithAccountName}
          setAccount={setAccount}
        />
      </div>
      {/* {isCreateOpen && (
        <CreateModal
          onClose={toggleCreate}
          onStatusChange={onStatusChange}
        />
      )}
      {isRestoreOpen && (
        <CreateModal
          onClose={toggleRestore}
          onStatusChange={onStatusChange}
          restoreFromSeed={true}
        />
      )}
      {isImportOpen && (
        <ImportModal
          onClose={toggleImport}
          onStatusChange={onStatusChange}
        />
      )}
      {isLedgerOpen && (
        <Ledger onClose={toggleLedger} />
      )}
      {isMultisigOpen && (
        <Multisig
          onClose={toggleMultisig}
          onStatusChange={onStatusChange}
        />
      )}
      {isProxyOpen && (
        <Proxy
          onClose={toggleProxy}
          onStatusChange={onStatusChange}
        />
      )}
      {isQrOpen && (
        <Qr
          onClose={toggleQr}
          onStatusChange={onStatusChange}
        />
      )}
      <Button.Group className='account-actions'>
        <Button
          content={'Add account'}
          disabled={isIpfs}
          onClick={toggleCreate}
        />
        <Button
          content={'Restore JSON'}
          disabled={isIpfs}
          onClick={toggleImport}
        />
        <Button
          content={'Restore from seed'}
          disabled={isIpfs}
          onClick={toggleRestore}
        />
        <Button
          content={'Add via Qr'}
          onClick={toggleQr}
        />
      </Button.Group> */}
      {/* <Table
        empty={!isLoading && sortedAccountsWithDelegation && 'You don\'t have any accounts. Some features are currently hidden and will only become available once you have accounts.'}
        filter={filter}
        footer={footer}
        header={headerRef.current}
      >
        {!isLoading && sortedAccountsWithDelegation?.map(({ account, delegation, isFavorite }, index): React.ReactNode => (
          <Account
            account={account}
            delegation={delegation}
            filter={filterOn}
            isFavorite={isFavorite}
            key={account.address}
            proxy={proxies?.[index]}
            setBalance={_setBalance}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </Table> */}
    </div>
  );
}

export default React.memo(Overview);
