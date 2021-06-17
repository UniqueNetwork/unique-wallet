((typeof self !== 'undefined' ? self : this)["webpackChunk_polkadot_apps"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_polkadot_apps"] || []).push([[4604],{

/***/ 14604:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ApiPromise": () => (/* reexport */ promise/* ApiPromise */.G),
  "ApiRx": () => (/* reexport */ rx/* ApiRx */.P),
  "Keyring": () => (/* reexport */ keyring_index_js_.Keyring),
  "SubmittableResult": () => (/* reexport */ Result/* SubmittableResult */.h),
  "WsProvider": () => (/* reexport */ ws/* WsProvider */.U),
  "packageInfo": () => (/* reexport */ api_packageInfo/* packageInfo */.b)
});

// EXTERNAL MODULE: ../../node_modules/@polkadot/api-derive/packageInfo.js
var packageInfo = __webpack_require__(857);
// EXTERNAL MODULE: ../../node_modules/@polkadot/metadata/packageInfo.js
var metadata_packageInfo = __webpack_require__(3610);
// EXTERNAL MODULE: ../../node_modules/@polkadot/rpc-core/packageInfo.js
var rpc_core_packageInfo = __webpack_require__(67162);
// EXTERNAL MODULE: ../../node_modules/@polkadot/rpc-provider/packageInfo.js
var rpc_provider_packageInfo = __webpack_require__(11082);
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/packageInfo.js
var types_packageInfo = __webpack_require__(31760);
// EXTERNAL MODULE: ../../node_modules/@polkadot/types-known/packageInfo.js
var types_known_packageInfo = __webpack_require__(65241);
// EXTERNAL MODULE: consume shared module (default) @polkadot/util@^6.7.1 (strict) (fallback: ../../node_modules/@polkadot/util/index.js)
var index_js_ = __webpack_require__(13948);
// EXTERNAL MODULE: ../../node_modules/@polkadot/api/packageInfo.js
var api_packageInfo = __webpack_require__(20762);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/api/detectPackage.js
// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0








(0,index_js_.detectPackage)(api_packageInfo/* packageInfo */.b, typeof __dirname !== 'undefined' && __dirname, [packageInfo/* packageInfo */.b, metadata_packageInfo/* packageInfo */.b, rpc_core_packageInfo/* packageInfo */.b, rpc_provider_packageInfo/* packageInfo */.b, types_packageInfo/* packageInfo */.b, types_known_packageInfo/* packageInfo */.b]);
// EXTERNAL MODULE: consume shared module (default) @polkadot/keyring@^6.7.1 (strict) (fallback: ../../node_modules/@polkadot/keyring/index.js)
var keyring_index_js_ = __webpack_require__(32894);
// EXTERNAL MODULE: ../../node_modules/@polkadot/rpc-provider/ws/index.js + 4 modules
var ws = __webpack_require__(73406);
// EXTERNAL MODULE: ../../node_modules/@polkadot/api/promise/index.js + 1 modules
var promise = __webpack_require__(7253);
// EXTERNAL MODULE: ../../node_modules/@polkadot/api/submittable/Result.js
var Result = __webpack_require__(70242);
// EXTERNAL MODULE: ../../node_modules/@polkadot/api/rx/index.js
var rx = __webpack_require__(11945);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/api/index.js
// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0








/***/ }),

/***/ 11945:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ decorateMethod),
/* harmony export */   "P": () => (/* binding */ ApiRx)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51119);
/* harmony import */ var _babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89539);
/* harmony import */ var _babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38879);
/* harmony import */ var _polkadot_x_rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(365);
/* harmony import */ var _base_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87982);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0


