((typeof self !== 'undefined' ? self : this)["webpackChunk_polkadot_apps"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_polkadot_apps"] || []).push([[1461],{

/***/ 85270:
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 11232:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(85270);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 52954:
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 50085:
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 15198:
/***/ ((module) => {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 91557:
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 11359:
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 75182:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(11232);

var iterableToArray = __webpack_require__(91557);

var unsupportedIterableToArray = __webpack_require__(6487);

var nonIterableSpread = __webpack_require__(11359);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 58921:
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 6487:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(85270);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 77162:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(25047);


/***/ }),

/***/ 15842:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
/* provided dependency */ var Buffer = __webpack_require__(48834)["Buffer"];


__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var _errors = __webpack_require__(74821);

const Tag = 0x05;

function asUInt16BE(value) {
  const b = Buffer.alloc(2);
  b.writeUInt16BE(value, 0);
  return b;
}

const initialAcc = {
  data: Buffer.alloc(0),
  dataLength: 0,
  sequence: 0
};
/**
 *
 */

const createHIDframing = (channel, packetSize) => {
  return {
    makeBlocks(apdu) {
      let data = Buffer.concat([asUInt16BE(apdu.length), apdu]);
      const blockSize = packetSize - 5;
      const nbBlocks = Math.ceil(data.length / blockSize);
      data = Buffer.concat([data, // fill data with padding
      Buffer.alloc(nbBlocks * blockSize - data.length + 1).fill(0)]);
      const blocks = [];

      for (let i = 0; i < nbBlocks; i++) {
        const head = Buffer.alloc(5);
        head.writeUInt16BE(channel, 0);
        head.writeUInt8(Tag, 2);
        head.writeUInt16BE(i, 3);
        const chunk = data.slice(i * blockSize, (i + 1) * blockSize);
        blocks.push(Buffer.concat([head, chunk]));
      }

      return blocks;
    },

    reduceResponse(acc, chunk) {
      let {
        data,
        dataLength,
        sequence
      } = acc || initialAcc;

      if (chunk.readUInt16BE(0) !== channel) {
        throw new _errors.TransportError("Invalid channel", "InvalidChannel");
      }

      if (chunk.readUInt8(2) !== Tag) {
        throw new _errors.TransportError("Invalid tag", "InvalidTag");
      }

      if (chunk.readUInt16BE(3) !== sequence) {
        throw new _errors.TransportError("Invalid sequence", "InvalidSequence");
      }

      if (!acc) {
        dataLength = chunk.readUInt16BE(5);
      }

      sequence++;
      const chunkData = chunk.slice(acc ? 5 : 7);
      data = Buffer.concat([data, chunkData]);

      if (data.length > dataLength) {
        data = data.slice(0, dataLength);
      }

      return {
        data,
        dataLength,
        sequence
      };
    },

    getReducedResult(acc) {
      if (acc && acc.dataLength === acc.data.length) {
        return acc.data;
      }
    }

  };
};

var _default = createHIDframing;
exports.Z = _default;
//# sourceMappingURL=hid-framing.js.map

/***/ }),

/***/ 74821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountNameRequiredError": () => (/* binding */ AccountNameRequiredError),
/* harmony export */   "AccountNotSupported": () => (/* binding */ AccountNotSupported),
/* harmony export */   "AmountRequired": () => (/* binding */ AmountRequired),
/* harmony export */   "BluetoothRequired": () => (/* binding */ BluetoothRequired),
/* harmony export */   "BtcUnmatchedApp": () => (/* binding */ BtcUnmatchedApp),
/* harmony export */   "CantOpenDevice": () => (/* binding */ CantOpenDevice),
/* harmony export */   "CantScanQRCode": () => (/* binding */ CantScanQRCode),
/* harmony export */   "CashAddrNotSupported": () => (/* binding */ CashAddrNotSupported),
/* harmony export */   "CurrencyNotSupported": () => (/* binding */ CurrencyNotSupported),
/* harmony export */   "DBNotReset": () => (/* binding */ DBNotReset),
/* harmony export */   "DBWrongPassword": () => (/* binding */ DBWrongPassword),
/* harmony export */   "DeviceAppVerifyNotSupported": () => (/* binding */ DeviceAppVerifyNotSupported),
/* harmony export */   "DeviceGenuineSocketEarlyClose": () => (/* binding */ DeviceGenuineSocketEarlyClose),
/* harmony export */   "DeviceHalted": () => (/* binding */ DeviceHalted),
/* harmony export */   "DeviceInOSUExpected": () => (/* binding */ DeviceInOSUExpected),
/* harmony export */   "DeviceNameInvalid": () => (/* binding */ DeviceNameInvalid),
/* harmony export */   "DeviceNotGenuineError": () => (/* binding */ DeviceNotGenuineError),
/* harmony export */   "DeviceOnDashboardExpected": () => (/* binding */ DeviceOnDashboardExpected),
/* harmony export */   "DeviceOnDashboardUnexpected": () => (/* binding */ DeviceOnDashboardUnexpected),
/* harmony export */   "DeviceShouldStayInApp": () => (/* binding */ DeviceShouldStayInApp),
/* harmony export */   "DeviceSocketFail": () => (/* binding */ DeviceSocketFail),
/* harmony export */   "DeviceSocketNoBulkStatus": () => (/* binding */ DeviceSocketNoBulkStatus),
/* harmony export */   "DisconnectedDevice": () => (/* binding */ DisconnectedDevice),
/* harmony export */   "DisconnectedDeviceDuringOperation": () => (/* binding */ DisconnectedDeviceDuringOperation),
/* harmony export */   "ETHAddressNonEIP": () => (/* binding */ ETHAddressNonEIP),
/* harmony export */   "EnpointConfigError": () => (/* binding */ EnpointConfigError),
/* harmony export */   "EthAppPleaseEnableContractData": () => (/* binding */ EthAppPleaseEnableContractData),
/* harmony export */   "FeeEstimationFailed": () => (/* binding */ FeeEstimationFailed),
/* harmony export */   "FeeNotLoaded": () => (/* binding */ FeeNotLoaded),
/* harmony export */   "FeeRequired": () => (/* binding */ FeeRequired),
/* harmony export */   "FeeTooHigh": () => (/* binding */ FeeTooHigh),
/* harmony export */   "FirmwareNotRecognized": () => (/* binding */ FirmwareNotRecognized),
/* harmony export */   "FirmwareOrAppUpdateRequired": () => (/* binding */ FirmwareOrAppUpdateRequired),
/* harmony export */   "GasLessThanEstimate": () => (/* binding */ GasLessThanEstimate),
/* harmony export */   "GenuineCheckFailed": () => (/* binding */ GenuineCheckFailed),
/* harmony export */   "HardResetFail": () => (/* binding */ HardResetFail),
/* harmony export */   "InvalidAddress": () => (/* binding */ InvalidAddress),
/* harmony export */   "InvalidAddressBecauseDestinationIsAlsoSource": () => (/* binding */ InvalidAddressBecauseDestinationIsAlsoSource),
/* harmony export */   "InvalidXRPTag": () => (/* binding */ InvalidXRPTag),
/* harmony export */   "LatestMCUInstalledError": () => (/* binding */ LatestMCUInstalledError),
/* harmony export */   "LedgerAPI4xx": () => (/* binding */ LedgerAPI4xx),
/* harmony export */   "LedgerAPI5xx": () => (/* binding */ LedgerAPI5xx),
/* harmony export */   "LedgerAPIError": () => (/* binding */ LedgerAPIError),
/* harmony export */   "LedgerAPIErrorWithMessage": () => (/* binding */ LedgerAPIErrorWithMessage),
/* harmony export */   "LedgerAPINotAvailable": () => (/* binding */ LedgerAPINotAvailable),
/* harmony export */   "MCUNotGenuineToDashboard": () => (/* binding */ MCUNotGenuineToDashboard),
/* harmony export */   "ManagerAppAlreadyInstalledError": () => (/* binding */ ManagerAppAlreadyInstalledError),
/* harmony export */   "ManagerAppDepInstallRequired": () => (/* binding */ ManagerAppDepInstallRequired),
/* harmony export */   "ManagerAppDepUninstallRequired": () => (/* binding */ ManagerAppDepUninstallRequired),
/* harmony export */   "ManagerAppRelyOnBTCError": () => (/* binding */ ManagerAppRelyOnBTCError),
/* harmony export */   "ManagerDeviceLockedError": () => (/* binding */ ManagerDeviceLockedError),
/* harmony export */   "ManagerFirmwareNotEnoughSpaceError": () => (/* binding */ ManagerFirmwareNotEnoughSpaceError),
/* harmony export */   "ManagerNotEnoughSpaceError": () => (/* binding */ ManagerNotEnoughSpaceError),
/* harmony export */   "ManagerUninstallBTCDep": () => (/* binding */ ManagerUninstallBTCDep),
/* harmony export */   "NetworkDown": () => (/* binding */ NetworkDown),
/* harmony export */   "NoAccessToCamera": () => (/* binding */ NoAccessToCamera),
/* harmony export */   "NoAddressesFound": () => (/* binding */ NoAddressesFound),
/* harmony export */   "NoDBPathGiven": () => (/* binding */ NoDBPathGiven),
/* harmony export */   "NotEnoughBalance": () => (/* binding */ NotEnoughBalance),
/* harmony export */   "NotEnoughBalanceBecauseDestinationNotCreated": () => (/* binding */ NotEnoughBalanceBecauseDestinationNotCreated),
/* harmony export */   "NotEnoughBalanceInParentAccount": () => (/* binding */ NotEnoughBalanceInParentAccount),
/* harmony export */   "NotEnoughBalanceToDelegate": () => (/* binding */ NotEnoughBalanceToDelegate),
/* harmony export */   "NotEnoughGas": () => (/* binding */ NotEnoughGas),
/* harmony export */   "NotEnoughSpendableBalance": () => (/* binding */ NotEnoughSpendableBalance),
/* harmony export */   "NotSupportedLegacyAddress": () => (/* binding */ NotSupportedLegacyAddress),
/* harmony export */   "PairingFailed": () => (/* binding */ PairingFailed),
/* harmony export */   "PasswordIncorrectError": () => (/* binding */ PasswordIncorrectError),
/* harmony export */   "PasswordsDontMatchError": () => (/* binding */ PasswordsDontMatchError),
/* harmony export */   "RecipientRequired": () => (/* binding */ RecipientRequired),
/* harmony export */   "RecommendSubAccountsToEmpty": () => (/* binding */ RecommendSubAccountsToEmpty),
/* harmony export */   "RecommendUndelegation": () => (/* binding */ RecommendUndelegation),
/* harmony export */   "StatusCodes": () => (/* binding */ StatusCodes),
/* harmony export */   "SyncError": () => (/* binding */ SyncError),
/* harmony export */   "TimeoutTagged": () => (/* binding */ TimeoutTagged),
/* harmony export */   "TransportError": () => (/* binding */ TransportError),
/* harmony export */   "TransportInterfaceNotAvailable": () => (/* binding */ TransportInterfaceNotAvailable),
/* harmony export */   "TransportOpenUserCancelled": () => (/* binding */ TransportOpenUserCancelled),
/* harmony export */   "TransportRaceCondition": () => (/* binding */ TransportRaceCondition),
/* harmony export */   "TransportStatusError": () => (/* binding */ TransportStatusError),
/* harmony export */   "TransportWebUSBGestureRequired": () => (/* binding */ TransportWebUSBGestureRequired),
/* harmony export */   "UnavailableTezosOriginatedAccountReceive": () => (/* binding */ UnavailableTezosOriginatedAccountReceive),
/* harmony export */   "UnavailableTezosOriginatedAccountSend": () => (/* binding */ UnavailableTezosOriginatedAccountSend),
/* harmony export */   "UnexpectedBootloader": () => (/* binding */ UnexpectedBootloader),
/* harmony export */   "UnknownMCU": () => (/* binding */ UnknownMCU),
/* harmony export */   "UpdateFetchFileFail": () => (/* binding */ UpdateFetchFileFail),
/* harmony export */   "UpdateIncorrectHash": () => (/* binding */ UpdateIncorrectHash),
/* harmony export */   "UpdateIncorrectSig": () => (/* binding */ UpdateIncorrectSig),
/* harmony export */   "UpdateYourApp": () => (/* binding */ UpdateYourApp),
/* harmony export */   "UserRefusedAddress": () => (/* binding */ UserRefusedAddress),
/* harmony export */   "UserRefusedAllowManager": () => (/* binding */ UserRefusedAllowManager),
/* harmony export */   "UserRefusedDeviceNameChange": () => (/* binding */ UserRefusedDeviceNameChange),
/* harmony export */   "UserRefusedFirmwareUpdate": () => (/* binding */ UserRefusedFirmwareUpdate),
/* harmony export */   "UserRefusedOnDevice": () => (/* binding */ UserRefusedOnDevice),
/* harmony export */   "WebsocketConnectionError": () => (/* binding */ WebsocketConnectionError),
/* harmony export */   "WebsocketConnectionFailed": () => (/* binding */ WebsocketConnectionFailed),
/* harmony export */   "WrongAppForCurrency": () => (/* binding */ WrongAppForCurrency),
/* harmony export */   "WrongDeviceForAccount": () => (/* binding */ WrongDeviceForAccount),
/* harmony export */   "addCustomErrorDeserializer": () => (/* binding */ addCustomErrorDeserializer),
/* harmony export */   "createCustomErrorClass": () => (/* binding */ createCustomErrorClass),
/* harmony export */   "deserializeError": () => (/* binding */ deserializeError),
/* harmony export */   "getAltStatusMessage": () => (/* binding */ getAltStatusMessage),
/* harmony export */   "serializeError": () => (/* binding */ serializeError)
/* harmony export */ });
/* eslint-disable no-continue */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
var errorClasses = {};
var deserializers = {};
var addCustomErrorDeserializer = function (name, deserializer) {
    deserializers[name] = deserializer;
};
var createCustomErrorClass = function (name) {
    var C = function CustomError(message, fields) {
        Object.assign(this, fields);
        this.name = name;
        this.message = message || name;
        this.stack = new Error().stack;
    };
    C.prototype = new Error();
    errorClasses[name] = C;
    return C;
};
// inspired from https://github.com/programble/errio/blob/master/index.js
var deserializeError = function (object) {
    if (typeof object === "object" && object) {
        try {
            // $FlowFixMe FIXME HACK
            var msg = JSON.parse(object.message);
            if (msg.message && msg.name) {
                object = msg;
            }
        }
        catch (e) {
            // nothing
        }
        var error = void 0;
        if (typeof object.name === "string") {
            var name_1 = object.name;
            var des = deserializers[name_1];
            if (des) {
                error = des(object);
            }
            else {
                var constructor = name_1 === "Error" ? Error : errorClasses[name_1];
                if (!constructor) {
                    console.warn("deserializing an unknown class '" + name_1 + "'");
                    constructor = createCustomErrorClass(name_1);
                }
                error = Object.create(constructor.prototype);
                try {
                    for (var prop in object) {
                        if (object.hasOwnProperty(prop)) {
                            error[prop] = object[prop];
                        }
                    }
                }
                catch (e) {
                    // sometimes setting a property can fail (e.g. .name)
                }
            }
        }
        else {
            error = new Error(object.message);
        }
        if (!error.stack && Error.captureStackTrace) {
            Error.captureStackTrace(error, deserializeError);
        }
        return error;
    }
    return new Error(String(object));
};
// inspired from https://github.com/sindresorhus/serialize-error/blob/master/index.js
var serializeError = function (value) {
    if (!value)
        return value;
    if (typeof value === "object") {
        return destroyCircular(value, []);
    }
    if (typeof value === "function") {
        return "[Function: " + (value.name || "anonymous") + "]";
    }
    return value;
};
// https://www.npmjs.com/package/destroy-circular
function destroyCircular(from, seen) {
    var to = {};
    seen.push(from);
    for (var _i = 0, _a = Object.keys(from); _i < _a.length; _i++) {
        var key = _a[_i];
        var value = from[key];
        if (typeof value === "function") {
            continue;
        }
        if (!value || typeof value !== "object") {
            to[key] = value;
            continue;
        }
        if (seen.indexOf(from[key]) === -1) {
            to[key] = destroyCircular(from[key], seen.slice(0));
            continue;
        }
        to[key] = "[Circular]";
    }
    if (typeof from.name === "string") {
        to.name = from.name;
    }
    if (typeof from.message === "string") {
        to.message = from.message;
    }
    if (typeof from.stack === "string") {
        to.stack = from.stack;
    }
    return to;
}

var AccountNameRequiredError = createCustomErrorClass("AccountNameRequired");
var AccountNotSupported = createCustomErrorClass("AccountNotSupported");
var AmountRequired = createCustomErrorClass("AmountRequired");
var BluetoothRequired = createCustomErrorClass("BluetoothRequired");
var BtcUnmatchedApp = createCustomErrorClass("BtcUnmatchedApp");
var CantOpenDevice = createCustomErrorClass("CantOpenDevice");
var CashAddrNotSupported = createCustomErrorClass("CashAddrNotSupported");
var CurrencyNotSupported = createCustomErrorClass("CurrencyNotSupported");
var DeviceAppVerifyNotSupported = createCustomErrorClass("DeviceAppVerifyNotSupported");
var DeviceGenuineSocketEarlyClose = createCustomErrorClass("DeviceGenuineSocketEarlyClose");
var DeviceNotGenuineError = createCustomErrorClass("DeviceNotGenuine");
var DeviceOnDashboardExpected = createCustomErrorClass("DeviceOnDashboardExpected");
var DeviceOnDashboardUnexpected = createCustomErrorClass("DeviceOnDashboardUnexpected");
var DeviceInOSUExpected = createCustomErrorClass("DeviceInOSUExpected");
var DeviceHalted = createCustomErrorClass("DeviceHalted");
var DeviceNameInvalid = createCustomErrorClass("DeviceNameInvalid");
var DeviceSocketFail = createCustomErrorClass("DeviceSocketFail");
var DeviceSocketNoBulkStatus = createCustomErrorClass("DeviceSocketNoBulkStatus");
var DisconnectedDevice = createCustomErrorClass("DisconnectedDevice");
var DisconnectedDeviceDuringOperation = createCustomErrorClass("DisconnectedDeviceDuringOperation");
var EnpointConfigError = createCustomErrorClass("EnpointConfig");
var EthAppPleaseEnableContractData = createCustomErrorClass("EthAppPleaseEnableContractData");
var FeeEstimationFailed = createCustomErrorClass("FeeEstimationFailed");
var FirmwareNotRecognized = createCustomErrorClass("FirmwareNotRecognized");
var HardResetFail = createCustomErrorClass("HardResetFail");
var InvalidXRPTag = createCustomErrorClass("InvalidXRPTag");
var InvalidAddress = createCustomErrorClass("InvalidAddress");
var InvalidAddressBecauseDestinationIsAlsoSource = createCustomErrorClass("InvalidAddressBecauseDestinationIsAlsoSource");
var LatestMCUInstalledError = createCustomErrorClass("LatestMCUInstalledError");
var UnknownMCU = createCustomErrorClass("UnknownMCU");
var LedgerAPIError = createCustomErrorClass("LedgerAPIError");
var LedgerAPIErrorWithMessage = createCustomErrorClass("LedgerAPIErrorWithMessage");
var LedgerAPINotAvailable = createCustomErrorClass("LedgerAPINotAvailable");
var ManagerAppAlreadyInstalledError = createCustomErrorClass("ManagerAppAlreadyInstalled");
var ManagerAppRelyOnBTCError = createCustomErrorClass("ManagerAppRelyOnBTC");
var ManagerAppDepInstallRequired = createCustomErrorClass("ManagerAppDepInstallRequired");
var ManagerAppDepUninstallRequired = createCustomErrorClass("ManagerAppDepUninstallRequired");
var ManagerDeviceLockedError = createCustomErrorClass("ManagerDeviceLocked");
var ManagerFirmwareNotEnoughSpaceError = createCustomErrorClass("ManagerFirmwareNotEnoughSpace");
var ManagerNotEnoughSpaceError = createCustomErrorClass("ManagerNotEnoughSpace");
var ManagerUninstallBTCDep = createCustomErrorClass("ManagerUninstallBTCDep");
var NetworkDown = createCustomErrorClass("NetworkDown");
var NoAddressesFound = createCustomErrorClass("NoAddressesFound");
var NotEnoughBalance = createCustomErrorClass("NotEnoughBalance");
var NotEnoughBalanceToDelegate = createCustomErrorClass("NotEnoughBalanceToDelegate");
var NotEnoughBalanceInParentAccount = createCustomErrorClass("NotEnoughBalanceInParentAccount");
var NotEnoughSpendableBalance = createCustomErrorClass("NotEnoughSpendableBalance");
var NotEnoughBalanceBecauseDestinationNotCreated = createCustomErrorClass("NotEnoughBalanceBecauseDestinationNotCreated");
var NoAccessToCamera = createCustomErrorClass("NoAccessToCamera");
var NotEnoughGas = createCustomErrorClass("NotEnoughGas");
var NotSupportedLegacyAddress = createCustomErrorClass("NotSupportedLegacyAddress");
var GasLessThanEstimate = createCustomErrorClass("GasLessThanEstimate");
var PasswordsDontMatchError = createCustomErrorClass("PasswordsDontMatch");
var PasswordIncorrectError = createCustomErrorClass("PasswordIncorrect");
var RecommendSubAccountsToEmpty = createCustomErrorClass("RecommendSubAccountsToEmpty");
var RecommendUndelegation = createCustomErrorClass("RecommendUndelegation");
var TimeoutTagged = createCustomErrorClass("TimeoutTagged");
var UnexpectedBootloader = createCustomErrorClass("UnexpectedBootloader");
var MCUNotGenuineToDashboard = createCustomErrorClass("MCUNotGenuineToDashboard");
var RecipientRequired = createCustomErrorClass("RecipientRequired");
var UnavailableTezosOriginatedAccountReceive = createCustomErrorClass("UnavailableTezosOriginatedAccountReceive");
var UnavailableTezosOriginatedAccountSend = createCustomErrorClass("UnavailableTezosOriginatedAccountSend");
var UpdateFetchFileFail = createCustomErrorClass("UpdateFetchFileFail");
var UpdateIncorrectHash = createCustomErrorClass("UpdateIncorrectHash");
var UpdateIncorrectSig = createCustomErrorClass("UpdateIncorrectSig");
var UpdateYourApp = createCustomErrorClass("UpdateYourApp");
var UserRefusedDeviceNameChange = createCustomErrorClass("UserRefusedDeviceNameChange");
var UserRefusedAddress = createCustomErrorClass("UserRefusedAddress");
var UserRefusedFirmwareUpdate = createCustomErrorClass("UserRefusedFirmwareUpdate");
var UserRefusedAllowManager = createCustomErrorClass("UserRefusedAllowManager");
var UserRefusedOnDevice = createCustomErrorClass("UserRefusedOnDevice"); // TODO rename because it's just for transaction refusal
var TransportOpenUserCancelled = createCustomErrorClass("TransportOpenUserCancelled");
var TransportInterfaceNotAvailable = createCustomErrorClass("TransportInterfaceNotAvailable");
var TransportRaceCondition = createCustomErrorClass("TransportRaceCondition");
var TransportWebUSBGestureRequired = createCustomErrorClass("TransportWebUSBGestureRequired");
var DeviceShouldStayInApp = createCustomErrorClass("DeviceShouldStayInApp");
var WebsocketConnectionError = createCustomErrorClass("WebsocketConnectionError");
var WebsocketConnectionFailed = createCustomErrorClass("WebsocketConnectionFailed");
var WrongDeviceForAccount = createCustomErrorClass("WrongDeviceForAccount");
var WrongAppForCurrency = createCustomErrorClass("WrongAppForCurrency");
var ETHAddressNonEIP = createCustomErrorClass("ETHAddressNonEIP");
var CantScanQRCode = createCustomErrorClass("CantScanQRCode");
var FeeNotLoaded = createCustomErrorClass("FeeNotLoaded");
var FeeRequired = createCustomErrorClass("FeeRequired");
var FeeTooHigh = createCustomErrorClass("FeeTooHigh");
var SyncError = createCustomErrorClass("SyncError");
var PairingFailed = createCustomErrorClass("PairingFailed");
var GenuineCheckFailed = createCustomErrorClass("GenuineCheckFailed");
var LedgerAPI4xx = createCustomErrorClass("LedgerAPI4xx");
var LedgerAPI5xx = createCustomErrorClass("LedgerAPI5xx");
var FirmwareOrAppUpdateRequired = createCustomErrorClass("FirmwareOrAppUpdateRequired");
// db stuff, no need to translate
var NoDBPathGiven = createCustomErrorClass("NoDBPathGiven");
var DBWrongPassword = createCustomErrorClass("DBWrongPassword");
var DBNotReset = createCustomErrorClass("DBNotReset");
/**
 * TransportError is used for any generic transport errors.
 * e.g. Error thrown when data received by exchanges are incorrect or if exchanged failed to communicate with the device for various reason.
 */
function TransportError(message, id) {
    this.name = "TransportError";
    this.message = message;
    this.stack = new Error().stack;
    this.id = id;
}
TransportError.prototype = new Error();
addCustomErrorDeserializer("TransportError", function (e) { return new TransportError(e.message, e.id); });
var StatusCodes = {
    PIN_REMAINING_ATTEMPTS: 0x63c0,
    INCORRECT_LENGTH: 0x6700,
    MISSING_CRITICAL_PARAMETER: 0x6800,
    COMMAND_INCOMPATIBLE_FILE_STRUCTURE: 0x6981,
    SECURITY_STATUS_NOT_SATISFIED: 0x6982,
    CONDITIONS_OF_USE_NOT_SATISFIED: 0x6985,
    INCORRECT_DATA: 0x6a80,
    NOT_ENOUGH_MEMORY_SPACE: 0x6a84,
    REFERENCED_DATA_NOT_FOUND: 0x6a88,
    FILE_ALREADY_EXISTS: 0x6a89,
    INCORRECT_P1_P2: 0x6b00,
    INS_NOT_SUPPORTED: 0x6d00,
    CLA_NOT_SUPPORTED: 0x6e00,
    TECHNICAL_PROBLEM: 0x6f00,
    OK: 0x9000,
    MEMORY_PROBLEM: 0x9240,
    NO_EF_SELECTED: 0x9400,
    INVALID_OFFSET: 0x9402,
    FILE_NOT_FOUND: 0x9404,
    INCONSISTENT_FILE: 0x9408,
    ALGORITHM_NOT_SUPPORTED: 0x9484,
    INVALID_KCV: 0x9485,
    CODE_NOT_INITIALIZED: 0x9802,
    ACCESS_CONDITION_NOT_FULFILLED: 0x9804,
    CONTRADICTION_SECRET_CODE_STATUS: 0x9808,
    CONTRADICTION_INVALIDATION: 0x9810,
    CODE_BLOCKED: 0x9840,
    MAX_VALUE_REACHED: 0x9850,
    GP_AUTH_FAILED: 0x6300,
    LICENSING: 0x6f42,
    HALTED: 0x6faa,
};
function getAltStatusMessage(code) {
    switch (code) {
        // improve text of most common errors
        case 0x6700:
            return "Incorrect length";
        case 0x6800:
            return "Missing critical parameter";
        case 0x6982:
            return "Security not satisfied (dongle locked or have invalid access rights)";
        case 0x6985:
            return "Condition of use not satisfied (denied by the user?)";
        case 0x6a80:
            return "Invalid data received";
        case 0x6b00:
            return "Invalid parameter received";
    }
    if (0x6f00 <= code && code <= 0x6fff) {
        return "Internal error, please report";
    }
}
/**
 * Error thrown when a device returned a non success status.
 * the error.statusCode is one of the `StatusCodes` exported by this library.
 */
function TransportStatusError(statusCode) {
    this.name = "TransportStatusError";
    var statusText = Object.keys(StatusCodes).find(function (k) { return StatusCodes[k] === statusCode; }) ||
        "UNKNOWN_ERROR";
    var smsg = getAltStatusMessage(statusCode) || statusText;
    var statusCodeStr = statusCode.toString(16);
    this.message = "Ledger device: " + smsg + " (0x" + statusCodeStr + ")";
    this.stack = new Error().stack;
    this.statusCode = statusCode;
    this.statusText = statusText;
}
TransportStatusError.prototype = new Error();
addCustomErrorDeserializer("TransportStatusError", function (e) { return new TransportStatusError(e.statusCode); });




/***/ }),

/***/ 51461:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ledger": () => (/* binding */ Ledger),
  "packageInfo": () => (/* reexport */ packageInfo_packageInfo)
});

// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase.js
var classPrivateFieldLooseBase = __webpack_require__(89539);
// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey.js
var classPrivateFieldLooseKey = __webpack_require__(38879);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/hw-ledger-transports/packageInfo.js
// Copyright 2017-2021 @polkadot/hw-ledger-transports authors & contributors
// SPDX-License-Identifier: Apache-2.0
// Auto-generated by @polkadot/dev, do not edit
const packageInfo = {
  name: '@polkadot/hw-ledger-transports',
  version: '6.7.1'
};
// EXTERNAL MODULE: consume shared module (default) @polkadot/util@^6.7.1 (strict) (fallback: ../../node_modules/@polkadot/util/index.js)
var index_js_ = __webpack_require__(13948);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/hw-ledger/packageInfo.js
// Copyright 2017-2021 @polkadot/hw-ledger authors & contributors
// SPDX-License-Identifier: Apache-2.0
// Auto-generated by @polkadot/dev, do not edit
const packageInfo_packageInfo = {
  name: '@polkadot/hw-ledger',
  version: '6.7.1'
};
;// CONCATENATED MODULE: ../../node_modules/@polkadot/hw-ledger/detectPackage.js
// Copyright 2017-2021 @polkadot/hw-ledger authors & contributors
// SPDX-License-Identifier: Apache-2.0



(0,index_js_.detectPackage)(packageInfo_packageInfo, typeof __dirname !== 'undefined' && __dirname, [packageInfo, index_js_.packageInfo]);
// EXTERNAL MODULE: ../../node_modules/events/events.js
var events = __webpack_require__(22699);
var events_default = /*#__PURE__*/__webpack_require__.n(events);
// EXTERNAL MODULE: ../../node_modules/@ledgerhq/errors/dist/index.js
var dist = __webpack_require__(74821);
;// CONCATENATED MODULE: ../../node_modules/@ledgerhq/hw-transport/lib-es/Transport.js
/* provided dependency */ var Buffer = __webpack_require__(48834)["Buffer"];



/**
 */

/**
 * Transport defines the generic interface to share between node/u2f impl
 * A **Descriptor** is a parametric type that is up to be determined for the implementation.
 * it can be for instance an ID, an file path, a URL,...
 */
class Transport {
  constructor() {
    this.exchangeTimeout = 30000;
    this.unresponsiveTimeout = 15000;
    this.deviceModel = null;
    this._events = new (events_default())();

    this.send = async (cla, ins, p1, p2, data = Buffer.alloc(0), statusList = [dist.StatusCodes.OK]) => {
      if (data.length >= 256) {
        throw new dist.TransportError("data.length exceed 256 bytes limit. Got: " + data.length, "DataLengthTooBig");
      }

      const response = await this.exchange(Buffer.concat([Buffer.from([cla, ins, p1, p2]), Buffer.from([data.length]), data]));
      const sw = response.readUInt16BE(response.length - 2);

      if (!statusList.some(s => s === sw)) {
        throw new dist.TransportStatusError(sw);
      }

      return response;
    };

    this.exchangeBusyPromise = void 0;

    this.exchangeAtomicImpl = async f => {
      if (this.exchangeBusyPromise) {
        throw new dist.TransportRaceCondition("An action was already pending on the Ledger device. Please deny or reconnect.");
      }

      let resolveBusy;
      const busyPromise = new Promise(r => {
        resolveBusy = r;
      });
      this.exchangeBusyPromise = busyPromise;
      let unresponsiveReached = false;
      const timeout = setTimeout(() => {
        unresponsiveReached = true;
        this.emit("unresponsive");
      }, this.unresponsiveTimeout);

      try {
        const res = await f();

        if (unresponsiveReached) {
          this.emit("responsive");
        }

        return res;
      } finally {
        clearTimeout(timeout);
        if (resolveBusy) resolveBusy();
        this.exchangeBusyPromise = null;
      }
    };

    this._appAPIlock = null;
  }

  /**
   * low level api to communicate with the device
   * This method is for implementations to implement but should not be directly called.
   * Instead, the recommanded way is to use send() method
   * @param apdu the data to send
   * @return a Promise of response data
   */
  exchange(_apdu) {
    throw new Error("exchange not implemented");
  }
  /**
   * set the "scramble key" for the next exchanges with the device.
   * Each App can have a different scramble key and they internally will set it at instanciation.
   * @param key the scramble key
   */


  setScrambleKey(_key) {}
  /**
   * close the exchange with the device.
   * @return a Promise that ends when the transport is closed.
   */


  close() {
    return Promise.resolve();
  }

  /**
   * Listen to an event on an instance of transport.
   * Transport implementation can have specific events. Here is the common events:
   * * `"disconnect"` : triggered if Transport is disconnected
   */
  on(eventName, cb) {
    this._events.on(eventName, cb);
  }
  /**
   * Stop listening to an event on an instance of transport.
   */


  off(eventName, cb) {
    this._events.removeListener(eventName, cb);
  }

  emit(event, ...args) {
    this._events.emit(event, ...args);
  }
  /**
   * Enable or not logs of the binary exchange
   */


  setDebugMode() {
    console.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.");
  }
  /**
   * Set a timeout (in milliseconds) for the exchange call. Only some transport might implement it. (e.g. U2F)
   */


  setExchangeTimeout(exchangeTimeout) {
    this.exchangeTimeout = exchangeTimeout;
  }
  /**
   * Define the delay before emitting "unresponsive" on an exchange that does not respond
   */


  setExchangeUnresponsiveTimeout(unresponsiveTimeout) {
    this.unresponsiveTimeout = unresponsiveTimeout;
  }
  /**
   * wrapper on top of exchange to simplify work of the implementation.
   * @param cla
   * @param ins
   * @param p1
   * @param p2
   * @param data
   * @param statusList is a list of accepted status code (shorts). [0x9000] by default
   * @return a Promise of response buffer
   */


  /**
   * create() allows to open the first descriptor available or
   * throw if there is none or if timeout is reached.
   * This is a light helper, alternative to using listen() and open() (that you may need for any more advanced usecase)
   * @example
  TransportFoo.create().then(transport => ...)
   */
  static create(openTimeout = 3000, listenTimeout) {
    return new Promise((resolve, reject) => {
      let found = false;
      const sub = this.listen({
        next: e => {
          found = true;
          if (sub) sub.unsubscribe();
          if (listenTimeoutId) clearTimeout(listenTimeoutId);
          this.open(e.descriptor, openTimeout).then(resolve, reject);
        },
        error: e => {
          if (listenTimeoutId) clearTimeout(listenTimeoutId);
          reject(e);
        },
        complete: () => {
          if (listenTimeoutId) clearTimeout(listenTimeoutId);

          if (!found) {
            reject(new dist.TransportError(this.ErrorMessage_NoDeviceFound, "NoDeviceFound"));
          }
        }
      });
      const listenTimeoutId = listenTimeout ? setTimeout(() => {
        sub.unsubscribe();
        reject(new dist.TransportError(this.ErrorMessage_ListenTimeout, "ListenTimeout"));
      }, listenTimeout) : null;
    });
  }

  decorateAppAPIMethods(self, methods, scrambleKey) {
    for (let methodName of methods) {
      self[methodName] = this.decorateAppAPIMethod(methodName, self[methodName], self, scrambleKey);
    }
  }

  decorateAppAPIMethod(methodName, f, ctx, scrambleKey) {
    return async (...args) => {
      const {
        _appAPIlock
      } = this;

      if (_appAPIlock) {
        return Promise.reject(new dist.TransportError("Ledger Device is busy (lock " + _appAPIlock + ")", "TransportLocked"));
      }

      try {
        this._appAPIlock = methodName;
        this.setScrambleKey(scrambleKey);
        return await f.apply(ctx, args);
      } finally {
        this._appAPIlock = null;
      }
    };
  }

}
Transport.isSupported = void 0;
Transport.list = void 0;
Transport.listen = void 0;
Transport.open = void 0;
Transport.ErrorMessage_ListenTimeout = "No Ledger device found (timeout)";
Transport.ErrorMessage_NoDeviceFound = "No Ledger device found";
//# sourceMappingURL=Transport.js.map
// EXTERNAL MODULE: ../../node_modules/@ledgerhq/devices/lib/hid-framing.js
var hid_framing = __webpack_require__(15842);
// EXTERNAL MODULE: ../../node_modules/semver/index.js
var semver = __webpack_require__(97699);
var semver_default = /*#__PURE__*/__webpack_require__.n(semver);
;// CONCATENATED MODULE: ../../node_modules/@ledgerhq/devices/lib-es/index.js

/**
 * The USB product IDs will be defined as MMII, encoding a model (MM) and an interface bitfield (II)
 *
 ** Model
 * Ledger Nano S : 0x10
 * Ledger Blue : 0x00
 * Ledger Nano X : 0x40
 *
 ** Interface support bitfield
 * Generic HID : 0x01
 * Keyboard HID : 0x02
 * U2F : 0x04
 * CCID : 0x08
 * WebUSB : 0x10
 */

const IIGenericHID = 0x01;
const IIKeyboardHID = 0x02;
const IIU2F = 0x04;
const IICCID = 0x08;
const IIWebUSB = 0x10;
const devices = {
  blue: {
    id: "blue",
    productName: "Ledger Blue",
    productIdMM: 0x00,
    legacyUsbProductId: 0x0000,
    usbOnly: true,
    memorySize: 480 * 1024,
    blockSize: 4 * 1024,
    getBlockSize: _firwareVersion => 4 * 1024
  },
  nanoS: {
    id: "nanoS",
    productName: "Ledger Nano S",
    productIdMM: 0x10,
    legacyUsbProductId: 0x0001,
    usbOnly: true,
    memorySize: 320 * 1024,
    blockSize: 4 * 1024,
    getBlockSize: firmwareVersion => semver_default().lt(semver_default().coerce(firmwareVersion), "2.0.0") ? 4 * 1024 : 2 * 1024
  },
  nanoX: {
    id: "nanoX",
    productName: "Ledger Nano X",
    productIdMM: 0x40,
    legacyUsbProductId: 0x0004,
    usbOnly: false,
    memorySize: 2 * 1024 * 1024,
    blockSize: 4 * 1024,
    getBlockSize: _firwareVersion => 4 * 1024,
    bluetoothSpec: [{
      // this is the legacy one (prototype version). we will eventually drop it.
      serviceUuid: "d973f2e0-b19e-11e2-9e96-0800200c9a66",
      notifyUuid: "d973f2e1-b19e-11e2-9e96-0800200c9a66",
      writeUuid: "d973f2e2-b19e-11e2-9e96-0800200c9a66"
    }, {
      serviceUuid: "13d63400-2c97-0004-0000-4c6564676572",
      notifyUuid: "13d63400-2c97-0004-0001-4c6564676572",
      writeUuid: "13d63400-2c97-0004-0002-4c6564676572"
    }]
  }
};
const productMap = {
  Blue: "blue",
  "Nano S": "nanoS",
  "Nano X": "nanoX"
}; // $FlowFixMe

const devicesList = Object.values(devices);
/**
 *
 */

const ledgerUSBVendorId = 0x2c97;
/**
 *
 */

const getDeviceModel = id => {
  const info = devices[id];
  if (!info) throw new Error("device '" + id + "' does not exist");
  return info;
};
/**
 *
 */

const identifyUSBProductId = usbProductId => {
  const legacy = devicesList.find(d => d.legacyUsbProductId === usbProductId);
  if (legacy) return legacy;
  const mm = usbProductId >> 8;
  const deviceModel = devicesList.find(d => d.productIdMM === mm);
  return deviceModel;
};
const identifyProductName = productName => {
  const productId = productMap[productName];
  const deviceModel = devicesList.find(d => d.id === productId);
  return deviceModel;
};
const bluetoothServices = [];
const serviceUuidToInfos = {};

for (let id in devices) {
  const deviceModel = devices[id];
  const {
    bluetoothSpec
  } = deviceModel;

  if (bluetoothSpec) {
    for (let i = 0; i < bluetoothSpec.length; i++) {
      const spec = bluetoothSpec[i];
      bluetoothServices.push(spec.serviceUuid);
      serviceUuidToInfos[spec.serviceUuid] = serviceUuidToInfos[spec.serviceUuid.replace(/-/g, "")] = {
        deviceModel,
        ...spec
      };
    }
  }
}
/**
 *
 */


const getBluetoothServiceUuids = () => bluetoothServices;
/**
 *
 */

const getInfosForServiceUuid = uuid => serviceUuidToInfos[uuid.toLowerCase()];
/**
 *
 */
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/@ledgerhq/logs/lib-es/index.js
/**
 * A Log object
 */
let id = 0;
const subscribers = [];
/**
 * log something
 * @param type a namespaced identifier of the log (it is not a level like "debug", "error" but more like "apdu-in", "apdu-out", etc...)
 * @param message a clear message of the log associated to the type
 */

const log = (type, message, data) => {
  const obj = {
    type,
    id: String(++id),
    date: new Date()
  };
  if (message) obj.message = message;
  if (data) obj.data = data;
  dispatch(obj);
};
/**
 * listen to logs.
 * @param cb that is called for each future log() with the Log object
 * @return a function that can be called to unsubscribe the listener
 */

const listen = cb => {
  subscribers.push(cb);
  return () => {
    const i = subscribers.indexOf(cb);

    if (i !== -1) {
      // equivalent of subscribers.splice(i, 1) // https://twitter.com/Rich_Harris/status/1125850391155965952
      subscribers[i] = subscribers[subscribers.length - 1];
      subscribers.pop();
    }
  };
};

function dispatch(log) {
  for (let i = 0; i < subscribers.length; i++) {
    try {
      subscribers[i](log);
    } catch (e) {
      console.error(e);
    }
  }
} // for debug purpose


if (typeof window !== "undefined") {
  window.__ledgerLogsListen = listen;
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/@ledgerhq/hw-transport-webhid/lib-es/TransportWebHID.js
/* provided dependency */ var TransportWebHID_Buffer = __webpack_require__(48834)["Buffer"];





const ledgerDevices = [{
  vendorId: ledgerUSBVendorId
}];

const isSupported = () => Promise.resolve(!!(__webpack_require__.g.navigator && __webpack_require__.g.navigator.hid));

const getHID = () => {
  // $FlowFixMe
  const {
    hid
  } = navigator;
  if (!hid) throw new dist.TransportError("navigator.hid is not supported", "HIDNotSupported");
  return hid;
};

async function requestLedgerDevices() {
  const device = await getHID().requestDevice({
    filters: ledgerDevices
  });
  if (Array.isArray(device)) return device;
  return [device];
}

async function getLedgerDevices() {
  const devices = await getHID().getDevices();
  return devices.filter(d => d.vendorId === ledgerUSBVendorId);
}

async function getFirstLedgerDevice() {
  const existingDevices = await getLedgerDevices();
  if (existingDevices.length > 0) return existingDevices[0];
  const devices = await requestLedgerDevices();
  return devices[0];
}
/**
 * WebHID Transport implementation
 * @example
 * import TransportWebHID from "@ledgerhq/hw-transport-webhid";
 * ...
 * TransportWebHID.create().then(transport => ...)
 */


class TransportWebHID extends Transport {
  constructor(device) {
    super();
    this.device = void 0;
    this.deviceModel = void 0;
    this.channel = Math.floor(Math.random() * 0xffff);
    this.packetSize = 64;
    this.inputs = [];
    this.inputCallback = void 0;

    this.read = () => {
      if (this.inputs.length) {
        return Promise.resolve(this.inputs.shift());
      }

      return new Promise(success => {
        this.inputCallback = success;
      });
    };

    this.onInputReport = e => {
      const buffer = TransportWebHID_Buffer.from(e.data.buffer);

      if (this.inputCallback) {
        this.inputCallback(buffer);
        this.inputCallback = null;
      } else {
        this.inputs.push(buffer);
      }
    };

    this._disconnectEmitted = false;

    this._emitDisconnect = e => {
      if (this._disconnectEmitted) return;
      this._disconnectEmitted = true;
      this.emit("disconnect", e);
    };

    this.exchange = apdu => this.exchangeAtomicImpl(async () => {
      const {
        channel,
        packetSize
      } = this;
      log("apdu", "=> " + apdu.toString("hex"));
      const framing = (0,hid_framing/* default */.Z)(channel, packetSize); // Write...

      const blocks = framing.makeBlocks(apdu);

      for (let i = 0; i < blocks.length; i++) {
        await this.device.sendReport(0, blocks[i]);
      } // Read...


      let result;
      let acc;

      while (!(result = framing.getReducedResult(acc))) {
        const buffer = await this.read();
        acc = framing.reduceResponse(acc, buffer);
      }

      log("apdu", "<= " + result.toString("hex"));
      return result;
    }).catch(e => {
      if (e && e.message && e.message.includes("write")) {
        this._emitDisconnect(e);

        throw new dist.DisconnectedDeviceDuringOperation(e.message);
      }

      throw e;
    });

    this.device = device;
    this.deviceModel = identifyUSBProductId(device.productId);
    device.addEventListener("inputreport", this.onInputReport);
  }

  /**
   * Similar to create() except it will always display the device permission (even if some devices are already accepted).
   */
  static async request() {
    const [device] = await requestLedgerDevices();
    return TransportWebHID.open(device);
  }
  /**
   * Similar to create() except it will never display the device permission (it returns a Promise<?Transport>, null if it fails to find a device).
   */


  static async openConnected() {
    const devices = await getLedgerDevices();
    if (devices.length === 0) return null;
    return TransportWebHID.open(devices[0]);
  }
  /**
   * Create a Ledger transport with a HIDDevice
   */


  static async open(device) {
    await device.open();
    const transport = new TransportWebHID(device);

    const onDisconnect = e => {
      if (device === e.device) {
        getHID().removeEventListener("disconnect", onDisconnect);

        transport._emitDisconnect(new dist.DisconnectedDevice());
      }
    };

    getHID().addEventListener("disconnect", onDisconnect);
    return transport;
  }

  /**
   * Release the transport device
   */
  async close() {
    await this.exchangeBusyPromise;
    this.device.removeEventListener("inputreport", this.onInputReport);
    await this.device.close();
  }
  /**
   * Exchange with the device using APDU protocol.
   * @param apdu
   * @returns a promise of apdu response
   */


  setScrambleKey() {}

}
TransportWebHID.isSupported = isSupported;
TransportWebHID.list = getLedgerDevices;

TransportWebHID.listen = observer => {
  let unsubscribed = false;
  getFirstLedgerDevice().then(device => {
    if (!device) {
      observer.error(new dist.TransportOpenUserCancelled("Access denied to use Ledger device"));
    } else if (!unsubscribed) {
      const deviceModel = identifyUSBProductId(device.productId);
      observer.next({
        type: "add",
        descriptor: device,
        deviceModel
      });
      observer.complete();
    }
  }, error => {
    observer.error(new dist.TransportOpenUserCancelled(error.message));
  });

  function unsubscribe() {
    unsubscribed = true;
  }

  return {
    unsubscribe
  };
};
//# sourceMappingURL=TransportWebHID.js.map
;// CONCATENATED MODULE: ../../node_modules/@ledgerhq/hw-transport-webusb/lib-es/webusb.js

const webusb_ledgerDevices = [{
  vendorId: ledgerUSBVendorId
}];
async function requestLedgerDevice() {
  // $FlowFixMe
  const device = await navigator.usb.requestDevice({
    filters: webusb_ledgerDevices
  });
  return device;
}
async function webusb_getLedgerDevices() {
  // $FlowFixMe
  const devices = await navigator.usb.getDevices();
  return devices.filter(d => d.vendorId === ledgerUSBVendorId);
}
async function webusb_getFirstLedgerDevice() {
  const existingDevices = await webusb_getLedgerDevices();
  if (existingDevices.length > 0) return existingDevices[0];
  return requestLedgerDevice();
}
const webusb_isSupported = () => Promise.resolve(!!navigator && // $FlowFixMe
!!navigator.usb && typeof navigator.usb.getDevices === "function");
//# sourceMappingURL=webusb.js.map
;// CONCATENATED MODULE: ../../node_modules/@ledgerhq/hw-transport-webusb/lib-es/TransportWebUSB.js
/* provided dependency */ var TransportWebUSB_Buffer = __webpack_require__(48834)["Buffer"];






const configurationValue = 1;
const endpointNumber = 3;
/**
 * WebUSB Transport implementation
 * @example
 * import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
 * ...
 * TransportWebUSB.create().then(transport => ...)
 */

class TransportWebUSB extends Transport {
  constructor(device, interfaceNumber) {
    super();
    this.device = void 0;
    this.deviceModel = void 0;
    this.channel = Math.floor(Math.random() * 0xffff);
    this.packetSize = 64;
    this.interfaceNumber = void 0;
    this._disconnectEmitted = false;

    this._emitDisconnect = e => {
      if (this._disconnectEmitted) return;
      this._disconnectEmitted = true;
      this.emit("disconnect", e);
    };

    this.exchange = apdu => this.exchangeAtomicImpl(async () => {
      const {
        channel,
        packetSize
      } = this;
      log("apdu", "=> " + apdu.toString("hex"));
      const framing = (0,hid_framing/* default */.Z)(channel, packetSize); // Write...

      const blocks = framing.makeBlocks(apdu);

      for (let i = 0; i < blocks.length; i++) {
        await this.device.transferOut(endpointNumber, blocks[i]);
      } // Read...


      let result;
      let acc;

      while (!(result = framing.getReducedResult(acc))) {
        const r = await this.device.transferIn(endpointNumber, packetSize);
        const buffer = TransportWebUSB_Buffer.from(r.data.buffer);
        acc = framing.reduceResponse(acc, buffer);
      }

      log("apdu", "<= " + result.toString("hex"));
      return result;
    }).catch(e => {
      if (e && e.message && e.message.includes("disconnected")) {
        this._emitDisconnect(e);

        throw new dist.DisconnectedDeviceDuringOperation(e.message);
      }

      throw e;
    });

    this.device = device;
    this.interfaceNumber = interfaceNumber;
    this.deviceModel = identifyUSBProductId(device.productId);
  }
  /**
   * Check if WebUSB transport is supported.
   */


  /**
   * Similar to create() except it will always display the device permission (even if some devices are already accepted).
   */
  static async request() {
    const device = await requestLedgerDevice();
    return TransportWebUSB.open(device);
  }
  /**
   * Similar to create() except it will never display the device permission (it returns a Promise<?Transport>, null if it fails to find a device).
   */


  static async openConnected() {
    const devices = await webusb_getLedgerDevices();
    if (devices.length === 0) return null;
    return TransportWebUSB.open(devices[0]);
  }
  /**
   * Create a Ledger transport with a USBDevice
   */


  static async open(device) {
    await device.open();

    if (device.configuration === null) {
      await device.selectConfiguration(configurationValue);
    }

    await gracefullyResetDevice(device);
    const iface = device.configurations[0].interfaces.find(({
      alternates
    }) => alternates.some(a => a.interfaceClass === 255));

    if (!iface) {
      throw new dist.TransportInterfaceNotAvailable("No WebUSB interface found for your Ledger device. Please upgrade firmware or contact techsupport.");
    }

    const interfaceNumber = iface.interfaceNumber;

    try {
      await device.claimInterface(interfaceNumber);
    } catch (e) {
      await device.close();
      throw new dist.TransportInterfaceNotAvailable(e.message);
    }

    const transport = new TransportWebUSB(device, interfaceNumber);

    const onDisconnect = e => {
      if (device === e.device) {
        // $FlowFixMe
        navigator.usb.removeEventListener("disconnect", onDisconnect);

        transport._emitDisconnect(new dist.DisconnectedDevice());
      }
    }; // $FlowFixMe


    navigator.usb.addEventListener("disconnect", onDisconnect);
    return transport;
  }

  /**
   * Release the transport device
   */
  async close() {
    await this.exchangeBusyPromise;
    await this.device.releaseInterface(this.interfaceNumber);
    await gracefullyResetDevice(this.device);
    await this.device.close();
  }
  /**
   * Exchange with the device using APDU protocol.
   * @param apdu
   * @returns a promise of apdu response
   */


  setScrambleKey() {}

}
TransportWebUSB.isSupported = webusb_isSupported;
TransportWebUSB.list = webusb_getLedgerDevices;

TransportWebUSB.listen = observer => {
  let unsubscribed = false;
  webusb_getFirstLedgerDevice().then(device => {
    if (!unsubscribed) {
      const deviceModel = identifyUSBProductId(device.productId);
      observer.next({
        type: "add",
        descriptor: device,
        deviceModel
      });
      observer.complete();
    }
  }, error => {
    if (window.DOMException && error instanceof window.DOMException && error.code === 18) {
      observer.error(new dist.TransportWebUSBGestureRequired(error.message));
    } else {
      observer.error(new dist.TransportOpenUserCancelled(error.message));
    }
  });

  function unsubscribe() {
    unsubscribed = true;
  }

  return {
    unsubscribe
  };
};

async function gracefullyResetDevice(device) {
  try {
    await device.reset();
  } catch (err) {
    console.warn(err);
  }
}
//# sourceMappingURL=TransportWebUSB.js.map
;// CONCATENATED MODULE: ../../node_modules/@polkadot/hw-ledger-transports/browser.js
// Copyright 2017-2021 @polkadot/hw-ledger authors & contributors
// SPDX-License-Identifier: Apache-2.0



const transports = [// deprecated
// import LedgerU2F from '@ledgerhq/hw-transport-u2f';
// {
//   create: (): Promise<Transport> =>
//     LedgerU2F.create(),
//   type: 'u2f'
// },
{
  create: () => TransportWebUSB.create(),
  type: 'webusb'
}, {
  create: () => TransportWebHID.create(),
  type: 'hid'
}];
;// CONCATENATED MODULE: ../../node_modules/@polkadot/hw-ledger/constants.js
// Copyright 2017-2021 @polkadot/hw-ledger authors & contributors
// SPDX-License-Identifier: Apache-2.0
const LEDGER_DEFAULT_ACCOUNT = 0x80000000;
const LEDGER_DEFAULT_CHANGE = 0x80000000;
const LEDGER_DEFAULT_INDEX = 0x80000000;
const LEDGER_SUCCESS_CODE = 0x9000;
// EXTERNAL MODULE: ../../node_modules/@zondax/ledger-polkadot/dist/index.js
var ledger_polkadot_dist = __webpack_require__(3256);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/hw-ledger/defaults.js
// Copyright 2017-2021 @polkadot/hw-ledger authors & contributors
// SPDX-License-Identifier: Apache-2.0
 // These match up with the network keys in the @polkadot/networks package
// (which is turn aligns with the substrate/ss58-registry.json as the single
// source of truth)

const ledgerApps = {
  'dock-mainnet': ledger_polkadot_dist.newDockApp,
  equilibrium: ledger_polkadot_dist.newEquilibriumApp,
  kusama: ledger_polkadot_dist.newKusamaApp,
  polkadot: ledger_polkadot_dist.newPolkadotApp,
  polymesh: ledger_polkadot_dist.newPolymeshApp
};
;// CONCATENATED MODULE: ../../node_modules/@polkadot/hw-ledger/index.js


// Copyright 2017-2021 @polkadot/hw-ledger authors & contributors
// SPDX-License-Identifier: Apache-2.0







var _app = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("app");

var _chain = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("chain");

var _transport = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("transport");

var _getApp = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("getApp");

var _withApp = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("withApp");

var _wrapError = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("wrapError");

// A very basic wrapper for a ledger app -
//  - it connects automatically, creating an app as required
//  - Promises return errors (instead of wrapper errors)
class Ledger {
  constructor(_transport2, chain) {
    Object.defineProperty(this, _app, {
      writable: true,
      value: null
    });
    Object.defineProperty(this, _chain, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _transport, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _getApp, {
      writable: true,
      value: async () => {
        if (!(0,classPrivateFieldLooseBase/* default */.Z)(this, _app)[_app]) {
          const def = transports.find(({
            type
          }) => type === (0,classPrivateFieldLooseBase/* default */.Z)(this, _transport)[_transport]);
          (0,index_js_.assert)(def, () => `Unable to find a transport for ${(0,classPrivateFieldLooseBase/* default */.Z)(this, _transport)[_transport]}`);
          const transport = await def.create();
          (0,classPrivateFieldLooseBase/* default */.Z)(this, _app)[_app] = ledgerApps[(0,classPrivateFieldLooseBase/* default */.Z)(this, _chain)[_chain]](transport);
        }

        return (0,classPrivateFieldLooseBase/* default */.Z)(this, _app)[_app];
      }
    });
    Object.defineProperty(this, _withApp, {
      writable: true,
      value: async fn => {
        try {
          const app = await (0,classPrivateFieldLooseBase/* default */.Z)(this, _getApp)[_getApp]();
          return await fn(app);
        } catch (error) {
          (0,classPrivateFieldLooseBase/* default */.Z)(this, _app)[_app] = null;
          throw error;
        }
      }
    });
    Object.defineProperty(this, _wrapError, {
      writable: true,
      value: async promise => {
        const result = await promise;
        (0,index_js_.assert)(result.return_code === LEDGER_SUCCESS_CODE, () => result.error_message);
        return result;
      }
    });
    // u2f is deprecated
    (0,index_js_.assert)(['hid', 'webusb'].includes(_transport2), () => `Unsupported transport ${_transport2}`);
    (0,index_js_.assert)(Object.keys(ledgerApps).includes(chain), () => `Unsupported chain ${chain}`);
    (0,classPrivateFieldLooseBase/* default */.Z)(this, _chain)[_chain] = chain;
    (0,classPrivateFieldLooseBase/* default */.Z)(this, _transport)[_transport] = _transport2;
  }

  async getAddress(confirm = false, accountOffset = 0, addressOffset = 0, {
    account = LEDGER_DEFAULT_ACCOUNT,
    addressIndex = LEDGER_DEFAULT_INDEX,
    change = LEDGER_DEFAULT_CHANGE
  } = {}) {
    return (0,classPrivateFieldLooseBase/* default */.Z)(this, _withApp)[_withApp](async app => {
      const {
        address,
        pubKey
      } = await (0,classPrivateFieldLooseBase/* default */.Z)(this, _wrapError)[_wrapError](app.getAddress(account + accountOffset, change, addressIndex + addressOffset, confirm));
      return {
        address,
        publicKey: `0x${pubKey}`
      };
    });
  }

  async getVersion() {
    return (0,classPrivateFieldLooseBase/* default */.Z)(this, _withApp)[_withApp](async app => {
      const {
        device_locked: isLocked,
        major,
        minor,
        patch,
        test_mode: isTestMode
      } = await (0,classPrivateFieldLooseBase/* default */.Z)(this, _wrapError)[_wrapError](app.getVersion());
      return {
        isLocked,
        isTestMode,
        version: [major, minor, patch]
      };
    });
  }

  async sign(message, accountOffset = 0, addressOffset = 0, {
    account = LEDGER_DEFAULT_ACCOUNT,
    addressIndex = LEDGER_DEFAULT_INDEX,
    change = LEDGER_DEFAULT_CHANGE
  } = {}) {
    return (0,classPrivateFieldLooseBase/* default */.Z)(this, _withApp)[_withApp](async app => {
      const buffer = (0,index_js_.u8aToBuffer)(message);
      const {
        signature
      } = await (0,classPrivateFieldLooseBase/* default */.Z)(this, _wrapError)[_wrapError](app.sign(account + accountOffset, change, addressIndex + addressOffset, buffer));
      return {
        signature: `0x${signature.toString('hex')}`
      };
    });
  }

}

/***/ }),

/***/ 88868:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(14859);

var _regenerator = _interopRequireDefault(__webpack_require__(77162));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(52954));

var _typeof2 = _interopRequireDefault(__webpack_require__(58921));

var INS = {
  GET_VERSION: 0x00
};
var CHUNK_SIZE = 250;
var PAYLOAD_TYPE = {
  INIT: 0x00,
  ADD: 0x01,
  LAST: 0x02
};
var P1_VALUES = {
  ONLY_RETRIEVE: 0x00,
  SHOW_ADDRESS_IN_DEVICE: 0x01
};
var SCHEME = {
  ED25519: 0x00,
  SR25519: 0x01
};
var ERROR_CODE = {
  NoError: 0x9000
};
var ERROR_DESCRIPTION = {
  1: 'U2F: Unknown',
  2: 'U2F: Bad request',
  3: 'U2F: Configuration unsupported',
  4: 'U2F: Device Ineligible',
  5: 'U2F: Timeout',
  14: 'Timeout',
  0x9000: 'No errors',
  0x9001: 'Device is busy',
  0x6802: 'Error deriving keys',
  0x6400: 'Execution Error',
  0x6700: 'Wrong Length',
  0x6982: 'Empty Buffer',
  0x6983: 'Output buffer too small',
  0x6984: 'Data is invalid',
  0x6985: 'Conditions not satisfied',
  0x6986: 'Transaction rejected',
  0x6a80: 'Bad key handle',
  0x6b00: 'Invalid P1/P2',
  0x6d00: 'Instruction not supported',
  0x6e00: 'App does not seem to be open',
  0x6f00: 'Unknown error',
  0x6f01: 'Sign/verify error'
};

function errorCodeToString(statusCode) {
  if (statusCode in ERROR_DESCRIPTION) return ERROR_DESCRIPTION[statusCode];
  return "Unknown Status Code: ".concat(statusCode);
}

function isDict(v) {
  return (0, _typeof2.default)(v) === 'object' && v !== null && !(v instanceof Array) && !(v instanceof Date);
}

function processErrorResponse(response) {
  if (response) {
    if (isDict(response)) {
      if (Object.prototype.hasOwnProperty.call(response, 'statusCode')) {
        return {
          return_code: response.statusCode,
          error_message: errorCodeToString(response.statusCode)
        };
      }

      if (Object.prototype.hasOwnProperty.call(response, 'return_code') && Object.prototype.hasOwnProperty.call(response, 'error_message')) {
        return response;
      }
    }

    return {
      return_code: 0xffff,
      error_message: response.toString()
    };
  }

  return {
    return_code: 0xffff,
    error_message: response.toString()
  };
}

function getVersion(_x, _x2) {
  return _getVersion.apply(this, arguments);
}

function _getVersion() {
  _getVersion = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(transport, cla) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", transport.send(cla, INS.GET_VERSION, 0, 0).then(function (response) {
              var errorCodeData = response.slice(-2);
              var returnCode = errorCodeData[0] * 256 + errorCodeData[1]; // 12 bytes + 2 error code

              if (response.length !== 14) {
                return {
                  return_code: 0x6984,
                  error_message: errorCodeToString(0x6984)
                };
              }

              var major = response[1] * 256 + response[2];
              var minor = response[3] * 256 + response[4];
              var patch = response[5] * 256 + response[6];
              var deviceLocked = response[7] === 1; // eslint-disable-next-line no-bitwise

              var targetId = (response[8] << 24) + (response[9] << 16) + (response[10] << 8) + (response[11] << 0);
              return {
                return_code: returnCode,
                error_message: errorCodeToString(returnCode),
                // ///
                test_mode: response[0] !== 0,
                major: major,
                minor: minor,
                patch: patch,
                deviceLocked: deviceLocked,
                target_id: targetId.toString(16)
              };
            }, processErrorResponse));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getVersion.apply(this, arguments);
}

module.exports = {
  CHUNK_SIZE: CHUNK_SIZE,
  INS: INS,
  PAYLOAD_TYPE: PAYLOAD_TYPE,
  P1_VALUES: P1_VALUES,
  SCHEME: SCHEME,
  ERROR_CODE: ERROR_CODE,
  getVersion: getVersion,
  processErrorResponse: processErrorResponse,
  errorCodeToString: errorCodeToString
};

/***/ }),

/***/ 98453:
/***/ ((module) => {

"use strict";


var CLA = {
  POLKADOT: 0x90,
  POLYMESH: 0x91,
  DOCK: 0x92,
  CENTRIFUGE: 0x93,
  EDGEWARE: 0x94,
  EQUILIBRIUM: 0x95,
  STATEMINT: 0x96,
  STATEMINE: 0x97,
  RESERVED: 0x98,
  KUSAMA: 0x99
}; // https://github.com/satoshilabs/slips/blob/master/slip-0044.md

var SLIP0044 = {
  POLKADOT: 0x80000162,
  POLYMESH: 0x80000253,
  DOCK: 0x80000252,
  CENTRIFUGE: 0x800002eb,
  EDGEWARE: 0x8000020b,
  EQUILIBRIUM: 0x85f5e0fd,
  STATEMINT: 0x80000162,
  STATEMINE: 0x800001b2,
  RESERVED: 0x0,
  KUSAMA: 0x800001b2
};
var SS58_ADDR_TYPE = {
  POLKADOT: 0,
  KUSAMA: 2,
  EDGEWARE: 7,
  POLYMESH: 12,
  DOCK: 22,
  //mainnet
  CENTRIFUGE: 36,
  EQUILIBRIUM: 67,
  STATEMINT: 0,
  STATEMINE: 2,
  RESERVED: 42
};
module.exports = {
  CLA: CLA,
  SLIP0044: SLIP0044,
  SS58_ADDR_TYPE: SS58_ADDR_TYPE
};

/***/ }),

/***/ 3256:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48834)["Buffer"];


var _interopRequireDefault = __webpack_require__(14859);

var _regenerator = _interopRequireDefault(__webpack_require__(77162));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(75182));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(52954));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(50085));

var _createClass2 = _interopRequireDefault(__webpack_require__(15198));

var _common = __webpack_require__(88868);

var _config = __webpack_require__(98453);

/** ******************************************************************************
 *  (c) 2019 ZondaX GmbH
 *  (c) 2016-2017 Ledger
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 ******************************************************************************* */
var bip39 = __webpack_require__(36832);

var hash = __webpack_require__(34485);

var bip32ed25519 = __webpack_require__(55889);

var bs58 = __webpack_require__(17022);

var blake = __webpack_require__(81395);

var HDPATH_0_DEFAULT = 0x8000002c;
var INS = {
  GET_VERSION: 0x00,
  GET_ADDR: 0x01,
  SIGN: 0x02,
  // Allow list related commands
  ALLOWLIST_GET_PUBKEY: 0x90,
  ALLOWLIST_SET_PUBKEY: 0x91,
  ALLOWLIST_GET_HASH: 0x92,
  ALLOWLIST_UPLOAD: 0x93
};

var SubstrateApp = /*#__PURE__*/function () {
  function SubstrateApp(transport, cla, slip0044) {
    (0, _classCallCheck2.default)(this, SubstrateApp);

    if (!transport) {
      throw new Error('Transport has not been defined');
    }

    this.transport = transport;
    this.cla = cla;
    this.slip0044 = slip0044;
  }

  (0, _createClass2.default)(SubstrateApp, [{
    key: "getVersion",
    value: function () {
      var _getVersion2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _common.getVersion)(this.transport, this.cla);

              case 3:
                return _context.abrupt("return", _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", (0, _common.processErrorResponse)(_context.t0));

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 6]]);
      }));

      function getVersion() {
        return _getVersion2.apply(this, arguments);
      }

      return getVersion;
    }()
  }, {
    key: "appInfo",
    value: function () {
      var _appInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.transport.send(0xb0, 0x01, 0, 0).then(function (response) {
                  var errorCodeData = response.slice(-2);
                  var returnCode = errorCodeData[0] * 256 + errorCodeData[1];
                  var result = {};
                  var appName = 'err';
                  var appVersion = 'err';
                  var flagLen = 0;
                  var flagsValue = 0;

                  if (response[0] !== 1) {
                    // Ledger responds with format ID 1. There is no spec for any format != 1
                    result.error_message = 'response format ID not recognized';
                    result.return_code = 0x9001;
                  } else {
                    var appNameLen = response[1];
                    appName = response.slice(2, 2 + appNameLen).toString('ascii');
                    var idx = 2 + appNameLen;
                    var appVersionLen = response[idx];
                    idx += 1;
                    appVersion = response.slice(idx, idx + appVersionLen).toString('ascii');
                    idx += appVersionLen;
                    var appFlagsLen = response[idx];
                    idx += 1;
                    flagLen = appFlagsLen;
                    flagsValue = response[idx];
                  }

                  return {
                    return_code: returnCode,
                    error_message: (0, _common.errorCodeToString)(returnCode),
                    // //
                    appName: appName,
                    appVersion: appVersion,
                    flagLen: flagLen,
                    flagsValue: flagsValue,
                    // eslint-disable-next-line no-bitwise
                    flag_recovery: (flagsValue & 1) !== 0,
                    // eslint-disable-next-line no-bitwise
                    flag_signed_mcu_code: (flagsValue & 2) !== 0,
                    // eslint-disable-next-line no-bitwise
                    flag_onboarded: (flagsValue & 4) !== 0,
                    // eslint-disable-next-line no-bitwise
                    flag_pin_validated: (flagsValue & 128) !== 0
                  };
                }, _common.processErrorResponse));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function appInfo() {
        return _appInfo.apply(this, arguments);
      }

      return appInfo;
    }()
  }, {
    key: "getAddress",
    value: function () {
      var _getAddress = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(account, change, addressIndex) {
        var requireConfirmation,
            scheme,
            bip44Path,
            p1,
            p2,
            _args3 = arguments;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                requireConfirmation = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : false;
                scheme = _args3.length > 4 && _args3[4] !== undefined ? _args3[4] : _common.SCHEME.ED25519;
                bip44Path = SubstrateApp.serializePath(this.slip0044, account, change, addressIndex);
                p1 = 0;
                if (requireConfirmation) p1 = 1;
                p2 = 0;
                if (!isNaN(scheme)) p2 = scheme;
                return _context3.abrupt("return", this.transport.send(this.cla, INS.GET_ADDR, p1, p2, bip44Path).then(function (response) {
                  var errorCodeData = response.slice(-2);
                  var errorCode = errorCodeData[0] * 256 + errorCodeData[1];
                  return {
                    pubKey: response.slice(0, 32).toString('hex'),
                    address: response.slice(32, response.length - 2).toString('ascii'),
                    return_code: errorCode,
                    error_message: (0, _common.errorCodeToString)(errorCode)
                  };
                }, _common.processErrorResponse));

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getAddress(_x, _x2, _x3) {
        return _getAddress.apply(this, arguments);
      }

      return getAddress;
    }()
  }, {
    key: "signSendChunk",
    value: function () {
      var _signSendChunk = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(chunkIdx, chunkNum, chunk) {
        var scheme,
            payloadType,
            p2,
            _args4 = arguments;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                scheme = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : _common.SCHEME.ED25519;
                payloadType = _common.PAYLOAD_TYPE.ADD;

                if (chunkIdx === 1) {
                  payloadType = _common.PAYLOAD_TYPE.INIT;
                }

                if (chunkIdx === chunkNum) {
                  payloadType = _common.PAYLOAD_TYPE.LAST;
                }

                p2 = 0;
                if (!isNaN(scheme)) p2 = scheme;
                return _context4.abrupt("return", this.transport.send(this.cla, INS.SIGN, payloadType, p2, chunk, [_common.ERROR_CODE.NoError, 0x6984, 0x6a80]).then(function (response) {
                  var errorCodeData = response.slice(-2);
                  var returnCode = errorCodeData[0] * 256 + errorCodeData[1];
                  var errorMessage = (0, _common.errorCodeToString)(returnCode);
                  var signature = null;

                  if (returnCode === 0x6a80 || returnCode === 0x6984) {
                    errorMessage = response.slice(0, response.length - 2).toString('ascii');
                  } else if (response.length > 2) {
                    signature = response.slice(0, response.length - 2);
                  }

                  return {
                    signature: signature,
                    return_code: returnCode,
                    error_message: errorMessage
                  };
                }, _common.processErrorResponse));

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function signSendChunk(_x4, _x5, _x6) {
        return _signSendChunk.apply(this, arguments);
      }

      return signSendChunk;
    }()
  }, {
    key: "sign",
    value: function () {
      var _sign = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(account, change, addressIndex, message) {
        var _this = this;

        var scheme,
            chunks,
            _args6 = arguments;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                scheme = _args6.length > 4 && _args6[4] !== undefined ? _args6[4] : _common.SCHEME.ED25519;
                chunks = SubstrateApp.signGetChunks(this.slip0044, account, change, addressIndex, message);
                return _context6.abrupt("return", this.signSendChunk(1, chunks.length, chunks[0], scheme).then( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(result) {
                    var i;
                    return _regenerator.default.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            i = 1;

                          case 1:
                            if (!(i < chunks.length)) {
                              _context5.next = 10;
                              break;
                            }

                            _context5.next = 4;
                            return _this.signSendChunk(1 + i, chunks.length, chunks[i], scheme);

                          case 4:
                            result = _context5.sent;

                            if (!(result.return_code !== _common.ERROR_CODE.NoError)) {
                              _context5.next = 7;
                              break;
                            }

                            return _context5.abrupt("break", 10);

                          case 7:
                            i += 1;
                            _context5.next = 1;
                            break;

                          case 10:
                            return _context5.abrupt("return", {
                              return_code: result.return_code,
                              error_message: result.error_message,
                              signature: result.signature
                            });

                          case 11:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x11) {
                    return _ref.apply(this, arguments);
                  };
                }(), _common.processErrorResponse));

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function sign(_x7, _x8, _x9, _x10) {
        return _sign.apply(this, arguments);
      }

      return sign;
    }() /// Allow list related commands. They are NOT available on all apps

  }, {
    key: "getAllowlistPubKey",
    value: function () {
      var _getAllowlistPubKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this.transport.send(this.cla, INS.ALLOWLIST_GET_PUBKEY, 0, 0).then(function (response) {
                  var errorCodeData = response.slice(-2);
                  var returnCode = errorCodeData[0] * 256 + errorCodeData[1];
                  console.log(response);
                  var pubkey = response.slice(0, 32); // 32 bytes + 2 error code

                  if (response.length !== 34) {
                    return {
                      return_code: 0x6984,
                      error_message: (0, _common.errorCodeToString)(0x6984)
                    };
                  }

                  return {
                    return_code: returnCode,
                    error_message: (0, _common.errorCodeToString)(returnCode),
                    pubkey: pubkey
                  };
                }, _common.processErrorResponse));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getAllowlistPubKey() {
        return _getAllowlistPubKey.apply(this, arguments);
      }

      return getAllowlistPubKey;
    }()
  }, {
    key: "setAllowlistPubKey",
    value: function () {
      var _setAllowlistPubKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(pk) {
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", this.transport.send(this.cla, INS.ALLOWLIST_SET_PUBKEY, 0, 0, pk).then(function (response) {
                  var errorCodeData = response.slice(-2);
                  var returnCode = errorCodeData[0] * 256 + errorCodeData[1];
                  return {
                    return_code: returnCode,
                    error_message: (0, _common.errorCodeToString)(returnCode)
                  };
                }, _common.processErrorResponse));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function setAllowlistPubKey(_x12) {
        return _setAllowlistPubKey.apply(this, arguments);
      }

      return setAllowlistPubKey;
    }()
  }, {
    key: "getAllowlistHash",
    value: function () {
      var _getAllowlistHash = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", this.transport.send(this.cla, INS.ALLOWLIST_GET_HASH, 0, 0).then(function (response) {
                  var errorCodeData = response.slice(-2);
                  var returnCode = errorCodeData[0] * 256 + errorCodeData[1];
                  console.log(response);
                  var hash = response.slice(0, 32); // 32 bytes + 2 error code

                  if (response.length !== 34) {
                    return {
                      return_code: 0x6984,
                      error_message: (0, _common.errorCodeToString)(0x6984)
                    };
                  }

                  return {
                    return_code: returnCode,
                    error_message: (0, _common.errorCodeToString)(returnCode),
                    hash: hash
                  };
                }, _common.processErrorResponse));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getAllowlistHash() {
        return _getAllowlistHash.apply(this, arguments);
      }

      return getAllowlistHash;
    }()
  }, {
    key: "uploadSendChunk",
    value: function () {
      var _uploadSendChunk = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(chunkIdx, chunkNum, chunk) {
        var payloadType;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                payloadType = _common.PAYLOAD_TYPE.ADD;

                if (chunkIdx === 1) {
                  payloadType = _common.PAYLOAD_TYPE.INIT;
                }

                if (chunkIdx === chunkNum) {
                  payloadType = _common.PAYLOAD_TYPE.LAST;
                }

                return _context10.abrupt("return", this.transport.send(this.cla, INS.ALLOWLIST_UPLOAD, payloadType, 0, chunk, [_common.ERROR_CODE.NoError]).then(function (response) {
                  var errorCodeData = response.slice(-2);
                  var returnCode = errorCodeData[0] * 256 + errorCodeData[1];
                  var errorMessage = (0, _common.errorCodeToString)(returnCode);
                  return {
                    return_code: returnCode,
                    error_message: errorMessage
                  };
                }, _common.processErrorResponse));

              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function uploadSendChunk(_x13, _x14, _x15) {
        return _uploadSendChunk.apply(this, arguments);
      }

      return uploadSendChunk;
    }()
  }, {
    key: "uploadAllowlist",
    value: function () {
      var _uploadAllowlist = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12(message) {
        var _this2 = this;

        var chunks;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                chunks = [];
                chunks.push(Buffer.from([0]));
                chunks.push.apply(chunks, (0, _toConsumableArray2.default)(SubstrateApp.GetChunks(message)));
                return _context12.abrupt("return", this.uploadSendChunk(1, chunks.length, chunks[0]).then( /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11(result) {
                    var i;
                    return _regenerator.default.wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            if (!(result.return_code !== _common.ERROR_CODE.NoError)) {
                              _context11.next = 2;
                              break;
                            }

                            return _context11.abrupt("return", {
                              return_code: result.return_code,
                              error_message: result.error_message
                            });

                          case 2:
                            i = 1;

                          case 3:
                            if (!(i < chunks.length)) {
                              _context11.next = 12;
                              break;
                            }

                            _context11.next = 6;
                            return _this2.uploadSendChunk(1 + i, chunks.length, chunks[i]);

                          case 6:
                            result = _context11.sent;

                            if (!(result.return_code !== _common.ERROR_CODE.NoError)) {
                              _context11.next = 9;
                              break;
                            }

                            return _context11.abrupt("break", 12);

                          case 9:
                            i += 1;
                            _context11.next = 3;
                            break;

                          case 12:
                            return _context11.abrupt("return", {
                              return_code: result.return_code,
                              error_message: result.error_message
                            });

                          case 13:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11);
                  }));

                  return function (_x17) {
                    return _ref2.apply(this, arguments);
                  };
                }(), _common.processErrorResponse));

              case 4:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function uploadAllowlist(_x16) {
        return _uploadAllowlist.apply(this, arguments);
      }

      return uploadAllowlist;
    }()
  }], [{
    key: "serializePath",
    value: function serializePath(slip0044, account, change, addressIndex) {
      if (!Number.isInteger(account)) throw new Error('Input must be an integer');
      if (!Number.isInteger(change)) throw new Error('Input must be an integer');
      if (!Number.isInteger(addressIndex)) throw new Error('Input must be an integer');
      var buf = Buffer.alloc(20);
      buf.writeUInt32LE(0x8000002c, 0);
      buf.writeUInt32LE(slip0044, 4);
      buf.writeUInt32LE(account, 8);
      buf.writeUInt32LE(change, 12);
      buf.writeUInt32LE(addressIndex, 16);
      return buf;
    }
  }, {
    key: "GetChunks",
    value: function GetChunks(message) {
      var chunks = [];
      var buffer = Buffer.from(message);

      for (var i = 0; i < buffer.length; i += _common.CHUNK_SIZE) {
        var end = i + _common.CHUNK_SIZE;

        if (i > buffer.length) {
          end = buffer.length;
        }

        chunks.push(buffer.slice(i, end));
      }

      return chunks;
    }
  }, {
    key: "signGetChunks",
    value: function signGetChunks(slip0044, account, change, addressIndex, message) {
      var chunks = [];
      var bip44Path = SubstrateApp.serializePath(slip0044, account, change, addressIndex);
      chunks.push(bip44Path);
      chunks.push.apply(chunks, (0, _toConsumableArray2.default)(SubstrateApp.GetChunks(message)));
      return chunks;
    }
  }]);
  return SubstrateApp;
}();

function newKusamaApp(transport) {
  return new SubstrateApp(transport, _config.CLA.KUSAMA, _config.SLIP0044.KUSAMA);
}

function newPolkadotApp(transport) {
  return new SubstrateApp(transport, _config.CLA.POLKADOT, _config.SLIP0044.POLKADOT);
}

function newPolymeshApp(transport) {
  return new SubstrateApp(transport, _config.CLA.POLYMESH, _config.SLIP0044.POLYMESH);
}

function newDockApp(transport) {
  return new SubstrateApp(transport, _config.CLA.DOCK, _config.SLIP0044.DOCK);
}

function newCentrifugeApp(transport) {
  return new SubstrateApp(transport, _config.CLA.CENTRIFUGE, _config.SLIP0044.CENTRIFUGE);
}

function newEdgewareApp(transport) {
  return new SubstrateApp(transport, _config.CLA.EDGEWARE, _config.SLIP0044.EDGEWARE);
}

function newEquilibriumApp(transport) {
  return new SubstrateApp(transport, _config.CLA.EQUILIBRIUM, _config.SLIP0044.EQUILIBRIUM);
}

function newStateMintApp(transport) {
  return new SubstrateApp(transport, _config.CLA.STATEMINT, _config.SLIP0044.EQUILIBRIUM);
}

function newStateMineApp(transport) {
  return new SubstrateApp(transport, _config.CLA.STATEMINE, _config.SLIP0044.EQUILIBRIUM);
}

function sha512(data) {
  var digest = hash.sha512().update(data).digest();
  return Buffer.from(digest);
}

function hmac256(key, data) {
  var digest = hash.hmac(hash.sha256, key).update(data).digest();
  return Buffer.from(digest);
}

function hmac512(key, data) {
  var digest = hash.hmac(hash.sha512, key).update(data).digest();
  return Buffer.from(digest);
}

function ss58hash(data) {
  var hash = blake.blake2bInit(64, null);
  blake.blake2bUpdate(hash, Buffer.from('SS58PRE'));
  blake.blake2bUpdate(hash, data);
  return blake.blake2bFinal(hash);
}

function ss58_encode(prefix, pubkey) {
  if (pubkey.byteLength !== 32) {
    return null;
  }

  var data = Buffer.alloc(35);
  data[0] = prefix;
  pubkey.copy(data, 1);
  var hash = ss58hash(data.slice(0, 33));
  data[33] = hash[0];
  data[34] = hash[1];
  return bs58.encode(data);
}

function root_node_slip10(master_seed) {
  var data = Buffer.alloc(1 + 64);
  data[0] = 0x01;
  master_seed.copy(data, 1);
  var c = hmac256('ed25519 seed', data);
  var I = hmac512('ed25519 seed', data.slice(1));
  var kL = I.slice(0, 32);
  var kR = I.slice(32);

  while ((kL[31] & 32) !== 0) {
    I.copy(data, 1);
    I = hmac512('ed25519 seed', data.slice(1));
    kL = I.slice(0, 32);
    kR = I.slice(32);
  }

  kL[0] &= 248;
  kL[31] &= 127;
  kL[31] |= 64;
  return Buffer.concat([kL, kR, c]);
}

function hdKeyDerivation(mnemonic, password, slip0044, accountIndex, changeIndex, addressIndex, ss58prefix) {
  if (!bip39.validateMnemonic(mnemonic)) {
    console.log('Invalid mnemonic');
    return null;
  }

  var seed = bip39.mnemonicToSeedSync(mnemonic, password);
  var node = root_node_slip10(seed);
  node = bip32ed25519.derivePrivate(node, HDPATH_0_DEFAULT);
  node = bip32ed25519.derivePrivate(node, slip0044);
  node = bip32ed25519.derivePrivate(node, accountIndex);
  node = bip32ed25519.derivePrivate(node, changeIndex);
  node = bip32ed25519.derivePrivate(node, addressIndex);
  var kL = node.slice(0, 32);
  var sk = sha512(kL).slice(0, 32);
  sk[0] &= 248;
  sk[31] &= 127;
  sk[31] |= 64;
  var pk = bip32ed25519.toPublic(sk);
  var address = ss58_encode(ss58prefix, pk);
  return {
    sk: kL,
    pk: pk,
    address: address
  };
}

module.exports = {
  hdKeyDerivation: hdKeyDerivation,
  newKusamaApp: newKusamaApp,
  newPolkadotApp: newPolkadotApp,
  newPolymeshApp: newPolymeshApp,
  newDockApp: newDockApp,
  newCentrifugeApp: newCentrifugeApp,
  newEdgewareApp: newEdgewareApp,
  newEquilibriumApp: newEquilibriumApp,
  newStateMintApp: newStateMintApp,
  newStateMineApp: newStateMineApp
};

/***/ }),

/***/ 7261:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var hash = __webpack_require__(34485);
var elliptic = __webpack_require__(87554);
var utils = elliptic.utils;
var assert = utils.assert;
var parseBytes = utils.parseBytes;
var KeyPair = __webpack_require__(13797);
var Signature = __webpack_require__(6117);

function EDDSA(curve) {
    assert(curve === 'ed25519', 'only tested with ed25519 so far');

    if (!(this instanceof EDDSA))
        return new EDDSA(curve);

    var curve = elliptic.curves[curve].curve;
    this.curve = curve;
    this.g = curve.g;
    this.g.precompute(curve.n.bitLength() + 1);

    this.pointClass = curve.point().constructor;
    this.encodingLength = Math.ceil(curve.n.bitLength() / 8);
    this.hash = hash.sha512;
}

module.exports = EDDSA;

/**
 * @param {Array|String} message - message bytes
 * @param {Array|String|KeyPair} secret - secret bytes or a keypair
 * @returns {Signature} - signature
 */
EDDSA.prototype.sign = function sign(message, secret) {
    message = parseBytes(message);
    var key = this.keyFromSecret(secret);
    var r = this.hashInt(key.messagePrefix(), message);
    var R = this.g.mul(r);
    var Rencoded = this.encodePoint(R);
    var s_ = this.hashInt(Rencoded, key.pubBytes(), message)
        .mul(key.priv());
    var S = r.add(s_).umod(this.curve.n);
    return this.makeSignature({ R: R, S: S, Rencoded: Rencoded });
};

/**
 * @param {Array} message - message bytes
 * @param {Array|String|Signature} sig - sig bytes
 * @param {Array|String|Point|KeyPair} pub - public key
 * @returns {Boolean} - true if public key matches sig of message
 */
EDDSA.prototype.verify = function verify(message, sig, pub) {
    message = parseBytes(message);
    sig = this.makeSignature(sig);
    var key = this.keyFromPublic(pub);
    var h = this.hashInt(sig.Rencoded(), key.pubBytes(), message);
    var SG = this.g.mul(sig.S());
    var RplusAh = sig.R().add(key.pub().mul(h));
    return RplusAh.eq(SG);
};

EDDSA.prototype.hashInt = function hashInt() {
    var hash = this.hash();
    for (var i = 0; i < arguments.length; i++)
        hash.update(arguments[i]);
    return utils.intFromLE(hash.digest()).umod(this.curve.n);
};

EDDSA.prototype.keyFromPublic = function keyFromPublic(pub) {
    return KeyPair.fromPublic(this, pub);
};

EDDSA.prototype.keyFromSecret = function keyFromSecret(secret) {
    return KeyPair.fromSecret(this, secret);
};

EDDSA.prototype.makeSignature = function makeSignature(sig) {
    if (sig instanceof Signature)
        return sig;
    return new Signature(this, sig);
};

/**
 * * https://tools.ietf.org/html/draft-josefsson-eddsa-ed25519-03#section-5.2
 *
 * EDDSA defines methods for encoding and decoding points and integers. These are
 * helper convenience methods, that pass along to utility functions implied
 * parameters.
 *
 */
EDDSA.prototype.encodePoint = function encodePoint(point) {
    var enc = point.getY().toArray('le', this.encodingLength);
    enc[this.encodingLength - 1] |= point.getX().isOdd() ? 0x80 : 0;
    return enc;
};

EDDSA.prototype.decodePoint = function decodePoint(bytes) {
    bytes = utils.parseBytes(bytes);

    var lastIx = bytes.length - 1;
    var normed = bytes.slice(0, lastIx).concat(bytes[lastIx] & ~0x80);
    var xIsOdd = (bytes[lastIx] & 0x80) !== 0;

    var y = utils.intFromLE(normed);
    return this.curve.pointFromY(y, xIsOdd);
};

EDDSA.prototype.encodeInt = function encodeInt(num) {
    return num.toArray('le', this.encodingLength);
};

EDDSA.prototype.decodeInt = function decodeInt(bytes) {
    return utils.intFromLE(bytes);
};

EDDSA.prototype.isPoint = function isPoint(val) {
    return val instanceof this.pointClass;
};

/***/ }),

/***/ 13797:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var elliptic = __webpack_require__(87554);
var utils = elliptic.utils;
var assert = utils.assert;
var parseBytes = utils.parseBytes;
var cachedProperty = utils.cachedProperty;

/**
 * @param {EDDSA} eddsa - instance
 * @param {Object} params - public/private key parameters
 *
 * @param {Array<Byte>} [params.secret] - secret seed bytes
 * @param {Point} [params.pub] - public key point (aka `A` in eddsa terms)
 * @param {Array<Byte>} [params.pub] - public key point encoded as bytes
 *
 */
function KeyPair(eddsa, params) {
    this.eddsa = eddsa;
    this._secret = parseBytes(params.secret);
    if (eddsa.isPoint(params.pub))
        this._pub = params.pub;
    else
        this._pubBytes = parseBytes(params.pub);
}

KeyPair.fromPublic = function fromPublic(eddsa, pub) {
    if (pub instanceof KeyPair)
        return pub;
    return new KeyPair(eddsa, { pub: pub });
};

KeyPair.fromSecret = function fromSecret(eddsa, secret) {
    if (secret instanceof KeyPair)
        return secret;
    return new KeyPair(eddsa, { secret: secret });
};

KeyPair.prototype.secret = function secret() {
    return this._secret;
};

cachedProperty(KeyPair, 'pubBytes', function pubBytes() {
    return this.eddsa.encodePoint(this.pub());
});

cachedProperty(KeyPair, 'pub', function pub() {
    if (this._pubBytes)
        return this.eddsa.decodePoint(this._pubBytes);
    return this.eddsa.g.mul(this.priv());
});

cachedProperty(KeyPair, 'privBytes', function privBytes() {
    return this.secret();
});

cachedProperty(KeyPair, 'priv', function priv() {
    return this.eddsa.decodeInt(this.privBytes());
});

cachedProperty(KeyPair, 'hash', function hash() {
    return this.eddsa.hash().update(this.secret()).digest();
});

cachedProperty(KeyPair, 'messagePrefix', function messagePrefix() {
    return this.hash().slice(this.eddsa.encodingLength);
});

KeyPair.prototype.sign = function sign(message) {
    assert(this._secret, 'KeyPair can only verify');
    return this.eddsa.sign(message, this);
};

KeyPair.prototype.verify = function verify(message, sig) {
    return this.eddsa.verify(message, sig, this);
};

KeyPair.prototype.getSecret = function getSecret(enc) {
    assert(this._secret, 'KeyPair is public only');
    return utils.encode(this.secret(), enc);
};

KeyPair.prototype.getPublic = function getPublic(enc) {
    return utils.encode(this.pubBytes(), enc);
};

module.exports = KeyPair;

/***/ }),

/***/ 55889:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(48834)["Buffer"];
var BN = __webpack_require__(40141);
var hash = __webpack_require__(34485);
var elliptic = __webpack_require__(87554);
var utils = elliptic.utils;
var EDDSA = __webpack_require__(7261);
var eddsa = new EDDSA('ed25519');

function sha512(data) {
    var digest = hash.sha512().update(data).digest();
    return Buffer.from(digest);
}

function hmac512(key, data) {
    var digest = hash.hmac(hash.sha512, key).update(data).digest();
    return Buffer.from(digest);
}

function makeEd25519Extended(secret) {
    var extended = sha512(secret);
    extended[0] &= 248;
    extended[31] &= 63;
    extended[31] |= 64;
    return extended;
}

function generateFromSeed(seed) {
    var iter = 1;
    while (true) {
        var s = 'Root Seed Chain ' + iter;
        var block = hmac512(seed, s);
        var extended = makeEd25519Extended(block.slice(0, 32));
        if ((extended[31] & 0x20) === 0) {
            return Buffer.concat([extended, block.slice(32, 64)])
        }
        iter++;
    }
}

function fromSeed2(seed) {
    var s = 'ed25519 cardano seed';
    var block = hmac512(s, seed);

    var extended = sha512(block.slice(0, 32));
    extended[0] &= 248;
    extended[31] &= 0x1f;
    extended[31] |= 64;

    return Buffer.concat([extended, block.slice(32, 64)])
}

function derivePrivate(xprv, index) {
    var kl = xprv.slice(0, 32);
    var kr = xprv.slice(32, 64);
    var cc = xprv.slice(64, 96);

    var data;
    var z, i;
    if (index < 0x80000000) {
        data = Buffer.allocUnsafe(1 + 32 + 4);
        data.writeUInt32LE(index, 1 + 32);

        var pk = toPublic(kl);
        pk.copy(data, 1);

        data[0] = 0x02;
        z = hmac512(cc, data);
        data[0] = 0x03;
        i = hmac512(cc, data);
    }
    else {
        data = Buffer.allocUnsafe(1 + 64 + 4);
        data.writeUInt32LE(index, 1 + 64);
        kl.copy(data, 1);
        kr.copy(data, 1 + 32);

        data[0] = 0x00;
        z = hmac512(cc, data);
        data[0] = 0x01;
        i = hmac512(cc, data);
    }

    var chainCode = i.slice(32, 64);
    var zl = z.slice(0, 32);
    var zr = z.slice(32, 64);

    // left = kl + 8 * trunc28(zl)
    // right = zr + kr
    var left = new BN(kl, 16, 'le').add(new BN(zl.slice(0, 28), 16, 'le').mul(new BN(8))).toArrayLike(Buffer, 'le', 32);
    var right = new BN(kr, 16, 'le').add(new BN(zr, 16, 'le')).toArrayLike(Buffer, 'le').slice(0, 32);

    // just padding
    if (right.length !== 32) {
        right = Buffer.from(right.toString('hex') + '00', 'hex')
    }

    return Buffer.concat([left, right, chainCode]);
}

function derivePublic(xpub, index) {
    var pk = xpub.slice(0, 32);
    var cc = xpub.slice(32, 64);

    var data = Buffer.allocUnsafe(1 + 32 + 4);
    data.writeUInt32LE(index, 1 + 32);

    var z, i;
    if (index < 0x80000000) {
        pk.copy(data, 1);
        data[0] = 0x02;
        z = hmac512(cc, data);
        data[0] = 0x03;
        i = hmac512(cc, data);
    }
    else {
        throw new Error('can not derive public key with harden')
    }

    var chainCode = i.slice(32, 64);
    var zl = z.slice(0, 32);

    // left = 8 * trunc28(zl)
    var left = new BN(zl.slice(0, 28), 16, 'le').mul(new BN(8));

    var p = eddsa.g.mul(left);
    var pp = eddsa.decodePoint(pk.toString('hex'));
    var point = pp.add(p);

    return Buffer.concat([Buffer.from(eddsa.encodePoint(point)), chainCode]);
}

function toPublic(xprv) {
    if (xprv.length !== 32 && xprv.length !== 96) {
        throw new Error('invalid xprv')
    }

    var key = eddsa.keyFromSecret(xprv.slice(0, 32).toString('hex'));
    var pk = Buffer.from(key.pubBytes());
    if (xprv.length > 64) {
        return Buffer.concat([pk, xprv.slice(64, 96)])
    }
    return pk;
}

function sign(message, xprv) {
    if (typeof xprv !== 'string') {
        xprv = xprv.toString('hex')
    }
    var keyPair = eddsa.keyFromSecret(utils.parseBytes(xprv).slice(0, 32));
    var sig = keyPair.sign(message);
    return Buffer.from(sig.toBytes());
}

function verify(message, sig, xpub) {
    if (typeof xpub !== 'string') {
        xpub = xpub.toString('hex')
    }
    return eddsa.verify(message, sig.toString('hex'), utils.parseBytes(xpub).slice(0, 32));
}

module.exports = {
    fromSeed2: fromSeed2,
    fromSeed: generateFromSeed,
    generateFromSeed: generateFromSeed,
    derivePrivate: derivePrivate,
    derivePublic: derivePublic,
    toPublic: toPublic,
    eddsa: eddsa,
    sign: sign,
    verify: verify
};


/***/ }),

/***/ 40141:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
(function (module, exports) {
  'use strict';

  // Utils
  function assert (val, msg) {
    if (!val) throw new Error(msg || 'Assertion failed');
  }

  // Could use `inherits` module, but don't want to move from single file
  // architecture yet.
  function inherits (ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function () {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  }

  // BN

  function BN (number, base, endian) {
    if (BN.isBN(number)) {
      return number;
    }

    this.negative = 0;
    this.words = null;
    this.length = 0;

    // Reduction context
    this.red = null;

    if (number !== null) {
      if (base === 'le' || base === 'be') {
        endian = base;
        base = 10;
      }

      this._init(number || 0, base || 10, endian || 'be');
    }
  }
  if (typeof module === 'object') {
    module.exports = BN;
  } else {
    exports.BN = BN;
  }

  BN.BN = BN;
  BN.wordSize = 26;

  var Buffer;
  try {
    if (typeof window !== 'undefined' && typeof window.Buffer !== 'undefined') {
      Buffer = window.Buffer;
    } else {
      Buffer = __webpack_require__(60865).Buffer;
    }
  } catch (e) {
  }

  BN.isBN = function isBN (num) {
    if (num instanceof BN) {
      return true;
    }

    return num !== null && typeof num === 'object' &&
      num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
  };

  BN.max = function max (left, right) {
    if (left.cmp(right) > 0) return left;
    return right;
  };

  BN.min = function min (left, right) {
    if (left.cmp(right) < 0) return left;
    return right;
  };

  BN.prototype._init = function init (number, base, endian) {
    if (typeof number === 'number') {
      return this._initNumber(number, base, endian);
    }

    if (typeof number === 'object') {
      return this._initArray(number, base, endian);
    }

    if (base === 'hex') {
      base = 16;
    }
    assert(base === (base | 0) && base >= 2 && base <= 36);

    number = number.toString().replace(/\s+/g, '');
    var start = 0;
    if (number[0] === '-') {
      start++;
      this.negative = 1;
    }

    if (start < number.length) {
      if (base === 16) {
        this._parseHex(number, start, endian);
      } else {
        this._parseBase(number, base, start);
        if (endian === 'le') {
          this._initArray(this.toArray(), base, endian);
        }
      }
    }
  };

  BN.prototype._initNumber = function _initNumber (number, base, endian) {
    if (number < 0) {
      this.negative = 1;
      number = -number;
    }
    if (number < 0x4000000) {
      this.words = [number & 0x3ffffff];
      this.length = 1;
    } else if (number < 0x10000000000000) {
      this.words = [
        number & 0x3ffffff,
        (number / 0x4000000) & 0x3ffffff
      ];
      this.length = 2;
    } else {
      assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)
      this.words = [
        number & 0x3ffffff,
        (number / 0x4000000) & 0x3ffffff,
        1
      ];
      this.length = 3;
    }

    if (endian !== 'le') return;

    // Reverse the bytes
    this._initArray(this.toArray(), base, endian);
  };

  BN.prototype._initArray = function _initArray (number, base, endian) {
    // Perhaps a Uint8Array
    assert(typeof number.length === 'number');
    if (number.length <= 0) {
      this.words = [0];
      this.length = 1;
      return this;
    }

    this.length = Math.ceil(number.length / 3);
    this.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    }

    var j, w;
    var off = 0;
    if (endian === 'be') {
      for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
        w = number[i] | (number[i - 1] << 8) | (number[i - 2] << 16);
        this.words[j] |= (w << off) & 0x3ffffff;
        this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
    } else if (endian === 'le') {
      for (i = 0, j = 0; i < number.length; i += 3) {
        w = number[i] | (number[i + 1] << 8) | (number[i + 2] << 16);
        this.words[j] |= (w << off) & 0x3ffffff;
        this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
    }
    return this._strip();
  };

  function parseHex4Bits (string, index) {
    var c = string.charCodeAt(index);
    // '0' - '9'
    if (c >= 48 && c <= 57) {
      return c - 48;
    // 'A' - 'F'
    } else if (c >= 65 && c <= 70) {
      return c - 55;
    // 'a' - 'f'
    } else if (c >= 97 && c <= 102) {
      return c - 87;
    } else {
      assert(false, 'Invalid character in ' + string);
    }
  }

  function parseHexByte (string, lowerBound, index) {
    var r = parseHex4Bits(string, index);
    if (index - 1 >= lowerBound) {
      r |= parseHex4Bits(string, index - 1) << 4;
    }
    return r;
  }

  BN.prototype._parseHex = function _parseHex (number, start, endian) {
    // Create possibly bigger array to ensure that it fits the number
    this.length = Math.ceil((number.length - start) / 6);
    this.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    }

    // 24-bits chunks
    var off = 0;
    var j = 0;

    var w;
    if (endian === 'be') {
      for (i = number.length - 1; i >= start; i -= 2) {
        w = parseHexByte(number, start, i) << off;
        this.words[j] |= w & 0x3ffffff;
        if (off >= 18) {
          off -= 18;
          j += 1;
          this.words[j] |= w >>> 26;
        } else {
          off += 8;
        }
      }
    } else {
      var parseLength = number.length - start;
      for (i = parseLength % 2 === 0 ? start + 1 : start; i < number.length; i += 2) {
        w = parseHexByte(number, start, i) << off;
        this.words[j] |= w & 0x3ffffff;
        if (off >= 18) {
          off -= 18;
          j += 1;
          this.words[j] |= w >>> 26;
        } else {
          off += 8;
        }
      }
    }

    this._strip();
  };

  function parseBase (str, start, end, mul) {
    var r = 0;
    var b = 0;
    var len = Math.min(str.length, end);
    for (var i = start; i < len; i++) {
      var c = str.charCodeAt(i) - 48;

      r *= mul;

      // 'a'
      if (c >= 49) {
        b = c - 49 + 0xa;

      // 'A'
      } else if (c >= 17) {
        b = c - 17 + 0xa;

      // '0' - '9'
      } else {
        b = c;
      }
      assert(c >= 0 && b < mul, 'Invalid character');
      r += b;
    }
    return r;
  }

  BN.prototype._parseBase = function _parseBase (number, base, start) {
    // Initialize as zero
    this.words = [0];
    this.length = 1;

    // Find length of limb in base
    for (var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base) {
      limbLen++;
    }
    limbLen--;
    limbPow = (limbPow / base) | 0;

    var total = number.length - start;
    var mod = total % limbLen;
    var end = Math.min(total, total - mod) + start;

    var word = 0;
    for (var i = start; i < end; i += limbLen) {
      word = parseBase(number, i, i + limbLen, base);

      this.imuln(limbPow);
      if (this.words[0] + word < 0x4000000) {
        this.words[0] += word;
      } else {
        this._iaddn(word);
      }
    }

    if (mod !== 0) {
      var pow = 1;
      word = parseBase(number, i, number.length, base);

      for (i = 0; i < mod; i++) {
        pow *= base;
      }

      this.imuln(pow);
      if (this.words[0] + word < 0x4000000) {
        this.words[0] += word;
      } else {
        this._iaddn(word);
      }
    }

    this._strip();
  };

  BN.prototype.copy = function copy (dest) {
    dest.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      dest.words[i] = this.words[i];
    }
    dest.length = this.length;
    dest.negative = this.negative;
    dest.red = this.red;
  };

  function move (dest, src) {
    dest.words = src.words;
    dest.length = src.length;
    dest.negative = src.negative;
    dest.red = src.red;
  }

  BN.prototype._move = function _move (dest) {
    move(dest, this);
  };

  BN.prototype.clone = function clone () {
    var r = new BN(null);
    this.copy(r);
    return r;
  };

  BN.prototype._expand = function _expand (size) {
    while (this.length < size) {
      this.words[this.length++] = 0;
    }
    return this;
  };

  // Remove leading `0` from `this`
  BN.prototype._strip = function strip () {
    while (this.length > 1 && this.words[this.length - 1] === 0) {
      this.length--;
    }
    return this._normSign();
  };

  BN.prototype._normSign = function _normSign () {
    // -0 = 0
    if (this.length === 1 && this.words[0] === 0) {
      this.negative = 0;
    }
    return this;
  };

  // Check Symbol.for because not everywhere where Symbol defined
  // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#Browser_compatibility
  if (typeof Symbol !== 'undefined' && typeof Symbol.for === 'function') {
    try {
      BN.prototype[Symbol.for('nodejs.util.inspect.custom')] = inspect;
    } catch (e) {
      BN.prototype.inspect = inspect;
    }
  } else {
    BN.prototype.inspect = inspect;
  }

  function inspect () {
    return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
  }

  /*

  var zeros = [];
  var groupSizes = [];
  var groupBases = [];

  var s = '';
  var i = -1;
  while (++i < BN.wordSize) {
    zeros[i] = s;
    s += '0';
  }
  groupSizes[0] = 0;
  groupSizes[1] = 0;
  groupBases[0] = 0;
  groupBases[1] = 0;
  var base = 2 - 1;
  while (++base < 36 + 1) {
    var groupSize = 0;
    var groupBase = 1;
    while (groupBase < (1 << BN.wordSize) / base) {
      groupBase *= base;
      groupSize += 1;
    }
    groupSizes[base] = groupSize;
    groupBases[base] = groupBase;
  }

  */

  var zeros = [
    '',
    '0',
    '00',
    '000',
    '0000',
    '00000',
    '000000',
    '0000000',
    '00000000',
    '000000000',
    '0000000000',
    '00000000000',
    '000000000000',
    '0000000000000',
    '00000000000000',
    '000000000000000',
    '0000000000000000',
    '00000000000000000',
    '000000000000000000',
    '0000000000000000000',
    '00000000000000000000',
    '000000000000000000000',
    '0000000000000000000000',
    '00000000000000000000000',
    '000000000000000000000000',
    '0000000000000000000000000'
  ];

  var groupSizes = [
    0, 0,
    25, 16, 12, 11, 10, 9, 8,
    8, 7, 7, 7, 7, 6, 6,
    6, 6, 6, 6, 6, 5, 5,
    5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5
  ];

  var groupBases = [
    0, 0,
    33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216,
    43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625,
    16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632,
    6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149,
    24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176
  ];

  BN.prototype.toString = function toString (base, padding) {
    base = base || 10;
    padding = padding | 0 || 1;

    var out;
    if (base === 16 || base === 'hex') {
      out = '';
      var off = 0;
      var carry = 0;
      for (var i = 0; i < this.length; i++) {
        var w = this.words[i];
        var word = (((w << off) | carry) & 0xffffff).toString(16);
        carry = (w >>> (24 - off)) & 0xffffff;
        if (carry !== 0 || i !== this.length - 1) {
          out = zeros[6 - word.length] + word + out;
        } else {
          out = word + out;
        }
        off += 2;
        if (off >= 26) {
          off -= 26;
          i--;
        }
      }
      if (carry !== 0) {
        out = carry.toString(16) + out;
      }
      while (out.length % padding !== 0) {
        out = '0' + out;
      }
      if (this.negative !== 0) {
        out = '-' + out;
      }
      return out;
    }

    if (base === (base | 0) && base >= 2 && base <= 36) {
      // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
      var groupSize = groupSizes[base];
      // var groupBase = Math.pow(base, groupSize);
      var groupBase = groupBases[base];
      out = '';
      var c = this.clone();
      c.negative = 0;
      while (!c.isZero()) {
        var r = c.modrn(groupBase).toString(base);
        c = c.idivn(groupBase);

        if (!c.isZero()) {
          out = zeros[groupSize - r.length] + r + out;
        } else {
          out = r + out;
        }
      }
      if (this.isZero()) {
        out = '0' + out;
      }
      while (out.length % padding !== 0) {
        out = '0' + out;
      }
      if (this.negative !== 0) {
        out = '-' + out;
      }
      return out;
    }

    assert(false, 'Base should be between 2 and 36');
  };

  BN.prototype.toNumber = function toNumber () {
    var ret = this.words[0];
    if (this.length === 2) {
      ret += this.words[1] * 0x4000000;
    } else if (this.length === 3 && this.words[2] === 0x01) {
      // NOTE: at this stage it is known that the top bit is set
      ret += 0x10000000000000 + (this.words[1] * 0x4000000);
    } else if (this.length > 2) {
      assert(false, 'Number can only safely store up to 53 bits');
    }
    return (this.negative !== 0) ? -ret : ret;
  };

  BN.prototype.toJSON = function toJSON () {
    return this.toString(16, 2);
  };

  if (Buffer) {
    BN.prototype.toBuffer = function toBuffer (endian, length) {
      return this.toArrayLike(Buffer, endian, length);
    };
  }

  BN.prototype.toArray = function toArray (endian, length) {
    return this.toArrayLike(Array, endian, length);
  };

  var allocate = function allocate (ArrayType, size) {
    if (ArrayType.allocUnsafe) {
      return ArrayType.allocUnsafe(size);
    }
    return new ArrayType(size);
  };

  BN.prototype.toArrayLike = function toArrayLike (ArrayType, endian, length) {
    this._strip();

    var byteLength = this.byteLength();
    var reqLength = length || Math.max(1, byteLength);
    assert(byteLength <= reqLength, 'byte array longer than desired length');
    assert(reqLength > 0, 'Requested array length <= 0');

    var res = allocate(ArrayType, reqLength);
    var postfix = endian === 'le' ? 'LE' : 'BE';
    this['_toArrayLike' + postfix](res, byteLength);
    return res;
  };

  BN.prototype._toArrayLikeLE = function _toArrayLikeLE (res, byteLength) {
    var position = 0;
    var carry = 0;

    for (var i = 0, shift = 0; i < this.length; i++) {
      var word = (this.words[i] << shift) | carry;

      res[position++] = word & 0xff;
      if (position < res.length) {
        res[position++] = (word >> 8) & 0xff;
      }
      if (position < res.length) {
        res[position++] = (word >> 16) & 0xff;
      }

      if (shift === 6) {
        if (position < res.length) {
          res[position++] = (word >> 24) & 0xff;
        }
        carry = 0;
        shift = 0;
      } else {
        carry = word >>> 24;
        shift += 2;
      }
    }

    if (position < res.length) {
      res[position++] = carry;

      while (position < res.length) {
        res[position++] = 0;
      }
    }
  };

  BN.prototype._toArrayLikeBE = function _toArrayLikeBE (res, byteLength) {
    var position = res.length - 1;
    var carry = 0;

    for (var i = 0, shift = 0; i < this.length; i++) {
      var word = (this.words[i] << shift) | carry;

      res[position--] = word & 0xff;
      if (position >= 0) {
        res[position--] = (word >> 8) & 0xff;
      }
      if (position >= 0) {
        res[position--] = (word >> 16) & 0xff;
      }

      if (shift === 6) {
        if (position >= 0) {
          res[position--] = (word >> 24) & 0xff;
        }
        carry = 0;
        shift = 0;
      } else {
        carry = word >>> 24;
        shift += 2;
      }
    }

    if (position >= 0) {
      res[position--] = carry;

      while (position >= 0) {
        res[position--] = 0;
      }
    }
  };

  if (Math.clz32) {
    BN.prototype._countBits = function _countBits (w) {
      return 32 - Math.clz32(w);
    };
  } else {
    BN.prototype._countBits = function _countBits (w) {
      var t = w;
      var r = 0;
      if (t >= 0x1000) {
        r += 13;
        t >>>= 13;
      }
      if (t >= 0x40) {
        r += 7;
        t >>>= 7;
      }
      if (t >= 0x8) {
        r += 4;
        t >>>= 4;
      }
      if (t >= 0x02) {
        r += 2;
        t >>>= 2;
      }
      return r + t;
    };
  }

  BN.prototype._zeroBits = function _zeroBits (w) {
    // Short-cut
    if (w === 0) return 26;

    var t = w;
    var r = 0;
    if ((t & 0x1fff) === 0) {
      r += 13;
      t >>>= 13;
    }
    if ((t & 0x7f) === 0) {
      r += 7;
      t >>>= 7;
    }
    if ((t & 0xf) === 0) {
      r += 4;
      t >>>= 4;
    }
    if ((t & 0x3) === 0) {
      r += 2;
      t >>>= 2;
    }
    if ((t & 0x1) === 0) {
      r++;
    }
    return r;
  };

  // Return number of used bits in a BN
  BN.prototype.bitLength = function bitLength () {
    var w = this.words[this.length - 1];
    var hi = this._countBits(w);
    return (this.length - 1) * 26 + hi;
  };

  function toBitArray (num) {
    var w = new Array(num.bitLength());

    for (var bit = 0; bit < w.length; bit++) {
      var off = (bit / 26) | 0;
      var wbit = bit % 26;

      w[bit] = (num.words[off] >>> wbit) & 0x01;
    }

    return w;
  }

  // Number of trailing zero bits
  BN.prototype.zeroBits = function zeroBits () {
    if (this.isZero()) return 0;

    var r = 0;
    for (var i = 0; i < this.length; i++) {
      var b = this._zeroBits(this.words[i]);
      r += b;
      if (b !== 26) break;
    }
    return r;
  };

  BN.prototype.byteLength = function byteLength () {
    return Math.ceil(this.bitLength() / 8);
  };

  BN.prototype.toTwos = function toTwos (width) {
    if (this.negative !== 0) {
      return this.abs().inotn(width).iaddn(1);
    }
    return this.clone();
  };

  BN.prototype.fromTwos = function fromTwos (width) {
    if (this.testn(width - 1)) {
      return this.notn(width).iaddn(1).ineg();
    }
    return this.clone();
  };

  BN.prototype.isNeg = function isNeg () {
    return this.negative !== 0;
  };

  // Return negative clone of `this`
  BN.prototype.neg = function neg () {
    return this.clone().ineg();
  };

  BN.prototype.ineg = function ineg () {
    if (!this.isZero()) {
      this.negative ^= 1;
    }

    return this;
  };

  // Or `num` with `this` in-place
  BN.prototype.iuor = function iuor (num) {
    while (this.length < num.length) {
      this.words[this.length++] = 0;
    }

    for (var i = 0; i < num.length; i++) {
      this.words[i] = this.words[i] | num.words[i];
    }

    return this._strip();
  };

  BN.prototype.ior = function ior (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuor(num);
  };

  // Or `num` with `this`
  BN.prototype.or = function or (num) {
    if (this.length > num.length) return this.clone().ior(num);
    return num.clone().ior(this);
  };

  BN.prototype.uor = function uor (num) {
    if (this.length > num.length) return this.clone().iuor(num);
    return num.clone().iuor(this);
  };

  // And `num` with `this` in-place
  BN.prototype.iuand = function iuand (num) {
    // b = min-length(num, this)
    var b;
    if (this.length > num.length) {
      b = num;
    } else {
      b = this;
    }

    for (var i = 0; i < b.length; i++) {
      this.words[i] = this.words[i] & num.words[i];
    }

    this.length = b.length;

    return this._strip();
  };

  BN.prototype.iand = function iand (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuand(num);
  };

  // And `num` with `this`
  BN.prototype.and = function and (num) {
    if (this.length > num.length) return this.clone().iand(num);
    return num.clone().iand(this);
  };

  BN.prototype.uand = function uand (num) {
    if (this.length > num.length) return this.clone().iuand(num);
    return num.clone().iuand(this);
  };

  // Xor `num` with `this` in-place
  BN.prototype.iuxor = function iuxor (num) {
    // a.length > b.length
    var a;
    var b;
    if (this.length > num.length) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    for (var i = 0; i < b.length; i++) {
      this.words[i] = a.words[i] ^ b.words[i];
    }

    if (this !== a) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    this.length = a.length;

    return this._strip();
  };

  BN.prototype.ixor = function ixor (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuxor(num);
  };

  // Xor `num` with `this`
  BN.prototype.xor = function xor (num) {
    if (this.length > num.length) return this.clone().ixor(num);
    return num.clone().ixor(this);
  };

  BN.prototype.uxor = function uxor (num) {
    if (this.length > num.length) return this.clone().iuxor(num);
    return num.clone().iuxor(this);
  };

  // Not ``this`` with ``width`` bitwidth
  BN.prototype.inotn = function inotn (width) {
    assert(typeof width === 'number' && width >= 0);

    var bytesNeeded = Math.ceil(width / 26) | 0;
    var bitsLeft = width % 26;

    // Extend the buffer with leading zeroes
    this._expand(bytesNeeded);

    if (bitsLeft > 0) {
      bytesNeeded--;
    }

    // Handle complete words
    for (var i = 0; i < bytesNeeded; i++) {
      this.words[i] = ~this.words[i] & 0x3ffffff;
    }

    // Handle the residue
    if (bitsLeft > 0) {
      this.words[i] = ~this.words[i] & (0x3ffffff >> (26 - bitsLeft));
    }

    // And remove leading zeroes
    return this._strip();
  };

  BN.prototype.notn = function notn (width) {
    return this.clone().inotn(width);
  };

  // Set `bit` of `this`
  BN.prototype.setn = function setn (bit, val) {
    assert(typeof bit === 'number' && bit >= 0);

    var off = (bit / 26) | 0;
    var wbit = bit % 26;

    this._expand(off + 1);

    if (val) {
      this.words[off] = this.words[off] | (1 << wbit);
    } else {
      this.words[off] = this.words[off] & ~(1 << wbit);
    }

    return this._strip();
  };

  // Add `num` to `this` in-place
  BN.prototype.iadd = function iadd (num) {
    var r;

    // negative + positive
    if (this.negative !== 0 && num.negative === 0) {
      this.negative = 0;
      r = this.isub(num);
      this.negative ^= 1;
      return this._normSign();

    // positive + negative
    } else if (this.negative === 0 && num.negative !== 0) {
      num.negative = 0;
      r = this.isub(num);
      num.negative = 1;
      return r._normSign();
    }

    // a.length > b.length
    var a, b;
    if (this.length > num.length) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    var carry = 0;
    for (var i = 0; i < b.length; i++) {
      r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
      this.words[i] = r & 0x3ffffff;
      carry = r >>> 26;
    }
    for (; carry !== 0 && i < a.length; i++) {
      r = (a.words[i] | 0) + carry;
      this.words[i] = r & 0x3ffffff;
      carry = r >>> 26;
    }

    this.length = a.length;
    if (carry !== 0) {
      this.words[this.length] = carry;
      this.length++;
    // Copy the rest of the words
    } else if (a !== this) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    return this;
  };

  // Add `num` to `this`
  BN.prototype.add = function add (num) {
    var res;
    if (num.negative !== 0 && this.negative === 0) {
      num.negative = 0;
      res = this.sub(num);
      num.negative ^= 1;
      return res;
    } else if (num.negative === 0 && this.negative !== 0) {
      this.negative = 0;
      res = num.sub(this);
      this.negative = 1;
      return res;
    }

    if (this.length > num.length) return this.clone().iadd(num);

    return num.clone().iadd(this);
  };

  // Subtract `num` from `this` in-place
  BN.prototype.isub = function isub (num) {
    // this - (-num) = this + num
    if (num.negative !== 0) {
      num.negative = 0;
      var r = this.iadd(num);
      num.negative = 1;
      return r._normSign();

    // -this - num = -(this + num)
    } else if (this.negative !== 0) {
      this.negative = 0;
      this.iadd(num);
      this.negative = 1;
      return this._normSign();
    }

    // At this point both numbers are positive
    var cmp = this.cmp(num);

    // Optimization - zeroify
    if (cmp === 0) {
      this.negative = 0;
      this.length = 1;
      this.words[0] = 0;
      return this;
    }

    // a > b
    var a, b;
    if (cmp > 0) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    var carry = 0;
    for (var i = 0; i < b.length; i++) {
      r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
      carry = r >> 26;
      this.words[i] = r & 0x3ffffff;
    }
    for (; carry !== 0 && i < a.length; i++) {
      r = (a.words[i] | 0) + carry;
      carry = r >> 26;
      this.words[i] = r & 0x3ffffff;
    }

    // Copy rest of the words
    if (carry === 0 && i < a.length && a !== this) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    this.length = Math.max(this.length, i);

    if (a !== this) {
      this.negative = 1;
    }

    return this._strip();
  };

  // Subtract `num` from `this`
  BN.prototype.sub = function sub (num) {
    return this.clone().isub(num);
  };

  function smallMulTo (self, num, out) {
    out.negative = num.negative ^ self.negative;
    var len = (self.length + num.length) | 0;
    out.length = len;
    len = (len - 1) | 0;

    // Peel one iteration (compiler can't do it, because of code complexity)
    var a = self.words[0] | 0;
    var b = num.words[0] | 0;
    var r = a * b;

    var lo = r & 0x3ffffff;
    var carry = (r / 0x4000000) | 0;
    out.words[0] = lo;

    for (var k = 1; k < len; k++) {
      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
      // note that ncarry could be >= 0x3ffffff
      var ncarry = carry >>> 26;
      var rword = carry & 0x3ffffff;
      var maxJ = Math.min(k, num.length - 1);
      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
        var i = (k - j) | 0;
        a = self.words[i] | 0;
        b = num.words[j] | 0;
        r = a * b + rword;
        ncarry += (r / 0x4000000) | 0;
        rword = r & 0x3ffffff;
      }
      out.words[k] = rword | 0;
      carry = ncarry | 0;
    }
    if (carry !== 0) {
      out.words[k] = carry | 0;
    } else {
      out.length--;
    }

    return out._strip();
  }

  // TODO(indutny): it may be reasonable to omit it for users who don't need
  // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
  // multiplication (like elliptic secp256k1).
  var comb10MulTo = function comb10MulTo (self, num, out) {
    var a = self.words;
    var b = num.words;
    var o = out.words;
    var c = 0;
    var lo;
    var mid;
    var hi;
    var a0 = a[0] | 0;
    var al0 = a0 & 0x1fff;
    var ah0 = a0 >>> 13;
    var a1 = a[1] | 0;
    var al1 = a1 & 0x1fff;
    var ah1 = a1 >>> 13;
    var a2 = a[2] | 0;
    var al2 = a2 & 0x1fff;
    var ah2 = a2 >>> 13;
    var a3 = a[3] | 0;
    var al3 = a3 & 0x1fff;
    var ah3 = a3 >>> 13;
    var a4 = a[4] | 0;
    var al4 = a4 & 0x1fff;
    var ah4 = a4 >>> 13;
    var a5 = a[5] | 0;
    var al5 = a5 & 0x1fff;
    var ah5 = a5 >>> 13;
    var a6 = a[6] | 0;
    var al6 = a6 & 0x1fff;
    var ah6 = a6 >>> 13;
    var a7 = a[7] | 0;
    var al7 = a7 & 0x1fff;
    var ah7 = a7 >>> 13;
    var a8 = a[8] | 0;
    var al8 = a8 & 0x1fff;
    var ah8 = a8 >>> 13;
    var a9 = a[9] | 0;
    var al9 = a9 & 0x1fff;
    var ah9 = a9 >>> 13;
    var b0 = b[0] | 0;
    var bl0 = b0 & 0x1fff;
    var bh0 = b0 >>> 13;
    var b1 = b[1] | 0;
    var bl1 = b1 & 0x1fff;
    var bh1 = b1 >>> 13;
    var b2 = b[2] | 0;
    var bl2 = b2 & 0x1fff;
    var bh2 = b2 >>> 13;
    var b3 = b[3] | 0;
    var bl3 = b3 & 0x1fff;
    var bh3 = b3 >>> 13;
    var b4 = b[4] | 0;
    var bl4 = b4 & 0x1fff;
    var bh4 = b4 >>> 13;
    var b5 = b[5] | 0;
    var bl5 = b5 & 0x1fff;
    var bh5 = b5 >>> 13;
    var b6 = b[6] | 0;
    var bl6 = b6 & 0x1fff;
    var bh6 = b6 >>> 13;
    var b7 = b[7] | 0;
    var bl7 = b7 & 0x1fff;
    var bh7 = b7 >>> 13;
    var b8 = b[8] | 0;
    var bl8 = b8 & 0x1fff;
    var bh8 = b8 >>> 13;
    var b9 = b[9] | 0;
    var bl9 = b9 & 0x1fff;
    var bh9 = b9 >>> 13;

    out.negative = self.negative ^ num.negative;
    out.length = 19;
    /* k = 0 */
    lo = Math.imul(al0, bl0);
    mid = Math.imul(al0, bh0);
    mid = (mid + Math.imul(ah0, bl0)) | 0;
    hi = Math.imul(ah0, bh0);
    var w0 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w0 >>> 26)) | 0;
    w0 &= 0x3ffffff;
    /* k = 1 */
    lo = Math.imul(al1, bl0);
    mid = Math.imul(al1, bh0);
    mid = (mid + Math.imul(ah1, bl0)) | 0;
    hi = Math.imul(ah1, bh0);
    lo = (lo + Math.imul(al0, bl1)) | 0;
    mid = (mid + Math.imul(al0, bh1)) | 0;
    mid = (mid + Math.imul(ah0, bl1)) | 0;
    hi = (hi + Math.imul(ah0, bh1)) | 0;
    var w1 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w1 >>> 26)) | 0;
    w1 &= 0x3ffffff;
    /* k = 2 */
    lo = Math.imul(al2, bl0);
    mid = Math.imul(al2, bh0);
    mid = (mid + Math.imul(ah2, bl0)) | 0;
    hi = Math.imul(ah2, bh0);
    lo = (lo + Math.imul(al1, bl1)) | 0;
    mid = (mid + Math.imul(al1, bh1)) | 0;
    mid = (mid + Math.imul(ah1, bl1)) | 0;
    hi = (hi + Math.imul(ah1, bh1)) | 0;
    lo = (lo + Math.imul(al0, bl2)) | 0;
    mid = (mid + Math.imul(al0, bh2)) | 0;
    mid = (mid + Math.imul(ah0, bl2)) | 0;
    hi = (hi + Math.imul(ah0, bh2)) | 0;
    var w2 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w2 >>> 26)) | 0;
    w2 &= 0x3ffffff;
    /* k = 3 */
    lo = Math.imul(al3, bl0);
    mid = Math.imul(al3, bh0);
    mid = (mid + Math.imul(ah3, bl0)) | 0;
    hi = Math.imul(ah3, bh0);
    lo = (lo + Math.imul(al2, bl1)) | 0;
    mid = (mid + Math.imul(al2, bh1)) | 0;
    mid = (mid + Math.imul(ah2, bl1)) | 0;
    hi = (hi + Math.imul(ah2, bh1)) | 0;
    lo = (lo + Math.imul(al1, bl2)) | 0;
    mid = (mid + Math.imul(al1, bh2)) | 0;
    mid = (mid + Math.imul(ah1, bl2)) | 0;
    hi = (hi + Math.imul(ah1, bh2)) | 0;
    lo = (lo + Math.imul(al0, bl3)) | 0;
    mid = (mid + Math.imul(al0, bh3)) | 0;
    mid = (mid + Math.imul(ah0, bl3)) | 0;
    hi = (hi + Math.imul(ah0, bh3)) | 0;
    var w3 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w3 >>> 26)) | 0;
    w3 &= 0x3ffffff;
    /* k = 4 */
    lo = Math.imul(al4, bl0);
    mid = Math.imul(al4, bh0);
    mid = (mid + Math.imul(ah4, bl0)) | 0;
    hi = Math.imul(ah4, bh0);
    lo = (lo + Math.imul(al3, bl1)) | 0;
    mid = (mid + Math.imul(al3, bh1)) | 0;
    mid = (mid + Math.imul(ah3, bl1)) | 0;
    hi = (hi + Math.imul(ah3, bh1)) | 0;
    lo = (lo + Math.imul(al2, bl2)) | 0;
    mid = (mid + Math.imul(al2, bh2)) | 0;
    mid = (mid + Math.imul(ah2, bl2)) | 0;
    hi = (hi + Math.imul(ah2, bh2)) | 0;
    lo = (lo + Math.imul(al1, bl3)) | 0;
    mid = (mid + Math.imul(al1, bh3)) | 0;
    mid = (mid + Math.imul(ah1, bl3)) | 0;
    hi = (hi + Math.imul(ah1, bh3)) | 0;
    lo = (lo + Math.imul(al0, bl4)) | 0;
    mid = (mid + Math.imul(al0, bh4)) | 0;
    mid = (mid + Math.imul(ah0, bl4)) | 0;
    hi = (hi + Math.imul(ah0, bh4)) | 0;
    var w4 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w4 >>> 26)) | 0;
    w4 &= 0x3ffffff;
    /* k = 5 */
    lo = Math.imul(al5, bl0);
    mid = Math.imul(al5, bh0);
    mid = (mid + Math.imul(ah5, bl0)) | 0;
    hi = Math.imul(ah5, bh0);
    lo = (lo + Math.imul(al4, bl1)) | 0;
    mid = (mid + Math.imul(al4, bh1)) | 0;
    mid = (mid + Math.imul(ah4, bl1)) | 0;
    hi = (hi + Math.imul(ah4, bh1)) | 0;
    lo = (lo + Math.imul(al3, bl2)) | 0;
    mid = (mid + Math.imul(al3, bh2)) | 0;
    mid = (mid + Math.imul(ah3, bl2)) | 0;
    hi = (hi + Math.imul(ah3, bh2)) | 0;
    lo = (lo + Math.imul(al2, bl3)) | 0;
    mid = (mid + Math.imul(al2, bh3)) | 0;
    mid = (mid + Math.imul(ah2, bl3)) | 0;
    hi = (hi + Math.imul(ah2, bh3)) | 0;
    lo = (lo + Math.imul(al1, bl4)) | 0;
    mid = (mid + Math.imul(al1, bh4)) | 0;
    mid = (mid + Math.imul(ah1, bl4)) | 0;
    hi = (hi + Math.imul(ah1, bh4)) | 0;
    lo = (lo + Math.imul(al0, bl5)) | 0;
    mid = (mid + Math.imul(al0, bh5)) | 0;
    mid = (mid + Math.imul(ah0, bl5)) | 0;
    hi = (hi + Math.imul(ah0, bh5)) | 0;
    var w5 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w5 >>> 26)) | 0;
    w5 &= 0x3ffffff;
    /* k = 6 */
    lo = Math.imul(al6, bl0);
    mid = Math.imul(al6, bh0);
    mid = (mid + Math.imul(ah6, bl0)) | 0;
    hi = Math.imul(ah6, bh0);
    lo = (lo + Math.imul(al5, bl1)) | 0;
    mid = (mid + Math.imul(al5, bh1)) | 0;
    mid = (mid + Math.imul(ah5, bl1)) | 0;
    hi = (hi + Math.imul(ah5, bh1)) | 0;
    lo = (lo + Math.imul(al4, bl2)) | 0;
    mid = (mid + Math.imul(al4, bh2)) | 0;
    mid = (mid + Math.imul(ah4, bl2)) | 0;
    hi = (hi + Math.imul(ah4, bh2)) | 0;
    lo = (lo + Math.imul(al3, bl3)) | 0;
    mid = (mid + Math.imul(al3, bh3)) | 0;
    mid = (mid + Math.imul(ah3, bl3)) | 0;
    hi = (hi + Math.imul(ah3, bh3)) | 0;
    lo = (lo + Math.imul(al2, bl4)) | 0;
    mid = (mid + Math.imul(al2, bh4)) | 0;
    mid = (mid + Math.imul(ah2, bl4)) | 0;
    hi = (hi + Math.imul(ah2, bh4)) | 0;
    lo = (lo + Math.imul(al1, bl5)) | 0;
    mid = (mid + Math.imul(al1, bh5)) | 0;
    mid = (mid + Math.imul(ah1, bl5)) | 0;
    hi = (hi + Math.imul(ah1, bh5)) | 0;
    lo = (lo + Math.imul(al0, bl6)) | 0;
    mid = (mid + Math.imul(al0, bh6)) | 0;
    mid = (mid + Math.imul(ah0, bl6)) | 0;
    hi = (hi + Math.imul(ah0, bh6)) | 0;
    var w6 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w6 >>> 26)) | 0;
    w6 &= 0x3ffffff;
    /* k = 7 */
    lo = Math.imul(al7, bl0);
    mid = Math.imul(al7, bh0);
    mid = (mid + Math.imul(ah7, bl0)) | 0;
    hi = Math.imul(ah7, bh0);
    lo = (lo + Math.imul(al6, bl1)) | 0;
    mid = (mid + Math.imul(al6, bh1)) | 0;
    mid = (mid + Math.imul(ah6, bl1)) | 0;
    hi = (hi + Math.imul(ah6, bh1)) | 0;
    lo = (lo + Math.imul(al5, bl2)) | 0;
    mid = (mid + Math.imul(al5, bh2)) | 0;
    mid = (mid + Math.imul(ah5, bl2)) | 0;
    hi = (hi + Math.imul(ah5, bh2)) | 0;
    lo = (lo + Math.imul(al4, bl3)) | 0;
    mid = (mid + Math.imul(al4, bh3)) | 0;
    mid = (mid + Math.imul(ah4, bl3)) | 0;
    hi = (hi + Math.imul(ah4, bh3)) | 0;
    lo = (lo + Math.imul(al3, bl4)) | 0;
    mid = (mid + Math.imul(al3, bh4)) | 0;
    mid = (mid + Math.imul(ah3, bl4)) | 0;
    hi = (hi + Math.imul(ah3, bh4)) | 0;
    lo = (lo + Math.imul(al2, bl5)) | 0;
    mid = (mid + Math.imul(al2, bh5)) | 0;
    mid = (mid + Math.imul(ah2, bl5)) | 0;
    hi = (hi + Math.imul(ah2, bh5)) | 0;
    lo = (lo + Math.imul(al1, bl6)) | 0;
    mid = (mid + Math.imul(al1, bh6)) | 0;
    mid = (mid + Math.imul(ah1, bl6)) | 0;
    hi = (hi + Math.imul(ah1, bh6)) | 0;
    lo = (lo + Math.imul(al0, bl7)) | 0;
    mid = (mid + Math.imul(al0, bh7)) | 0;
    mid = (mid + Math.imul(ah0, bl7)) | 0;
    hi = (hi + Math.imul(ah0, bh7)) | 0;
    var w7 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w7 >>> 26)) | 0;
    w7 &= 0x3ffffff;
    /* k = 8 */
    lo = Math.imul(al8, bl0);
    mid = Math.imul(al8, bh0);
    mid = (mid + Math.imul(ah8, bl0)) | 0;
    hi = Math.imul(ah8, bh0);
    lo = (lo + Math.imul(al7, bl1)) | 0;
    mid = (mid + Math.imul(al7, bh1)) | 0;
    mid = (mid + Math.imul(ah7, bl1)) | 0;
    hi = (hi + Math.imul(ah7, bh1)) | 0;
    lo = (lo + Math.imul(al6, bl2)) | 0;
    mid = (mid + Math.imul(al6, bh2)) | 0;
    mid = (mid + Math.imul(ah6, bl2)) | 0;
    hi = (hi + Math.imul(ah6, bh2)) | 0;
    lo = (lo + Math.imul(al5, bl3)) | 0;
    mid = (mid + Math.imul(al5, bh3)) | 0;
    mid = (mid + Math.imul(ah5, bl3)) | 0;
    hi = (hi + Math.imul(ah5, bh3)) | 0;
    lo = (lo + Math.imul(al4, bl4)) | 0;
    mid = (mid + Math.imul(al4, bh4)) | 0;
    mid = (mid + Math.imul(ah4, bl4)) | 0;
    hi = (hi + Math.imul(ah4, bh4)) | 0;
    lo = (lo + Math.imul(al3, bl5)) | 0;
    mid = (mid + Math.imul(al3, bh5)) | 0;
    mid = (mid + Math.imul(ah3, bl5)) | 0;
    hi = (hi + Math.imul(ah3, bh5)) | 0;
    lo = (lo + Math.imul(al2, bl6)) | 0;
    mid = (mid + Math.imul(al2, bh6)) | 0;
    mid = (mid + Math.imul(ah2, bl6)) | 0;
    hi = (hi + Math.imul(ah2, bh6)) | 0;
    lo = (lo + Math.imul(al1, bl7)) | 0;
    mid = (mid + Math.imul(al1, bh7)) | 0;
    mid = (mid + Math.imul(ah1, bl7)) | 0;
    hi = (hi + Math.imul(ah1, bh7)) | 0;
    lo = (lo + Math.imul(al0, bl8)) | 0;
    mid = (mid + Math.imul(al0, bh8)) | 0;
    mid = (mid + Math.imul(ah0, bl8)) | 0;
    hi = (hi + Math.imul(ah0, bh8)) | 0;
    var w8 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w8 >>> 26)) | 0;
    w8 &= 0x3ffffff;
    /* k = 9 */
    lo = Math.imul(al9, bl0);
    mid = Math.imul(al9, bh0);
    mid = (mid + Math.imul(ah9, bl0)) | 0;
    hi = Math.imul(ah9, bh0);
    lo = (lo + Math.imul(al8, bl1)) | 0;
    mid = (mid + Math.imul(al8, bh1)) | 0;
    mid = (mid + Math.imul(ah8, bl1)) | 0;
    hi = (hi + Math.imul(ah8, bh1)) | 0;
    lo = (lo + Math.imul(al7, bl2)) | 0;
    mid = (mid + Math.imul(al7, bh2)) | 0;
    mid = (mid + Math.imul(ah7, bl2)) | 0;
    hi = (hi + Math.imul(ah7, bh2)) | 0;
    lo = (lo + Math.imul(al6, bl3)) | 0;
    mid = (mid + Math.imul(al6, bh3)) | 0;
    mid = (mid + Math.imul(ah6, bl3)) | 0;
    hi = (hi + Math.imul(ah6, bh3)) | 0;
    lo = (lo + Math.imul(al5, bl4)) | 0;
    mid = (mid + Math.imul(al5, bh4)) | 0;
    mid = (mid + Math.imul(ah5, bl4)) | 0;
    hi = (hi + Math.imul(ah5, bh4)) | 0;
    lo = (lo + Math.imul(al4, bl5)) | 0;
    mid = (mid + Math.imul(al4, bh5)) | 0;
    mid = (mid + Math.imul(ah4, bl5)) | 0;
    hi = (hi + Math.imul(ah4, bh5)) | 0;
    lo = (lo + Math.imul(al3, bl6)) | 0;
    mid = (mid + Math.imul(al3, bh6)) | 0;
    mid = (mid + Math.imul(ah3, bl6)) | 0;
    hi = (hi + Math.imul(ah3, bh6)) | 0;
    lo = (lo + Math.imul(al2, bl7)) | 0;
    mid = (mid + Math.imul(al2, bh7)) | 0;
    mid = (mid + Math.imul(ah2, bl7)) | 0;
    hi = (hi + Math.imul(ah2, bh7)) | 0;
    lo = (lo + Math.imul(al1, bl8)) | 0;
    mid = (mid + Math.imul(al1, bh8)) | 0;
    mid = (mid + Math.imul(ah1, bl8)) | 0;
    hi = (hi + Math.imul(ah1, bh8)) | 0;
    lo = (lo + Math.imul(al0, bl9)) | 0;
    mid = (mid + Math.imul(al0, bh9)) | 0;
    mid = (mid + Math.imul(ah0, bl9)) | 0;
    hi = (hi + Math.imul(ah0, bh9)) | 0;
    var w9 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w9 >>> 26)) | 0;
    w9 &= 0x3ffffff;
    /* k = 10 */
    lo = Math.imul(al9, bl1);
    mid = Math.imul(al9, bh1);
    mid = (mid + Math.imul(ah9, bl1)) | 0;
    hi = Math.imul(ah9, bh1);
    lo = (lo + Math.imul(al8, bl2)) | 0;
    mid = (mid + Math.imul(al8, bh2)) | 0;
    mid = (mid + Math.imul(ah8, bl2)) | 0;
    hi = (hi + Math.imul(ah8, bh2)) | 0;
    lo = (lo + Math.imul(al7, bl3)) | 0;
    mid = (mid + Math.imul(al7, bh3)) | 0;
    mid = (mid + Math.imul(ah7, bl3)) | 0;
    hi = (hi + Math.imul(ah7, bh3)) | 0;
    lo = (lo + Math.imul(al6, bl4)) | 0;
    mid = (mid + Math.imul(al6, bh4)) | 0;
    mid = (mid + Math.imul(ah6, bl4)) | 0;
    hi = (hi + Math.imul(ah6, bh4)) | 0;
    lo = (lo + Math.imul(al5, bl5)) | 0;
    mid = (mid + Math.imul(al5, bh5)) | 0;
    mid = (mid + Math.imul(ah5, bl5)) | 0;
    hi = (hi + Math.imul(ah5, bh5)) | 0;
    lo = (lo + Math.imul(al4, bl6)) | 0;
    mid = (mid + Math.imul(al4, bh6)) | 0;
    mid = (mid + Math.imul(ah4, bl6)) | 0;
    hi = (hi + Math.imul(ah4, bh6)) | 0;
    lo = (lo + Math.imul(al3, bl7)) | 0;
    mid = (mid + Math.imul(al3, bh7)) | 0;
    mid = (mid + Math.imul(ah3, bl7)) | 0;
    hi = (hi + Math.imul(ah3, bh7)) | 0;
    lo = (lo + Math.imul(al2, bl8)) | 0;
    mid = (mid + Math.imul(al2, bh8)) | 0;
    mid = (mid + Math.imul(ah2, bl8)) | 0;
    hi = (hi + Math.imul(ah2, bh8)) | 0;
    lo = (lo + Math.imul(al1, bl9)) | 0;
    mid = (mid + Math.imul(al1, bh9)) | 0;
    mid = (mid + Math.imul(ah1, bl9)) | 0;
    hi = (hi + Math.imul(ah1, bh9)) | 0;
    var w10 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w10 >>> 26)) | 0;
    w10 &= 0x3ffffff;
    /* k = 11 */
    lo = Math.imul(al9, bl2);
    mid = Math.imul(al9, bh2);
    mid = (mid + Math.imul(ah9, bl2)) | 0;
    hi = Math.imul(ah9, bh2);
    lo = (lo + Math.imul(al8, bl3)) | 0;
    mid = (mid + Math.imul(al8, bh3)) | 0;
    mid = (mid + Math.imul(ah8, bl3)) | 0;
    hi = (hi + Math.imul(ah8, bh3)) | 0;
    lo = (lo + Math.imul(al7, bl4)) | 0;
    mid = (mid + Math.imul(al7, bh4)) | 0;
    mid = (mid + Math.imul(ah7, bl4)) | 0;
    hi = (hi + Math.imul(ah7, bh4)) | 0;
    lo = (lo + Math.imul(al6, bl5)) | 0;
    mid = (mid + Math.imul(al6, bh5)) | 0;
    mid = (mid + Math.imul(ah6, bl5)) | 0;
    hi = (hi + Math.imul(ah6, bh5)) | 0;
    lo = (lo + Math.imul(al5, bl6)) | 0;
    mid = (mid + Math.imul(al5, bh6)) | 0;
    mid = (mid + Math.imul(ah5, bl6)) | 0;
    hi = (hi + Math.imul(ah5, bh6)) | 0;
    lo = (lo + Math.imul(al4, bl7)) | 0;
    mid = (mid + Math.imul(al4, bh7)) | 0;
    mid = (mid + Math.imul(ah4, bl7)) | 0;
    hi = (hi + Math.imul(ah4, bh7)) | 0;
    lo = (lo + Math.imul(al3, bl8)) | 0;
    mid = (mid + Math.imul(al3, bh8)) | 0;
    mid = (mid + Math.imul(ah3, bl8)) | 0;
    hi = (hi + Math.imul(ah3, bh8)) | 0;
    lo = (lo + Math.imul(al2, bl9)) | 0;
    mid = (mid + Math.imul(al2, bh9)) | 0;
    mid = (mid + Math.imul(ah2, bl9)) | 0;
    hi = (hi + Math.imul(ah2, bh9)) | 0;
    var w11 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w11 >>> 26)) | 0;
    w11 &= 0x3ffffff;
    /* k = 12 */
    lo = Math.imul(al9, bl3);
    mid = Math.imul(al9, bh3);
    mid = (mid + Math.imul(ah9, bl3)) | 0;
    hi = Math.imul(ah9, bh3);
    lo = (lo + Math.imul(al8, bl4)) | 0;
    mid = (mid + Math.imul(al8, bh4)) | 0;
    mid = (mid + Math.imul(ah8, bl4)) | 0;
    hi = (hi + Math.imul(ah8, bh4)) | 0;
    lo = (lo + Math.imul(al7, bl5)) | 0;
    mid = (mid + Math.imul(al7, bh5)) | 0;
    mid = (mid + Math.imul(ah7, bl5)) | 0;
    hi = (hi + Math.imul(ah7, bh5)) | 0;
    lo = (lo + Math.imul(al6, bl6)) | 0;
    mid = (mid + Math.imul(al6, bh6)) | 0;
    mid = (mid + Math.imul(ah6, bl6)) | 0;
    hi = (hi + Math.imul(ah6, bh6)) | 0;
    lo = (lo + Math.imul(al5, bl7)) | 0;
    mid = (mid + Math.imul(al5, bh7)) | 0;
    mid = (mid + Math.imul(ah5, bl7)) | 0;
    hi = (hi + Math.imul(ah5, bh7)) | 0;
    lo = (lo + Math.imul(al4, bl8)) | 0;
    mid = (mid + Math.imul(al4, bh8)) | 0;
    mid = (mid + Math.imul(ah4, bl8)) | 0;
    hi = (hi + Math.imul(ah4, bh8)) | 0;
    lo = (lo + Math.imul(al3, bl9)) | 0;
    mid = (mid + Math.imul(al3, bh9)) | 0;
    mid = (mid + Math.imul(ah3, bl9)) | 0;
    hi = (hi + Math.imul(ah3, bh9)) | 0;
    var w12 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w12 >>> 26)) | 0;
    w12 &= 0x3ffffff;
    /* k = 13 */
    lo = Math.imul(al9, bl4);
    mid = Math.imul(al9, bh4);
    mid = (mid + Math.imul(ah9, bl4)) | 0;
    hi = Math.imul(ah9, bh4);
    lo = (lo + Math.imul(al8, bl5)) | 0;
    mid = (mid + Math.imul(al8, bh5)) | 0;
    mid = (mid + Math.imul(ah8, bl5)) | 0;
    hi = (hi + Math.imul(ah8, bh5)) | 0;
    lo = (lo + Math.imul(al7, bl6)) | 0;
    mid = (mid + Math.imul(al7, bh6)) | 0;
    mid = (mid + Math.imul(ah7, bl6)) | 0;
    hi = (hi + Math.imul(ah7, bh6)) | 0;
    lo = (lo + Math.imul(al6, bl7)) | 0;
    mid = (mid + Math.imul(al6, bh7)) | 0;
    mid = (mid + Math.imul(ah6, bl7)) | 0;
    hi = (hi + Math.imul(ah6, bh7)) | 0;
    lo = (lo + Math.imul(al5, bl8)) | 0;
    mid = (mid + Math.imul(al5, bh8)) | 0;
    mid = (mid + Math.imul(ah5, bl8)) | 0;
    hi = (hi + Math.imul(ah5, bh8)) | 0;
    lo = (lo + Math.imul(al4, bl9)) | 0;
    mid = (mid + Math.imul(al4, bh9)) | 0;
    mid = (mid + Math.imul(ah4, bl9)) | 0;
    hi = (hi + Math.imul(ah4, bh9)) | 0;
    var w13 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w13 >>> 26)) | 0;
    w13 &= 0x3ffffff;
    /* k = 14 */
    lo = Math.imul(al9, bl5);
    mid = Math.imul(al9, bh5);
    mid = (mid + Math.imul(ah9, bl5)) | 0;
    hi = Math.imul(ah9, bh5);
    lo = (lo + Math.imul(al8, bl6)) | 0;
    mid = (mid + Math.imul(al8, bh6)) | 0;
    mid = (mid + Math.imul(ah8, bl6)) | 0;
    hi = (hi + Math.imul(ah8, bh6)) | 0;
    lo = (lo + Math.imul(al7, bl7)) | 0;
    mid = (mid + Math.imul(al7, bh7)) | 0;
    mid = (mid + Math.imul(ah7, bl7)) | 0;
    hi = (hi + Math.imul(ah7, bh7)) | 0;
    lo = (lo + Math.imul(al6, bl8)) | 0;
    mid = (mid + Math.imul(al6, bh8)) | 0;
    mid = (mid + Math.imul(ah6, bl8)) | 0;
    hi = (hi + Math.imul(ah6, bh8)) | 0;
    lo = (lo + Math.imul(al5, bl9)) | 0;
    mid = (mid + Math.imul(al5, bh9)) | 0;
    mid = (mid + Math.imul(ah5, bl9)) | 0;
    hi = (hi + Math.imul(ah5, bh9)) | 0;
    var w14 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w14 >>> 26)) | 0;
    w14 &= 0x3ffffff;
    /* k = 15 */
    lo = Math.imul(al9, bl6);
    mid = Math.imul(al9, bh6);
    mid = (mid + Math.imul(ah9, bl6)) | 0;
    hi = Math.imul(ah9, bh6);
    lo = (lo + Math.imul(al8, bl7)) | 0;
    mid = (mid + Math.imul(al8, bh7)) | 0;
    mid = (mid + Math.imul(ah8, bl7)) | 0;
    hi = (hi + Math.imul(ah8, bh7)) | 0;
    lo = (lo + Math.imul(al7, bl8)) | 0;
    mid = (mid + Math.imul(al7, bh8)) | 0;
    mid = (mid + Math.imul(ah7, bl8)) | 0;
    hi = (hi + Math.imul(ah7, bh8)) | 0;
    lo = (lo + Math.imul(al6, bl9)) | 0;
    mid = (mid + Math.imul(al6, bh9)) | 0;
    mid = (mid + Math.imul(ah6, bl9)) | 0;
    hi = (hi + Math.imul(ah6, bh9)) | 0;
    var w15 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w15 >>> 26)) | 0;
    w15 &= 0x3ffffff;
    /* k = 16 */
    lo = Math.imul(al9, bl7);
    mid = Math.imul(al9, bh7);
    mid = (mid + Math.imul(ah9, bl7)) | 0;
    hi = Math.imul(ah9, bh7);
    lo = (lo + Math.imul(al8, bl8)) | 0;
    mid = (mid + Math.imul(al8, bh8)) | 0;
    mid = (mid + Math.imul(ah8, bl8)) | 0;
    hi = (hi + Math.imul(ah8, bh8)) | 0;
    lo = (lo + Math.imul(al7, bl9)) | 0;
    mid = (mid + Math.imul(al7, bh9)) | 0;
    mid = (mid + Math.imul(ah7, bl9)) | 0;
    hi = (hi + Math.imul(ah7, bh9)) | 0;
    var w16 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w16 >>> 26)) | 0;
    w16 &= 0x3ffffff;
    /* k = 17 */
    lo = Math.imul(al9, bl8);
    mid = Math.imul(al9, bh8);
    mid = (mid + Math.imul(ah9, bl8)) | 0;
    hi = Math.imul(ah9, bh8);
    lo = (lo + Math.imul(al8, bl9)) | 0;
    mid = (mid + Math.imul(al8, bh9)) | 0;
    mid = (mid + Math.imul(ah8, bl9)) | 0;
    hi = (hi + Math.imul(ah8, bh9)) | 0;
    var w17 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w17 >>> 26)) | 0;
    w17 &= 0x3ffffff;
    /* k = 18 */
    lo = Math.imul(al9, bl9);
    mid = Math.imul(al9, bh9);
    mid = (mid + Math.imul(ah9, bl9)) | 0;
    hi = Math.imul(ah9, bh9);
    var w18 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w18 >>> 26)) | 0;
    w18 &= 0x3ffffff;
    o[0] = w0;
    o[1] = w1;
    o[2] = w2;
    o[3] = w3;
    o[4] = w4;
    o[5] = w5;
    o[6] = w6;
    o[7] = w7;
    o[8] = w8;
    o[9] = w9;
    o[10] = w10;
    o[11] = w11;
    o[12] = w12;
    o[13] = w13;
    o[14] = w14;
    o[15] = w15;
    o[16] = w16;
    o[17] = w17;
    o[18] = w18;
    if (c !== 0) {
      o[19] = c;
      out.length++;
    }
    return out;
  };

  // Polyfill comb
  if (!Math.imul) {
    comb10MulTo = smallMulTo;
  }

  function bigMulTo (self, num, out) {
    out.negative = num.negative ^ self.negative;
    out.length = self.length + num.length;

    var carry = 0;
    var hncarry = 0;
    for (var k = 0; k < out.length - 1; k++) {
      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
      // note that ncarry could be >= 0x3ffffff
      var ncarry = hncarry;
      hncarry = 0;
      var rword = carry & 0x3ffffff;
      var maxJ = Math.min(k, num.length - 1);
      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
        var i = k - j;
        var a = self.words[i] | 0;
        var b = num.words[j] | 0;
        var r = a * b;

        var lo = r & 0x3ffffff;
        ncarry = (ncarry + ((r / 0x4000000) | 0)) | 0;
        lo = (lo + rword) | 0;
        rword = lo & 0x3ffffff;
        ncarry = (ncarry + (lo >>> 26)) | 0;

        hncarry += ncarry >>> 26;
        ncarry &= 0x3ffffff;
      }
      out.words[k] = rword;
      carry = ncarry;
      ncarry = hncarry;
    }
    if (carry !== 0) {
      out.words[k] = carry;
    } else {
      out.length--;
    }

    return out._strip();
  }

  function jumboMulTo (self, num, out) {
    // Temporary disable, see https://github.com/indutny/bn.js/issues/211
    // var fftm = new FFTM();
    // return fftm.mulp(self, num, out);
    return bigMulTo(self, num, out);
  }

  BN.prototype.mulTo = function mulTo (num, out) {
    var res;
    var len = this.length + num.length;
    if (this.length === 10 && num.length === 10) {
      res = comb10MulTo(this, num, out);
    } else if (len < 63) {
      res = smallMulTo(this, num, out);
    } else if (len < 1024) {
      res = bigMulTo(this, num, out);
    } else {
      res = jumboMulTo(this, num, out);
    }

    return res;
  };

  // Cooley-Tukey algorithm for FFT
  // slightly revisited to rely on looping instead of recursion

  function FFTM (x, y) {
    this.x = x;
    this.y = y;
  }

  FFTM.prototype.makeRBT = function makeRBT (N) {
    var t = new Array(N);
    var l = BN.prototype._countBits(N) - 1;
    for (var i = 0; i < N; i++) {
      t[i] = this.revBin(i, l, N);
    }

    return t;
  };

  // Returns binary-reversed representation of `x`
  FFTM.prototype.revBin = function revBin (x, l, N) {
    if (x === 0 || x === N - 1) return x;

    var rb = 0;
    for (var i = 0; i < l; i++) {
      rb |= (x & 1) << (l - i - 1);
      x >>= 1;
    }

    return rb;
  };

  // Performs "tweedling" phase, therefore 'emulating'
  // behaviour of the recursive algorithm
  FFTM.prototype.permute = function permute (rbt, rws, iws, rtws, itws, N) {
    for (var i = 0; i < N; i++) {
      rtws[i] = rws[rbt[i]];
      itws[i] = iws[rbt[i]];
    }
  };

  FFTM.prototype.transform = function transform (rws, iws, rtws, itws, N, rbt) {
    this.permute(rbt, rws, iws, rtws, itws, N);

    for (var s = 1; s < N; s <<= 1) {
      var l = s << 1;

      var rtwdf = Math.cos(2 * Math.PI / l);
      var itwdf = Math.sin(2 * Math.PI / l);

      for (var p = 0; p < N; p += l) {
        var rtwdf_ = rtwdf;
        var itwdf_ = itwdf;

        for (var j = 0; j < s; j++) {
          var re = rtws[p + j];
          var ie = itws[p + j];

          var ro = rtws[p + j + s];
          var io = itws[p + j + s];

          var rx = rtwdf_ * ro - itwdf_ * io;

          io = rtwdf_ * io + itwdf_ * ro;
          ro = rx;

          rtws[p + j] = re + ro;
          itws[p + j] = ie + io;

          rtws[p + j + s] = re - ro;
          itws[p + j + s] = ie - io;

          /* jshint maxdepth : false */
          if (j !== l) {
            rx = rtwdf * rtwdf_ - itwdf * itwdf_;

            itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
            rtwdf_ = rx;
          }
        }
      }
    }
  };

  FFTM.prototype.guessLen13b = function guessLen13b (n, m) {
    var N = Math.max(m, n) | 1;
    var odd = N & 1;
    var i = 0;
    for (N = N / 2 | 0; N; N = N >>> 1) {
      i++;
    }

    return 1 << i + 1 + odd;
  };

  FFTM.prototype.conjugate = function conjugate (rws, iws, N) {
    if (N <= 1) return;

    for (var i = 0; i < N / 2; i++) {
      var t = rws[i];

      rws[i] = rws[N - i - 1];
      rws[N - i - 1] = t;

      t = iws[i];

      iws[i] = -iws[N - i - 1];
      iws[N - i - 1] = -t;
    }
  };

  FFTM.prototype.normalize13b = function normalize13b (ws, N) {
    var carry = 0;
    for (var i = 0; i < N / 2; i++) {
      var w = Math.round(ws[2 * i + 1] / N) * 0x2000 +
        Math.round(ws[2 * i] / N) +
        carry;

      ws[i] = w & 0x3ffffff;

      if (w < 0x4000000) {
        carry = 0;
      } else {
        carry = w / 0x4000000 | 0;
      }
    }

    return ws;
  };

  FFTM.prototype.convert13b = function convert13b (ws, len, rws, N) {
    var carry = 0;
    for (var i = 0; i < len; i++) {
      carry = carry + (ws[i] | 0);

      rws[2 * i] = carry & 0x1fff; carry = carry >>> 13;
      rws[2 * i + 1] = carry & 0x1fff; carry = carry >>> 13;
    }

    // Pad with zeroes
    for (i = 2 * len; i < N; ++i) {
      rws[i] = 0;
    }

    assert(carry === 0);
    assert((carry & ~0x1fff) === 0);
  };

  FFTM.prototype.stub = function stub (N) {
    var ph = new Array(N);
    for (var i = 0; i < N; i++) {
      ph[i] = 0;
    }

    return ph;
  };

  FFTM.prototype.mulp = function mulp (x, y, out) {
    var N = 2 * this.guessLen13b(x.length, y.length);

    var rbt = this.makeRBT(N);

    var _ = this.stub(N);

    var rws = new Array(N);
    var rwst = new Array(N);
    var iwst = new Array(N);

    var nrws = new Array(N);
    var nrwst = new Array(N);
    var niwst = new Array(N);

    var rmws = out.words;
    rmws.length = N;

    this.convert13b(x.words, x.length, rws, N);
    this.convert13b(y.words, y.length, nrws, N);

    this.transform(rws, _, rwst, iwst, N, rbt);
    this.transform(nrws, _, nrwst, niwst, N, rbt);

    for (var i = 0; i < N; i++) {
      var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
      iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
      rwst[i] = rx;
    }

    this.conjugate(rwst, iwst, N);
    this.transform(rwst, iwst, rmws, _, N, rbt);
    this.conjugate(rmws, _, N);
    this.normalize13b(rmws, N);

    out.negative = x.negative ^ y.negative;
    out.length = x.length + y.length;
    return out._strip();
  };

  // Multiply `this` by `num`
  BN.prototype.mul = function mul (num) {
    var out = new BN(null);
    out.words = new Array(this.length + num.length);
    return this.mulTo(num, out);
  };

  // Multiply employing FFT
  BN.prototype.mulf = function mulf (num) {
    var out = new BN(null);
    out.words = new Array(this.length + num.length);
    return jumboMulTo(this, num, out);
  };

  // In-place Multiplication
  BN.prototype.imul = function imul (num) {
    return this.clone().mulTo(num, this);
  };

  BN.prototype.imuln = function imuln (num) {
    var isNegNum = num < 0;
    if (isNegNum) num = -num;

    assert(typeof num === 'number');
    assert(num < 0x4000000);

    // Carry
    var carry = 0;
    for (var i = 0; i < this.length; i++) {
      var w = (this.words[i] | 0) * num;
      var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
      carry >>= 26;
      carry += (w / 0x4000000) | 0;
      // NOTE: lo is 27bit maximum
      carry += lo >>> 26;
      this.words[i] = lo & 0x3ffffff;
    }

    if (carry !== 0) {
      this.words[i] = carry;
      this.length++;
    }

    return isNegNum ? this.ineg() : this;
  };

  BN.prototype.muln = function muln (num) {
    return this.clone().imuln(num);
  };

  // `this` * `this`
  BN.prototype.sqr = function sqr () {
    return this.mul(this);
  };

  // `this` * `this` in-place
  BN.prototype.isqr = function isqr () {
    return this.imul(this.clone());
  };

  // Math.pow(`this`, `num`)
  BN.prototype.pow = function pow (num) {
    var w = toBitArray(num);
    if (w.length === 0) return new BN(1);

    // Skip leading zeroes
    var res = this;
    for (var i = 0; i < w.length; i++, res = res.sqr()) {
      if (w[i] !== 0) break;
    }

    if (++i < w.length) {
      for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
        if (w[i] === 0) continue;

        res = res.mul(q);
      }
    }

    return res;
  };

  // Shift-left in-place
  BN.prototype.iushln = function iushln (bits) {
    assert(typeof bits === 'number' && bits >= 0);
    var r = bits % 26;
    var s = (bits - r) / 26;
    var carryMask = (0x3ffffff >>> (26 - r)) << (26 - r);
    var i;

    if (r !== 0) {
      var carry = 0;

      for (i = 0; i < this.length; i++) {
        var newCarry = this.words[i] & carryMask;
        var c = ((this.words[i] | 0) - newCarry) << r;
        this.words[i] = c | carry;
        carry = newCarry >>> (26 - r);
      }

      if (carry) {
        this.words[i] = carry;
        this.length++;
      }
    }

    if (s !== 0) {
      for (i = this.length - 1; i >= 0; i--) {
        this.words[i + s] = this.words[i];
      }

      for (i = 0; i < s; i++) {
        this.words[i] = 0;
      }

      this.length += s;
    }

    return this._strip();
  };

  BN.prototype.ishln = function ishln (bits) {
    // TODO(indutny): implement me
    assert(this.negative === 0);
    return this.iushln(bits);
  };

  // Shift-right in-place
  // NOTE: `hint` is a lowest bit before trailing zeroes
  // NOTE: if `extended` is present - it will be filled with destroyed bits
  BN.prototype.iushrn = function iushrn (bits, hint, extended) {
    assert(typeof bits === 'number' && bits >= 0);
    var h;
    if (hint) {
      h = (hint - (hint % 26)) / 26;
    } else {
      h = 0;
    }

    var r = bits % 26;
    var s = Math.min((bits - r) / 26, this.length);
    var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
    var maskedWords = extended;

    h -= s;
    h = Math.max(0, h);

    // Extended mode, copy masked part
    if (maskedWords) {
      for (var i = 0; i < s; i++) {
        maskedWords.words[i] = this.words[i];
      }
      maskedWords.length = s;
    }

    if (s === 0) {
      // No-op, we should not move anything at all
    } else if (this.length > s) {
      this.length -= s;
      for (i = 0; i < this.length; i++) {
        this.words[i] = this.words[i + s];
      }
    } else {
      this.words[0] = 0;
      this.length = 1;
    }

    var carry = 0;
    for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
      var word = this.words[i] | 0;
      this.words[i] = (carry << (26 - r)) | (word >>> r);
      carry = word & mask;
    }

    // Push carried bits as a mask
    if (maskedWords && carry !== 0) {
      maskedWords.words[maskedWords.length++] = carry;
    }

    if (this.length === 0) {
      this.words[0] = 0;
      this.length = 1;
    }

    return this._strip();
  };

  BN.prototype.ishrn = function ishrn (bits, hint, extended) {
    // TODO(indutny): implement me
    assert(this.negative === 0);
    return this.iushrn(bits, hint, extended);
  };

  // Shift-left
  BN.prototype.shln = function shln (bits) {
    return this.clone().ishln(bits);
  };

  BN.prototype.ushln = function ushln (bits) {
    return this.clone().iushln(bits);
  };

  // Shift-right
  BN.prototype.shrn = function shrn (bits) {
    return this.clone().ishrn(bits);
  };

  BN.prototype.ushrn = function ushrn (bits) {
    return this.clone().iushrn(bits);
  };

  // Test if n bit is set
  BN.prototype.testn = function testn (bit) {
    assert(typeof bit === 'number' && bit >= 0);
    var r = bit % 26;
    var s = (bit - r) / 26;
    var q = 1 << r;

    // Fast case: bit is much higher than all existing words
    if (this.length <= s) return false;

    // Check bit and return
    var w = this.words[s];

    return !!(w & q);
  };

  // Return only lowers bits of number (in-place)
  BN.prototype.imaskn = function imaskn (bits) {
    assert(typeof bits === 'number' && bits >= 0);
    var r = bits % 26;
    var s = (bits - r) / 26;

    assert(this.negative === 0, 'imaskn works only with positive numbers');

    if (this.length <= s) {
      return this;
    }

    if (r !== 0) {
      s++;
    }
    this.length = Math.min(s, this.length);

    if (r !== 0) {
      var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
      this.words[this.length - 1] &= mask;
    }

    return this._strip();
  };

  // Return only lowers bits of number
  BN.prototype.maskn = function maskn (bits) {
    return this.clone().imaskn(bits);
  };

  // Add plain number `num` to `this`
  BN.prototype.iaddn = function iaddn (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);
    if (num < 0) return this.isubn(-num);

    // Possible sign change
    if (this.negative !== 0) {
      if (this.length === 1 && (this.words[0] | 0) <= num) {
        this.words[0] = num - (this.words[0] | 0);
        this.negative = 0;
        return this;
      }

      this.negative = 0;
      this.isubn(num);
      this.negative = 1;
      return this;
    }

    // Add without checks
    return this._iaddn(num);
  };

  BN.prototype._iaddn = function _iaddn (num) {
    this.words[0] += num;

    // Carry
    for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++) {
      this.words[i] -= 0x4000000;
      if (i === this.length - 1) {
        this.words[i + 1] = 1;
      } else {
        this.words[i + 1]++;
      }
    }
    this.length = Math.max(this.length, i + 1);

    return this;
  };

  // Subtract plain number `num` from `this`
  BN.prototype.isubn = function isubn (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);
    if (num < 0) return this.iaddn(-num);

    if (this.negative !== 0) {
      this.negative = 0;
      this.iaddn(num);
      this.negative = 1;
      return this;
    }

    this.words[0] -= num;

    if (this.length === 1 && this.words[0] < 0) {
      this.words[0] = -this.words[0];
      this.negative = 1;
    } else {
      // Carry
      for (var i = 0; i < this.length && this.words[i] < 0; i++) {
        this.words[i] += 0x4000000;
        this.words[i + 1] -= 1;
      }
    }

    return this._strip();
  };

  BN.prototype.addn = function addn (num) {
    return this.clone().iaddn(num);
  };

  BN.prototype.subn = function subn (num) {
    return this.clone().isubn(num);
  };

  BN.prototype.iabs = function iabs () {
    this.negative = 0;

    return this;
  };

  BN.prototype.abs = function abs () {
    return this.clone().iabs();
  };

  BN.prototype._ishlnsubmul = function _ishlnsubmul (num, mul, shift) {
    var len = num.length + shift;
    var i;

    this._expand(len);

    var w;
    var carry = 0;
    for (i = 0; i < num.length; i++) {
      w = (this.words[i + shift] | 0) + carry;
      var right = (num.words[i] | 0) * mul;
      w -= right & 0x3ffffff;
      carry = (w >> 26) - ((right / 0x4000000) | 0);
      this.words[i + shift] = w & 0x3ffffff;
    }
    for (; i < this.length - shift; i++) {
      w = (this.words[i + shift] | 0) + carry;
      carry = w >> 26;
      this.words[i + shift] = w & 0x3ffffff;
    }

    if (carry === 0) return this._strip();

    // Subtraction overflow
    assert(carry === -1);
    carry = 0;
    for (i = 0; i < this.length; i++) {
      w = -(this.words[i] | 0) + carry;
      carry = w >> 26;
      this.words[i] = w & 0x3ffffff;
    }
    this.negative = 1;

    return this._strip();
  };

  BN.prototype._wordDiv = function _wordDiv (num, mode) {
    var shift = this.length - num.length;

    var a = this.clone();
    var b = num;

    // Normalize
    var bhi = b.words[b.length - 1] | 0;
    var bhiBits = this._countBits(bhi);
    shift = 26 - bhiBits;
    if (shift !== 0) {
      b = b.ushln(shift);
      a.iushln(shift);
      bhi = b.words[b.length - 1] | 0;
    }

    // Initialize quotient
    var m = a.length - b.length;
    var q;

    if (mode !== 'mod') {
      q = new BN(null);
      q.length = m + 1;
      q.words = new Array(q.length);
      for (var i = 0; i < q.length; i++) {
        q.words[i] = 0;
      }
    }

    var diff = a.clone()._ishlnsubmul(b, 1, m);
    if (diff.negative === 0) {
      a = diff;
      if (q) {
        q.words[m] = 1;
      }
    }

    for (var j = m - 1; j >= 0; j--) {
      var qj = (a.words[b.length + j] | 0) * 0x4000000 +
        (a.words[b.length + j - 1] | 0);

      // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
      // (0x7ffffff)
      qj = Math.min((qj / bhi) | 0, 0x3ffffff);

      a._ishlnsubmul(b, qj, j);
      while (a.negative !== 0) {
        qj--;
        a.negative = 0;
        a._ishlnsubmul(b, 1, j);
        if (!a.isZero()) {
          a.negative ^= 1;
        }
      }
      if (q) {
        q.words[j] = qj;
      }
    }
    if (q) {
      q._strip();
    }
    a._strip();

    // Denormalize
    if (mode !== 'div' && shift !== 0) {
      a.iushrn(shift);
    }

    return {
      div: q || null,
      mod: a
    };
  };

  // NOTE: 1) `mode` can be set to `mod` to request mod only,
  //       to `div` to request div only, or be absent to
  //       request both div & mod
  //       2) `positive` is true if unsigned mod is requested
  BN.prototype.divmod = function divmod (num, mode, positive) {
    assert(!num.isZero());

    if (this.isZero()) {
      return {
        div: new BN(0),
        mod: new BN(0)
      };
    }

    var div, mod, res;
    if (this.negative !== 0 && num.negative === 0) {
      res = this.neg().divmod(num, mode);

      if (mode !== 'mod') {
        div = res.div.neg();
      }

      if (mode !== 'div') {
        mod = res.mod.neg();
        if (positive && mod.negative !== 0) {
          mod.iadd(num);
        }
      }

      return {
        div: div,
        mod: mod
      };
    }

    if (this.negative === 0 && num.negative !== 0) {
      res = this.divmod(num.neg(), mode);

      if (mode !== 'mod') {
        div = res.div.neg();
      }

      return {
        div: div,
        mod: res.mod
      };
    }

    if ((this.negative & num.negative) !== 0) {
      res = this.neg().divmod(num.neg(), mode);

      if (mode !== 'div') {
        mod = res.mod.neg();
        if (positive && mod.negative !== 0) {
          mod.isub(num);
        }
      }

      return {
        div: res.div,
        mod: mod
      };
    }

    // Both numbers are positive at this point

    // Strip both numbers to approximate shift value
    if (num.length > this.length || this.cmp(num) < 0) {
      return {
        div: new BN(0),
        mod: this
      };
    }

    // Very short reduction
    if (num.length === 1) {
      if (mode === 'div') {
        return {
          div: this.divn(num.words[0]),
          mod: null
        };
      }

      if (mode === 'mod') {
        return {
          div: null,
          mod: new BN(this.modrn(num.words[0]))
        };
      }

      return {
        div: this.divn(num.words[0]),
        mod: new BN(this.modrn(num.words[0]))
      };
    }

    return this._wordDiv(num, mode);
  };

  // Find `this` / `num`
  BN.prototype.div = function div (num) {
    return this.divmod(num, 'div', false).div;
  };

  // Find `this` % `num`
  BN.prototype.mod = function mod (num) {
    return this.divmod(num, 'mod', false).mod;
  };

  BN.prototype.umod = function umod (num) {
    return this.divmod(num, 'mod', true).mod;
  };

  // Find Round(`this` / `num`)
  BN.prototype.divRound = function divRound (num) {
    var dm = this.divmod(num);

    // Fast case - exact division
    if (dm.mod.isZero()) return dm.div;

    var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;

    var half = num.ushrn(1);
    var r2 = num.andln(1);
    var cmp = mod.cmp(half);

    // Round down
    if (cmp < 0 || (r2 === 1 && cmp === 0)) return dm.div;

    // Round up
    return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
  };

  BN.prototype.modrn = function modrn (num) {
    var isNegNum = num < 0;
    if (isNegNum) num = -num;

    assert(num <= 0x3ffffff);
    var p = (1 << 26) % num;

    var acc = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      acc = (p * acc + (this.words[i] | 0)) % num;
    }

    return isNegNum ? -acc : acc;
  };

  // WARNING: DEPRECATED
  BN.prototype.modn = function modn (num) {
    return this.modrn(num);
  };

  // In-place division by number
  BN.prototype.idivn = function idivn (num) {
    var isNegNum = num < 0;
    if (isNegNum) num = -num;

    assert(num <= 0x3ffffff);

    var carry = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      var w = (this.words[i] | 0) + carry * 0x4000000;
      this.words[i] = (w / num) | 0;
      carry = w % num;
    }

    this._strip();
    return isNegNum ? this.ineg() : this;
  };

  BN.prototype.divn = function divn (num) {
    return this.clone().idivn(num);
  };

  BN.prototype.egcd = function egcd (p) {
    assert(p.negative === 0);
    assert(!p.isZero());

    var x = this;
    var y = p.clone();

    if (x.negative !== 0) {
      x = x.umod(p);
    } else {
      x = x.clone();
    }

    // A * x + B * y = x
    var A = new BN(1);
    var B = new BN(0);

    // C * x + D * y = y
    var C = new BN(0);
    var D = new BN(1);

    var g = 0;

    while (x.isEven() && y.isEven()) {
      x.iushrn(1);
      y.iushrn(1);
      ++g;
    }

    var yp = y.clone();
    var xp = x.clone();

    while (!x.isZero()) {
      for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
      if (i > 0) {
        x.iushrn(i);
        while (i-- > 0) {
          if (A.isOdd() || B.isOdd()) {
            A.iadd(yp);
            B.isub(xp);
          }

          A.iushrn(1);
          B.iushrn(1);
        }
      }

      for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
      if (j > 0) {
        y.iushrn(j);
        while (j-- > 0) {
          if (C.isOdd() || D.isOdd()) {
            C.iadd(yp);
            D.isub(xp);
          }

          C.iushrn(1);
          D.iushrn(1);
        }
      }

      if (x.cmp(y) >= 0) {
        x.isub(y);
        A.isub(C);
        B.isub(D);
      } else {
        y.isub(x);
        C.isub(A);
        D.isub(B);
      }
    }

    return {
      a: C,
      b: D,
      gcd: y.iushln(g)
    };
  };

  // This is reduced incarnation of the binary EEA
  // above, designated to invert members of the
  // _prime_ fields F(p) at a maximal speed
  BN.prototype._invmp = function _invmp (p) {
    assert(p.negative === 0);
    assert(!p.isZero());

    var a = this;
    var b = p.clone();

    if (a.negative !== 0) {
      a = a.umod(p);
    } else {
      a = a.clone();
    }

    var x1 = new BN(1);
    var x2 = new BN(0);

    var delta = b.clone();

    while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
      for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
      if (i > 0) {
        a.iushrn(i);
        while (i-- > 0) {
          if (x1.isOdd()) {
            x1.iadd(delta);
          }

          x1.iushrn(1);
        }
      }

      for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
      if (j > 0) {
        b.iushrn(j);
        while (j-- > 0) {
          if (x2.isOdd()) {
            x2.iadd(delta);
          }

          x2.iushrn(1);
        }
      }

      if (a.cmp(b) >= 0) {
        a.isub(b);
        x1.isub(x2);
      } else {
        b.isub(a);
        x2.isub(x1);
      }
    }

    var res;
    if (a.cmpn(1) === 0) {
      res = x1;
    } else {
      res = x2;
    }

    if (res.cmpn(0) < 0) {
      res.iadd(p);
    }

    return res;
  };

  BN.prototype.gcd = function gcd (num) {
    if (this.isZero()) return num.abs();
    if (num.isZero()) return this.abs();

    var a = this.clone();
    var b = num.clone();
    a.negative = 0;
    b.negative = 0;

    // Remove common factor of two
    for (var shift = 0; a.isEven() && b.isEven(); shift++) {
      a.iushrn(1);
      b.iushrn(1);
    }

    do {
      while (a.isEven()) {
        a.iushrn(1);
      }
      while (b.isEven()) {
        b.iushrn(1);
      }

      var r = a.cmp(b);
      if (r < 0) {
        // Swap `a` and `b` to make `a` always bigger than `b`
        var t = a;
        a = b;
        b = t;
      } else if (r === 0 || b.cmpn(1) === 0) {
        break;
      }

      a.isub(b);
    } while (true);

    return b.iushln(shift);
  };

  // Invert number in the field F(num)
  BN.prototype.invm = function invm (num) {
    return this.egcd(num).a.umod(num);
  };

  BN.prototype.isEven = function isEven () {
    return (this.words[0] & 1) === 0;
  };

  BN.prototype.isOdd = function isOdd () {
    return (this.words[0] & 1) === 1;
  };

  // And first word and num
  BN.prototype.andln = function andln (num) {
    return this.words[0] & num;
  };

  // Increment at the bit position in-line
  BN.prototype.bincn = function bincn (bit) {
    assert(typeof bit === 'number');
    var r = bit % 26;
    var s = (bit - r) / 26;
    var q = 1 << r;

    // Fast case: bit is much higher than all existing words
    if (this.length <= s) {
      this._expand(s + 1);
      this.words[s] |= q;
      return this;
    }

    // Add bit and propagate, if needed
    var carry = q;
    for (var i = s; carry !== 0 && i < this.length; i++) {
      var w = this.words[i] | 0;
      w += carry;
      carry = w >>> 26;
      w &= 0x3ffffff;
      this.words[i] = w;
    }
    if (carry !== 0) {
      this.words[i] = carry;
      this.length++;
    }
    return this;
  };

  BN.prototype.isZero = function isZero () {
    return this.length === 1 && this.words[0] === 0;
  };

  BN.prototype.cmpn = function cmpn (num) {
    var negative = num < 0;

    if (this.negative !== 0 && !negative) return -1;
    if (this.negative === 0 && negative) return 1;

    this._strip();

    var res;
    if (this.length > 1) {
      res = 1;
    } else {
      if (negative) {
        num = -num;
      }

      assert(num <= 0x3ffffff, 'Number is too big');

      var w = this.words[0] | 0;
      res = w === num ? 0 : w < num ? -1 : 1;
    }
    if (this.negative !== 0) return -res | 0;
    return res;
  };

  // Compare two numbers and return:
  // 1 - if `this` > `num`
  // 0 - if `this` == `num`
  // -1 - if `this` < `num`
  BN.prototype.cmp = function cmp (num) {
    if (this.negative !== 0 && num.negative === 0) return -1;
    if (this.negative === 0 && num.negative !== 0) return 1;

    var res = this.ucmp(num);
    if (this.negative !== 0) return -res | 0;
    return res;
  };

  // Unsigned comparison
  BN.prototype.ucmp = function ucmp (num) {
    // At this point both numbers have the same sign
    if (this.length > num.length) return 1;
    if (this.length < num.length) return -1;

    var res = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      var a = this.words[i] | 0;
      var b = num.words[i] | 0;

      if (a === b) continue;
      if (a < b) {
        res = -1;
      } else if (a > b) {
        res = 1;
      }
      break;
    }
    return res;
  };

  BN.prototype.gtn = function gtn (num) {
    return this.cmpn(num) === 1;
  };

  BN.prototype.gt = function gt (num) {
    return this.cmp(num) === 1;
  };

  BN.prototype.gten = function gten (num) {
    return this.cmpn(num) >= 0;
  };

  BN.prototype.gte = function gte (num) {
    return this.cmp(num) >= 0;
  };

  BN.prototype.ltn = function ltn (num) {
    return this.cmpn(num) === -1;
  };

  BN.prototype.lt = function lt (num) {
    return this.cmp(num) === -1;
  };

  BN.prototype.lten = function lten (num) {
    return this.cmpn(num) <= 0;
  };

  BN.prototype.lte = function lte (num) {
    return this.cmp(num) <= 0;
  };

  BN.prototype.eqn = function eqn (num) {
    return this.cmpn(num) === 0;
  };

  BN.prototype.eq = function eq (num) {
    return this.cmp(num) === 0;
  };

  //
  // A reduce context, could be using montgomery or something better, depending
  // on the `m` itself.
  //
  BN.red = function red (num) {
    return new Red(num);
  };

  BN.prototype.toRed = function toRed (ctx) {
    assert(!this.red, 'Already a number in reduction context');
    assert(this.negative === 0, 'red works only with positives');
    return ctx.convertTo(this)._forceRed(ctx);
  };

  BN.prototype.fromRed = function fromRed () {
    assert(this.red, 'fromRed works only with numbers in reduction context');
    return this.red.convertFrom(this);
  };

  BN.prototype._forceRed = function _forceRed (ctx) {
    this.red = ctx;
    return this;
  };

  BN.prototype.forceRed = function forceRed (ctx) {
    assert(!this.red, 'Already a number in reduction context');
    return this._forceRed(ctx);
  };

  BN.prototype.redAdd = function redAdd (num) {
    assert(this.red, 'redAdd works only with red numbers');
    return this.red.add(this, num);
  };

  BN.prototype.redIAdd = function redIAdd (num) {
    assert(this.red, 'redIAdd works only with red numbers');
    return this.red.iadd(this, num);
  };

  BN.prototype.redSub = function redSub (num) {
    assert(this.red, 'redSub works only with red numbers');
    return this.red.sub(this, num);
  };

  BN.prototype.redISub = function redISub (num) {
    assert(this.red, 'redISub works only with red numbers');
    return this.red.isub(this, num);
  };

  BN.prototype.redShl = function redShl (num) {
    assert(this.red, 'redShl works only with red numbers');
    return this.red.shl(this, num);
  };

  BN.prototype.redMul = function redMul (num) {
    assert(this.red, 'redMul works only with red numbers');
    this.red._verify2(this, num);
    return this.red.mul(this, num);
  };

  BN.prototype.redIMul = function redIMul (num) {
    assert(this.red, 'redMul works only with red numbers');
    this.red._verify2(this, num);
    return this.red.imul(this, num);
  };

  BN.prototype.redSqr = function redSqr () {
    assert(this.red, 'redSqr works only with red numbers');
    this.red._verify1(this);
    return this.red.sqr(this);
  };

  BN.prototype.redISqr = function redISqr () {
    assert(this.red, 'redISqr works only with red numbers');
    this.red._verify1(this);
    return this.red.isqr(this);
  };

  // Square root over p
  BN.prototype.redSqrt = function redSqrt () {
    assert(this.red, 'redSqrt works only with red numbers');
    this.red._verify1(this);
    return this.red.sqrt(this);
  };

  BN.prototype.redInvm = function redInvm () {
    assert(this.red, 'redInvm works only with red numbers');
    this.red._verify1(this);
    return this.red.invm(this);
  };

  // Return negative clone of `this` % `red modulo`
  BN.prototype.redNeg = function redNeg () {
    assert(this.red, 'redNeg works only with red numbers');
    this.red._verify1(this);
    return this.red.neg(this);
  };

  BN.prototype.redPow = function redPow (num) {
    assert(this.red && !num.red, 'redPow(normalNum)');
    this.red._verify1(this);
    return this.red.pow(this, num);
  };

  // Prime numbers with efficient reduction
  var primes = {
    k256: null,
    p224: null,
    p192: null,
    p25519: null
  };

  // Pseudo-Mersenne prime
  function MPrime (name, p) {
    // P = 2 ^ N - K
    this.name = name;
    this.p = new BN(p, 16);
    this.n = this.p.bitLength();
    this.k = new BN(1).iushln(this.n).isub(this.p);

    this.tmp = this._tmp();
  }

  MPrime.prototype._tmp = function _tmp () {
    var tmp = new BN(null);
    tmp.words = new Array(Math.ceil(this.n / 13));
    return tmp;
  };

  MPrime.prototype.ireduce = function ireduce (num) {
    // Assumes that `num` is less than `P^2`
    // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
    var r = num;
    var rlen;

    do {
      this.split(r, this.tmp);
      r = this.imulK(r);
      r = r.iadd(this.tmp);
      rlen = r.bitLength();
    } while (rlen > this.n);

    var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
    if (cmp === 0) {
      r.words[0] = 0;
      r.length = 1;
    } else if (cmp > 0) {
      r.isub(this.p);
    } else {
      if (r.strip !== undefined) {
        // r is a BN v4 instance
        r.strip();
      } else {
        // r is a BN v5 instance
        r._strip();
      }
    }

    return r;
  };

  MPrime.prototype.split = function split (input, out) {
    input.iushrn(this.n, 0, out);
  };

  MPrime.prototype.imulK = function imulK (num) {
    return num.imul(this.k);
  };

  function K256 () {
    MPrime.call(
      this,
      'k256',
      'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
  }
  inherits(K256, MPrime);

  K256.prototype.split = function split (input, output) {
    // 256 = 9 * 26 + 22
    var mask = 0x3fffff;

    var outLen = Math.min(input.length, 9);
    for (var i = 0; i < outLen; i++) {
      output.words[i] = input.words[i];
    }
    output.length = outLen;

    if (input.length <= 9) {
      input.words[0] = 0;
      input.length = 1;
      return;
    }

    // Shift by 9 limbs
    var prev = input.words[9];
    output.words[output.length++] = prev & mask;

    for (i = 10; i < input.length; i++) {
      var next = input.words[i] | 0;
      input.words[i - 10] = ((next & mask) << 4) | (prev >>> 22);
      prev = next;
    }
    prev >>>= 22;
    input.words[i - 10] = prev;
    if (prev === 0 && input.length > 10) {
      input.length -= 10;
    } else {
      input.length -= 9;
    }
  };

  K256.prototype.imulK = function imulK (num) {
    // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
    num.words[num.length] = 0;
    num.words[num.length + 1] = 0;
    num.length += 2;

    // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390
    var lo = 0;
    for (var i = 0; i < num.length; i++) {
      var w = num.words[i] | 0;
      lo += w * 0x3d1;
      num.words[i] = lo & 0x3ffffff;
      lo = w * 0x40 + ((lo / 0x4000000) | 0);
    }

    // Fast length reduction
    if (num.words[num.length - 1] === 0) {
      num.length--;
      if (num.words[num.length - 1] === 0) {
        num.length--;
      }
    }
    return num;
  };

  function P224 () {
    MPrime.call(
      this,
      'p224',
      'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
  }
  inherits(P224, MPrime);

  function P192 () {
    MPrime.call(
      this,
      'p192',
      'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
  }
  inherits(P192, MPrime);

  function P25519 () {
    // 2 ^ 255 - 19
    MPrime.call(
      this,
      '25519',
      '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
  }
  inherits(P25519, MPrime);

  P25519.prototype.imulK = function imulK (num) {
    // K = 0x13
    var carry = 0;
    for (var i = 0; i < num.length; i++) {
      var hi = (num.words[i] | 0) * 0x13 + carry;
      var lo = hi & 0x3ffffff;
      hi >>>= 26;

      num.words[i] = lo;
      carry = hi;
    }
    if (carry !== 0) {
      num.words[num.length++] = carry;
    }
    return num;
  };

  // Exported mostly for testing purposes, use plain name instead
  BN._prime = function prime (name) {
    // Cached version of prime
    if (primes[name]) return primes[name];

    var prime;
    if (name === 'k256') {
      prime = new K256();
    } else if (name === 'p224') {
      prime = new P224();
    } else if (name === 'p192') {
      prime = new P192();
    } else if (name === 'p25519') {
      prime = new P25519();
    } else {
      throw new Error('Unknown prime ' + name);
    }
    primes[name] = prime;

    return prime;
  };

  //
  // Base reduction engine
  //
  function Red (m) {
    if (typeof m === 'string') {
      var prime = BN._prime(m);
      this.m = prime.p;
      this.prime = prime;
    } else {
      assert(m.gtn(1), 'modulus must be greater than 1');
      this.m = m;
      this.prime = null;
    }
  }

  Red.prototype._verify1 = function _verify1 (a) {
    assert(a.negative === 0, 'red works only with positives');
    assert(a.red, 'red works only with red numbers');
  };

  Red.prototype._verify2 = function _verify2 (a, b) {
    assert((a.negative | b.negative) === 0, 'red works only with positives');
    assert(a.red && a.red === b.red,
      'red works only with red numbers');
  };

  Red.prototype.imod = function imod (a) {
    if (this.prime) return this.prime.ireduce(a)._forceRed(this);

    move(a, a.umod(this.m)._forceRed(this));
    return a;
  };

  Red.prototype.neg = function neg (a) {
    if (a.isZero()) {
      return a.clone();
    }

    return this.m.sub(a)._forceRed(this);
  };

  Red.prototype.add = function add (a, b) {
    this._verify2(a, b);

    var res = a.add(b);
    if (res.cmp(this.m) >= 0) {
      res.isub(this.m);
    }
    return res._forceRed(this);
  };

  Red.prototype.iadd = function iadd (a, b) {
    this._verify2(a, b);

    var res = a.iadd(b);
    if (res.cmp(this.m) >= 0) {
      res.isub(this.m);
    }
    return res;
  };

  Red.prototype.sub = function sub (a, b) {
    this._verify2(a, b);

    var res = a.sub(b);
    if (res.cmpn(0) < 0) {
      res.iadd(this.m);
    }
    return res._forceRed(this);
  };

  Red.prototype.isub = function isub (a, b) {
    this._verify2(a, b);

    var res = a.isub(b);
    if (res.cmpn(0) < 0) {
      res.iadd(this.m);
    }
    return res;
  };

  Red.prototype.shl = function shl (a, num) {
    this._verify1(a);
    return this.imod(a.ushln(num));
  };

  Red.prototype.imul = function imul (a, b) {
    this._verify2(a, b);
    return this.imod(a.imul(b));
  };

  Red.prototype.mul = function mul (a, b) {
    this._verify2(a, b);
    return this.imod(a.mul(b));
  };

  Red.prototype.isqr = function isqr (a) {
    return this.imul(a, a.clone());
  };

  Red.prototype.sqr = function sqr (a) {
    return this.mul(a, a);
  };

  Red.prototype.sqrt = function sqrt (a) {
    if (a.isZero()) return a.clone();

    var mod3 = this.m.andln(3);
    assert(mod3 % 2 === 1);

    // Fast case
    if (mod3 === 3) {
      var pow = this.m.add(new BN(1)).iushrn(2);
      return this.pow(a, pow);
    }

    // Tonelli-Shanks algorithm (Totally unoptimized and slow)
    //
    // Find Q and S, that Q * 2 ^ S = (P - 1)
    var q = this.m.subn(1);
    var s = 0;
    while (!q.isZero() && q.andln(1) === 0) {
      s++;
      q.iushrn(1);
    }
    assert(!q.isZero());

    var one = new BN(1).toRed(this);
    var nOne = one.redNeg();

    // Find quadratic non-residue
    // NOTE: Max is such because of generalized Riemann hypothesis.
    var lpow = this.m.subn(1).iushrn(1);
    var z = this.m.bitLength();
    z = new BN(2 * z * z).toRed(this);

    while (this.pow(z, lpow).cmp(nOne) !== 0) {
      z.redIAdd(nOne);
    }

    var c = this.pow(z, q);
    var r = this.pow(a, q.addn(1).iushrn(1));
    var t = this.pow(a, q);
    var m = s;
    while (t.cmp(one) !== 0) {
      var tmp = t;
      for (var i = 0; tmp.cmp(one) !== 0; i++) {
        tmp = tmp.redSqr();
      }
      assert(i < m);
      var b = this.pow(c, new BN(1).iushln(m - i - 1));

      r = r.redMul(b);
      c = b.redSqr();
      t = t.redMul(c);
      m = i;
    }

    return r;
  };

  Red.prototype.invm = function invm (a) {
    var inv = a._invmp(this.m);
    if (inv.negative !== 0) {
      inv.negative = 0;
      return this.imod(inv).redNeg();
    } else {
      return this.imod(inv);
    }
  };

  Red.prototype.pow = function pow (a, num) {
    if (num.isZero()) return new BN(1).toRed(this);
    if (num.cmpn(1) === 0) return a.clone();

    var windowSize = 4;
    var wnd = new Array(1 << windowSize);
    wnd[0] = new BN(1).toRed(this);
    wnd[1] = a;
    for (var i = 2; i < wnd.length; i++) {
      wnd[i] = this.mul(wnd[i - 1], a);
    }

    var res = wnd[0];
    var current = 0;
    var currentLen = 0;
    var start = num.bitLength() % 26;
    if (start === 0) {
      start = 26;
    }

    for (i = num.length - 1; i >= 0; i--) {
      var word = num.words[i];
      for (var j = start - 1; j >= 0; j--) {
        var bit = (word >> j) & 1;
        if (res !== wnd[0]) {
          res = this.sqr(res);
        }

        if (bit === 0 && current === 0) {
          currentLen = 0;
          continue;
        }

        current <<= 1;
        current |= bit;
        currentLen++;
        if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;

        res = this.mul(res, wnd[current]);
        currentLen = 0;
        current = 0;
      }
      start = 26;
    }

    return res;
  };

  Red.prototype.convertTo = function convertTo (num) {
    var r = num.umod(this.m);

    return r === num ? r.clone() : r;
  };

  Red.prototype.convertFrom = function convertFrom (num) {
    var res = num.clone();
    res.red = null;
    return res;
  };

  //
  // Montgomery method engine
  //

  BN.mont = function mont (num) {
    return new Mont(num);
  };

  function Mont (m) {
    Red.call(this, m);

    this.shift = this.m.bitLength();
    if (this.shift % 26 !== 0) {
      this.shift += 26 - (this.shift % 26);
    }

    this.r = new BN(1).iushln(this.shift);
    this.r2 = this.imod(this.r.sqr());
    this.rinv = this.r._invmp(this.m);

    this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
    this.minv = this.minv.umod(this.r);
    this.minv = this.r.sub(this.minv);
  }
  inherits(Mont, Red);

  Mont.prototype.convertTo = function convertTo (num) {
    return this.imod(num.ushln(this.shift));
  };

  Mont.prototype.convertFrom = function convertFrom (num) {
    var r = this.imod(num.mul(this.rinv));
    r.red = null;
    return r;
  };

  Mont.prototype.imul = function imul (a, b) {
    if (a.isZero() || b.isZero()) {
      a.words[0] = 0;
      a.length = 1;
      return a;
    }

    var t = a.imul(b);
    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    var u = t.isub(c).iushrn(this.shift);
    var res = u;

    if (u.cmp(this.m) >= 0) {
      res = u.isub(this.m);
    } else if (u.cmpn(0) < 0) {
      res = u.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Mont.prototype.mul = function mul (a, b) {
    if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);

    var t = a.mul(b);
    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    var u = t.isub(c).iushrn(this.shift);
    var res = u;
    if (u.cmp(this.m) >= 0) {
      res = u.isub(this.m);
    } else if (u.cmpn(0) < 0) {
      res = u.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Mont.prototype.invm = function invm (a) {
    // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
    var res = this.imod(a._invmp(this.m).mul(this.r2));
    return res._forceRed(this);
  };
})( false || module, this);


/***/ }),

/***/ 49419:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// browserify by default only pulls in files that are hard coded in requires
// In order of last to first in this file, the default wordlist will be chosen
// based on what is present. (Bundles may remove wordlists they don't need)
const wordlists = {};
exports.wordlists = wordlists;
let _default;
exports._default = _default;
try {
    exports._default = _default = __webpack_require__(8934);
    wordlists.czech = _default;
}
catch (err) { }
try {
    exports._default = _default = __webpack_require__(43386);
    wordlists.chinese_simplified = _default;
}
catch (err) { }
try {
    exports._default = _default = __webpack_require__(34253);
    wordlists.chinese_traditional = _default;
}
catch (err) { }
try {
    exports._default = _default = __webpack_require__(13517);
    wordlists.korean = _default;
}
catch (err) { }
try {
    exports._default = _default = __webpack_require__(51354);
    wordlists.french = _default;
}
catch (err) { }
try {
    exports._default = _default = __webpack_require__(83515);
    wordlists.italian = _default;
}
catch (err) { }
try {
    exports._default = _default = __webpack_require__(5043);
    wordlists.spanish = _default;
}
catch (err) { }
try {
    exports._default = _default = __webpack_require__(884);
    wordlists.japanese = _default;
    wordlists.JA = _default;
}
catch (err) { }
try {
    exports._default = _default = __webpack_require__(71066);
    wordlists.english = _default;
    wordlists.EN = _default;
}
catch (err) { }


/***/ }),

/***/ 36832:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48834)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
const createHash = __webpack_require__(16162);
const pbkdf2_1 = __webpack_require__(30499);
const randomBytes = __webpack_require__(95003);
const _wordlists_1 = __webpack_require__(49419);
let DEFAULT_WORDLIST = _wordlists_1._default;
const INVALID_MNEMONIC = 'Invalid mnemonic';
const INVALID_ENTROPY = 'Invalid entropy';
const INVALID_CHECKSUM = 'Invalid mnemonic checksum';
const WORDLIST_REQUIRED = 'A wordlist is required but a default could not be found.\n' +
    'Please explicitly pass a 2048 word array explicitly.';
function pbkdf2Promise(password, saltMixin, iterations, keylen, digest) {
    return Promise.resolve().then(() => new Promise((resolve, reject) => {
        const callback = (err, derivedKey) => {
            if (err) {
                return reject(err);
            }
            else {
                return resolve(derivedKey);
            }
        };
        pbkdf2_1.pbkdf2(password, saltMixin, iterations, keylen, digest, callback);
    }));
}
function normalize(str) {
    return (str || '').normalize('NFKD');
}
function lpad(str, padString, length) {
    while (str.length < length) {
        str = padString + str;
    }
    return str;
}
function binaryToByte(bin) {
    return parseInt(bin, 2);
}
function bytesToBinary(bytes) {
    return bytes.map((x) => lpad(x.toString(2), '0', 8)).join('');
}
function deriveChecksumBits(entropyBuffer) {
    const ENT = entropyBuffer.length * 8;
    const CS = ENT / 32;
    const hash = createHash('sha256')
        .update(entropyBuffer)
        .digest();
    return bytesToBinary(Array.from(hash)).slice(0, CS);
}
function salt(password) {
    return 'mnemonic' + (password || '');
}
function mnemonicToSeedSync(mnemonic, password) {
    const mnemonicBuffer = Buffer.from(normalize(mnemonic), 'utf8');
    const saltBuffer = Buffer.from(salt(normalize(password)), 'utf8');
    return pbkdf2_1.pbkdf2Sync(mnemonicBuffer, saltBuffer, 2048, 64, 'sha512');
}
exports.mnemonicToSeedSync = mnemonicToSeedSync;
function mnemonicToSeed(mnemonic, password) {
    return Promise.resolve().then(() => {
        const mnemonicBuffer = Buffer.from(normalize(mnemonic), 'utf8');
        const saltBuffer = Buffer.from(salt(normalize(password)), 'utf8');
        return pbkdf2Promise(mnemonicBuffer, saltBuffer, 2048, 64, 'sha512');
    });
}
exports.mnemonicToSeed = mnemonicToSeed;
function mnemonicToEntropy(mnemonic, wordlist) {
    wordlist = wordlist || DEFAULT_WORDLIST;
    if (!wordlist) {
        throw new Error(WORDLIST_REQUIRED);
    }
    const words = normalize(mnemonic).split(' ');
    if (words.length % 3 !== 0) {
        throw new Error(INVALID_MNEMONIC);
    }
    // convert word indices to 11 bit binary strings
    const bits = words
        .map((word) => {
        const index = wordlist.indexOf(word);
        if (index === -1) {
            throw new Error(INVALID_MNEMONIC);
        }
        return lpad(index.toString(2), '0', 11);
    })
        .join('');
    // split the binary string into ENT/CS
    const dividerIndex = Math.floor(bits.length / 33) * 32;
    const entropyBits = bits.slice(0, dividerIndex);
    const checksumBits = bits.slice(dividerIndex);
    // calculate the checksum and compare
    const entropyBytes = entropyBits.match(/(.{1,8})/g).map(binaryToByte);
    if (entropyBytes.length < 16) {
        throw new Error(INVALID_ENTROPY);
    }
    if (entropyBytes.length > 32) {
        throw new Error(INVALID_ENTROPY);
    }
    if (entropyBytes.length % 4 !== 0) {
        throw new Error(INVALID_ENTROPY);
    }
    const entropy = Buffer.from(entropyBytes);
    const newChecksum = deriveChecksumBits(entropy);
    if (newChecksum !== checksumBits) {
        throw new Error(INVALID_CHECKSUM);
    }
    return entropy.toString('hex');
}
exports.mnemonicToEntropy = mnemonicToEntropy;
function entropyToMnemonic(entropy, wordlist) {
    if (!Buffer.isBuffer(entropy)) {
        entropy = Buffer.from(entropy, 'hex');
    }
    wordlist = wordlist || DEFAULT_WORDLIST;
    if (!wordlist) {
        throw new Error(WORDLIST_REQUIRED);
    }
    // 128 <= ENT <= 256
    if (entropy.length < 16) {
        throw new TypeError(INVALID_ENTROPY);
    }
    if (entropy.length > 32) {
        throw new TypeError(INVALID_ENTROPY);
    }
    if (entropy.length % 4 !== 0) {
        throw new TypeError(INVALID_ENTROPY);
    }
    const entropyBits = bytesToBinary(Array.from(entropy));
    const checksumBits = deriveChecksumBits(entropy);
    const bits = entropyBits + checksumBits;
    const chunks = bits.match(/(.{1,11})/g);
    const words = chunks.map((binary) => {
        const index = binaryToByte(binary);
        return wordlist[index];
    });
    return wordlist[0] === '\u3042\u3044\u3053\u304f\u3057\u3093' // Japanese wordlist
        ? words.join('\u3000')
        : words.join(' ');
}
exports.entropyToMnemonic = entropyToMnemonic;
function generateMnemonic(strength, rng, wordlist) {
    strength = strength || 128;
    if (strength % 32 !== 0) {
        throw new TypeError(INVALID_ENTROPY);
    }
    rng = rng || randomBytes;
    return entropyToMnemonic(rng(strength / 8), wordlist);
}
exports.generateMnemonic = generateMnemonic;
function validateMnemonic(mnemonic, wordlist) {
    try {
        mnemonicToEntropy(mnemonic, wordlist);
    }
    catch (e) {
        return false;
    }
    return true;
}
exports.validateMnemonic = validateMnemonic;
function setDefaultWordlist(language) {
    const result = _wordlists_1.wordlists[language];
    if (result) {
        DEFAULT_WORDLIST = result;
    }
    else {
        throw new Error('Could not find wordlist for language "' + language + '"');
    }
}
exports.setDefaultWordlist = setDefaultWordlist;
function getDefaultWordlist() {
    if (!DEFAULT_WORDLIST) {
        throw new Error('No Default Wordlist set');
    }
    return Object.keys(_wordlists_1.wordlists).filter((lang) => {
        if (lang === 'JA' || lang === 'EN') {
            return false;
        }
        return _wordlists_1.wordlists[lang].every((word, index) => word === DEFAULT_WORDLIST[index]);
    })[0];
}
exports.getDefaultWordlist = getDefaultWordlist;
var _wordlists_2 = __webpack_require__(49419);
exports.wordlists = _wordlists_2.wordlists;


/***/ }),

/***/ 43386:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('["的","一","是","在","不","了","有","和","人","这","中","大","为","上","个","国","我","以","要","他","时","来","用","们","生","到","作","地","于","出","就","分","对","成","会","可","主","发","年","动","同","工","也","能","下","过","子","说","产","种","面","而","方","后","多","定","行","学","法","所","民","得","经","十","三","之","进","着","等","部","度","家","电","力","里","如","水","化","高","自","二","理","起","小","物","现","实","加","量","都","两","体","制","机","当","使","点","从","业","本","去","把","性","好","应","开","它","合","还","因","由","其","些","然","前","外","天","政","四","日","那","社","义","事","平","形","相","全","表","间","样","与","关","各","重","新","线","内","数","正","心","反","你","明","看","原","又","么","利","比","或","但","质","气","第","向","道","命","此","变","条","只","没","结","解","问","意","建","月","公","无","系","军","很","情","者","最","立","代","想","已","通","并","提","直","题","党","程","展","五","果","料","象","员","革","位","入","常","文","总","次","品","式","活","设","及","管","特","件","长","求","老","头","基","资","边","流","路","级","少","图","山","统","接","知","较","将","组","见","计","别","她","手","角","期","根","论","运","农","指","几","九","区","强","放","决","西","被","干","做","必","战","先","回","则","任","取","据","处","队","南","给","色","光","门","即","保","治","北","造","百","规","热","领","七","海","口","东","导","器","压","志","世","金","增","争","济","阶","油","思","术","极","交","受","联","什","认","六","共","权","收","证","改","清","美","再","采","转","更","单","风","切","打","白","教","速","花","带","安","场","身","车","例","真","务","具","万","每","目","至","达","走","积","示","议","声","报","斗","完","类","八","离","华","名","确","才","科","张","信","马","节","话","米","整","空","元","况","今","集","温","传","土","许","步","群","广","石","记","需","段","研","界","拉","林","律","叫","且","究","观","越","织","装","影","算","低","持","音","众","书","布","复","容","儿","须","际","商","非","验","连","断","深","难","近","矿","千","周","委","素","技","备","半","办","青","省","列","习","响","约","支","般","史","感","劳","便","团","往","酸","历","市","克","何","除","消","构","府","称","太","准","精","值","号","率","族","维","划","选","标","写","存","候","毛","亲","快","效","斯","院","查","江","型","眼","王","按","格","养","易","置","派","层","片","始","却","专","状","育","厂","京","识","适","属","圆","包","火","住","调","满","县","局","照","参","红","细","引","听","该","铁","价","严","首","底","液","官","德","随","病","苏","失","尔","死","讲","配","女","黄","推","显","谈","罪","神","艺","呢","席","含","企","望","密","批","营","项","防","举","球","英","氧","势","告","李","台","落","木","帮","轮","破","亚","师","围","注","远","字","材","排","供","河","态","封","另","施","减","树","溶","怎","止","案","言","士","均","武","固","叶","鱼","波","视","仅","费","紧","爱","左","章","早","朝","害","续","轻","服","试","食","充","兵","源","判","护","司","足","某","练","差","致","板","田","降","黑","犯","负","击","范","继","兴","似","余","坚","曲","输","修","故","城","夫","够","送","笔","船","占","右","财","吃","富","春","职","觉","汉","画","功","巴","跟","虽","杂","飞","检","吸","助","升","阳","互","初","创","抗","考","投","坏","策","古","径","换","未","跑","留","钢","曾","端","责","站","简","述","钱","副","尽","帝","射","草","冲","承","独","令","限","阿","宣","环","双","请","超","微","让","控","州","良","轴","找","否","纪","益","依","优","顶","础","载","倒","房","突","坐","粉","敌","略","客","袁","冷","胜","绝","析","块","剂","测","丝","协","诉","念","陈","仍","罗","盐","友","洋","错","苦","夜","刑","移","频","逐","靠","混","母","短","皮","终","聚","汽","村","云","哪","既","距","卫","停","烈","央","察","烧","迅","境","若","印","洲","刻","括","激","孔","搞","甚","室","待","核","校","散","侵","吧","甲","游","久","菜","味","旧","模","湖","货","损","预","阻","毫","普","稳","乙","妈","植","息","扩","银","语","挥","酒","守","拿","序","纸","医","缺","雨","吗","针","刘","啊","急","唱","误","训","愿","审","附","获","茶","鲜","粮","斤","孩","脱","硫","肥","善","龙","演","父","渐","血","欢","械","掌","歌","沙","刚","攻","谓","盾","讨","晚","粒","乱","燃","矛","乎","杀","药","宁","鲁","贵","钟","煤","读","班","伯","香","介","迫","句","丰","培","握","兰","担","弦","蛋","沉","假","穿","执","答","乐","谁","顺","烟","缩","征","脸","喜","松","脚","困","异","免","背","星","福","买","染","井","概","慢","怕","磁","倍","祖","皇","促","静","补","评","翻","肉","践","尼","衣","宽","扬","棉","希","伤","操","垂","秋","宜","氢","套","督","振","架","亮","末","宪","庆","编","牛","触","映","雷","销","诗","座","居","抓","裂","胞","呼","娘","景","威","绿","晶","厚","盟","衡","鸡","孙","延","危","胶","屋","乡","临","陆","顾","掉","呀","灯","岁","措","束","耐","剧","玉","赵","跳","哥","季","课","凯","胡","额","款","绍","卷","齐","伟","蒸","殖","永","宗","苗","川","炉","岩","弱","零","杨","奏","沿","露","杆","探","滑","镇","饭","浓","航","怀","赶","库","夺","伊","灵","税","途","灭","赛","归","召","鼓","播","盘","裁","险","康","唯","录","菌","纯","借","糖","盖","横","符","私","努","堂","域","枪","润","幅","哈","竟","熟","虫","泽","脑","壤","碳","欧","遍","侧","寨","敢","彻","虑","斜","薄","庭","纳","弹","饲","伸","折","麦","湿","暗","荷","瓦","塞","床","筑","恶","户","访","塔","奇","透","梁","刀","旋","迹","卡","氯","遇","份","毒","泥","退","洗","摆","灰","彩","卖","耗","夏","择","忙","铜","献","硬","予","繁","圈","雪","函","亦","抽","篇","阵","阴","丁","尺","追","堆","雄","迎","泛","爸","楼","避","谋","吨","野","猪","旗","累","偏","典","馆","索","秦","脂","潮","爷","豆","忽","托","惊","塑","遗","愈","朱","替","纤","粗","倾","尚","痛","楚","谢","奋","购","磨","君","池","旁","碎","骨","监","捕","弟","暴","割","贯","殊","释","词","亡","壁","顿","宝","午","尘","闻","揭","炮","残","冬","桥","妇","警","综","招","吴","付","浮","遭","徐","您","摇","谷","赞","箱","隔","订","男","吹","园","纷","唐","败","宋","玻","巨","耕","坦","荣","闭","湾","键","凡","驻","锅","救","恩","剥","凝","碱","齿","截","炼","麻","纺","禁","废","盛","版","缓","净","睛","昌","婚","涉","筒","嘴","插","岸","朗","庄","街","藏","姑","贸","腐","奴","啦","惯","乘","伙","恢","匀","纱","扎","辩","耳","彪","臣","亿","璃","抵","脉","秀","萨","俄","网","舞","店","喷","纵","寸","汗","挂","洪","贺","闪","柬","爆","烯","津","稻","墙","软","勇","像","滚","厘","蒙","芳","肯","坡","柱","荡","腿","仪","旅","尾","轧","冰","贡","登","黎","削","钻","勒","逃","障","氨","郭","峰","币","港","伏","轨","亩","毕","擦","莫","刺","浪","秘","援","株","健","售","股","岛","甘","泡","睡","童","铸","汤","阀","休","汇","舍","牧","绕","炸","哲","磷","绩","朋","淡","尖","启","陷","柴","呈","徒","颜","泪","稍","忘","泵","蓝","拖","洞","授","镜","辛","壮","锋","贫","虚","弯","摩","泰","幼","廷","尊","窗","纲","弄","隶","疑","氏","宫","姐","震","瑞","怪","尤","琴","循","描","膜","违","夹","腰","缘","珠","穷","森","枝","竹","沟","催","绳","忆","邦","剩","幸","浆","栏","拥","牙","贮","礼","滤","钠","纹","罢","拍","咱","喊","袖","埃","勤","罚","焦","潜","伍","墨","欲","缝","姓","刊","饱","仿","奖","铝","鬼","丽","跨","默","挖","链","扫","喝","袋","炭","污","幕","诸","弧","励","梅","奶","洁","灾","舟","鉴","苯","讼","抱","毁","懂","寒","智","埔","寄","届","跃","渡","挑","丹","艰","贝","碰","拔","爹","戴","码","梦","芽","熔","赤","渔","哭","敬","颗","奔","铅","仲","虎","稀","妹","乏","珍","申","桌","遵","允","隆","螺","仓","魏","锐","晓","氮","兼","隐","碍","赫","拨","忠","肃","缸","牵","抢","博","巧","壳","兄","杜","讯","诚","碧","祥","柯","页","巡","矩","悲","灌","龄","伦","票","寻","桂","铺","圣","恐","恰","郑","趣","抬","荒","腾","贴","柔","滴","猛","阔","辆","妻","填","撤","储","签","闹","扰","紫","砂","递","戏","吊","陶","伐","喂","疗","瓶","婆","抚","臂","摸","忍","虾","蜡","邻","胸","巩","挤","偶","弃","槽","劲","乳","邓","吉","仁","烂","砖","租","乌","舰","伴","瓜","浅","丙","暂","燥","橡","柳","迷","暖","牌","秧","胆","详","簧","踏","瓷","谱","呆","宾","糊","洛","辉","愤","竞","隙","怒","粘","乃","绪","肩","籍","敏","涂","熙","皆","侦","悬","掘","享","纠","醒","狂","锁","淀","恨","牲","霸","爬","赏","逆","玩","陵","祝","秒","浙","貌","役","彼","悉","鸭","趋","凤","晨","畜","辈","秩","卵","署","梯","炎","滩","棋","驱","筛","峡","冒","啥","寿","译","浸","泉","帽","迟","硅","疆","贷","漏","稿","冠","嫩","胁","芯","牢","叛","蚀","奥","鸣","岭","羊","凭","串","塘","绘","酵","融","盆","锡","庙","筹","冻","辅","摄","袭","筋","拒","僚","旱","钾","鸟","漆","沈","眉","疏","添","棒","穗","硝","韩","逼","扭","侨","凉","挺","碗","栽","炒","杯","患","馏","劝","豪","辽","勃","鸿","旦","吏","拜","狗","埋","辊","掩","饮","搬","骂","辞","勾","扣","估","蒋","绒","雾","丈","朵","姆","拟","宇","辑","陕","雕","偿","蓄","崇","剪","倡","厅","咬","驶","薯","刷","斥","番","赋","奉","佛","浇","漫","曼","扇","钙","桃","扶","仔","返","俗","亏","腔","鞋","棱","覆","框","悄","叔","撞","骗","勘","旺","沸","孤","吐","孟","渠","屈","疾","妙","惜","仰","狠","胀","谐","抛","霉","桑","岗","嘛","衰","盗","渗","脏","赖","涌","甜","曹","阅","肌","哩","厉","烃","纬","毅","昨","伪","症","煮","叹","钉","搭","茎","笼","酷","偷","弓","锥","恒","杰","坑","鼻","翼","纶","叙","狱","逮","罐","络","棚","抑","膨","蔬","寺","骤","穆","冶","枯","册","尸","凸","绅","坯","牺","焰","轰","欣","晋","瘦","御","锭","锦","丧","旬","锻","垄","搜","扑","邀","亭","酯","迈","舒","脆","酶","闲","忧","酚","顽","羽","涨","卸","仗","陪","辟","惩","杭","姚","肚","捉","飘","漂","昆","欺","吾","郎","烷","汁","呵","饰","萧","雅","邮","迁","燕","撒","姻","赴","宴","烦","债","帐","斑","铃","旨","醇","董","饼","雏","姿","拌","傅","腹","妥","揉","贤","拆","歪","葡","胺","丢","浩","徽","昂","垫","挡","览","贪","慰","缴","汪","慌","冯","诺","姜","谊","凶","劣","诬","耀","昏","躺","盈","骑","乔","溪","丛","卢","抹","闷","咨","刮","驾","缆","悟","摘","铒","掷","颇","幻","柄","惠","惨","佳","仇","腊","窝","涤","剑","瞧","堡","泼","葱","罩","霍","捞","胎","苍","滨","俩","捅","湘","砍","霞","邵","萄","疯","淮","遂","熊","粪","烘","宿","档","戈","驳","嫂","裕","徙","箭","捐","肠","撑","晒","辨","殿","莲","摊","搅","酱","屏","疫","哀","蔡","堵","沫","皱","畅","叠","阁","莱","敲","辖","钩","痕","坝","巷","饿","祸","丘","玄","溜","曰","逻","彭","尝","卿","妨","艇","吞","韦","怨","矮","歇"]');

/***/ }),

/***/ 34253:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('["的","一","是","在","不","了","有","和","人","這","中","大","為","上","個","國","我","以","要","他","時","來","用","們","生","到","作","地","於","出","就","分","對","成","會","可","主","發","年","動","同","工","也","能","下","過","子","說","產","種","面","而","方","後","多","定","行","學","法","所","民","得","經","十","三","之","進","著","等","部","度","家","電","力","裡","如","水","化","高","自","二","理","起","小","物","現","實","加","量","都","兩","體","制","機","當","使","點","從","業","本","去","把","性","好","應","開","它","合","還","因","由","其","些","然","前","外","天","政","四","日","那","社","義","事","平","形","相","全","表","間","樣","與","關","各","重","新","線","內","數","正","心","反","你","明","看","原","又","麼","利","比","或","但","質","氣","第","向","道","命","此","變","條","只","沒","結","解","問","意","建","月","公","無","系","軍","很","情","者","最","立","代","想","已","通","並","提","直","題","黨","程","展","五","果","料","象","員","革","位","入","常","文","總","次","品","式","活","設","及","管","特","件","長","求","老","頭","基","資","邊","流","路","級","少","圖","山","統","接","知","較","將","組","見","計","別","她","手","角","期","根","論","運","農","指","幾","九","區","強","放","決","西","被","幹","做","必","戰","先","回","則","任","取","據","處","隊","南","給","色","光","門","即","保","治","北","造","百","規","熱","領","七","海","口","東","導","器","壓","志","世","金","增","爭","濟","階","油","思","術","極","交","受","聯","什","認","六","共","權","收","證","改","清","美","再","採","轉","更","單","風","切","打","白","教","速","花","帶","安","場","身","車","例","真","務","具","萬","每","目","至","達","走","積","示","議","聲","報","鬥","完","類","八","離","華","名","確","才","科","張","信","馬","節","話","米","整","空","元","況","今","集","溫","傳","土","許","步","群","廣","石","記","需","段","研","界","拉","林","律","叫","且","究","觀","越","織","裝","影","算","低","持","音","眾","書","布","复","容","兒","須","際","商","非","驗","連","斷","深","難","近","礦","千","週","委","素","技","備","半","辦","青","省","列","習","響","約","支","般","史","感","勞","便","團","往","酸","歷","市","克","何","除","消","構","府","稱","太","準","精","值","號","率","族","維","劃","選","標","寫","存","候","毛","親","快","效","斯","院","查","江","型","眼","王","按","格","養","易","置","派","層","片","始","卻","專","狀","育","廠","京","識","適","屬","圓","包","火","住","調","滿","縣","局","照","參","紅","細","引","聽","該","鐵","價","嚴","首","底","液","官","德","隨","病","蘇","失","爾","死","講","配","女","黃","推","顯","談","罪","神","藝","呢","席","含","企","望","密","批","營","項","防","舉","球","英","氧","勢","告","李","台","落","木","幫","輪","破","亞","師","圍","注","遠","字","材","排","供","河","態","封","另","施","減","樹","溶","怎","止","案","言","士","均","武","固","葉","魚","波","視","僅","費","緊","愛","左","章","早","朝","害","續","輕","服","試","食","充","兵","源","判","護","司","足","某","練","差","致","板","田","降","黑","犯","負","擊","范","繼","興","似","餘","堅","曲","輸","修","故","城","夫","夠","送","筆","船","佔","右","財","吃","富","春","職","覺","漢","畫","功","巴","跟","雖","雜","飛","檢","吸","助","昇","陽","互","初","創","抗","考","投","壞","策","古","徑","換","未","跑","留","鋼","曾","端","責","站","簡","述","錢","副","盡","帝","射","草","衝","承","獨","令","限","阿","宣","環","雙","請","超","微","讓","控","州","良","軸","找","否","紀","益","依","優","頂","礎","載","倒","房","突","坐","粉","敵","略","客","袁","冷","勝","絕","析","塊","劑","測","絲","協","訴","念","陳","仍","羅","鹽","友","洋","錯","苦","夜","刑","移","頻","逐","靠","混","母","短","皮","終","聚","汽","村","雲","哪","既","距","衛","停","烈","央","察","燒","迅","境","若","印","洲","刻","括","激","孔","搞","甚","室","待","核","校","散","侵","吧","甲","遊","久","菜","味","舊","模","湖","貨","損","預","阻","毫","普","穩","乙","媽","植","息","擴","銀","語","揮","酒","守","拿","序","紙","醫","缺","雨","嗎","針","劉","啊","急","唱","誤","訓","願","審","附","獲","茶","鮮","糧","斤","孩","脫","硫","肥","善","龍","演","父","漸","血","歡","械","掌","歌","沙","剛","攻","謂","盾","討","晚","粒","亂","燃","矛","乎","殺","藥","寧","魯","貴","鐘","煤","讀","班","伯","香","介","迫","句","豐","培","握","蘭","擔","弦","蛋","沉","假","穿","執","答","樂","誰","順","煙","縮","徵","臉","喜","松","腳","困","異","免","背","星","福","買","染","井","概","慢","怕","磁","倍","祖","皇","促","靜","補","評","翻","肉","踐","尼","衣","寬","揚","棉","希","傷","操","垂","秋","宜","氫","套","督","振","架","亮","末","憲","慶","編","牛","觸","映","雷","銷","詩","座","居","抓","裂","胞","呼","娘","景","威","綠","晶","厚","盟","衡","雞","孫","延","危","膠","屋","鄉","臨","陸","顧","掉","呀","燈","歲","措","束","耐","劇","玉","趙","跳","哥","季","課","凱","胡","額","款","紹","卷","齊","偉","蒸","殖","永","宗","苗","川","爐","岩","弱","零","楊","奏","沿","露","桿","探","滑","鎮","飯","濃","航","懷","趕","庫","奪","伊","靈","稅","途","滅","賽","歸","召","鼓","播","盤","裁","險","康","唯","錄","菌","純","借","糖","蓋","橫","符","私","努","堂","域","槍","潤","幅","哈","竟","熟","蟲","澤","腦","壤","碳","歐","遍","側","寨","敢","徹","慮","斜","薄","庭","納","彈","飼","伸","折","麥","濕","暗","荷","瓦","塞","床","築","惡","戶","訪","塔","奇","透","梁","刀","旋","跡","卡","氯","遇","份","毒","泥","退","洗","擺","灰","彩","賣","耗","夏","擇","忙","銅","獻","硬","予","繁","圈","雪","函","亦","抽","篇","陣","陰","丁","尺","追","堆","雄","迎","泛","爸","樓","避","謀","噸","野","豬","旗","累","偏","典","館","索","秦","脂","潮","爺","豆","忽","托","驚","塑","遺","愈","朱","替","纖","粗","傾","尚","痛","楚","謝","奮","購","磨","君","池","旁","碎","骨","監","捕","弟","暴","割","貫","殊","釋","詞","亡","壁","頓","寶","午","塵","聞","揭","炮","殘","冬","橋","婦","警","綜","招","吳","付","浮","遭","徐","您","搖","谷","贊","箱","隔","訂","男","吹","園","紛","唐","敗","宋","玻","巨","耕","坦","榮","閉","灣","鍵","凡","駐","鍋","救","恩","剝","凝","鹼","齒","截","煉","麻","紡","禁","廢","盛","版","緩","淨","睛","昌","婚","涉","筒","嘴","插","岸","朗","莊","街","藏","姑","貿","腐","奴","啦","慣","乘","夥","恢","勻","紗","扎","辯","耳","彪","臣","億","璃","抵","脈","秀","薩","俄","網","舞","店","噴","縱","寸","汗","掛","洪","賀","閃","柬","爆","烯","津","稻","牆","軟","勇","像","滾","厘","蒙","芳","肯","坡","柱","盪","腿","儀","旅","尾","軋","冰","貢","登","黎","削","鑽","勒","逃","障","氨","郭","峰","幣","港","伏","軌","畝","畢","擦","莫","刺","浪","秘","援","株","健","售","股","島","甘","泡","睡","童","鑄","湯","閥","休","匯","舍","牧","繞","炸","哲","磷","績","朋","淡","尖","啟","陷","柴","呈","徒","顏","淚","稍","忘","泵","藍","拖","洞","授","鏡","辛","壯","鋒","貧","虛","彎","摩","泰","幼","廷","尊","窗","綱","弄","隸","疑","氏","宮","姐","震","瑞","怪","尤","琴","循","描","膜","違","夾","腰","緣","珠","窮","森","枝","竹","溝","催","繩","憶","邦","剩","幸","漿","欄","擁","牙","貯","禮","濾","鈉","紋","罷","拍","咱","喊","袖","埃","勤","罰","焦","潛","伍","墨","欲","縫","姓","刊","飽","仿","獎","鋁","鬼","麗","跨","默","挖","鏈","掃","喝","袋","炭","污","幕","諸","弧","勵","梅","奶","潔","災","舟","鑑","苯","訟","抱","毀","懂","寒","智","埔","寄","屆","躍","渡","挑","丹","艱","貝","碰","拔","爹","戴","碼","夢","芽","熔","赤","漁","哭","敬","顆","奔","鉛","仲","虎","稀","妹","乏","珍","申","桌","遵","允","隆","螺","倉","魏","銳","曉","氮","兼","隱","礙","赫","撥","忠","肅","缸","牽","搶","博","巧","殼","兄","杜","訊","誠","碧","祥","柯","頁","巡","矩","悲","灌","齡","倫","票","尋","桂","鋪","聖","恐","恰","鄭","趣","抬","荒","騰","貼","柔","滴","猛","闊","輛","妻","填","撤","儲","簽","鬧","擾","紫","砂","遞","戲","吊","陶","伐","餵","療","瓶","婆","撫","臂","摸","忍","蝦","蠟","鄰","胸","鞏","擠","偶","棄","槽","勁","乳","鄧","吉","仁","爛","磚","租","烏","艦","伴","瓜","淺","丙","暫","燥","橡","柳","迷","暖","牌","秧","膽","詳","簧","踏","瓷","譜","呆","賓","糊","洛","輝","憤","競","隙","怒","粘","乃","緒","肩","籍","敏","塗","熙","皆","偵","懸","掘","享","糾","醒","狂","鎖","淀","恨","牲","霸","爬","賞","逆","玩","陵","祝","秒","浙","貌","役","彼","悉","鴨","趨","鳳","晨","畜","輩","秩","卵","署","梯","炎","灘","棋","驅","篩","峽","冒","啥","壽","譯","浸","泉","帽","遲","矽","疆","貸","漏","稿","冠","嫩","脅","芯","牢","叛","蝕","奧","鳴","嶺","羊","憑","串","塘","繪","酵","融","盆","錫","廟","籌","凍","輔","攝","襲","筋","拒","僚","旱","鉀","鳥","漆","沈","眉","疏","添","棒","穗","硝","韓","逼","扭","僑","涼","挺","碗","栽","炒","杯","患","餾","勸","豪","遼","勃","鴻","旦","吏","拜","狗","埋","輥","掩","飲","搬","罵","辭","勾","扣","估","蔣","絨","霧","丈","朵","姆","擬","宇","輯","陝","雕","償","蓄","崇","剪","倡","廳","咬","駛","薯","刷","斥","番","賦","奉","佛","澆","漫","曼","扇","鈣","桃","扶","仔","返","俗","虧","腔","鞋","棱","覆","框","悄","叔","撞","騙","勘","旺","沸","孤","吐","孟","渠","屈","疾","妙","惜","仰","狠","脹","諧","拋","黴","桑","崗","嘛","衰","盜","滲","臟","賴","湧","甜","曹","閱","肌","哩","厲","烴","緯","毅","昨","偽","症","煮","嘆","釘","搭","莖","籠","酷","偷","弓","錐","恆","傑","坑","鼻","翼","綸","敘","獄","逮","罐","絡","棚","抑","膨","蔬","寺","驟","穆","冶","枯","冊","屍","凸","紳","坯","犧","焰","轟","欣","晉","瘦","禦","錠","錦","喪","旬","鍛","壟","搜","撲","邀","亭","酯","邁","舒","脆","酶","閒","憂","酚","頑","羽","漲","卸","仗","陪","闢","懲","杭","姚","肚","捉","飄","漂","昆","欺","吾","郎","烷","汁","呵","飾","蕭","雅","郵","遷","燕","撒","姻","赴","宴","煩","債","帳","斑","鈴","旨","醇","董","餅","雛","姿","拌","傅","腹","妥","揉","賢","拆","歪","葡","胺","丟","浩","徽","昂","墊","擋","覽","貪","慰","繳","汪","慌","馮","諾","姜","誼","兇","劣","誣","耀","昏","躺","盈","騎","喬","溪","叢","盧","抹","悶","諮","刮","駕","纜","悟","摘","鉺","擲","頗","幻","柄","惠","慘","佳","仇","臘","窩","滌","劍","瞧","堡","潑","蔥","罩","霍","撈","胎","蒼","濱","倆","捅","湘","砍","霞","邵","萄","瘋","淮","遂","熊","糞","烘","宿","檔","戈","駁","嫂","裕","徙","箭","捐","腸","撐","曬","辨","殿","蓮","攤","攪","醬","屏","疫","哀","蔡","堵","沫","皺","暢","疊","閣","萊","敲","轄","鉤","痕","壩","巷","餓","禍","丘","玄","溜","曰","邏","彭","嘗","卿","妨","艇","吞","韋","怨","矮","歇"]');

/***/ }),

/***/ 8934:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('["abdikace","abeceda","adresa","agrese","akce","aktovka","alej","alkohol","amputace","ananas","andulka","anekdota","anketa","antika","anulovat","archa","arogance","asfalt","asistent","aspirace","astma","astronom","atlas","atletika","atol","autobus","azyl","babka","bachor","bacil","baculka","badatel","bageta","bagr","bahno","bakterie","balada","baletka","balkon","balonek","balvan","balza","bambus","bankomat","barbar","baret","barman","baroko","barva","baterka","batoh","bavlna","bazalka","bazilika","bazuka","bedna","beran","beseda","bestie","beton","bezinka","bezmoc","beztak","bicykl","bidlo","biftek","bikiny","bilance","biograf","biolog","bitva","bizon","blahobyt","blatouch","blecha","bledule","blesk","blikat","blizna","blokovat","bloudit","blud","bobek","bobr","bodlina","bodnout","bohatost","bojkot","bojovat","bokorys","bolest","borec","borovice","bota","boubel","bouchat","bouda","boule","bourat","boxer","bradavka","brambora","branka","bratr","brepta","briketa","brko","brloh","bronz","broskev","brunetka","brusinka","brzda","brzy","bublina","bubnovat","buchta","buditel","budka","budova","bufet","bujarost","bukvice","buldok","bulva","bunda","bunkr","burza","butik","buvol","buzola","bydlet","bylina","bytovka","bzukot","capart","carevna","cedr","cedule","cejch","cejn","cela","celer","celkem","celnice","cenina","cennost","cenovka","centrum","cenzor","cestopis","cetka","chalupa","chapadlo","charita","chata","chechtat","chemie","chichot","chirurg","chlad","chleba","chlubit","chmel","chmura","chobot","chochol","chodba","cholera","chomout","chopit","choroba","chov","chrapot","chrlit","chrt","chrup","chtivost","chudina","chutnat","chvat","chvilka","chvost","chyba","chystat","chytit","cibule","cigareta","cihelna","cihla","cinkot","cirkus","cisterna","citace","citrus","cizinec","cizost","clona","cokoliv","couvat","ctitel","ctnost","cudnost","cuketa","cukr","cupot","cvaknout","cval","cvik","cvrkot","cyklista","daleko","dareba","datel","datum","dcera","debata","dechovka","decibel","deficit","deflace","dekl","dekret","demokrat","deprese","derby","deska","detektiv","dikobraz","diktovat","dioda","diplom","disk","displej","divadlo","divoch","dlaha","dlouho","dluhopis","dnes","dobro","dobytek","docent","dochutit","dodnes","dohled","dohoda","dohra","dojem","dojnice","doklad","dokola","doktor","dokument","dolar","doleva","dolina","doma","dominant","domluvit","domov","donutit","dopad","dopis","doplnit","doposud","doprovod","dopustit","dorazit","dorost","dort","dosah","doslov","dostatek","dosud","dosyta","dotaz","dotek","dotknout","doufat","doutnat","dovozce","dozadu","doznat","dozorce","drahota","drak","dramatik","dravec","draze","drdol","drobnost","drogerie","drozd","drsnost","drtit","drzost","duben","duchovno","dudek","duha","duhovka","dusit","dusno","dutost","dvojice","dvorec","dynamit","ekolog","ekonomie","elektron","elipsa","email","emise","emoce","empatie","epizoda","epocha","epopej","epos","esej","esence","eskorta","eskymo","etiketa","euforie","evoluce","exekuce","exkurze","expedice","exploze","export","extrakt","facka","fajfka","fakulta","fanatik","fantazie","farmacie","favorit","fazole","federace","fejeton","fenka","fialka","figurant","filozof","filtr","finance","finta","fixace","fjord","flanel","flirt","flotila","fond","fosfor","fotbal","fotka","foton","frakce","freska","fronta","fukar","funkce","fyzika","galeje","garant","genetika","geolog","gilotina","glazura","glejt","golem","golfista","gotika","graf","gramofon","granule","grep","gril","grog","groteska","guma","hadice","hadr","hala","halenka","hanba","hanopis","harfa","harpuna","havran","hebkost","hejkal","hejno","hejtman","hektar","helma","hematom","herec","herna","heslo","hezky","historik","hladovka","hlasivky","hlava","hledat","hlen","hlodavec","hloh","hloupost","hltat","hlubina","hluchota","hmat","hmota","hmyz","hnis","hnojivo","hnout","hoblina","hoboj","hoch","hodiny","hodlat","hodnota","hodovat","hojnost","hokej","holinka","holka","holub","homole","honitba","honorace","horal","horda","horizont","horko","horlivec","hormon","hornina","horoskop","horstvo","hospoda","hostina","hotovost","houba","houf","houpat","houska","hovor","hradba","hranice","hravost","hrazda","hrbolek","hrdina","hrdlo","hrdost","hrnek","hrobka","hromada","hrot","hrouda","hrozen","hrstka","hrubost","hryzat","hubenost","hubnout","hudba","hukot","humr","husita","hustota","hvozd","hybnost","hydrant","hygiena","hymna","hysterik","idylka","ihned","ikona","iluze","imunita","infekce","inflace","inkaso","inovace","inspekce","internet","invalida","investor","inzerce","ironie","jablko","jachta","jahoda","jakmile","jakost","jalovec","jantar","jarmark","jaro","jasan","jasno","jatka","javor","jazyk","jedinec","jedle","jednatel","jehlan","jekot","jelen","jelito","jemnost","jenom","jepice","jeseter","jevit","jezdec","jezero","jinak","jindy","jinoch","jiskra","jistota","jitrnice","jizva","jmenovat","jogurt","jurta","kabaret","kabel","kabinet","kachna","kadet","kadidlo","kahan","kajak","kajuta","kakao","kaktus","kalamita","kalhoty","kalibr","kalnost","kamera","kamkoliv","kamna","kanibal","kanoe","kantor","kapalina","kapela","kapitola","kapka","kaple","kapota","kapr","kapusta","kapybara","karamel","karotka","karton","kasa","katalog","katedra","kauce","kauza","kavalec","kazajka","kazeta","kazivost","kdekoliv","kdesi","kedluben","kemp","keramika","kino","klacek","kladivo","klam","klapot","klasika","klaun","klec","klenba","klepat","klesnout","klid","klima","klisna","klobouk","klokan","klopa","kloub","klubovna","klusat","kluzkost","kmen","kmitat","kmotr","kniha","knot","koalice","koberec","kobka","kobliha","kobyla","kocour","kohout","kojenec","kokos","koktejl","kolaps","koleda","kolize","kolo","komando","kometa","komik","komnata","komora","kompas","komunita","konat","koncept","kondice","konec","konfese","kongres","konina","konkurs","kontakt","konzerva","kopanec","kopie","kopnout","koprovka","korbel","korektor","kormidlo","koroptev","korpus","koruna","koryto","korzet","kosatec","kostka","kotel","kotleta","kotoul","koukat","koupelna","kousek","kouzlo","kovboj","koza","kozoroh","krabice","krach","krajina","kralovat","krasopis","kravata","kredit","krejcar","kresba","kreveta","kriket","kritik","krize","krkavec","krmelec","krmivo","krocan","krok","kronika","kropit","kroupa","krovka","krtek","kruhadlo","krupice","krutost","krvinka","krychle","krypta","krystal","kryt","kudlanka","kufr","kujnost","kukla","kulajda","kulich","kulka","kulomet","kultura","kuna","kupodivu","kurt","kurzor","kutil","kvalita","kvasinka","kvestor","kynolog","kyselina","kytara","kytice","kytka","kytovec","kyvadlo","labrador","lachtan","ladnost","laik","lakomec","lamela","lampa","lanovka","lasice","laso","lastura","latinka","lavina","lebka","leckdy","leden","lednice","ledovka","ledvina","legenda","legie","legrace","lehce","lehkost","lehnout","lektvar","lenochod","lentilka","lepenka","lepidlo","letadlo","letec","letmo","letokruh","levhart","levitace","levobok","libra","lichotka","lidojed","lidskost","lihovina","lijavec","lilek","limetka","linie","linka","linoleum","listopad","litina","litovat","lobista","lodivod","logika","logoped","lokalita","loket","lomcovat","lopata","lopuch","lord","losos","lotr","loudal","louh","louka","louskat","lovec","lstivost","lucerna","lucifer","lump","lusk","lustrace","lvice","lyra","lyrika","lysina","madam","madlo","magistr","mahagon","majetek","majitel","majorita","makak","makovice","makrela","malba","malina","malovat","malvice","maminka","mandle","manko","marnost","masakr","maskot","masopust","matice","matrika","maturita","mazanec","mazivo","mazlit","mazurka","mdloba","mechanik","meditace","medovina","melasa","meloun","mentolka","metla","metoda","metr","mezera","migrace","mihnout","mihule","mikina","mikrofon","milenec","milimetr","milost","mimika","mincovna","minibar","minomet","minulost","miska","mistr","mixovat","mladost","mlha","mlhovina","mlok","mlsat","mluvit","mnich","mnohem","mobil","mocnost","modelka","modlitba","mohyla","mokro","molekula","momentka","monarcha","monokl","monstrum","montovat","monzun","mosaz","moskyt","most","motivace","motorka","motyka","moucha","moudrost","mozaika","mozek","mozol","mramor","mravenec","mrkev","mrtvola","mrzet","mrzutost","mstitel","mudrc","muflon","mulat","mumie","munice","muset","mutace","muzeum","muzikant","myslivec","mzda","nabourat","nachytat","nadace","nadbytek","nadhoz","nadobro","nadpis","nahlas","nahnat","nahodile","nahradit","naivita","najednou","najisto","najmout","naklonit","nakonec","nakrmit","nalevo","namazat","namluvit","nanometr","naoko","naopak","naostro","napadat","napevno","naplnit","napnout","naposled","naprosto","narodit","naruby","narychlo","nasadit","nasekat","naslepo","nastat","natolik","navenek","navrch","navzdory","nazvat","nebe","nechat","necky","nedaleko","nedbat","neduh","negace","nehet","nehoda","nejen","nejprve","neklid","nelibost","nemilost","nemoc","neochota","neonka","nepokoj","nerost","nerv","nesmysl","nesoulad","netvor","neuron","nevina","nezvykle","nicota","nijak","nikam","nikdy","nikl","nikterak","nitro","nocleh","nohavice","nominace","nora","norek","nositel","nosnost","nouze","noviny","novota","nozdra","nuda","nudle","nuget","nutit","nutnost","nutrie","nymfa","obal","obarvit","obava","obdiv","obec","obehnat","obejmout","obezita","obhajoba","obilnice","objasnit","objekt","obklopit","oblast","oblek","obliba","obloha","obluda","obnos","obohatit","obojek","obout","obrazec","obrna","obruba","obrys","obsah","obsluha","obstarat","obuv","obvaz","obvinit","obvod","obvykle","obyvatel","obzor","ocas","ocel","ocenit","ochladit","ochota","ochrana","ocitnout","odboj","odbyt","odchod","odcizit","odebrat","odeslat","odevzdat","odezva","odhadce","odhodit","odjet","odjinud","odkaz","odkoupit","odliv","odluka","odmlka","odolnost","odpad","odpis","odplout","odpor","odpustit","odpykat","odrazka","odsoudit","odstup","odsun","odtok","odtud","odvaha","odveta","odvolat","odvracet","odznak","ofina","ofsajd","ohlas","ohnisko","ohrada","ohrozit","ohryzek","okap","okenice","oklika","okno","okouzlit","okovy","okrasa","okres","okrsek","okruh","okupant","okurka","okusit","olejnina","olizovat","omak","omeleta","omezit","omladina","omlouvat","omluva","omyl","onehdy","opakovat","opasek","operace","opice","opilost","opisovat","opora","opozice","opravdu","oproti","orbital","orchestr","orgie","orlice","orloj","ortel","osada","oschnout","osika","osivo","oslava","oslepit","oslnit","oslovit","osnova","osoba","osolit","ospalec","osten","ostraha","ostuda","ostych","osvojit","oteplit","otisk","otop","otrhat","otrlost","otrok","otruby","otvor","ovanout","ovar","oves","ovlivnit","ovoce","oxid","ozdoba","pachatel","pacient","padouch","pahorek","pakt","palanda","palec","palivo","paluba","pamflet","pamlsek","panenka","panika","panna","panovat","panstvo","pantofle","paprika","parketa","parodie","parta","paruka","paryba","paseka","pasivita","pastelka","patent","patrona","pavouk","pazneht","pazourek","pecka","pedagog","pejsek","peklo","peloton","penalta","pendrek","penze","periskop","pero","pestrost","petarda","petice","petrolej","pevnina","pexeso","pianista","piha","pijavice","pikle","piknik","pilina","pilnost","pilulka","pinzeta","pipeta","pisatel","pistole","pitevna","pivnice","pivovar","placenta","plakat","plamen","planeta","plastika","platit","plavidlo","plaz","plech","plemeno","plenta","ples","pletivo","plevel","plivat","plnit","plno","plocha","plodina","plomba","plout","pluk","plyn","pobavit","pobyt","pochod","pocit","poctivec","podat","podcenit","podepsat","podhled","podivit","podklad","podmanit","podnik","podoba","podpora","podraz","podstata","podvod","podzim","poezie","pohanka","pohnutka","pohovor","pohroma","pohyb","pointa","pojistka","pojmout","pokazit","pokles","pokoj","pokrok","pokuta","pokyn","poledne","polibek","polknout","poloha","polynom","pomalu","pominout","pomlka","pomoc","pomsta","pomyslet","ponechat","ponorka","ponurost","popadat","popel","popisek","poplach","poprosit","popsat","popud","poradce","porce","porod","porucha","poryv","posadit","posed","posila","poskok","poslanec","posoudit","pospolu","postava","posudek","posyp","potah","potkan","potlesk","potomek","potrava","potupa","potvora","poukaz","pouto","pouzdro","povaha","povidla","povlak","povoz","povrch","povstat","povyk","povzdech","pozdrav","pozemek","poznatek","pozor","pozvat","pracovat","prahory","praktika","prales","praotec","praporek","prase","pravda","princip","prkno","probudit","procento","prodej","profese","prohra","projekt","prolomit","promile","pronikat","propad","prorok","prosba","proton","proutek","provaz","prskavka","prsten","prudkost","prut","prvek","prvohory","psanec","psovod","pstruh","ptactvo","puberta","puch","pudl","pukavec","puklina","pukrle","pult","pumpa","punc","pupen","pusa","pusinka","pustina","putovat","putyka","pyramida","pysk","pytel","racek","rachot","radiace","radnice","radon","raft","ragby","raketa","rakovina","rameno","rampouch","rande","rarach","rarita","rasovna","rastr","ratolest","razance","razidlo","reagovat","reakce","recept","redaktor","referent","reflex","rejnok","reklama","rekord","rekrut","rektor","reputace","revize","revma","revolver","rezerva","riskovat","riziko","robotika","rodokmen","rohovka","rokle","rokoko","romaneto","ropovod","ropucha","rorejs","rosol","rostlina","rotmistr","rotoped","rotunda","roubenka","roucho","roup","roura","rovina","rovnice","rozbor","rozchod","rozdat","rozeznat","rozhodce","rozinka","rozjezd","rozkaz","rozloha","rozmar","rozpad","rozruch","rozsah","roztok","rozum","rozvod","rubrika","ruchadlo","rukavice","rukopis","ryba","rybolov","rychlost","rydlo","rypadlo","rytina","ryzost","sadista","sahat","sako","samec","samizdat","samota","sanitka","sardinka","sasanka","satelit","sazba","sazenice","sbor","schovat","sebranka","secese","sedadlo","sediment","sedlo","sehnat","sejmout","sekera","sekta","sekunda","sekvoje","semeno","seno","servis","sesadit","seshora","seskok","seslat","sestra","sesuv","sesypat","setba","setina","setkat","setnout","setrvat","sever","seznam","shoda","shrnout","sifon","silnice","sirka","sirotek","sirup","situace","skafandr","skalisko","skanzen","skaut","skeptik","skica","skladba","sklenice","sklo","skluz","skoba","skokan","skoro","skripta","skrz","skupina","skvost","skvrna","slabika","sladidlo","slanina","slast","slavnost","sledovat","slepec","sleva","slezina","slib","slina","sliznice","slon","sloupek","slovo","sluch","sluha","slunce","slupka","slza","smaragd","smetana","smilstvo","smlouva","smog","smrad","smrk","smrtka","smutek","smysl","snad","snaha","snob","sobota","socha","sodovka","sokol","sopka","sotva","souboj","soucit","soudce","souhlas","soulad","soumrak","souprava","soused","soutok","souviset","spalovna","spasitel","spis","splav","spodek","spojenec","spolu","sponzor","spornost","spousta","sprcha","spustit","sranda","sraz","srdce","srna","srnec","srovnat","srpen","srst","srub","stanice","starosta","statika","stavba","stehno","stezka","stodola","stolek","stopa","storno","stoupat","strach","stres","strhnout","strom","struna","studna","stupnice","stvol","styk","subjekt","subtropy","suchar","sudost","sukno","sundat","sunout","surikata","surovina","svah","svalstvo","svetr","svatba","svazek","svisle","svitek","svoboda","svodidlo","svorka","svrab","sykavka","sykot","synek","synovec","sypat","sypkost","syrovost","sysel","sytost","tabletka","tabule","tahoun","tajemno","tajfun","tajga","tajit","tajnost","taktika","tamhle","tampon","tancovat","tanec","tanker","tapeta","tavenina","tazatel","technika","tehdy","tekutina","telefon","temnota","tendence","tenista","tenor","teplota","tepna","teprve","terapie","termoska","textil","ticho","tiskopis","titulek","tkadlec","tkanina","tlapka","tleskat","tlukot","tlupa","tmel","toaleta","topinka","topol","torzo","touha","toulec","tradice","traktor","tramp","trasa","traverza","trefit","trest","trezor","trhavina","trhlina","trochu","trojice","troska","trouba","trpce","trpitel","trpkost","trubec","truchlit","truhlice","trus","trvat","tudy","tuhnout","tuhost","tundra","turista","turnaj","tuzemsko","tvaroh","tvorba","tvrdost","tvrz","tygr","tykev","ubohost","uboze","ubrat","ubrousek","ubrus","ubytovna","ucho","uctivost","udivit","uhradit","ujednat","ujistit","ujmout","ukazatel","uklidnit","uklonit","ukotvit","ukrojit","ulice","ulita","ulovit","umyvadlo","unavit","uniforma","uniknout","upadnout","uplatnit","uplynout","upoutat","upravit","uran","urazit","usednout","usilovat","usmrtit","usnadnit","usnout","usoudit","ustlat","ustrnout","utahovat","utkat","utlumit","utonout","utopenec","utrousit","uvalit","uvolnit","uvozovka","uzdravit","uzel","uzenina","uzlina","uznat","vagon","valcha","valoun","vana","vandal","vanilka","varan","varhany","varovat","vcelku","vchod","vdova","vedro","vegetace","vejce","velbloud","veletrh","velitel","velmoc","velryba","venkov","veranda","verze","veselka","veskrze","vesnice","vespodu","vesta","veterina","veverka","vibrace","vichr","videohra","vidina","vidle","vila","vinice","viset","vitalita","vize","vizitka","vjezd","vklad","vkus","vlajka","vlak","vlasec","vlevo","vlhkost","vliv","vlnovka","vloupat","vnucovat","vnuk","voda","vodivost","vodoznak","vodstvo","vojensky","vojna","vojsko","volant","volba","volit","volno","voskovka","vozidlo","vozovna","vpravo","vrabec","vracet","vrah","vrata","vrba","vrcholek","vrhat","vrstva","vrtule","vsadit","vstoupit","vstup","vtip","vybavit","vybrat","vychovat","vydat","vydra","vyfotit","vyhledat","vyhnout","vyhodit","vyhradit","vyhubit","vyjasnit","vyjet","vyjmout","vyklopit","vykonat","vylekat","vymazat","vymezit","vymizet","vymyslet","vynechat","vynikat","vynutit","vypadat","vyplatit","vypravit","vypustit","vyrazit","vyrovnat","vyrvat","vyslovit","vysoko","vystavit","vysunout","vysypat","vytasit","vytesat","vytratit","vyvinout","vyvolat","vyvrhel","vyzdobit","vyznat","vzadu","vzbudit","vzchopit","vzdor","vzduch","vzdychat","vzestup","vzhledem","vzkaz","vzlykat","vznik","vzorek","vzpoura","vztah","vztek","xylofon","zabrat","zabydlet","zachovat","zadarmo","zadusit","zafoukat","zahltit","zahodit","zahrada","zahynout","zajatec","zajet","zajistit","zaklepat","zakoupit","zalepit","zamezit","zamotat","zamyslet","zanechat","zanikat","zaplatit","zapojit","zapsat","zarazit","zastavit","zasunout","zatajit","zatemnit","zatknout","zaujmout","zavalit","zavelet","zavinit","zavolat","zavrtat","zazvonit","zbavit","zbrusu","zbudovat","zbytek","zdaleka","zdarma","zdatnost","zdivo","zdobit","zdroj","zdvih","zdymadlo","zelenina","zeman","zemina","zeptat","zezadu","zezdola","zhatit","zhltnout","zhluboka","zhotovit","zhruba","zima","zimnice","zjemnit","zklamat","zkoumat","zkratka","zkumavka","zlato","zlehka","zloba","zlom","zlost","zlozvyk","zmapovat","zmar","zmatek","zmije","zmizet","zmocnit","zmodrat","zmrzlina","zmutovat","znak","znalost","znamenat","znovu","zobrazit","zotavit","zoubek","zoufale","zplodit","zpomalit","zprava","zprostit","zprudka","zprvu","zrada","zranit","zrcadlo","zrnitost","zrno","zrovna","zrychlit","zrzavost","zticha","ztratit","zubovina","zubr","zvednout","zvenku","zvesela","zvon","zvrat","zvukovod","zvyk"]');

/***/ }),

/***/ 71066:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('["abandon","ability","able","about","above","absent","absorb","abstract","absurd","abuse","access","accident","account","accuse","achieve","acid","acoustic","acquire","across","act","action","actor","actress","actual","adapt","add","addict","address","adjust","admit","adult","advance","advice","aerobic","affair","afford","afraid","again","age","agent","agree","ahead","aim","air","airport","aisle","alarm","album","alcohol","alert","alien","all","alley","allow","almost","alone","alpha","already","also","alter","always","amateur","amazing","among","amount","amused","analyst","anchor","ancient","anger","angle","angry","animal","ankle","announce","annual","another","answer","antenna","antique","anxiety","any","apart","apology","appear","apple","approve","april","arch","arctic","area","arena","argue","arm","armed","armor","army","around","arrange","arrest","arrive","arrow","art","artefact","artist","artwork","ask","aspect","assault","asset","assist","assume","asthma","athlete","atom","attack","attend","attitude","attract","auction","audit","august","aunt","author","auto","autumn","average","avocado","avoid","awake","aware","away","awesome","awful","awkward","axis","baby","bachelor","bacon","badge","bag","balance","balcony","ball","bamboo","banana","banner","bar","barely","bargain","barrel","base","basic","basket","battle","beach","bean","beauty","because","become","beef","before","begin","behave","behind","believe","below","belt","bench","benefit","best","betray","better","between","beyond","bicycle","bid","bike","bind","biology","bird","birth","bitter","black","blade","blame","blanket","blast","bleak","bless","blind","blood","blossom","blouse","blue","blur","blush","board","boat","body","boil","bomb","bone","bonus","book","boost","border","boring","borrow","boss","bottom","bounce","box","boy","bracket","brain","brand","brass","brave","bread","breeze","brick","bridge","brief","bright","bring","brisk","broccoli","broken","bronze","broom","brother","brown","brush","bubble","buddy","budget","buffalo","build","bulb","bulk","bullet","bundle","bunker","burden","burger","burst","bus","business","busy","butter","buyer","buzz","cabbage","cabin","cable","cactus","cage","cake","call","calm","camera","camp","can","canal","cancel","candy","cannon","canoe","canvas","canyon","capable","capital","captain","car","carbon","card","cargo","carpet","carry","cart","case","cash","casino","castle","casual","cat","catalog","catch","category","cattle","caught","cause","caution","cave","ceiling","celery","cement","census","century","cereal","certain","chair","chalk","champion","change","chaos","chapter","charge","chase","chat","cheap","check","cheese","chef","cherry","chest","chicken","chief","child","chimney","choice","choose","chronic","chuckle","chunk","churn","cigar","cinnamon","circle","citizen","city","civil","claim","clap","clarify","claw","clay","clean","clerk","clever","click","client","cliff","climb","clinic","clip","clock","clog","close","cloth","cloud","clown","club","clump","cluster","clutch","coach","coast","coconut","code","coffee","coil","coin","collect","color","column","combine","come","comfort","comic","common","company","concert","conduct","confirm","congress","connect","consider","control","convince","cook","cool","copper","copy","coral","core","corn","correct","cost","cotton","couch","country","couple","course","cousin","cover","coyote","crack","cradle","craft","cram","crane","crash","crater","crawl","crazy","cream","credit","creek","crew","cricket","crime","crisp","critic","crop","cross","crouch","crowd","crucial","cruel","cruise","crumble","crunch","crush","cry","crystal","cube","culture","cup","cupboard","curious","current","curtain","curve","cushion","custom","cute","cycle","dad","damage","damp","dance","danger","daring","dash","daughter","dawn","day","deal","debate","debris","decade","december","decide","decline","decorate","decrease","deer","defense","define","defy","degree","delay","deliver","demand","demise","denial","dentist","deny","depart","depend","deposit","depth","deputy","derive","describe","desert","design","desk","despair","destroy","detail","detect","develop","device","devote","diagram","dial","diamond","diary","dice","diesel","diet","differ","digital","dignity","dilemma","dinner","dinosaur","direct","dirt","disagree","discover","disease","dish","dismiss","disorder","display","distance","divert","divide","divorce","dizzy","doctor","document","dog","doll","dolphin","domain","donate","donkey","donor","door","dose","double","dove","draft","dragon","drama","drastic","draw","dream","dress","drift","drill","drink","drip","drive","drop","drum","dry","duck","dumb","dune","during","dust","dutch","duty","dwarf","dynamic","eager","eagle","early","earn","earth","easily","east","easy","echo","ecology","economy","edge","edit","educate","effort","egg","eight","either","elbow","elder","electric","elegant","element","elephant","elevator","elite","else","embark","embody","embrace","emerge","emotion","employ","empower","empty","enable","enact","end","endless","endorse","enemy","energy","enforce","engage","engine","enhance","enjoy","enlist","enough","enrich","enroll","ensure","enter","entire","entry","envelope","episode","equal","equip","era","erase","erode","erosion","error","erupt","escape","essay","essence","estate","eternal","ethics","evidence","evil","evoke","evolve","exact","example","excess","exchange","excite","exclude","excuse","execute","exercise","exhaust","exhibit","exile","exist","exit","exotic","expand","expect","expire","explain","expose","express","extend","extra","eye","eyebrow","fabric","face","faculty","fade","faint","faith","fall","false","fame","family","famous","fan","fancy","fantasy","farm","fashion","fat","fatal","father","fatigue","fault","favorite","feature","february","federal","fee","feed","feel","female","fence","festival","fetch","fever","few","fiber","fiction","field","figure","file","film","filter","final","find","fine","finger","finish","fire","firm","first","fiscal","fish","fit","fitness","fix","flag","flame","flash","flat","flavor","flee","flight","flip","float","flock","floor","flower","fluid","flush","fly","foam","focus","fog","foil","fold","follow","food","foot","force","forest","forget","fork","fortune","forum","forward","fossil","foster","found","fox","fragile","frame","frequent","fresh","friend","fringe","frog","front","frost","frown","frozen","fruit","fuel","fun","funny","furnace","fury","future","gadget","gain","galaxy","gallery","game","gap","garage","garbage","garden","garlic","garment","gas","gasp","gate","gather","gauge","gaze","general","genius","genre","gentle","genuine","gesture","ghost","giant","gift","giggle","ginger","giraffe","girl","give","glad","glance","glare","glass","glide","glimpse","globe","gloom","glory","glove","glow","glue","goat","goddess","gold","good","goose","gorilla","gospel","gossip","govern","gown","grab","grace","grain","grant","grape","grass","gravity","great","green","grid","grief","grit","grocery","group","grow","grunt","guard","guess","guide","guilt","guitar","gun","gym","habit","hair","half","hammer","hamster","hand","happy","harbor","hard","harsh","harvest","hat","have","hawk","hazard","head","health","heart","heavy","hedgehog","height","hello","helmet","help","hen","hero","hidden","high","hill","hint","hip","hire","history","hobby","hockey","hold","hole","holiday","hollow","home","honey","hood","hope","horn","horror","horse","hospital","host","hotel","hour","hover","hub","huge","human","humble","humor","hundred","hungry","hunt","hurdle","hurry","hurt","husband","hybrid","ice","icon","idea","identify","idle","ignore","ill","illegal","illness","image","imitate","immense","immune","impact","impose","improve","impulse","inch","include","income","increase","index","indicate","indoor","industry","infant","inflict","inform","inhale","inherit","initial","inject","injury","inmate","inner","innocent","input","inquiry","insane","insect","inside","inspire","install","intact","interest","into","invest","invite","involve","iron","island","isolate","issue","item","ivory","jacket","jaguar","jar","jazz","jealous","jeans","jelly","jewel","job","join","joke","journey","joy","judge","juice","jump","jungle","junior","junk","just","kangaroo","keen","keep","ketchup","key","kick","kid","kidney","kind","kingdom","kiss","kit","kitchen","kite","kitten","kiwi","knee","knife","knock","know","lab","label","labor","ladder","lady","lake","lamp","language","laptop","large","later","latin","laugh","laundry","lava","law","lawn","lawsuit","layer","lazy","leader","leaf","learn","leave","lecture","left","leg","legal","legend","leisure","lemon","lend","length","lens","leopard","lesson","letter","level","liar","liberty","library","license","life","lift","light","like","limb","limit","link","lion","liquid","list","little","live","lizard","load","loan","lobster","local","lock","logic","lonely","long","loop","lottery","loud","lounge","love","loyal","lucky","luggage","lumber","lunar","lunch","luxury","lyrics","machine","mad","magic","magnet","maid","mail","main","major","make","mammal","man","manage","mandate","mango","mansion","manual","maple","marble","march","margin","marine","market","marriage","mask","mass","master","match","material","math","matrix","matter","maximum","maze","meadow","mean","measure","meat","mechanic","medal","media","melody","melt","member","memory","mention","menu","mercy","merge","merit","merry","mesh","message","metal","method","middle","midnight","milk","million","mimic","mind","minimum","minor","minute","miracle","mirror","misery","miss","mistake","mix","mixed","mixture","mobile","model","modify","mom","moment","monitor","monkey","monster","month","moon","moral","more","morning","mosquito","mother","motion","motor","mountain","mouse","move","movie","much","muffin","mule","multiply","muscle","museum","mushroom","music","must","mutual","myself","mystery","myth","naive","name","napkin","narrow","nasty","nation","nature","near","neck","need","negative","neglect","neither","nephew","nerve","nest","net","network","neutral","never","news","next","nice","night","noble","noise","nominee","noodle","normal","north","nose","notable","note","nothing","notice","novel","now","nuclear","number","nurse","nut","oak","obey","object","oblige","obscure","observe","obtain","obvious","occur","ocean","october","odor","off","offer","office","often","oil","okay","old","olive","olympic","omit","once","one","onion","online","only","open","opera","opinion","oppose","option","orange","orbit","orchard","order","ordinary","organ","orient","original","orphan","ostrich","other","outdoor","outer","output","outside","oval","oven","over","own","owner","oxygen","oyster","ozone","pact","paddle","page","pair","palace","palm","panda","panel","panic","panther","paper","parade","parent","park","parrot","party","pass","patch","path","patient","patrol","pattern","pause","pave","payment","peace","peanut","pear","peasant","pelican","pen","penalty","pencil","people","pepper","perfect","permit","person","pet","phone","photo","phrase","physical","piano","picnic","picture","piece","pig","pigeon","pill","pilot","pink","pioneer","pipe","pistol","pitch","pizza","place","planet","plastic","plate","play","please","pledge","pluck","plug","plunge","poem","poet","point","polar","pole","police","pond","pony","pool","popular","portion","position","possible","post","potato","pottery","poverty","powder","power","practice","praise","predict","prefer","prepare","present","pretty","prevent","price","pride","primary","print","priority","prison","private","prize","problem","process","produce","profit","program","project","promote","proof","property","prosper","protect","proud","provide","public","pudding","pull","pulp","pulse","pumpkin","punch","pupil","puppy","purchase","purity","purpose","purse","push","put","puzzle","pyramid","quality","quantum","quarter","question","quick","quit","quiz","quote","rabbit","raccoon","race","rack","radar","radio","rail","rain","raise","rally","ramp","ranch","random","range","rapid","rare","rate","rather","raven","raw","razor","ready","real","reason","rebel","rebuild","recall","receive","recipe","record","recycle","reduce","reflect","reform","refuse","region","regret","regular","reject","relax","release","relief","rely","remain","remember","remind","remove","render","renew","rent","reopen","repair","repeat","replace","report","require","rescue","resemble","resist","resource","response","result","retire","retreat","return","reunion","reveal","review","reward","rhythm","rib","ribbon","rice","rich","ride","ridge","rifle","right","rigid","ring","riot","ripple","risk","ritual","rival","river","road","roast","robot","robust","rocket","romance","roof","rookie","room","rose","rotate","rough","round","route","royal","rubber","rude","rug","rule","run","runway","rural","sad","saddle","sadness","safe","sail","salad","salmon","salon","salt","salute","same","sample","sand","satisfy","satoshi","sauce","sausage","save","say","scale","scan","scare","scatter","scene","scheme","school","science","scissors","scorpion","scout","scrap","screen","script","scrub","sea","search","season","seat","second","secret","section","security","seed","seek","segment","select","sell","seminar","senior","sense","sentence","series","service","session","settle","setup","seven","shadow","shaft","shallow","share","shed","shell","sheriff","shield","shift","shine","ship","shiver","shock","shoe","shoot","shop","short","shoulder","shove","shrimp","shrug","shuffle","shy","sibling","sick","side","siege","sight","sign","silent","silk","silly","silver","similar","simple","since","sing","siren","sister","situate","six","size","skate","sketch","ski","skill","skin","skirt","skull","slab","slam","sleep","slender","slice","slide","slight","slim","slogan","slot","slow","slush","small","smart","smile","smoke","smooth","snack","snake","snap","sniff","snow","soap","soccer","social","sock","soda","soft","solar","soldier","solid","solution","solve","someone","song","soon","sorry","sort","soul","sound","soup","source","south","space","spare","spatial","spawn","speak","special","speed","spell","spend","sphere","spice","spider","spike","spin","spirit","split","spoil","sponsor","spoon","sport","spot","spray","spread","spring","spy","square","squeeze","squirrel","stable","stadium","staff","stage","stairs","stamp","stand","start","state","stay","steak","steel","stem","step","stereo","stick","still","sting","stock","stomach","stone","stool","story","stove","strategy","street","strike","strong","struggle","student","stuff","stumble","style","subject","submit","subway","success","such","sudden","suffer","sugar","suggest","suit","summer","sun","sunny","sunset","super","supply","supreme","sure","surface","surge","surprise","surround","survey","suspect","sustain","swallow","swamp","swap","swarm","swear","sweet","swift","swim","swing","switch","sword","symbol","symptom","syrup","system","table","tackle","tag","tail","talent","talk","tank","tape","target","task","taste","tattoo","taxi","teach","team","tell","ten","tenant","tennis","tent","term","test","text","thank","that","theme","then","theory","there","they","thing","this","thought","three","thrive","throw","thumb","thunder","ticket","tide","tiger","tilt","timber","time","tiny","tip","tired","tissue","title","toast","tobacco","today","toddler","toe","together","toilet","token","tomato","tomorrow","tone","tongue","tonight","tool","tooth","top","topic","topple","torch","tornado","tortoise","toss","total","tourist","toward","tower","town","toy","track","trade","traffic","tragic","train","transfer","trap","trash","travel","tray","treat","tree","trend","trial","tribe","trick","trigger","trim","trip","trophy","trouble","truck","true","truly","trumpet","trust","truth","try","tube","tuition","tumble","tuna","tunnel","turkey","turn","turtle","twelve","twenty","twice","twin","twist","two","type","typical","ugly","umbrella","unable","unaware","uncle","uncover","under","undo","unfair","unfold","unhappy","uniform","unique","unit","universe","unknown","unlock","until","unusual","unveil","update","upgrade","uphold","upon","upper","upset","urban","urge","usage","use","used","useful","useless","usual","utility","vacant","vacuum","vague","valid","valley","valve","van","vanish","vapor","various","vast","vault","vehicle","velvet","vendor","venture","venue","verb","verify","version","very","vessel","veteran","viable","vibrant","vicious","victory","video","view","village","vintage","violin","virtual","virus","visa","visit","visual","vital","vivid","vocal","voice","void","volcano","volume","vote","voyage","wage","wagon","wait","walk","wall","walnut","want","warfare","warm","warrior","wash","wasp","waste","water","wave","way","wealth","weapon","wear","weasel","weather","web","wedding","weekend","weird","welcome","west","wet","whale","what","wheat","wheel","when","where","whip","whisper","wide","width","wife","wild","will","win","window","wine","wing","wink","winner","winter","wire","wisdom","wise","wish","witness","wolf","woman","wonder","wood","wool","word","work","world","worry","worth","wrap","wreck","wrestle","wrist","write","wrong","yard","year","yellow","you","young","youth","zebra","zero","zone","zoo"]');

/***/ }),

/***/ 51354:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('["abaisser","abandon","abdiquer","abeille","abolir","aborder","aboutir","aboyer","abrasif","abreuver","abriter","abroger","abrupt","absence","absolu","absurde","abusif","abyssal","académie","acajou","acarien","accabler","accepter","acclamer","accolade","accroche","accuser","acerbe","achat","acheter","aciduler","acier","acompte","acquérir","acronyme","acteur","actif","actuel","adepte","adéquat","adhésif","adjectif","adjuger","admettre","admirer","adopter","adorer","adoucir","adresse","adroit","adulte","adverbe","aérer","aéronef","affaire","affecter","affiche","affreux","affubler","agacer","agencer","agile","agiter","agrafer","agréable","agrume","aider","aiguille","ailier","aimable","aisance","ajouter","ajuster","alarmer","alchimie","alerte","algèbre","algue","aliéner","aliment","alléger","alliage","allouer","allumer","alourdir","alpaga","altesse","alvéole","amateur","ambigu","ambre","aménager","amertume","amidon","amiral","amorcer","amour","amovible","amphibie","ampleur","amusant","analyse","anaphore","anarchie","anatomie","ancien","anéantir","angle","angoisse","anguleux","animal","annexer","annonce","annuel","anodin","anomalie","anonyme","anormal","antenne","antidote","anxieux","apaiser","apéritif","aplanir","apologie","appareil","appeler","apporter","appuyer","aquarium","aqueduc","arbitre","arbuste","ardeur","ardoise","argent","arlequin","armature","armement","armoire","armure","arpenter","arracher","arriver","arroser","arsenic","artériel","article","aspect","asphalte","aspirer","assaut","asservir","assiette","associer","assurer","asticot","astre","astuce","atelier","atome","atrium","atroce","attaque","attentif","attirer","attraper","aubaine","auberge","audace","audible","augurer","aurore","automne","autruche","avaler","avancer","avarice","avenir","averse","aveugle","aviateur","avide","avion","aviser","avoine","avouer","avril","axial","axiome","badge","bafouer","bagage","baguette","baignade","balancer","balcon","baleine","balisage","bambin","bancaire","bandage","banlieue","bannière","banquier","barbier","baril","baron","barque","barrage","bassin","bastion","bataille","bateau","batterie","baudrier","bavarder","belette","bélier","belote","bénéfice","berceau","berger","berline","bermuda","besace","besogne","bétail","beurre","biberon","bicycle","bidule","bijou","bilan","bilingue","billard","binaire","biologie","biopsie","biotype","biscuit","bison","bistouri","bitume","bizarre","blafard","blague","blanchir","blessant","blinder","blond","bloquer","blouson","bobard","bobine","boire","boiser","bolide","bonbon","bondir","bonheur","bonifier","bonus","bordure","borne","botte","boucle","boueux","bougie","boulon","bouquin","bourse","boussole","boutique","boxeur","branche","brasier","brave","brebis","brèche","breuvage","bricoler","brigade","brillant","brioche","brique","brochure","broder","bronzer","brousse","broyeur","brume","brusque","brutal","bruyant","buffle","buisson","bulletin","bureau","burin","bustier","butiner","butoir","buvable","buvette","cabanon","cabine","cachette","cadeau","cadre","caféine","caillou","caisson","calculer","calepin","calibre","calmer","calomnie","calvaire","camarade","caméra","camion","campagne","canal","caneton","canon","cantine","canular","capable","caporal","caprice","capsule","capter","capuche","carabine","carbone","caresser","caribou","carnage","carotte","carreau","carton","cascade","casier","casque","cassure","causer","caution","cavalier","caverne","caviar","cédille","ceinture","céleste","cellule","cendrier","censurer","central","cercle","cérébral","cerise","cerner","cerveau","cesser","chagrin","chaise","chaleur","chambre","chance","chapitre","charbon","chasseur","chaton","chausson","chavirer","chemise","chenille","chéquier","chercher","cheval","chien","chiffre","chignon","chimère","chiot","chlorure","chocolat","choisir","chose","chouette","chrome","chute","cigare","cigogne","cimenter","cinéma","cintrer","circuler","cirer","cirque","citerne","citoyen","citron","civil","clairon","clameur","claquer","classe","clavier","client","cligner","climat","clivage","cloche","clonage","cloporte","cobalt","cobra","cocasse","cocotier","coder","codifier","coffre","cogner","cohésion","coiffer","coincer","colère","colibri","colline","colmater","colonel","combat","comédie","commande","compact","concert","conduire","confier","congeler","connoter","consonne","contact","convexe","copain","copie","corail","corbeau","cordage","corniche","corpus","correct","cortège","cosmique","costume","coton","coude","coupure","courage","couteau","couvrir","coyote","crabe","crainte","cravate","crayon","créature","créditer","crémeux","creuser","crevette","cribler","crier","cristal","critère","croire","croquer","crotale","crucial","cruel","crypter","cubique","cueillir","cuillère","cuisine","cuivre","culminer","cultiver","cumuler","cupide","curatif","curseur","cyanure","cycle","cylindre","cynique","daigner","damier","danger","danseur","dauphin","débattre","débiter","déborder","débrider","débutant","décaler","décembre","déchirer","décider","déclarer","décorer","décrire","décupler","dédale","déductif","déesse","défensif","défiler","défrayer","dégager","dégivrer","déglutir","dégrafer","déjeuner","délice","déloger","demander","demeurer","démolir","dénicher","dénouer","dentelle","dénuder","départ","dépenser","déphaser","déplacer","déposer","déranger","dérober","désastre","descente","désert","désigner","désobéir","dessiner","destrier","détacher","détester","détourer","détresse","devancer","devenir","deviner","devoir","diable","dialogue","diamant","dicter","différer","digérer","digital","digne","diluer","dimanche","diminuer","dioxyde","directif","diriger","discuter","disposer","dissiper","distance","divertir","diviser","docile","docteur","dogme","doigt","domaine","domicile","dompter","donateur","donjon","donner","dopamine","dortoir","dorure","dosage","doseur","dossier","dotation","douanier","double","douceur","douter","doyen","dragon","draper","dresser","dribbler","droiture","duperie","duplexe","durable","durcir","dynastie","éblouir","écarter","écharpe","échelle","éclairer","éclipse","éclore","écluse","école","économie","écorce","écouter","écraser","écrémer","écrivain","écrou","écume","écureuil","édifier","éduquer","effacer","effectif","effigie","effort","effrayer","effusion","égaliser","égarer","éjecter","élaborer","élargir","électron","élégant","éléphant","élève","éligible","élitisme","éloge","élucider","éluder","emballer","embellir","embryon","émeraude","émission","emmener","émotion","émouvoir","empereur","employer","emporter","emprise","émulsion","encadrer","enchère","enclave","encoche","endiguer","endosser","endroit","enduire","énergie","enfance","enfermer","enfouir","engager","engin","englober","énigme","enjamber","enjeu","enlever","ennemi","ennuyeux","enrichir","enrobage","enseigne","entasser","entendre","entier","entourer","entraver","énumérer","envahir","enviable","envoyer","enzyme","éolien","épaissir","épargne","épatant","épaule","épicerie","épidémie","épier","épilogue","épine","épisode","épitaphe","époque","épreuve","éprouver","épuisant","équerre","équipe","ériger","érosion","erreur","éruption","escalier","espadon","espèce","espiègle","espoir","esprit","esquiver","essayer","essence","essieu","essorer","estime","estomac","estrade","étagère","étaler","étanche","étatique","éteindre","étendoir","éternel","éthanol","éthique","ethnie","étirer","étoffer","étoile","étonnant","étourdir","étrange","étroit","étude","euphorie","évaluer","évasion","éventail","évidence","éviter","évolutif","évoquer","exact","exagérer","exaucer","exceller","excitant","exclusif","excuse","exécuter","exemple","exercer","exhaler","exhorter","exigence","exiler","exister","exotique","expédier","explorer","exposer","exprimer","exquis","extensif","extraire","exulter","fable","fabuleux","facette","facile","facture","faiblir","falaise","fameux","famille","farceur","farfelu","farine","farouche","fasciner","fatal","fatigue","faucon","fautif","faveur","favori","fébrile","féconder","fédérer","félin","femme","fémur","fendoir","féodal","fermer","féroce","ferveur","festival","feuille","feutre","février","fiasco","ficeler","fictif","fidèle","figure","filature","filetage","filière","filleul","filmer","filou","filtrer","financer","finir","fiole","firme","fissure","fixer","flairer","flamme","flasque","flatteur","fléau","flèche","fleur","flexion","flocon","flore","fluctuer","fluide","fluvial","folie","fonderie","fongible","fontaine","forcer","forgeron","formuler","fortune","fossile","foudre","fougère","fouiller","foulure","fourmi","fragile","fraise","franchir","frapper","frayeur","frégate","freiner","frelon","frémir","frénésie","frère","friable","friction","frisson","frivole","froid","fromage","frontal","frotter","fruit","fugitif","fuite","fureur","furieux","furtif","fusion","futur","gagner","galaxie","galerie","gambader","garantir","gardien","garnir","garrigue","gazelle","gazon","géant","gélatine","gélule","gendarme","général","génie","genou","gentil","géologie","géomètre","géranium","germe","gestuel","geyser","gibier","gicler","girafe","givre","glace","glaive","glisser","globe","gloire","glorieux","golfeur","gomme","gonfler","gorge","gorille","goudron","gouffre","goulot","goupille","gourmand","goutte","graduel","graffiti","graine","grand","grappin","gratuit","gravir","grenat","griffure","griller","grimper","grogner","gronder","grotte","groupe","gruger","grutier","gruyère","guépard","guerrier","guide","guimauve","guitare","gustatif","gymnaste","gyrostat","habitude","hachoir","halte","hameau","hangar","hanneton","haricot","harmonie","harpon","hasard","hélium","hématome","herbe","hérisson","hermine","héron","hésiter","heureux","hiberner","hibou","hilarant","histoire","hiver","homard","hommage","homogène","honneur","honorer","honteux","horde","horizon","horloge","hormone","horrible","houleux","housse","hublot","huileux","humain","humble","humide","humour","hurler","hydromel","hygiène","hymne","hypnose","idylle","ignorer","iguane","illicite","illusion","image","imbiber","imiter","immense","immobile","immuable","impact","impérial","implorer","imposer","imprimer","imputer","incarner","incendie","incident","incliner","incolore","indexer","indice","inductif","inédit","ineptie","inexact","infini","infliger","informer","infusion","ingérer","inhaler","inhiber","injecter","injure","innocent","inoculer","inonder","inscrire","insecte","insigne","insolite","inspirer","instinct","insulter","intact","intense","intime","intrigue","intuitif","inutile","invasion","inventer","inviter","invoquer","ironique","irradier","irréel","irriter","isoler","ivoire","ivresse","jaguar","jaillir","jambe","janvier","jardin","jauger","jaune","javelot","jetable","jeton","jeudi","jeunesse","joindre","joncher","jongler","joueur","jouissif","journal","jovial","joyau","joyeux","jubiler","jugement","junior","jupon","juriste","justice","juteux","juvénile","kayak","kimono","kiosque","label","labial","labourer","lacérer","lactose","lagune","laine","laisser","laitier","lambeau","lamelle","lampe","lanceur","langage","lanterne","lapin","largeur","larme","laurier","lavabo","lavoir","lecture","légal","léger","légume","lessive","lettre","levier","lexique","lézard","liasse","libérer","libre","licence","licorne","liège","lièvre","ligature","ligoter","ligue","limer","limite","limonade","limpide","linéaire","lingot","lionceau","liquide","lisière","lister","lithium","litige","littoral","livreur","logique","lointain","loisir","lombric","loterie","louer","lourd","loutre","louve","loyal","lubie","lucide","lucratif","lueur","lugubre","luisant","lumière","lunaire","lundi","luron","lutter","luxueux","machine","magasin","magenta","magique","maigre","maillon","maintien","mairie","maison","majorer","malaxer","maléfice","malheur","malice","mallette","mammouth","mandater","maniable","manquant","manteau","manuel","marathon","marbre","marchand","mardi","maritime","marqueur","marron","marteler","mascotte","massif","matériel","matière","matraque","maudire","maussade","mauve","maximal","méchant","méconnu","médaille","médecin","méditer","méduse","meilleur","mélange","mélodie","membre","mémoire","menacer","mener","menhir","mensonge","mentor","mercredi","mérite","merle","messager","mesure","métal","météore","méthode","métier","meuble","miauler","microbe","miette","mignon","migrer","milieu","million","mimique","mince","minéral","minimal","minorer","minute","miracle","miroiter","missile","mixte","mobile","moderne","moelleux","mondial","moniteur","monnaie","monotone","monstre","montagne","monument","moqueur","morceau","morsure","mortier","moteur","motif","mouche","moufle","moulin","mousson","mouton","mouvant","multiple","munition","muraille","murène","murmure","muscle","muséum","musicien","mutation","muter","mutuel","myriade","myrtille","mystère","mythique","nageur","nappe","narquois","narrer","natation","nation","nature","naufrage","nautique","navire","nébuleux","nectar","néfaste","négation","négliger","négocier","neige","nerveux","nettoyer","neurone","neutron","neveu","niche","nickel","nitrate","niveau","noble","nocif","nocturne","noirceur","noisette","nomade","nombreux","nommer","normatif","notable","notifier","notoire","nourrir","nouveau","novateur","novembre","novice","nuage","nuancer","nuire","nuisible","numéro","nuptial","nuque","nutritif","obéir","objectif","obliger","obscur","observer","obstacle","obtenir","obturer","occasion","occuper","océan","octobre","octroyer","octupler","oculaire","odeur","odorant","offenser","officier","offrir","ogive","oiseau","oisillon","olfactif","olivier","ombrage","omettre","onctueux","onduler","onéreux","onirique","opale","opaque","opérer","opinion","opportun","opprimer","opter","optique","orageux","orange","orbite","ordonner","oreille","organe","orgueil","orifice","ornement","orque","ortie","osciller","osmose","ossature","otarie","ouragan","ourson","outil","outrager","ouvrage","ovation","oxyde","oxygène","ozone","paisible","palace","palmarès","palourde","palper","panache","panda","pangolin","paniquer","panneau","panorama","pantalon","papaye","papier","papoter","papyrus","paradoxe","parcelle","paresse","parfumer","parler","parole","parrain","parsemer","partager","parure","parvenir","passion","pastèque","paternel","patience","patron","pavillon","pavoiser","payer","paysage","peigne","peintre","pelage","pélican","pelle","pelouse","peluche","pendule","pénétrer","pénible","pensif","pénurie","pépite","péplum","perdrix","perforer","période","permuter","perplexe","persil","perte","peser","pétale","petit","pétrir","peuple","pharaon","phobie","phoque","photon","phrase","physique","piano","pictural","pièce","pierre","pieuvre","pilote","pinceau","pipette","piquer","pirogue","piscine","piston","pivoter","pixel","pizza","placard","plafond","plaisir","planer","plaque","plastron","plateau","pleurer","plexus","pliage","plomb","plonger","pluie","plumage","pochette","poésie","poète","pointe","poirier","poisson","poivre","polaire","policier","pollen","polygone","pommade","pompier","ponctuel","pondérer","poney","portique","position","posséder","posture","potager","poteau","potion","pouce","poulain","poumon","pourpre","poussin","pouvoir","prairie","pratique","précieux","prédire","préfixe","prélude","prénom","présence","prétexte","prévoir","primitif","prince","prison","priver","problème","procéder","prodige","profond","progrès","proie","projeter","prologue","promener","propre","prospère","protéger","prouesse","proverbe","prudence","pruneau","psychose","public","puceron","puiser","pulpe","pulsar","punaise","punitif","pupitre","purifier","puzzle","pyramide","quasar","querelle","question","quiétude","quitter","quotient","racine","raconter","radieux","ragondin","raideur","raisin","ralentir","rallonge","ramasser","rapide","rasage","ratisser","ravager","ravin","rayonner","réactif","réagir","réaliser","réanimer","recevoir","réciter","réclamer","récolter","recruter","reculer","recycler","rédiger","redouter","refaire","réflexe","réformer","refrain","refuge","régalien","région","réglage","régulier","réitérer","rejeter","rejouer","relatif","relever","relief","remarque","remède","remise","remonter","remplir","remuer","renard","renfort","renifler","renoncer","rentrer","renvoi","replier","reporter","reprise","reptile","requin","réserve","résineux","résoudre","respect","rester","résultat","rétablir","retenir","réticule","retomber","retracer","réunion","réussir","revanche","revivre","révolte","révulsif","richesse","rideau","rieur","rigide","rigoler","rincer","riposter","risible","risque","rituel","rival","rivière","rocheux","romance","rompre","ronce","rondin","roseau","rosier","rotatif","rotor","rotule","rouge","rouille","rouleau","routine","royaume","ruban","rubis","ruche","ruelle","rugueux","ruiner","ruisseau","ruser","rustique","rythme","sabler","saboter","sabre","sacoche","safari","sagesse","saisir","salade","salive","salon","saluer","samedi","sanction","sanglier","sarcasme","sardine","saturer","saugrenu","saumon","sauter","sauvage","savant","savonner","scalpel","scandale","scélérat","scénario","sceptre","schéma","science","scinder","score","scrutin","sculpter","séance","sécable","sécher","secouer","sécréter","sédatif","séduire","seigneur","séjour","sélectif","semaine","sembler","semence","séminal","sénateur","sensible","sentence","séparer","séquence","serein","sergent","sérieux","serrure","sérum","service","sésame","sévir","sevrage","sextuple","sidéral","siècle","siéger","siffler","sigle","signal","silence","silicium","simple","sincère","sinistre","siphon","sirop","sismique","situer","skier","social","socle","sodium","soigneux","soldat","soleil","solitude","soluble","sombre","sommeil","somnoler","sonde","songeur","sonnette","sonore","sorcier","sortir","sosie","sottise","soucieux","soudure","souffle","soulever","soupape","source","soutirer","souvenir","spacieux","spatial","spécial","sphère","spiral","stable","station","sternum","stimulus","stipuler","strict","studieux","stupeur","styliste","sublime","substrat","subtil","subvenir","succès","sucre","suffixe","suggérer","suiveur","sulfate","superbe","supplier","surface","suricate","surmener","surprise","sursaut","survie","suspect","syllabe","symbole","symétrie","synapse","syntaxe","système","tabac","tablier","tactile","tailler","talent","talisman","talonner","tambour","tamiser","tangible","tapis","taquiner","tarder","tarif","tartine","tasse","tatami","tatouage","taupe","taureau","taxer","témoin","temporel","tenaille","tendre","teneur","tenir","tension","terminer","terne","terrible","tétine","texte","thème","théorie","thérapie","thorax","tibia","tiède","timide","tirelire","tiroir","tissu","titane","titre","tituber","toboggan","tolérant","tomate","tonique","tonneau","toponyme","torche","tordre","tornade","torpille","torrent","torse","tortue","totem","toucher","tournage","tousser","toxine","traction","trafic","tragique","trahir","train","trancher","travail","trèfle","tremper","trésor","treuil","triage","tribunal","tricoter","trilogie","triomphe","tripler","triturer","trivial","trombone","tronc","tropical","troupeau","tuile","tulipe","tumulte","tunnel","turbine","tuteur","tutoyer","tuyau","tympan","typhon","typique","tyran","ubuesque","ultime","ultrason","unanime","unifier","union","unique","unitaire","univers","uranium","urbain","urticant","usage","usine","usuel","usure","utile","utopie","vacarme","vaccin","vagabond","vague","vaillant","vaincre","vaisseau","valable","valise","vallon","valve","vampire","vanille","vapeur","varier","vaseux","vassal","vaste","vecteur","vedette","végétal","véhicule","veinard","véloce","vendredi","vénérer","venger","venimeux","ventouse","verdure","vérin","vernir","verrou","verser","vertu","veston","vétéran","vétuste","vexant","vexer","viaduc","viande","victoire","vidange","vidéo","vignette","vigueur","vilain","village","vinaigre","violon","vipère","virement","virtuose","virus","visage","viseur","vision","visqueux","visuel","vital","vitesse","viticole","vitrine","vivace","vivipare","vocation","voguer","voile","voisin","voiture","volaille","volcan","voltiger","volume","vorace","vortex","voter","vouloir","voyage","voyelle","wagon","xénon","yacht","zèbre","zénith","zeste","zoologie"]');

/***/ }),

/***/ 83515:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('["abaco","abbaglio","abbinato","abete","abisso","abolire","abrasivo","abrogato","accadere","accenno","accusato","acetone","achille","acido","acqua","acre","acrilico","acrobata","acuto","adagio","addebito","addome","adeguato","aderire","adipe","adottare","adulare","affabile","affetto","affisso","affranto","aforisma","afoso","africano","agave","agente","agevole","aggancio","agire","agitare","agonismo","agricolo","agrumeto","aguzzo","alabarda","alato","albatro","alberato","albo","albume","alce","alcolico","alettone","alfa","algebra","aliante","alibi","alimento","allagato","allegro","allievo","allodola","allusivo","almeno","alogeno","alpaca","alpestre","altalena","alterno","alticcio","altrove","alunno","alveolo","alzare","amalgama","amanita","amarena","ambito","ambrato","ameba","america","ametista","amico","ammasso","ammenda","ammirare","ammonito","amore","ampio","ampliare","amuleto","anacardo","anagrafe","analista","anarchia","anatra","anca","ancella","ancora","andare","andrea","anello","angelo","angolare","angusto","anima","annegare","annidato","anno","annuncio","anonimo","anticipo","anzi","apatico","apertura","apode","apparire","appetito","appoggio","approdo","appunto","aprile","arabica","arachide","aragosta","araldica","arancio","aratura","arazzo","arbitro","archivio","ardito","arenile","argento","argine","arguto","aria","armonia","arnese","arredato","arringa","arrosto","arsenico","arso","artefice","arzillo","asciutto","ascolto","asepsi","asettico","asfalto","asino","asola","aspirato","aspro","assaggio","asse","assoluto","assurdo","asta","astenuto","astice","astratto","atavico","ateismo","atomico","atono","attesa","attivare","attorno","attrito","attuale","ausilio","austria","autista","autonomo","autunno","avanzato","avere","avvenire","avviso","avvolgere","azione","azoto","azzimo","azzurro","babele","baccano","bacino","baco","badessa","badilata","bagnato","baita","balcone","baldo","balena","ballata","balzano","bambino","bandire","baraonda","barbaro","barca","baritono","barlume","barocco","basilico","basso","batosta","battuto","baule","bava","bavosa","becco","beffa","belgio","belva","benda","benevole","benigno","benzina","bere","berlina","beta","bibita","bici","bidone","bifido","biga","bilancia","bimbo","binocolo","biologo","bipede","bipolare","birbante","birra","biscotto","bisesto","bisnonno","bisonte","bisturi","bizzarro","blando","blatta","bollito","bonifico","bordo","bosco","botanico","bottino","bozzolo","braccio","bradipo","brama","branca","bravura","bretella","brevetto","brezza","briglia","brillante","brindare","broccolo","brodo","bronzina","brullo","bruno","bubbone","buca","budino","buffone","buio","bulbo","buono","burlone","burrasca","bussola","busta","cadetto","caduco","calamaro","calcolo","calesse","calibro","calmo","caloria","cambusa","camerata","camicia","cammino","camola","campale","canapa","candela","cane","canino","canotto","cantina","capace","capello","capitolo","capogiro","cappero","capra","capsula","carapace","carcassa","cardo","carisma","carovana","carretto","cartolina","casaccio","cascata","caserma","caso","cassone","castello","casuale","catasta","catena","catrame","cauto","cavillo","cedibile","cedrata","cefalo","celebre","cellulare","cena","cenone","centesimo","ceramica","cercare","certo","cerume","cervello","cesoia","cespo","ceto","chela","chiaro","chicca","chiedere","chimera","china","chirurgo","chitarra","ciao","ciclismo","cifrare","cigno","cilindro","ciottolo","circa","cirrosi","citrico","cittadino","ciuffo","civetta","civile","classico","clinica","cloro","cocco","codardo","codice","coerente","cognome","collare","colmato","colore","colposo","coltivato","colza","coma","cometa","commando","comodo","computer","comune","conciso","condurre","conferma","congelare","coniuge","connesso","conoscere","consumo","continuo","convegno","coperto","copione","coppia","copricapo","corazza","cordata","coricato","cornice","corolla","corpo","corredo","corsia","cortese","cosmico","costante","cottura","covato","cratere","cravatta","creato","credere","cremoso","crescita","creta","criceto","crinale","crisi","critico","croce","cronaca","crostata","cruciale","crusca","cucire","cuculo","cugino","cullato","cupola","curatore","cursore","curvo","cuscino","custode","dado","daino","dalmata","damerino","daniela","dannoso","danzare","datato","davanti","davvero","debutto","decennio","deciso","declino","decollo","decreto","dedicato","definito","deforme","degno","delegare","delfino","delirio","delta","demenza","denotato","dentro","deposito","derapata","derivare","deroga","descritto","deserto","desiderio","desumere","detersivo","devoto","diametro","dicembre","diedro","difeso","diffuso","digerire","digitale","diluvio","dinamico","dinnanzi","dipinto","diploma","dipolo","diradare","dire","dirotto","dirupo","disagio","discreto","disfare","disgelo","disposto","distanza","disumano","dito","divano","divelto","dividere","divorato","doblone","docente","doganale","dogma","dolce","domato","domenica","dominare","dondolo","dono","dormire","dote","dottore","dovuto","dozzina","drago","druido","dubbio","dubitare","ducale","duna","duomo","duplice","duraturo","ebano","eccesso","ecco","eclissi","economia","edera","edicola","edile","editoria","educare","egemonia","egli","egoismo","egregio","elaborato","elargire","elegante","elencato","eletto","elevare","elfico","elica","elmo","elsa","eluso","emanato","emblema","emesso","emiro","emotivo","emozione","empirico","emulo","endemico","enduro","energia","enfasi","enoteca","entrare","enzima","epatite","epilogo","episodio","epocale","eppure","equatore","erario","erba","erboso","erede","eremita","erigere","ermetico","eroe","erosivo","errante","esagono","esame","esanime","esaudire","esca","esempio","esercito","esibito","esigente","esistere","esito","esofago","esortato","esoso","espanso","espresso","essenza","esso","esteso","estimare","estonia","estroso","esultare","etilico","etnico","etrusco","etto","euclideo","europa","evaso","evidenza","evitato","evoluto","evviva","fabbrica","faccenda","fachiro","falco","famiglia","fanale","fanfara","fango","fantasma","fare","farfalla","farinoso","farmaco","fascia","fastoso","fasullo","faticare","fato","favoloso","febbre","fecola","fede","fegato","felpa","feltro","femmina","fendere","fenomeno","fermento","ferro","fertile","fessura","festivo","fetta","feudo","fiaba","fiducia","fifa","figurato","filo","finanza","finestra","finire","fiore","fiscale","fisico","fiume","flacone","flamenco","flebo","flemma","florido","fluente","fluoro","fobico","focaccia","focoso","foderato","foglio","folata","folclore","folgore","fondente","fonetico","fonia","fontana","forbito","forchetta","foresta","formica","fornaio","foro","fortezza","forzare","fosfato","fosso","fracasso","frana","frassino","fratello","freccetta","frenata","fresco","frigo","frollino","fronde","frugale","frutta","fucilata","fucsia","fuggente","fulmine","fulvo","fumante","fumetto","fumoso","fune","funzione","fuoco","furbo","furgone","furore","fuso","futile","gabbiano","gaffe","galateo","gallina","galoppo","gambero","gamma","garanzia","garbo","garofano","garzone","gasdotto","gasolio","gastrico","gatto","gaudio","gazebo","gazzella","geco","gelatina","gelso","gemello","gemmato","gene","genitore","gennaio","genotipo","gergo","ghepardo","ghiaccio","ghisa","giallo","gilda","ginepro","giocare","gioiello","giorno","giove","girato","girone","gittata","giudizio","giurato","giusto","globulo","glutine","gnomo","gobba","golf","gomito","gommone","gonfio","gonna","governo","gracile","grado","grafico","grammo","grande","grattare","gravoso","grazia","greca","gregge","grifone","grigio","grinza","grotta","gruppo","guadagno","guaio","guanto","guardare","gufo","guidare","ibernato","icona","identico","idillio","idolo","idra","idrico","idrogeno","igiene","ignaro","ignorato","ilare","illeso","illogico","illudere","imballo","imbevuto","imbocco","imbuto","immane","immerso","immolato","impacco","impeto","impiego","importo","impronta","inalare","inarcare","inattivo","incanto","incendio","inchino","incisivo","incluso","incontro","incrocio","incubo","indagine","india","indole","inedito","infatti","infilare","inflitto","ingaggio","ingegno","inglese","ingordo","ingrosso","innesco","inodore","inoltrare","inondato","insano","insetto","insieme","insonnia","insulina","intasato","intero","intonaco","intuito","inumidire","invalido","invece","invito","iperbole","ipnotico","ipotesi","ippica","iride","irlanda","ironico","irrigato","irrorare","isolato","isotopo","isterico","istituto","istrice","italia","iterare","labbro","labirinto","lacca","lacerato","lacrima","lacuna","laddove","lago","lampo","lancetta","lanterna","lardoso","larga","laringe","lastra","latenza","latino","lattuga","lavagna","lavoro","legale","leggero","lembo","lentezza","lenza","leone","lepre","lesivo","lessato","lesto","letterale","leva","levigato","libero","lido","lievito","lilla","limatura","limitare","limpido","lineare","lingua","liquido","lira","lirica","lisca","lite","litigio","livrea","locanda","lode","logica","lombare","londra","longevo","loquace","lorenzo","loto","lotteria","luce","lucidato","lumaca","luminoso","lungo","lupo","luppolo","lusinga","lusso","lutto","macabro","macchina","macero","macinato","madama","magico","maglia","magnete","magro","maiolica","malafede","malgrado","malinteso","malsano","malto","malumore","mana","mancia","mandorla","mangiare","manifesto","mannaro","manovra","mansarda","mantide","manubrio","mappa","maratona","marcire","maretta","marmo","marsupio","maschera","massaia","mastino","materasso","matricola","mattone","maturo","mazurca","meandro","meccanico","mecenate","medesimo","meditare","mega","melassa","melis","melodia","meninge","meno","mensola","mercurio","merenda","merlo","meschino","mese","messere","mestolo","metallo","metodo","mettere","miagolare","mica","micelio","michele","microbo","midollo","miele","migliore","milano","milite","mimosa","minerale","mini","minore","mirino","mirtillo","miscela","missiva","misto","misurare","mitezza","mitigare","mitra","mittente","mnemonico","modello","modifica","modulo","mogano","mogio","mole","molosso","monastero","monco","mondina","monetario","monile","monotono","monsone","montato","monviso","mora","mordere","morsicato","mostro","motivato","motosega","motto","movenza","movimento","mozzo","mucca","mucosa","muffa","mughetto","mugnaio","mulatto","mulinello","multiplo","mummia","munto","muovere","murale","musa","muscolo","musica","mutevole","muto","nababbo","nafta","nanometro","narciso","narice","narrato","nascere","nastrare","naturale","nautica","naviglio","nebulosa","necrosi","negativo","negozio","nemmeno","neofita","neretto","nervo","nessuno","nettuno","neutrale","neve","nevrotico","nicchia","ninfa","nitido","nobile","nocivo","nodo","nome","nomina","nordico","normale","norvegese","nostrano","notare","notizia","notturno","novella","nucleo","nulla","numero","nuovo","nutrire","nuvola","nuziale","oasi","obbedire","obbligo","obelisco","oblio","obolo","obsoleto","occasione","occhio","occidente","occorrere","occultare","ocra","oculato","odierno","odorare","offerta","offrire","offuscato","oggetto","oggi","ognuno","olandese","olfatto","oliato","oliva","ologramma","oltre","omaggio","ombelico","ombra","omega","omissione","ondoso","onere","onice","onnivoro","onorevole","onta","operato","opinione","opposto","oracolo","orafo","ordine","orecchino","orefice","orfano","organico","origine","orizzonte","orma","ormeggio","ornativo","orologio","orrendo","orribile","ortensia","ortica","orzata","orzo","osare","oscurare","osmosi","ospedale","ospite","ossa","ossidare","ostacolo","oste","otite","otre","ottagono","ottimo","ottobre","ovale","ovest","ovino","oviparo","ovocito","ovunque","ovviare","ozio","pacchetto","pace","pacifico","padella","padrone","paese","paga","pagina","palazzina","palesare","pallido","palo","palude","pandoro","pannello","paolo","paonazzo","paprica","parabola","parcella","parere","pargolo","pari","parlato","parola","partire","parvenza","parziale","passivo","pasticca","patacca","patologia","pattume","pavone","peccato","pedalare","pedonale","peggio","peloso","penare","pendice","penisola","pennuto","penombra","pensare","pentola","pepe","pepita","perbene","percorso","perdonato","perforare","pergamena","periodo","permesso","perno","perplesso","persuaso","pertugio","pervaso","pesatore","pesista","peso","pestifero","petalo","pettine","petulante","pezzo","piacere","pianta","piattino","piccino","picozza","piega","pietra","piffero","pigiama","pigolio","pigro","pila","pilifero","pillola","pilota","pimpante","pineta","pinna","pinolo","pioggia","piombo","piramide","piretico","pirite","pirolisi","pitone","pizzico","placebo","planare","plasma","platano","plenario","pochezza","poderoso","podismo","poesia","poggiare","polenta","poligono","pollice","polmonite","polpetta","polso","poltrona","polvere","pomice","pomodoro","ponte","popoloso","porfido","poroso","porpora","porre","portata","posa","positivo","possesso","postulato","potassio","potere","pranzo","prassi","pratica","precluso","predica","prefisso","pregiato","prelievo","premere","prenotare","preparato","presenza","pretesto","prevalso","prima","principe","privato","problema","procura","produrre","profumo","progetto","prolunga","promessa","pronome","proposta","proroga","proteso","prova","prudente","prugna","prurito","psiche","pubblico","pudica","pugilato","pugno","pulce","pulito","pulsante","puntare","pupazzo","pupilla","puro","quadro","qualcosa","quasi","querela","quota","raccolto","raddoppio","radicale","radunato","raffica","ragazzo","ragione","ragno","ramarro","ramingo","ramo","randagio","rantolare","rapato","rapina","rappreso","rasatura","raschiato","rasente","rassegna","rastrello","rata","ravveduto","reale","recepire","recinto","recluta","recondito","recupero","reddito","redimere","regalato","registro","regola","regresso","relazione","remare","remoto","renna","replica","reprimere","reputare","resa","residente","responso","restauro","rete","retina","retorica","rettifica","revocato","riassunto","ribadire","ribelle","ribrezzo","ricarica","ricco","ricevere","riciclato","ricordo","ricreduto","ridicolo","ridurre","rifasare","riflesso","riforma","rifugio","rigare","rigettato","righello","rilassato","rilevato","rimanere","rimbalzo","rimedio","rimorchio","rinascita","rincaro","rinforzo","rinnovo","rinomato","rinsavito","rintocco","rinuncia","rinvenire","riparato","ripetuto","ripieno","riportare","ripresa","ripulire","risata","rischio","riserva","risibile","riso","rispetto","ristoro","risultato","risvolto","ritardo","ritegno","ritmico","ritrovo","riunione","riva","riverso","rivincita","rivolto","rizoma","roba","robotico","robusto","roccia","roco","rodaggio","rodere","roditore","rogito","rollio","romantico","rompere","ronzio","rosolare","rospo","rotante","rotondo","rotula","rovescio","rubizzo","rubrica","ruga","rullino","rumine","rumoroso","ruolo","rupe","russare","rustico","sabato","sabbiare","sabotato","sagoma","salasso","saldatura","salgemma","salivare","salmone","salone","saltare","saluto","salvo","sapere","sapido","saporito","saraceno","sarcasmo","sarto","sassoso","satellite","satira","satollo","saturno","savana","savio","saziato","sbadiglio","sbalzo","sbancato","sbarra","sbattere","sbavare","sbendare","sbirciare","sbloccato","sbocciato","sbrinare","sbruffone","sbuffare","scabroso","scadenza","scala","scambiare","scandalo","scapola","scarso","scatenare","scavato","scelto","scenico","scettro","scheda","schiena","sciarpa","scienza","scindere","scippo","sciroppo","scivolo","sclerare","scodella","scolpito","scomparto","sconforto","scoprire","scorta","scossone","scozzese","scriba","scrollare","scrutinio","scuderia","scultore","scuola","scuro","scusare","sdebitare","sdoganare","seccatura","secondo","sedano","seggiola","segnalato","segregato","seguito","selciato","selettivo","sella","selvaggio","semaforo","sembrare","seme","seminato","sempre","senso","sentire","sepolto","sequenza","serata","serbato","sereno","serio","serpente","serraglio","servire","sestina","setola","settimana","sfacelo","sfaldare","sfamato","sfarzoso","sfaticato","sfera","sfida","sfilato","sfinge","sfocato","sfoderare","sfogo","sfoltire","sforzato","sfratto","sfruttato","sfuggito","sfumare","sfuso","sgabello","sgarbato","sgonfiare","sgorbio","sgrassato","sguardo","sibilo","siccome","sierra","sigla","signore","silenzio","sillaba","simbolo","simpatico","simulato","sinfonia","singolo","sinistro","sino","sintesi","sinusoide","sipario","sisma","sistole","situato","slitta","slogatura","sloveno","smarrito","smemorato","smentito","smeraldo","smilzo","smontare","smottato","smussato","snellire","snervato","snodo","sobbalzo","sobrio","soccorso","sociale","sodale","soffitto","sogno","soldato","solenne","solido","sollazzo","solo","solubile","solvente","somatico","somma","sonda","sonetto","sonnifero","sopire","soppeso","sopra","sorgere","sorpasso","sorriso","sorso","sorteggio","sorvolato","sospiro","sosta","sottile","spada","spalla","spargere","spatola","spavento","spazzola","specie","spedire","spegnere","spelatura","speranza","spessore","spettrale","spezzato","spia","spigoloso","spillato","spinoso","spirale","splendido","sportivo","sposo","spranga","sprecare","spronato","spruzzo","spuntino","squillo","sradicare","srotolato","stabile","stacco","staffa","stagnare","stampato","stantio","starnuto","stasera","statuto","stelo","steppa","sterzo","stiletto","stima","stirpe","stivale","stizzoso","stonato","storico","strappo","stregato","stridulo","strozzare","strutto","stuccare","stufo","stupendo","subentro","succoso","sudore","suggerito","sugo","sultano","suonare","superbo","supporto","surgelato","surrogato","sussurro","sutura","svagare","svedese","sveglio","svelare","svenuto","svezia","sviluppo","svista","svizzera","svolta","svuotare","tabacco","tabulato","tacciare","taciturno","tale","talismano","tampone","tannino","tara","tardivo","targato","tariffa","tarpare","tartaruga","tasto","tattico","taverna","tavolata","tazza","teca","tecnico","telefono","temerario","tempo","temuto","tendone","tenero","tensione","tentacolo","teorema","terme","terrazzo","terzetto","tesi","tesserato","testato","tetro","tettoia","tifare","tigella","timbro","tinto","tipico","tipografo","tiraggio","tiro","titanio","titolo","titubante","tizio","tizzone","toccare","tollerare","tolto","tombola","tomo","tonfo","tonsilla","topazio","topologia","toppa","torba","tornare","torrone","tortora","toscano","tossire","tostatura","totano","trabocco","trachea","trafila","tragedia","tralcio","tramonto","transito","trapano","trarre","trasloco","trattato","trave","treccia","tremolio","trespolo","tributo","tricheco","trifoglio","trillo","trincea","trio","tristezza","triturato","trivella","tromba","trono","troppo","trottola","trovare","truccato","tubatura","tuffato","tulipano","tumulto","tunisia","turbare","turchino","tuta","tutela","ubicato","uccello","uccisore","udire","uditivo","uffa","ufficio","uguale","ulisse","ultimato","umano","umile","umorismo","uncinetto","ungere","ungherese","unicorno","unificato","unisono","unitario","unte","uovo","upupa","uragano","urgenza","urlo","usanza","usato","uscito","usignolo","usuraio","utensile","utilizzo","utopia","vacante","vaccinato","vagabondo","vagliato","valanga","valgo","valico","valletta","valoroso","valutare","valvola","vampata","vangare","vanitoso","vano","vantaggio","vanvera","vapore","varano","varcato","variante","vasca","vedetta","vedova","veduto","vegetale","veicolo","velcro","velina","velluto","veloce","venato","vendemmia","vento","verace","verbale","vergogna","verifica","vero","verruca","verticale","vescica","vessillo","vestale","veterano","vetrina","vetusto","viandante","vibrante","vicenda","vichingo","vicinanza","vidimare","vigilia","vigneto","vigore","vile","villano","vimini","vincitore","viola","vipera","virgola","virologo","virulento","viscoso","visione","vispo","vissuto","visura","vita","vitello","vittima","vivanda","vivido","viziare","voce","voga","volatile","volere","volpe","voragine","vulcano","zampogna","zanna","zappato","zattera","zavorra","zefiro","zelante","zelo","zenzero","zerbino","zibetto","zinco","zircone","zitto","zolla","zotico","zucchero","zufolo","zulu","zuppa"]');

/***/ }),

/***/ 884:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('["あいこくしん","あいさつ","あいだ","あおぞら","あかちゃん","あきる","あけがた","あける","あこがれる","あさい","あさひ","あしあと","あじわう","あずかる","あずき","あそぶ","あたえる","あたためる","あたりまえ","あたる","あつい","あつかう","あっしゅく","あつまり","あつめる","あてな","あてはまる","あひる","あぶら","あぶる","あふれる","あまい","あまど","あまやかす","あまり","あみもの","あめりか","あやまる","あゆむ","あらいぐま","あらし","あらすじ","あらためる","あらゆる","あらわす","ありがとう","あわせる","あわてる","あんい","あんがい","あんこ","あんぜん","あんてい","あんない","あんまり","いいだす","いおん","いがい","いがく","いきおい","いきなり","いきもの","いきる","いくじ","いくぶん","いけばな","いけん","いこう","いこく","いこつ","いさましい","いさん","いしき","いじゅう","いじょう","いじわる","いずみ","いずれ","いせい","いせえび","いせかい","いせき","いぜん","いそうろう","いそがしい","いだい","いだく","いたずら","いたみ","いたりあ","いちおう","いちじ","いちど","いちば","いちぶ","いちりゅう","いつか","いっしゅん","いっせい","いっそう","いったん","いっち","いってい","いっぽう","いてざ","いてん","いどう","いとこ","いない","いなか","いねむり","いのち","いのる","いはつ","いばる","いはん","いびき","いひん","いふく","いへん","いほう","いみん","いもうと","いもたれ","いもり","いやがる","いやす","いよかん","いよく","いらい","いらすと","いりぐち","いりょう","いれい","いれもの","いれる","いろえんぴつ","いわい","いわう","いわかん","いわば","いわゆる","いんげんまめ","いんさつ","いんしょう","いんよう","うえき","うえる","うおざ","うがい","うかぶ","うかべる","うきわ","うくらいな","うくれれ","うけたまわる","うけつけ","うけとる","うけもつ","うける","うごかす","うごく","うこん","うさぎ","うしなう","うしろがみ","うすい","うすぎ","うすぐらい","うすめる","うせつ","うちあわせ","うちがわ","うちき","うちゅう","うっかり","うつくしい","うったえる","うつる","うどん","うなぎ","うなじ","うなずく","うなる","うねる","うのう","うぶげ","うぶごえ","うまれる","うめる","うもう","うやまう","うよく","うらがえす","うらぐち","うらない","うりあげ","うりきれ","うるさい","うれしい","うれゆき","うれる","うろこ","うわき","うわさ","うんこう","うんちん","うんてん","うんどう","えいえん","えいが","えいきょう","えいご","えいせい","えいぶん","えいよう","えいわ","えおり","えがお","えがく","えきたい","えくせる","えしゃく","えすて","えつらん","えのぐ","えほうまき","えほん","えまき","えもじ","えもの","えらい","えらぶ","えりあ","えんえん","えんかい","えんぎ","えんげき","えんしゅう","えんぜつ","えんそく","えんちょう","えんとつ","おいかける","おいこす","おいしい","おいつく","おうえん","おうさま","おうじ","おうせつ","おうたい","おうふく","おうべい","おうよう","おえる","おおい","おおう","おおどおり","おおや","おおよそ","おかえり","おかず","おがむ","おかわり","おぎなう","おきる","おくさま","おくじょう","おくりがな","おくる","おくれる","おこす","おこなう","おこる","おさえる","おさない","おさめる","おしいれ","おしえる","おじぎ","おじさん","おしゃれ","おそらく","おそわる","おたがい","おたく","おだやか","おちつく","おっと","おつり","おでかけ","おとしもの","おとなしい","おどり","おどろかす","おばさん","おまいり","おめでとう","おもいで","おもう","おもたい","おもちゃ","おやつ","おやゆび","およぼす","おらんだ","おろす","おんがく","おんけい","おんしゃ","おんせん","おんだん","おんちゅう","おんどけい","かあつ","かいが","がいき","がいけん","がいこう","かいさつ","かいしゃ","かいすいよく","かいぜん","かいぞうど","かいつう","かいてん","かいとう","かいふく","がいへき","かいほう","かいよう","がいらい","かいわ","かえる","かおり","かかえる","かがく","かがし","かがみ","かくご","かくとく","かざる","がぞう","かたい","かたち","がちょう","がっきゅう","がっこう","がっさん","がっしょう","かなざわし","かのう","がはく","かぶか","かほう","かほご","かまう","かまぼこ","かめれおん","かゆい","かようび","からい","かるい","かろう","かわく","かわら","がんか","かんけい","かんこう","かんしゃ","かんそう","かんたん","かんち","がんばる","きあい","きあつ","きいろ","ぎいん","きうい","きうん","きえる","きおう","きおく","きおち","きおん","きかい","きかく","きかんしゃ","ききて","きくばり","きくらげ","きけんせい","きこう","きこえる","きこく","きさい","きさく","きさま","きさらぎ","ぎじかがく","ぎしき","ぎじたいけん","ぎじにってい","ぎじゅつしゃ","きすう","きせい","きせき","きせつ","きそう","きぞく","きぞん","きたえる","きちょう","きつえん","ぎっちり","きつつき","きつね","きてい","きどう","きどく","きない","きなが","きなこ","きぬごし","きねん","きのう","きのした","きはく","きびしい","きひん","きふく","きぶん","きぼう","きほん","きまる","きみつ","きむずかしい","きめる","きもだめし","きもち","きもの","きゃく","きやく","ぎゅうにく","きよう","きょうりゅう","きらい","きらく","きりん","きれい","きれつ","きろく","ぎろん","きわめる","ぎんいろ","きんかくじ","きんじょ","きんようび","ぐあい","くいず","くうかん","くうき","くうぐん","くうこう","ぐうせい","くうそう","ぐうたら","くうふく","くうぼ","くかん","くきょう","くげん","ぐこう","くさい","くさき","くさばな","くさる","くしゃみ","くしょう","くすのき","くすりゆび","くせげ","くせん","ぐたいてき","くださる","くたびれる","くちこみ","くちさき","くつした","ぐっすり","くつろぐ","くとうてん","くどく","くなん","くねくね","くのう","くふう","くみあわせ","くみたてる","くめる","くやくしょ","くらす","くらべる","くるま","くれる","くろう","くわしい","ぐんかん","ぐんしょく","ぐんたい","ぐんて","けあな","けいかく","けいけん","けいこ","けいさつ","げいじゅつ","けいたい","げいのうじん","けいれき","けいろ","けおとす","けおりもの","げきか","げきげん","げきだん","げきちん","げきとつ","げきは","げきやく","げこう","げこくじょう","げざい","けさき","げざん","けしき","けしごむ","けしょう","げすと","けたば","けちゃっぷ","けちらす","けつあつ","けつい","けつえき","けっこん","けつじょ","けっせき","けってい","けつまつ","げつようび","げつれい","けつろん","げどく","けとばす","けとる","けなげ","けなす","けなみ","けぬき","げねつ","けねん","けはい","げひん","けぶかい","げぼく","けまり","けみかる","けむし","けむり","けもの","けらい","けろけろ","けわしい","けんい","けんえつ","けんお","けんか","げんき","けんげん","けんこう","けんさく","けんしゅう","けんすう","げんそう","けんちく","けんてい","けんとう","けんない","けんにん","げんぶつ","けんま","けんみん","けんめい","けんらん","けんり","こあくま","こいぬ","こいびと","ごうい","こうえん","こうおん","こうかん","ごうきゅう","ごうけい","こうこう","こうさい","こうじ","こうすい","ごうせい","こうそく","こうたい","こうちゃ","こうつう","こうてい","こうどう","こうない","こうはい","ごうほう","ごうまん","こうもく","こうりつ","こえる","こおり","ごかい","ごがつ","ごかん","こくご","こくさい","こくとう","こくない","こくはく","こぐま","こけい","こける","ここのか","こころ","こさめ","こしつ","こすう","こせい","こせき","こぜん","こそだて","こたい","こたえる","こたつ","こちょう","こっか","こつこつ","こつばん","こつぶ","こてい","こてん","ことがら","ことし","ことば","ことり","こなごな","こねこね","このまま","このみ","このよ","ごはん","こひつじ","こふう","こふん","こぼれる","ごまあぶら","こまかい","ごますり","こまつな","こまる","こむぎこ","こもじ","こもち","こもの","こもん","こやく","こやま","こゆう","こゆび","こよい","こよう","こりる","これくしょん","ころっけ","こわもて","こわれる","こんいん","こんかい","こんき","こんしゅう","こんすい","こんだて","こんとん","こんなん","こんびに","こんぽん","こんまけ","こんや","こんれい","こんわく","ざいえき","さいかい","さいきん","ざいげん","ざいこ","さいしょ","さいせい","ざいたく","ざいちゅう","さいてき","ざいりょう","さうな","さかいし","さがす","さかな","さかみち","さがる","さぎょう","さくし","さくひん","さくら","さこく","さこつ","さずかる","ざせき","さたん","さつえい","ざつおん","ざっか","ざつがく","さっきょく","ざっし","さつじん","ざっそう","さつたば","さつまいも","さてい","さといも","さとう","さとおや","さとし","さとる","さのう","さばく","さびしい","さべつ","さほう","さほど","さます","さみしい","さみだれ","さむけ","さめる","さやえんどう","さゆう","さよう","さよく","さらだ","ざるそば","さわやか","さわる","さんいん","さんか","さんきゃく","さんこう","さんさい","ざんしょ","さんすう","さんせい","さんそ","さんち","さんま","さんみ","さんらん","しあい","しあげ","しあさって","しあわせ","しいく","しいん","しうち","しえい","しおけ","しかい","しかく","じかん","しごと","しすう","じだい","したうけ","したぎ","したて","したみ","しちょう","しちりん","しっかり","しつじ","しつもん","してい","してき","してつ","じてん","じどう","しなぎれ","しなもの","しなん","しねま","しねん","しのぐ","しのぶ","しはい","しばかり","しはつ","しはらい","しはん","しひょう","しふく","じぶん","しへい","しほう","しほん","しまう","しまる","しみん","しむける","じむしょ","しめい","しめる","しもん","しゃいん","しゃうん","しゃおん","じゃがいも","しやくしょ","しゃくほう","しゃけん","しゃこ","しゃざい","しゃしん","しゃせん","しゃそう","しゃたい","しゃちょう","しゃっきん","じゃま","しゃりん","しゃれい","じゆう","じゅうしょ","しゅくはく","じゅしん","しゅっせき","しゅみ","しゅらば","じゅんばん","しょうかい","しょくたく","しょっけん","しょどう","しょもつ","しらせる","しらべる","しんか","しんこう","じんじゃ","しんせいじ","しんちく","しんりん","すあげ","すあし","すあな","ずあん","すいえい","すいか","すいとう","ずいぶん","すいようび","すうがく","すうじつ","すうせん","すおどり","すきま","すくう","すくない","すける","すごい","すこし","ずさん","すずしい","すすむ","すすめる","すっかり","ずっしり","ずっと","すてき","すてる","すねる","すのこ","すはだ","すばらしい","ずひょう","ずぶぬれ","すぶり","すふれ","すべて","すべる","ずほう","すぼん","すまい","すめし","すもう","すやき","すらすら","するめ","すれちがう","すろっと","すわる","すんぜん","すんぽう","せあぶら","せいかつ","せいげん","せいじ","せいよう","せおう","せかいかん","せきにん","せきむ","せきゆ","せきらんうん","せけん","せこう","せすじ","せたい","せたけ","せっかく","せっきゃく","ぜっく","せっけん","せっこつ","せっさたくま","せつぞく","せつだん","せつでん","せっぱん","せつび","せつぶん","せつめい","せつりつ","せなか","せのび","せはば","せびろ","せぼね","せまい","せまる","せめる","せもたれ","せりふ","ぜんあく","せんい","せんえい","せんか","せんきょ","せんく","せんげん","ぜんご","せんさい","せんしゅ","せんすい","せんせい","せんぞ","せんたく","せんちょう","せんてい","せんとう","せんぬき","せんねん","せんぱい","ぜんぶ","ぜんぽう","せんむ","せんめんじょ","せんもん","せんやく","せんゆう","せんよう","ぜんら","ぜんりゃく","せんれい","せんろ","そあく","そいとげる","そいね","そうがんきょう","そうき","そうご","そうしん","そうだん","そうなん","そうび","そうめん","そうり","そえもの","そえん","そがい","そげき","そこう","そこそこ","そざい","そしな","そせい","そせん","そそぐ","そだてる","そつう","そつえん","そっかん","そつぎょう","そっけつ","そっこう","そっせん","そっと","そとがわ","そとづら","そなえる","そなた","そふぼ","そぼく","そぼろ","そまつ","そまる","そむく","そむりえ","そめる","そもそも","そよかぜ","そらまめ","そろう","そんかい","そんけい","そんざい","そんしつ","そんぞく","そんちょう","ぞんび","ぞんぶん","そんみん","たあい","たいいん","たいうん","たいえき","たいおう","だいがく","たいき","たいぐう","たいけん","たいこ","たいざい","だいじょうぶ","だいすき","たいせつ","たいそう","だいたい","たいちょう","たいてい","だいどころ","たいない","たいねつ","たいのう","たいはん","だいひょう","たいふう","たいへん","たいほ","たいまつばな","たいみんぐ","たいむ","たいめん","たいやき","たいよう","たいら","たいりょく","たいる","たいわん","たうえ","たえる","たおす","たおる","たおれる","たかい","たかね","たきび","たくさん","たこく","たこやき","たさい","たしざん","だじゃれ","たすける","たずさわる","たそがれ","たたかう","たたく","ただしい","たたみ","たちばな","だっかい","だっきゃく","だっこ","だっしゅつ","だったい","たてる","たとえる","たなばた","たにん","たぬき","たのしみ","たはつ","たぶん","たべる","たぼう","たまご","たまる","だむる","ためいき","ためす","ためる","たもつ","たやすい","たよる","たらす","たりきほんがん","たりょう","たりる","たると","たれる","たれんと","たろっと","たわむれる","だんあつ","たんい","たんおん","たんか","たんき","たんけん","たんご","たんさん","たんじょうび","だんせい","たんそく","たんたい","だんち","たんてい","たんとう","だんな","たんにん","だんねつ","たんのう","たんぴん","だんぼう","たんまつ","たんめい","だんれつ","だんろ","だんわ","ちあい","ちあん","ちいき","ちいさい","ちえん","ちかい","ちから","ちきゅう","ちきん","ちけいず","ちけん","ちこく","ちさい","ちしき","ちしりょう","ちせい","ちそう","ちたい","ちたん","ちちおや","ちつじょ","ちてき","ちてん","ちぬき","ちぬり","ちのう","ちひょう","ちへいせん","ちほう","ちまた","ちみつ","ちみどろ","ちめいど","ちゃんこなべ","ちゅうい","ちゆりょく","ちょうし","ちょさくけん","ちらし","ちらみ","ちりがみ","ちりょう","ちるど","ちわわ","ちんたい","ちんもく","ついか","ついたち","つうか","つうじょう","つうはん","つうわ","つかう","つかれる","つくね","つくる","つけね","つける","つごう","つたえる","つづく","つつじ","つつむ","つとめる","つながる","つなみ","つねづね","つのる","つぶす","つまらない","つまる","つみき","つめたい","つもり","つもる","つよい","つるぼ","つるみく","つわもの","つわり","てあし","てあて","てあみ","ていおん","ていか","ていき","ていけい","ていこく","ていさつ","ていし","ていせい","ていたい","ていど","ていねい","ていひょう","ていへん","ていぼう","てうち","ておくれ","てきとう","てくび","でこぼこ","てさぎょう","てさげ","てすり","てそう","てちがい","てちょう","てつがく","てつづき","でっぱ","てつぼう","てつや","でぬかえ","てぬき","てぬぐい","てのひら","てはい","てぶくろ","てふだ","てほどき","てほん","てまえ","てまきずし","てみじか","てみやげ","てらす","てれび","てわけ","てわたし","でんあつ","てんいん","てんかい","てんき","てんぐ","てんけん","てんごく","てんさい","てんし","てんすう","でんち","てんてき","てんとう","てんない","てんぷら","てんぼうだい","てんめつ","てんらんかい","でんりょく","でんわ","どあい","といれ","どうかん","とうきゅう","どうぐ","とうし","とうむぎ","とおい","とおか","とおく","とおす","とおる","とかい","とかす","ときおり","ときどき","とくい","とくしゅう","とくてん","とくに","とくべつ","とけい","とける","とこや","とさか","としょかん","とそう","とたん","とちゅう","とっきゅう","とっくん","とつぜん","とつにゅう","とどける","ととのえる","とない","となえる","となり","とのさま","とばす","どぶがわ","とほう","とまる","とめる","ともだち","ともる","どようび","とらえる","とんかつ","どんぶり","ないかく","ないこう","ないしょ","ないす","ないせん","ないそう","なおす","ながい","なくす","なげる","なこうど","なさけ","なたでここ","なっとう","なつやすみ","ななおし","なにごと","なにもの","なにわ","なのか","なふだ","なまいき","なまえ","なまみ","なみだ","なめらか","なめる","なやむ","ならう","ならび","ならぶ","なれる","なわとび","なわばり","にあう","にいがた","にうけ","におい","にかい","にがて","にきび","にくしみ","にくまん","にげる","にさんかたんそ","にしき","にせもの","にちじょう","にちようび","にっか","にっき","にっけい","にっこう","にっさん","にっしょく","にっすう","にっせき","にってい","になう","にほん","にまめ","にもつ","にやり","にゅういん","にりんしゃ","にわとり","にんい","にんか","にんき","にんげん","にんしき","にんずう","にんそう","にんたい","にんち","にんてい","にんにく","にんぷ","にんまり","にんむ","にんめい","にんよう","ぬいくぎ","ぬかす","ぬぐいとる","ぬぐう","ぬくもり","ぬすむ","ぬまえび","ぬめり","ぬらす","ぬんちゃく","ねあげ","ねいき","ねいる","ねいろ","ねぐせ","ねくたい","ねくら","ねこぜ","ねこむ","ねさげ","ねすごす","ねそべる","ねだん","ねつい","ねっしん","ねつぞう","ねったいぎょ","ねぶそく","ねふだ","ねぼう","ねほりはほり","ねまき","ねまわし","ねみみ","ねむい","ねむたい","ねもと","ねらう","ねわざ","ねんいり","ねんおし","ねんかん","ねんきん","ねんぐ","ねんざ","ねんし","ねんちゃく","ねんど","ねんぴ","ねんぶつ","ねんまつ","ねんりょう","ねんれい","のいず","のおづま","のがす","のきなみ","のこぎり","のこす","のこる","のせる","のぞく","のぞむ","のたまう","のちほど","のっく","のばす","のはら","のべる","のぼる","のみもの","のやま","のらいぬ","のらねこ","のりもの","のりゆき","のれん","のんき","ばあい","はあく","ばあさん","ばいか","ばいく","はいけん","はいご","はいしん","はいすい","はいせん","はいそう","はいち","ばいばい","はいれつ","はえる","はおる","はかい","ばかり","はかる","はくしゅ","はけん","はこぶ","はさみ","はさん","はしご","ばしょ","はしる","はせる","ぱそこん","はそん","はたん","はちみつ","はつおん","はっかく","はづき","はっきり","はっくつ","はっけん","はっこう","はっさん","はっしん","はったつ","はっちゅう","はってん","はっぴょう","はっぽう","はなす","はなび","はにかむ","はぶらし","はみがき","はむかう","はめつ","はやい","はやし","はらう","はろうぃん","はわい","はんい","はんえい","はんおん","はんかく","はんきょう","ばんぐみ","はんこ","はんしゃ","はんすう","はんだん","ぱんち","ぱんつ","はんてい","はんとし","はんのう","はんぱ","はんぶん","はんぺん","はんぼうき","はんめい","はんらん","はんろん","ひいき","ひうん","ひえる","ひかく","ひかり","ひかる","ひかん","ひくい","ひけつ","ひこうき","ひこく","ひさい","ひさしぶり","ひさん","びじゅつかん","ひしょ","ひそか","ひそむ","ひたむき","ひだり","ひたる","ひつぎ","ひっこし","ひっし","ひつじゅひん","ひっす","ひつぜん","ぴったり","ぴっちり","ひつよう","ひてい","ひとごみ","ひなまつり","ひなん","ひねる","ひはん","ひびく","ひひょう","ひほう","ひまわり","ひまん","ひみつ","ひめい","ひめじし","ひやけ","ひやす","ひよう","びょうき","ひらがな","ひらく","ひりつ","ひりょう","ひるま","ひるやすみ","ひれい","ひろい","ひろう","ひろき","ひろゆき","ひんかく","ひんけつ","ひんこん","ひんしゅ","ひんそう","ぴんち","ひんぱん","びんぼう","ふあん","ふいうち","ふうけい","ふうせん","ぷうたろう","ふうとう","ふうふ","ふえる","ふおん","ふかい","ふきん","ふくざつ","ふくぶくろ","ふこう","ふさい","ふしぎ","ふじみ","ふすま","ふせい","ふせぐ","ふそく","ぶたにく","ふたん","ふちょう","ふつう","ふつか","ふっかつ","ふっき","ふっこく","ぶどう","ふとる","ふとん","ふのう","ふはい","ふひょう","ふへん","ふまん","ふみん","ふめつ","ふめん","ふよう","ふりこ","ふりる","ふるい","ふんいき","ぶんがく","ぶんぐ","ふんしつ","ぶんせき","ふんそう","ぶんぽう","へいあん","へいおん","へいがい","へいき","へいげん","へいこう","へいさ","へいしゃ","へいせつ","へいそ","へいたく","へいてん","へいねつ","へいわ","へきが","へこむ","べにいろ","べにしょうが","へらす","へんかん","べんきょう","べんごし","へんさい","へんたい","べんり","ほあん","ほいく","ぼうぎょ","ほうこく","ほうそう","ほうほう","ほうもん","ほうりつ","ほえる","ほおん","ほかん","ほきょう","ぼきん","ほくろ","ほけつ","ほけん","ほこう","ほこる","ほしい","ほしつ","ほしゅ","ほしょう","ほせい","ほそい","ほそく","ほたて","ほたる","ぽちぶくろ","ほっきょく","ほっさ","ほったん","ほとんど","ほめる","ほんい","ほんき","ほんけ","ほんしつ","ほんやく","まいにち","まかい","まかせる","まがる","まける","まこと","まさつ","まじめ","ますく","まぜる","まつり","まとめ","まなぶ","まぬけ","まねく","まほう","まもる","まゆげ","まよう","まろやか","まわす","まわり","まわる","まんが","まんきつ","まんぞく","まんなか","みいら","みうち","みえる","みがく","みかた","みかん","みけん","みこん","みじかい","みすい","みすえる","みせる","みっか","みつかる","みつける","みてい","みとめる","みなと","みなみかさい","みねらる","みのう","みのがす","みほん","みもと","みやげ","みらい","みりょく","みわく","みんか","みんぞく","むいか","むえき","むえん","むかい","むかう","むかえ","むかし","むぎちゃ","むける","むげん","むさぼる","むしあつい","むしば","むじゅん","むしろ","むすう","むすこ","むすぶ","むすめ","むせる","むせん","むちゅう","むなしい","むのう","むやみ","むよう","むらさき","むりょう","むろん","めいあん","めいうん","めいえん","めいかく","めいきょく","めいさい","めいし","めいそう","めいぶつ","めいれい","めいわく","めぐまれる","めざす","めした","めずらしい","めだつ","めまい","めやす","めんきょ","めんせき","めんどう","もうしあげる","もうどうけん","もえる","もくし","もくてき","もくようび","もちろん","もどる","もらう","もんく","もんだい","やおや","やける","やさい","やさしい","やすい","やすたろう","やすみ","やせる","やそう","やたい","やちん","やっと","やっぱり","やぶる","やめる","ややこしい","やよい","やわらかい","ゆうき","ゆうびんきょく","ゆうべ","ゆうめい","ゆけつ","ゆしゅつ","ゆせん","ゆそう","ゆたか","ゆちゃく","ゆでる","ゆにゅう","ゆびわ","ゆらい","ゆれる","ようい","ようか","ようきゅう","ようじ","ようす","ようちえん","よかぜ","よかん","よきん","よくせい","よくぼう","よけい","よごれる","よさん","よしゅう","よそう","よそく","よっか","よてい","よどがわく","よねつ","よやく","よゆう","よろこぶ","よろしい","らいう","らくがき","らくご","らくさつ","らくだ","らしんばん","らせん","らぞく","らたい","らっか","られつ","りえき","りかい","りきさく","りきせつ","りくぐん","りくつ","りけん","りこう","りせい","りそう","りそく","りてん","りねん","りゆう","りゅうがく","りよう","りょうり","りょかん","りょくちゃ","りょこう","りりく","りれき","りろん","りんご","るいけい","るいさい","るいじ","るいせき","るすばん","るりがわら","れいかん","れいぎ","れいせい","れいぞうこ","れいとう","れいぼう","れきし","れきだい","れんあい","れんけい","れんこん","れんさい","れんしゅう","れんぞく","れんらく","ろうか","ろうご","ろうじん","ろうそく","ろくが","ろこつ","ろじうら","ろしゅつ","ろせん","ろてん","ろめん","ろれつ","ろんぎ","ろんぱ","ろんぶん","ろんり","わかす","わかめ","わかやま","わかれる","わしつ","わじまし","わすれもの","わらう","われる"]');

/***/ }),

/***/ 13517:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('["가격","가끔","가난","가능","가득","가르침","가뭄","가방","가상","가슴","가운데","가을","가이드","가입","가장","가정","가족","가죽","각오","각자","간격","간부","간섭","간장","간접","간판","갈등","갈비","갈색","갈증","감각","감기","감소","감수성","감자","감정","갑자기","강남","강당","강도","강력히","강변","강북","강사","강수량","강아지","강원도","강의","강제","강조","같이","개구리","개나리","개방","개별","개선","개성","개인","객관적","거실","거액","거울","거짓","거품","걱정","건강","건물","건설","건조","건축","걸음","검사","검토","게시판","게임","겨울","견해","결과","결국","결론","결석","결승","결심","결정","결혼","경계","경고","경기","경력","경복궁","경비","경상도","경영","경우","경쟁","경제","경주","경찰","경치","경향","경험","계곡","계단","계란","계산","계속","계약","계절","계층","계획","고객","고구려","고궁","고급","고등학생","고무신","고민","고양이","고장","고전","고집","고춧가루","고통","고향","곡식","골목","골짜기","골프","공간","공개","공격","공군","공급","공기","공동","공무원","공부","공사","공식","공업","공연","공원","공장","공짜","공책","공통","공포","공항","공휴일","과목","과일","과장","과정","과학","관객","관계","관광","관념","관람","관련","관리","관습","관심","관점","관찰","광경","광고","광장","광주","괴로움","굉장히","교과서","교문","교복","교실","교양","교육","교장","교직","교통","교환","교훈","구경","구름","구멍","구별","구분","구석","구성","구속","구역","구입","구청","구체적","국가","국기","국내","국립","국물","국민","국수","국어","국왕","국적","국제","국회","군대","군사","군인","궁극적","권리","권위","권투","귀국","귀신","규정","규칙","균형","그날","그냥","그늘","그러나","그룹","그릇","그림","그제서야","그토록","극복","극히","근거","근교","근래","근로","근무","근본","근원","근육","근처","글씨","글자","금강산","금고","금년","금메달","금액","금연","금요일","금지","긍정적","기간","기관","기념","기능","기독교","기둥","기록","기름","기법","기본","기분","기쁨","기숙사","기술","기억","기업","기온","기운","기원","기적","기준","기침","기혼","기획","긴급","긴장","길이","김밥","김치","김포공항","깍두기","깜빡","깨달음","깨소금","껍질","꼭대기","꽃잎","나들이","나란히","나머지","나물","나침반","나흘","낙엽","난방","날개","날씨","날짜","남녀","남대문","남매","남산","남자","남편","남학생","낭비","낱말","내년","내용","내일","냄비","냄새","냇물","냉동","냉면","냉방","냉장고","넥타이","넷째","노동","노란색","노력","노인","녹음","녹차","녹화","논리","논문","논쟁","놀이","농구","농담","농민","농부","농업","농장","농촌","높이","눈동자","눈물","눈썹","뉴욕","느낌","늑대","능동적","능력","다방","다양성","다음","다이어트","다행","단계","단골","단독","단맛","단순","단어","단위","단점","단체","단추","단편","단풍","달걀","달러","달력","달리","닭고기","담당","담배","담요","담임","답변","답장","당근","당분간","당연히","당장","대규모","대낮","대단히","대답","대도시","대략","대량","대륙","대문","대부분","대신","대응","대장","대전","대접","대중","대책","대출","대충","대통령","대학","대한민국","대합실","대형","덩어리","데이트","도대체","도덕","도둑","도망","도서관","도심","도움","도입","도자기","도저히","도전","도중","도착","독감","독립","독서","독일","독창적","동화책","뒷모습","뒷산","딸아이","마누라","마늘","마당","마라톤","마련","마무리","마사지","마약","마요네즈","마을","마음","마이크","마중","마지막","마찬가지","마찰","마흔","막걸리","막내","막상","만남","만두","만세","만약","만일","만점","만족","만화","많이","말기","말씀","말투","맘대로","망원경","매년","매달","매력","매번","매스컴","매일","매장","맥주","먹이","먼저","먼지","멀리","메일","며느리","며칠","면담","멸치","명단","명령","명예","명의","명절","명칭","명함","모금","모니터","모델","모든","모범","모습","모양","모임","모조리","모집","모퉁이","목걸이","목록","목사","목소리","목숨","목적","목표","몰래","몸매","몸무게","몸살","몸속","몸짓","몸통","몹시","무관심","무궁화","무더위","무덤","무릎","무슨","무엇","무역","무용","무조건","무지개","무척","문구","문득","문법","문서","문제","문학","문화","물가","물건","물결","물고기","물론","물리학","물음","물질","물체","미국","미디어","미사일","미술","미역","미용실","미움","미인","미팅","미혼","민간","민족","민주","믿음","밀가루","밀리미터","밑바닥","바가지","바구니","바나나","바늘","바닥","바닷가","바람","바이러스","바탕","박물관","박사","박수","반대","반드시","반말","반발","반성","반응","반장","반죽","반지","반찬","받침","발가락","발걸음","발견","발달","발레","발목","발바닥","발생","발음","발자국","발전","발톱","발표","밤하늘","밥그릇","밥맛","밥상","밥솥","방금","방면","방문","방바닥","방법","방송","방식","방안","방울","방지","방학","방해","방향","배경","배꼽","배달","배드민턴","백두산","백색","백성","백인","백제","백화점","버릇","버섯","버튼","번개","번역","번지","번호","벌금","벌레","벌써","범위","범인","범죄","법률","법원","법적","법칙","베이징","벨트","변경","변동","변명","변신","변호사","변화","별도","별명","별일","병실","병아리","병원","보관","보너스","보라색","보람","보름","보상","보안","보자기","보장","보전","보존","보통","보편적","보험","복도","복사","복숭아","복습","볶음","본격적","본래","본부","본사","본성","본인","본질","볼펜","봉사","봉지","봉투","부근","부끄러움","부담","부동산","부문","부분","부산","부상","부엌","부인","부작용","부장","부정","부족","부지런히","부친","부탁","부품","부회장","북부","북한","분노","분량","분리","분명","분석","분야","분위기","분필","분홍색","불고기","불과","불교","불꽃","불만","불법","불빛","불안","불이익","불행","브랜드","비극","비난","비닐","비둘기","비디오","비로소","비만","비명","비밀","비바람","비빔밥","비상","비용","비율","비중","비타민","비판","빌딩","빗물","빗방울","빗줄기","빛깔","빨간색","빨래","빨리","사건","사계절","사나이","사냥","사람","사랑","사립","사모님","사물","사방","사상","사생활","사설","사슴","사실","사업","사용","사월","사장","사전","사진","사촌","사춘기","사탕","사투리","사흘","산길","산부인과","산업","산책","살림","살인","살짝","삼계탕","삼국","삼십","삼월","삼촌","상관","상금","상대","상류","상반기","상상","상식","상업","상인","상자","상점","상처","상추","상태","상표","상품","상황","새벽","색깔","색연필","생각","생명","생물","생방송","생산","생선","생신","생일","생활","서랍","서른","서명","서민","서비스","서양","서울","서적","서점","서쪽","서클","석사","석유","선거","선물","선배","선생","선수","선원","선장","선전","선택","선풍기","설거지","설날","설렁탕","설명","설문","설사","설악산","설치","설탕","섭씨","성공","성당","성명","성별","성인","성장","성적","성질","성함","세금","세미나","세상","세월","세종대왕","세탁","센터","센티미터","셋째","소규모","소극적","소금","소나기","소년","소득","소망","소문","소설","소속","소아과","소용","소원","소음","소중히","소지품","소질","소풍","소형","속담","속도","속옷","손가락","손길","손녀","손님","손등","손목","손뼉","손실","손질","손톱","손해","솔직히","솜씨","송아지","송이","송편","쇠고기","쇼핑","수건","수년","수단","수돗물","수동적","수면","수명","수박","수상","수석","수술","수시로","수업","수염","수영","수입","수준","수집","수출","수컷","수필","수학","수험생","수화기","숙녀","숙소","숙제","순간","순서","순수","순식간","순위","숟가락","술병","술집","숫자","스님","스물","스스로","스승","스웨터","스위치","스케이트","스튜디오","스트레스","스포츠","슬쩍","슬픔","습관","습기","승객","승리","승부","승용차","승진","시각","시간","시골","시금치","시나리오","시댁","시리즈","시멘트","시민","시부모","시선","시설","시스템","시아버지","시어머니","시월","시인","시일","시작","시장","시절","시점","시중","시즌","시집","시청","시합","시험","식구","식기","식당","식량","식료품","식물","식빵","식사","식생활","식초","식탁","식품","신고","신규","신념","신문","신발","신비","신사","신세","신용","신제품","신청","신체","신화","실감","실내","실력","실례","실망","실수","실습","실시","실장","실정","실질적","실천","실체","실컷","실태","실패","실험","실현","심리","심부름","심사","심장","심정","심판","쌍둥이","씨름","씨앗","아가씨","아나운서","아드님","아들","아쉬움","아스팔트","아시아","아울러","아저씨","아줌마","아직","아침","아파트","아프리카","아픔","아홉","아흔","악기","악몽","악수","안개","안경","안과","안내","안녕","안동","안방","안부","안주","알루미늄","알코올","암시","암컷","압력","앞날","앞문","애인","애정","액수","앨범","야간","야단","야옹","약간","약국","약속","약수","약점","약품","약혼녀","양념","양력","양말","양배추","양주","양파","어둠","어려움","어른","어젯밤","어쨌든","어쩌다가","어쩐지","언니","언덕","언론","언어","얼굴","얼른","얼음","얼핏","엄마","업무","업종","업체","엉덩이","엉망","엉터리","엊그제","에너지","에어컨","엔진","여건","여고생","여관","여군","여권","여대생","여덟","여동생","여든","여론","여름","여섯","여성","여왕","여인","여전히","여직원","여학생","여행","역사","역시","역할","연결","연구","연극","연기","연락","연설","연세","연속","연습","연애","연예인","연인","연장","연주","연출","연필","연합","연휴","열기","열매","열쇠","열심히","열정","열차","열흘","염려","엽서","영국","영남","영상","영양","영역","영웅","영원히","영하","영향","영혼","영화","옆구리","옆방","옆집","예감","예금","예방","예산","예상","예선","예술","예습","예식장","예약","예전","예절","예정","예컨대","옛날","오늘","오락","오랫동안","오렌지","오로지","오른발","오븐","오십","오염","오월","오전","오직","오징어","오페라","오피스텔","오히려","옥상","옥수수","온갖","온라인","온몸","온종일","온통","올가을","올림픽","올해","옷차림","와이셔츠","와인","완성","완전","왕비","왕자","왜냐하면","왠지","외갓집","외국","외로움","외삼촌","외출","외침","외할머니","왼발","왼손","왼쪽","요금","요일","요즘","요청","용기","용서","용어","우산","우선","우승","우연히","우정","우체국","우편","운동","운명","운반","운전","운행","울산","울음","움직임","웃어른","웃음","워낙","원고","원래","원서","원숭이","원인","원장","원피스","월급","월드컵","월세","월요일","웨이터","위반","위법","위성","위원","위험","위협","윗사람","유난히","유럽","유명","유물","유산","유적","유치원","유학","유행","유형","육군","육상","육십","육체","은행","음력","음료","음반","음성","음식","음악","음주","의견","의논","의문","의복","의식","의심","의외로","의욕","의원","의학","이것","이곳","이념","이놈","이달","이대로","이동","이렇게","이력서","이론적","이름","이민","이발소","이별","이불","이빨","이상","이성","이슬","이야기","이용","이웃","이월","이윽고","이익","이전","이중","이튿날","이틀","이혼","인간","인격","인공","인구","인근","인기","인도","인류","인물","인생","인쇄","인연","인원","인재","인종","인천","인체","인터넷","인하","인형","일곱","일기","일단","일대","일등","일반","일본","일부","일상","일생","일손","일요일","일월","일정","일종","일주일","일찍","일체","일치","일행","일회용","임금","임무","입대","입력","입맛","입사","입술","입시","입원","입장","입학","자가용","자격","자극","자동","자랑","자부심","자식","자신","자연","자원","자율","자전거","자정","자존심","자판","작가","작년","작성","작업","작용","작은딸","작품","잔디","잔뜩","잔치","잘못","잠깐","잠수함","잠시","잠옷","잠자리","잡지","장관","장군","장기간","장래","장례","장르","장마","장면","장모","장미","장비","장사","장소","장식","장애인","장인","장점","장차","장학금","재능","재빨리","재산","재생","재작년","재정","재채기","재판","재학","재활용","저것","저고리","저곳","저녁","저런","저렇게","저번","저울","저절로","저축","적극","적당히","적성","적용","적응","전개","전공","전기","전달","전라도","전망","전문","전반","전부","전세","전시","전용","전자","전쟁","전주","전철","전체","전통","전혀","전후","절대","절망","절반","절약","절차","점검","점수","점심","점원","점점","점차","접근","접시","접촉","젓가락","정거장","정도","정류장","정리","정말","정면","정문","정반대","정보","정부","정비","정상","정성","정오","정원","정장","정지","정치","정확히","제공","제과점","제대로","제목","제발","제법","제삿날","제안","제일","제작","제주도","제출","제품","제한","조각","조건","조금","조깅","조명","조미료","조상","조선","조용히","조절","조정","조직","존댓말","존재","졸업","졸음","종교","종로","종류","종소리","종업원","종종","종합","좌석","죄인","주관적","주름","주말","주머니","주먹","주문","주민","주방","주변","주식","주인","주일","주장","주전자","주택","준비","줄거리","줄기","줄무늬","중간","중계방송","중국","중년","중단","중독","중반","중부","중세","중소기업","중순","중앙","중요","중학교","즉석","즉시","즐거움","증가","증거","증권","증상","증세","지각","지갑","지경","지극히","지금","지급","지능","지름길","지리산","지방","지붕","지식","지역","지우개","지원","지적","지점","지진","지출","직선","직업","직원","직장","진급","진동","진로","진료","진리","진짜","진찰","진출","진통","진행","질문","질병","질서","짐작","집단","집안","집중","짜증","찌꺼기","차남","차라리","차량","차림","차별","차선","차츰","착각","찬물","찬성","참가","참기름","참새","참석","참여","참외","참조","찻잔","창가","창고","창구","창문","창밖","창작","창조","채널","채점","책가방","책방","책상","책임","챔피언","처벌","처음","천국","천둥","천장","천재","천천히","철도","철저히","철학","첫날","첫째","청년","청바지","청소","청춘","체계","체력","체온","체육","체중","체험","초등학생","초반","초밥","초상화","초순","초여름","초원","초저녁","초점","초청","초콜릿","촛불","총각","총리","총장","촬영","최근","최상","최선","최신","최악","최종","추석","추억","추진","추천","추측","축구","축소","축제","축하","출근","출발","출산","출신","출연","출입","출장","출판","충격","충고","충돌","충분히","충청도","취업","취직","취향","치약","친구","친척","칠십","칠월","칠판","침대","침묵","침실","칫솔","칭찬","카메라","카운터","칼국수","캐릭터","캠퍼스","캠페인","커튼","컨디션","컬러","컴퓨터","코끼리","코미디","콘서트","콜라","콤플렉스","콩나물","쾌감","쿠데타","크림","큰길","큰딸","큰소리","큰아들","큰어머니","큰일","큰절","클래식","클럽","킬로","타입","타자기","탁구","탁자","탄생","태권도","태양","태풍","택시","탤런트","터널","터미널","테니스","테스트","테이블","텔레비전","토론","토마토","토요일","통계","통과","통로","통신","통역","통일","통장","통제","통증","통합","통화","퇴근","퇴원","퇴직금","튀김","트럭","특급","특별","특성","특수","특징","특히","튼튼히","티셔츠","파란색","파일","파출소","판결","판단","판매","판사","팔십","팔월","팝송","패션","팩스","팩시밀리","팬티","퍼센트","페인트","편견","편의","편지","편히","평가","평균","평생","평소","평양","평일","평화","포스터","포인트","포장","포함","표면","표정","표준","표현","품목","품질","풍경","풍속","풍습","프랑스","프린터","플라스틱","피곤","피망","피아노","필름","필수","필요","필자","필통","핑계","하느님","하늘","하드웨어","하룻밤","하반기","하숙집","하순","하여튼","하지만","하천","하품","하필","학과","학교","학급","학기","학년","학력","학번","학부모","학비","학생","학술","학습","학용품","학원","학위","학자","학점","한계","한글","한꺼번에","한낮","한눈","한동안","한때","한라산","한마디","한문","한번","한복","한식","한여름","한쪽","할머니","할아버지","할인","함께","함부로","합격","합리적","항공","항구","항상","항의","해결","해군","해답","해당","해물","해석","해설","해수욕장","해안","핵심","핸드백","햄버거","햇볕","햇살","행동","행복","행사","행운","행위","향기","향상","향수","허락","허용","헬기","현관","현금","현대","현상","현실","현장","현재","현지","혈액","협력","형부","형사","형수","형식","형제","형태","형편","혜택","호기심","호남","호랑이","호박","호텔","호흡","혹시","홀로","홈페이지","홍보","홍수","홍차","화면","화분","화살","화요일","화장","화학","확보","확인","확장","확정","환갑","환경","환영","환율","환자","활기","활동","활발히","활용","활짝","회견","회관","회복","회색","회원","회장","회전","횟수","횡단보도","효율적","후반","후춧가루","훈련","훨씬","휴식","휴일","흉내","흐름","흑백","흑인","흔적","흔히","흥미","흥분","희곡","희망","희생","흰색","힘껏"]');

/***/ }),

/***/ 5043:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('["ábaco","abdomen","abeja","abierto","abogado","abono","aborto","abrazo","abrir","abuelo","abuso","acabar","academia","acceso","acción","aceite","acelga","acento","aceptar","ácido","aclarar","acné","acoger","acoso","activo","acto","actriz","actuar","acudir","acuerdo","acusar","adicto","admitir","adoptar","adorno","aduana","adulto","aéreo","afectar","afición","afinar","afirmar","ágil","agitar","agonía","agosto","agotar","agregar","agrio","agua","agudo","águila","aguja","ahogo","ahorro","aire","aislar","ajedrez","ajeno","ajuste","alacrán","alambre","alarma","alba","álbum","alcalde","aldea","alegre","alejar","alerta","aleta","alfiler","alga","algodón","aliado","aliento","alivio","alma","almeja","almíbar","altar","alteza","altivo","alto","altura","alumno","alzar","amable","amante","amapola","amargo","amasar","ámbar","ámbito","ameno","amigo","amistad","amor","amparo","amplio","ancho","anciano","ancla","andar","andén","anemia","ángulo","anillo","ánimo","anís","anotar","antena","antiguo","antojo","anual","anular","anuncio","añadir","añejo","año","apagar","aparato","apetito","apio","aplicar","apodo","aporte","apoyo","aprender","aprobar","apuesta","apuro","arado","araña","arar","árbitro","árbol","arbusto","archivo","arco","arder","ardilla","arduo","área","árido","aries","armonía","arnés","aroma","arpa","arpón","arreglo","arroz","arruga","arte","artista","asa","asado","asalto","ascenso","asegurar","aseo","asesor","asiento","asilo","asistir","asno","asombro","áspero","astilla","astro","astuto","asumir","asunto","atajo","ataque","atar","atento","ateo","ático","atleta","átomo","atraer","atroz","atún","audaz","audio","auge","aula","aumento","ausente","autor","aval","avance","avaro","ave","avellana","avena","avestruz","avión","aviso","ayer","ayuda","ayuno","azafrán","azar","azote","azúcar","azufre","azul","baba","babor","bache","bahía","baile","bajar","balanza","balcón","balde","bambú","banco","banda","baño","barba","barco","barniz","barro","báscula","bastón","basura","batalla","batería","batir","batuta","baúl","bazar","bebé","bebida","bello","besar","beso","bestia","bicho","bien","bingo","blanco","bloque","blusa","boa","bobina","bobo","boca","bocina","boda","bodega","boina","bola","bolero","bolsa","bomba","bondad","bonito","bono","bonsái","borde","borrar","bosque","bote","botín","bóveda","bozal","bravo","brazo","brecha","breve","brillo","brinco","brisa","broca","broma","bronce","brote","bruja","brusco","bruto","buceo","bucle","bueno","buey","bufanda","bufón","búho","buitre","bulto","burbuja","burla","burro","buscar","butaca","buzón","caballo","cabeza","cabina","cabra","cacao","cadáver","cadena","caer","café","caída","caimán","caja","cajón","cal","calamar","calcio","caldo","calidad","calle","calma","calor","calvo","cama","cambio","camello","camino","campo","cáncer","candil","canela","canguro","canica","canto","caña","cañón","caoba","caos","capaz","capitán","capote","captar","capucha","cara","carbón","cárcel","careta","carga","cariño","carne","carpeta","carro","carta","casa","casco","casero","caspa","castor","catorce","catre","caudal","causa","cazo","cebolla","ceder","cedro","celda","célebre","celoso","célula","cemento","ceniza","centro","cerca","cerdo","cereza","cero","cerrar","certeza","césped","cetro","chacal","chaleco","champú","chancla","chapa","charla","chico","chiste","chivo","choque","choza","chuleta","chupar","ciclón","ciego","cielo","cien","cierto","cifra","cigarro","cima","cinco","cine","cinta","ciprés","circo","ciruela","cisne","cita","ciudad","clamor","clan","claro","clase","clave","cliente","clima","clínica","cobre","cocción","cochino","cocina","coco","código","codo","cofre","coger","cohete","cojín","cojo","cola","colcha","colegio","colgar","colina","collar","colmo","columna","combate","comer","comida","cómodo","compra","conde","conejo","conga","conocer","consejo","contar","copa","copia","corazón","corbata","corcho","cordón","corona","correr","coser","cosmos","costa","cráneo","cráter","crear","crecer","creído","crema","cría","crimen","cripta","crisis","cromo","crónica","croqueta","crudo","cruz","cuadro","cuarto","cuatro","cubo","cubrir","cuchara","cuello","cuento","cuerda","cuesta","cueva","cuidar","culebra","culpa","culto","cumbre","cumplir","cuna","cuneta","cuota","cupón","cúpula","curar","curioso","curso","curva","cutis","dama","danza","dar","dardo","dátil","deber","débil","década","decir","dedo","defensa","definir","dejar","delfín","delgado","delito","demora","denso","dental","deporte","derecho","derrota","desayuno","deseo","desfile","desnudo","destino","desvío","detalle","detener","deuda","día","diablo","diadema","diamante","diana","diario","dibujo","dictar","diente","dieta","diez","difícil","digno","dilema","diluir","dinero","directo","dirigir","disco","diseño","disfraz","diva","divino","doble","doce","dolor","domingo","don","donar","dorado","dormir","dorso","dos","dosis","dragón","droga","ducha","duda","duelo","dueño","dulce","dúo","duque","durar","dureza","duro","ébano","ebrio","echar","eco","ecuador","edad","edición","edificio","editor","educar","efecto","eficaz","eje","ejemplo","elefante","elegir","elemento","elevar","elipse","élite","elixir","elogio","eludir","embudo","emitir","emoción","empate","empeño","empleo","empresa","enano","encargo","enchufe","encía","enemigo","enero","enfado","enfermo","engaño","enigma","enlace","enorme","enredo","ensayo","enseñar","entero","entrar","envase","envío","época","equipo","erizo","escala","escena","escolar","escribir","escudo","esencia","esfera","esfuerzo","espada","espejo","espía","esposa","espuma","esquí","estar","este","estilo","estufa","etapa","eterno","ética","etnia","evadir","evaluar","evento","evitar","exacto","examen","exceso","excusa","exento","exigir","exilio","existir","éxito","experto","explicar","exponer","extremo","fábrica","fábula","fachada","fácil","factor","faena","faja","falda","fallo","falso","faltar","fama","familia","famoso","faraón","farmacia","farol","farsa","fase","fatiga","fauna","favor","fax","febrero","fecha","feliz","feo","feria","feroz","fértil","fervor","festín","fiable","fianza","fiar","fibra","ficción","ficha","fideo","fiebre","fiel","fiera","fiesta","figura","fijar","fijo","fila","filete","filial","filtro","fin","finca","fingir","finito","firma","flaco","flauta","flecha","flor","flota","fluir","flujo","flúor","fobia","foca","fogata","fogón","folio","folleto","fondo","forma","forro","fortuna","forzar","fosa","foto","fracaso","frágil","franja","frase","fraude","freír","freno","fresa","frío","frito","fruta","fuego","fuente","fuerza","fuga","fumar","función","funda","furgón","furia","fusil","fútbol","futuro","gacela","gafas","gaita","gajo","gala","galería","gallo","gamba","ganar","gancho","ganga","ganso","garaje","garza","gasolina","gastar","gato","gavilán","gemelo","gemir","gen","género","genio","gente","geranio","gerente","germen","gesto","gigante","gimnasio","girar","giro","glaciar","globo","gloria","gol","golfo","goloso","golpe","goma","gordo","gorila","gorra","gota","goteo","gozar","grada","gráfico","grano","grasa","gratis","grave","grieta","grillo","gripe","gris","grito","grosor","grúa","grueso","grumo","grupo","guante","guapo","guardia","guerra","guía","guiño","guion","guiso","guitarra","gusano","gustar","haber","hábil","hablar","hacer","hacha","hada","hallar","hamaca","harina","haz","hazaña","hebilla","hebra","hecho","helado","helio","hembra","herir","hermano","héroe","hervir","hielo","hierro","hígado","higiene","hijo","himno","historia","hocico","hogar","hoguera","hoja","hombre","hongo","honor","honra","hora","hormiga","horno","hostil","hoyo","hueco","huelga","huerta","hueso","huevo","huida","huir","humano","húmedo","humilde","humo","hundir","huracán","hurto","icono","ideal","idioma","ídolo","iglesia","iglú","igual","ilegal","ilusión","imagen","imán","imitar","impar","imperio","imponer","impulso","incapaz","índice","inerte","infiel","informe","ingenio","inicio","inmenso","inmune","innato","insecto","instante","interés","íntimo","intuir","inútil","invierno","ira","iris","ironía","isla","islote","jabalí","jabón","jamón","jarabe","jardín","jarra","jaula","jazmín","jefe","jeringa","jinete","jornada","joroba","joven","joya","juerga","jueves","juez","jugador","jugo","juguete","juicio","junco","jungla","junio","juntar","júpiter","jurar","justo","juvenil","juzgar","kilo","koala","labio","lacio","lacra","lado","ladrón","lagarto","lágrima","laguna","laico","lamer","lámina","lámpara","lana","lancha","langosta","lanza","lápiz","largo","larva","lástima","lata","látex","latir","laurel","lavar","lazo","leal","lección","leche","lector","leer","legión","legumbre","lejano","lengua","lento","leña","león","leopardo","lesión","letal","letra","leve","leyenda","libertad","libro","licor","líder","lidiar","lienzo","liga","ligero","lima","límite","limón","limpio","lince","lindo","línea","lingote","lino","linterna","líquido","liso","lista","litera","litio","litro","llaga","llama","llanto","llave","llegar","llenar","llevar","llorar","llover","lluvia","lobo","loción","loco","locura","lógica","logro","lombriz","lomo","lonja","lote","lucha","lucir","lugar","lujo","luna","lunes","lupa","lustro","luto","luz","maceta","macho","madera","madre","maduro","maestro","mafia","magia","mago","maíz","maldad","maleta","malla","malo","mamá","mambo","mamut","manco","mando","manejar","manga","maniquí","manjar","mano","manso","manta","mañana","mapa","máquina","mar","marco","marea","marfil","margen","marido","mármol","marrón","martes","marzo","masa","máscara","masivo","matar","materia","matiz","matriz","máximo","mayor","mazorca","mecha","medalla","medio","médula","mejilla","mejor","melena","melón","memoria","menor","mensaje","mente","menú","mercado","merengue","mérito","mes","mesón","meta","meter","método","metro","mezcla","miedo","miel","miembro","miga","mil","milagro","militar","millón","mimo","mina","minero","mínimo","minuto","miope","mirar","misa","miseria","misil","mismo","mitad","mito","mochila","moción","moda","modelo","moho","mojar","molde","moler","molino","momento","momia","monarca","moneda","monja","monto","moño","morada","morder","moreno","morir","morro","morsa","mortal","mosca","mostrar","motivo","mover","móvil","mozo","mucho","mudar","mueble","muela","muerte","muestra","mugre","mujer","mula","muleta","multa","mundo","muñeca","mural","muro","músculo","museo","musgo","música","muslo","nácar","nación","nadar","naipe","naranja","nariz","narrar","nasal","natal","nativo","natural","náusea","naval","nave","navidad","necio","néctar","negar","negocio","negro","neón","nervio","neto","neutro","nevar","nevera","nicho","nido","niebla","nieto","niñez","niño","nítido","nivel","nobleza","noche","nómina","noria","norma","norte","nota","noticia","novato","novela","novio","nube","nuca","núcleo","nudillo","nudo","nuera","nueve","nuez","nulo","número","nutria","oasis","obeso","obispo","objeto","obra","obrero","observar","obtener","obvio","oca","ocaso","océano","ochenta","ocho","ocio","ocre","octavo","octubre","oculto","ocupar","ocurrir","odiar","odio","odisea","oeste","ofensa","oferta","oficio","ofrecer","ogro","oído","oír","ojo","ola","oleada","olfato","olivo","olla","olmo","olor","olvido","ombligo","onda","onza","opaco","opción","ópera","opinar","oponer","optar","óptica","opuesto","oración","orador","oral","órbita","orca","orden","oreja","órgano","orgía","orgullo","oriente","origen","orilla","oro","orquesta","oruga","osadía","oscuro","osezno","oso","ostra","otoño","otro","oveja","óvulo","óxido","oxígeno","oyente","ozono","pacto","padre","paella","página","pago","país","pájaro","palabra","palco","paleta","pálido","palma","paloma","palpar","pan","panal","pánico","pantera","pañuelo","papá","papel","papilla","paquete","parar","parcela","pared","parir","paro","párpado","parque","párrafo","parte","pasar","paseo","pasión","paso","pasta","pata","patio","patria","pausa","pauta","pavo","payaso","peatón","pecado","pecera","pecho","pedal","pedir","pegar","peine","pelar","peldaño","pelea","peligro","pellejo","pelo","peluca","pena","pensar","peñón","peón","peor","pepino","pequeño","pera","percha","perder","pereza","perfil","perico","perla","permiso","perro","persona","pesa","pesca","pésimo","pestaña","pétalo","petróleo","pez","pezuña","picar","pichón","pie","piedra","pierna","pieza","pijama","pilar","piloto","pimienta","pino","pintor","pinza","piña","piojo","pipa","pirata","pisar","piscina","piso","pista","pitón","pizca","placa","plan","plata","playa","plaza","pleito","pleno","plomo","pluma","plural","pobre","poco","poder","podio","poema","poesía","poeta","polen","policía","pollo","polvo","pomada","pomelo","pomo","pompa","poner","porción","portal","posada","poseer","posible","poste","potencia","potro","pozo","prado","precoz","pregunta","premio","prensa","preso","previo","primo","príncipe","prisión","privar","proa","probar","proceso","producto","proeza","profesor","programa","prole","promesa","pronto","propio","próximo","prueba","público","puchero","pudor","pueblo","puerta","puesto","pulga","pulir","pulmón","pulpo","pulso","puma","punto","puñal","puño","pupa","pupila","puré","quedar","queja","quemar","querer","queso","quieto","química","quince","quitar","rábano","rabia","rabo","ración","radical","raíz","rama","rampa","rancho","rango","rapaz","rápido","rapto","rasgo","raspa","rato","rayo","raza","razón","reacción","realidad","rebaño","rebote","recaer","receta","rechazo","recoger","recreo","recto","recurso","red","redondo","reducir","reflejo","reforma","refrán","refugio","regalo","regir","regla","regreso","rehén","reino","reír","reja","relato","relevo","relieve","relleno","reloj","remar","remedio","remo","rencor","rendir","renta","reparto","repetir","reposo","reptil","res","rescate","resina","respeto","resto","resumen","retiro","retorno","retrato","reunir","revés","revista","rey","rezar","rico","riego","rienda","riesgo","rifa","rígido","rigor","rincón","riñón","río","riqueza","risa","ritmo","rito","rizo","roble","roce","rociar","rodar","rodeo","rodilla","roer","rojizo","rojo","romero","romper","ron","ronco","ronda","ropa","ropero","rosa","rosca","rostro","rotar","rubí","rubor","rudo","rueda","rugir","ruido","ruina","ruleta","rulo","rumbo","rumor","ruptura","ruta","rutina","sábado","saber","sabio","sable","sacar","sagaz","sagrado","sala","saldo","salero","salir","salmón","salón","salsa","salto","salud","salvar","samba","sanción","sandía","sanear","sangre","sanidad","sano","santo","sapo","saque","sardina","sartén","sastre","satán","sauna","saxofón","sección","seco","secreto","secta","sed","seguir","seis","sello","selva","semana","semilla","senda","sensor","señal","señor","separar","sepia","sequía","ser","serie","sermón","servir","sesenta","sesión","seta","setenta","severo","sexo","sexto","sidra","siesta","siete","siglo","signo","sílaba","silbar","silencio","silla","símbolo","simio","sirena","sistema","sitio","situar","sobre","socio","sodio","sol","solapa","soldado","soledad","sólido","soltar","solución","sombra","sondeo","sonido","sonoro","sonrisa","sopa","soplar","soporte","sordo","sorpresa","sorteo","sostén","sótano","suave","subir","suceso","sudor","suegra","suelo","sueño","suerte","sufrir","sujeto","sultán","sumar","superar","suplir","suponer","supremo","sur","surco","sureño","surgir","susto","sutil","tabaco","tabique","tabla","tabú","taco","tacto","tajo","talar","talco","talento","talla","talón","tamaño","tambor","tango","tanque","tapa","tapete","tapia","tapón","taquilla","tarde","tarea","tarifa","tarjeta","tarot","tarro","tarta","tatuaje","tauro","taza","tazón","teatro","techo","tecla","técnica","tejado","tejer","tejido","tela","teléfono","tema","temor","templo","tenaz","tender","tener","tenis","tenso","teoría","terapia","terco","término","ternura","terror","tesis","tesoro","testigo","tetera","texto","tez","tibio","tiburón","tiempo","tienda","tierra","tieso","tigre","tijera","tilde","timbre","tímido","timo","tinta","tío","típico","tipo","tira","tirón","titán","títere","título","tiza","toalla","tobillo","tocar","tocino","todo","toga","toldo","tomar","tono","tonto","topar","tope","toque","tórax","torero","tormenta","torneo","toro","torpedo","torre","torso","tortuga","tos","tosco","toser","tóxico","trabajo","tractor","traer","tráfico","trago","traje","tramo","trance","trato","trauma","trazar","trébol","tregua","treinta","tren","trepar","tres","tribu","trigo","tripa","triste","triunfo","trofeo","trompa","tronco","tropa","trote","trozo","truco","trueno","trufa","tubería","tubo","tuerto","tumba","tumor","túnel","túnica","turbina","turismo","turno","tutor","ubicar","úlcera","umbral","unidad","unir","universo","uno","untar","uña","urbano","urbe","urgente","urna","usar","usuario","útil","utopía","uva","vaca","vacío","vacuna","vagar","vago","vaina","vajilla","vale","válido","valle","valor","válvula","vampiro","vara","variar","varón","vaso","vecino","vector","vehículo","veinte","vejez","vela","velero","veloz","vena","vencer","venda","veneno","vengar","venir","venta","venus","ver","verano","verbo","verde","vereda","verja","verso","verter","vía","viaje","vibrar","vicio","víctima","vida","vídeo","vidrio","viejo","viernes","vigor","vil","villa","vinagre","vino","viñedo","violín","viral","virgo","virtud","visor","víspera","vista","vitamina","viudo","vivaz","vivero","vivir","vivo","volcán","volumen","volver","voraz","votar","voto","voz","vuelo","vulgar","yacer","yate","yegua","yema","yerno","yeso","yodo","yoga","yogur","zafiro","zanja","zapato","zarza","zona","zorro","zumo","zurdo"]');

/***/ }),

/***/ 17022:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var basex = __webpack_require__(18166)
var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'

module.exports = basex(ALPHABET)


/***/ }),

/***/ 77105:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// A linked list to keep track of recently-used-ness
const Yallist = __webpack_require__(8006)

const MAX = Symbol('max')
const LENGTH = Symbol('length')
const LENGTH_CALCULATOR = Symbol('lengthCalculator')
const ALLOW_STALE = Symbol('allowStale')
const MAX_AGE = Symbol('maxAge')
const DISPOSE = Symbol('dispose')
const NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet')
const LRU_LIST = Symbol('lruList')
const CACHE = Symbol('cache')
const UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet')

const naiveLength = () => 1

// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
class LRUCache {
  constructor (options) {
    if (typeof options === 'number')
      options = { max: options }

    if (!options)
      options = {}

    if (options.max && (typeof options.max !== 'number' || options.max < 0))
      throw new TypeError('max must be a non-negative number')
    // Kind of weird to have a default max of Infinity, but oh well.
    const max = this[MAX] = options.max || Infinity

    const lc = options.length || naiveLength
    this[LENGTH_CALCULATOR] = (typeof lc !== 'function') ? naiveLength : lc
    this[ALLOW_STALE] = options.stale || false
    if (options.maxAge && typeof options.maxAge !== 'number')
      throw new TypeError('maxAge must be a number')
    this[MAX_AGE] = options.maxAge || 0
    this[DISPOSE] = options.dispose
    this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false
    this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false
    this.reset()
  }

  // resize the cache when the max changes.
  set max (mL) {
    if (typeof mL !== 'number' || mL < 0)
      throw new TypeError('max must be a non-negative number')

    this[MAX] = mL || Infinity
    trim(this)
  }
  get max () {
    return this[MAX]
  }

  set allowStale (allowStale) {
    this[ALLOW_STALE] = !!allowStale
  }
  get allowStale () {
    return this[ALLOW_STALE]
  }

  set maxAge (mA) {
    if (typeof mA !== 'number')
      throw new TypeError('maxAge must be a non-negative number')

    this[MAX_AGE] = mA
    trim(this)
  }
  get maxAge () {
    return this[MAX_AGE]
  }

  // resize the cache when the lengthCalculator changes.
  set lengthCalculator (lC) {
    if (typeof lC !== 'function')
      lC = naiveLength

    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC
      this[LENGTH] = 0
      this[LRU_LIST].forEach(hit => {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key)
        this[LENGTH] += hit.length
      })
    }
    trim(this)
  }
  get lengthCalculator () { return this[LENGTH_CALCULATOR] }

  get length () { return this[LENGTH] }
  get itemCount () { return this[LRU_LIST].length }

  rforEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].tail; walker !== null;) {
      const prev = walker.prev
      forEachStep(this, fn, walker, thisp)
      walker = prev
    }
  }

  forEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].head; walker !== null;) {
      const next = walker.next
      forEachStep(this, fn, walker, thisp)
      walker = next
    }
  }

  keys () {
    return this[LRU_LIST].toArray().map(k => k.key)
  }

  values () {
    return this[LRU_LIST].toArray().map(k => k.value)
  }

  reset () {
    if (this[DISPOSE] &&
        this[LRU_LIST] &&
        this[LRU_LIST].length) {
      this[LRU_LIST].forEach(hit => this[DISPOSE](hit.key, hit.value))
    }

    this[CACHE] = new Map() // hash of items by key
    this[LRU_LIST] = new Yallist() // list of items in order of use recency
    this[LENGTH] = 0 // length of items in the list
  }

  dump () {
    return this[LRU_LIST].map(hit =>
      isStale(this, hit) ? false : {
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      }).toArray().filter(h => h)
  }

  dumpLru () {
    return this[LRU_LIST]
  }

  set (key, value, maxAge) {
    maxAge = maxAge || this[MAX_AGE]

    if (maxAge && typeof maxAge !== 'number')
      throw new TypeError('maxAge must be a number')

    const now = maxAge ? Date.now() : 0
    const len = this[LENGTH_CALCULATOR](value, key)

    if (this[CACHE].has(key)) {
      if (len > this[MAX]) {
        del(this, this[CACHE].get(key))
        return false
      }

      const node = this[CACHE].get(key)
      const item = node.value

      // dispose of the old one before overwriting
      // split out into 2 ifs for better coverage tracking
      if (this[DISPOSE]) {
        if (!this[NO_DISPOSE_ON_SET])
          this[DISPOSE](key, item.value)
      }

      item.now = now
      item.maxAge = maxAge
      item.value = value
      this[LENGTH] += len - item.length
      item.length = len
      this.get(key)
      trim(this)
      return true
    }

    const hit = new Entry(key, value, len, now, maxAge)

    // oversized objects fall out of cache automatically.
    if (hit.length > this[MAX]) {
      if (this[DISPOSE])
        this[DISPOSE](key, value)

      return false
    }

    this[LENGTH] += hit.length
    this[LRU_LIST].unshift(hit)
    this[CACHE].set(key, this[LRU_LIST].head)
    trim(this)
    return true
  }

  has (key) {
    if (!this[CACHE].has(key)) return false
    const hit = this[CACHE].get(key).value
    return !isStale(this, hit)
  }

  get (key) {
    return get(this, key, true)
  }

  peek (key) {
    return get(this, key, false)
  }

  pop () {
    const node = this[LRU_LIST].tail
    if (!node)
      return null

    del(this, node)
    return node.value
  }

  del (key) {
    del(this, this[CACHE].get(key))
  }

  load (arr) {
    // reset the cache
    this.reset()

    const now = Date.now()
    // A previous serialized cache has the most recent items first
    for (let l = arr.length - 1; l >= 0; l--) {
      const hit = arr[l]
      const expiresAt = hit.e || 0
      if (expiresAt === 0)
        // the item was created without expiration in a non aged cache
        this.set(hit.k, hit.v)
      else {
        const maxAge = expiresAt - now
        // dont add already expired items
        if (maxAge > 0) {
          this.set(hit.k, hit.v, maxAge)
        }
      }
    }
  }

  prune () {
    this[CACHE].forEach((value, key) => get(this, key, false))
  }
}

const get = (self, key, doUse) => {
  const node = self[CACHE].get(key)
  if (node) {
    const hit = node.value
    if (isStale(self, hit)) {
      del(self, node)
      if (!self[ALLOW_STALE])
        return undefined
    } else {
      if (doUse) {
        if (self[UPDATE_AGE_ON_GET])
          node.value.now = Date.now()
        self[LRU_LIST].unshiftNode(node)
      }
    }
    return hit.value
  }
}

const isStale = (self, hit) => {
  if (!hit || (!hit.maxAge && !self[MAX_AGE]))
    return false

  const diff = Date.now() - hit.now
  return hit.maxAge ? diff > hit.maxAge
    : self[MAX_AGE] && (diff > self[MAX_AGE])
}

const trim = self => {
  if (self[LENGTH] > self[MAX]) {
    for (let walker = self[LRU_LIST].tail;
      self[LENGTH] > self[MAX] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      const prev = walker.prev
      del(self, walker)
      walker = prev
    }
  }
}

const del = (self, node) => {
  if (node) {
    const hit = node.value
    if (self[DISPOSE])
      self[DISPOSE](hit.key, hit.value)

    self[LENGTH] -= hit.length
    self[CACHE].delete(hit.key)
    self[LRU_LIST].removeNode(node)
  }
}

class Entry {
  constructor (key, value, length, now, maxAge) {
    this.key = key
    this.value = value
    this.length = length
    this.now = now
    this.maxAge = maxAge || 0
  }
}

const forEachStep = (self, fn, node, thisp) => {
  let hit = node.value
  if (isStale(self, hit)) {
    del(self, node)
    if (!self[ALLOW_STALE])
      hit = undefined
  }
  if (hit)
    fn.call(thisp, hit.value, hit.key, self)
}

module.exports = LRUCache


/***/ }),

/***/ 25047:
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ 7847:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ANY = Symbol('SemVer ANY')
// hoisted class for cyclic dependency
class Comparator {
  static get ANY () {
    return ANY
  }
  constructor (comp, options) {
    options = parseOptions(options)

    if (comp instanceof Comparator) {
      if (comp.loose === !!options.loose) {
        return comp
      } else {
        comp = comp.value
      }
    }

    debug('comparator', comp, options)
    this.options = options
    this.loose = !!options.loose
    this.parse(comp)

    if (this.semver === ANY) {
      this.value = ''
    } else {
      this.value = this.operator + this.semver.version
    }

    debug('comp', this)
  }

  parse (comp) {
    const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR]
    const m = comp.match(r)

    if (!m) {
      throw new TypeError(`Invalid comparator: ${comp}`)
    }

    this.operator = m[1] !== undefined ? m[1] : ''
    if (this.operator === '=') {
      this.operator = ''
    }

    // if it literally is just '>' or '' then allow anything.
    if (!m[2]) {
      this.semver = ANY
    } else {
      this.semver = new SemVer(m[2], this.options.loose)
    }
  }

  toString () {
    return this.value
  }

  test (version) {
    debug('Comparator.test', version, this.options.loose)

    if (this.semver === ANY || version === ANY) {
      return true
    }

    if (typeof version === 'string') {
      try {
        version = new SemVer(version, this.options)
      } catch (er) {
        return false
      }
    }

    return cmp(version, this.operator, this.semver, this.options)
  }

  intersects (comp, options) {
    if (!(comp instanceof Comparator)) {
      throw new TypeError('a Comparator is required')
    }

    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false
      }
    }

    if (this.operator === '') {
      if (this.value === '') {
        return true
      }
      return new Range(comp.value, options).test(this.value)
    } else if (comp.operator === '') {
      if (comp.value === '') {
        return true
      }
      return new Range(this.value, options).test(comp.semver)
    }

    const sameDirectionIncreasing =
      (this.operator === '>=' || this.operator === '>') &&
      (comp.operator === '>=' || comp.operator === '>')
    const sameDirectionDecreasing =
      (this.operator === '<=' || this.operator === '<') &&
      (comp.operator === '<=' || comp.operator === '<')
    const sameSemVer = this.semver.version === comp.semver.version
    const differentDirectionsInclusive =
      (this.operator === '>=' || this.operator === '<=') &&
      (comp.operator === '>=' || comp.operator === '<=')
    const oppositeDirectionsLessThan =
      cmp(this.semver, '<', comp.semver, options) &&
      (this.operator === '>=' || this.operator === '>') &&
        (comp.operator === '<=' || comp.operator === '<')
    const oppositeDirectionsGreaterThan =
      cmp(this.semver, '>', comp.semver, options) &&
      (this.operator === '<=' || this.operator === '<') &&
        (comp.operator === '>=' || comp.operator === '>')

    return (
      sameDirectionIncreasing ||
      sameDirectionDecreasing ||
      (sameSemVer && differentDirectionsInclusive) ||
      oppositeDirectionsLessThan ||
      oppositeDirectionsGreaterThan
    )
  }
}

module.exports = Comparator

const parseOptions = __webpack_require__(71388)
const {re, t} = __webpack_require__(94808)
const cmp = __webpack_require__(28117)
const debug = __webpack_require__(10952)
const SemVer = __webpack_require__(52435)
const Range = __webpack_require__(66843)


/***/ }),

/***/ 66843:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// hoisted class for cyclic dependency
class Range {
  constructor (range, options) {
    options = parseOptions(options)

    if (range instanceof Range) {
      if (
        range.loose === !!options.loose &&
        range.includePrerelease === !!options.includePrerelease
      ) {
        return range
      } else {
        return new Range(range.raw, options)
      }
    }

    if (range instanceof Comparator) {
      // just put it in the set and return
      this.raw = range.value
      this.set = [[range]]
      this.format()
      return this
    }

    this.options = options
    this.loose = !!options.loose
    this.includePrerelease = !!options.includePrerelease

    // First, split based on boolean or ||
    this.raw = range
    this.set = range
      .split(/\s*\|\|\s*/)
      // map the range to a 2d array of comparators
      .map(range => this.parseRange(range.trim()))
      // throw out any comparator lists that are empty
      // this generally means that it was not a valid range, which is allowed
      // in loose mode, but will still throw if the WHOLE range is invalid.
      .filter(c => c.length)

    if (!this.set.length) {
      throw new TypeError(`Invalid SemVer Range: ${range}`)
    }

    // if we have any that are not the null set, throw out null sets.
    if (this.set.length > 1) {
      // keep the first one, in case they're all null sets
      const first = this.set[0]
      this.set = this.set.filter(c => !isNullSet(c[0]))
      if (this.set.length === 0)
        this.set = [first]
      else if (this.set.length > 1) {
        // if we have any that are *, then the range is just *
        for (const c of this.set) {
          if (c.length === 1 && isAny(c[0])) {
            this.set = [c]
            break
          }
        }
      }
    }

    this.format()
  }

  format () {
    this.range = this.set
      .map((comps) => {
        return comps.join(' ').trim()
      })
      .join('||')
      .trim()
    return this.range
  }

  toString () {
    return this.range
  }

  parseRange (range) {
    range = range.trim()

    // memoize range parsing for performance.
    // this is a very hot path, and fully deterministic.
    const memoOpts = Object.keys(this.options).join(',')
    const memoKey = `parseRange:${memoOpts}:${range}`
    const cached = cache.get(memoKey)
    if (cached)
      return cached

    const loose = this.options.loose
    // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
    const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE]
    range = range.replace(hr, hyphenReplace(this.options.includePrerelease))
    debug('hyphen replace', range)
    // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
    range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace)
    debug('comparator trim', range, re[t.COMPARATORTRIM])

    // `~ 1.2.3` => `~1.2.3`
    range = range.replace(re[t.TILDETRIM], tildeTrimReplace)

    // `^ 1.2.3` => `^1.2.3`
    range = range.replace(re[t.CARETTRIM], caretTrimReplace)

    // normalize spaces
    range = range.split(/\s+/).join(' ')

    // At this point, the range is completely trimmed and
    // ready to be split into comparators.

    const compRe = loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR]
    const rangeList = range
      .split(' ')
      .map(comp => parseComparator(comp, this.options))
      .join(' ')
      .split(/\s+/)
      // >=0.0.0 is equivalent to *
      .map(comp => replaceGTE0(comp, this.options))
      // in loose mode, throw out any that are not valid comparators
      .filter(this.options.loose ? comp => !!comp.match(compRe) : () => true)
      .map(comp => new Comparator(comp, this.options))

    // if any comparators are the null set, then replace with JUST null set
    // if more than one comparator, remove any * comparators
    // also, don't include the same comparator more than once
    const l = rangeList.length
    const rangeMap = new Map()
    for (const comp of rangeList) {
      if (isNullSet(comp))
        return [comp]
      rangeMap.set(comp.value, comp)
    }
    if (rangeMap.size > 1 && rangeMap.has(''))
      rangeMap.delete('')

    const result = [...rangeMap.values()]
    cache.set(memoKey, result)
    return result
  }

  intersects (range, options) {
    if (!(range instanceof Range)) {
      throw new TypeError('a Range is required')
    }

    return this.set.some((thisComparators) => {
      return (
        isSatisfiable(thisComparators, options) &&
        range.set.some((rangeComparators) => {
          return (
            isSatisfiable(rangeComparators, options) &&
            thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options)
              })
            })
          )
        })
      )
    })
  }

  // if ANY of the sets match ALL of its comparators, then pass
  test (version) {
    if (!version) {
      return false
    }

    if (typeof version === 'string') {
      try {
        version = new SemVer(version, this.options)
      } catch (er) {
        return false
      }
    }

    for (let i = 0; i < this.set.length; i++) {
      if (testSet(this.set[i], version, this.options)) {
        return true
      }
    }
    return false
  }
}
module.exports = Range

const LRU = __webpack_require__(77105)
const cache = new LRU({ max: 1000 })

const parseOptions = __webpack_require__(71388)
const Comparator = __webpack_require__(7847)
const debug = __webpack_require__(10952)
const SemVer = __webpack_require__(52435)
const {
  re,
  t,
  comparatorTrimReplace,
  tildeTrimReplace,
  caretTrimReplace
} = __webpack_require__(94808)

const isNullSet = c => c.value === '<0.0.0-0'
const isAny = c => c.value === ''

// take a set of comparators and determine whether there
// exists a version which can satisfy it
const isSatisfiable = (comparators, options) => {
  let result = true
  const remainingComparators = comparators.slice()
  let testComparator = remainingComparators.pop()

  while (result && remainingComparators.length) {
    result = remainingComparators.every((otherComparator) => {
      return testComparator.intersects(otherComparator, options)
    })

    testComparator = remainingComparators.pop()
  }

  return result
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
const parseComparator = (comp, options) => {
  debug('comp', comp, options)
  comp = replaceCarets(comp, options)
  debug('caret', comp)
  comp = replaceTildes(comp, options)
  debug('tildes', comp)
  comp = replaceXRanges(comp, options)
  debug('xrange', comp)
  comp = replaceStars(comp, options)
  debug('stars', comp)
  return comp
}

const isX = id => !id || id.toLowerCase() === 'x' || id === '*'

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
const replaceTildes = (comp, options) =>
  comp.trim().split(/\s+/).map((comp) => {
    return replaceTilde(comp, options)
  }).join(' ')

const replaceTilde = (comp, options) => {
  const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE]
  return comp.replace(r, (_, M, m, p, pr) => {
    debug('tilde', comp, _, M, m, p, pr)
    let ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = `>=${M}.0.0 <${+M + 1}.0.0-0`
    } else if (isX(p)) {
      // ~1.2 == >=1.2.0 <1.3.0-0
      ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`
    } else if (pr) {
      debug('replaceTilde pr', pr)
      ret = `>=${M}.${m}.${p}-${pr
      } <${M}.${+m + 1}.0-0`
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0-0
      ret = `>=${M}.${m}.${p
      } <${M}.${+m + 1}.0-0`
    }

    debug('tilde return', ret)
    return ret
  })
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0
const replaceCarets = (comp, options) =>
  comp.trim().split(/\s+/).map((comp) => {
    return replaceCaret(comp, options)
  }).join(' ')

const replaceCaret = (comp, options) => {
  debug('caret', comp, options)
  const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET]
  const z = options.includePrerelease ? '-0' : ''
  return comp.replace(r, (_, M, m, p, pr) => {
    debug('caret', comp, _, M, m, p, pr)
    let ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`
    } else if (isX(p)) {
      if (M === '0') {
        ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`
      } else {
        ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`
      }
    } else if (pr) {
      debug('replaceCaret pr', pr)
      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${m}.${+p + 1}-0`
        } else {
          ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${+m + 1}.0-0`
        }
      } else {
        ret = `>=${M}.${m}.${p}-${pr
        } <${+M + 1}.0.0-0`
      }
    } else {
      debug('no pr')
      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p
          }${z} <${M}.${m}.${+p + 1}-0`
        } else {
          ret = `>=${M}.${m}.${p
          }${z} <${M}.${+m + 1}.0-0`
        }
      } else {
        ret = `>=${M}.${m}.${p
        } <${+M + 1}.0.0-0`
      }
    }

    debug('caret return', ret)
    return ret
  })
}

const replaceXRanges = (comp, options) => {
  debug('replaceXRanges', comp, options)
  return comp.split(/\s+/).map((comp) => {
    return replaceXRange(comp, options)
  }).join(' ')
}

const replaceXRange = (comp, options) => {
  comp = comp.trim()
  const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE]
  return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
    debug('xRange', comp, ret, gtlt, M, m, p, pr)
    const xM = isX(M)
    const xm = xM || isX(m)
    const xp = xm || isX(p)
    const anyX = xp

    if (gtlt === '=' && anyX) {
      gtlt = ''
    }

    // if we're including prereleases in the match, then we need
    // to fix this to -0, the lowest possible prerelease value
    pr = options.includePrerelease ? '-0' : ''

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0-0'
      } else {
        // nothing is forbidden
        ret = '*'
      }
    } else if (gtlt && anyX) {
      // we know patch is an x, because we have any x at all.
      // replace X with 0
      if (xm) {
        m = 0
      }
      p = 0

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        gtlt = '>='
        if (xm) {
          M = +M + 1
          m = 0
          p = 0
        } else {
          m = +m + 1
          p = 0
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<'
        if (xm) {
          M = +M + 1
        } else {
          m = +m + 1
        }
      }

      if (gtlt === '<')
        pr = '-0'

      ret = `${gtlt + M}.${m}.${p}${pr}`
    } else if (xm) {
      ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`
    } else if (xp) {
      ret = `>=${M}.${m}.0${pr
      } <${M}.${+m + 1}.0-0`
    }

    debug('xRange return', ret)

    return ret
  })
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
const replaceStars = (comp, options) => {
  debug('replaceStars', comp, options)
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[t.STAR], '')
}

const replaceGTE0 = (comp, options) => {
  debug('replaceGTE0', comp, options)
  return comp.trim()
    .replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '')
}

// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
const hyphenReplace = incPr => ($0,
  from, fM, fm, fp, fpr, fb,
  to, tM, tm, tp, tpr, tb) => {
  if (isX(fM)) {
    from = ''
  } else if (isX(fm)) {
    from = `>=${fM}.0.0${incPr ? '-0' : ''}`
  } else if (isX(fp)) {
    from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`
  } else if (fpr) {
    from = `>=${from}`
  } else {
    from = `>=${from}${incPr ? '-0' : ''}`
  }

  if (isX(tM)) {
    to = ''
  } else if (isX(tm)) {
    to = `<${+tM + 1}.0.0-0`
  } else if (isX(tp)) {
    to = `<${tM}.${+tm + 1}.0-0`
  } else if (tpr) {
    to = `<=${tM}.${tm}.${tp}-${tpr}`
  } else if (incPr) {
    to = `<${tM}.${tm}.${+tp + 1}-0`
  } else {
    to = `<=${to}`
  }

  return (`${from} ${to}`).trim()
}

const testSet = (set, version, options) => {
  for (let i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false
    }
  }

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (let i = 0; i < set.length; i++) {
      debug(set[i].semver)
      if (set[i].semver === Comparator.ANY) {
        continue
      }

      if (set[i].semver.prerelease.length > 0) {
        const allowed = set[i].semver
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch) {
          return true
        }
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false
  }

  return true
}


/***/ }),

/***/ 52435:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const debug = __webpack_require__(10952)
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __webpack_require__(55558)
const { re, t } = __webpack_require__(94808)

const parseOptions = __webpack_require__(71388)
const { compareIdentifiers } = __webpack_require__(14935)
class SemVer {
  constructor (version, options) {
    options = parseOptions(options)

    if (version instanceof SemVer) {
      if (version.loose === !!options.loose &&
          version.includePrerelease === !!options.includePrerelease) {
        return version
      } else {
        version = version.version
      }
    } else if (typeof version !== 'string') {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    if (version.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      )
    }

    debug('SemVer', version, options)
    this.options = options
    this.loose = !!options.loose
    // this isn't actually relevant for versions, but keep it so that we
    // don't run into trouble passing this.options around.
    this.includePrerelease = !!options.includePrerelease

    const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL])

    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    this.raw = version

    // these are actually numbers
    this.major = +m[1]
    this.minor = +m[2]
    this.patch = +m[3]

    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError('Invalid major version')
    }

    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError('Invalid minor version')
    }

    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError('Invalid patch version')
    }

    // numberify any prerelease numeric ids
    if (!m[4]) {
      this.prerelease = []
    } else {
      this.prerelease = m[4].split('.').map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num
          }
        }
        return id
      })
    }

    this.build = m[5] ? m[5].split('.') : []
    this.format()
  }

  format () {
    this.version = `${this.major}.${this.minor}.${this.patch}`
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join('.')}`
    }
    return this.version
  }

  toString () {
    return this.version
  }

  compare (other) {
    debug('SemVer.compare', this.version, this.options, other)
    if (!(other instanceof SemVer)) {
      if (typeof other === 'string' && other === this.version) {
        return 0
      }
      other = new SemVer(other, this.options)
    }

    if (other.version === this.version) {
      return 0
    }

    return this.compareMain(other) || this.comparePre(other)
  }

  compareMain (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    return (
      compareIdentifiers(this.major, other.major) ||
      compareIdentifiers(this.minor, other.minor) ||
      compareIdentifiers(this.patch, other.patch)
    )
  }

  comparePre (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    // NOT having a prerelease is > having one
    if (this.prerelease.length && !other.prerelease.length) {
      return -1
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0
    }

    let i = 0
    do {
      const a = this.prerelease[i]
      const b = other.prerelease[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  compareBuild (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    let i = 0
    do {
      const a = this.build[i]
      const b = other.build[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc (release, identifier) {
    switch (release) {
      case 'premajor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor = 0
        this.major++
        this.inc('pre', identifier)
        break
      case 'preminor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor++
        this.inc('pre', identifier)
        break
      case 'prepatch':
        // If this is already a prerelease, it will bump to the next version
        // drop any prereleases that might already exist, since they are not
        // relevant at this point.
        this.prerelease.length = 0
        this.inc('patch', identifier)
        this.inc('pre', identifier)
        break
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.
      case 'prerelease':
        if (this.prerelease.length === 0) {
          this.inc('patch', identifier)
        }
        this.inc('pre', identifier)
        break

      case 'major':
        // If this is a pre-major version, bump up to the same major version.
        // Otherwise increment major.
        // 1.0.0-5 bumps to 1.0.0
        // 1.1.0 bumps to 2.0.0
        if (
          this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0
        ) {
          this.major++
        }
        this.minor = 0
        this.patch = 0
        this.prerelease = []
        break
      case 'minor':
        // If this is a pre-minor version, bump up to the same minor version.
        // Otherwise increment minor.
        // 1.2.0-5 bumps to 1.2.0
        // 1.2.1 bumps to 1.3.0
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++
        }
        this.patch = 0
        this.prerelease = []
        break
      case 'patch':
        // If this is not a pre-release version, it will increment the patch.
        // If it is a pre-release it will bump up to the same patch version.
        // 1.2.0-5 patches to 1.2.0
        // 1.2.0 patches to 1.2.1
        if (this.prerelease.length === 0) {
          this.patch++
        }
        this.prerelease = []
        break
      // This probably shouldn't be used publicly.
      // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
      case 'pre':
        if (this.prerelease.length === 0) {
          this.prerelease = [0]
        } else {
          let i = this.prerelease.length
          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++
              i = -2
            }
          }
          if (i === -1) {
            // didn't increment anything
            this.prerelease.push(0)
          }
        }
        if (identifier) {
          // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
          // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
          if (this.prerelease[0] === identifier) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = [identifier, 0]
            }
          } else {
            this.prerelease = [identifier, 0]
          }
        }
        break

      default:
        throw new Error(`invalid increment argument: ${release}`)
    }
    this.format()
    this.raw = this.version
    return this
  }
}

module.exports = SemVer


/***/ }),

/***/ 36694:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const parse = __webpack_require__(79943)
const clean = (version, options) => {
  const s = parse(version.trim().replace(/^[=v]+/, ''), options)
  return s ? s.version : null
}
module.exports = clean


/***/ }),

/***/ 28117:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const eq = __webpack_require__(33276)
const neq = __webpack_require__(77893)
const gt = __webpack_require__(16379)
const gte = __webpack_require__(8463)
const lt = __webpack_require__(21897)
const lte = __webpack_require__(30506)

const cmp = (a, op, b, loose) => {
  switch (op) {
    case '===':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a === b

    case '!==':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a !== b

    case '':
    case '=':
    case '==':
      return eq(a, b, loose)

    case '!=':
      return neq(a, b, loose)

    case '>':
      return gt(a, b, loose)

    case '>=':
      return gte(a, b, loose)

    case '<':
      return lt(a, b, loose)

    case '<=':
      return lte(a, b, loose)

    default:
      throw new TypeError(`Invalid operator: ${op}`)
  }
}
module.exports = cmp


/***/ }),

/***/ 98686:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(52435)
const parse = __webpack_require__(79943)
const {re, t} = __webpack_require__(94808)

const coerce = (version, options) => {
  if (version instanceof SemVer) {
    return version
  }

  if (typeof version === 'number') {
    version = String(version)
  }

  if (typeof version !== 'string') {
    return null
  }

  options = options || {}

  let match = null
  if (!options.rtl) {
    match = version.match(re[t.COERCE])
  } else {
    // Find the right-most coercible string that does not share
    // a terminus with a more left-ward coercible string.
    // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
    //
    // Walk through the string checking with a /g regexp
    // Manually set the index so as to pick up overlapping matches.
    // Stop when we get a match that ends at the string end, since no
    // coercible string can be more right-ward without the same terminus.
    let next
    while ((next = re[t.COERCERTL].exec(version)) &&
        (!match || match.index + match[0].length !== version.length)
    ) {
      if (!match ||
            next.index + next[0].length !== match.index + match[0].length) {
        match = next
      }
      re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length
    }
    // leave it in a clean state
    re[t.COERCERTL].lastIndex = -1
  }

  if (match === null)
    return null

  return parse(`${match[2]}.${match[3] || '0'}.${match[4] || '0'}`, options)
}
module.exports = coerce


/***/ }),

/***/ 65914:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(52435)
const compareBuild = (a, b, loose) => {
  const versionA = new SemVer(a, loose)
  const versionB = new SemVer(b, loose)
  return versionA.compare(versionB) || versionA.compareBuild(versionB)
}
module.exports = compareBuild


/***/ }),

/***/ 55404:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(92271)
const compareLoose = (a, b) => compare(a, b, true)
module.exports = compareLoose


/***/ }),

/***/ 92271:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(52435)
const compare = (a, b, loose) =>
  new SemVer(a, loose).compare(new SemVer(b, loose))

module.exports = compare


/***/ }),

/***/ 66007:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const parse = __webpack_require__(79943)
const eq = __webpack_require__(33276)

const diff = (version1, version2) => {
  if (eq(version1, version2)) {
    return null
  } else {
    const v1 = parse(version1)
    const v2 = parse(version2)
    const hasPre = v1.prerelease.length || v2.prerelease.length
    const prefix = hasPre ? 'pre' : ''
    const defaultResult = hasPre ? 'prerelease' : ''
    for (const key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return prefix + key
        }
      }
    }
    return defaultResult // may be undefined
  }
}
module.exports = diff


/***/ }),

/***/ 33276:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(92271)
const eq = (a, b, loose) => compare(a, b, loose) === 0
module.exports = eq


/***/ }),

/***/ 16379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(92271)
const gt = (a, b, loose) => compare(a, b, loose) > 0
module.exports = gt


/***/ }),

/***/ 8463:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(92271)
const gte = (a, b, loose) => compare(a, b, loose) >= 0
module.exports = gte


/***/ }),

/***/ 86360:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(52435)

const inc = (version, release, options, identifier) => {
  if (typeof (options) === 'string') {
    identifier = options
    options = undefined
  }

  try {
    return new SemVer(version, options).inc(release, identifier).version
  } catch (er) {
    return null
  }
}
module.exports = inc


/***/ }),

/***/ 21897:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(92271)
const lt = (a, b, loose) => compare(a, b, loose) < 0
module.exports = lt


/***/ }),

/***/ 30506:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(92271)
const lte = (a, b, loose) => compare(a, b, loose) <= 0
module.exports = lte


/***/ }),

/***/ 14551:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(52435)
const major = (a, loose) => new SemVer(a, loose).major
module.exports = major


/***/ }),

/***/ 469:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(52435)
const minor = (a, loose) => new SemVer(a, loose).minor
module.exports = minor


/***/ }),

/***/ 77893:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(92271)
const neq = (a, b, loose) => compare(a, b, loose) !== 0
module.exports = neq


/***/ }),

/***/ 79943:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {MAX_LENGTH} = __webpack_require__(55558)
const { re, t } = __webpack_require__(94808)
const SemVer = __webpack_require__(52435)

const parseOptions = __webpack_require__(71388)
const parse = (version, options) => {
  options = parseOptions(options)

  if (version instanceof SemVer) {
    return version
  }

  if (typeof version !== 'string') {
    return null
  }

  if (version.length > MAX_LENGTH) {
    return null
  }

  const r = options.loose ? re[t.LOOSE] : re[t.FULL]
  if (!r.test(version)) {
    return null
  }

  try {
    return new SemVer(version, options)
  } catch (er) {
    return null
  }
}

module.exports = parse


/***/ }),

/***/ 54250:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(52435)
const patch = (a, loose) => new SemVer(a, loose).patch
module.exports = patch


/***/ }),

/***/ 58204:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const parse = __webpack_require__(79943)
const prerelease = (version, options) => {
  const parsed = parse(version, options)
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null
}
module.exports = prerelease


/***/ }),

/***/ 70733:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(92271)
const rcompare = (a, b, loose) => compare(b, a, loose)
module.exports = rcompare


/***/ }),

/***/ 72961:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compareBuild = __webpack_require__(65914)
const rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose))
module.exports = rsort


/***/ }),

/***/ 59844:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Range = __webpack_require__(66843)
const satisfies = (version, range, options) => {
  try {
    range = new Range(range, options)
  } catch (er) {
    return false
  }
  return range.test(version)
}
module.exports = satisfies


/***/ }),

/***/ 51116:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compareBuild = __webpack_require__(65914)
const sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose))
module.exports = sort


/***/ }),

/***/ 97230:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const parse = __webpack_require__(79943)
const valid = (version, options) => {
  const v = parse(version, options)
  return v ? v.version : null
}
module.exports = valid


/***/ }),

/***/ 97699:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// just pre-load all the stuff that index.js lazily exports
const internalRe = __webpack_require__(94808)
module.exports = {
  re: internalRe.re,
  src: internalRe.src,
  tokens: internalRe.t,
  SEMVER_SPEC_VERSION: __webpack_require__(55558).SEMVER_SPEC_VERSION,
  SemVer: __webpack_require__(52435),
  compareIdentifiers: __webpack_require__(14935).compareIdentifiers,
  rcompareIdentifiers: __webpack_require__(14935).rcompareIdentifiers,
  parse: __webpack_require__(79943),
  valid: __webpack_require__(97230),
  clean: __webpack_require__(36694),
  inc: __webpack_require__(86360),
  diff: __webpack_require__(66007),
  major: __webpack_require__(14551),
  minor: __webpack_require__(469),
  patch: __webpack_require__(54250),
  prerelease: __webpack_require__(58204),
  compare: __webpack_require__(92271),
  rcompare: __webpack_require__(70733),
  compareLoose: __webpack_require__(55404),
  compareBuild: __webpack_require__(65914),
  sort: __webpack_require__(51116),
  rsort: __webpack_require__(72961),
  gt: __webpack_require__(16379),
  lt: __webpack_require__(21897),
  eq: __webpack_require__(33276),
  neq: __webpack_require__(77893),
  gte: __webpack_require__(8463),
  lte: __webpack_require__(30506),
  cmp: __webpack_require__(28117),
  coerce: __webpack_require__(98686),
  Comparator: __webpack_require__(7847),
  Range: __webpack_require__(66843),
  satisfies: __webpack_require__(59844),
  toComparators: __webpack_require__(48865),
  maxSatisfying: __webpack_require__(53727),
  minSatisfying: __webpack_require__(14338),
  minVersion: __webpack_require__(21542),
  validRange: __webpack_require__(36240),
  outside: __webpack_require__(89106),
  gtr: __webpack_require__(90995),
  ltr: __webpack_require__(47805),
  intersects: __webpack_require__(22013),
  simplifyRange: __webpack_require__(81338),
  subset: __webpack_require__(53122),
}


/***/ }),

/***/ 55558:
/***/ ((module) => {

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0'

const MAX_LENGTH = 256
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
  /* istanbul ignore next */ 9007199254740991

// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16

module.exports = {
  SEMVER_SPEC_VERSION,
  MAX_LENGTH,
  MAX_SAFE_INTEGER,
  MAX_SAFE_COMPONENT_LENGTH
}


/***/ }),

/***/ 10952:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(34406);
const debug = (
  typeof process === 'object' &&
  ({"NODE_ENV":"production","VERSION":"0.83.2-28","WS_URL":undefined}) &&
  ({"NODE_ENV":"production","VERSION":"0.83.2-28","WS_URL":undefined}).NODE_DEBUG &&
  /\bsemver\b/i.test(({"NODE_ENV":"production","VERSION":"0.83.2-28","WS_URL":undefined}).NODE_DEBUG)
) ? (...args) => console.error('SEMVER', ...args)
  : () => {}

module.exports = debug


/***/ }),

/***/ 14935:
/***/ ((module) => {

const numeric = /^[0-9]+$/
const compareIdentifiers = (a, b) => {
  const anum = numeric.test(a)
  const bnum = numeric.test(b)

  if (anum && bnum) {
    a = +a
    b = +b
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
}

const rcompareIdentifiers = (a, b) => compareIdentifiers(b, a)

module.exports = {
  compareIdentifiers,
  rcompareIdentifiers
}


/***/ }),

/***/ 71388:
/***/ ((module) => {

// parse out just the options we care about so we always get a consistent
// obj with keys in a consistent order.
const opts = ['includePrerelease', 'loose', 'rtl']
const parseOptions = options =>
  !options ? {}
  : typeof options !== 'object' ? { loose: true }
  : opts.filter(k => options[k]).reduce((options, k) => {
    options[k] = true
    return options
  }, {})
module.exports = parseOptions


/***/ }),

/***/ 94808:
/***/ ((module, exports, __webpack_require__) => {

const { MAX_SAFE_COMPONENT_LENGTH } = __webpack_require__(55558)
const debug = __webpack_require__(10952)
exports = module.exports = {}

// The actual regexps go on exports.re
const re = exports.re = []
const src = exports.src = []
const t = exports.t = {}
let R = 0

const createToken = (name, value, isGlobal) => {
  const index = R++
  debug(index, value)
  t[name] = index
  src[index] = value
  re[index] = new RegExp(value, isGlobal ? 'g' : undefined)
}

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*')
createToken('NUMERICIDENTIFIERLOOSE', '[0-9]+')

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

createToken('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*')

// ## Main Version
// Three dot-separated numeric identifiers.

createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})`)

createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})`)

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NUMERICIDENTIFIER]
}|${src[t.NONNUMERICIDENTIFIER]})`)

createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NUMERICIDENTIFIERLOOSE]
}|${src[t.NONNUMERICIDENTIFIER]})`)

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]
}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`)

createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]
}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`)

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

createToken('BUILDIDENTIFIER', '[0-9A-Za-z-]+')

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]
}(?:\\.${src[t.BUILDIDENTIFIER]})*))`)

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

createToken('FULLPLAIN', `v?${src[t.MAINVERSION]
}${src[t.PRERELEASE]}?${
  src[t.BUILD]}?`)

createToken('FULL', `^${src[t.FULLPLAIN]}$`)

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]
}${src[t.PRERELEASELOOSE]}?${
  src[t.BUILD]}?`)

createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`)

createToken('GTLT', '((?:<|>)?=?)')

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`)
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`)

createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:${src[t.PRERELEASE]})?${
                     src[t.BUILD]}?` +
                   `)?)?`)

createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:${src[t.PRERELEASELOOSE]})?${
                          src[t.BUILD]}?` +
                        `)?)?`)

createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`)
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`)

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCE', `${'(^|[^\\d])' +
              '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:$|[^\\d])`)
createToken('COERCERTL', src[t.COERCE], true)

// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)')

createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true)
exports.tildeTrimReplace = '$1~'

createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`)
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`)

// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)')

createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true)
exports.caretTrimReplace = '$1^'

createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`)
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`)

// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`)
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`)

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]
}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true)
exports.comparatorTrimReplace = '$1$2$3'

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` +
                   `\\s+-\\s+` +
                   `(${src[t.XRANGEPLAIN]})` +
                   `\\s*$`)

createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s+-\\s+` +
                        `(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s*$`)

// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*')
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\.0\.0\\s*$')
createToken('GTE0PRE', '^\\s*>=\\s*0\.0\.0-0\\s*$')


/***/ }),

/***/ 90995:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Determine if version is greater than all the versions possible in the range.
const outside = __webpack_require__(89106)
const gtr = (version, range, options) => outside(version, range, '>', options)
module.exports = gtr


/***/ }),

/***/ 22013:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Range = __webpack_require__(66843)
const intersects = (r1, r2, options) => {
  r1 = new Range(r1, options)
  r2 = new Range(r2, options)
  return r1.intersects(r2)
}
module.exports = intersects


/***/ }),

/***/ 47805:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const outside = __webpack_require__(89106)
// Determine if version is less than all the versions possible in the range
const ltr = (version, range, options) => outside(version, range, '<', options)
module.exports = ltr


/***/ }),

/***/ 53727:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(52435)
const Range = __webpack_require__(66843)

const maxSatisfying = (versions, range, options) => {
  let max = null
  let maxSV = null
  let rangeObj = null
  try {
    rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v
        maxSV = new SemVer(max, options)
      }
    }
  })
  return max
}
module.exports = maxSatisfying


/***/ }),

/***/ 14338:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(52435)
const Range = __webpack_require__(66843)
const minSatisfying = (versions, range, options) => {
  let min = null
  let minSV = null
  let rangeObj = null
  try {
    rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v
        minSV = new SemVer(min, options)
      }
    }
  })
  return min
}
module.exports = minSatisfying


/***/ }),

/***/ 21542:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(52435)
const Range = __webpack_require__(66843)
const gt = __webpack_require__(16379)

const minVersion = (range, loose) => {
  range = new Range(range, loose)

  let minver = new SemVer('0.0.0')
  if (range.test(minver)) {
    return minver
  }

  minver = new SemVer('0.0.0-0')
  if (range.test(minver)) {
    return minver
  }

  minver = null
  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i]

    let setMin = null
    comparators.forEach((comparator) => {
      // Clone to avoid manipulating the comparator's semver object.
      const compver = new SemVer(comparator.semver.version)
      switch (comparator.operator) {
        case '>':
          if (compver.prerelease.length === 0) {
            compver.patch++
          } else {
            compver.prerelease.push(0)
          }
          compver.raw = compver.format()
          /* fallthrough */
        case '':
        case '>=':
          if (!setMin || gt(compver, setMin)) {
            setMin = compver
          }
          break
        case '<':
        case '<=':
          /* Ignore maximum versions */
          break
        /* istanbul ignore next */
        default:
          throw new Error(`Unexpected operation: ${comparator.operator}`)
      }
    })
    if (setMin && (!minver || gt(minver, setMin)))
      minver = setMin
  }

  if (minver && range.test(minver)) {
    return minver
  }

  return null
}
module.exports = minVersion


/***/ }),

/***/ 89106:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(52435)
const Comparator = __webpack_require__(7847)
const {ANY} = Comparator
const Range = __webpack_require__(66843)
const satisfies = __webpack_require__(59844)
const gt = __webpack_require__(16379)
const lt = __webpack_require__(21897)
const lte = __webpack_require__(30506)
const gte = __webpack_require__(8463)

const outside = (version, range, hilo, options) => {
  version = new SemVer(version, options)
  range = new Range(range, options)

  let gtfn, ltefn, ltfn, comp, ecomp
  switch (hilo) {
    case '>':
      gtfn = gt
      ltefn = lte
      ltfn = lt
      comp = '>'
      ecomp = '>='
      break
    case '<':
      gtfn = lt
      ltefn = gte
      ltfn = gt
      comp = '<'
      ecomp = '<='
      break
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"')
  }

  // If it satisfies the range it is not outside
  if (satisfies(version, range, options)) {
    return false
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i]

    let high = null
    let low = null

    comparators.forEach((comparator) => {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0')
      }
      high = high || comparator
      low = low || comparator
      if (gtfn(comparator.semver, high.semver, options)) {
        high = comparator
      } else if (ltfn(comparator.semver, low.semver, options)) {
        low = comparator
      }
    })

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false
    }
  }
  return true
}

module.exports = outside


/***/ }),

/***/ 81338:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.
const satisfies = __webpack_require__(59844)
const compare = __webpack_require__(92271)
module.exports = (versions, range, options) => {
  const set = []
  let min = null
  let prev = null
  const v = versions.sort((a, b) => compare(a, b, options))
  for (const version of v) {
    const included = satisfies(version, range, options)
    if (included) {
      prev = version
      if (!min)
        min = version
    } else {
      if (prev) {
        set.push([min, prev])
      }
      prev = null
      min = null
    }
  }
  if (min)
    set.push([min, null])

  const ranges = []
  for (const [min, max] of set) {
    if (min === max)
      ranges.push(min)
    else if (!max && min === v[0])
      ranges.push('*')
    else if (!max)
      ranges.push(`>=${min}`)
    else if (min === v[0])
      ranges.push(`<=${max}`)
    else
      ranges.push(`${min} - ${max}`)
  }
  const simplified = ranges.join(' || ')
  const original = typeof range.raw === 'string' ? range.raw : String(range)
  return simplified.length < original.length ? simplified : range
}


/***/ }),

/***/ 53122:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Range = __webpack_require__(66843)
const Comparator = __webpack_require__(7847)
const { ANY } = Comparator
const satisfies = __webpack_require__(59844)
const compare = __webpack_require__(92271)

// Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
// - Every simple range `r1, r2, ...` is a null set, OR
// - Every simple range `r1, r2, ...` which is not a null set is a subset of
//   some `R1, R2, ...`
//
// Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
// - If c is only the ANY comparator
//   - If C is only the ANY comparator, return true
//   - Else if in prerelease mode, return false
//   - else replace c with `[>=0.0.0]`
// - If C is only the ANY comparator
//   - if in prerelease mode, return true
//   - else replace C with `[>=0.0.0]`
// - Let EQ be the set of = comparators in c
// - If EQ is more than one, return true (null set)
// - Let GT be the highest > or >= comparator in c
// - Let LT be the lowest < or <= comparator in c
// - If GT and LT, and GT.semver > LT.semver, return true (null set)
// - If any C is a = range, and GT or LT are set, return false
// - If EQ
//   - If GT, and EQ does not satisfy GT, return true (null set)
//   - If LT, and EQ does not satisfy LT, return true (null set)
//   - If EQ satisfies every C, return true
//   - Else return false
// - If GT
//   - If GT.semver is lower than any > or >= comp in C, return false
//   - If GT is >=, and GT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the GT.semver tuple, return false
// - If LT
//   - If LT.semver is greater than any < or <= comp in C, return false
//   - If LT is <=, and LT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the LT.semver tuple, return false
// - Else return true

const subset = (sub, dom, options = {}) => {
  if (sub === dom)
    return true

  sub = new Range(sub, options)
  dom = new Range(dom, options)
  let sawNonNull = false

  OUTER: for (const simpleSub of sub.set) {
    for (const simpleDom of dom.set) {
      const isSub = simpleSubset(simpleSub, simpleDom, options)
      sawNonNull = sawNonNull || isSub !== null
      if (isSub)
        continue OUTER
    }
    // the null set is a subset of everything, but null simple ranges in
    // a complex range should be ignored.  so if we saw a non-null range,
    // then we know this isn't a subset, but if EVERY simple range was null,
    // then it is a subset.
    if (sawNonNull)
      return false
  }
  return true
}

const simpleSubset = (sub, dom, options) => {
  if (sub === dom)
    return true

  if (sub.length === 1 && sub[0].semver === ANY) {
    if (dom.length === 1 && dom[0].semver === ANY)
      return true
    else if (options.includePrerelease)
      sub = [ new Comparator('>=0.0.0-0') ]
    else
      sub = [ new Comparator('>=0.0.0') ]
  }

  if (dom.length === 1 && dom[0].semver === ANY) {
    if (options.includePrerelease)
      return true
    else
      dom = [ new Comparator('>=0.0.0') ]
  }

  const eqSet = new Set()
  let gt, lt
  for (const c of sub) {
    if (c.operator === '>' || c.operator === '>=')
      gt = higherGT(gt, c, options)
    else if (c.operator === '<' || c.operator === '<=')
      lt = lowerLT(lt, c, options)
    else
      eqSet.add(c.semver)
  }

  if (eqSet.size > 1)
    return null

  let gtltComp
  if (gt && lt) {
    gtltComp = compare(gt.semver, lt.semver, options)
    if (gtltComp > 0)
      return null
    else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<='))
      return null
  }

  // will iterate one or zero times
  for (const eq of eqSet) {
    if (gt && !satisfies(eq, String(gt), options))
      return null

    if (lt && !satisfies(eq, String(lt), options))
      return null

    for (const c of dom) {
      if (!satisfies(eq, String(c), options))
        return false
    }

    return true
  }

  let higher, lower
  let hasDomLT, hasDomGT
  // if the subset has a prerelease, we need a comparator in the superset
  // with the same tuple and a prerelease, or it's not a subset
  let needDomLTPre = lt &&
    !options.includePrerelease &&
    lt.semver.prerelease.length ? lt.semver : false
  let needDomGTPre = gt &&
    !options.includePrerelease &&
    gt.semver.prerelease.length ? gt.semver : false
  // exception: <1.2.3-0 is the same as <1.2.3
  if (needDomLTPre && needDomLTPre.prerelease.length === 1 &&
      lt.operator === '<' && needDomLTPre.prerelease[0] === 0) {
    needDomLTPre = false
  }

  for (const c of dom) {
    hasDomGT = hasDomGT || c.operator === '>' || c.operator === '>='
    hasDomLT = hasDomLT || c.operator === '<' || c.operator === '<='
    if (gt) {
      if (needDomGTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length &&
            c.semver.major === needDomGTPre.major &&
            c.semver.minor === needDomGTPre.minor &&
            c.semver.patch === needDomGTPre.patch) {
          needDomGTPre = false
        }
      }
      if (c.operator === '>' || c.operator === '>=') {
        higher = higherGT(gt, c, options)
        if (higher === c && higher !== gt)
          return false
      } else if (gt.operator === '>=' && !satisfies(gt.semver, String(c), options))
        return false
    }
    if (lt) {
      if (needDomLTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length &&
            c.semver.major === needDomLTPre.major &&
            c.semver.minor === needDomLTPre.minor &&
            c.semver.patch === needDomLTPre.patch) {
          needDomLTPre = false
        }
      }
      if (c.operator === '<' || c.operator === '<=') {
        lower = lowerLT(lt, c, options)
        if (lower === c && lower !== lt)
          return false
      } else if (lt.operator === '<=' && !satisfies(lt.semver, String(c), options))
        return false
    }
    if (!c.operator && (lt || gt) && gtltComp !== 0)
      return false
  }

  // if there was a < or >, and nothing in the dom, then must be false
  // UNLESS it was limited by another range in the other direction.
  // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0
  if (gt && hasDomLT && !lt && gtltComp !== 0)
    return false

  if (lt && hasDomGT && !gt && gtltComp !== 0)
    return false

  // we needed a prerelease range in a specific tuple, but didn't get one
  // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
  // because it includes prereleases in the 1.2.3 tuple
  if (needDomGTPre || needDomLTPre)
    return false

  return true
}

// >=1.2.3 is lower than >1.2.3
const higherGT = (a, b, options) => {
  if (!a)
    return b
  const comp = compare(a.semver, b.semver, options)
  return comp > 0 ? a
    : comp < 0 ? b
    : b.operator === '>' && a.operator === '>=' ? b
    : a
}

// <=1.2.3 is higher than <1.2.3
const lowerLT = (a, b, options) => {
  if (!a)
    return b
  const comp = compare(a.semver, b.semver, options)
  return comp < 0 ? a
    : comp > 0 ? b
    : b.operator === '<' && a.operator === '<=' ? b
    : a
}

module.exports = subset


/***/ }),

/***/ 48865:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Range = __webpack_require__(66843)

// Mostly just for testing and legacy API reasons
const toComparators = (range, options) =>
  new Range(range, options).set
    .map(comp => comp.map(c => c.value).join(' ').trim().split(' '))

module.exports = toComparators


/***/ }),

/***/ 36240:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Range = __webpack_require__(66843)
const validRange = (range, options) => {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, options).range || '*'
  } catch (er) {
    return null
  }
}
module.exports = validRange


/***/ }),

/***/ 38268:
/***/ ((module) => {

"use strict";

module.exports = function (Yallist) {
  Yallist.prototype[Symbol.iterator] = function* () {
    for (let walker = this.head; walker; walker = walker.next) {
      yield walker.value
    }
  }
}


/***/ }),

/***/ 8006:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = Yallist

Yallist.Node = Node
Yallist.create = Yallist

function Yallist (list) {
  var self = this
  if (!(self instanceof Yallist)) {
    self = new Yallist()
  }

  self.tail = null
  self.head = null
  self.length = 0

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item)
    })
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i])
    }
  }

  return self
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list')
  }

  var next = node.next
  var prev = node.prev

  if (next) {
    next.prev = prev
  }

  if (prev) {
    prev.next = next
  }

  if (node === this.head) {
    this.head = next
  }
  if (node === this.tail) {
    this.tail = prev
  }

  node.list.length--
  node.next = null
  node.prev = null
  node.list = null

  return next
}

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var head = this.head
  node.list = this
  node.next = head
  if (head) {
    head.prev = node
  }

  this.head = node
  if (!this.tail) {
    this.tail = node
  }
  this.length++
}

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var tail = this.tail
  node.list = this
  node.prev = tail
  if (tail) {
    tail.next = node
  }

  this.tail = node
  if (!this.head) {
    this.head = node
  }
  this.length++
}

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined
  }

  var res = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) {
    this.tail.next = null
  } else {
    this.head = null
  }
  this.length--
  return res
}

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined
  }

  var res = this.head.value
  this.head = this.head.next
  if (this.head) {
    this.head.prev = null
  } else {
    this.tail = null
  }
  this.length--
  return res
}

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.next
  }
}

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.prev
  }
}

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.next
  }
  return res
}

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.prev
  }
  return res
}

Yallist.prototype.reduce = function (fn, initial) {
  var acc
  var walker = this.head
  if (arguments.length > 1) {
    acc = initial
  } else if (this.head) {
    walker = this.head.next
    acc = this.head.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i)
    walker = walker.next
  }

  return acc
}

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc
  var walker = this.tail
  if (arguments.length > 1) {
    acc = initial
  } else if (this.tail) {
    walker = this.tail.prev
    acc = this.tail.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i)
    walker = walker.prev
  }

  return acc
}

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.next
  }
  return arr
}

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.prev
  }
  return arr
}

Yallist.prototype.slice = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next
  }
  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev
  }
  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.splice = function (start, deleteCount, ...nodes) {
  if (start > this.length) {
    start = this.length - 1
  }
  if (start < 0) {
    start = this.length + start;
  }

  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
    walker = walker.next
  }

  var ret = []
  for (var i = 0; walker && i < deleteCount; i++) {
    ret.push(walker.value)
    walker = this.removeNode(walker)
  }
  if (walker === null) {
    walker = this.tail
  }

  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev
  }

  for (var i = 0; i < nodes.length; i++) {
    walker = insert(this, walker, nodes[i])
  }
  return ret;
}

Yallist.prototype.reverse = function () {
  var head = this.head
  var tail = this.tail
  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev
    walker.prev = walker.next
    walker.next = p
  }
  this.head = tail
  this.tail = head
  return this
}

function insert (self, node, value) {
  var inserted = node === self.head ?
    new Node(value, null, node, self) :
    new Node(value, node, node.next, self)

  if (inserted.next === null) {
    self.tail = inserted
  }
  if (inserted.prev === null) {
    self.head = inserted
  }

  self.length++

  return inserted
}

function push (self, item) {
  self.tail = new Node(item, self.tail, null, self)
  if (!self.head) {
    self.head = self.tail
  }
  self.length++
}

function unshift (self, item) {
  self.head = new Node(item, null, self.head, self)
  if (!self.tail) {
    self.tail = self.head
  }
  self.length++
}

function Node (value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list)
  }

  this.list = list
  this.value = value

  if (prev) {
    prev.next = this
    this.prev = prev
  } else {
    this.prev = null
  }

  if (next) {
    next.prev = this
    this.next = next
  } else {
    this.next = null
  }
}

try {
  // add if support for Symbol.iterator is present
  __webpack_require__(38268)(Yallist)
} catch (er) {}


/***/ })

}]);