((typeof self !== 'undefined' ? self : this)["webpackChunk_polkadot_apps"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_polkadot_apps"] || []).push([[5270,7501],{

/***/ 57501:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "checkAddress": () => (/* binding */ checkAddress),
  "checkHost": () => (/* binding */ checkHost),
  "checkIfDenied": () => (/* binding */ checkIfDenied),
  "retrieveAddrList": () => (/* binding */ retrieveAddrList),
  "retrieveHostList": () => (/* binding */ retrieveHostList)
});

// EXTERNAL MODULE: consume shared module (default) @polkadot/util@^6.7.1 (strict) (fallback: ../../node_modules/@polkadot/util/index.js)
var index_js_ = __webpack_require__(13948);
// EXTERNAL MODULE: consume shared module (default) @polkadot/util-crypto@^6.7.1 (strict) (fallback: ../../node_modules/@polkadot/util-crypto/index.js)
var util_crypto_index_js_ = __webpack_require__(21050);
// EXTERNAL MODULE: ../../node_modules/@polkadot/x-global/index.js
var x_global = __webpack_require__(64513);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/x-fetch/browser.js
// Copyright 2017-2021 @polkadot/x-fetch authors & contributors
// SPDX-License-Identifier: Apache-2.0


const fetch = x_global/* xglobal.fetch */.U.fetch;
;// CONCATENATED MODULE: ../../node_modules/@polkadot/phishing/fetch.js
// Copyright 2020-2021 @polkadot/phishing authors & contributors
// SPDX-License-Identifier: Apache-2.0
 // a fetch with a 2s timeout

async function fetchWithTimeout(url, timeout = 2000) {
  const controller = new AbortController();
  let isAborted = false;
  const id = setTimeout(() => {
    console.log(`Timeout on ${url}`);
    isAborted = true;
    controller.abort();
  }, timeout);

  try {
    const response = await fetch(url, {
      signal: controller.signal
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    if (!isAborted) {
      clearTimeout(id);
    }

    throw error;
  }
}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/phishing/index.js
// Copyright 2020-2021 @polkadot/phishing authors & contributors
// SPDX-License-Identifier: Apache-2.0


 // Equivalent to https://raw.githubusercontent.com/polkadot-js/phishing/master/{address,all}.json

const ADDRESS_JSON = 'https://polkadot.js.org/phishing/address.json';
const ALL_JSON = 'https://polkadot.js.org/phishing/all.json'; // 1 hour cache refresh

const CACHE_TIMEOUT = 45 * 60 * 1000;
let cacheAddrEnd = 0;
let cacheAddrList = null;
let cacheAddrU8a = null;
let cacheHostEnd = 0;
let cacheHostList = null; // gets the host-only part for a host

function extractHost(path) {
  return path.replace(/https:\/\/|http:\/\/|wss:\/\/|ws:\/\//, '').split('/')[0];
}
/**
 * Retrieve a list of known phishing addresses
 */


async function retrieveAddrList(allowCached = true) {
  const now = Date.now();

  if (allowCached && cacheAddrList && now < cacheAddrEnd) {
    return cacheAddrList;
  }

  const response = await fetchWithTimeout(ADDRESS_JSON);
  const list = await response.json();
  cacheAddrEnd = now + CACHE_TIMEOUT;
  cacheAddrList = list;
  return list;
}

async function retrieveAddrU8a(allowCached = true) {
  const now = Date.now();

  if (allowCached && cacheAddrU8a && now < cacheAddrEnd) {
    return cacheAddrU8a;
  }

  const all = await retrieveAddrList(allowCached);
  cacheAddrU8a = Object.entries(all).map(([key, addresses]) => [key, addresses.map(a => (0,util_crypto_index_js_.decodeAddress)(a))]);
  return cacheAddrU8a;
}
/**
 * Retrieve allow/deny from our list provider
 */


async function retrieveHostList(allowCached = true) {
  const now = Date.now();

  if (allowCached && cacheHostList && now < cacheHostEnd) {
    return cacheHostList;
  }

  const response = await fetchWithTimeout(ALL_JSON);
  const list = await response.json();
  cacheHostEnd = now + CACHE_TIMEOUT;
  cacheHostList = list;
  return list;
}
/**
 * Checks a host to see if it appears in the provided list
 */

function checkHost(items, host) {
  const hostParts = extractHost(host).split('.').reverse();
  return items.some(item => {
    const checkParts = item.split('.').reverse(); // first we need to ensure it has less or equal parts to our source

    if (checkParts.length > hostParts.length) {
      return false;
    } // ensure each section matches


    return checkParts.every((part, index) => hostParts[index] === part);
  });
}
/**
 * Determines if a host is in our deny list. Returns a string containing the phishing site if host is a
 * problematic one. Returns null if the address is not associated with phishing.
 */

async function checkAddress(address, allowCached = true) {
  try {
    const all = await retrieveAddrU8a(allowCached);
    const u8a = (0,util_crypto_index_js_.decodeAddress)(address);
    const entry = all.find(([, all]) => all.some(a => (0,index_js_.u8aEq)(a, u8a))) || [null];
    return entry[0];
  } catch (error) {
    console.error('Exception while checking address, assuming non-phishing');
    console.error(error);
    return null;
  }
}
/**
 * Determines if a host is in our deny list. Returns true if host is a problematic one. Returns
 * false if the host provided is not in our list of less-than-honest sites.
 */

async function checkIfDenied(host, allowCached = true) {
  try {
    const {
      deny
    } = await retrieveHostList(allowCached);
    return checkHost(deny, host);
  } catch (error) {
    console.error('Exception while checking host, assuming non-phishing');
    console.error(error);
    return false;
  }
}

/***/ }),

/***/ 64513:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ xglobal)
/* harmony export */ });
// Copyright 2017-2021 @polkadot/x-fetch authors & contributors
// SPDX-License-Identifier: Apache-2.0

const xglobal = typeof globalThis !== 'undefined' ? globalThis : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : undefined;

/***/ })

}]);