function decorateMethod(method) {
  return method;
}
/**
 * # @polkadot/api/rx
 *
 *  ## Overview
 *
 * @name ApiRx
 *
 * @description
 * ApiRx is a powerful RxJS Observable wrapper around the RPC and interfaces on the Polkadot network. As a full Observable API, all interface calls return RxJS Observables, including the static `.create(...)`. In the same fashion and subscription-based methods return long-running Observables that update with the latest values.
 *
 * The API is well suited to real-time applications where the latest state is needed, unlocking the subscription-based features of Polkadot (and Substrate) clients. Some familiarity with RxJS is a requirement to use the API, however just understanding `.subscribe` and `.pipe` on Observables will unlock full-scale use thereof.
 *
 * @see [[ApiPromise]]
 *
 * ## Usage
 *
 * Making rpc calls -
 * <BR>
 *
 * ```javascript
 * import ApiRx from '@polkadot/api/rx';
 *
 * // initialize via Promise & static create
 * const api = await ApiRx.create().toPromise();
 *
 * // make a call to retrieve the current network head
 * api.rpc.chain.subscribeNewHeads().subscribe((header) => {
 *   console.log(`Chain is at #${header.number}`);
 * });
 * ```
 * <BR>
 *
 * Subscribing to chain state -
 * <BR>
 *
 * ```javascript
 * import { combineLatest } from '@polkadot/x-rxjs';
 * import { pairwise, switchMap } from '@polkadot/x-rxjs/operators';
 * import { ApiRx, WsProvider } from '@polkadot/api';
 *
 *
 * // initialize a provider with a specific endpoint
 * const provider = new WsProvider('wss://example.com:9944')
 *
 * // initialize via isReady & new with specific provider
 * new ApiRx({ provider })
 *   .isReady
 *   .pipe(
 *     switchMap((api) =>
 *       combineLatest([
 *         api.query.timestamp.blockPeriod(),
 *         api.query.timestamp.now().pipe(pairwise())
 *       ])
 *     )
 *   )
 *   .subscribe(([blockPeriod, timestamp]) => {
 *      const elapsed = timestamp[1].toNumber() - timestamp[0].toNumber();
 *      console.log(`timestamp ${timestamp[1]} \nelapsed ${elapsed} \n(${blockPeriod}s target)`);
 *   });
 * ```
 * <BR>
 *
 * Submitting a transaction -
 * <BR>
 *
 * ```javascript
 * import { first, switchMap } from '@polkadot/x-rxjs/operators';
 * import ApiRx from '@polkadot/api/rx';
 *
 * // import the test keyring (already has dev keys for Alice, Bob, Charlie, Eve & Ferdie)
 * import testingPairs from '@polkadot/keyring/testingPairs';
 * const keyring = testingPairs();
 *
 * // get api via Promise
 * const api = await ApiRx.create().toPromise();
 *
 * // retrieve nonce for the account
 * api.query.system
 *   .account(keyring.alice.address)
 *   .pipe(
 *      first(),
 *      // pipe nonce into transfer
 *      switchMap(([nonce]) =>
 *        api.tx.balances
 *          // create transfer
 *          .transfer(keyring.bob.address, 12345)
 *          // sign the transaction
 *          .sign(keyring.alice, { nonce })
 *          // send the transaction
 *          .send()
 *      )
 *   )
 *   // subscribe to overall result
 *   .subscribe(({ status }) => {
 *     if (status.isInBlock) {
 *       console.log('Completed at block hash', status.asFinalized.toHex());
 *     }
 *   });
 * ```
 */

var _isReadyRx = /*#__PURE__*/(0,_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)("isReadyRx");

class ApiRx extends _base_index_js__WEBPACK_IMPORTED_MODULE_3__/* .ApiBase */ .q {
  /**
   * @description Creates an ApiRx instance using the supplied provider. Returns an Observable containing the actual Api instance.
   * @param options options that is passed to the class constructor. Can be either [[ApiOptions]] or [[WsProvider]]
   * @example
   * <BR>
   *
   * ```javascript
   * import { switchMap } from '@polkadot/x-rxjs/operators';
   * import Api from '@polkadot/api/rx';
   *
   * Api.create()
   *   .pipe(
   *     switchMap((api) =>
   *       api.rpc.chain.subscribeNewHeads()
   *   ))
   *   .subscribe((header) => {
   *     console.log(`new block #${header.number.toNumber()}`);
   *   });
   * ```
   */
  static create(options) {
    return new ApiRx(options).isReady;
  }
  /**
   * @description Create an instance of the ApiRx class
   * @param options Options to create an instance. Can be either [[ApiOptions]] or [[WsProvider]]
   * @example
   * <BR>
   *
   * ```javascript
   * import { switchMap } from '@polkadot/x-rxjs/operators';
   * import Api from '@polkadot/api/rx';
   *
   * new Api().isReady
   *   .pipe(
   *     switchMap((api) =>
   *       api.rpc.chain.subscribeNewHeads()
   *   ))
   *   .subscribe((header) => {
   *     console.log(`new block #${header.number.toNumber()}`);
   *   });
   * ```
   */


  constructor(options) {
    super(options, 'rxjs', decorateMethod);
    Object.defineProperty(this, _isReadyRx, {
      writable: true,
      value: void 0
    });
    (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _isReadyRx)[_isReadyRx] = (0,_polkadot_x_rxjs__WEBPACK_IMPORTED_MODULE_1__.from)( // You can create an observable from an event, however my mind groks this form better
    new Promise(resolve => {
      super.on('ready', () => resolve(this));
    }));
  }
  /**
   * @description Observable that returns the first time we are connected and loaded
   */


  get isReady() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _isReadyRx)[_isReadyRx];
  }
  /**
   * @description Returns a clone of this ApiRx instance (new underlying provider connection)
   */


  clone() {
    return new ApiRx(_objectSpread(_objectSpread({}, this._options), {}, {
      source: this
    }));
  }

}

/***/ })

}]);