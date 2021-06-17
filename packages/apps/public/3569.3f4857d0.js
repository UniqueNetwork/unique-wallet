((typeof self !== 'undefined' ? self : this)["webpackChunk_polkadot_apps"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_polkadot_apps"] || []).push([[3569,6682],{

/***/ 89539:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _classPrivateFieldBase)
/* harmony export */ });
function _classPrivateFieldBase(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }

  return receiver;
}

/***/ }),

/***/ 38879:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _classPrivateFieldKey)
/* harmony export */ });
var id = 0;
function _classPrivateFieldKey(name) {
  return "__private_" + id++ + "_" + name;
}

/***/ }),

/***/ 51119:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ 23594:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* binding */ Metadata)
});

// EXTERNAL MODULE: consume shared module (default) @polkadot/util@^6.7.1 (strict) (fallback: ../../node_modules/@polkadot/util/index.js)
var index_js_ = __webpack_require__(13948);
// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase.js
var classPrivateFieldLooseBase = __webpack_require__(89539);
// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey.js
var classPrivateFieldLooseKey = __webpack_require__(38879);
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/codec/Struct.js
var Struct = __webpack_require__(48991);
// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(51119);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/metadata/v9/toV10.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0
// migrate a storage hasher type
// see https://github.com/paritytech/substrate/pull/4462

/** @internal */
function createStorageHasher(registry, hasher) {
  // Blake2_128_Concat has been added at index 2, so we increment all the
  // indexes greater than 2
  if (hasher.toNumber() >= 2) {
    return registry.createType('StorageHasherV10', hasher.toNumber() + 1);
  }

  return registry.createType('StorageHasherV10', hasher);
}
/** @internal */


function createStorageType(registry, entryType) {
  if (entryType.isMap) {
    return [_objectSpread(_objectSpread({}, entryType.asMap), {}, {
      hasher: createStorageHasher(registry, entryType.asMap.hasher)
    }), 1];
  }

  if (entryType.isDoubleMap) {
    return [_objectSpread(_objectSpread({}, entryType.asDoubleMap), {}, {
      hasher: createStorageHasher(registry, entryType.asDoubleMap.hasher),
      key2Hasher: createStorageHasher(registry, entryType.asDoubleMap.key2Hasher)
    }), 2];
  }

  return [entryType.asPlain, 0];
}
/** @internal */


function convertModule(registry, mod) {
  const storage = mod.storage.unwrapOr(null);
  return registry.createType('ModuleMetadataV10', _objectSpread(_objectSpread({}, mod), {}, {
    storage: storage ? _objectSpread(_objectSpread({}, storage), {}, {
      items: storage.items.map(item => _objectSpread(_objectSpread({}, item), {}, {
        type: registry.createType('StorageEntryTypeV10', ...createStorageType(registry, item.type))
      }))
    }) : null
  }));
}
/** @internal */


function toV10(registry, {
  modules
}) {
  return registry.createType('MetadataV10', {
    modules: modules.map(mod => convertModule(registry, mod))
  });
}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/metadata/v10/toV11.js
// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

/** @internal */
function toV11(registry, {
  modules
}) {
  return registry.createType('MetadataV11', {
    // This is new in V11, pass V0 here - something non-existing, telling the API to use
    // the fallback for this information (on-chain detection)
    extrinsic: {
      signedExtensions: [],
      version: 0
    },
    modules
  });
}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/metadata/v11/toV12.js


function toV12_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function toV12_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { toV12_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { toV12_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @internal
 **/
function toV12(registry, {
  extrinsic,
  modules
}) {
  return registry.createType('MetadataLatest', {
    extrinsic,
    modules: modules.map(mod => registry.createType('ModuleMetadataV12', toV12_objectSpread(toV12_objectSpread({}, mod), {}, {
      index: 255
    })))
  });
}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/metadata/v12/toV13.js
// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @internal
 **/
function toV13(registry, metadata) {
  return registry.createType('MetadataV13', metadata);
}
// EXTERNAL MODULE: ../../node_modules/@polkadot/types-known/index.js + 17 modules
var types_known = __webpack_require__(80230);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/metadata/v13/toLatest.js


function toLatest_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function toLatest_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { toLatest_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { toLatest_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

 // Since we don't have insight into the origin specification, we can only define what we know about
// in a pure Substrate/Polkadot implementation, any other custom origins won't be handled at all

const KNOWN_ORIGINS = {
  Council: 'CollectiveOrigin',
  System: 'SystemOrigin',
  TechnicalCommittee: 'CollectiveOrigin'
};
const BOXES = [['<', '>'], ['<', ','], [',', '>'], ['(', ')'], ['(', ','], [',', ','], [',', ')']];
/**
 * Find and apply the correct type override
 * @internal
 **/

function setTypeOverride(sectionTypes, types) {
  types.forEach(type => {
    const override = Object.keys(sectionTypes).find(aliased => type.eq(aliased));

    if (override) {
      type.setOverride(sectionTypes[override]);
    } else {
      // FIXME: NOT happy with this approach, but gets over the initial hump cased by (Vec<Announcement>,BalanceOf)
      const orig = type.toString();
      const alias = Object.entries(sectionTypes).reduce((result, [from, to]) => BOXES.reduce((result, [one, two]) => result.replace(`${one}${from}${two}`, `${one}${to}${two}`), result), orig);

      if (orig !== alias) {
        type.setOverride(alias);
      }
    }
  });
}
/**
 * Apply module-specific type overrides (always be done as part of toLatest)
 * @internal
 **/


function convertCalls(registry, calls, sectionTypes) {
  return calls.map(c => {
    setTypeOverride(sectionTypes, c.args.map(({
      type
    }) => type));
    return registry.createType('FunctionMetadataLatest', c);
  });
}
/**
 * Apply module-specific type overrides (always be done as part of toLatest)
 * @internal
 */


function convertConstants(registry, constants, sectionTypes) {
  return constants.map(c => {
    setTypeOverride(sectionTypes, [c.type]);
    return registry.createType('ModuleConstantMetadataLatest', c);
  });
}
/**
 * Apply module-specific type overrides (always be done as part of toLatest)
 * @internal
 **/


function convertEvents(registry, events, sectionTypes) {
  return events.map(e => {
    setTypeOverride(sectionTypes, e.args.map(type => type));
    return registry.createType('EventMetadataLatest', e);
  });
}
/**
 * Apply module-specific storage type overrides (always part of toLatest)
 * @internal
 **/


function convertStorage(registry, {
  items,
  prefix
}, sectionTypes) {
  return registry.createType('StorageMetadataLatest', {
    items: items.map(s => {
      setTypeOverride(sectionTypes, s.type.isPlain ? [s.type.asPlain] : s.type.isMap ? [s.type.asMap.value, s.type.asMap.key] : s.type.isDoubleMap ? [s.type.asDoubleMap.value, s.type.asDoubleMap.key1, s.type.asDoubleMap.key2] : [s.type.asNMap.value, ...s.type.asNMap.keyVec]);
      return registry.createType('StorageEntryMetadataLatest', s);
    }),
    prefix
  });
} // generate & register the OriginCaller type


function registerOriginCaller(registry, modules, metaVersion) {
  registry.register({
    OriginCaller: {
      _enum: modules.map((mod, index) => [mod.name.toString(), metaVersion >= 12 ? mod.index.toNumber() : index]).sort((a, b) => a[1] - b[1]).reduce((result, [name, index]) => {
        for (let i = Object.keys(result).length; i < index; i++) {
          result[`Empty${i}`] = 'Null';
        }

        result[name] = KNOWN_ORIGINS[name] || 'Null';
        return result;
      }, {})
    }
  });
}
/** @internal */


function createModule(registry, mod, {
  calls,
  constants,
  events,
  storage
}) {
  const sectionTypes = (0,types_known/* getModuleTypes */.AT)(registry, (0,index_js_.stringCamelCase)(mod.name));
  return registry.createType('ModuleMetadataLatest', toLatest_objectSpread(toLatest_objectSpread({}, mod), {}, {
    calls: calls && convertCalls(registry, calls, sectionTypes),
    constants: convertConstants(registry, constants, sectionTypes),
    events: events && convertEvents(registry, events, sectionTypes),
    storage: storage && convertStorage(registry, storage, sectionTypes)
  }));
}
/**
 * Convert the Metadata (which is an alias) to latest - effectively this _always_ get applied to the top-level &
 * most-recent metadata, since it allows us a chance to actually apply call and storage specific type aliasses
 * @internal
 **/


function toLatest(registry, {
  extrinsic,
  modules
}, metaVersion) {
  registerOriginCaller(registry, modules, metaVersion);
  return registry.createType('MetadataLatest', {
    extrinsic,
    modules: modules.map(mod => createModule(registry, mod, {
      calls: mod.calls.unwrapOr(null),
      constants: mod.constants,
      events: mod.events.unwrapOr(null),
      storage: mod.storage.unwrapOr(null)
    }))
  });
}
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/primitive/U32.js
var U32 = __webpack_require__(65558);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/metadata/MagicNumber.js
// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0


const MAGIC_NUMBER = 0x6174656d; // `meta`, reversed for Little Endian encoding

class MagicNumber extends U32/* u32 */.J {
  constructor(registry, value) {
    super(registry, value);

    if (!this.isEmpty) {
      (0,index_js_.assert)(this.eq(MAGIC_NUMBER), () => `MagicNumber mismatch: expected ${registry.createType('u32', MAGIC_NUMBER).toHex()}, found ${this.toHex()}`);
    }
  }

}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/metadata/util/toCallsOnly.js
// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0
function trimDocs(documentation) {
  const strings = documentation.map(doc => doc.toString().trim());
  const firstEmpty = strings.findIndex(doc => !doc.length);
  return firstEmpty === -1 ? strings : strings.slice(0, firstEmpty);
}

function mapCalls(registry, _calls) {
  const calls = _calls.unwrapOr(null);

  return registry.createType('Option<Vec<FunctionMetadataLatest>>', calls ? calls.map(({
    args,
    documentation,
    name
  }) => registry.createType('FunctionMetadataLatest', {
    args,
    documentation: trimDocs(documentation),
    name
  })) : null);
}
/** @internal */


function toCallsOnly(registry, {
  extrinsic,
  modules
}) {
  return registry.createType('MetadataLatest', {
    extrinsic,
    modules: modules.map(({
      calls,
      index,
      name
    }) => ({
      calls: mapCalls(registry, calls),
      index,
      name
    }))
  }).toJSON();
}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/metadata/util/flattenUniq.js
// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

/** @internal */
function flattenUniq(list, start = []) {
  return [...new Set(list.reduce((result, entry) => {
    if (Array.isArray(entry)) {
      return flattenUniq(entry, result);
    }

    result.push(entry);
    return result;
  }, start))];
}
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/create/getTypeDef.js
var getTypeDef = __webpack_require__(53284);
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/create/types.js
var create_types = __webpack_require__(77847);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/metadata/util/extractTypes.js
// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0
// we are attempting to avoid circular refs, hence the path import



/** @internal */
function extractTypes(types) {
  return types.map(type => {
    const decoded = (0,getTypeDef/* getTypeDef */.s)(type);

    switch (decoded.info) {
      case create_types/* TypeDefInfo.Plain */.u.Plain:
        return decoded.type;

      case create_types/* TypeDefInfo.BTreeSet */.u.BTreeSet:
      case create_types/* TypeDefInfo.Compact */.u.Compact:
      case create_types/* TypeDefInfo.Option */.u.Option:
      case create_types/* TypeDefInfo.Vec */.u.Vec:
      case create_types/* TypeDefInfo.VecFixed */.u.VecFixed:
        return extractTypes([decoded.sub.type]);

      case create_types/* TypeDefInfo.BTreeMap */.u.BTreeMap:
      case create_types/* TypeDefInfo.HashMap */.u.HashMap:
      case create_types/* TypeDefInfo.Result */.u.Result:
      case create_types/* TypeDefInfo.Tuple */.u.Tuple:
        return extractTypes(decoded.sub.map(({
          type
        }) => type));

      default:
        throw new Error(`Unhandled: Unable to create and validate type from ${type}`);
    }
  });
}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/metadata/util/validateTypes.js
// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0



const l = (0,index_js_.logger)('metadata');
/** @internal */

function validateTypes(registry, throwError, types) {
  const missing = flattenUniq(extractTypes(types)).filter(type => !registry.hasType(type)).sort();

  if (missing.length !== 0) {
    const message = `Unknown types found, no types for ${missing.join(', ')}`;

    if (throwError) {
      throw new Error(message);
    } else {
      l.warn(message);
    }
  }

  return types;
}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/metadata/util/getUniqTypes.js
// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0



/** @internal */
function unwrapCalls(mod) {
  return mod.calls ? mod.calls.unwrapOr([]) : [];
}
/** @internal */


function typeToString({
  type
}) {
  return type.toString();
}
/** @internal */


function getCallNames({
  modules
}) {
  return modules.map(mod => unwrapCalls(mod).map(({
    args
  }) => args.map(typeToString)));
}
/** @internal */


function getConstantNames({
  modules
}) {
  return modules.map(({
    constants
  }) => (constants || []).map(typeToString));
}
/** @internal */


function unwrapEvents(events) {
  return events ? events.unwrapOr([]) : [];
}
/** @internal */


function getEventNames({
  modules
}) {
  return modules.map(({
    events
  }) => unwrapEvents(events).map(({
    args
  }) => args.map(a => a.toString())));
}
/** @internal */


function unwrapStorage(storage) {
  return storage ? storage.unwrapOr({
    items: []
  }).items : [];
}
/** @internal */


function getStorageNames({
  modules
}) {
  return modules.map(({
    storage
  }) => unwrapStorage(storage).map(({
    type
  }) => type.isPlain ? [type.asPlain.toString()] : type.isMap ? [type.asMap.value.toString(), type.asMap.key.toString()] : type.isDoubleMap ? [type.asDoubleMap.value.toString(), type.asDoubleMap.key1.toString(), type.asDoubleMap.key2.toString()] : [type.asNMap.value.toString(), ...type.asNMap.keyVec.map(k => k.toString())]));
}
/** @internal */


function getUniqTypes(registry, meta, throwError) {
  return validateTypes(registry, throwError, flattenUniq([getCallNames(meta), getConstantNames(meta), getEventNames(meta), getStorageNames(meta)]));
}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/metadata/MetadataVersioned.js


// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0









const LATEST_VERSION = 13;
/**
 * @name MetadataVersioned
 * @description
 * The versioned runtime metadata as a decoded structure
 */

var _converted = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("converted");

var _assertVersion = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("assertVersion");

var _getVersion = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("getVersion");

var _metadata = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("metadata");

class MetadataVersioned extends Struct/* Struct */.A {
  constructor(registry, value) {
    super(registry, {
      magicNumber: MagicNumber,
      metadata: 'MetadataAll'
    }, value);
    Object.defineProperty(this, _converted, {
      writable: true,
      value: new Map()
    });
    Object.defineProperty(this, _assertVersion, {
      writable: true,
      value: version => {
        (0,index_js_.assert)(this.version <= version, () => `Cannot convert metadata from version ${this.version} to ${version}`);
        return this.version === version;
      }
    });
    Object.defineProperty(this, _getVersion, {
      writable: true,
      value: (version, fromPrev) => {
        const asCurr = `asV${version}`;
        const asPrev = version === 'latest' ? `asV${LATEST_VERSION}` : `asV${version - 1}`;

        if (version !== 'latest' && (0,classPrivateFieldLooseBase/* default */.Z)(this, _assertVersion)[_assertVersion](version)) {
          return (0,classPrivateFieldLooseBase/* default */.Z)(this, _metadata)[_metadata]()[asCurr];
        }

        if (!(0,classPrivateFieldLooseBase/* default */.Z)(this, _converted)[_converted].has(version)) {
          (0,classPrivateFieldLooseBase/* default */.Z)(this, _converted)[_converted].set(version, fromPrev(this.registry, this[asPrev], this.version));
        }

        return (0,classPrivateFieldLooseBase/* default */.Z)(this, _converted)[_converted].get(version);
      }
    });
    Object.defineProperty(this, _metadata, {
      writable: true,
      value: () => {
        return this.get('metadata');
      }
    });
  }

  /**
   * @description Returns the wrapped metadata as a limited calls-only (latest) version
   */
  get asCallsOnly() {
    return new MetadataVersioned(this.registry, {
      magicNumber: this.magicNumber,
      metadata: this.registry.createType('MetadataAll', toCallsOnly(this.registry, this.asLatest), this.version)
    });
  }
  /**
   * @description Returns the wrapped metadata as a V9 object
   */


  get asV9() {
    (0,classPrivateFieldLooseBase/* default */.Z)(this, _assertVersion)[_assertVersion](9);

    return (0,classPrivateFieldLooseBase/* default */.Z)(this, _metadata)[_metadata]().asV9;
  }
  /**
   * @description Returns the wrapped values as a V10 object
   */


  get asV10() {
    return (0,classPrivateFieldLooseBase/* default */.Z)(this, _getVersion)[_getVersion](10, toV10);
  }
  /**
   * @description Returns the wrapped values as a V11 object
   */


  get asV11() {
    return (0,classPrivateFieldLooseBase/* default */.Z)(this, _getVersion)[_getVersion](11, toV11);
  }
  /**
   * @description Returns the wrapped values as a V12 object
   */


  get asV12() {
    return (0,classPrivateFieldLooseBase/* default */.Z)(this, _getVersion)[_getVersion](12, toV12);
  }
  /**
   * @description Returns the wrapped values as a V13 object
   */


  get asV13() {
    return (0,classPrivateFieldLooseBase/* default */.Z)(this, _getVersion)[_getVersion](13, toV13);
  }
  /**
   * @description Returns the wrapped values as a latest version object
   */


  get asLatest() {
    // This is non-existent & latest - applied here to do the module-specific type conversions
    return (0,classPrivateFieldLooseBase/* default */.Z)(this, _getVersion)[_getVersion]('latest', toLatest);
  }
  /**
   * @description The magicNumber for the Metadata (known constant)
   */


  get magicNumber() {
    return this.get('magicNumber');
  }
  /**
   * @description the metadata version this structure represents
   */


  get version() {
    return (0,classPrivateFieldLooseBase/* default */.Z)(this, _metadata)[_metadata]().index;
  }

  getUniqTypes(throwError) {
    return getUniqTypes(this.registry, this.asLatest, throwError);
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */


  toJSON() {
    // HACK(y): ensure that we apply the aliases if we have not done so already, this is
    // needed to ensure we have the correct overrides (which is only applied in toLatest)
    // eslint-disable-next-line no-unused-expressions
    this.asLatest;
    return super.toJSON();
  }

}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/metadata/Metadata.js
// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

 // magic u32 preceding the version id

const VERSION_IDX = 4; // magic + lowest supported version

const EMPTY_METADATA = new Uint8Array([0x6d, 0x65, 0x74, 0x61, 9]);
const EMPTY_U8A = new Uint8Array();

function toU8a(value = EMPTY_U8A) {
  return (0,index_js_.isHex)(value) ? toU8a((0,index_js_.u8aToU8a)(value)) : (0,index_js_.isU8a)(value) && value.length === 0 ? EMPTY_METADATA : value;
}

function decodeMetadata(registry, _value) {
  if (!_value || (0,index_js_.isU8a)(_value) || (0,index_js_.isHex)(_value)) {
    const value = toU8a(_value);
    const version = value[VERSION_IDX];

    try {
      return new MetadataVersioned(registry, value);
    } catch (error) {
      // This is an f-ing hack as a follow-up to another ugly hack
      // https://github.com/polkadot-js/api/commit/a9211690be6b68ad6c6dad7852f1665cadcfa5b2
      // when we fail on V9, try to re-parse it as v10... yes... HACK
      if (version === 9) {
        value[VERSION_IDX] = 10;
        return decodeMetadata(registry, value);
      }

      throw error;
    }
  }

  return new MetadataVersioned(registry, _value);
}
/**
 * @name Metadata
 * @description
 * The versioned runtime metadata as a decoded structure
 */


class Metadata extends MetadataVersioned {
  constructor(registry, value) {
    super(registry, decodeMetadata(registry, value));
  }

}

/***/ }),

/***/ 86600:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ decorateConstants)
/* harmony export */ });
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13948);
// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

/** @internal */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

function decorateConstants(registry, {
  modules
}, _metaVersion) {
  return modules.reduce((result, {
    constants,
    name
  }) => {
    if (constants.isEmpty) {
      return result;
    } // For access, we change the index names, i.e. Democracy.EnactmentPeriod -> democracy.enactmentPeriod


    result[(0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.stringCamelCase)(name)] = constants.reduce((newModule, meta) => {
      // convert to the natural type as received
      const type = meta.type.toString();
      const codec = registry.createType(type, (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.hexToU8a)(meta.value.toHex()));
      codec.meta = meta;
      newModule[(0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.stringCamelCase)(meta.name)] = codec;
      return newModule;
    }, {});
    return result;
  }, {});
}

/***/ }),

/***/ 29592:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ decorateExtrinsics)
});

// EXTERNAL MODULE: consume shared module (default) @polkadot/util@^6.7.1 (strict) (fallback: ../../node_modules/@polkadot/util/index.js)
var index_js_ = __webpack_require__(13948);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/metadata/decorate/extrinsics/createUnchecked.js
// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0


function isTx(tx, callIndex) {
  return tx.callIndex[0] === callIndex[0] && tx.callIndex[1] === callIndex[1];
}
/** @internal */


function createUnchecked(registry, section, callIndex, callMetadata) {
  const expectedArgs = callMetadata.args;
  const funcName = (0,index_js_.stringCamelCase)(callMetadata.name);

  const extrinsicFn = (...args) => {
    (0,index_js_.assert)(expectedArgs.length === args.length, () => `Extrinsic ${section}.${funcName} expects ${expectedArgs.length.valueOf()} arguments, got ${args.length}.`);
    return registry.createType('Call', {
      args,
      callIndex
    }, callMetadata);
  };

  extrinsicFn.is = tx => isTx(tx, callIndex);

  extrinsicFn.callIndex = callIndex;
  extrinsicFn.meta = callMetadata;
  extrinsicFn.method = funcName;
  extrinsicFn.section = section;

  extrinsicFn.toJSON = () => callMetadata.toJSON();

  return extrinsicFn;
}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/metadata/decorate/extrinsics/index.js
// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0


/** @internal */

function decorateExtrinsics(registry, {
  modules
}, metaVersion) {
  return modules.filter(({
    calls
  }) => calls.isSome).reduce((result, {
    calls,
    index,
    name
  }, _sectionIndex) => {
    const sectionIndex = metaVersion >= 12 ? index.toNumber() : _sectionIndex;
    const section = (0,index_js_.stringCamelCase)(name);
    result[section] = calls.unwrap().reduce((newModule, callMetadata, methodIndex) => {
      newModule[(0,index_js_.stringCamelCase)(callMetadata.name)] = createUnchecked(registry, section, new Uint8Array([sectionIndex, methodIndex]), callMetadata);
      return newModule;
    }, {});
    return result;
  }, {});
}

/***/ }),

/***/ 3610:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ packageInfo)
/* harmony export */ });
// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0
// Auto-generated by @polkadot/dev, do not edit
const packageInfo = {
  name: '@polkadot/metadata',
  version: '4.13.1'
};

/***/ }),

/***/ 80230:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AT": () => (/* binding */ getModuleTypes),
  "Xn": () => (/* binding */ getSpecAlias),
  "oR": () => (/* binding */ getSpecExtensions),
  "ve": () => (/* binding */ getSpecHasher),
  "KM": () => (/* binding */ getSpecRpc),
  "kh": () => (/* binding */ getSpecTypes),
  "ur": () => (/* binding */ getUpgradeVersion)
});

// UNUSED EXPORTS: packageInfo

// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(51119);
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/packageInfo.js
var packageInfo = __webpack_require__(31760);
// EXTERNAL MODULE: consume shared module (default) @polkadot/util@^6.7.1 (strict) (fallback: ../../node_modules/@polkadot/util/index.js)
var index_js_ = __webpack_require__(13948);
// EXTERNAL MODULE: ../../node_modules/@polkadot/types-known/packageInfo.js
var types_known_packageInfo = __webpack_require__(65241);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types-known/detectPackage.js
// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0



(0,index_js_.detectPackage)(types_known_packageInfo/* packageInfo */.b, typeof __dirname !== 'undefined' && __dirname, [packageInfo/* packageInfo */.b]);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types-known/chain/index.js
// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0
// Type overrides based on specific nodes
const typesChain = {};
/* harmony default export */ const chain = (typesChain);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types-known/modules.js
// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0
// type overrides for modules (where duplication between modules exist)
const typesModules = {
  assets: {
    Approval: 'AssetApproval',
    ApprovalKey: 'AssetApprovalKey',
    Balance: 'TAssetBalance',
    DestroyWitness: 'AssetDestroyWitness'
  },
  babe: {
    EquivocationProof: 'BabeEquivocationProof'
  },
  balances: {
    Status: 'BalanceStatus'
  },
  contracts: {
    StorageKey: 'ContractStorageKey'
  },
  electionProviderMultiPhase: {
    Phase: 'ElectionPhase'
  },
  ethereum: {
    Block: 'EthBlock',
    Header: 'EthHeader',
    Receipt: 'EthReceipt',
    Transaction: 'EthTransaction',
    TransactionStatus: 'EthTransactionStatus'
  },
  evm: {
    Account: 'EvmAccount',
    Log: 'EvmLog',
    Vicinity: 'EvmVicinity'
  },
  grandpa: {
    Equivocation: 'GrandpaEquivocation',
    EquivocationProof: 'GrandpaEquivocationProof'
  },
  identity: {
    Judgement: 'IdentityJudgement'
  },
  inclusion: {
    ValidatorIndex: 'ParaValidatorIndex'
  },
  parachains: {
    Id: 'ParaId'
  },
  parasInclusion: {
    ValidatorIndex: 'ParaValidatorIndex'
  },
  parasScheduler: {
    ValidatorIndex: 'ParaValidatorIndex'
  },
  parasShared: {
    ValidatorIndex: 'ParaValidatorIndex'
  },
  proposeParachain: {
    Proposal: 'ParachainProposal'
  },
  proxy: {
    Announcement: 'ProxyAnnouncement'
  },
  scheduler: {
    ValidatorIndex: 'ParaValidatorIndex'
  },
  shared: {
    ValidatorIndex: 'ParaValidatorIndex'
  },
  society: {
    Judgement: 'SocietyJudgement',
    Vote: 'SocietyVote'
  },
  staking: {
    Compact: 'CompactAssignments'
  },
  treasury: {
    Proposal: 'TreasuryProposal'
  }
};
/* harmony default export */ const modules = (typesModules);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types-known/spec/centrifuge-chain.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */
const sharedTypes = {
  // Anchor
  AnchorData: {
    anchoredBlock: 'u64',
    docRoot: 'H256',
    id: 'H256'
  },
  PreCommitData: {
    expirationBlock: 'u64',
    identity: 'H256',
    signingRoot: 'H256'
  },
  // Fees
  Fee: {
    key: 'Hash',
    price: 'Balance'
  },
  // MultiAccount
  MultiAccountData: {
    deposit: 'Balance',
    depositor: 'AccountId',
    signatories: 'Vec<AccountId>',
    threshold: 'u16'
  },
  // Bridge
  ChainId: 'u8',
  DepositNonce: 'u64',
  ResourceId: '[u8; 32]',
  'chainbridge::ChainId': 'u8',
  // NFT
  RegistryId: 'H160',
  TokenId: 'U256',
  AssetId: {
    registryId: 'RegistryId',
    tokenId: 'TokenId'
  },
  AssetInfo: {
    metadata: 'Bytes'
  },
  MintInfo: {
    anchorId: 'Hash',
    proofs: 'Vec<ProofMint>',
    staticHashes: '[Hash; 3]'
  },
  Proof: {
    leafHash: 'H256',
    sortedHashes: 'H256'
  },
  ProofMint: {
    hashes: 'Vec<Hash>',
    property: 'Bytes',
    salt: '[u8; 32]',
    value: 'Bytes'
  },
  RegistryInfo: {
    fields: 'Vec<Bytes>',
    ownerCanBurn: 'bool'
  }
};
const versioned = [{
  minmax: [240, 999],
  types: _objectSpread(_objectSpread({}, sharedTypes), {}, {
    AccountInfo: 'AccountInfoWithRefCount',
    Address: 'LookupSource',
    LookupSource: 'IndicesLookupSource',
    Multiplier: 'Fixed64',
    RefCount: 'RefCountTo259'
  })
}, {
  minmax: [1000, undefined],
  types: _objectSpread({}, sharedTypes)
}];
/* harmony default export */ const centrifuge_chain = (versioned);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types-known/spec/kusama.js


function kusama_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function kusama_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { kusama_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { kusama_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */
const kusama_sharedTypes = {
  Keys: 'SessionKeys6',
  ProxyType: {
    _enum: ['Any', 'NonTransfer', 'Governance', 'Staking', 'IdentityJudgement', 'CancelProxy']
  }
};
const addrIndicesTypes = {
  AccountInfo: 'AccountInfoWithRefCount',
  Address: 'LookupSource',
  CompactAssignments: 'CompactAssignmentsWith16',
  Keys: 'SessionKeys5',
  LookupSource: 'IndicesLookupSource',
  RawSolution: 'RawSolutionWith16',
  ValidatorPrefs: 'ValidatorPrefsWithCommission'
};
const addrAccountIdTypes = {
  AccountInfo: 'AccountInfoWithRefCount',
  Address: 'AccountId',
  CompactAssignments: 'CompactAssignmentsWith16',
  Keys: 'SessionKeys5',
  LookupSource: 'AccountId',
  RawSolution: 'RawSolutionWith16',
  ValidatorPrefs: 'ValidatorPrefsWithCommission'
};
const kusama_versioned = [{
  // 1020 is first CC3
  minmax: [1019, 1031],
  types: kusama_objectSpread(kusama_objectSpread({}, addrIndicesTypes), {}, {
    BalanceLock: 'BalanceLockTo212',
    CompactAssignments: 'CompactAssignmentsTo257',
    DispatchError: 'DispatchErrorTo198',
    DispatchInfo: 'DispatchInfoTo244',
    Keys: 'SessionKeys5',
    Multiplier: 'Fixed64',
    OpenTip: 'OpenTipTo225',
    RefCount: 'RefCountTo259',
    ReferendumInfo: 'ReferendumInfoTo239',
    SlashingSpans: 'SlashingSpansTo204',
    StakingLedger: 'StakingLedgerTo223',
    Votes: 'VotesTo230',
    Weight: 'u32'
  })
}, {
  minmax: [1032, 1042],
  types: kusama_objectSpread(kusama_objectSpread({}, addrIndicesTypes), {}, {
    BalanceLock: 'BalanceLockTo212',
    CompactAssignments: 'CompactAssignmentsTo257',
    DispatchInfo: 'DispatchInfoTo244',
    Keys: 'SessionKeys5',
    Multiplier: 'Fixed64',
    OpenTip: 'OpenTipTo225',
    RefCount: 'RefCountTo259',
    ReferendumInfo: 'ReferendumInfoTo239',
    SlashingSpans: 'SlashingSpansTo204',
    StakingLedger: 'StakingLedgerTo223',
    Votes: 'VotesTo230',
    Weight: 'u32'
  })
}, {
  // actual at 1045 (1043-1044 is dev)
  minmax: [1043, 1045],
  types: kusama_objectSpread(kusama_objectSpread({}, addrIndicesTypes), {}, {
    BalanceLock: 'BalanceLockTo212',
    CompactAssignments: 'CompactAssignmentsTo257',
    DispatchInfo: 'DispatchInfoTo244',
    Keys: 'SessionKeys5',
    Multiplier: 'Fixed64',
    OpenTip: 'OpenTipTo225',
    RefCount: 'RefCountTo259',
    ReferendumInfo: 'ReferendumInfoTo239',
    StakingLedger: 'StakingLedgerTo223',
    Votes: 'VotesTo230',
    Weight: 'u32'
  })
}, {
  minmax: [1046, 1054],
  types: kusama_objectSpread(kusama_objectSpread(kusama_objectSpread({}, kusama_sharedTypes), addrAccountIdTypes), {}, {
    CompactAssignments: 'CompactAssignmentsTo257',
    DispatchInfo: 'DispatchInfoTo244',
    Multiplier: 'Fixed64',
    OpenTip: 'OpenTipTo225',
    RefCount: 'RefCountTo259',
    ReferendumInfo: 'ReferendumInfoTo239',
    StakingLedger: 'StakingLedgerTo240',
    Weight: 'u32'
  })
}, {
  minmax: [1055, 1056],
  types: kusama_objectSpread(kusama_objectSpread(kusama_objectSpread({}, kusama_sharedTypes), addrAccountIdTypes), {}, {
    CompactAssignments: 'CompactAssignmentsTo257',
    DispatchInfo: 'DispatchInfoTo244',
    Multiplier: 'Fixed64',
    OpenTip: 'OpenTipTo225',
    RefCount: 'RefCountTo259',
    StakingLedger: 'StakingLedgerTo240',
    Weight: 'u32'
  })
}, {
  minmax: [1057, 1061],
  types: kusama_objectSpread(kusama_objectSpread(kusama_objectSpread({}, kusama_sharedTypes), addrAccountIdTypes), {}, {
    CompactAssignments: 'CompactAssignmentsTo257',
    DispatchInfo: 'DispatchInfoTo244',
    OpenTip: 'OpenTipTo225',
    RefCount: 'RefCountTo259'
  })
}, {
  minmax: [1062, 2012],
  types: kusama_objectSpread(kusama_objectSpread(kusama_objectSpread({}, kusama_sharedTypes), addrAccountIdTypes), {}, {
    CompactAssignments: 'CompactAssignmentsTo257',
    OpenTip: 'OpenTipTo225',
    RefCount: 'RefCountTo259'
  })
}, {
  minmax: [2013, 2022],
  types: kusama_objectSpread(kusama_objectSpread(kusama_objectSpread({}, kusama_sharedTypes), addrAccountIdTypes), {}, {
    CompactAssignments: 'CompactAssignmentsTo257',
    RefCount: 'RefCountTo259'
  })
}, {
  minmax: [2023, 2024],
  types: kusama_objectSpread(kusama_objectSpread(kusama_objectSpread({}, kusama_sharedTypes), addrAccountIdTypes), {}, {
    RefCount: 'RefCountTo259'
  })
}, {
  minmax: [2025, 2027],
  types: kusama_objectSpread(kusama_objectSpread({}, kusama_sharedTypes), addrAccountIdTypes)
}, {
  minmax: [2028, 2029],
  types: kusama_objectSpread(kusama_objectSpread({}, kusama_sharedTypes), {}, {
    AccountInfo: 'AccountInfoWithDualRefCount',
    CompactAssignments: 'CompactAssignmentsWith16',
    RawSolution: 'RawSolutionWith16'
  })
}, {
  minmax: [2030, 9000],
  types: kusama_objectSpread(kusama_objectSpread({}, kusama_sharedTypes), {}, {
    CompactAssignments: 'CompactAssignmentsWith16',
    RawSolution: 'RawSolutionWith16'
  })
}, {
  minmax: [9010, undefined],
  types: kusama_objectSpread({}, kusama_sharedTypes)
}];
/* harmony default export */ const kusama = (kusama_versioned);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types-known/spec/node.js
// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */
const node_versioned = [{
  minmax: [0, undefined],
  types: {// nothing, API tracks master
  }
}];
/* harmony default export */ const node = (node_versioned);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types-known/spec/node-template.js
// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */
const node_template_versioned = [{
  minmax: [0, undefined],
  types: {// nothing, API tracks master
  }
}];
/* harmony default export */ const node_template = (node_template_versioned);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types-known/spec/polkadot.js


function polkadot_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function polkadot_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { polkadot_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { polkadot_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */
const polkadot_sharedTypes = {
  Keys: 'SessionKeys6',
  ProxyType: {
    _enum: {
      Any: 0,
      NonTransfer: 1,
      Governance: 2,
      Staking: 3,
      UnusedSudoBalances: 4,
      IdentityJudgement: 5,
      CancelProxy: 6
    }
  }
};
const polkadot_addrAccountIdTypes = {
  AccountInfo: 'AccountInfoWithRefCount',
  Address: 'AccountId',
  CompactAssignments: 'CompactAssignmentsWith16',
  Keys: 'SessionKeys5',
  LookupSource: 'AccountId',
  RawSolution: 'RawSolutionWith16',
  ValidatorPrefs: 'ValidatorPrefsWithCommission'
}; // these are override types for Polkadot

const polkadot_versioned = [{
  minmax: [0, 12],
  types: polkadot_objectSpread(polkadot_objectSpread(polkadot_objectSpread({}, polkadot_sharedTypes), polkadot_addrAccountIdTypes), {}, {
    CompactAssignments: 'CompactAssignmentsTo257',
    OpenTip: 'OpenTipTo225',
    RefCount: 'RefCountTo259'
  })
}, {
  minmax: [13, 22],
  types: polkadot_objectSpread(polkadot_objectSpread(polkadot_objectSpread({}, polkadot_sharedTypes), polkadot_addrAccountIdTypes), {}, {
    CompactAssignments: 'CompactAssignmentsTo257',
    RefCount: 'RefCountTo259'
  })
}, {
  minmax: [23, 24],
  types: polkadot_objectSpread(polkadot_objectSpread(polkadot_objectSpread({}, polkadot_sharedTypes), polkadot_addrAccountIdTypes), {}, {
    RefCount: 'RefCountTo259'
  })
}, {
  minmax: [25, 27],
  types: polkadot_objectSpread(polkadot_objectSpread({}, polkadot_sharedTypes), polkadot_addrAccountIdTypes)
}, {
  minmax: [28, 29],
  types: polkadot_objectSpread(polkadot_objectSpread({}, polkadot_sharedTypes), {}, {
    CompactAssignments: 'CompactAssignmentsWith16',
    RawSolution: 'RawSolutionWith16',
    AccountInfo: 'AccountInfoWithDualRefCount'
  })
}, {
  minmax: [30, 9000],
  types: polkadot_objectSpread(polkadot_objectSpread({}, polkadot_sharedTypes), {}, {
    CompactAssignments: 'CompactAssignmentsWith16',
    RawSolution: 'RawSolutionWith16'
  })
}, {
  minmax: [9010, undefined],
  types: polkadot_objectSpread({}, polkadot_sharedTypes)
}];
/* harmony default export */ const polkadot = (polkadot_versioned);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types-known/spec/rococo.js


function rococo_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function rococo_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { rococo_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { rococo_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */
// structs need to be in order

/* eslint-disable sort-keys */
const rococo_sharedTypes = {
  FullIdentification: '()',
  // No staking, only session (as per config)
  Keys: 'SessionKeys7B'
};
const rococo_versioned = [{
  minmax: [0, 200],
  types: rococo_objectSpread(rococo_objectSpread({}, rococo_sharedTypes), {}, {
    AccountInfo: 'AccountInfoWithDualRefCount',
    Address: 'AccountId',
    LookupSource: 'AccountId'
  })
}, {
  minmax: [201, 214],
  types: rococo_objectSpread(rococo_objectSpread({}, rococo_sharedTypes), {}, {
    AccountInfo: 'AccountInfoWithDualRefCount'
  })
}, {
  minmax: [215, 228],
  types: rococo_objectSpread(rococo_objectSpread({}, rococo_sharedTypes), {}, {
    Keys: 'SessionKeys6'
  })
}, {
  minmax: [229, undefined],
  types: rococo_objectSpread({}, rococo_sharedTypes)
}];
/* harmony default export */ const rococo = (rococo_versioned);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types-known/spec/shell.js
// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */
const shell_versioned = [{
  minmax: [0, undefined],
  types: {// nothing, limited runtime
  }
}];
/* harmony default export */ const shell = (shell_versioned);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types-known/spec/statemint.js
// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */
// these are override types for Polkadot
const statemint_versioned = [{
  minmax: [0, undefined],
  types: {
    TAssetBalance: 'u128',
    ProxyType: {
      _enum: ['Any', 'NonTransfer', 'CancelProxy', 'Assets', 'AssetOwner', 'AssetManager', 'Staking']
    }
  }
}];
/* harmony default export */ const statemint = (statemint_versioned);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types-known/spec/westend.js


function westend_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function westend_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { westend_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { westend_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */
const westend_sharedTypes = {
  // 16 validators
  CompactAssignments: 'CompactAssignmentsWith16',
  RawSolution: 'RawSolutionWith16',
  // general
  Keys: 'SessionKeys6',
  ProxyType: {
    _enum: ['Any', 'NonTransfer', 'Staking', 'SudoBalances', 'IdentityJudgement', 'CancelProxy']
  }
};
const westend_addrAccountIdTypes = {
  AccountInfo: 'AccountInfoWithRefCount',
  Address: 'AccountId',
  CompactAssignments: 'CompactAssignmentsWith16',
  LookupSource: 'AccountId',
  Keys: 'SessionKeys5',
  RawSolution: 'RawSolutionWith16',
  ValidatorPrefs: 'ValidatorPrefsWithCommission'
};
const westend_versioned = [{
  minmax: [1, 2],
  types: westend_objectSpread(westend_objectSpread(westend_objectSpread({}, westend_sharedTypes), westend_addrAccountIdTypes), {}, {
    CompactAssignments: 'CompactAssignmentsTo257',
    Multiplier: 'Fixed64',
    OpenTip: 'OpenTipTo225',
    RefCount: 'RefCountTo259',
    Weight: 'u32'
  })
}, {
  minmax: [3, 22],
  types: westend_objectSpread(westend_objectSpread(westend_objectSpread({}, westend_sharedTypes), westend_addrAccountIdTypes), {}, {
    CompactAssignments: 'CompactAssignmentsTo257',
    OpenTip: 'OpenTipTo225',
    RefCount: 'RefCountTo259'
  })
}, {
  minmax: [23, 42],
  types: westend_objectSpread(westend_objectSpread(westend_objectSpread({}, westend_sharedTypes), westend_addrAccountIdTypes), {}, {
    CompactAssignments: 'CompactAssignmentsTo257',
    RefCount: 'RefCountTo259'
  })
}, {
  minmax: [43, 44],
  types: westend_objectSpread(westend_objectSpread(westend_objectSpread({}, westend_sharedTypes), westend_addrAccountIdTypes), {}, {
    RefCount: 'RefCountTo259'
  })
}, {
  minmax: [45, 47],
  types: westend_objectSpread(westend_objectSpread({}, westend_sharedTypes), westend_addrAccountIdTypes)
}, {
  minmax: [48, 49],
  types: westend_objectSpread(westend_objectSpread({}, westend_sharedTypes), {}, {
    AccountInfo: 'AccountInfoWithDualRefCount'
  })
}, {
  minmax: [50, undefined],
  types: westend_objectSpread({}, westend_sharedTypes)
}];
/* harmony default export */ const westend = (westend_versioned);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types-known/spec/index.js
// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0








 // Type overrides for specific spec types & versions as given in runtimeVersion

const typesSpec = {
  'centrifuge-chain': centrifuge_chain,
  kusama: kusama,
  node: node,
  'node-template': node_template,
  polkadot: polkadot,
  rococo: rococo,
  shell: shell,
  statemine: statemint,
  statemint: statemint,
  westend: westend,
  westmint: statemint
};
/* harmony default export */ const spec = (typesSpec);
// EXTERNAL MODULE: ../../node_modules/bn.js/lib/bn.js
var bn = __webpack_require__(62197);
// EXTERNAL MODULE: consume shared module (default) @polkadot/networks@^6.7.1 (strict) (fallback: ../../node_modules/@polkadot/networks/index.js)
var networks_index_js_ = __webpack_require__(87208);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types-known/upgrades/kusama.js
// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0
const upgrades = [[0, 1020], [26669, 1021], [38245, 1022], [54248, 1023], [59659, 1024], [67651, 1025], [82191, 1027], [83238, 1028], [101503, 1029], [203466, 1030], [295787, 1031], [461692, 1032], [504329, 1033], [569327, 1038], [587687, 1039], [653183, 1040], [693488, 1042], [901442, 1045], [1375086, 1050], [1445458, 1051], [1472960, 1052], [1475648, 1053], [1491596, 1054], [1574408, 1055], [2064961, 1058], [2201991, 1062], [2671528, 2005], [2704202, 2007], [2728002, 2008], [2832534, 2011], [2962294, 2012], [3240000, 2013], [3274408, 2015], [3323565, 2019], [3534175, 2022], [3860281, 2023], [4143129, 2024], [4401242, 2025], [4841367, 2026], [5961600, 2027], [6137912, 2028], [6561855, 2029], [7100891, 2030], [7468792, 9010], [7668600, 9030]];
/* harmony default export */ const upgrades_kusama = (upgrades);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types-known/upgrades/polkadot.js
// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0
const polkadot_upgrades = [[0, 0], [29231, 1], [188836, 5], [199405, 6], [214264, 7], [244358, 8], [303079, 9], [314201, 10], [342400, 11], [443963, 12], [528470, 13], [687751, 14], [746085, 15], [787923, 16], [799302, 17], [1205128, 18], [1603423, 23], [1733218, 24], [2005673, 25], [2436698, 26], [3613564, 27], [3899547, 28], [4345767, 29], [4876134, 30]];
/* harmony default export */ const upgrades_polkadot = (polkadot_upgrades);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types-known/upgrades/westend.js
// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0
const westend_upgrades = [[214356, 4], [392764, 7], [409740, 8], [809976, 20], [877581, 24], [879238, 25], [889472, 26], [902937, 27], [932751, 28], [991142, 29], [1030162, 31], [1119657, 32], [1199282, 33], [1342534, 34], [1392263, 35], [1431703, 36], [1433369, 37], [1490972, 41], [2087397, 43], [2316688, 44], [2549864, 45], [3925782, 46], [3925843, 47], [4207800, 48], [4627944, 49], [5124076, 50], [5478664, 900], [5482450, 9000], [5584305, 9010], [5784566, 9030], [5879822, 9031], [5896856, 9032], [5897316, 9033]];
/* harmony default export */ const upgrades_westend = (westend_upgrades);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types-known/upgrades/index.js
// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0





 // testnets are not available in the networks map

const NET_EXTRA = {
  westend: {
    genesisHash: ['0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e']
  }
};
/** @internal */

function checkOrder(network, versions) {
  const ooo = versions.filter((curr, index) => {
    const prev = versions[index - 1];
    return index === 0 ? false : curr[0] <= prev[0] || curr[1] <= prev[1];
  });
  (0,index_js_.assert)(!ooo.length, () => `${network}: Mismatched upgrade ordering: ${(0,index_js_.stringify)(ooo)}`);
  return versions;
}
/** @internal */


function mapRaw([network, versions]) {
  const chain = networks_index_js_.find(n => n.network === network) || NET_EXTRA[network];
  (0,index_js_.assert)(chain, () => `Unable to find info for chain ${network}`);
  return {
    genesisHash: (0,index_js_.hexToU8a)(chain.genesisHash[0]),
    network,
    versions: checkOrder(network, versions).map(([blockNumber, specVersion]) => ({
      blockNumber: new bn(blockNumber),
      specVersion: new bn(specVersion)
    }))
  };
} // Type overrides for specific spec types & versions as given in runtimeVersion


const upgrades_upgrades = Object.entries({
  kusama: upgrades_kusama,
  polkadot: upgrades_polkadot,
  westend: upgrades_westend
}).map(mapRaw);
/* harmony default export */ const types_known_upgrades = (upgrades_upgrades);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types-known/index.js


function types_known_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function types_known_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { types_known_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { types_known_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0






 // flatten a VersionedType[] into a Record<string, string>

/** @internal */

function filterVersions(versions = [], specVersion) {
  return versions.filter(({
    minmax: [min, max]
  }) => ((0,index_js_.isUndefined)(min) || specVersion >= min) && ((0,index_js_.isUndefined)(max) || specVersion <= max)).reduce((result, {
    types
  }) => types_known_objectSpread(types_known_objectSpread({}, result), types), {});
}
/**
 * @description Get types for specific modules (metadata override)
 */


function getModuleTypes({
  knownTypes
}, section) {
  var _knownTypes$typesAlia;

  return types_known_objectSpread(types_known_objectSpread({}, modules[section] || {}), ((_knownTypes$typesAlia = knownTypes.typesAlias) === null || _knownTypes$typesAlia === void 0 ? void 0 : _knownTypes$typesAlia[section]) || {});
}
/**
 * @description Based on the chain and runtimeVersion, get the applicable signed extensions (ready for registration)
 */

function getSpecExtensions({
  knownTypes
}, chainName, specName) {
  var _knownTypes$typesBund, _knownTypes$typesBund2, _knownTypes$typesBund3, _knownTypes$typesBund4, _knownTypes$typesBund5, _knownTypes$typesBund6;

  const _chainName = chainName.toString();

  const _specName = specName.toString();

  return types_known_objectSpread(types_known_objectSpread({}, ((_knownTypes$typesBund = knownTypes.typesBundle) === null || _knownTypes$typesBund === void 0 ? void 0 : (_knownTypes$typesBund2 = _knownTypes$typesBund.spec) === null || _knownTypes$typesBund2 === void 0 ? void 0 : (_knownTypes$typesBund3 = _knownTypes$typesBund2[_specName]) === null || _knownTypes$typesBund3 === void 0 ? void 0 : _knownTypes$typesBund3.signedExtensions) || {}), ((_knownTypes$typesBund4 = knownTypes.typesBundle) === null || _knownTypes$typesBund4 === void 0 ? void 0 : (_knownTypes$typesBund5 = _knownTypes$typesBund4.chain) === null || _knownTypes$typesBund5 === void 0 ? void 0 : (_knownTypes$typesBund6 = _knownTypes$typesBund5[_chainName]) === null || _knownTypes$typesBund6 === void 0 ? void 0 : _knownTypes$typesBund6.signedExtensions) || {});
}
/**
 * @description Based on the chain and runtimeVersion, get the applicable types (ready for registration)
 */

function getSpecTypes({
  knownTypes
}, chainName, specName, specVersion) {
  var _knownTypes$typesBund7, _knownTypes$typesBund8, _knownTypes$typesBund9, _knownTypes$typesBund10, _knownTypes$typesBund11, _knownTypes$typesBund12, _knownTypes$typesSpec, _knownTypes$typesChai;

  const _chainName = chainName.toString();

  const _specName = specName.toString();

  const _specVersion = (0,index_js_.bnToBn)(specVersion).toNumber(); // The order here is always, based on -
  //   - spec then chain
  //   - typesBundle takes higher precedence
  //   - types is the final catch-all override


  return types_known_objectSpread(types_known_objectSpread(types_known_objectSpread(types_known_objectSpread(types_known_objectSpread(types_known_objectSpread(types_known_objectSpread({}, filterVersions(spec[_specName], _specVersion)), filterVersions(chain[_chainName], _specVersion)), filterVersions((_knownTypes$typesBund7 = knownTypes.typesBundle) === null || _knownTypes$typesBund7 === void 0 ? void 0 : (_knownTypes$typesBund8 = _knownTypes$typesBund7.spec) === null || _knownTypes$typesBund8 === void 0 ? void 0 : (_knownTypes$typesBund9 = _knownTypes$typesBund8[_specName]) === null || _knownTypes$typesBund9 === void 0 ? void 0 : _knownTypes$typesBund9.types, _specVersion)), filterVersions((_knownTypes$typesBund10 = knownTypes.typesBundle) === null || _knownTypes$typesBund10 === void 0 ? void 0 : (_knownTypes$typesBund11 = _knownTypes$typesBund10.chain) === null || _knownTypes$typesBund11 === void 0 ? void 0 : (_knownTypes$typesBund12 = _knownTypes$typesBund11[_chainName]) === null || _knownTypes$typesBund12 === void 0 ? void 0 : _knownTypes$typesBund12.types, _specVersion)), ((_knownTypes$typesSpec = knownTypes.typesSpec) === null || _knownTypes$typesSpec === void 0 ? void 0 : _knownTypes$typesSpec[_specName]) || {}), ((_knownTypes$typesChai = knownTypes.typesChain) === null || _knownTypes$typesChai === void 0 ? void 0 : _knownTypes$typesChai[_chainName]) || {}), knownTypes.types || {});
}
function getSpecHasher({
  knownTypes
}, chainName, specName) {
  var _knownTypes$typesBund13, _knownTypes$typesBund14, _knownTypes$typesBund15, _knownTypes$typesBund16, _knownTypes$typesBund17, _knownTypes$typesBund18;

  const _chainName = chainName.toString();

  const _specName = specName.toString();

  return knownTypes.hasher || ((_knownTypes$typesBund13 = knownTypes.typesBundle) === null || _knownTypes$typesBund13 === void 0 ? void 0 : (_knownTypes$typesBund14 = _knownTypes$typesBund13.chain) === null || _knownTypes$typesBund14 === void 0 ? void 0 : (_knownTypes$typesBund15 = _knownTypes$typesBund14[_chainName]) === null || _knownTypes$typesBund15 === void 0 ? void 0 : _knownTypes$typesBund15.hasher) || ((_knownTypes$typesBund16 = knownTypes.typesBundle) === null || _knownTypes$typesBund16 === void 0 ? void 0 : (_knownTypes$typesBund17 = _knownTypes$typesBund16.spec) === null || _knownTypes$typesBund17 === void 0 ? void 0 : (_knownTypes$typesBund18 = _knownTypes$typesBund17[_specName]) === null || _knownTypes$typesBund18 === void 0 ? void 0 : _knownTypes$typesBund18.hasher) || null;
}
/**
 * @description Based on the chain and runtimeVersion, get the applicable rpc definitions (ready for registration)
 */

function getSpecRpc({
  knownTypes
}, chainName, specName) {
  var _knownTypes$typesBund19, _knownTypes$typesBund20, _knownTypes$typesBund21, _knownTypes$typesBund22, _knownTypes$typesBund23, _knownTypes$typesBund24;

  const _chainName = chainName.toString();

  const _specName = specName.toString();

  return types_known_objectSpread(types_known_objectSpread({}, ((_knownTypes$typesBund19 = knownTypes.typesBundle) === null || _knownTypes$typesBund19 === void 0 ? void 0 : (_knownTypes$typesBund20 = _knownTypes$typesBund19.spec) === null || _knownTypes$typesBund20 === void 0 ? void 0 : (_knownTypes$typesBund21 = _knownTypes$typesBund20[_specName]) === null || _knownTypes$typesBund21 === void 0 ? void 0 : _knownTypes$typesBund21.rpc) || {}), ((_knownTypes$typesBund22 = knownTypes.typesBundle) === null || _knownTypes$typesBund22 === void 0 ? void 0 : (_knownTypes$typesBund23 = _knownTypes$typesBund22.chain) === null || _knownTypes$typesBund23 === void 0 ? void 0 : (_knownTypes$typesBund24 = _knownTypes$typesBund23[_chainName]) === null || _knownTypes$typesBund24 === void 0 ? void 0 : _knownTypes$typesBund24.rpc) || {});
}
/**
 * @description Based on the chain and runtimeVersion, get the applicable alias definitions (ready for registration)
 */

function getSpecAlias({
  knownTypes
}, chainName, specName) {
  var _knownTypes$typesBund25, _knownTypes$typesBund26, _knownTypes$typesBund27, _knownTypes$typesBund28, _knownTypes$typesBund29, _knownTypes$typesBund30;

  const _chainName = chainName.toString();

  const _specName = specName.toString(); // as per versions, first spec, then chain then finally non-versioned


  return types_known_objectSpread(types_known_objectSpread(types_known_objectSpread({}, ((_knownTypes$typesBund25 = knownTypes.typesBundle) === null || _knownTypes$typesBund25 === void 0 ? void 0 : (_knownTypes$typesBund26 = _knownTypes$typesBund25.spec) === null || _knownTypes$typesBund26 === void 0 ? void 0 : (_knownTypes$typesBund27 = _knownTypes$typesBund26[_specName]) === null || _knownTypes$typesBund27 === void 0 ? void 0 : _knownTypes$typesBund27.alias) || {}), ((_knownTypes$typesBund28 = knownTypes.typesBundle) === null || _knownTypes$typesBund28 === void 0 ? void 0 : (_knownTypes$typesBund29 = _knownTypes$typesBund28.chain) === null || _knownTypes$typesBund29 === void 0 ? void 0 : (_knownTypes$typesBund30 = _knownTypes$typesBund29[_chainName]) === null || _knownTypes$typesBund30 === void 0 ? void 0 : _knownTypes$typesBund30.alias) || {}), knownTypes.typesAlias || {});
}
/**
 * @description Returns a version record for known chains where upgrades are being tracked
 */

function getUpgradeVersion(genesisHash, blockNumber) {
  const known = types_known_upgrades.find(u => genesisHash.eq(u.genesisHash));
  return known ? [known.versions.reduce((last, version) => {
    return blockNumber.gt(version.blockNumber) ? version : last;
  }, undefined), known.versions.find(version => blockNumber.lte(version.blockNumber))] : [undefined, undefined];
}

/***/ }),

/***/ 65241:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ packageInfo)
/* harmony export */ });
// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0
// Auto-generated by @polkadot/dev, do not edit
const packageInfo = {
  name: '@polkadot/types-known',
  version: '4.13.1'
};

/***/ }),

/***/ 46227:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ AbstractArray)
/* harmony export */ });
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13948);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67365);
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0


/**
 * @name AbstractArray
 * @description
 * This manages codec arrays. It is an extension to Array, providing
 * specific encoding/decoding on top of the base type.
 * @noInheritDoc
 */

class AbstractArray extends Array {
  constructor(registry, ...values) {
    super(...values);
    this.registry = void 0;
    this.createdAtHash = void 0;
    this.registry = registry;
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */


  get encodedLength() {
    return this.reduce((total, entry) => total + entry.encodedLength, (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.compactToU8a)(this.length).length);
  }
  /**
   * @description returns a hash of the contents
   */


  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description Checks if the value is an empty value
   */


  get isEmpty() {
    return this.length === 0;
  }
  /**
   * @description The length of the value
   */


  get length() {
    // only included here since we ignore inherited docs
    return super.length;
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */


  eq(other) {
    return (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__/* .compareArray */ .w)(this, other);
  }
  /**
   * @description Converts the Object to an standard JavaScript Array
   */


  toArray() {
    return Array.from(this);
  }
  /**
   * @description Returns a hex string representation of the value
   */


  toHex() {
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aToHex)(this.toU8a());
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */


  toHuman(isExtended) {
    return this.map(entry => entry.toHuman(isExtended));
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */


  toJSON() {
    return this.map(entry => entry.toJSON());
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  /**
   * @description Returns the string representation of the value
   */
  toString() {
    // Overwrite the default toString representation of Array.
    const data = this.map(entry => entry.toString());
    return `[${data.join(', ')}]`;
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */


  toU8a(isBare) {
    const encoded = this.map(entry => entry.toU8a(isBare));
    return isBare ? (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aConcat)(...encoded) : (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aConcat)((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.compactToU8a)(this.length), ...encoded);
  } // Below are methods that we override. When we do a `new Vec(...).map()`,
  // we want it to return an Array. We only override the methods that return a
  // new instance.

  /**
   * @description Concatenates two arrays
   */


  concat(other) {
    return this.toArray().concat(other instanceof AbstractArray ? other.toArray() : other);
  }
  /**
   * @description Filters the array with the callback
   */


  filter(callbackfn, thisArg) {
    return this.toArray().filter(callbackfn, thisArg);
  }
  /**
   * @description Maps the array with the callback
   */


  map(callbackfn, thisArg) {
    return this.toArray().map(callbackfn, thisArg);
  }
  /**
   * @description Checks if the array includes a specific value
   */


  includes(check) {
    return this.some(value => value.eq(check));
  }
  /**
   * @description Returns a slice of an array
   */


  slice(start, end) {
    return this.toArray().slice(start, end);
  }

}

/***/ }),

/***/ 6435:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ AbstractInt)
/* harmony export */ });
/* unused harmony export DEFAULT_UINT_BITS */
/* harmony import */ var _babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89539);
/* harmony import */ var _babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38879);
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62197);
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13948);


// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0


const DEFAULT_UINT_BITS = 64; // Maximum allowed integer for JS is 2^53 - 1, set limit at 52
// In this case however, we always print any >32 as hex

const MAX_NUMBER_BITS = 52;
const MUL_P = new bn_js__WEBPACK_IMPORTED_MODULE_0__(10000);
const FORMATTERS = [['Perquintill', _polkadot_util__WEBPACK_IMPORTED_MODULE_1__.BN_QUINTILL], ['Perbill', _polkadot_util__WEBPACK_IMPORTED_MODULE_1__.BN_BILLION], ['Permill', _polkadot_util__WEBPACK_IMPORTED_MODULE_1__.BN_MILLION], ['Percent', _polkadot_util__WEBPACK_IMPORTED_MODULE_1__.BN_HUNDRED]];

function toPercentage(value, divisor) {
  return `${(value.mul(MUL_P).div(divisor).toNumber() / 100).toFixed(2)}%`;
}
/** @internal */


function decodeAbstracIntU8a(value, bitLength, isNegative) {
  if (!value.length) {
    return '0';
  }

  try {
    // NOTE When passing u8a in (typically from decoded data), it is always Little Endian
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.u8aToBn)(value.subarray(0, bitLength / 8), {
      isLe: true,
      isNegative
    }).toString();
  } catch (error) {
    throw new Error(`AbstractInt: failed on ${(0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.stringify)(value)}:: ${error.message}`);
  }
}
/** @internal */


function decodeAbstractInt(value, bitLength, isNegative) {
  // This function returns a string, which will be passed in the BN
  // constructor. It would be ideal to actually return a BN, but there's a
  // bug: https://github.com/indutny/bn.js/issues/206.
  if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.isHex)(value, -1, true)) {
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.hexToBn)(value, {
      isLe: false,
      isNegative
    }).toString();
  } else if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.isU8a)(value)) {
    return decodeAbstracIntU8a(value, bitLength, isNegative);
  } else if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.isString)(value)) {
    return new bn_js__WEBPACK_IMPORTED_MODULE_0__(value.toString(), 10).toString();
  }

  return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.bnToBn)(value).toString();
}
/**
 * @name AbstractInt
 * @ignore
 * @noInheritDoc
 */


var _bitLength = /*#__PURE__*/(0,_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)("bitLength");

var _isSigned = /*#__PURE__*/(0,_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)("isSigned");

class AbstractInt extends bn_js__WEBPACK_IMPORTED_MODULE_0__ {
  constructor(registry, value = 0, bitLength = DEFAULT_UINT_BITS, isSigned = false) {
    super(decodeAbstractInt(value, bitLength, isSigned));
    this.registry = void 0;
    this.createdAtHash = void 0;
    Object.defineProperty(this, _bitLength, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _isSigned, {
      writable: true,
      value: void 0
    });
    this.registry = registry;
    (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(this, _bitLength)[_bitLength] = bitLength;
    (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(this, _isSigned)[_isSigned] = isSigned;
    const isPositive = this.gte(_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.BN_ZERO);
    const maxBits = bitLength - (isSigned && isPositive ? 1 : 0);
    (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.assert)(isSigned || isPositive, () => `${this.toRawType()}: Negative number passed to unsigned type`);
    (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.assert)(super.bitLength() <= maxBits, () => `${this.toRawType()}: Input too large. Found input with ${super.bitLength()} bits, expected ${maxBits}`);
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */


  get encodedLength() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(this, _bitLength)[_bitLength] / 8;
  }
  /**
   * @description returns a hash of the contents
   */


  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description Checks if the value is a zero value (align elsewhere)
   */


  get isEmpty() {
    return this.isZero();
  }
  /**
   * @description Checks if the value is an unsigned type
   */


  get isUnsigned() {
    return !(0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(this, _isSigned)[_isSigned];
  }
  /**
   * @description Returns the number of bits in the value
   */


  bitLength() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(this, _bitLength)[_bitLength];
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any


  eq(other) {
    // Here we are actually overriding the built-in .eq to take care of both
    // number and BN inputs (no `.eqn` needed) - numbers will be converted
    return super.eq((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.isHex)(other) ? (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.hexToBn)(other.toString(), {
      isLe: false,
      isNegative: (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(this, _isSigned)[_isSigned]
    }) : (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.bnToBn)(other));
  }
  /**
   * @description True if this value is the max of the type
   */


  isMax() {
    const u8a = this.toU8a().filter(b => b === 0xff);
    return u8a.length === (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(this, _bitLength)[_bitLength] / 8;
  }
  /**
   * @description Returns a BigInt representation of the number
   */


  toBigInt() {
    return BigInt(this.toString());
  }
  /**
   * @description Returns the BN representation of the number. (Compatibility)
   */


  toBn() {
    return this;
  }
  /**
   * @description Returns a hex string representation of the value
   */


  toHex(isLe = false) {
    // For display/JSON, this is BE, for compare, use isLe
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.bnToHex)(this, {
      bitLength: this.bitLength(),
      isLe,
      isNegative: !this.isUnsigned
    });
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  toHuman(isExpanded) {
    const rawType = this.toRawType();

    if (rawType === 'Balance') {
      return this.isMax() ? 'everything' // FIXME In the case of multiples we need some way of detecting which instance this belongs
      // to. as it stands we will always format (incorrectly) against the first token defined
      : (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.formatBalance)(this, {
        decimals: this.registry.chainDecimals[0],
        withSi: true,
        withUnit: this.registry.chainTokens[0]
      });
    }

    const [, divisor] = FORMATTERS.find(([type]) => type === rawType) || [];
    return divisor ? toPercentage(this, divisor) : (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.formatNumber)(this);
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */


  toJSON(onlyHex = false) {
    // FIXME this return type should by string | number, however BN returns string
    // Options here are
    //   - super.bitLength() - the actual used bits
    //   - this.#bitLength - the type bits (this should be used, however contracts RPC is problematic)
    return onlyHex || super.bitLength() > MAX_NUMBER_BITS ? this.toHex() : this.toNumber();
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    // NOTE In the case of balances, which have a special meaning on the UI
    // and can be interpreted differently, return a specific value for it so
    // underlying it always matches (no matter which length it actually is)
    return this instanceof this.registry.createClass('Balance') ? 'Balance' : `${this.isUnsigned ? 'u' : 'i'}${this.bitLength()}`;
  }
  /**
   * @description Returns the string representation of the value
   * @param base The base to use for the conversion
   */


  toString(base) {
    // only included here since we do not inherit docs
    return super.toString(base);
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  toU8a(isBare) {
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.bnToU8a)(this, {
      bitLength: this.bitLength(),
      isLe: true,
      isNegative: !this.isUnsigned
    });
  }

}

/***/ }),

/***/ 11562:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ BTreeMap)
/* harmony export */ });
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45356);
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

class BTreeMap extends _Map_js__WEBPACK_IMPORTED_MODULE_0__/* .CodecMap */ .U {
  static with(keyType, valType) {
    return class extends BTreeMap {
      constructor(registry, value) {
        super(registry, keyType, valType, value, 'BTreeMap');
      }

    };
  }

}

/***/ }),

/***/ 40778:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ BTreeSet)
});

// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase.js
var classPrivateFieldLooseBase = __webpack_require__(89539);
// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey.js
var classPrivateFieldLooseKey = __webpack_require__(38879);
// EXTERNAL MODULE: consume shared module (default) @polkadot/util@^6.7.1 (strict) (fallback: ../../node_modules/@polkadot/util/index.js)
var index_js_ = __webpack_require__(13948);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/codec/utils/compareSet.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0


function compareSetArray(a, b) {
  // equal number of entries and each entry in the array should match
  return a.size === b.length && !b.some(entry => !a.has(entry));
} // NOTE These are used internally and when comparing objects, expects that
// when the second is an Set<string, Codec> that the first has to be as well


function compareSet(a, b) {
  if (Array.isArray(b)) {
    return compareSetArray(a, b);
  } else if (b instanceof Set) {
    return compareSetArray(a, [...b.values()]);
  } else if ((0,index_js_.isObject)(b)) {
    return compareSetArray(a, Object.values(b));
  }

  return false;
}
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/codec/utils/decodeU8a.js
var decodeU8a = __webpack_require__(58872);
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/codec/utils/typeToConstructor.js
var typeToConstructor = __webpack_require__(84981);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/codec/BTreeSet.js


// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0


const l = (0,index_js_.logger)('BTreeSet');
/** @internal */

function decodeSetFromU8a(registry, ValClass, u8a) {
  const output = new Set();
  const [offset, length] = (0,index_js_.compactFromU8a)(u8a);
  const types = [];

  for (let i = 0; i < length.toNumber(); i++) {
    types.push(ValClass);
  }

  const values = (0,decodeU8a/* decodeU8a */.Y)(registry, u8a.subarray(offset), types);

  for (let i = 0; i < values.length; i++) {
    output.add(values[i]);
  }

  return output;
}
/** @internal */


function decodeSetFromSet(registry, ValClass, value) {
  const output = new Set();
  value.forEach(val => {
    try {
      output.add(val instanceof ValClass ? val : new ValClass(registry, val));
    } catch (error) {
      l.error('Failed to decode key or value:', error.message);
      throw error;
    }
  });
  return output;
}
/**
 * Decode input to pass into constructor.
 *
 * @param ValClass - Type of the map value
 * @param value - Value to decode, one of:
 * - null
 * - undefined
 * - hex
 * - Uint8Array
 * - Set<any>, where both key and value types are either
 *   constructors or decodeable values for their types.
 * @param jsonSet
 * @internal
 */


function decodeSet(registry, valType, value) {
  if (!value) {
    return new Set();
  }

  const ValClass = (0,typeToConstructor/* typeToConstructor */.r)(registry, valType);

  if ((0,index_js_.isHex)(value) || (0,index_js_.isU8a)(value)) {
    return decodeSetFromU8a(registry, ValClass, (0,index_js_.u8aToU8a)(value));
  } else if (Array.isArray(value) || value instanceof Set) {
    return decodeSetFromSet(registry, ValClass, value);
  }

  throw new Error('BTreeSet: cannot decode type');
}

var _ValClass = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("ValClass");

class BTreeSet extends Set {
  constructor(registry, valType, rawValue) {
    super(decodeSet(registry, valType, rawValue));
    this.registry = void 0;
    this.createdAtHash = void 0;
    Object.defineProperty(this, _ValClass, {
      writable: true,
      value: void 0
    });
    this.registry = registry;
    (0,classPrivateFieldLooseBase/* default */.Z)(this, _ValClass)[_ValClass] = (0,typeToConstructor/* typeToConstructor */.r)(registry, valType);
  }

  static with(valType) {
    return class extends BTreeSet {
      constructor(registry, value) {
        super(registry, valType, value);
      }

    };
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */


  get encodedLength() {
    let len = (0,index_js_.compactToU8a)(this.size).length;
    this.forEach(v => {
      len += v.encodedLength;
    });
    return len;
  }
  /**
   * @description Returns a hash of the value
   */


  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description Checks if the value is an empty value
   */


  get isEmpty() {
    return this.size === 0;
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */


  eq(other) {
    return compareSet(this, other);
  }
  /**
   * @description Returns a hex string representation of the value. isLe returns a LE (number-only) representation
   */


  toHex() {
    return (0,index_js_.u8aToHex)(this.toU8a());
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */


  toHuman(isExtended) {
    const json = [];
    this.forEach(v => {
      json.push(v.toHuman(isExtended));
    });
    return json;
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */


  toJSON() {
    const json = [];
    this.forEach(v => {
      json.push(v.toJSON());
    });
    return json;
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return `BTreeSet<${this.registry.getClassName((0,classPrivateFieldLooseBase/* default */.Z)(this, _ValClass)[_ValClass]) || new ((0,classPrivateFieldLooseBase/* default */.Z)(this, _ValClass)[_ValClass])(this.registry).toRawType()}>`;
  }
  /**
   * @description Returns the string representation of the value
   */


  toString() {
    return (0,index_js_.stringify)(this.toJSON());
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */


  toU8a(isBare) {
    const encoded = new Array();

    if (!isBare) {
      encoded.push((0,index_js_.compactToU8a)(this.size));
    }

    this.forEach(v => {
      encoded.push(v.toU8a(isBare));
    });
    return (0,index_js_.u8aConcat)(...encoded);
  }

}

/***/ }),

/***/ 22153:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ Compact)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89539);
/* harmony import */ var _babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38879);
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13948);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84981);


// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0


/**
 * @name Compact
 * @description
 * A compact length-encoding codec wrapper. It performs the same function as Length, however
 * differs in that it uses a variable number of bytes to do the actual encoding. This is mostly
 * used by other types to add length-prefixed encoding, or in the case of wrapped types, taking
 * a number and making the compact representation thereof
 */

var _Type = /*#__PURE__*/(0,_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)("Type");

var _raw = /*#__PURE__*/(0,_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)("raw");

class Compact {
  constructor(registry, Type, value = 0) {
    this.registry = void 0;
    this.createdAtHash = void 0;
    Object.defineProperty(this, _Type, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _raw, {
      writable: true,
      value: void 0
    });
    this.registry = registry;
    (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(this, _Type)[_Type] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__/* .typeToConstructor */ .r)(registry, Type);
    (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(this, _raw)[_raw] = Compact.decodeCompact(registry, (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(this, _Type)[_Type], value);
  }

  static with(Type) {
    return class extends Compact {
      constructor(registry, value) {
        super(registry, Type, value);
      }

    };
  }
  /** @internal */


  static decodeCompact(registry, Type, value) {
    if (value instanceof Compact) {
      return new Type(registry, (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(value, _raw)[_raw]);
    } else if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isString)(value) || (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value) || (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isBn)(value) || (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isBigInt)(value)) {
      return new Type(registry, value);
    }

    return new Type(registry, (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.compactFromU8a)(value)[1]);
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */


  get encodedLength() {
    return this.toU8a().length;
  }
  /**
   * @description returns a hash of the contents
   */


  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description Checks if the value is an empty value
   */


  get isEmpty() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(this, _raw)[_raw].isEmpty;
  }
  /**
   * @description Returns the number of bits in the value
   */


  bitLength() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(this, _raw)[_raw].bitLength();
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */


  eq(other) {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(this, _raw)[_raw].eq(other instanceof Compact ? (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(other, _raw)[_raw] : other);
  }
  /**
   * @description Returns a BigInt representation of the number
   */


  toBigInt() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(this, _raw)[_raw].toBigInt();
  }
  /**
   * @description Returns the BN representation of the number
   */


  toBn() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(this, _raw)[_raw].toBn();
  }
  /**
   * @description Returns a hex string representation of the value. isLe returns a LE (number-only) representation
   */


  toHex(isLe) {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(this, _raw)[_raw].toHex(isLe);
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */


  toHuman(isExtended) {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(this, _raw)[_raw].toHuman(isExtended);
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */


  toJSON() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(this, _raw)[_raw].toJSON();
  }
  /**
   * @description Returns the number representation for the value
   */


  toNumber() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(this, _raw)[_raw].toNumber();
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return `Compact<${this.registry.getClassName((0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(this, _Type)[_Type]) || (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(this, _raw)[_raw].toRawType()}>`;
  }
  /**
   * @description Returns the string representation of the value
   */


  toString() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(this, _raw)[_raw].toString();
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  toU8a(isBare) {
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.compactToU8a)((0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(this, _raw)[_raw].toBn());
  }
  /**
   * @description Returns the embedded [[UInt]] or [[Moment]] value
   */


  unwrap() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(this, _raw)[_raw];
  }

}

/***/ }),

/***/ 72179:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ Enum)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89539);
/* harmony import */ var _babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38879);
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13948);
/* harmony import */ var _primitive_Null_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47261);
/* harmony import */ var _Struct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48991);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62121);


// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0



 // export interface, this is used in Enum.with, so required as public by TS

function isRustEnum(def) {
  const defValues = Object.values(def);

  if (defValues.some(v => (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isNumber)(v))) {
    (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.assert)(defValues.every(v => (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isNumber)(v) && v >= 0 && v <= 255), 'Invalid number-indexed enum definition');
    return false;
  }

  return true;
}

function extractDef(registry, _def) {
  if (Array.isArray(_def)) {
    return {
      def: _def.reduce((def, key, index) => {
        def[key] = {
          Type: _primitive_Null_js__WEBPACK_IMPORTED_MODULE_1__/* .Null */ .p,
          index
        };
        return def;
      }, {}),
      isBasic: true,
      isIndexed: false
    };
  }

  let isBasic;
  let isIndexed;
  let def;

  if (isRustEnum(_def)) {
    def = Object.entries((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__/* .mapToTypeMap */ .y)(registry, _def)).reduce((def, [key, Type], index) => {
      def[key] = {
        Type,
        index
      };
      return def;
    }, {});
    isBasic = !Object.values(def).some(({
      Type
    }) => Type !== _primitive_Null_js__WEBPACK_IMPORTED_MODULE_1__/* .Null */ .p);
    isIndexed = false;
  } else {
    def = Object.entries(_def).reduce((def, [key, index]) => {
      def[key] = {
        Type: _primitive_Null_js__WEBPACK_IMPORTED_MODULE_1__/* .Null */ .p,
        index
      };
      return def;
    }, {});
    isBasic = true;
    isIndexed = true;
  }

  return {
    def,
    isBasic,
    isIndexed
  };
}

function createFromValue(registry, def, index = 0, value) {
  const entry = Object.values(def).find(e => e.index === index);
  (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.assert)(!(0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(entry), () => `Unable to create Enum via index ${index}, in ${Object.keys(def).join(', ')}`);
  return {
    index,
    value: value instanceof entry.Type ? value : new entry.Type(registry, value)
  };
}

function decodeFromJSON(registry, def, key, value) {
  // JSON comes in the form of { "<type (camelCase)>": "<value for type>" }, here we
  // additionally force to lower to ensure forward compat
  const keys = Object.keys(def).map(k => k.toLowerCase());
  const keyLower = key.toLowerCase();
  const index = keys.indexOf(keyLower);
  (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.assert)(index !== -1, () => `Cannot map Enum JSON, unable to find '${key}' in ${keys.join(', ')}`);

  try {
    return createFromValue(registry, def, Object.values(def)[index].index, value);
  } catch (error) {
    throw new Error(`Enum(${key}):: ${error.message}`);
  }
}

function decodeFromString(registry, def, value) {
  return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isHex)(value) // eslint-disable-next-line @typescript-eslint/no-use-before-define
  ? decodeFromValue(registry, def, (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.hexToU8a)(value)) : decodeFromJSON(registry, def, value);
}

function decodeFromValue(registry, def, value) {
  if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isU8a)(value)) {
    // nested, we don't want to match isObject below
    if (value.length) {
      return createFromValue(registry, def, value[0], value.subarray(1));
    }
  } else if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value)) {
    return createFromValue(registry, def, value);
  } else if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isString)(value)) {
    return decodeFromString(registry, def, value.toString());
  } else if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(value)) {
    const key = Object.keys(value)[0];
    return decodeFromJSON(registry, def, key, value[key]);
  } // Worst-case scenario, return the first with default


  return createFromValue(registry, def, Object.values(def)[0].index);
}

function decodeEnum(registry, def, value, index) {
  // NOTE We check the index path first, before looking at values - this allows treating
  // the optional indexes before anything else, more-specific > less-specific
  if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isNumber)(index)) {
    return createFromValue(registry, def, index, value); // eslint-disable-next-line @typescript-eslint/no-use-before-define
  } else if (value instanceof Enum) {
    return createFromValue(registry, def, value.index, value.value);
  }

  return decodeFromValue(registry, def, value);
}
/**
 * @name Enum
 * @description
 * This implements an enum, that based on the value wraps a different type. It is effectively
 * an extension to enum where the value type is determined by the actual index.
 */
// TODO:
//   - As per Enum, actually use TS enum
//   - It should rather probably extend Enum instead of copying code


var _def2 = /*#__PURE__*/(0,_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)("def");

var _entryIndex = /*#__PURE__*/(0,_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)("entryIndex");

var _indexes = /*#__PURE__*/(0,_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)("indexes");

var _isBasic = /*#__PURE__*/(0,_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)("isBasic");

var _isIndexed = /*#__PURE__*/(0,_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)("isIndexed");

var _raw = /*#__PURE__*/(0,_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)("raw");

class Enum {
  constructor(registry, def, value, index) {
    this.registry = void 0;
    this.createdAtHash = void 0;
    Object.defineProperty(this, _def2, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _entryIndex, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _indexes, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _isBasic, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _isIndexed, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _raw, {
      writable: true,
      value: void 0
    });
    const defInfo = extractDef(registry, def);
    const decoded = decodeEnum(registry, defInfo.def, value, index);
    this.registry = registry;
    (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _def2)[_def2] = defInfo.def;
    (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _isBasic)[_isBasic] = defInfo.isBasic;
    (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _isIndexed)[_isIndexed] = defInfo.isIndexed;
    (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _indexes)[_indexes] = Object.values(defInfo.def).map(({
      index
    }) => index);
    (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _entryIndex)[_entryIndex] = (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _indexes)[_indexes].indexOf(decoded.index) || 0;
    (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _raw)[_raw] = decoded.value;
  }

  static with(Types) {
    return class extends Enum {
      constructor(registry, value, index) {
        super(registry, Types, value, index);
        Object.keys((0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _def2)[_def2]).forEach(_key => {
          const name = (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.stringUpperFirst)((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.stringCamelCase)(_key.replace(' ', '_')));
          const askey = `as${name}`;
          const iskey = `is${name}`;
          (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(this[iskey]) && Object.defineProperty(this, iskey, {
            enumerable: true,
            get: () => this.type === _key
          });
          (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(this[askey]) && Object.defineProperty(this, askey, {
            enumerable: true,
            get: () => {
              (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.assert)(this[iskey], () => `Cannot convert '${this.type}' via ${askey}`);
              return this.value;
            }
          });
        });
      }

    };
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */


  get encodedLength() {
    return 1 + (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _raw)[_raw].encodedLength;
  }
  /**
   * @description returns a hash of the contents
   */


  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description The index of the enum value
   */


  get index() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _indexes)[_indexes][(0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _entryIndex)[_entryIndex]];
  }
  /**
   * @description true if this is a basic enum (no values)
   */


  get isBasic() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _isBasic)[_isBasic];
  }
  /**
   * @description Checks if the value is an empty value
   */


  get isEmpty() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _raw)[_raw].isEmpty;
  }
  /**
   * @description Checks if the Enum points to a [[Null]] type
   */


  get isNone() {
    return this.isNull;
  }
  /**
   * @description Checks if the Enum points to a [[Null]] type (deprecated, use isNone)
   */


  get isNull() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _raw)[_raw] instanceof _primitive_Null_js__WEBPACK_IMPORTED_MODULE_1__/* .Null */ .p;
  }
  /**
   * @description The available keys for this enum
   */


  get defIndexes() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _indexes)[_indexes];
  }
  /**
   * @description The available keys for this enum
   */


  get defKeys() {
    return Object.keys((0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _def2)[_def2]);
  }
  /**
   * @description The name of the type this enum value represents
   */


  get type() {
    return this.defKeys[(0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _entryIndex)[_entryIndex]];
  }
  /**
   * @description The value of the enum
   */


  get value() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _raw)[_raw];
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */


  eq(other) {
    // cater for the case where we only pass the enum index
    if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isNumber)(other)) {
      return this.toNumber() === other;
    } else if ((0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _isBasic)[_isBasic] && (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isString)(other)) {
      return this.type === other;
    } else if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isU8a)(other)) {
      return !this.toU8a().some((entry, index) => entry !== other[index]);
    } else if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isHex)(other)) {
      return this.toHex() === other;
    } else if (other instanceof Enum) {
      return this.index === other.index && this.value.eq(other.value);
    } else if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(other)) {
      return this.value.eq(other[this.type]);
    } // compare the actual wrapper value


    return this.value.eq(other);
  }
  /**
   * @description Returns a hex string representation of the value
   */


  toHex() {
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aToHex)(this.toU8a());
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */


  toHuman(isExtended) {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _isBasic)[_isBasic] ? this.type : {
      [this.type]: (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _raw)[_raw].toHuman(isExtended)
    };
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */


  toJSON() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _isBasic)[_isBasic] ? this.type : {
      [(0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.stringCamelCase)(this.type)]: (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _raw)[_raw].toJSON()
    };
  }
  /**
   * @description Returns the number representation for the value
   */


  toNumber() {
    return this.index;
  }
  /**
   * @description Returns a raw struct representation of the enum types
   */


  _toRawStruct() {
    if ((0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _isBasic)[_isBasic]) {
      return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _isIndexed)[_isIndexed] ? this.defKeys.reduce((out, key, index) => {
        out[key] = (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _indexes)[_indexes][index];
        return out;
      }, {}) : this.defKeys;
    }

    const typeMap = Object.entries((0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _def2)[_def2]).reduce((out, [key, {
      Type
    }]) => {
      out[key] = Type;
      return out;
    }, {});
    return _Struct_js__WEBPACK_IMPORTED_MODULE_5__/* .Struct.typesToMap */ .A.typesToMap(this.registry, typeMap);
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.stringify)({
      _enum: this._toRawStruct()
    });
  }
  /**
   * @description Returns the string representation of the value
   */


  toString() {
    return this.isNull ? this.type : (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.stringify)(this.toJSON());
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */


  toU8a(isBare) {
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aConcat)(new Uint8Array(isBare ? [] : [this.index]), (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _raw)[_raw].toU8a(isBare));
  }

}

/***/ }),

/***/ 44380:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ HashMap)
/* harmony export */ });
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45356);
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

class HashMap extends _Map_js__WEBPACK_IMPORTED_MODULE_0__/* .CodecMap */ .U {
  static with(keyType, valType) {
    return class extends HashMap {
      constructor(registry, value) {
        super(registry, keyType, valType, value);
      }

    };
  }

}

/***/ }),

/***/ 11226:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ Int)
/* harmony export */ });
/* harmony import */ var _AbstractInt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6435);
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name Int
 * @description
 * A generic signed integer codec. For Substrate all numbers are Little Endian encoded,
 * this handles the encoding and decoding of those numbers. Upon construction
 * the bitLength is provided and any additional use keeps the number to this
 * length. This extends `BN`, so all methods available on a normal `BN` object
 * is available here.
 * @noInheritDoc
 */

class Int extends _AbstractInt_js__WEBPACK_IMPORTED_MODULE_0__/* .AbstractInt */ .y {
  constructor(registry, value = 0, bitLength) {
    super(registry, value, bitLength, true);
  }

  static with(bitLength, typeName) {
    return class extends Int {
      constructor(registry, value) {
        super(registry, value, bitLength);
      }

      toRawType() {
        return typeName || super.toRawType();
      }

    };
  }

}

/***/ }),

/***/ 42709:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ Json)
/* harmony export */ });
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13948);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87143);
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0


/** @internal */

function decodeJson(value) {
  return Object.entries(value || {});
}
/**
 * @name Json
 * @description
 * Wraps the a JSON structure retrieve via RPC. It extends the standard JS Map with. While it
 * implements a Codec, it is limited in that it can only be used with input objects via RPC,
 * i.e. no hex decoding. Unlike a struct, this waps a JSON object with unknown keys
 * @noInheritDoc
 */


class Json extends Map {
  constructor(registry, value) {
    const decoded = decodeJson(value);
    super(decoded);
    this.registry = void 0;
    this.createdAtHash = void 0;
    this.registry = registry;
    decoded.forEach(([key]) => {
      (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(this[key]) && Object.defineProperty(this, key, {
        enumerable: true,
        get: () => this.get(key)
      });
    });
  }
  /**
   * @description Always 0, never encodes as a Uint8Array
   */


  get encodedLength() {
    return 0;
  }
  /**
   * @description returns a hash of the contents
   */


  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description Checks if the value is an empty value
   */


  get isEmpty() {
    return [...this.keys()].length === 0;
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */


  eq(other) {
    return (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__/* .compareMap */ .t)(this, other);
  }
  /**
   * @description Unimplemented, will throw
   */


  toHex() {
    throw new Error('Unimplemented');
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */


  toHuman() {
    return [...this.entries()].reduce((json, [key, value]) => {
      json[key] = (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.toHuman) ? value.toHuman() : value;
      return json;
    }, {});
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */


  toJSON() {
    return [...this.entries()].reduce((json, [key, value]) => {
      json[key] = value;
      return json;
    }, {});
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return 'Json';
  }
  /**
   * @description Returns the string representation of the value
   */


  toString() {
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.stringify)(this.toJSON());
  }
  /**
   * @description Unimplemented, will throw
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  toU8a(isBare) {
    throw new Error('Unimplemented');
  }

}

/***/ }),

/***/ 45356:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ CodecMap)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89539);
/* harmony import */ var _babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38879);
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13948);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58872);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84981);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87143);


// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0


const l = (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.logger)('Map');
/** @internal */

function decodeMapFromU8a(registry, KeyClass, ValClass, u8a) {
  const output = new Map();
  const [offset, length] = (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.compactFromU8a)(u8a);
  const types = [];

  for (let i = 0; i < length.toNumber(); i++) {
    types.push(KeyClass, ValClass);
  }

  const values = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__/* .decodeU8a */ .Y)(registry, u8a.subarray(offset), types);

  for (let i = 0; i < values.length; i += 2) {
    output.set(values[i], values[i + 1]);
  }

  return output;
}
/** @internal */


function decodeMapFromMap(registry, KeyClass, ValClass, value) {
  const output = new Map();
  value.forEach((val, key) => {
    try {
      output.set(key instanceof KeyClass ? key : new KeyClass(registry, key), val instanceof ValClass ? val : new ValClass(registry, val));
    } catch (error) {
      l.error('Failed to decode key or value:', error.message);
      throw error;
    }
  });
  return output;
}
/**
 * Decode input to pass into constructor.
 *
 * @param KeyClass - Type of the map key
 * @param ValClass - Type of the map value
 * @param value - Value to decode, one of:
 * - null
 * - undefined
 * - hex
 * - Uint8Array
 * - Map<any, any>, where both key and value types are either
 *   constructors or decodeable values for their types.
 * @param jsonMap
 * @internal
 */


function decodeMap(registry, keyType, valType, value) {
  const KeyClass = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__/* .typeToConstructor */ .r)(registry, keyType);
  const ValClass = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__/* .typeToConstructor */ .r)(registry, valType);

  if (!value) {
    return new Map();
  } else if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isU8a)(value) || (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isHex)(value)) {
    return decodeMapFromU8a(registry, KeyClass, ValClass, (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aToU8a)(value));
  } else if (value instanceof Map) {
    return decodeMapFromMap(registry, KeyClass, ValClass, value);
  } else if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(value)) {
    return decodeMapFromMap(registry, KeyClass, ValClass, new Map(Object.entries(value)));
  }

  throw new Error('Map: cannot decode type');
}

var _KeyClass = /*#__PURE__*/(0,_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)("KeyClass");

var _ValClass = /*#__PURE__*/(0,_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)("ValClass");

var _type = /*#__PURE__*/(0,_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)("type");

class CodecMap extends Map {
  constructor(registry, keyType, valType, rawValue, type = 'HashMap') {
    super(decodeMap(registry, keyType, valType, rawValue));
    this.registry = void 0;
    this.createdAtHash = void 0;
    Object.defineProperty(this, _KeyClass, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _ValClass, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _type, {
      writable: true,
      value: void 0
    });
    this.registry = registry;
    (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _KeyClass)[_KeyClass] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__/* .typeToConstructor */ .r)(registry, keyType);
    (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _ValClass)[_ValClass] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__/* .typeToConstructor */ .r)(registry, valType);
    (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _type)[_type] = type;
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */


  get encodedLength() {
    let len = (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.compactToU8a)(this.size).length;
    this.forEach((v, k) => {
      len += v.encodedLength + k.encodedLength;
    });
    return len;
  }
  /**
   * @description Returns a hash of the value
   */


  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description Checks if the value is an empty value
   */


  get isEmpty() {
    return this.size === 0;
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */


  eq(other) {
    return (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_5__/* .compareMap */ .t)(this, other);
  }
  /**
   * @description Returns a hex string representation of the value. isLe returns a LE (number-only) representation
   */


  toHex() {
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aToHex)(this.toU8a());
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */


  toHuman(isExtended) {
    const json = {};
    this.forEach((v, k) => {
      json[k.toString()] = v.toHuman(isExtended);
    });
    return json;
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */


  toJSON() {
    const json = {};
    this.forEach((v, k) => {
      json[k.toString()] = v.toJSON();
    });
    return json;
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return `${(0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _type)[_type]}<${this.registry.getClassName((0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _KeyClass)[_KeyClass]) || new ((0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _KeyClass)[_KeyClass])(this.registry).toRawType()},${this.registry.getClassName((0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _ValClass)[_ValClass]) || new ((0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _ValClass)[_ValClass])(this.registry).toRawType()}>`;
  }
  /**
   * @description Returns the string representation of the value
   */


  toString() {
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.stringify)(this.toJSON());
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */


  toU8a(isBare) {
    const encoded = new Array();

    if (!isBare) {
      encoded.push((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.compactToU8a)(this.size));
    }

    this.forEach((v, k) => {
      encoded.push(k.toU8a(isBare), v.toU8a(isBare));
    });
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aConcat)(...encoded);
  }

}

/***/ }),

/***/ 30805:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Option)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89539);
/* harmony import */ var _babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38879);
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13948);
/* harmony import */ var _primitive_Null_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47261);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84981);


// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0



/** @internal */

function decodeOptionU8a(registry, Type, value) {
  return !value.length || value[0] === 0 ? new _primitive_Null_js__WEBPACK_IMPORTED_MODULE_1__/* .Null */ .p(registry) : new Type(registry, value.subarray(1));
}
/** @internal */


function decodeOption(registry, typeName, value) {
  if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isNull)(value) || (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(value) || value instanceof _primitive_Null_js__WEBPACK_IMPORTED_MODULE_1__/* .Null */ .p) {
    return new _primitive_Null_js__WEBPACK_IMPORTED_MODULE_1__/* .Null */ .p(registry);
  }

  const Type = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__/* .typeToConstructor */ .r)(registry, typeName); // eslint-disable-next-line @typescript-eslint/no-use-before-define

  if (value instanceof Option) {
    return decodeOption(registry, Type, value.value);
  } else if (value instanceof Type) {
    // don't re-create, use as it (which also caters for derived types)
    return value;
  } else if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isU8a)(value)) {
    // the isU8a check happens last in the if-tree - since the wrapped value
    // may be an instance of it, so Type and Option checks go in first
    return decodeOptionU8a(registry, Type, value);
  }

  return new Type(registry, value);
}
/**
 * @name Option
 * @description
 * An Option is an optional field. Basically the first byte indicates that there is
 * is value to follow. If the byte is `1` there is an actual value. So the Option
 * implements that - decodes, checks for optionality and wraps the required structure
 * with a value if/as required/found.
 */


var _Type = /*#__PURE__*/(0,_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)("Type");

var _raw = /*#__PURE__*/(0,_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)("raw");

class Option {
  constructor(registry, typeName, value) {
    this.registry = void 0;
    this.createdAtHash = void 0;
    Object.defineProperty(this, _Type, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _raw, {
      writable: true,
      value: void 0
    });
    this.registry = registry;
    (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _Type)[_Type] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__/* .typeToConstructor */ .r)(registry, typeName);
    (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _raw)[_raw] = decodeOption(registry, typeName, value);
  }

  static with(Type) {
    return class extends Option {
      constructor(registry, value) {
        super(registry, Type, value);
      }

    };
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */


  get encodedLength() {
    // boolean byte (has value, doesn't have) along with wrapped length
    return 1 + (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _raw)[_raw].encodedLength;
  }
  /**
   * @description returns a hash of the contents
   */


  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description Checks if the Option has no value
   */


  get isEmpty() {
    return this.isNone;
  }
  /**
   * @description Checks if the Option has no value
   */


  get isNone() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _raw)[_raw] instanceof _primitive_Null_js__WEBPACK_IMPORTED_MODULE_1__/* .Null */ .p;
  }
  /**
   * @description Checks if the Option has a value
   */


  get isSome() {
    return !this.isNone;
  }
  /**
   * @description The actual value for the Option
   */


  get value() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _raw)[_raw];
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */


  eq(other) {
    if (other instanceof Option) {
      return this.isSome === other.isSome && this.value.eq(other.value);
    }

    return this.value.eq(other);
  }
  /**
   * @description Returns a hex string representation of the value
   */


  toHex() {
    // This attempts to align with the JSON encoding - actually in this case
    // the isSome value is correct, however the `isNone` may be problematic
    return this.isNone ? '0x' : (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aToHex)(this.toU8a().subarray(1));
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */


  toHuman(isExtended) {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _raw)[_raw].toHuman(isExtended);
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */


  toJSON() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _raw)[_raw].toJSON();
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType(isBare) {
    const wrapped = this.registry.getClassName((0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _Type)[_Type]) || new ((0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _Type)[_Type])(this.registry).toRawType();
    return isBare ? wrapped : `Option<${wrapped}>`;
  }
  /**
   * @description Returns the string representation of the value
   */


  toString() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _raw)[_raw].toString();
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */


  toU8a(isBare) {
    if (isBare) {
      return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _raw)[_raw].toU8a(true);
    }

    const u8a = new Uint8Array(this.encodedLength);

    if (this.isSome) {
      u8a.set([1]);
      u8a.set((0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _raw)[_raw].toU8a(), 1);
    }

    return u8a;
  }
  /**
   * @description Returns the value that the Option represents (if available), throws if null
   */


  unwrap() {
    (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.assert)(this.isSome, 'Option: unwrapping a None value');
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _raw)[_raw];
  }
  /**
   * @description Returns the value that the Option represents (if available) or defaultValue if none
   * @param defaultValue The value to return if the option isNone
   */


  unwrapOr(defaultValue) {
    return this.isSome ? this.unwrap() : defaultValue;
  }
  /**
   * @description Returns the value that the Option represents (if available) or defaultValue if none
   * @param defaultValue The value to return if the option isNone
   */


  unwrapOrDefault() {
    return this.isSome ? this.unwrap() : new ((0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _Type)[_Type])(this.registry);
  }

}

/***/ }),

/***/ 90094:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ Raw)
/* harmony export */ });
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13948);
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name Raw
 * @description
 * A basic wrapper around Uint8Array, with no frills and no fuss. It does differ
 * from other implementations where it will consume the full Uint8Array as passed to it.
 * As such it is meant to be subclassed where the wrapper takes care of the
 * actual lengths instead of used directly.
 * @noInheritDoc
 */

class Raw extends Uint8Array {
  constructor(registry, value) {
    super((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aToU8a)(value));
    this.registry = void 0;
    this.createdAtHash = void 0;
    this.registry = registry;
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */


  get encodedLength() {
    return this.length;
  }
  /**
   * @description returns a hash of the contents
   */


  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description Returns true if the wrapped value contains only ASCII printable characters
   */


  get isAscii() {
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isAscii)(this);
  }
  /**
   * @description Returns true if the type wraps an empty/default all-0 value
   */


  get isEmpty() {
    return !this.length || (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(this.find(value => !!value));
  }
  /**
   * @description Returns true if the wrapped value contains only utf8 characters
   */


  get isUtf8() {
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isUtf8)(this);
  }
  /**
   * @description The length of the value
   */


  get length() {
    // only included here since we ignore inherited docs
    return super.length;
  }
  /**
   * @description Returns the number of bits in the value
   */


  bitLength() {
    return this.length * 8;
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */


  eq(other) {
    if (other instanceof Uint8Array) {
      return this.length === other.length && !this.some((value, index) => value !== other[index]);
    }

    return this.eq((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aToU8a)(other));
  }
  /**
   * @description Create a new slice from the actual buffer. (compat)
   * @param start The position to start at
   * @param end The position to end at
   */


  slice(start, end) {
    // Like subarray below, we have to follow this approach since we are extending the TypeArray.
    // This happens especially when it comes to further extensions, the length may be an override
    return Uint8Array.from(this).slice(start, end);
  }
  /**
   * @description Create a new subarray from the actual buffer. (compat)
   * @param begin The position to start at
   * @param end The position to end at
   */


  subarray(begin, end) {
    return Uint8Array.from(this).subarray(begin, end);
  }
  /**
   * @description Returns a hex string representation of the value
   */


  toHex() {
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aToHex)(this);
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */


  toHuman() {
    return this.isAscii ? this.toUtf8() : this.toJSON();
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */


  toJSON() {
    return this.toHex();
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return 'Raw';
  }
  /**
   * @description Returns the string representation of the value
   */


  toString() {
    return this.toHex();
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  toU8a(isBare) {
    return Uint8Array.from(this);
  }
  /**
   * @description Returns the wrapped data as a UTF-8 string
   */


  toUtf8() {
    (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.assert)(this.isUtf8, 'The character sequence is not a valid Utf8 string');
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aToString)(this);
  }

}

/***/ }),

/***/ 45298:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ Result)
/* harmony export */ });
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13948);
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72179);
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0


/**
 * @name Result
 * @description
 * A Result maps to the Rust Result type, that can either wrap a success or error value
 */

class Result extends _Enum_js__WEBPACK_IMPORTED_MODULE_1__/* .Enum */ .x {
  constructor(registry, Ok, Err, value) {
    // NOTE This is order-dependent, Ok (with index 0) needs to be first
    // eslint-disable-next-line sort-keys
    super(registry, {
      Ok,
      Err
    }, value);
  }

  static with(Types) {
    return class extends Result {
      constructor(registry, value) {
        super(registry, Types.Ok, Types.Err, value);
      }

    };
  }
  /**
   * @description Returns the wrapper Err value (if isErr)
   */


  get asErr() {
    (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.assert)(this.isErr, 'Cannot extract Err value from Ok result, check isErr first');
    return this.value;
  }
  /**
   * @deprecated Use asErr
   */


  get asError() {
    return this.asErr;
  }
  /**
   * @description Returns the wrapper Ok value (if isOk)
   */


  get asOk() {
    (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.assert)(this.isOk, 'Cannot extract Ok value from Err result, check isOk first');
    return this.value;
  }
  /**
   * @description Checks if the Result has no value
   */


  get isEmpty() {
    return this.isOk && this.value.isEmpty;
  }
  /**
   * @description Checks if the Result wraps an Err value
   */


  get isErr() {
    return !this.isOk;
  }
  /**
   * @deprecated Use isErr
   */


  get isError() {
    return this.isErr;
  }
  /**
   * @description Checks if the Result wraps an Ok value
   */


  get isOk() {
    return this.index === 0;
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    const Types = this._toRawStruct();

    return `Result<${Types.Ok},${Types.Err}>`;
  }

}

/***/ }),

/***/ 21012:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ CodecSet)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89539);
/* harmony import */ var _babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38879);
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62197);
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13948);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67365);


// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0




function encodeSet(setValues, value) {
  return value.reduce((result, value) => {
    return result.or((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.bnToBn)(setValues[value] || 0));
  }, new bn_js__WEBPACK_IMPORTED_MODULE_0__(0));
}
/** @internal */


function decodeSetArray(setValues, value) {
  return value.reduce((result, key) => {
    (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.assert)(!(0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(setValues[key]), () => `Set: Invalid key '${key}' passed to Set, allowed ${Object.keys(setValues).join(', ')}`);
    result.push(key);
    return result;
  }, []);
}
/** @internal */


function decodeSetNumber(setValues, _value) {
  const bn = (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.bnToBn)(_value);
  const result = Object.keys(setValues).reduce((result, key) => {
    if (bn.and((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.bnToBn)(setValues[key])).eq((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.bnToBn)(setValues[key]))) {
      result.push(key);
    }

    return result;
  }, []);
  const computed = encodeSet(setValues, result);
  (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.assert)(bn.eq(computed), () => `Set: Mismatch decoding '${bn.toString()}', computed as '${computed.toString()}' with ${result.join(', ')}`);
  return result;
}
/** @internal */


function decodeSet(setValues, value = 0, bitLength) {
  (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.assert)(bitLength % 8 === 0, () => `Expected valid bitLength, power of 8, found ${bitLength}`);
  const byteLength = bitLength / 8;

  if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.isString)(value)) {
    return decodeSet(setValues, (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.u8aToU8a)(value), byteLength);
  } else if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.isU8a)(value)) {
    return value.length === 0 ? [] : decodeSetNumber(setValues, (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.u8aToBn)(value.subarray(0, byteLength), {
      isLe: true
    }));
  } else if (value instanceof Set || Array.isArray(value)) {
    const input = Array.isArray(value) ? value : [...value.values()];
    return decodeSetArray(setValues, input);
  }

  return decodeSetNumber(setValues, value);
}
/**
 * @name Set
 * @description
 * An Set is an array of string values, represented an an encoded type by
 * a bitwise representation of the values.
 */
// FIXME This is a prime candidate to extend the JavaScript built-in Set


var _allowed = /*#__PURE__*/(0,_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)("allowed");

var _byteLength = /*#__PURE__*/(0,_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)("byteLength");

class CodecSet extends Set {
  constructor(registry, setValues, value, bitLength = 8) {
    super(decodeSet(setValues, value, bitLength));
    this.registry = void 0;
    this.createdAtHash = void 0;
    Object.defineProperty(this, _allowed, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _byteLength, {
      writable: true,
      value: void 0
    });

    this.add = key => {
      // ^^^ add = () property done to assign this instance's this, otherwise Set.add creates "some" chaos
      // we have the isUndefined(this._setValues) in here as well, add is used internally
      // in the Set constructor (so it is undefined at this point, and should allow)
      (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.assert)((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.isUndefined)((0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(this, _allowed)[_allowed]) || !(0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.isUndefined)((0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(this, _allowed)[_allowed][key]), () => `Set: Invalid key '${key}' on add`);
      super.add(key);
      return this;
    };

    this.registry = registry;
    (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(this, _allowed)[_allowed] = setValues;
    (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(this, _byteLength)[_byteLength] = bitLength / 8;
  }

  static with(values, bitLength) {
    return class extends CodecSet {
      constructor(registry, value) {
        super(registry, values, value, bitLength);
        Object.keys(values).forEach(_key => {
          const name = (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.stringUpperFirst)((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.stringCamelCase)(_key));
          const iskey = `is${name}`;
          (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(this[iskey]) && Object.defineProperty(this, iskey, {
            enumerable: true,
            get: () => this.strings.includes(_key)
          });
        });
      }

    };
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */


  get encodedLength() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(this, _byteLength)[_byteLength];
  }
  /**
   * @description returns a hash of the contents
   */


  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description true is the Set contains no values
   */


  get isEmpty() {
    return this.size === 0;
  }
  /**
   * @description The actual set values as a string[]
   */


  get strings() {
    return [...super.values()];
  }
  /**
   * @description The encoded value for the set members
   */


  get valueEncoded() {
    return encodeSet((0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(this, _allowed)[_allowed], this.strings);
  }
  /**
   * @description adds a value to the Set (extended to allow for validity checking)
   */


  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq(other) {
    if (Array.isArray(other)) {
      // we don't actually care about the order, sort the values
      return (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__/* .compareArray */ .w)(this.strings.sort(), other.sort());
    } else if (other instanceof Set) {
      return this.eq([...other.values()]);
    } else if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.isNumber)(other) || (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.isBn)(other)) {
      return this.valueEncoded.eq((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.bnToBn)(other));
    }

    return false;
  }
  /**
   * @description Returns a hex string representation of the value
   */


  toHex() {
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.u8aToHex)(this.toU8a());
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */


  toHuman() {
    return this.toJSON();
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */


  toJSON() {
    return this.strings;
  }
  /**
   * @description The encoded value for the set members
   */


  toNumber() {
    return this.valueEncoded.toNumber();
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.stringify)({
      _set: (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(this, _allowed)[_allowed]
    });
  }
  /**
   * @description Returns the string representation of the value
   */


  toString() {
    return `[${this.strings.join(', ')}]`;
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  toU8a(isBare) {
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.bnToU8a)(this.valueEncoded, {
      bitLength: (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(this, _byteLength)[_byteLength] * 8,
      isLe: true
    });
  }

}

/***/ }),

/***/ 48991:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Struct)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89539);
/* harmony import */ var _babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38879);
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13948);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58872);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62121);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87143);


// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0



/** @internal */
function decodeStructFromObject(registry, Types, value, jsonMap) {
  let jsonObj;
  const inputKeys = Object.keys(Types);
  (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.assert)(!Array.isArray(value) || value.length === inputKeys.length, () => `Struct: Unable to map ${(0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.stringify)(value)} array to object with known keys ${inputKeys.join(', ')}`);
  return inputKeys.reduce((raw, key, index) => {
    // The key in the JSON can be snake_case (or other cases), but in our
    // Types, result or any other maps, it's camelCase
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const jsonKey = jsonMap.get(key) && !value[key] ? jsonMap.get(key) : key;

    try {
      if (Array.isArray(value)) {
        // TS2322: Type 'Codec' is not assignable to type 'T[keyof S]'.
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
        raw[key] = value[index] instanceof Types[key] ? value[index] : new Types[key](registry, value[index]);
      } else if (value instanceof Map) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const mapped = value.get(jsonKey); // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

        raw[key] = mapped instanceof Types[key] ? mapped : new Types[key](registry, mapped);
      } else if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(value)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        let assign = value[jsonKey];

        if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(assign)) {
          if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(jsonObj)) {
            jsonObj = Object.entries(value).reduce((all, [key, value]) => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              all[(0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.stringCamelCase)(key)] = value;
              return all;
            }, {});
          } // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment


          assign = jsonObj[jsonKey];
        } // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access


        raw[key] = assign instanceof Types[key] ? assign : new Types[key](registry, assign);
      } else {
        throw new Error(`Cannot decode value ${(0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.stringify)(value)} (typeof ${typeof value}), expected an input object with known keys`);
      }
    } catch (error) {
      let type = Types[key].name;

      try {
        type = new Types[key](registry).toRawType();
      } catch (error) {// ignore
      }

      throw new Error(`Struct: failed on ${jsonKey}: ${type}:: ${error.message}`);
    }

    return raw;
  }, {});
}
/**
 * Decode input to pass into constructor.
 *
 * @param Types - Types definition.
 * @param value - Value to decode, one of:
 * - null
 * - undefined
 * - hex
 * - Uint8Array
 * - object with `{ key1: value1, key2: value2 }`, assuming `key1` and `key2`
 * are also keys in `Types`
 * - array with `[value1, value2]` assuming the array has the same length as
 * `Object.keys(Types)`
 * @param jsonMap
 * @internal
 */


function decodeStruct(registry, Types, value, jsonMap) {
  if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isHex)(value)) {
    return decodeStruct(registry, Types, (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.hexToU8a)(value.toString()), jsonMap);
  } else if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isU8a)(value)) {
    const keys = Object.keys(Types);
    const values = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__/* .decodeU8a */ .Y)(registry, value, Object.values(Types), keys); // Transform array of values to {key: value} mapping

    return keys.reduce((raw, key, index) => {
      // TS2322: Type 'Codec' is not assignable to type 'T[keyof S]'.
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      raw[key] = values[index];
      return raw;
    }, {});
  } else if (!value) {
    return {};
  } // We assume from here that value is a JS object (Array, Map, Object)


  return decodeStructFromObject(registry, Types, value, jsonMap);
}
/**
 * @name Struct
 * @description
 * A Struct defines an Object with key-value pairs - where the values are Codec values. It removes
 * a lot of repetition from the actual coding, define a structure type, pass it the key/Codec
 * values in the constructor and it manages the decoding. It is important that the constructor
 * values matches 100% to the order in th Rust code, i.e. don't go crazy and make it alphabetical,
 * it needs to decoded in the specific defined order.
 * @noInheritDoc
 */


var _jsonMap = /*#__PURE__*/(0,_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)("jsonMap");

var _Types = /*#__PURE__*/(0,_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)("Types");

class Struct extends Map {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  constructor(registry, Types, value = {}, jsonMap = new Map()) {
    super(Object.entries(decodeStruct(registry, (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__/* .mapToTypeMap */ .y)(registry, Types), value, jsonMap)));
    this.registry = void 0;
    this.createdAtHash = void 0;
    Object.defineProperty(this, _jsonMap, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _Types, {
      writable: true,
      value: void 0
    });
    this.registry = registry;
    (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _jsonMap)[_jsonMap] = jsonMap;
    (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _Types)[_Types] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__/* .mapToTypeMap */ .y)(registry, Types);
  }

  static with(Types, jsonMap) {
    return class extends Struct {
      constructor(registry, value) {
        super(registry, Types, value, jsonMap);
        Object.keys(Types).forEach(key => {
          (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(this[key]) && Object.defineProperty(this, key, {
            enumerable: true,
            get: () => this.get(key)
          });
        });
      }

    };
  }

  static typesToMap(registry, Types) {
    return Object.entries(Types).reduce((result, [key, Type]) => {
      result[key] = registry.getClassName(Type) || new Type(registry).toRawType();
      return result;
    }, {});
  }
  /**
   * @description The available keys for this enum
   */


  get defKeys() {
    return Object.keys((0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _Types)[_Types]);
  }
  /**
   * @description Checks if the value is an empty value
   */


  get isEmpty() {
    const items = this.toArray();

    for (let i = 0; i < items.length; i++) {
      if (!items[i].isEmpty) {
        return false;
      }
    }

    return true;
  }
  /**
   * @description Returns the Type description to sthe structure
   */


  get Type() {
    return Object.entries((0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _Types)[_Types]).reduce((result, [key, Type]) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      result[key] = new Type(this.registry).toRawType();
      return result;
    }, {});
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */


  get encodedLength() {
    return this.toArray().reduce((length, entry) => {
      length += entry.encodedLength;
      return length;
    }, 0);
  }
  /**
   * @description returns a hash of the contents
   */


  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */


  eq(other) {
    return (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_5__/* .compareMap */ .t)(this, other);
  }
  /**
   * @description Returns a specific names entry in the structure
   * @param name The name of the entry to retrieve
   */


  get(name) {
    return super.get(name);
  }
  /**
   * @description Returns the values of a member at a specific index (Rather use get(name) for performance)
   */


  getAtIndex(index) {
    return this.toArray()[index];
  }
  /**
   * @description Converts the Object to an standard JavaScript Array
   */


  toArray() {
    return [...this.values()];
  }
  /**
   * @description Returns a hex string representation of the value
   */


  toHex() {
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aToHex)(this.toU8a());
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */


  toHuman(isExtended) {
    return [...this.keys()].reduce((json, key) => {
      const value = this.get(key);
      json[key] = value && value.toHuman(isExtended);
      return json;
    }, {});
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */


  toJSON() {
    return [...this.keys()].reduce((json, key) => {
      const jsonKey = (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _jsonMap)[_jsonMap].get(key) || key;
      const value = this.get(key);
      json[jsonKey] = value && value.toJSON();
      return json;
    }, {});
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.stringify)(Struct.typesToMap(this.registry, (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(this, _Types)[_Types]));
  }
  /**
   * @description Returns the string representation of the value
   */


  toString() {
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.stringify)(this.toJSON());
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */


  toU8a(isBare) {
    // we have keyof S here, cast to string to make it compatible with isBare
    const entries = [...this.entries()];
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aConcat)(...entries // eslint-disable-next-line @typescript-eslint/unbound-method
    .filter(([, value]) => (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value === null || value === void 0 ? void 0 : value.toU8a)).map(([key, value]) => value.toU8a(!isBare || (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(isBare) ? isBare : isBare[key])));
  }

}

/***/ }),

/***/ 39751:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ Tuple)
/* harmony export */ });
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13948);
/* harmony import */ var _AbstractArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46227);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58872);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84981);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62121);
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0




/** @internal */
function decodeTuple(registry, _Types, value) {
  if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isU8a)(value) || (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isHex)(value)) {
    return (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__/* .decodeU8a */ .Y)(registry, (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aToU8a)(value), _Types);
  }

  const Types = Array.isArray(_Types) ? _Types : Object.values(_Types);
  return Types.map((Type, index) => {
    try {
      const entry = value === null || value === void 0 ? void 0 : value[index];

      if (entry instanceof Type) {
        return entry;
      }

      return new Type(registry, entry);
    } catch (error) {
      throw new Error(`Tuple: failed on ${index}:: ${error.message}`);
    }
  });
}
/**
 * @name Tuple
 * @description
 * A Tuple defines an anonymous fixed-length array, where each element has its
 * own type. It extends the base JS `Array` object.
 */


class Tuple extends _AbstractArray_js__WEBPACK_IMPORTED_MODULE_2__/* .AbstractArray */ .r {
  constructor(registry, Types, value) {
    const Clazzes = Array.isArray(Types) ? Types.map(type => (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__/* .typeToConstructor */ .r)(registry, type)) : (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__/* .mapToTypeMap */ .y)(registry, Types);
    super(registry, ...decodeTuple(registry, Clazzes, value));
    this._Types = void 0;
    this._Types = Clazzes;
  }

  static with(Types) {
    return class extends Tuple {
      constructor(registry, value) {
        super(registry, Types, value);
      }

    };
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */


  get encodedLength() {
    return this.reduce((total, entry) => total + entry.encodedLength, 0);
  }
  /**
   * @description The types definition of the tuple
   */


  get Types() {
    return Array.isArray(this._Types) ? this._Types.map(Type => new Type(this.registry).toRawType()) : Object.keys(this._Types);
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    const types = (Array.isArray(this._Types) ? this._Types : Object.values(this._Types)).map(Type => this.registry.getClassName(Type) || new Type(this.registry).toRawType());
    return `(${types.join(',')})`;
  }
  /**
   * @description Returns the string representation of the value
   */


  toString() {
    // Overwrite the default toString representation of Array.
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.stringify)(this.toJSON());
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */


  toU8a(isBare) {
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aConcat)(...this.map(entry => entry.toU8a(isBare)));
  }

}

/***/ }),

/***/ 8229:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ U8aFixed)
/* harmony export */ });
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13948);
/* harmony import */ var _Raw_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90094);
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0


/** @internal */

function decodeU8aFixed(value, bitLength) {
  if (Array.isArray(value) || (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isString)(value)) {
    return decodeU8aFixed((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aToU8a)(value), bitLength);
  } // ensure that we have an actual u8a with the full length as specified by
  // the bitLength input (padded with zeros as required)


  const byteLength = bitLength / 8;
  const sub = value.subarray(0, byteLength);

  if (sub.length === byteLength) {
    return sub;
  }

  const u8a = new Uint8Array(byteLength);
  u8a.set(sub, 0);
  return u8a;
}
/**
 * @name U8aFixed
 * @description
 * A U8a that manages a a sequence of bytes up to the specified bitLength. Not meant
 * to be used directly, rather is should be subclassed with the specific lengths.
 */


class U8aFixed extends _Raw_js__WEBPACK_IMPORTED_MODULE_1__/* .Raw */ .N {
  constructor(registry, value = new Uint8Array(), bitLength = 256) {
    super(registry, decodeU8aFixed(value, bitLength));
  }

  static with(bitLength, typeName) {
    return class extends U8aFixed {
      constructor(registry, value) {
        super(registry, value, bitLength);
      }

      toRawType() {
        return typeName || super.toRawType();
      }

    };
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return `[u8;${this.length}]`;
  }

}

/***/ }),

/***/ 14552:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ UInt)
/* harmony export */ });
/* harmony import */ var _AbstractInt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6435);
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name UInt
 * @description
 * A generic unsigned integer codec. For Substrate all numbers are Little Endian encoded,
 * this handles the encoding and decoding of those numbers. Upon construction
 * the bitLength is provided and any additional use keeps the number to this
 * length. This extends `BN`, so all methods available on a normal `BN` object
 * is available here.
 * @noInheritDoc
 */

class UInt extends _AbstractInt_js__WEBPACK_IMPORTED_MODULE_0__/* .AbstractInt */ .y {
  static with(bitLength, typeName) {
    return class extends UInt {
      constructor(registry, value) {
        super(registry, value, bitLength);
      }

      toRawType() {
        return typeName || super.toRawType();
      }

    };
  }

}

/***/ }),

/***/ 25297:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ Vec)
/* harmony export */ });
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13948);
/* harmony import */ var _AbstractArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46227);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84981);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58872);
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0



const MAX_LENGTH = 64 * 1024;
const l = (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.logger)('Vec');
/**
 * @name Vec
 * @description
 * This manages codec arrays. Internally it keeps track of the length (as decoded) and allows
 * construction with the passed `Type` in the constructor. It is an extension to Array, providing
 * specific encoding/decoding on top of the base type.
 */

class Vec extends _AbstractArray_js__WEBPACK_IMPORTED_MODULE_1__/* .AbstractArray */ .r {
  constructor(registry, Type, value = []) {
    const Clazz = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__/* .typeToConstructor */ .r)(registry, Type);
    super(registry, ...Vec.decodeVec(registry, Clazz, value));
    this._Type = void 0;
    this._Type = Clazz;
  }
  /** @internal */


  static decodeVec(registry, Type, value) {
    if (Array.isArray(value)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return value.map((entry, index) => {
        try {
          return entry instanceof Type ? entry : new Type(registry, entry);
        } catch (error) {
          l.error(`Unable to decode on index ${index}`, error.message);
          throw error;
        }
      });
    }

    const u8a = (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aToU8a)(value);
    const [offset, length] = (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.compactFromU8a)(u8a);
    (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.assert)(length.lten(MAX_LENGTH), () => `Vec length ${length.toString()} exceeds ${MAX_LENGTH}`);
    return (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__/* .decodeU8a */ .Y)(registry, u8a.subarray(offset), new Array(length.toNumber()).fill(Type));
  }

  static with(Type) {
    return class extends Vec {
      constructor(registry, value) {
        super(registry, Type, value);
      }

    };
  }
  /**
   * @description The type for the items
   */


  get Type() {
    return this._Type.name;
  }
  /**
   * @description Finds the index of the value in the array
   */


  indexOf(_other) {
    // convert type first, this removes overhead from the eq
    const other = _other instanceof this._Type ? _other : new this._Type(this.registry, _other);

    for (let i = 0; i < this.length; i++) {
      if (other.eq(this[i])) {
        return i;
      }
    }

    return -1;
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return `Vec<${this.registry.getClassName(this._Type) || new this._Type(this.registry).toRawType()}>`;
  }

}

/***/ }),

/***/ 61118:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ VecFixed)
/* harmony export */ });
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13948);
/* harmony import */ var _AbstractArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46227);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84981);
/* harmony import */ var _Vec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25297);
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0




/** @internal */

function decodeVecFixed(registry, Type, allocLength, value) {
  const values = _Vec_js__WEBPACK_IMPORTED_MODULE_1__/* .Vec.decodeVec */ .B.decodeVec(registry, Type, (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isU8a)(value) || (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isHex)(value) ? (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aConcat)((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.compactToU8a)(allocLength), value) : value);

  while (values.length < allocLength) {
    values.push(new Type(registry));
  }

  (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.assert)(values.length === allocLength, () => `Expected a length of exactly ${allocLength} entries`);
  return values;
}
/**
 * @name VecFixed
 * @description
 * This manages codec arrays of a fixed length
 */


class VecFixed extends _AbstractArray_js__WEBPACK_IMPORTED_MODULE_2__/* .AbstractArray */ .r {
  constructor(registry, Type, length, value = []) {
    const Clazz = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__/* .typeToConstructor */ .r)(registry, Type);
    super(registry, ...decodeVecFixed(registry, Clazz, length, value));
    this._Type = void 0;
    this._Type = Clazz;
  }

  static with(Type, length) {
    return class extends VecFixed {
      constructor(registry, value) {
        super(registry, Type, length, value);
      }

    };
  }
  /**
   * @description The type for the items
   */


  get Type() {
    return new this._Type(this.registry).toRawType();
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */


  get encodedLength() {
    return this.reduce((total, entry) => total + entry.encodedLength, 0);
  }

  toU8a() {
    // we override, we don't add the length prefix for ourselves, and at the same time we
    // ignore isBare on entries, since they should be properly encoded at all times
    const encoded = this.map(entry => entry.toU8a());
    return encoded.length ? (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aConcat)(...encoded) : new Uint8Array([]);
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return `[${this.Type};${this.length}]`;
  }

}

/***/ }),

/***/ 67365:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ compareArray)
/* harmony export */ });
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13948);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8144);
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

 // NOTE These are used internally and when comparing objects, expects that
// when the second is an Codec[] that the first has to be as well

function compareArray(a, b) {
  if (Array.isArray(b)) {
    return a.length === b.length && (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(a.find((value, index) => (0,_util_js__WEBPACK_IMPORTED_MODULE_1__/* .hasEq */ .q)(value) ? !value.eq(b[index]) : value !== b[index]));
  }

  return false;
}

/***/ }),

/***/ 87143:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ compareMap)
/* harmony export */ });
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13948);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8144);
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0



function hasMismatch(a, b) {
  return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(a) || ((0,_util_js__WEBPACK_IMPORTED_MODULE_1__/* .hasEq */ .q)(a) ? !a.eq(b) : a !== b);
}

function notEntry(value) {
  return !Array.isArray(value) || value.length !== 2;
}

function compareMapArray(a, b) {
  // equal number of entries and each entry in the array should match
  return a.size === b.length && !b.some(entry => notEntry(entry) || hasMismatch(a.get(entry[0]), entry[1]));
} // NOTE These are used internally and when comparing objects, expects that
// when the second is an Map<string, Codec> that the first has to be as well


function compareMap(a, b) {
  if (Array.isArray(b)) {
    return compareMapArray(a, b);
  } else if (b instanceof Map) {
    return compareMapArray(a, [...b.entries()]);
  } else if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isObject)(b)) {
    return compareMapArray(a, Object.entries(b));
  }

  return false;
}

/***/ }),

/***/ 58872:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ decodeU8a)
/* harmony export */ });
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13948);
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * Given an u8a, and an array of Type constructors, decode the u8a against the
 * types, and return an array of decoded values.
 *
 * @param u8a - The u8a to decode.
 * @param types - The array of Constructor to decode the U8a against.
 */

function decodeU8a(registry, u8a, _types, _keys) {
  const [types, keys] = Array.isArray(_types) ? [_types, _keys || []] : [Object.values(_types), Object.keys(_types)];
  const result = [];
  let offset = 0;

  for (let i = 0; i < types.length; i++) {
    const Type = types[i];

    try {
      const value = new Type(registry, u8a.subarray(offset));
      result.push(value);
      offset += value.encodedLength;
    } catch (error) {
      let rawType;

      try {
        rawType = new Type(registry).toRawType();
      } catch {
        rawType = '';
      }

      throw new Error(`decodeU8a: failed at ${(0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aToHex)(u8a.subarray(offset).slice(0, 8))}… on ${keys[i] ? `${keys[i]}` : ''}${rawType ? `: ${rawType}` : ''}:: ${error.message}`);
    }
  }

  return result;
}

/***/ }),

/***/ 62121:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ mapToTypeMap)
/* harmony export */ });
/* harmony import */ var _typeToConstructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84981);
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @description takes an input map of the form `{ [string]: string | Constructor }` and returns a map of `{ [string]: Constructor }`
 */

function mapToTypeMap(registry, input) {
  return Object.entries(input).reduce((output, [key, type]) => {
    output[key] = (0,_typeToConstructor_js__WEBPACK_IMPORTED_MODULE_0__/* .typeToConstructor */ .r)(registry, type);
    return output;
  }, {});
}

/***/ }),

/***/ 84981:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ typeToConstructor)
/* harmony export */ });
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13948);
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

function typeToConstructor(registry, type) {
  return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isString)(type) ? registry.createClass(type) : type;
}

/***/ }),

/***/ 8144:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ hasEq)
/* harmony export */ });
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13948);
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

function hasEq(o) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isFunction)(o.eq);
}

/***/ }),

/***/ 78698:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qH": () => (/* binding */ createClass),
/* harmony export */   "Ai": () => (/* binding */ ClassOfUnsafe),
/* harmony export */   "OR": () => (/* binding */ ClassOf),
/* harmony export */   "S_": () => (/* binding */ getTypeClass)
/* harmony export */ });
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13948);
/* harmony import */ var _codec_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11562);
/* harmony import */ var _codec_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40778);
/* harmony import */ var _codec_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22153);
/* harmony import */ var _codec_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72179);
/* harmony import */ var _codec_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44380);
/* harmony import */ var _codec_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11226);
/* harmony import */ var _codec_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48991);
/* harmony import */ var _codec_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(30805);
/* harmony import */ var _codec_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45298);
/* harmony import */ var _codec_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(21012);
/* harmony import */ var _codec_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(39751);
/* harmony import */ var _codec_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(14552);
/* harmony import */ var _codec_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(25297);
/* harmony import */ var _codec_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8229);
/* harmony import */ var _codec_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(61118);
/* harmony import */ var _primitive_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92327);
/* harmony import */ var _getTypeDef_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53284);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77847);
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0





function createClass(registry, type) {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return getTypeClass(registry, (0,_getTypeDef_js__WEBPACK_IMPORTED_MODULE_1__/* .getTypeDef */ .s)(type));
} // An unsafe version of the `createType` below. It's unsafe because the `type`
// argument here can be any string, which, if it cannot be parsed, it will yield
// a runtime error.

function ClassOfUnsafe(registry, name) {
  return createClass(registry, name);
} // alias for createClass

function ClassOf(registry, name) {
  // TS2589: Type instantiation is excessively deep and possibly infinite.
  // The above happens with as Constructor<InterfaceTypes[K]>;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return ClassOfUnsafe(registry, name);
}

function getSubDefArray(value) {
  (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.assert)(value.sub && Array.isArray(value.sub), () => `Expected subtype as TypeDef[] in ${(0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.stringify)(value)}`);
  return value.sub;
}

function getSubDef(value) {
  (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.assert)(value.sub && !Array.isArray(value.sub), () => `Expected subtype as TypeDef in ${(0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.stringify)(value)}`);
  return value.sub;
}

function getSubType(value) {
  return getSubDef(value).type;
} // create a maps of type string constructors from the input


function getTypeClassMap(value) {
  const result = {};
  return getSubDefArray(value).reduce((result, sub) => {
    result[sub.name] = sub.type;
    return result;
  }, result);
} // create an array of type string constructors from the input


function getTypeClassArray(value) {
  return getSubDefArray(value).map(({
    type
  }) => type);
}

function createInt({
  displayName,
  length
}, Clazz) {
  (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.assert)((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isNumber)(length), () => `Expected bitLength information for ${displayName || Clazz.constructor.name}<bitLength>`);
  return Clazz.with(length, displayName);
}

function createHashMap(value, Clazz) {
  const [keyType, valueType] = getTypeClassArray(value);
  return Clazz.with(keyType, valueType);
}

const infoMapping = {
  [_types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.BTreeMap */ .u.BTreeMap]: (registry, value) => createHashMap(value, _codec_index_js__WEBPACK_IMPORTED_MODULE_3__/* .BTreeMap */ .P),
  [_types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.BTreeSet */ .u.BTreeSet]: (registry, value) => _codec_index_js__WEBPACK_IMPORTED_MODULE_4__/* .BTreeSet.with */ .Z.with(getSubType(value)),
  [_types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.Compact */ .u.Compact]: (registry, value) => _codec_index_js__WEBPACK_IMPORTED_MODULE_5__/* .Compact.with */ .D.with(getSubType(value)),
  [_types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.DoNotConstruct */ .u.DoNotConstruct]: (registry, value) => _primitive_index_js__WEBPACK_IMPORTED_MODULE_6__/* .DoNotConstruct.with */ .w.with(value.displayName),
  [_types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.Enum */ .u.Enum]: (registry, value) => {
    const subs = getSubDefArray(value);
    return _codec_index_js__WEBPACK_IMPORTED_MODULE_7__/* .Enum.with */ .x.with(subs.every(({
      type
    }) => type === 'Null') ? subs.reduce((out, {
      index,
      name
    }, count) => {
      out[name] = index || count;
      return out;
    }, {}) : getTypeClassMap(value));
  },
  [_types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.HashMap */ .u.HashMap]: (registry, value) => createHashMap(value, _codec_index_js__WEBPACK_IMPORTED_MODULE_8__/* .HashMap */ .z),
  [_types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.Int */ .u.Int]: (registry, value) => createInt(value, _codec_index_js__WEBPACK_IMPORTED_MODULE_9__/* .Int */ .J),
  // We have circular deps between Linkage & Struct
  [_types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.Linkage */ .u.Linkage]: (registry, value) => {
    const type = `Option<${getSubType(value)}>`; // eslint-disable-next-line sort-keys

    const Clazz = _codec_index_js__WEBPACK_IMPORTED_MODULE_10__/* .Struct.with */ .A.with({
      previous: type,
      next: type
    }); // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

    Clazz.prototype.toRawType = function () {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
      return `Linkage<${this.next.toRawType(true)}>`;
    };

    return Clazz;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [_types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.Null */ .u.Null]: (registry, _) => createClass(registry, 'Null'),
  [_types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.Option */ .u.Option]: (registry, value) => _codec_index_js__WEBPACK_IMPORTED_MODULE_11__/* .Option.with */ .W.with(getSubType(value)),
  [_types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.Plain */ .u.Plain]: (registry, value) => registry.getOrUnknown(value.type),
  [_types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.Result */ .u.Result]: (registry, value) => {
    const [Ok, Err] = getTypeClassArray(value); // eslint-disable-next-line @typescript-eslint/no-use-before-define

    return _codec_index_js__WEBPACK_IMPORTED_MODULE_12__/* .Result.with */ .x.with({
      Err,
      Ok
    });
  },
  [_types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.Set */ .u.Set]: (registry, value) => {
    const result = {};
    return _codec_index_js__WEBPACK_IMPORTED_MODULE_13__/* .CodecSet.with */ .p.with(getSubDefArray(value).reduce((result, {
      index,
      name
    }) => {
      result[name] = index;
      return result;
    }, result), value.length);
  },
  [_types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.Struct */ .u.Struct]: (registry, value) => _codec_index_js__WEBPACK_IMPORTED_MODULE_10__/* .Struct.with */ .A.with(getTypeClassMap(value), value.alias),
  [_types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.Tuple */ .u.Tuple]: (registry, value) => _codec_index_js__WEBPACK_IMPORTED_MODULE_14__/* .Tuple.with */ .p.with(getTypeClassArray(value)),
  [_types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.UInt */ .u.UInt]: (registry, value) => createInt(value, _codec_index_js__WEBPACK_IMPORTED_MODULE_15__/* .UInt */ .v),
  [_types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.Vec */ .u.Vec]: (registry, value) => {
    const subType = getSubType(value);
    return subType === 'u8' ? createClass(registry, 'Bytes') : _codec_index_js__WEBPACK_IMPORTED_MODULE_16__/* .Vec.with */ .B.with(subType);
  },
  [_types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.VecFixed */ .u.VecFixed]: (registry, {
    displayName,
    length,
    sub
  }) => {
    (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.assert)((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isNumber)(length) && !(0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(sub), 'Expected length & type information for fixed vector');
    return sub.type === 'u8' ? _codec_index_js__WEBPACK_IMPORTED_MODULE_17__/* .U8aFixed.with */ .g.with(length * 8, displayName) : _codec_index_js__WEBPACK_IMPORTED_MODULE_18__/* .VecFixed.with */ .$.with(sub.type, length);
  }
}; // Returns the type Class for construction

function getTypeClass(registry, value) {
  const Type = registry.get(value.type);

  if (Type) {
    return Type;
  }

  const getFn = infoMapping[value.info];
  (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.assert)(getFn, () => `Unable to construct class from ${(0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.stringify)(value)}`);
  return getFn(registry, value);
}

/***/ }),

/***/ 4779:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ createTypeUnsafe),
/* harmony export */   "Z": () => (/* binding */ createType)
/* harmony export */ });
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13948);
/* harmony import */ var _createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78698);
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0



// With isPedantic, actually check that the encoding matches that supplied. This
// is much slower, but verifies that we have the correct types defined
function checkInstance(value, created) {
  const u8a = created.toU8a();
  const rawType = created.toRawType();
  (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.assert)((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aEq)(value, u8a) || // when length-prefixed from hex, just check the actual length
  ['Bytes', 'Text', 'Type'].includes(rawType) && value.length === created.length, () => `${rawType}:: Decoded input doesn't match input, received ${(0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aToHex)(value, 512)} (${value.length} bytes), created ${(0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aToHex)(u8a, 512)} (${u8a.length} bytes)`);
} // Initializes a type with a value. This also checks for fallbacks and in the cases
// where isPedantic is specified (storage decoding), also check the format/structure


function initType(registry, Type, params = [], {
  blockHash,
  isPedantic
} = {}) {
  const created = new Type(registry, ...params);
  const value = params[0];

  if (isPedantic) {
    if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isU8a)(value)) {
      checkInstance(value, created);
    } else if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isHex)(value)) {
      checkInstance((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aToU8a)(value.toString()), created);
    }
  }

  if (blockHash) {
    created.createdAtHash = createType(registry, 'Hash', blockHash);
  }

  return created;
} // An unsafe version of the `createType` below. It's unsafe because the `type`
// argument here can be any string, which, when it cannot parse, will yield a
// runtime error.


function createTypeUnsafe(registry, type, params = [], options = {}) {
  try {
    return initType(registry, (0,_createClass_js__WEBPACK_IMPORTED_MODULE_1__/* .createClass */ .qH)(registry, type), params, options);
  } catch (error) {
    throw new Error(`createType(${type}):: ${error.message}`);
  }
}
/**
 * Create an instance of a `type` with a given `params`.
 * @param type - A recognizable string representing the type to create an
 * instance from
 * @param params - The value to instantiate the type with
 */

function createType(registry, type, ...params) {
  return createTypeUnsafe(registry, type, params);
}

/***/ }),

/***/ 53284:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ getTypeDef)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51119);
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13948);
/* harmony import */ var _sanitize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89983);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77847);
/* harmony import */ var _typeSplit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69343);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0




const MAX_NESTED = 64;

function isRustEnum(details) {
  const values = Object.values(details);

  if (values.some(v => (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.isNumber)(v))) {
    (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.assert)(values.every(v => (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.isNumber)(v) && v >= 0 && v <= 255), 'Invalid number-indexed enum definition');
    return false;
  }

  return true;
} // decode an enum of either of the following forms
//  { _enum: ['A', 'B', 'C'] }
//  { _enum: { A: AccountId, B: Balance, C: u32 } }
//  { _enum: { A: 1, B: 2 } }


function _decodeEnum(value, details, count) {
  value.info = _types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.Enum */ .u.Enum; // not as pretty, but remain compatible with oo7 for both struct and Array types

  if (Array.isArray(details)) {
    value.sub = details.map((name, index) => ({
      index,
      info: _types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.Plain */ .u.Plain,
      name,
      type: 'Null'
    }));
  } else if (isRustEnum(details)) {
    value.sub = Object.entries(details).map(([name, type], index) => _objectSpread(_objectSpread({}, getTypeDef(type || 'Null', {
      name
    }, count)), {}, {
      index
    }));
  } else {
    value.sub = Object.entries(details).map(([name, index]) => ({
      index,
      info: _types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.Plain */ .u.Plain,
      name,
      type: 'Null'
    }));
  }

  return value;
} // decode a set of the form
//   { _set: { A: 0b0001, B: 0b0010, C: 0b0100 } }


function _decodeSet(value, details) {
  value.info = _types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.Set */ .u.Set;
  value.length = details._bitLength;
  value.sub = Object.entries(details).filter(([name]) => !name.startsWith('_')).map(([name, index]) => ({
    index,
    info: _types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.Plain */ .u.Plain,
    name,
    type: name
  }));
  return value;
} // decode a struct, set or enum
// eslint-disable-next-line @typescript-eslint/no-unused-vars


function _decodeStruct(value, type, _, count) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const parsed = JSON.parse(type);
  const keys = Object.keys(parsed);

  if (keys.length === 1 && keys[0] === '_enum') {
    return _decodeEnum(value, parsed[keys[0]], count);
  } else if (keys.length === 1 && keys[0] === '_set') {
    return _decodeSet(value, parsed[keys[0]]);
  }

  value.alias = parsed._alias ? new Map(Object.entries(parsed._alias)) : undefined;
  value.sub = keys.filter(name => !['_alias'].includes(name)).map(name => // eslint-disable-next-line @typescript-eslint/no-use-before-define
  getTypeDef(parsed[name], {
    name
  }, count));
  return value;
} // decode a fixed vector, e.g. [u8;32]
// eslint-disable-next-line @typescript-eslint/no-unused-vars


function _decodeFixedVec(value, type, _, count) {
  const [vecType, strLength, displayName] = type.substr(1, type.length - 2).split(';');
  const length = parseInt(strLength.trim(), 10); // as a first round, only u8 via u8aFixed, we can add more support

  (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.assert)(length <= 256, () => `${type}: Only support for [Type; <length>], where length <= 256`);
  value.displayName = displayName;
  value.length = length; // eslint-disable-next-line @typescript-eslint/no-use-before-define

  value.sub = getTypeDef(vecType, {}, count);
  return value;
} // decode a tuple


function _decodeTuple(value, _, subType, count) {
  value.sub = subType.length === 0 ? [] // eslint-disable-next-line @typescript-eslint/no-use-before-define
  : (0,_typeSplit_js__WEBPACK_IMPORTED_MODULE_3__/* .typeSplit */ .h)(subType).map(inner => getTypeDef(inner, {}, count));
  return value;
} // decode a Int/UInt<bitLength[, name]>
// eslint-disable-next-line @typescript-eslint/no-unused-vars


function _decodeAnyInt(value, type, _, clazz) {
  const [strLength, displayName] = type.substr(clazz.length + 1, type.length - clazz.length - 1 - 1).split(',');
  const length = parseInt(strLength.trim(), 10); // as a first round, only u8 via u8aFixed, we can add more support

  (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.assert)(length <= 8192 && length % 8 === 0, () => `${type}: Only support for ${clazz}<bitLength>, where length <= 8192 and a power of 8, found ${length}`);
  value.displayName = displayName;
  value.length = length;
  return value;
}

function _decodeInt(value, type, subType) {
  return _decodeAnyInt(value, type, subType, 'Int');
}

function _decodeUInt(value, type, subType) {
  return _decodeAnyInt(value, type, subType, 'UInt');
} // eslint-disable-next-line @typescript-eslint/no-unused-vars


function _decodeDoNotConstruct(value, type, _) {
  const NAME_LENGTH = 'DoNotConstruct'.length;
  value.displayName = type.substr(NAME_LENGTH + 1, type.length - NAME_LENGTH - 1 - 1);
  return value;
}

function hasWrapper(type, [start, end]) {
  return type.substr(0, start.length) === start && type.substr(-1 * end.length) === end;
}

const nestedExtraction = [['[', ']', _types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.VecFixed */ .u.VecFixed, _decodeFixedVec], ['{', '}', _types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.Struct */ .u.Struct, _decodeStruct], ['(', ')', _types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.Tuple */ .u.Tuple, _decodeTuple], // the inner for these are the same as tuple, multiple values
['BTreeMap<', '>', _types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.BTreeMap */ .u.BTreeMap, _decodeTuple], ['HashMap<', '>', _types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.HashMap */ .u.HashMap, _decodeTuple], ['Int<', '>', _types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.Int */ .u.Int, _decodeInt], ['Result<', '>', _types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.Result */ .u.Result, _decodeTuple], ['UInt<', '>', _types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.UInt */ .u.UInt, _decodeUInt], ['DoNotConstruct<', '>', _types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.DoNotConstruct */ .u.DoNotConstruct, _decodeDoNotConstruct]];
const wrappedExtraction = [['BTreeSet<', '>', _types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.BTreeSet */ .u.BTreeSet], ['Compact<', '>', _types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.Compact */ .u.Compact], ['Linkage<', '>', _types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.Linkage */ .u.Linkage], ['Option<', '>', _types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.Option */ .u.Option], ['Vec<', '>', _types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.Vec */ .u.Vec]];

function extractSubType(type, [start, end]) {
  return type.substr(start.length, type.length - start.length - end.length);
} // eslint-disable-next-line @typescript-eslint/ban-types


function getTypeDef(_type, {
  displayName,
  name
} = {}, count = 0) {
  // create the type via Type, allowing types to be sanitized
  const type = (0,_sanitize_js__WEBPACK_IMPORTED_MODULE_4__/* .sanitize */ .Nw)(_type);
  const value = {
    displayName,
    info: _types_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeDefInfo.Plain */ .u.Plain,
    name,
    type
  };
  (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_1__.assert)(++count !== MAX_NESTED, 'getTypeDef: Maximum nested limit reached');
  const nested = nestedExtraction.find(nested => hasWrapper(type, nested));

  if (nested) {
    value.info = nested[2];
    return nested[3](value, type, extractSubType(type, nested), count);
  }

  const wrapped = wrappedExtraction.find(wrapped => hasWrapper(type, wrapped));

  if (wrapped) {
    value.info = wrapped[2];
    value.sub = getTypeDef(extractSubType(type, wrapped), {}, count);
  }

  return value;
}

/***/ }),

/***/ 67795:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* binding */ TypeRegistry)
});

// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(51119);
// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase.js
var classPrivateFieldLooseBase = __webpack_require__(89539);
// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey.js
var classPrivateFieldLooseKey = __webpack_require__(38879);
// EXTERNAL MODULE: ../../node_modules/@polkadot/metadata/decorate/extrinsics/index.js + 1 modules
var decorate_extrinsics = __webpack_require__(29592);
// EXTERNAL MODULE: ../../node_modules/@polkadot/metadata/decorate/constants/index.js
var decorate_constants = __webpack_require__(86600);
// EXTERNAL MODULE: ../../node_modules/@polkadot/metadata/Metadata.js + 12 modules
var Metadata = __webpack_require__(23594);
// EXTERNAL MODULE: consume shared module (default) @polkadot/util@^6.7.1 (strict) (fallback: ../../node_modules/@polkadot/util/index.js)
var index_js_ = __webpack_require__(13948);
// EXTERNAL MODULE: consume shared module (default) @polkadot/util-crypto@^6.7.1 (strict) (fallback: ../../node_modules/@polkadot/util-crypto/index.js)
var util_crypto_index_js_ = __webpack_require__(21050);
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/codec/Json.js
var Json = __webpack_require__(42709);
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/codec/Raw.js
var Raw = __webpack_require__(90094);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/extrinsic/signedExtensions/emptyCheck.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
const emptyCheck = {
  extrinsic: {},
  payload: {}
};
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/extrinsic/signedExtensions/polkadot.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

const polkadot = {
  LimitParathreadCommits: emptyCheck,
  OnlyStakingAndClaims: emptyCheck,
  PrevalidateAttests: emptyCheck,
  RestrictFunctionality: emptyCheck,
  TransactionCallFilter: emptyCheck,
  ValidateDoubleVoteReports: emptyCheck
};
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/extrinsic/signedExtensions/shell.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

const shell = {
  DisallowSigned: emptyCheck
};
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/extrinsic/signedExtensions/substrate.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

const CheckMortality = {
  extrinsic: {
    era: 'ExtrinsicEra'
  },
  payload: {
    blockHash: 'Hash'
  }
};
const substrate = {
  ChargeTransactionPayment: {
    extrinsic: {
      tip: 'Compact<Balance>'
    },
    payload: {}
  },
  CheckBlockGasLimit: emptyCheck,
  CheckEra: CheckMortality,
  CheckGenesis: {
    extrinsic: {},
    payload: {
      genesisHash: 'Hash'
    }
  },
  CheckMortality,
  CheckNonce: {
    extrinsic: {
      nonce: 'Compact<Index>'
    },
    payload: {}
  },
  CheckSpecVersion: {
    extrinsic: {},
    payload: {
      specVersion: 'u32'
    }
  },
  CheckTxVersion: {
    extrinsic: {},
    payload: {
      transactionVersion: 'u32'
    }
  },
  CheckVersion: {
    extrinsic: {},
    payload: {
      specVersion: 'u32'
    }
  },
  CheckWeight: emptyCheck,
  LockStakingStatus: emptyCheck,
  ValidateEquivocationReport: emptyCheck
};
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/extrinsic/signedExtensions/index.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0


 // A mapping of the known signed extensions to the extra fields that they contain. Unlike in the actual extensions,
// we define the extra fields not as a Tuple, but rather as a struct so they can be named. These will be expanded
// into the various fields when added to the payload (we only support V4 onwards with these, V3 and earlier are
// deemed fixed and non-changeable)

const allExtensions = _objectSpread(_objectSpread(_objectSpread({}, substrate), shell), polkadot); // the v4 signed extensions (the order is important here, as applied by default)


const defaultExtensions = ['CheckVersion', 'CheckGenesis', 'CheckEra', 'CheckNonce', 'CheckWeight', 'ChargeTransactionPayment', 'CheckBlockGasLimit'];

function findUnknownExtensions(extensions, userExtensions = {}) {
  const names = [...Object.keys(allExtensions), ...Object.keys(userExtensions)];
  return extensions.filter(key => !names.includes(key));
}

function expandExtensionTypes(extensions, type, userExtensions = {}) {
  return extensions // Always allow user extensions first - these should provide overrides
  .map(key => userExtensions[key] || allExtensions[key]).filter(info => !!info).reduce((result, info) => _objectSpread(_objectSpread({}, result), info[type]), {});
}


// EXTERNAL MODULE: ../../node_modules/@polkadot/types/generic/Event.js
var Event = __webpack_require__(55329);
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/index.types.js + 44 modules
var index_types = __webpack_require__(79625);
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/interfaces/definitions.js + 60 modules
var definitions = __webpack_require__(26248);
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/primitive/DoNotConstruct.js
var DoNotConstruct = __webpack_require__(92327);
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/create/createClass.js
var createClass = __webpack_require__(78698);
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/create/createType.js
var createType = __webpack_require__(4779);
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/create/getTypeDef.js
var getTypeDef = __webpack_require__(53284);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/create/registry.js




function registry_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function registry_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { registry_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { registry_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/no-var-requires */
// we are attempting to avoid circular refs, hence the Metadata path import














const l = (0,index_js_.logger)('registry'); // create error mapping from metadata

function injectErrors(_, metadata, metadataErrors) {
  const modules = metadata.asLatest.modules; // decorate the errors

  modules.forEach((section, _sectionIndex) => {
    const sectionIndex = metadata.version >= 12 ? section.index.toNumber() : _sectionIndex;
    const sectionName = (0,index_js_.stringCamelCase)(section.name);
    section.errors.forEach(({
      documentation,
      name
    }, index) => {
      const eventIndex = new Uint8Array([sectionIndex, index]);
      metadataErrors[(0,index_js_.u8aToHex)(eventIndex)] = {
        documentation: documentation.map(d => d.toString()),
        index,
        method: name.toString(),
        name: name.toString(),
        section: sectionName
      };
    });
  });
} // create event classes from metadata


function injectEvents(registry, metadata, metadataEvents) {
  const modules = metadata.asLatest.modules; // decorate the events

  modules.filter(({
    events
  }) => events.isSome).forEach((section, _sectionIndex) => {
    const sectionIndex = metadata.version >= 12 ? section.index.toNumber() : _sectionIndex;
    const sectionName = (0,index_js_.stringCamelCase)(section.name);
    section.events.unwrap().forEach((meta, methodIndex) => {
      const methodName = meta.name.toString();
      const eventIndex = new Uint8Array([sectionIndex, methodIndex]); // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access

      const typeDef = meta.args.map(arg => (0,getTypeDef/* getTypeDef */.s)(arg));
      let Types = [];

      try {
        Types = typeDef.map(typeDef => (0,createClass/* getTypeClass */.S_)(registry, typeDef));
      } catch (error) {
        l.error(error);
      }

      metadataEvents[(0,index_js_.u8aToHex)(eventIndex)] = class extends Event/* GenericEventData */.q {
        constructor(registry, value) {
          super(registry, value, Types, typeDef, meta, sectionName, methodName);
        }

      };
    });
  });
} // create extrinsic mapping from metadata


function injectExtrinsics(registry, metadata, metadataCalls) {
  const extrinsics = (0,decorate_extrinsics/* decorateExtrinsics */.Y)(registry, metadata.asLatest, metadata.version); // decorate the extrinsics

  Object.values(extrinsics).forEach(methods => Object.values(methods).forEach(method => {
    metadataCalls[(0,index_js_.u8aToHex)(method.callIndex)] = method;
  }));
} // extract additional properties from the metadata


function extractProperties(registry, metadata) {
  var _constants$system;

  const original = registry.getChainProperties();
  const constants = (0,decorate_constants/* decorateConstants */.U)(registry, metadata.asLatest, metadata.version);
  const ss58Format = (_constants$system = constants.system) === null || _constants$system === void 0 ? void 0 : _constants$system.ss58Prefix;

  if (!ss58Format) {
    return original;
  }

  const {
    tokenDecimals,
    tokenSymbol
  } = original || {};
  return registry.createType('ChainProperties', {
    ss58Format,
    tokenDecimals,
    tokenSymbol
  });
}

var _classes = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("classes");

var _definitions = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("definitions");

var _metadataCalls = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("metadataCalls");

var _metadataErrors = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("metadataErrors");

var _metadataEvents = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("metadataEvents");

var _unknownTypes = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("unknownTypes");

var _chainProperties = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("chainProperties");

var _hasher = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("hasher");

var _knownDefaults = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("knownDefaults");

var _knownDefinitions = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("knownDefinitions");

var _knownTypes = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("knownTypes");

var _signedExtensions = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("signedExtensions");

var _userExtensions = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("userExtensions");

class TypeRegistry {
  constructor(createdAtHash) {
    Object.defineProperty(this, _classes, {
      writable: true,
      value: new Map()
    });
    Object.defineProperty(this, _definitions, {
      writable: true,
      value: new Map()
    });
    Object.defineProperty(this, _metadataCalls, {
      writable: true,
      value: {}
    });
    Object.defineProperty(this, _metadataErrors, {
      writable: true,
      value: {}
    });
    Object.defineProperty(this, _metadataEvents, {
      writable: true,
      value: {}
    });
    Object.defineProperty(this, _unknownTypes, {
      writable: true,
      value: new Map()
    });
    Object.defineProperty(this, _chainProperties, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _hasher, {
      writable: true,
      value: util_crypto_index_js_.blake2AsU8a
    });
    Object.defineProperty(this, _knownDefaults, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _knownDefinitions, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _knownTypes, {
      writable: true,
      value: {}
    });
    Object.defineProperty(this, _signedExtensions, {
      writable: true,
      value: defaultExtensions
    });
    Object.defineProperty(this, _userExtensions, {
      writable: true,
      value: void 0
    });
    this.createdAtHash = void 0;
    (0,classPrivateFieldLooseBase/* default */.Z)(this, _knownDefaults)[_knownDefaults] = registry_objectSpread({
      Json: Json/* Json */.P,
      Metadata: Metadata/* Metadata */.S,
      Raw: Raw/* Raw */.N
    }, index_types);
    (0,classPrivateFieldLooseBase/* default */.Z)(this, _knownDefinitions)[_knownDefinitions] = definitions;
    this.init();

    if (createdAtHash) {
      this.createdAtHash = this.createType('Hash', createdAtHash);
    }
  }

  init() {
    // start clean
    (0,classPrivateFieldLooseBase/* default */.Z)(this, _classes)[_classes] = new Map();
    (0,classPrivateFieldLooseBase/* default */.Z)(this, _definitions)[_definitions] = new Map();
    (0,classPrivateFieldLooseBase/* default */.Z)(this, _unknownTypes)[_unknownTypes] = new Map();
    (0,classPrivateFieldLooseBase/* default */.Z)(this, _knownTypes)[_knownTypes] = {}; // register know, first classes then on-demand-created definitions

    this.register((0,classPrivateFieldLooseBase/* default */.Z)(this, _knownDefaults)[_knownDefaults]);
    Object.values((0,classPrivateFieldLooseBase/* default */.Z)(this, _knownDefinitions)[_knownDefinitions]).forEach(({
      types
    }) => this.register(types));
    return this;
  }

  get chainDecimals() {
    var _classPrivateFieldLoo;

    if ((_classPrivateFieldLoo = (0,classPrivateFieldLooseBase/* default */.Z)(this, _chainProperties)[_chainProperties]) !== null && _classPrivateFieldLoo !== void 0 && _classPrivateFieldLoo.tokenDecimals.isSome) {
      const allDecimals = (0,classPrivateFieldLooseBase/* default */.Z)(this, _chainProperties)[_chainProperties].tokenDecimals.unwrap();

      if (allDecimals.length) {
        return allDecimals.map(b => b.toNumber());
      }
    }

    return [12];
  }

  get chainSS58() {
    var _classPrivateFieldLoo2;

    return (_classPrivateFieldLoo2 = (0,classPrivateFieldLooseBase/* default */.Z)(this, _chainProperties)[_chainProperties]) !== null && _classPrivateFieldLoo2 !== void 0 && _classPrivateFieldLoo2.ss58Format.isSome ? (0,classPrivateFieldLooseBase/* default */.Z)(this, _chainProperties)[_chainProperties].ss58Format.unwrap().toNumber() : undefined;
  }

  get chainTokens() {
    var _classPrivateFieldLoo3;

    if ((_classPrivateFieldLoo3 = (0,classPrivateFieldLooseBase/* default */.Z)(this, _chainProperties)[_chainProperties]) !== null && _classPrivateFieldLoo3 !== void 0 && _classPrivateFieldLoo3.tokenSymbol.isSome) {
      const allTokens = (0,classPrivateFieldLooseBase/* default */.Z)(this, _chainProperties)[_chainProperties].tokenSymbol.unwrap();

      if (allTokens.length) {
        return allTokens.map(s => s.toString());
      }
    }

    return [index_js_.formatBalance.getDefaults().unit];
  }

  get knownTypes() {
    return (0,classPrivateFieldLooseBase/* default */.Z)(this, _knownTypes)[_knownTypes];
  }

  get unknownTypes() {
    return [...(0,classPrivateFieldLooseBase/* default */.Z)(this, _unknownTypes)[_unknownTypes].keys()];
  }

  get signedExtensions() {
    return (0,classPrivateFieldLooseBase/* default */.Z)(this, _signedExtensions)[_signedExtensions];
  }
  /**
   * @describe Creates an instance of the class
   */


  createClass(type) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return (0,createClass/* createClass */.qH)(this, type);
  }
  /**
   * @description Creates an instance of a type as registered
   */


  createType(type, ...params) {
    return (0,createType/* createType */.Z)(this, type, ...params);
  } // find a specific call


  findMetaCall(callIndex) {
    const hexIndex = (0,index_js_.u8aToHex)(callIndex);
    return (0,index_js_.assertReturn)((0,classPrivateFieldLooseBase/* default */.Z)(this, _metadataCalls)[_metadataCalls][hexIndex], `findMetaCall: Unable to find Call with index ${hexIndex}/[${callIndex.toString()}]`);
  } // finds an error


  findMetaError(errorIndex) {
    const hexIndex = (0,index_js_.u8aToHex)((0,index_js_.isU8a)(errorIndex) ? errorIndex : new Uint8Array([errorIndex.index.toNumber(), errorIndex.error.toNumber()]));
    return (0,index_js_.assertReturn)((0,classPrivateFieldLooseBase/* default */.Z)(this, _metadataErrors)[_metadataErrors][hexIndex], `findMetaError: Unable to find Error with index ${hexIndex}/[${errorIndex.toString()}]`);
  }

  findMetaEvent(eventIndex) {
    const hexIndex = (0,index_js_.u8aToHex)(eventIndex);
    return (0,index_js_.assertReturn)((0,classPrivateFieldLooseBase/* default */.Z)(this, _metadataEvents)[_metadataEvents][hexIndex], `findMetaEvent: Unable to find Event with index ${hexIndex}/[${eventIndex.toString()}]`);
  }

  get(name, withUnknown) {
    let Type = (0,classPrivateFieldLooseBase/* default */.Z)(this, _classes)[_classes].get(name); // we have not already created the type, attempt it


    if (!Type) {
      const definition = (0,classPrivateFieldLooseBase/* default */.Z)(this, _definitions)[_definitions].get(name);

      let BaseType; // we have a definition, so create the class now (lazily)

      if (definition) {
        BaseType = (0,createClass/* createClass */.qH)(this, definition);
      } else if (withUnknown) {
        l.warn(`Unable to resolve type ${name}, it will fail on construction`);

        (0,classPrivateFieldLooseBase/* default */.Z)(this, _unknownTypes)[_unknownTypes].set(name, true);

        BaseType = DoNotConstruct/* DoNotConstruct.with */.w.with(name);
      }

      if (BaseType) {
        // NOTE If we didn't extend here, we would have strange artifacts. An example is
        // Balance, with this, new Balance() instanceof u128 is true, but Balance !== u128
        // Additionally, we now pass through the registry, which is a link to ourselves
        Type = class extends BaseType {};

        (0,classPrivateFieldLooseBase/* default */.Z)(this, _classes)[_classes].set(name, Type);
      }
    }

    return Type;
  }

  getChainProperties() {
    return (0,classPrivateFieldLooseBase/* default */.Z)(this, _chainProperties)[_chainProperties];
  }

  getClassName(clazz) {
    const entry = [...(0,classPrivateFieldLooseBase/* default */.Z)(this, _classes)[_classes].entries()].find(([, test]) => test === clazz);
    return entry ? entry[0] : undefined;
  }

  getDefinition(typeName) {
    return (0,classPrivateFieldLooseBase/* default */.Z)(this, _definitions)[_definitions].get(typeName);
  }

  getModuleInstances(specName, moduleName) {
    var _classPrivateFieldLoo4, _classPrivateFieldLoo5, _classPrivateFieldLoo6, _classPrivateFieldLoo7, _classPrivateFieldLoo8;

    return (_classPrivateFieldLoo4 = (0,classPrivateFieldLooseBase/* default */.Z)(this, _knownTypes)[_knownTypes]) === null || _classPrivateFieldLoo4 === void 0 ? void 0 : (_classPrivateFieldLoo5 = _classPrivateFieldLoo4.typesBundle) === null || _classPrivateFieldLoo5 === void 0 ? void 0 : (_classPrivateFieldLoo6 = _classPrivateFieldLoo5.spec) === null || _classPrivateFieldLoo6 === void 0 ? void 0 : (_classPrivateFieldLoo7 = _classPrivateFieldLoo6[specName]) === null || _classPrivateFieldLoo7 === void 0 ? void 0 : (_classPrivateFieldLoo8 = _classPrivateFieldLoo7.instances) === null || _classPrivateFieldLoo8 === void 0 ? void 0 : _classPrivateFieldLoo8[moduleName];
  }

  getOrThrow(name, msg) {
    return (0,index_js_.assertReturn)(this.get(name), msg || `type ${name} not found`);
  }

  getOrUnknown(name) {
    return this.get(name, true);
  }

  getSignedExtensionExtra() {
    return expandExtensionTypes((0,classPrivateFieldLooseBase/* default */.Z)(this, _signedExtensions)[_signedExtensions], 'payload', (0,classPrivateFieldLooseBase/* default */.Z)(this, _userExtensions)[_userExtensions]);
  }

  getSignedExtensionTypes() {
    return expandExtensionTypes((0,classPrivateFieldLooseBase/* default */.Z)(this, _signedExtensions)[_signedExtensions], 'extrinsic', (0,classPrivateFieldLooseBase/* default */.Z)(this, _userExtensions)[_userExtensions]);
  }

  hasClass(name) {
    return (0,classPrivateFieldLooseBase/* default */.Z)(this, _classes)[_classes].has(name);
  }

  hasDef(name) {
    return (0,classPrivateFieldLooseBase/* default */.Z)(this, _definitions)[_definitions].has(name);
  }

  hasType(name) {
    return !(0,classPrivateFieldLooseBase/* default */.Z)(this, _unknownTypes)[_unknownTypes].get(name) && (this.hasClass(name) || this.hasDef(name));
  }

  hash(data) {
    return this.createType('CodecHash', (0,classPrivateFieldLooseBase/* default */.Z)(this, _hasher)[_hasher](data));
  }

  // eslint-disable-next-line no-dupe-class-members
  register(arg1, arg2) {
    // NOTE Constructors appear as functions here
    if ((0,index_js_.isFunction)(arg1)) {
      (0,classPrivateFieldLooseBase/* default */.Z)(this, _classes)[_classes].set(arg1.name, arg1);
    } else if ((0,index_js_.isString)(arg1)) {
      (0,index_js_.assert)((0,index_js_.isFunction)(arg2), () => `Expected class definition passed to '${arg1}' registration`);
      (0,index_js_.assert)(arg1 !== arg2.toString(), () => `Unable to register circular ${arg1} === ${arg1}`);

      (0,classPrivateFieldLooseBase/* default */.Z)(this, _classes)[_classes].set(arg1, arg2);
    } else {
      this._registerObject(arg1);
    }
  }

  _registerObject(obj) {
    Object.entries(obj).forEach(([name, type]) => {
      if ((0,index_js_.isFunction)(type)) {
        // This _looks_ a bit funny, but `typeof Clazz === 'function'
        (0,classPrivateFieldLooseBase/* default */.Z)(this, _classes)[_classes].set(name, type);
      } else {
        const def = (0,index_js_.isString)(type) ? type : (0,index_js_.stringify)(type);
        (0,index_js_.assert)(name !== def, () => `Unable to register circular ${name} === ${def}`); // we already have this type, remove the classes registered for it

        if ((0,classPrivateFieldLooseBase/* default */.Z)(this, _classes)[_classes].has(name)) {
          (0,classPrivateFieldLooseBase/* default */.Z)(this, _classes)[_classes].delete(name);
        }

        (0,classPrivateFieldLooseBase/* default */.Z)(this, _definitions)[_definitions].set(name, def);
      }
    });
  } // sets the chain properties


  setChainProperties(properties) {
    if (properties) {
      (0,classPrivateFieldLooseBase/* default */.Z)(this, _chainProperties)[_chainProperties] = properties;
    }
  }

  setHasher(hasher) {
    (0,classPrivateFieldLooseBase/* default */.Z)(this, _hasher)[_hasher] = hasher || util_crypto_index_js_.blake2AsU8a;
  }

  setKnownTypes(knownTypes) {
    (0,classPrivateFieldLooseBase/* default */.Z)(this, _knownTypes)[_knownTypes] = knownTypes;
  } // sets the metadata


  setMetadata(metadata, signedExtensions, userExtensions) {
    injectExtrinsics(this, metadata, (0,classPrivateFieldLooseBase/* default */.Z)(this, _metadataCalls)[_metadataCalls]);
    injectErrors(this, metadata, (0,classPrivateFieldLooseBase/* default */.Z)(this, _metadataErrors)[_metadataErrors]);
    injectEvents(this, metadata, (0,classPrivateFieldLooseBase/* default */.Z)(this, _metadataEvents)[_metadataEvents]); // setup the available extensions

    this.setSignedExtensions(signedExtensions || (metadata.asLatest.extrinsic.version.gt(index_js_.BN_ZERO) ? metadata.asLatest.extrinsic.signedExtensions.map(key => key.toString()) : defaultExtensions), userExtensions); // setup the chain properties with format overrides

    this.setChainProperties(extractProperties(this, metadata));
  } // sets the available signed extensions


  setSignedExtensions(signedExtensions = defaultExtensions, userExtensions) {
    (0,classPrivateFieldLooseBase/* default */.Z)(this, _signedExtensions)[_signedExtensions] = signedExtensions;
    (0,classPrivateFieldLooseBase/* default */.Z)(this, _userExtensions)[_userExtensions] = userExtensions;
    const unknown = findUnknownExtensions((0,classPrivateFieldLooseBase/* default */.Z)(this, _signedExtensions)[_signedExtensions], (0,classPrivateFieldLooseBase/* default */.Z)(this, _userExtensions)[_userExtensions]);

    if (unknown.length) {
      l.warn(`Unknown signed extensions ${unknown.join(', ')} found, treating them as no-effect`);
    }
  }

}

/***/ }),

/***/ 89983:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nw": () => (/* binding */ sanitize)
/* harmony export */ });
/* unused harmony exports findClosing, alias, cleanupCompact, flattenSingleTuple, removeExtensions, removeColons, removeGenerics, removePairOf, removeTraits, removeWrap */
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
const BOUNDED = ['BTreeMap', 'BTreeSet', 'HashMap', 'Vec'];
const ALLOWED_BOXES = BOUNDED.concat(['Compact', 'DoNotConstruct', 'Int', 'Linkage', 'Result', 'Option', 'UInt']);
const BOX_PRECEDING = ['<', '(', '[', '"', ',', ' ']; // start of vec, tuple, fixed array, part of struct def or in tuple

const mappings = [// alias <T::InherentOfflineReport as InherentOfflineReport>::Inherent -> InherentOfflineReport
alias('<T::InherentOfflineReport as InherentOfflineReport>::Inherent', 'InherentOfflineReport', false), alias('VecDeque<', 'Vec<', false), // <T::Balance as HasCompact>
cleanupCompact(), // Change BoundedVec<Type, Size> to Vec<Type>
removeExtensions('Bounded', true), // Change WeakVec<Type> to Vec<Type>
removeExtensions('Weak', false), // Remove all the trait prefixes
removeTraits(), // remove PairOf<T> -> (T, T)
removePairOf(), // remove boxing, `Box<Proposal>` -> `Proposal`
removeWrap('Box<'), // remove generics, `MisbehaviorReport<Hash, BlockNumber>` -> `MisbehaviorReport`
removeGenerics(), // alias String -> Text (compat with jsonrpc methods)
alias('String', 'Text'), // alias Vec<u8> -> Bytes
alias('Vec<u8>', 'Bytes'), alias('&\\[u8\\]', 'Bytes'), alias("&'static\\[u8\\]", 'Bytes'), // alias RawAddress -> Address
alias('RawAddress', 'Address'), // lookups, mapped to Address/AccountId as appropriate in runtime
alias('Lookup::Source', 'LookupSource'), alias('Lookup::Target', 'LookupTarget'), // HACK duplication between contracts & primitives, however contracts prefixed with exec
alias('exec::StorageKey', 'ContractStorageKey'), // flattens tuples with one value, `(AccountId)` -> `AccountId`
flattenSingleTuple(), // converts ::Type to Type, <T as Trait<I>>::Proposal -> Proposal
removeColons()]; // given a starting index, find the closing >

function findClosing(value, start) {
  let depth = 0;

  for (let index = start; index < value.length; index++) {
    if (value[index] === '>') {
      if (!depth) {
        return index;
      }

      depth--;
    } else if (value[index] === '<') {
      depth++;
    }
  }

  throw new Error(`Unable to find closing matching <> on '${value}' (start ${start})`);
}
function alias(src, dest, withChecks = true) {
  return value => value.replace(new RegExp(`(^${src}|${BOX_PRECEDING.map(box => `\\${box}${src}`).join('|')})`, 'g'), src => withChecks && BOX_PRECEDING.includes(src[0]) ? `${src[0]}${dest}` : dest);
}
function cleanupCompact() {
  return value => {
    for (let index = 0; index < value.length; index++) {
      if (value[index] === '<') {
        const end = findClosing(value, index + 1) - 14;

        if (value.substr(end, 14) === ' as HasCompact') {
          value = `Compact<${value.substr(index + 1, end - index - 1)}>`;
        }
      }
    }

    return value;
  };
}
function flattenSingleTuple() {
  return value => value // tuples may have trailing commas, e.g. (u32, BlockNumber, )
  .replace(/,\)/g, ')') // change (u32) -> u32
  .replace(/\(([^,]+)\)/, '$1');
}

function replaceTagWith(value, matcher, replacer) {
  let index = -1;

  while (true) {
    index = value.indexOf(matcher, index + 1);

    if (index === -1) {
      return value;
    }

    const start = index + matcher.length;
    const end = findClosing(value, start);
    value = `${value.substr(0, index)}${replacer(value.substr(start, end - start))}${value.substr(end + 1)}`;
  }
} // remove the Bounded* or Weak* wrappers


function removeExtensions(type, isSized) {
  return value => BOUNDED.reduce((value, tag) => replaceTagWith(value, `${type}${tag}<`, inner => {
    const parts = inner.split(',').map(s => s.trim()).filter(s => s);

    if (isSized) {
      parts.pop();
    }

    return `${tag}<${parts.join(',')}>`;
  }), value);
}
function removeColons() {
  return (value, {
    allowNamespaces
  } = {}) => {
    let index = 0;

    while (index !== -1) {
      index = value.indexOf('::');

      if (index === 0) {
        value = value.substr(2);
      } else if (index !== -1) {
        if (allowNamespaces) {
          return value;
        }

        let start = index;

        while (start !== -1 && !BOX_PRECEDING.includes(value[start])) {
          start--;
        }

        value = `${value.substr(0, start + 1)}${value.substr(index + 2)}`;
      }
    }

    return value;
  };
}
function removeGenerics() {
  return value => {
    for (let index = 0; index < value.length; index++) {
      if (value[index] === '<') {
        // check against the allowed wrappers, be it Vec<..>, Option<...> ...
        const box = ALLOWED_BOXES.find(box => {
          const start = index - box.length;
          return start >= 0 && value.substr(start, box.length) === box && ( // make sure it is stand-alone, i.e. don't catch ElectionResult<...> as Result<...>
          start === 0 || BOX_PRECEDING.includes(value[start - 1]));
        }); // we have not found anything, unwrap generic innards

        if (!box) {
          const end = findClosing(value, index + 1);
          value = `${value.substr(0, index)}${value.substr(end + 1)}`;
        }
      }
    }

    return value;
  };
} // remove the PairOf wrappers

function removePairOf() {
  const replacer = inner => `(${inner},${inner})`;

  return value => replaceTagWith(value, 'PairOf<', replacer);
} // remove the type traits

function removeTraits() {
  return value => value // remove all whitespaces
  .replace(/\s/g, '') // anything `T::<type>` to end up as `<type>`
  .replace(/(T|Self)::/g, '') // replace `<T as Trait>::` (whitespaces were removed above)
  .replace(/<(T|Self)asTrait>::/g, '') // replace `<T as something::Trait>::` (whitespaces were removed above)
  .replace(/<Tas[a-z]+::Trait>::/g, '') // replace <Lookup as StaticLookup>
  .replace(/<LookupasStaticLookup>/g, 'Lookup') // replace `<...>::Type`
  .replace(/::Type/g, '');
} // remove wrapping values, i.e. Box<Proposal> -> Proposal

function removeWrap(check) {
  const replacer = inner => inner;

  return value => replaceTagWith(value, check, replacer);
} // eslint-disable-next-line @typescript-eslint/ban-types

function sanitize(value, options) {
  return mappings.reduce((result, fn) => fn(result, options), value.toString()).trim();
}

/***/ }),

/***/ 69343:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ typeSplit)
/* harmony export */ });
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13948);
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0


function isNotNested(...counters) {
  return !counters.some(counter => counter !== 0);
} // safely split a string on ', ' while taking care of any nested occurences


function typeSplit(type) {
  let [cDepth, fDepth, sDepth, tDepth, start] = [0, 0, 0, 0, 0];
  const result = [];

  const extract = index => {
    if (isNotNested(cDepth, fDepth, sDepth, tDepth)) {
      result.push(type.substr(start, index - start).trim());
      start = index + 1;
    }
  };

  for (let index = 0; index < type.length; index++) {
    switch (type[index]) {
      // if we are not nested, add the type
      case ',':
        extract(index);
        break;
      // adjust compact/vec (and friends) depth

      case '<':
        cDepth++;
        break;

      case '>':
        cDepth--;
        break;
      // adjust fixed vec depths

      case '[':
        fDepth++;
        break;

      case ']':
        fDepth--;
        break;
      // adjust struct depth

      case '{':
        sDepth++;
        break;

      case '}':
        sDepth--;
        break;
      // adjust tuple depth

      case '(':
        tDepth++;
        break;

      case ')':
        tDepth--;
        break;
    }
  }

  (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.assert)(isNotNested(cDepth, fDepth, sDepth, tDepth), () => `Invalid definition (missing terminators) found in ${type}`); // the final leg of the journey

  result.push(type.substr(start, type.length - start).trim());
  return result;
}

/***/ }),

/***/ 77847:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ TypeDefInfo)
/* harmony export */ });
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// Type which says: if `K` is in the InterfaceTypes, then return InterfaceTypes[K], else fallback to T
let TypeDefInfo;

(function (TypeDefInfo) {
  TypeDefInfo[TypeDefInfo["BTreeMap"] = 0] = "BTreeMap";
  TypeDefInfo[TypeDefInfo["BTreeSet"] = 1] = "BTreeSet";
  TypeDefInfo[TypeDefInfo["Compact"] = 2] = "Compact";
  TypeDefInfo[TypeDefInfo["Enum"] = 3] = "Enum";
  TypeDefInfo[TypeDefInfo["Linkage"] = 4] = "Linkage";
  TypeDefInfo[TypeDefInfo["Option"] = 5] = "Option";
  TypeDefInfo[TypeDefInfo["Plain"] = 6] = "Plain";
  TypeDefInfo[TypeDefInfo["Result"] = 7] = "Result";
  TypeDefInfo[TypeDefInfo["Set"] = 8] = "Set";
  TypeDefInfo[TypeDefInfo["Struct"] = 9] = "Struct";
  TypeDefInfo[TypeDefInfo["Tuple"] = 10] = "Tuple";
  TypeDefInfo[TypeDefInfo["Vec"] = 11] = "Vec";
  TypeDefInfo[TypeDefInfo["VecFixed"] = 12] = "VecFixed";
  TypeDefInfo[TypeDefInfo["HashMap"] = 13] = "HashMap";
  TypeDefInfo[TypeDefInfo["Int"] = 14] = "Int";
  TypeDefInfo[TypeDefInfo["UInt"] = 15] = "UInt";
  TypeDefInfo[TypeDefInfo["DoNotConstruct"] = 16] = "DoNotConstruct";
  TypeDefInfo[TypeDefInfo["Null"] = 17] = "Null";
})(TypeDefInfo || (TypeDefInfo = {}));

/***/ }),

/***/ 59737:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B4": () => (/* binding */ BIT_SIGNED),
/* harmony export */   "jf": () => (/* binding */ BIT_UNSIGNED),
/* harmony export */   "pW": () => (/* binding */ EMPTY_U8A),
/* harmony export */   "eQ": () => (/* binding */ DEFAULT_VERSION),
/* harmony export */   "ws": () => (/* binding */ IMMORTAL_ERA),
/* harmony export */   "fk": () => (/* binding */ UNMASK_VERSION)
/* harmony export */ });
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
const BIT_SIGNED = 0b10000000;
const BIT_UNSIGNED = 0;
const EMPTY_U8A = new Uint8Array();
const DEFAULT_VERSION = 4;
const IMMORTAL_ERA = new Uint8Array([0]);
const UNMASK_VERSION = 0b01111111;

/***/ }),

/***/ 55329:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ GenericEventData),
/* harmony export */   "L": () => (/* binding */ GenericEvent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51119);
/* harmony import */ var _babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89539);
/* harmony import */ var _babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38879);
/* harmony import */ var _codec_Struct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48991);
/* harmony import */ var _codec_Tuple_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39751);
/* harmony import */ var _primitive_Null_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47261);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0



/**
 * @name GenericEventData
 * @description
 * Wrapper for the actual data that forms part of an [[Event]]
 */

var _meta = /*#__PURE__*/(0,_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)("meta");

var _method = /*#__PURE__*/(0,_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)("method");

var _section = /*#__PURE__*/(0,_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)("section");

var _typeDef = /*#__PURE__*/(0,_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)("typeDef");

class GenericEventData extends _codec_Tuple_js__WEBPACK_IMPORTED_MODULE_2__/* .Tuple */ .p {
  constructor(registry, value, Types = [], typeDef = [], meta, section = '<unknown>', method = '<unknown>') {
    super(registry, Types, value);
    Object.defineProperty(this, _meta, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _method, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _section, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _typeDef, {
      writable: true,
      value: void 0
    });
    (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(this, _meta)[_meta] = meta;
    (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(this, _method)[_method] = method;
    (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(this, _section)[_section] = section;
    (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(this, _typeDef)[_typeDef] = typeDef;
  }
  /**
   * @description The wrapped [[EventMetadata]]
   */


  get meta() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(this, _meta)[_meta];
  }
  /**
   * @description The method as a string
   */


  get method() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(this, _method)[_method];
  }
  /**
   * @description The section as a string
   */


  get section() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(this, _section)[_section];
  }
  /**
   * @description The [[TypeDef]] for this event
   */


  get typeDef() {
    return (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(this, _typeDef)[_typeDef];
  }

}
/**
 * @name GenericEvent
 * @description
 * A representation of a system event. These are generated via the [[Metadata]] interfaces and
 * specific to a specific Substrate runtime
 */

class GenericEvent extends _codec_Struct_js__WEBPACK_IMPORTED_MODULE_4__/* .Struct */ .A {
  // Currently we _only_ decode from Uint8Array, since we expect it to
  // be used via EventRecord
  constructor(registry, _value) {
    const {
      DataType,
      value
    } = GenericEvent.decodeEvent(registry, _value);
    super(registry, {
      index: 'EventId',
      // eslint-disable-next-line sort-keys
      data: DataType
    }, value);
  }
  /** @internal */


  static decodeEvent(registry, value = new Uint8Array()) {
    if (!value.length) {
      return {
        DataType: _primitive_Null_js__WEBPACK_IMPORTED_MODULE_5__/* .Null */ .p
      };
    }

    const index = value.subarray(0, 2);
    return {
      DataType: registry.findMetaEvent(index),
      value: {
        data: value.subarray(2),
        index
      }
    };
  }
  /**
   * @description The wrapped [[EventData]]
   */


  get data() {
    return this.get('data');
  }
  /**
   * @description The [[EventId]], identifying the raw event
   */


  get index() {
    return this.get('index');
  }
  /**
   * @description The [[EventMetadata]] with the documentation
   */


  get meta() {
    return this.data.meta;
  }
  /**
   * @description The method string identifying the event
   */


  get method() {
    return this.data.method;
  }
  /**
   * @description The section string identifying the event
   */


  get section() {
    return this.data.section;
  }
  /**
   * @description The [[TypeDef]] for the event
   */


  get typeDef() {
    return this.data.typeDef;
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */


  toHuman(isExpanded) {
    return _objectSpread(_objectSpread({
      method: this.method,
      section: this.section
    }, isExpanded ? {
      documentation: this.meta.documentation.map(d => d.toString())
    } : {}), super.toHuman(isExpanded));
  }

}

/***/ }),

/***/ 79625:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BitVec": () => (/* reexport */ BitVec),
  "Bool": () => (/* reexport */ bool),
  "Bytes": () => (/* reexport */ Bytes/* Bytes */.J),
  "Data": () => (/* reexport */ Data),
  "DoNotConstruct": () => (/* reexport */ DoNotConstruct/* DoNotConstruct */.w),
  "GenericAccountId": () => (/* reexport */ GenericAccountId),
  "GenericAccountIndex": () => (/* reexport */ GenericAccountIndex),
  "GenericBlock": () => (/* reexport */ GenericBlock),
  "GenericCall": () => (/* reexport */ GenericCall),
  "GenericChainProperties": () => (/* reexport */ GenericChainProperties),
  "GenericConsensusEngineId": () => (/* reexport */ GenericConsensusEngineId),
  "GenericEthereumAccountId": () => (/* reexport */ GenericEthereumAccountId),
  "GenericEthereumLookupSource": () => (/* reexport */ GenericEthereumLookupSource),
  "GenericEvent": () => (/* reexport */ Event/* GenericEvent */.L),
  "GenericEventData": () => (/* reexport */ Event/* GenericEventData */.q),
  "GenericExtrinsic": () => (/* reexport */ GenericExtrinsic),
  "GenericExtrinsicEra": () => (/* reexport */ GenericExtrinsicEra),
  "GenericExtrinsicPayload": () => (/* reexport */ GenericExtrinsicPayload),
  "GenericExtrinsicPayloadUnknown": () => (/* reexport */ GenericExtrinsicPayloadUnknown),
  "GenericExtrinsicPayloadV4": () => (/* reexport */ GenericExtrinsicPayloadV4),
  "GenericExtrinsicSignatureV4": () => (/* reexport */ GenericExtrinsicSignatureV4),
  "GenericExtrinsicUnknown": () => (/* reexport */ GenericExtrinsicUnknown),
  "GenericExtrinsicV4": () => (/* reexport */ GenericExtrinsicV4),
  "GenericImmortalEra": () => (/* reexport */ ImmortalEra),
  "GenericLookupSource": () => (/* reexport */ GenericLookupSource),
  "GenericMortalEra": () => (/* reexport */ MortalEra),
  "GenericMultiAddress": () => (/* reexport */ GenericMultiAddress),
  "GenericSignerPayload": () => (/* reexport */ GenericSignerPayload),
  "GenericVote": () => (/* reexport */ GenericVote),
  "I128": () => (/* reexport */ i128),
  "I16": () => (/* reexport */ i16),
  "I256": () => (/* reexport */ i256),
  "I32": () => (/* reexport */ i32),
  "I64": () => (/* reexport */ i64),
  "I8": () => (/* reexport */ i8),
  "Null": () => (/* reexport */ Null/* Null */.p),
  "StorageKey": () => (/* reexport */ StorageKey/* StorageKey */.Q),
  "Text": () => (/* reexport */ Text),
  "Type": () => (/* reexport */ Type),
  "U128": () => (/* reexport */ u128),
  "U16": () => (/* reexport */ u16),
  "U256": () => (/* reexport */ u256),
  "U32": () => (/* reexport */ U32/* u32 */.J),
  "U64": () => (/* reexport */ u64),
  "U8": () => (/* reexport */ u8),
  "USize": () => (/* reexport */ usize),
  "bool": () => (/* reexport */ bool),
  "i128": () => (/* reexport */ i128),
  "i16": () => (/* reexport */ i16),
  "i256": () => (/* reexport */ i256),
  "i32": () => (/* reexport */ i32),
  "i64": () => (/* reexport */ i64),
  "i8": () => (/* reexport */ i8),
  "u128": () => (/* reexport */ u128),
  "u16": () => (/* reexport */ u16),
  "u256": () => (/* reexport */ u256),
  "u32": () => (/* reexport */ U32/* u32 */.J),
  "u64": () => (/* reexport */ u64),
  "u8": () => (/* reexport */ u8),
  "usize": () => (/* reexport */ usize)
});

// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(51119);
// EXTERNAL MODULE: consume shared module (default) @polkadot/util@^6.7.1 (strict) (fallback: ../../node_modules/@polkadot/util/index.js)
var index_js_ = __webpack_require__(13948);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/codec/Base.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name Base
 * @description A type extends the Base class, when it holds a value
 */
class Base {
  constructor(registry, value) {
    this.registry = void 0;
    this.createdAtHash = void 0;
    this._raw = void 0;
    this.registry = registry;
    this._raw = value;
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */


  get encodedLength() {
    return this.toU8a().length;
  }
  /**
   * @description returns a hash of the contents
   */


  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description Checks if the value is an empty value
   */


  get isEmpty() {
    return this._raw.isEmpty;
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */


  eq(other) {
    return this._raw.eq(other);
  }
  /**
   * @description Returns a hex string representation of the value. isLe returns a LE (number-only) representation
   */


  toHex(isLe) {
    return this._raw.toHex(isLe);
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */


  toHuman(isExtended) {
    return this._raw.toHuman(isExtended);
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */


  toJSON() {
    return this._raw.toJSON();
  }
  /**
   * @description Returns the string representation of the value
   */


  toString() {
    return this._raw.toString();
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */


  toU8a(isBare) {
    return this._raw.toU8a(isBare);
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return 'Base';
  }

}
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/extrinsic/constants.js
var constants = __webpack_require__(59737);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/extrinsic/Extrinsic.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0



const VERSIONS = ['ExtrinsicUnknown', // v0 is unknown
'ExtrinsicUnknown', 'ExtrinsicUnknown', 'ExtrinsicUnknown', 'ExtrinsicV4'];


class ExtrinsicBase extends Base {
  /**
   * @description The arguments passed to for the call, exposes args so it is compatible with [[Call]]
   */
  get args() {
    return this.method.args;
  }
  /**
   * @description The argument definitions, compatible with [[Call]]
   */


  get argsDef() {
    return this.method.argsDef;
  }
  /**
   * @description The actual `[sectionIndex, methodIndex]` as used in the Call
   */


  get callIndex() {
    return this.method.callIndex;
  }
  /**
   * @description The actual data for the Call
   */


  get data() {
    return this.method.data;
  }
  /**
   * @description The era for this extrinsic
   */


  get era() {
    return this._raw.signature.era;
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */


  get encodedLength() {
    return this.toU8a().length;
  }
  /**
   * @description `true` id the extrinsic is signed
   */


  get isSigned() {
    return this._raw.signature.isSigned;
  }
  /**
   * @description The length of the actual data, excluding prefix
   */


  get length() {
    return this.toU8a(true).length;
  }
  /**
   * @description The [[FunctionMetadataLatest]] that describes the extrinsic
   */


  get meta() {
    return this.method.meta;
  }
  /**
   * @description The [[Call]] this extrinsic wraps
   */


  get method() {
    return this._raw.method;
  }
  /**
   * @description The nonce for this extrinsic
   */


  get nonce() {
    return this._raw.signature.nonce;
  }
  /**
   * @description The actual [[EcdsaSignature]], [[Ed25519Signature]] or [[Sr25519Signature]]
   */


  get signature() {
    return this._raw.signature.signature;
  }
  /**
   * @description The [[Address]] that signed
   */


  get signer() {
    return this._raw.signature.signer;
  }
  /**
   * @description Forwards compat
   */


  get tip() {
    return this._raw.signature.tip;
  }
  /**
   * @description Returns the raw transaction version (not flagged with signing information)
  */


  get type() {
    return this._raw.version;
  }
  /**
   * @description Returns the encoded version flag
  */


  get version() {
    return this.type | (this.isSigned ? constants/* BIT_SIGNED */.B4 : constants/* BIT_UNSIGNED */.jf);
  }
  /**
   * @description Checks if the source matches this in type
   */


  is(other) {
    return this.method.is(other);
  }

}
/**
 * @name GenericExtrinsic
 * @description
 * Representation of an Extrinsic in the system. It contains the actual call,
 * (optional) signature and encodes with an actual length prefix
 *
 * {@link https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node}.
 *
 * Can be:
 * - signed, to create a transaction
 * - left as is, to create an inherent
 */


class GenericExtrinsic extends ExtrinsicBase {
  constructor(registry, value, {
    version
  } = {}) {
    super(registry, GenericExtrinsic._decodeExtrinsic(registry, value, version));
  }
  /** @internal */


  static _newFromValue(registry, value, version) {
    if (value instanceof GenericExtrinsic) {
      return value._raw;
    }

    const isSigned = (version & constants/* BIT_SIGNED */.B4) === constants/* BIT_SIGNED */.B4;
    const type = VERSIONS[version & constants/* UNMASK_VERSION */.fk] || VERSIONS[0]; // we cast here since the VERSION definition is incredibly broad - we don't have a
    // slice for "only add extrinsic types", and more string definitions become unwieldy

    return registry.createType(type, value, {
      isSigned,
      version
    });
  }
  /** @internal */


  static _decodeExtrinsic(registry, value, version = constants/* DEFAULT_VERSION */.eQ) {
    if ((0,index_js_.isU8a)(value) || Array.isArray(value) || (0,index_js_.isHex)(value)) {
      return GenericExtrinsic._decodeU8a(registry, (0,index_js_.u8aToU8a)(value), version);
    } else if (value instanceof registry.createClass('Call')) {
      return GenericExtrinsic._newFromValue(registry, {
        method: value
      }, version);
    }

    return GenericExtrinsic._newFromValue(registry, value, version);
  }
  /** @internal */


  static _decodeU8a(registry, value, version) {
    if (!value.length) {
      return GenericExtrinsic._newFromValue(registry, new Uint8Array(), version);
    }

    const [offset, length] = (0,index_js_.compactFromU8a)(value);
    const total = offset + length.toNumber();
    (0,index_js_.assert)(total <= value.length, () => `Extrinsic: length less than remainder, expected at least ${total}, found ${value.length}`);
    const data = value.subarray(offset, total);
    return GenericExtrinsic._newFromValue(registry, data.subarray(1), data[0]);
  }
  /**
   * @description Injects an already-generated signature into the extrinsic
   */


  addSignature(signer, signature, payload) {
    this._raw.addSignature(signer, signature, payload);

    return this;
  }
  /**
   * @description Sign the extrinsic with a specific keypair
   */


  sign(account, options) {
    this._raw.sign(account, options);

    return this;
  }
  /**
   * @describe Adds a fake signature to the extrinsic
   */


  signFake(signer, options) {
    this._raw.signFake(signer, options);

    return this;
  }
  /**
   * @description Returns a hex string representation of the value
   */


  toHex(isBare) {
    return (0,index_js_.u8aToHex)(this.toU8a(isBare));
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */


  toHuman(isExpanded) {
    return _objectSpread({
      isSigned: this.isSigned,
      method: this.method.toHuman(isExpanded)
    }, this.isSigned ? {
      era: this.era.toHuman(isExpanded),
      nonce: this.nonce.toHuman(isExpanded),
      signature: this.signature.toHex(),
      signer: this.signer.toHuman(isExpanded),
      tip: this.tip.toHuman(isExpanded)
    } : {});
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */


  toJSON() {
    return this.toHex();
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return 'Extrinsic';
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value is not length-prefixed
   */


  toU8a(isBare) {
    // we do not apply bare to the internal values, rather this only determines out length addition,
    // where we strip all lengths this creates an extrinsic that cannot be decoded
    const encoded = (0,index_js_.u8aConcat)(new Uint8Array([this.version]), this._raw.toU8a());
    return isBare ? encoded : (0,index_js_.compactAddLength)(encoded);
  }

}
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/codec/Enum.js
var Enum = __webpack_require__(72179);
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/codec/Raw.js
var Raw = __webpack_require__(90094);
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/codec/Tuple.js
var Tuple = __webpack_require__(39751);
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/codec/UInt.js
var UInt = __webpack_require__(14552);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/primitive/U64.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name u64
 * @description
 * A 64-bit unsigned integer
 */

class u64 extends UInt/* UInt.with */.v.with(64) {}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/extrinsic/ExtrinsicEra.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0







function getTrailingZeros(period) {
  const binary = period.toString(2);
  let index = 0;

  while (binary[binary.length - 1 - index] === '0') {
    index++;
  }

  return index;
}
/**
 * @name ImmortalEra
 * @description
 * The ImmortalEra for an extrinsic
 */


class ImmortalEra extends Raw/* Raw */.N {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(registry, value) {
    // For immortals, we always provide the known value (i.e. treated as a
    // constant no matter how it is constructed - it is a fixed structure)
    super(registry, constants/* IMMORTAL_ERA */.ws);
  }

}
/**
 * @name MortalEra
 * @description
 * The MortalEra for an extrinsic, indicating period and phase
 */

class MortalEra extends Tuple/* Tuple */.p {
  constructor(registry, value) {
    super(registry, {
      period: u64,
      phase: u64
    }, MortalEra._decodeMortalEra(registry, value));
  }
  /** @internal */


  static _decodeMortalEra(registry, value) {
    if (!value) {
      return [new u64(registry), new u64(registry)];
    } else if ((0,index_js_.isU8a)(value) || (0,index_js_.isHex)(value) || Array.isArray(value)) {
      return MortalEra._decodeMortalU8a(registry, (0,index_js_.u8aToU8a)(value));
    } else if ((0,index_js_.isObject)(value)) {
      return MortalEra._decodeMortalObject(registry, value);
    }

    throw new Error('Invalid data passed to Mortal era');
  }
  /** @internal */


  static _decodeMortalObject(registry, value) {
    const {
      current,
      period
    } = value;
    let calPeriod = Math.pow(2, Math.ceil(Math.log2(period)));
    calPeriod = Math.min(Math.max(calPeriod, 4), 1 << 16);
    const phase = current % calPeriod;
    const quantizeFactor = Math.max(calPeriod >> 12, 1);
    const quantizedPhase = phase / quantizeFactor * quantizeFactor;
    return [new u64(registry, calPeriod), new u64(registry, quantizedPhase)];
  }
  /** @internal */


  static _decodeMortalU8a(registry, value) {
    if (value.length === 0) {
      return [new u64(registry), new u64(registry)];
    }

    const first = (0,index_js_.u8aToBn)(value.subarray(0, 1)).toNumber();
    const second = (0,index_js_.u8aToBn)(value.subarray(1, 2)).toNumber();
    const encoded = first + (second << 8);
    const period = 2 << encoded % (1 << 4);
    const quantizeFactor = Math.max(period >> 12, 1);
    const phase = (encoded >> 4) * quantizeFactor;
    (0,index_js_.assert)(period >= 4 && phase < period, 'Invalid data passed to Mortal era');
    return [new u64(registry, period), new u64(registry, phase)];
  }
  /**
   * @description Encoded length for mortals occupy 2 bytes, different from the actual Tuple since it is encoded. This is a shortcut fro `toU8a().length`
   */


  get encodedLength() {
    return 2;
  }
  /**
   * @description The period of this Mortal wraps as a [[U64]]
   */


  get period() {
    return this[0];
  }
  /**
   * @description The phase of this Mortal wraps as a [[U64]]
   */


  get phase() {
    return this[1];
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */


  toHuman() {
    return {
      period: (0,index_js_.formatNumber)(this.period),
      phase: (0,index_js_.formatNumber)(this.phase)
    };
  }
  /**
   * @description Returns a JSON representation of the actual value
   */


  toJSON() {
    return this.toHex();
  }
  /**
   * @description Encodes the value as a Uint8Array as per the parity-codec specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   * Period and phase are encoded:
   *   - The period of validity from the block hash found in the signing material.
   *   - The phase in the period that this transaction's lifetime begins (and, importantly,
   *     implies which block hash is included in the signature material). If the `period` is
   *     greater than 1 << 12, then it will be a factor of the times greater than 1<<12 that
   *     `period` is.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  toU8a(isBare) {
    const period = this.period.toNumber();
    const phase = this.phase.toNumber();
    const quantizeFactor = Math.max(period >> 12, 1);
    const trailingZeros = getTrailingZeros(period);
    const encoded = Math.min(15, Math.max(1, trailingZeros - 1)) + (phase / quantizeFactor << 4);
    const first = encoded >> 8;
    const second = encoded & 0xff;
    return new Uint8Array([second, first]);
  }
  /**
   * @description Get the block number of the start of the era whose properties this object describes that `current` belongs to.
   */


  birth(current) {
    // FIXME No toNumber() here
    return Math.floor((Math.max((0,index_js_.bnToBn)(current).toNumber(), this.phase.toNumber()) - this.phase.toNumber()) / this.period.toNumber()) * this.period.toNumber() + this.phase.toNumber();
  }
  /**
   * @description Get the block number of the first block at which the era has ended.
   */


  death(current) {
    // FIXME No toNumber() here
    return this.birth(current) + this.period.toNumber();
  }

}
/**
 * @name GenericExtrinsicEra
 * @description
 * The era for an extrinsic, indicating either a mortal or immortal extrinsic
 */

class GenericExtrinsicEra extends Enum/* Enum */.x {
  constructor(registry, value) {
    super(registry, {
      ImmortalEra,
      MortalEra
    }, GenericExtrinsicEra._decodeExtrinsicEra(value));
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/ban-types


  static _decodeExtrinsicEra(value = new Uint8Array()) {
    if (value instanceof GenericExtrinsicEra) {
      return GenericExtrinsicEra._decodeExtrinsicEra(value.toU8a());
    } else if ((0,index_js_.isHex)(value)) {
      return GenericExtrinsicEra._decodeExtrinsicEra((0,index_js_.hexToU8a)(value));
    } else if (!value || (0,index_js_.isU8a)(value)) {
      return !(value !== null && value !== void 0 && value.length) || value[0] === 0 ? new Uint8Array([0]) : new Uint8Array([1, value[0], value[1]]);
    } else if ((0,index_js_.isObject)(value)) {
      const entries = Object.entries(value).map(([k, v]) => [k.toLowerCase(), v]);
      const mortal = entries.find(([k]) => k.toLowerCase() === 'mortalera');
      const immortal = entries.find(([k]) => k.toLowerCase() === 'immortalera'); // this is to de-serialize from JSON

      return mortal ? {
        MortalEra: mortal[1]
      } : immortal ? {
        ImmortalEra: immortal[1]
      } : {
        MortalEra: value
      };
    }

    throw new Error('Invalid data passed to Era');
  }
  /**
   * @description Override the encoded length method
   */


  get encodedLength() {
    return this.isImmortalEra ? this.asImmortalEra.encodedLength : this.asMortalEra.encodedLength;
  }
  /**
   * @description Returns the item as a [[ImmortalEra]]
   */


  get asImmortalEra() {
    (0,index_js_.assert)(this.isImmortalEra, () => `Cannot convert '${this.type}' via asImmortalEra`);
    return this.value;
  }
  /**
   * @description Returns the item as a [[MortalEra]]
   */


  get asMortalEra() {
    (0,index_js_.assert)(this.isMortalEra, () => `Cannot convert '${this.type}' via asMortalEra`);
    return this.value;
  }
  /**
   * @description `true` if Immortal
   */


  get isImmortalEra() {
    return this.index === 0;
  }
  /**
   * @description `true` if Mortal
   */


  get isMortalEra() {
    return this.index > 0;
  }
  /**
   * @description Encodes the value as a Uint8Array as per the parity-codec specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */


  toU8a(isBare) {
    return this.isMortalEra ? this.asMortalEra.toU8a(isBare) : this.asImmortalEra.toU8a(isBare);
  }

}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/extrinsic/ExtrinsicPayload.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0



const ExtrinsicPayload_VERSIONS = ['ExtrinsicPayloadUnknown', // v0 is unknown
'ExtrinsicPayloadUnknown', 'ExtrinsicPayloadUnknown', 'ExtrinsicPayloadUnknown', 'ExtrinsicPayloadV4'];
/**
 * @name GenericExtrinsicPayload
 * @description
 * A signing payload for an [[Extrinsic]]. For the final encoding, it is variable length based
 * on the contents included
 */

class GenericExtrinsicPayload extends Base {
  constructor(registry, value, {
    version
  } = {}) {
    super(registry, GenericExtrinsicPayload.decodeExtrinsicPayload(registry, value, version));
  }
  /** @internal */


  static decodeExtrinsicPayload(registry, value, version = constants/* DEFAULT_VERSION */.eQ) {
    if (value instanceof GenericExtrinsicPayload) {
      return value._raw;
    }

    return registry.createType(ExtrinsicPayload_VERSIONS[version] || ExtrinsicPayload_VERSIONS[0], value, {
      version
    });
  }
  /**
   * @description The block [[Hash]] the signature applies to (mortal/immortal)
   */


  get blockHash() {
    return this._raw.blockHash;
  }
  /**
   * @description The [[ExtrinsicEra]]
   */


  get era() {
    return this._raw.era;
  }
  /**
   * @description The genesis block [[Hash]] the signature applies to
   */


  get genesisHash() {
    // NOTE only v3+
    return this._raw.genesisHash || this.registry.createType('Hash');
  }
  /**
   * @description The [[Raw]] contained in the payload
   */


  get method() {
    return this._raw.method;
  }
  /**
   * @description The [[Index]]
   */


  get nonce() {
    return this._raw.nonce;
  }
  /**
   * @description The specVersion as a [[u32]] for this payload
   */


  get specVersion() {
    // NOTE only v3+
    return this._raw.specVersion || this.registry.createType('u32');
  }
  /**
   * @description The [[Balance]]
   */


  get tip() {
    // NOTE from v2+
    return this._raw.tip || this.registry.createType('Compact<Balance>');
  }
  /**
   * @description The transaction version as a [[u32]] for this payload
   */


  get transactionVersion() {
    // NOTE only v4+
    return this._raw.transactionVersion || this.registry.createType('u32');
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */


  eq(other) {
    return this._raw.eq(other);
  }
  /**
   * @description Sign the payload with the keypair
   */


  sign(signerPair) {
    const signature = this._raw.sign(signerPair); // This is extensible, so we could quite readily extend to send back extra
    // information, such as for instance the payload, i.e. `payload: this.toHex()`
    // For the case here we sign via the extrinsic, we ignore the return, so generally
    // this is applicable for external signing


    return {
      signature: (0,index_js_.u8aToHex)(signature)
    };
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */


  toHuman(isExtended) {
    return this._raw.toHuman(isExtended);
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */


  toJSON() {
    return this.toHex();
  }
  /**
   * @description Returns the string representation of the value
   */


  toString() {
    return this.toHex();
  }
  /**
   * @description Returns a serialized u8a form
   */


  toU8a(isBare) {
    // call our parent, with only the method stripped
    return super.toU8a(isBare ? {
      method: true
    } : false);
  }

}
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/codec/Struct.js
var Struct = __webpack_require__(48991);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/extrinsic/ExtrinsicPayloadUnknown.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name GenericExtrinsicPayloadUnknown
 * @description
 * A default handler for payloads where the version is not known (default throw)
 */

class GenericExtrinsicPayloadUnknown extends Struct/* Struct */.A {
  constructor(registry, value, {
    version = 0
  } = {}) {
    super(registry, {});
    throw new Error(`Unsupported extrinsic payload version ${version}`);
  }

}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/extrinsic/ExtrinsicUnknown.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0


/**
 * @name GenericExtrinsicUnknown
 * @description
 * A default handler for extrinsics where the version is not known (default throw)
 */

class GenericExtrinsicUnknown extends Struct/* Struct */.A {
  constructor(registry, value, {
    isSigned = false,
    version = 0
  } = {}) {
    super(registry, {});
    throw new Error(`Unsupported ${isSigned ? '' : 'un'}signed extrinsic version ${version & constants/* UNMASK_VERSION */.fk}`);
  }

}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/extrinsic/SignerPayload.js


function SignerPayload_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function SignerPayload_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SignerPayload_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SignerPayload_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0


const knownTypes = {
  address: 'Address',
  blockHash: 'Hash',
  blockNumber: 'BlockNumber',
  era: 'ExtrinsicEra',
  genesisHash: 'Hash',
  method: 'Call',
  nonce: 'Compact<Index>',
  runtimeVersion: 'RuntimeVersion',
  signedExtensions: 'Vec<Text>',
  tip: 'Compact<Balance>',
  version: 'u8'
};
/**
 * @name GenericSignerPayload
 * @description
 * A generic signer payload that can be used for serialization between API and signer
 */

class GenericSignerPayload extends Struct/* Struct */.A {
  constructor(registry, value) {
    const extensionTypes = SignerPayload_objectSpread(SignerPayload_objectSpread({}, registry.getSignedExtensionTypes()), registry.getSignedExtensionExtra());

    super(registry, SignerPayload_objectSpread(SignerPayload_objectSpread({}, extensionTypes), knownTypes), value); // add all extras that are not in the base types

    this._extraTypes = void 0;
    this._extraTypes = Object.entries(extensionTypes).reduce((map, [key, type]) => {
      if (!knownTypes[key]) {
        map[key] = type;
      }

      return map;
    }, {});
  }

  get address() {
    return this.get('address');
  }

  get blockHash() {
    return this.get('blockHash');
  }

  get blockNumber() {
    return this.get('blockNumber');
  }

  get era() {
    return this.get('era');
  }

  get genesisHash() {
    return this.get('genesisHash');
  }

  get method() {
    return this.get('method');
  }

  get nonce() {
    return this.get('nonce');
  }

  get runtimeVersion() {
    return this.get('runtimeVersion');
  }

  get signedExtensions() {
    return this.get('signedExtensions');
  }

  get tip() {
    return this.get('tip');
  }

  get version() {
    return this.get('version');
  }
  /**
   * @description Creates an representation of the structure as an ISignerPayload JSON
   */


  toPayload() {
    return SignerPayload_objectSpread(SignerPayload_objectSpread({}, Object.keys(this._extraTypes).reduce((map, key) => {
      map[key] = this.get(key).toHex();
      return map;
    }, {})), {}, {
      // the known defaults as managed explicitly and has different
      // formatting in cases, e.g. we mostly expose a hex format here
      address: this.address.toString(),
      blockHash: this.blockHash.toHex(),
      blockNumber: this.blockNumber.toHex(),
      era: this.era.toHex(),
      genesisHash: this.genesisHash.toHex(),
      method: this.method.toHex(),
      nonce: this.nonce.toHex(),
      signedExtensions: this.signedExtensions.map(e => e.toString()),
      specVersion: this.runtimeVersion.specVersion.toHex(),
      tip: this.tip.toHex(),
      transactionVersion: this.runtimeVersion.transactionVersion.toHex(),
      version: this.version.toNumber()
    });
  }
  /**
   * @description Creates a representation of the payload in raw Exrinsic form
   */


  toRaw() {
    const payload = this.toPayload();
    const data = (0,index_js_.u8aToHex)(this.registry.createType('ExtrinsicPayload', payload, {
      version: payload.version
    }) // NOTE Explicitly pass the bare flag so the method is encoded un-prefixed (non-decodable, for signing only)
    .toU8a({
      method: true
    }));
    return {
      address: payload.address,
      data,
      type: 'payload'
    };
  }

}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/extrinsic/v4/Extrinsic.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0


const EXTRINSIC_VERSION = 4;

/**
 * @name GenericExtrinsicV4
 * @description
 * The third generation of compact extrinsics
 */
class GenericExtrinsicV4 extends Struct/* Struct */.A {
  constructor(registry, value, {
    isSigned
  } = {}) {
    super(registry, {
      signature: 'ExtrinsicSignatureV4',
      // eslint-disable-next-line sort-keys
      method: 'Call'
    }, GenericExtrinsicV4.decodeExtrinsic(registry, value, isSigned));
  }
  /** @internal */


  static decodeExtrinsic(registry, value, isSigned = false) {
    if (value instanceof GenericExtrinsicV4) {
      return value;
    } else if (value instanceof registry.createClass('Call')) {
      return {
        method: value
      };
    } else if ((0,index_js_.isU8a)(value)) {
      // here we decode manually since we need to pull through the version information
      const signature = registry.createType('ExtrinsicSignatureV4', value, {
        isSigned
      });
      const method = registry.createType('Call', value.subarray(signature.encodedLength));
      return {
        method,
        signature
      };
    }

    return value || {};
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */


  get encodedLength() {
    return this.toU8a().length;
  }
  /**
   * @description The [[Call]] this extrinsic wraps
   */


  get method() {
    return this.get('method');
  }
  /**
   * @description The [[ExtrinsicSignatureV4]]
   */


  get signature() {
    return this.get('signature');
  }
  /**
   * @description The version for the signature
   */


  get version() {
    return EXTRINSIC_VERSION;
  }
  /**
   * @description Add an [[ExtrinsicSignatureV4]] to the extrinsic (already generated)
   */


  addSignature(signer, signature, payload) {
    this.signature.addSignature(signer, signature, payload);
    return this;
  }
  /**
   * @description Sign the extrinsic with a specific keypair
   */


  sign(account, options) {
    this.signature.sign(this.method, account, options);
    return this;
  }
  /**
   * @describe Adds a fake signature to the extrinsic
   */


  signFake(signer, options) {
    this.signature.signFake(this.method, signer, options);
    return this;
  }

}
// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase.js
var classPrivateFieldLooseBase = __webpack_require__(89539);
// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey.js
var classPrivateFieldLooseKey = __webpack_require__(38879);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/extrinsic/util.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// a helper function for both types of payloads, Raw and metadata-known
function sign(registry, signerPair, u8a, options) {
  const encoded = u8a.length > 256 ? registry.hash(u8a) : u8a;
  return signerPair.sign(encoded, options);
}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/extrinsic/v4/ExtrinsicPayload.js




function ExtrinsicPayload_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function ExtrinsicPayload_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ExtrinsicPayload_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ExtrinsicPayload_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0



/**
 * @name GenericExtrinsicPayloadV4
 * @description
 * A signing payload for an [[Extrinsic]]. For the final encoding, it is variable length based
 * on the contents included
 */

var _signOptions = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("signOptions");

class GenericExtrinsicPayloadV4 extends Struct/* Struct */.A {
  constructor(registry, value) {
    super(registry, ExtrinsicPayload_objectSpread(ExtrinsicPayload_objectSpread({
      method: 'Bytes'
    }, registry.getSignedExtensionTypes()), registry.getSignedExtensionExtra()), value); // Do detection for the type of extrinsic, in the case of MultiSignature this is an
    // enum, in the case of AnySignature, this is a Hash only (may be 64 or 65 bytes)

    Object.defineProperty(this, _signOptions, {
      writable: true,
      value: void 0
    });
    (0,classPrivateFieldLooseBase/* default */.Z)(this, _signOptions)[_signOptions] = {
      withType: registry.createType('ExtrinsicSignature') instanceof Enum/* Enum */.x
    };
  }
  /**
   * @description The block [[Hash]] the signature applies to (mortal/immortal)
   */


  get blockHash() {
    return this.get('blockHash');
  }
  /**
   * @description The [[ExtrinsicEra]]
   */


  get era() {
    return this.get('era');
  }
  /**
   * @description The genesis [[Hash]] the signature applies to (mortal/immortal)
   */


  get genesisHash() {
    return this.get('genesisHash');
  }
  /**
   * @description The [[Bytes]] contained in the payload
   */


  get method() {
    return this.get('method');
  }
  /**
   * @description The [[Index]]
   */


  get nonce() {
    return this.get('nonce');
  }
  /**
   * @description The specVersion for this signature
   */


  get specVersion() {
    return this.get('specVersion');
  }
  /**
   * @description The tip [[Balance]]
   */


  get tip() {
    return this.get('tip');
  }
  /**
   * @description The transactionVersion for this signature
   */


  get transactionVersion() {
    return this.get('transactionVersion');
  }
  /**
   * @description Sign the payload with the keypair
   */


  sign(signerPair) {
    // NOTE The `toU8a({ method: true })` argument is absolutely critical - we don't want the method (Bytes)
    // to have the length prefix included. This means that the data-as-signed is un-decodable,
    // but is also doesn't need the extra information, only the pure data (and is not decoded)
    // ... The same applies to V1..V3, if we have a V5, carry move this comment to latest
    return sign(this.registry, signerPair, this.toU8a({
      method: true
    }), (0,classPrivateFieldLooseBase/* default */.Z)(this, _signOptions)[_signOptions]);
  }

}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/extrinsic/v4/ExtrinsicSignature.js




function ExtrinsicSignature_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function ExtrinsicSignature_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ExtrinsicSignature_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ExtrinsicSignature_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0





const FAKE_NONE = new Uint8Array();
const FAKE_SOME = new Uint8Array([1]);

function toAddress(registry, address) {
  return registry.createType('Address', (0,index_js_.isU8a)(address) ? (0,index_js_.u8aToHex)(address) : address);
}
/**
 * @name GenericExtrinsicSignatureV4
 * @description
 * A container for the [[Signature]] associated with a specific [[Extrinsic]]
 */


var _fakePrefix = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("fakePrefix");

class GenericExtrinsicSignatureV4 extends Struct/* Struct */.A {
  constructor(registry, value, {
    isSigned
  } = {}) {
    super(registry, ExtrinsicSignature_objectSpread({
      signer: 'Address',
      // eslint-disable-next-line sort-keys
      signature: 'ExtrinsicSignature'
    }, registry.getSignedExtensionTypes()), GenericExtrinsicSignatureV4.decodeExtrinsicSignature(value, isSigned));
    Object.defineProperty(this, _fakePrefix, {
      writable: true,
      value: void 0
    });
    (0,classPrivateFieldLooseBase/* default */.Z)(this, _fakePrefix)[_fakePrefix] = registry.createType('ExtrinsicSignature') instanceof Enum/* Enum */.x ? FAKE_SOME : FAKE_NONE;
  }
  /** @internal */


  static decodeExtrinsicSignature(value, isSigned = false) {
    if (!value) {
      return constants/* EMPTY_U8A */.pW;
    } else if (value instanceof GenericExtrinsicSignatureV4) {
      return value;
    }

    return isSigned ? value : constants/* EMPTY_U8A */.pW;
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */


  get encodedLength() {
    return this.isSigned ? super.encodedLength : 0;
  }
  /**
   * @description `true` if the signature is valid
   */


  get isSigned() {
    return !this.signature.isEmpty;
  }
  /**
   * @description The [[ExtrinsicEra]] (mortal or immortal) this signature applies to
   */


  get era() {
    return this.get('era');
  }
  /**
   * @description The [[Index]] for the signature
   */


  get nonce() {
    return this.get('nonce');
  }
  /**
   * @description The actual [[EcdsaSignature]], [[Ed25519Signature]] or [[Sr25519Signature]]
   */


  get signature() {
    // the second case here is when we don't have an enum signature, treat as raw
    return this.multiSignature.value || this.multiSignature;
  }
  /**
   * @description The raw [[ExtrinsicSignature]]
   */


  get multiSignature() {
    return this.get('signature');
  }
  /**
   * @description The [[Address]] that signed
   */


  get signer() {
    return this.get('signer');
  }
  /**
   * @description The [[Balance]] tip
   */


  get tip() {
    return this.get('tip');
  }

  _injectSignature(signer, signature, {
    era,
    nonce,
    tip
  }) {
    this.set('era', era);
    this.set('nonce', nonce);
    this.set('signer', signer);
    this.set('signature', signature);
    this.set('tip', tip);
    return this;
  }
  /**
   * @description Adds a raw signature
   */


  addSignature(signer, signature, payload) {
    return this._injectSignature(toAddress(this.registry, signer), this.registry.createType('ExtrinsicSignature', signature), new GenericExtrinsicPayloadV4(this.registry, payload));
  }
  /**
   * @description Creates a payload from the supplied options
   */


  createPayload(method, {
    blockHash,
    era,
    genesisHash,
    nonce,
    runtimeVersion: {
      specVersion,
      transactionVersion
    },
    tip
  }) {
    return new GenericExtrinsicPayloadV4(this.registry, {
      blockHash,
      era: era || constants/* IMMORTAL_ERA */.ws,
      genesisHash,
      method: method.toHex(),
      nonce,
      specVersion,
      tip: tip || 0,
      transactionVersion: transactionVersion || 0
    });
  }
  /**
   * @description Generate a payload and applies the signature from a keypair
   */


  sign(method, account, options) {
    (0,index_js_.assert)(account && account.addressRaw, () => `Expected a valid keypair for signing, found ${(0,index_js_.stringify)(account)}`);
    const signer = toAddress(this.registry, account.addressRaw);
    const payload = this.createPayload(method, options);
    const signature = this.registry.createType('ExtrinsicSignature', payload.sign(account));
    return this._injectSignature(signer, signature, payload);
  }
  /**
   * @description Generate a payload and applies a fake signature
   */


  signFake(method, address, options) {
    (0,index_js_.assert)(address, () => `Expected a valid address for signing, found ${(0,index_js_.stringify)(address)}`);
    const signer = toAddress(this.registry, address);
    const payload = this.createPayload(method, options);
    const signature = this.registry.createType('ExtrinsicSignature', (0,index_js_.u8aConcat)((0,classPrivateFieldLooseBase/* default */.Z)(this, _fakePrefix)[_fakePrefix], new Uint8Array(64).fill(0x42)));
    return this._injectSignature(signer, signature, payload);
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */


  toU8a(isBare) {
    return this.isSigned ? super.toU8a(isBare) : constants/* EMPTY_U8A */.pW;
  }

}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/extrinsic/v4/index.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0



;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/extrinsic/index.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0







// EXTERNAL MODULE: consume shared module (default) @polkadot/util-crypto@^6.7.1 (strict) (fallback: ../../node_modules/@polkadot/util-crypto/index.js)
var util_crypto_index_js_ = __webpack_require__(21050);
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/codec/U8aFixed.js
var U8aFixed = __webpack_require__(8229);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/ethereum/AccountId.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0



/** @internal */

function decodeAccountId(value) {
  if ((0,index_js_.isU8a)(value) || Array.isArray(value)) {
    return (0,index_js_.u8aToU8a)(value);
  } else if ((0,index_js_.isHex)(value) || (0,util_crypto_index_js_.isEthereumAddress)(value)) {
    return (0,index_js_.hexToU8a)(value.toString());
  } else if ((0,index_js_.isString)(value)) {
    return (0,index_js_.u8aToU8a)(value.toString());
  }

  return value;
}
/**
 * @name GenericEthereumAccountId
 * @description
 * A wrapper around an Ethereum-compatible AccountId. Since we are dealing with
 * underlying addresses (20 bytes in length), we extend from U8aFixed which is
 * just a Uint8Array wrapper with a fixed length.
 */


class GenericEthereumAccountId extends U8aFixed/* U8aFixed */.g {
  constructor(registry, value = new Uint8Array()) {
    super(registry, decodeAccountId(value), 160);
  }

  static encode(value) {
    return (0,util_crypto_index_js_.ethereumEncode)(value);
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */


  eq(other) {
    return super.eq(decodeAccountId(other));
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */


  toHuman() {
    return this.toJSON();
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */


  toJSON() {
    return this.toString();
  }
  /**
   * @description Returns the string representation of the value
   */


  toString() {
    return GenericEthereumAccountId.encode(this);
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return 'AccountId';
  }

}
// EXTERNAL MODULE: ../../node_modules/bn.js/lib/bn.js
var bn = __webpack_require__(62197);
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/primitive/U32.js
var U32 = __webpack_require__(65558);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/generic/AccountIndex.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0




const PREFIX_1BYTE = 0xef;
const PREFIX_2BYTE = 0xfc;
const PREFIX_4BYTE = 0xfd;
const PREFIX_8BYTE = 0xfe;
const MAX_1BYTE = new bn(PREFIX_1BYTE);
const MAX_2BYTE = new bn(1).shln(16);
const MAX_4BYTE = new bn(1).shln(32);
/** @internal */

function decodeAccountIndex(value) {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  if (value instanceof GenericAccountIndex) {
    // `value.toBn()` on AccountIndex returns a pure BN (i.e. not an
    // AccountIndex), which has the initial `toString()` implementation.
    return value.toBn();
  } else if ((0,index_js_.isBn)(value) || (0,index_js_.isNumber)(value) || (0,index_js_.isHex)(value) || (0,index_js_.isU8a)(value) || (0,index_js_.isBigInt)(value)) {
    return value;
  }

  return decodeAccountIndex((0,util_crypto_index_js_.decodeAddress)(value));
}
/**
 * @name GenericAccountIndex
 * @description
 * A wrapper around an AccountIndex, which is a shortened, variable-length encoding
 * for an Account. We extends from [[U32]] to provide the number-like properties.
 */


class GenericAccountIndex extends U32/* u32 */.J {
  constructor(registry, value = new bn(0)) {
    super(registry, decodeAccountIndex(value));
  }

  static calcLength(_value) {
    const value = (0,index_js_.bnToBn)(_value);

    if (value.lte(MAX_1BYTE)) {
      return 1;
    } else if (value.lt(MAX_2BYTE)) {
      return 2;
    } else if (value.lt(MAX_4BYTE)) {
      return 4;
    }

    return 8;
  }

  static readLength(input) {
    const first = input[0];

    if (first === PREFIX_2BYTE) {
      return [1, 2];
    } else if (first === PREFIX_4BYTE) {
      return [1, 4];
    } else if (first === PREFIX_8BYTE) {
      return [1, 8];
    }

    return [0, 1];
  }

  static writeLength(input) {
    switch (input.length) {
      case 2:
        return new Uint8Array([PREFIX_2BYTE]);

      case 4:
        return new Uint8Array([PREFIX_4BYTE]);

      case 8:
        return new Uint8Array([PREFIX_8BYTE]);

      default:
        return new Uint8Array([]);
    }
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */


  eq(other) {
    // shortcut for BN or Number, don't create an object
    if ((0,index_js_.isBn)(other) || (0,index_js_.isNumber)(other)) {
      return super.eq(other);
    } // convert and compare


    return super.eq(this.registry.createType('AccountIndex', other));
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */


  toHuman() {
    return this.toJSON();
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */


  toJSON() {
    return this.toString();
  }
  /**
   * @description Returns the string representation of the value
   */


  toString() {
    const length = GenericAccountIndex.calcLength(this);
    return (0,util_crypto_index_js_.encodeAddress)(this.toU8a().subarray(0, length), this.registry.chainSS58);
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return 'AccountIndex';
  }

}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/ethereum/LookupSource.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0




 // eslint-disable-next-line no-use-before-define

const ACCOUNT_ID_PREFIX = new Uint8Array([0xff]);
/** @internal */

function decodeString(registry, value) {
  const decoded = (0,util_crypto_index_js_.decodeAddress)(value);
  return decoded.length === 20 ? registry.createType('EthereumAccountId', decoded) : registry.createType('AccountIndex', (0,index_js_.u8aToBn)(decoded, true));
}
/** @internal */


function decodeU8a(registry, value) {
  // This allows us to instantiate an address with a raw publicKey. Do this first before
  // we checking the first byte, otherwise we may split an already-existent valid address
  if (value.length === 20) {
    return registry.createType('EthereumAccountId', value);
  } else if (value[0] === 0xff) {
    return registry.createType('EthereumAccountId', value.subarray(1));
  }

  const [offset, length] = GenericAccountIndex.readLength(value);
  return registry.createType('AccountIndex', (0,index_js_.u8aToBn)(value.subarray(offset, offset + length), true));
}
/**
 * @name GenericEthereumLookupSource
 * @description
 * A wrapper around an EthereumAccountId and/or AccountIndex that is encoded with a prefix.
 * Since we are dealing with underlying publicKeys (or shorter encoded addresses),
 * we extend from Base with an AccountId/AccountIndex wrapper. Basically the Address
 * is encoded as `[ <prefix-byte>, ...publicKey/...bytes ]` as per spec
 */


class GenericEthereumLookupSource extends Base {
  constructor(registry, value = new Uint8Array()) {
    super(registry, GenericEthereumLookupSource._decodeAddress(registry, value));
  }
  /** @internal */


  static _decodeAddress(registry, value) {
    return value instanceof GenericEthereumLookupSource ? value._raw : value instanceof GenericEthereumAccountId || value instanceof GenericAccountIndex ? value : (0,index_js_.isBn)(value) || (0,index_js_.isNumber)(value) || (0,index_js_.isBigInt)(value) ? registry.createType('AccountIndex', value) : Array.isArray(value) || (0,index_js_.isHex)(value) || (0,index_js_.isU8a)(value) ? decodeU8a(registry, (0,index_js_.u8aToU8a)(value)) : decodeString(registry, value);
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */


  get encodedLength() {
    const rawLength = this._rawLength;
    return rawLength + ( // for 1 byte AccountIndexes, we are not adding a specific prefix
    rawLength > 1 ? 1 : 0);
  }
  /**
   * @description The length of the raw value, either AccountIndex or AccountId
   */


  get _rawLength() {
    return this._raw instanceof GenericAccountIndex ? GenericAccountIndex.calcLength(this._raw) : this._raw.encodedLength;
  }
  /**
   * @description Returns a hex string representation of the value
   */


  toHex() {
    return (0,index_js_.u8aToHex)(this.toU8a());
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return 'Address';
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */


  toU8a(isBare) {
    const encoded = this._raw.toU8a().subarray(0, this._rawLength);

    return isBare ? encoded : (0,index_js_.u8aConcat)(this._raw instanceof GenericAccountIndex ? GenericAccountIndex.writeLength(encoded) : ACCOUNT_ID_PREFIX, encoded);
  }

}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/ethereum/index.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0


;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/generic/AccountId.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0



/** @internal */

function AccountId_decodeAccountId(value) {
  if (!value) {
    return new Uint8Array();
  } else if ((0,index_js_.isU8a)(value) || Array.isArray(value)) {
    return (0,index_js_.u8aToU8a)(value);
  } else if ((0,index_js_.isString)(value)) {
    return (0,index_js_.isHex)(value) ? (0,index_js_.hexToU8a)(value.toString()) : (0,util_crypto_index_js_.decodeAddress)(value.toString());
  }

  throw new Error(`Unknown type passed to AccountId constructor, found typeof ${typeof value}`);
}
/**
 * @name GenericAccountId
 * @description
 * A wrapper around an AccountId/PublicKey representation. Since we are dealing with
 * underlying PublicKeys (32 bytes in length), we extend from U8aFixed which is
 * just a Uint8Array wrapper with a fixed length.
 */


class GenericAccountId extends U8aFixed/* U8aFixed */.g {
  constructor(registry, value) {
    const decoded = AccountId_decodeAccountId(value); // Part of stream containing >= 32 bytes or a all empty (defaults)

    (0,index_js_.assert)(decoded.length >= 32 || !decoded.some(b => b), () => `Invalid AccountId provided, expected 32 bytes, found ${decoded.length}`);
    super(registry, decoded, 256);
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */


  eq(other) {
    return super.eq(AccountId_decodeAccountId(other));
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */


  toHuman() {
    return this.toJSON();
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */


  toJSON() {
    return this.toString();
  }
  /**
   * @description Returns the string representation of the value
   */


  toString() {
    return (0,util_crypto_index_js_.encodeAddress)(this, this.registry.chainSS58);
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return 'AccountId';
  }

}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/generic/Block.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0


/**
 * @name GenericBlock
 * @description
 * A block encoded with header and extrinsics
 */
class GenericBlock extends Struct/* Struct */.A {
  constructor(registry, value) {
    super(registry, {
      header: 'Header',
      // eslint-disable-next-line sort-keys
      extrinsics: 'Vec<Extrinsic>'
    }, value);
  }
  /**
   * @description Encodes a content [[Hash]] for the block
   */


  get contentHash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description The [[Extrinsic]] contained in the block
   */


  get extrinsics() {
    return this.get('extrinsics');
  }
  /**
   * @description Block/header [[Hash]]
   */


  get hash() {
    return this.header.hash;
  }
  /**
   * @description The [[Header]] of the block
   */


  get header() {
    return this.get('header');
  }

}
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/create/createClass.js
var createClass = __webpack_require__(78698);
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/create/getTypeDef.js
var getTypeDef = __webpack_require__(53284);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/generic/Call.js


function Call_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Call_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Call_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Call_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0






/**
 * Get a mapping of `argument name -> argument type` for the function, from
 * its metadata.
 *
 * @param meta - The function metadata used to get the definition.
 * @internal
 */
function getArgsDef(registry, meta) {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return GenericCall.filterOrigin(meta).reduce((result, {
    name,
    type
  }) => {
    const Type = (0,createClass/* getTypeClass */.S_)(registry, (0,getTypeDef/* getTypeDef */.s)(type));
    result[name.toString()] = Type;
    return result;
  }, {});
}
/** @internal */


function decodeCallViaObject(registry, value, _meta) {
  // we only pass args/methodsIndex out
  const {
    args,
    callIndex
  } = value; // Get the correct lookupIndex
  // eslint-disable-next-line @typescript-eslint/no-use-before-define

  const lookupIndex = callIndex instanceof GenericCallIndex ? callIndex.toU8a() : callIndex; // Find metadata with callIndex

  const meta = _meta || registry.findMetaCall(lookupIndex).meta;

  return {
    args,
    argsDef: getArgsDef(registry, meta),
    callIndex,
    meta
  };
}
/** @internal */


function decodeCallViaU8a(registry, value, _meta) {
  // We need 2 bytes for the callIndex
  const callIndex = new Uint8Array(2);
  callIndex.set(value.subarray(0, 2), 0); // Find metadata with callIndex

  const meta = _meta || registry.findMetaCall(callIndex).meta;

  return {
    args: value.subarray(2),
    argsDef: getArgsDef(registry, meta),
    callIndex,
    meta
  };
}
/**
 * Decode input to pass into constructor.
 *
 * @param value - Value to decode, one of:
 * - hex
 * - Uint8Array
 * - {@see DecodeMethodInput}
 * @param _meta - Metadata to use, so that `injectMethods` lookup is not
 * necessary.
 * @internal
 */


function decodeCall(registry, value = new Uint8Array(), _meta) {
  if ((0,index_js_.isHex)(value) || (0,index_js_.isU8a)(value)) {
    return decodeCallViaU8a(registry, (0,index_js_.u8aToU8a)(value), _meta);
  } else if ((0,index_js_.isObject)(value) && value.callIndex && value.args) {
    return decodeCallViaObject(registry, value, _meta);
  }

  throw new Error(`Call: Cannot decode value '${value}' of type ${typeof value}`);
}
/**
 * @name GenericCallIndex
 * @description
 * A wrapper around the `[sectionIndex, methodIndex]` value that uniquely identifies a method
 */


class GenericCallIndex extends U8aFixed/* U8aFixed */.g {
  constructor(registry, value) {
    super(registry, value, 16);
  }

}
/**
 * @name GenericCall
 * @description
 * Extrinsic function descriptor
 */

class GenericCall extends Struct/* Struct */.A {
  constructor(registry, value, meta) {
    const decoded = decodeCall(registry, value, meta);

    try {
      super(registry, {
        callIndex: GenericCallIndex,
        // eslint-disable-next-line sort-keys
        args: Struct/* Struct.with */.A.with(decoded.argsDef)
      }, decoded);
      this._meta = void 0;
    } catch (error) {
      let method = 'unknown.unknown';

      try {
        const c = registry.findMetaCall(decoded.callIndex);
        method = `${c.section}.${c.method}`;
      } catch (error) {// ignore
      }

      throw new Error(`Call: failed decoding ${method}:: ${error.message}`);
    }

    this._meta = decoded.meta;
  } // If the extrinsic function has an argument of type `Origin`, we ignore it


  static filterOrigin(meta) {
    // FIXME should be `arg.type !== Origin`, but doesn't work...
    return meta ? meta.args.filter(({
      type
    }) => type.toString() !== 'Origin') : [];
  }
  /**
   * @description The arguments for the function call
   */


  get args() {
    // FIXME This should return a Struct instead of an Array
    return [...this.get('args').values()];
  }
  /**
   * @description The argument definitions
   */


  get argsDef() {
    return getArgsDef(this.registry, this.meta);
  }
  /**
   * @description The encoded `[sectionIndex, methodIndex]` identifier
   */


  get callIndex() {
    return this.get('callIndex').toU8a();
  }
  /**
   * @description The encoded data
   */


  get data() {
    return this.get('args').toU8a();
  }
  /**
   * @description The [[FunctionMetadata]]
   */


  get meta() {
    return this._meta;
  }
  /**
   * @description Returns the name of the method
   */


  get method() {
    return this.registry.findMetaCall(this.callIndex).method;
  }
  /**
   * @description Returns the module containing the method
   */


  get section() {
    return this.registry.findMetaCall(this.callIndex).section;
  }
  /**
   * @description Checks if the source matches this in type
   */


  is(other) {
    return other.callIndex[0] === this.callIndex[0] && other.callIndex[1] === this.callIndex[1];
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */


  toHuman(isExpanded) {
    var _call, _call2;

    let call;

    try {
      call = this.registry.findMetaCall(this.callIndex);
    } catch (error) {// swallow
    }

    return Call_objectSpread({
      args: this.args.map(arg => arg.toHuman(isExpanded)),
      // args: this.args.map((arg, index) => call
      //   ? { [call.meta.args[index].name.toString()]: arg.toHuman(isExpanded) }
      //   : arg.toHuman(isExpanded)
      // ),
      // callIndex: u8aToHex(this.callIndex),
      method: (_call = call) === null || _call === void 0 ? void 0 : _call.method,
      section: (_call2 = call) === null || _call2 === void 0 ? void 0 : _call2.section
    }, isExpanded && call ? {
      documentation: call.meta.documentation.map(d => d.toString())
    } : {});
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return 'Call';
  }

}
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/codec/Json.js
var Json = __webpack_require__(42709);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/generic/ChainProperties.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0



function createValue(registry, type, value, asArray = true) {
  // We detect codec here as well - when found, generally this is constructed from itself
  if (value && (0,index_js_.isFunction)(value.unwrapOrDefault)) {
    return value;
  }

  return registry.createType(type, asArray ? (0,index_js_.isNull)(value) || (0,index_js_.isUndefined)(value) ? null : Array.isArray(value) ? value : [value] : value);
}

function decodeValue(registry, key, value) {
  return key === 'ss58Format' ? createValue(registry, 'Option<u32>', value, false) : key === 'tokenDecimals' ? createValue(registry, 'Option<Vec<u32>>', value) : key === 'tokenSymbol' ? createValue(registry, 'Option<Vec<Text>>', value) : value;
}

function decode(registry, value) {
  return ( // allow decoding from a map as well (ourselves)
  value && (0,index_js_.isFunction)(value.entries) ? [...value.entries()] : Object.entries(value || {})).reduce((all, [key, value]) => {
    all[key] = decodeValue(registry, key, value);
    return all;
  }, {
    ss58Format: registry.createType('Option<u32>'),
    tokenDecimals: registry.createType('Option<Vec<u32>>'),
    tokenSymbol: registry.createType('Option<Vec<Text>>')
  });
}

class GenericChainProperties extends Json/* Json */.P {
  constructor(registry, value) {
    super(registry, decode(registry, value));
  }
  /**
   * @description The chain ss58Format
   */


  get ss58Format() {
    return this.get('ss58Format');
  }
  /**
   * @description The decimals for each of the tokens
   */


  get tokenDecimals() {
    return this.get('tokenDecimals');
  }
  /**
   * @description The symbols for the tokens
   */


  get tokenSymbol() {
    return this.get('tokenSymbol');
  }

}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/generic/ConsensusEngineId.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0



const CID_AURA = (0,index_js_.stringToU8a)('aura');
const CID_BABE = (0,index_js_.stringToU8a)('BABE');
const CID_GRPA = (0,index_js_.stringToU8a)('FRNK');
const CID_POW = (0,index_js_.stringToU8a)('pow_');
/**
 * @name GenericConsensusEngineId
 * @description
 * A 4-byte identifier identifying the engine
 */

class GenericConsensusEngineId extends U8aFixed/* U8aFixed */.g {
  constructor(registry, value) {
    super(registry, (0,index_js_.isNumber)(value) ? (0,index_js_.bnToU8a)(value, {
      isLe: false
    }) : value, 32);
  }
  /**
   * @description `true` if the engine matches aura
   */


  get isAura() {
    return this.eq(CID_AURA);
  }
  /**
   * @description `true` is the engine matches babe
   */


  get isBabe() {
    return this.eq(CID_BABE);
  }
  /**
   * @description `true` is the engine matches grandpa
   */


  get isGrandpa() {
    return this.eq(CID_GRPA);
  }
  /**
   * @description `true` is the engine matches pow
   */


  get isPow() {
    return this.eq(CID_POW);
  }

  _getAuraAuthor(bytes, sessionValidators) {
    return sessionValidators[this.registry.createType('RawAuraPreDigest', bytes.toU8a(true)).slotNumber.mod(new bn(sessionValidators.length)).toNumber()];
  }

  _getBabeAuthor(bytes, sessionValidators) {
    const digest = this.registry.createType('RawBabePreDigestCompat', bytes.toU8a(true));
    return sessionValidators[digest.value.toNumber()];
  }

  _getBytesAsAuthor(bytes) {
    return this.registry.createType('AccountId', bytes);
  }
  /**
   * @description From the input bytes, decode into an author
   */


  extractAuthor(bytes, sessionValidators) {
    if (sessionValidators !== null && sessionValidators !== void 0 && sessionValidators.length) {
      if (this.isAura) {
        return this._getAuraAuthor(bytes, sessionValidators);
      } else if (this.isBabe) {
        return this._getBabeAuthor(bytes, sessionValidators);
      }
    } // For pow & Moonbeam, the bytes are the actual author


    if (this.isPow || bytes.length === 20) {
      return this._getBytesAsAuthor(bytes);
    }

    return undefined;
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */


  toHuman() {
    return this.toString();
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return 'ConsensusEngineId';
  }
  /**
   * @description Override the default toString to return a 4-byte string
   */


  toString() {
    return this.isAscii ? (0,index_js_.u8aToString)(this) : (0,index_js_.u8aToHex)(this);
  }

}
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/generic/Event.js
var Event = __webpack_require__(55329);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/generic/LookupSource.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0




 // eslint-disable-next-line no-use-before-define

const LookupSource_ACCOUNT_ID_PREFIX = new Uint8Array([0xff]);
/** @internal */

function LookupSource_decodeString(registry, value) {
  const decoded = (0,util_crypto_index_js_.decodeAddress)(value);
  return decoded.length === 32 ? registry.createType('AccountId', decoded) : registry.createType('AccountIndex', (0,index_js_.u8aToBn)(decoded, true));
}
/** @internal */


function LookupSource_decodeU8a(registry, value) {
  // This allows us to instantiate an address with a raw publicKey. Do this first before
  // we checking the first byte, otherwise we may split an already-existent valid address
  if (value.length === 32) {
    return registry.createType('AccountId', value);
  } else if (value[0] === 0xff) {
    return registry.createType('AccountId', value.subarray(1));
  }

  const [offset, length] = GenericAccountIndex.readLength(value);
  return registry.createType('AccountIndex', (0,index_js_.u8aToBn)(value.subarray(offset, offset + length), true));
}
/**
 * @name LookupSource
 * @description
 * A wrapper around an AccountId and/or AccountIndex that is encoded with a prefix.
 * Since we are dealing with underlying publicKeys (or shorter encoded addresses),
 * we extend from Base with an AccountId/AccountIndex wrapper. Basically the Address
 * is encoded as `[ <prefix-byte>, ...publicKey/...bytes ]` as per spec
 */


class GenericLookupSource extends Base {
  constructor(registry, value = new Uint8Array()) {
    super(registry, GenericLookupSource._decodeAddress(registry, value));
  }
  /** @internal */


  static _decodeAddress(registry, value) {
    return value instanceof GenericLookupSource ? value._raw : value instanceof GenericAccountId || value instanceof GenericAccountIndex ? value : (0,index_js_.isBn)(value) || (0,index_js_.isNumber)(value) || (0,index_js_.isBigInt)(value) ? registry.createType('AccountIndex', value) : Array.isArray(value) || (0,index_js_.isHex)(value) || (0,index_js_.isU8a)(value) ? LookupSource_decodeU8a(registry, (0,index_js_.u8aToU8a)(value)) : LookupSource_decodeString(registry, value);
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */


  get encodedLength() {
    const rawLength = this._rawLength;
    return rawLength + ( // for 1 byte AccountIndexes, we are not adding a specific prefix
    rawLength > 1 ? 1 : 0);
  }
  /**
   * @description The length of the raw value, either AccountIndex or AccountId
   */


  get _rawLength() {
    return this._raw instanceof GenericAccountIndex ? GenericAccountIndex.calcLength(this._raw) : this._raw.encodedLength;
  }
  /**
   * @description Returns a hex string representation of the value
   */


  toHex() {
    return (0,index_js_.u8aToHex)(this.toU8a());
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return 'Address';
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */


  toU8a(isBare) {
    const encoded = this._raw.toU8a().subarray(0, this._rawLength);

    return isBare ? encoded : (0,index_js_.u8aConcat)(this._raw instanceof GenericAccountIndex ? GenericAccountIndex.writeLength(encoded) : LookupSource_ACCOUNT_ID_PREFIX, encoded);
  }

}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/generic/MultiAddress.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0






function MultiAddress_decodeU8a(registry, u8a) {
  if ([0, 32].includes(u8a.length)) {
    return {
      Id: u8a
    };
  } else if (u8a.length === 20) {
    return {
      Address20: u8a
    };
  } else if (u8a.length <= 8) {
    return {
      Index: registry.createType('AccountIndex', u8a).toNumber()
    };
  }

  return u8a;
}

function decodeMultiAny(registry, value) {
  if (value instanceof GenericMultiAddress) {
    return value;
  } else if (value instanceof GenericAccountId) {
    return {
      Id: value
    };
  } else if (value instanceof GenericAccountIndex || (0,index_js_.isBn)(value) || (0,index_js_.isNumber)(value)) {
    return {
      Index: (0,index_js_.isNumber)(value) ? value : value.toNumber()
    };
  } else if ((0,index_js_.isString)(value)) {
    return MultiAddress_decodeU8a(registry, (0,util_crypto_index_js_.decodeAddress)(value.toString()));
  } else if ((0,index_js_.isU8a)(value)) {
    return MultiAddress_decodeU8a(registry, value);
  }

  return value;
}

class GenericMultiAddress extends Enum/* Enum */.x {
  constructor(registry, value) {
    super(registry, {
      Id: 'AccountId',
      Index: 'Compact<AccountIndex>',
      Raw: 'Bytes',
      // eslint-disable-next-line sort-keys
      Address32: 'H256',
      // eslint-disable-next-line sort-keys
      Address20: 'H160'
    }, decodeMultiAny(registry, value));
  }
  /**
   * @description Returns the string representation of the value
   */


  toString() {
    return this.value.toString();
  }

}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/primitive/Bool.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/** @internal */

function decodeBool(value) {
  if (value instanceof Boolean) {
    return value.valueOf();
  } else if ((0,index_js_.isU8a)(value)) {
    return value[0] === 1;
  }

  return !!value;
}
/**
 * @name bool
 * @description
 * Representation for a boolean value in the system. It extends the base JS `Boolean` class
 * @noInheritDoc
 */


class bool extends Boolean {
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(registry, value = false) {
    super(decodeBool(value));
    this.registry = void 0;
    this.createdAtHash = void 0;
    this.registry = registry;
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */


  get encodedLength() {
    return 1;
  }
  /**
   * @description returns a hash of the contents
   */


  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description Checks if the value is an empty value (true when it wraps false/default)
   */


  get isEmpty() {
    return this.isFalse;
  }
  /**
   * @description Checks if the value is an empty value (always false)
   */


  get isFalse() {
    return !this.isTrue;
  }
  /**
   * @description Checks if the value is an empty value (always false)
   */


  get isTrue() {
    return this.valueOf();
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */


  eq(other) {
    return this.valueOf() === (other instanceof Boolean ? other.valueOf() : other);
  }
  /**
   * @description Returns a hex string representation of the value
   */


  toHex() {
    return (0,index_js_.u8aToHex)(this.toU8a());
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */


  toHuman() {
    return this.toJSON();
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */


  toJSON() {
    return this.valueOf();
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return 'bool';
  }
  /**
   * @description Returns the string representation of the value
   */


  toString() {
    return this.toJSON().toString();
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  toU8a(isBare) {
    return new Uint8Array([this.valueOf() ? 1 : 0]);
  }

}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/generic/Vote.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0



// For votes, the topmost bit indicated aye/nay, the lower bits indicate the conviction
const AYE_BITS = 0b10000000;
const NAY_BITS = 0b00000000;
const CON_MASK = 0b01111111;
const DEF_CONV = 0b00000000; // the default conviction, None

/** @internal */

function decodeVoteBool(value) {
  return value ? new Uint8Array([AYE_BITS | DEF_CONV]) : new Uint8Array([NAY_BITS]);
}
/** @internal */


function decodeVoteU8a(value) {
  return value.length ? value.subarray(0, 1) : new Uint8Array([NAY_BITS]);
}
/** @internal */


function decodeVoteType(registry, value) {
  const vote = new bool(registry, value.aye).isTrue ? AYE_BITS : NAY_BITS;
  const conviction = registry.createType('Conviction', value.conviction || DEF_CONV);
  return new Uint8Array([vote | conviction.index]);
}
/** @internal */


function decodeVote(registry, value) {
  if ((0,index_js_.isUndefined)(value) || value instanceof Boolean || (0,index_js_.isBoolean)(value)) {
    return decodeVoteBool(new bool(registry, value).isTrue);
  } else if ((0,index_js_.isNumber)(value)) {
    return decodeVoteBool(value < 0);
  } else if ((0,index_js_.isU8a)(value)) {
    return decodeVoteU8a(value);
  }

  return decodeVoteType(registry, value);
}
/**
 * @name GenericVote
 * @description
 * A number of lock periods, plus a vote, one way or the other.
 */


class GenericVote extends U8aFixed/* U8aFixed */.g {
  constructor(registry, value) {
    // decoded is just 1 byte
    // Aye: Most Significant Bit
    // Conviction: 0000 - 0101
    const decoded = decodeVote(registry, value);
    super(registry, decoded, 8);
    this._aye = void 0;
    this._conviction = void 0;
    this._aye = (decoded[0] & AYE_BITS) === AYE_BITS;
    this._conviction = this.registry.createType('Conviction', decoded[0] & CON_MASK);
  }
  /**
   * @description returns a V2 conviction
   */


  get conviction() {
    return this._conviction;
  }
  /**
   * @description true if the wrapped value is a positive vote
   */


  get isAye() {
    return this._aye;
  }
  /**
   * @description true if the wrapped value is a negative vote
   */


  get isNay() {
    return !this.isAye;
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */


  toHuman(isExpanded) {
    return {
      conviction: this.conviction.toHuman(isExpanded),
      vote: this.isAye ? 'Aye' : 'Nay'
    };
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return 'Vote';
  }

}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/generic/index.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0











;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/primitive/BitVec.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0


/** @internal */

function decodeBitVecU8a(value) {
  if (!value || !value.length) {
    return [0, new Uint8Array()];
  } // handle all other Uint8Array inputs, these do have a length prefix which is the number of bits encoded


  const [offset, length] = (0,index_js_.compactFromU8a)(value);
  const total = offset + Math.ceil(length.toNumber() / 8);
  (0,index_js_.assert)(total <= value.length, () => `BitVec: required length less than remainder, expected at least ${total}, found ${value.length}`);
  return [length.toNumber(), value.subarray(offset, total)];
}
/** @internal */


function decodeBitVec(value) {
  if (Array.isArray(value) || (0,index_js_.isString)(value)) {
    const u8a = (0,index_js_.u8aToU8a)(value);
    return [u8a.length / 8, u8a];
  }

  return decodeBitVecU8a(value);
}
/**
 * @name BitVec
 * @description
 * A BitVec that represents an array of bits. The bits are however stored encoded. The difference between this
 * and a normal Bytes would be that the length prefix indicates the number of bits encoded, not the bytes
 */


class BitVec extends Raw/* Raw */.N {
  constructor(registry, value) {
    const [decodedLength, u8a] = decodeBitVec(value);
    super(registry, u8a);
    this._decodedLength = void 0;
    this._decodedLength = decodedLength;
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */


  get encodedLength() {
    return this.length + (0,index_js_.compactToU8a)(this._decodedLength).length;
  }

  toHuman() {
    return `0b${[...this.toU8a(true)].map(d => `00000000${d.toString(2)}`.slice(-8)).join('_')}`;
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return 'BitVec';
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */


  toU8a(isBare) {
    const bitVec = super.toU8a();
    return isBare ? bitVec : (0,index_js_.u8aConcat)((0,index_js_.compactToU8a)(this._decodedLength), bitVec);
  }

}
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/primitive/Bytes.js
var Bytes = __webpack_require__(14241);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/primitive/Data.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0



/** @internal */
function decodeDataU8a(registry, value) {
  const indicator = value[0];

  if (!indicator) {
    return [undefined, undefined];
  } else if (indicator >= 1 && indicator <= 33) {
    const length = indicator - 1;
    const data = value.subarray(1, length + 1); // in this case, we are passing a Raw back (since we have no length)

    return [registry.createType('Raw', data), 1];
  } else if (indicator >= 34 && indicator <= 37) {
    return [value.subarray(1, 32 + 1), indicator - 32]; // 34 becomes 2
  }

  throw new Error(`Unable to decode Data, invalid indicator byte ${indicator}`);
}
/** @internal */


function decodeData(registry, value) {
  if (!value) {
    return [undefined, undefined];
  } else if ((0,index_js_.isU8a)(value) || (0,index_js_.isString)(value)) {
    return decodeDataU8a(registry, (0,index_js_.u8aToU8a)(value));
  } // assume we have an Enum or an  object input, handle this via the normal Enum decoding


  return [value, undefined];
}
/**
 * @name Data
 * @description
 * A [[Data]] container with node, raw or hashed data
 */


class Data extends Enum/* Enum */.x {
  constructor(registry, value) {
    super(registry, {
      None: 'Null',
      // 0
      Raw: 'Bytes',
      // 1
      // eslint-disable-next-line sort-keys
      BlakeTwo256: 'H256',
      // 2
      Sha256: 'H256',
      // 3
      // eslint-disable-next-line sort-keys
      Keccak256: 'H256',
      // 4
      ShaThree256: 'H256' // 5

    }, ...decodeData(registry, value));
    (0,index_js_.assert)(!this.isRaw || this.asRaw.length <= 32, 'Data.Raw values are limited to a maximum length of 32 bytes');
  }

  get asBlakeTwo256() {
    return this.value;
  }

  get asKeccak256() {
    return this.value;
  }

  get asRaw() {
    return this.value;
  }

  get asSha256() {
    return this.value;
  }

  get asShaThree256() {
    return this.value;
  }

  get isBlakeTwo256() {
    return this.index === 2;
  }

  get isKeccak256() {
    return this.index === 4;
  }

  get isNone() {
    return this.index === 0;
  }

  get isRaw() {
    return this.index === 1;
  }

  get isSha256() {
    return this.index === 3;
  }

  get isShaThree256() {
    return this.index === 5;
  }
  /**
   * @description The encoded length
   */


  get encodedLength() {
    return this.toU8a().length;
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   */


  toU8a() {
    if (this.index === 0) {
      return new Uint8Array(1);
    } else if (this.index === 1) {
      // don't add the length, just the data
      const data = this.value.toU8a(true);
      const length = Math.min(data.length, 32);
      const u8a = new Uint8Array(length + 1);
      u8a.set([length + 1], 0);
      u8a.set(data.subarray(0, length), 1);
      return u8a;
    } // otherwise we simply have a hash


    const u8a = new Uint8Array(33);
    u8a.set([this.index + 32], 0);
    u8a.set(this.value.toU8a(), 1);
    return u8a;
  }

}
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/primitive/DoNotConstruct.js
var DoNotConstruct = __webpack_require__(92327);
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/codec/Int.js
var Int = __webpack_require__(11226);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/primitive/I8.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name i8
 * @description
 * An 8-bit signed integer
 */

class i8 extends Int/* Int.with */.J.with(8) {}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/primitive/I16.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name i16
 * @description
 * A 16-bit signed integer
 */

class i16 extends Int/* Int.with */.J.with(16) {}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/primitive/I32.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name i32
 * @description
 * A 32-bit signed integer
 */

class i32 extends Int/* Int.with */.J.with(32) {}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/primitive/I64.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name i64
 * @description
 * A 64-bit signed integer
 */

class i64 extends Int/* Int.with */.J.with(64) {}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/primitive/I128.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name i128
 * @description
 * A 128-bit signed integer
 */

class i128 extends Int/* Int.with */.J.with(128) {}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/primitive/I256.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name i256
 * @description
 * A 256-bit signed integer
 */

class i256 extends Int/* Int.with */.J.with(256) {}
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/primitive/Null.js
var Null = __webpack_require__(47261);
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/primitive/StorageKey.js
var StorageKey = __webpack_require__(53326);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/primitive/Text.js


// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0


const MAX_LENGTH = 128 * 1024;
/** @internal */

function decodeText(value) {
  if ((0,index_js_.isHex)(value)) {
    return (0,index_js_.u8aToString)((0,index_js_.hexToU8a)(value.toString()));
  } else if (value instanceof Uint8Array) {
    if (!value.length) {
      return '';
    } // for Raw, the internal buffer does not have an internal length
    // (the same applies in e.g. Bytes, where length is added at encoding-time)


    if (value instanceof Raw/* Raw */.N) {
      return (0,index_js_.u8aToString)(value);
    }

    const [offset, length] = (0,index_js_.compactFromU8a)(value);
    const total = offset + length.toNumber();
    (0,index_js_.assert)(length.lten(MAX_LENGTH), () => `Text: length ${length.toString()} exceeds ${MAX_LENGTH}`);
    (0,index_js_.assert)(total <= value.length, () => `Text: required length less than remainder, expected at least ${total}, found ${value.length}`);
    return (0,index_js_.u8aToString)(value.subarray(offset, total));
  }

  return value ? value.toString() : '';
}
/**
 * @name Text
 * @description
 * This is a string wrapper, along with the length. It is used both for strings as well
 * as items such as documentation. It simply extends the standard JS `String` built-in
 * object, inheriting all methods exposed from `String`.
 * @noInheritDoc
 */
// TODO
//   - Strings should probably be trimmed (docs do come through with extra padding)


var _override = /*#__PURE__*/(0,classPrivateFieldLooseKey/* default */.Z)("override");

class Text extends String {
  constructor(registry, value) {
    super(decodeText(value));
    this.registry = void 0;
    this.createdAtHash = void 0;
    Object.defineProperty(this, _override, {
      writable: true,
      value: null
    });
    this.registry = registry;
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */


  get encodedLength() {
    return this.toU8a().length;
  }
  /**
   * @description returns a hash of the contents
   */


  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description Checks if the value is an empty value
   */


  get isEmpty() {
    return this.length === 0;
  }
  /**
   * @description The length of the value
   */


  get length() {
    // only included here since we ignore inherited docs
    return super.length;
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */


  eq(other) {
    return (0,index_js_.isString)(other) ? this.toString() === other.toString() : false;
  }
  /**
   * @description Set an override value for this
   */


  setOverride(override) {
    (0,classPrivateFieldLooseBase/* default */.Z)(this, _override)[_override] = override;
  }
  /**
   * @description Returns a hex string representation of the value
   */


  toHex() {
    // like with Vec<u8>, when we are encoding to hex, we don't actually add
    // the length prefix (it is already implied by the actual string length)
    return (0,index_js_.u8aToHex)(this.toU8a(true));
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */


  toHuman() {
    return this.toJSON();
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */


  toJSON() {
    return this.toString();
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return 'Text';
  }
  /**
   * @description Returns the string representation of the value
   */


  toString() {
    return (0,classPrivateFieldLooseBase/* default */.Z)(this, _override)[_override] || super.toString();
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */


  toU8a(isBare) {
    // NOTE Here we use the super toString (we are not taking overrides into account,
    // rather encoding the original value the string was constructed with)
    const encoded = (0,index_js_.stringToU8a)(super.toString());
    return isBare ? encoded : (0,index_js_.compactAddLength)(encoded);
  }

}
// EXTERNAL MODULE: ../../node_modules/@polkadot/types/create/sanitize.js
var sanitize = __webpack_require__(89983);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/primitive/Type.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0


/**
 * @name Type
 * @description
 * This is a extended version of Text, specifically to handle types. Here we rely fully
 * on what Text provides us, however we also adjust the types received from the runtime,
 * i.e. we remove the `T::` prefixes found in some types for consistency across implementation.
 */

class Type extends Text {
  constructor(registry, value = '') {
    super(registry, value);
    this.setOverride((0,sanitize/* sanitize */.Nw)(this.toString()));
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return 'Type';
  }

}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/primitive/U8.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name u8
 * @description
 * An 8-bit unsigned integer
 */

class u8 extends UInt/* UInt.with */.v.with(8) {}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/primitive/U16.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name u16
 * @description
 * A 16-bit unsigned integer
 */

class u16 extends UInt/* UInt.with */.v.with(16) {}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/primitive/U128.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name u128
 * @description
 * A 128-bit unsigned integer
 */

class u128 extends UInt/* UInt.with */.v.with(128) {}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/primitive/U256.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name u256
 * @description
 * A 256-bit unsigned integer
 */

class u256 extends UInt/* UInt.with */.v.with(256) {}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/primitive/USize.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name USize
 * @description
 * A System default unsigned number, typically used in RPC to report non-consensus
 * data. It is a wrapper for [[U32]] as a WASM default (as generated by Rust bindings).
 * It is not to be used, since it created consensus mismatches.
 */

class usize extends U32/* u32 */.J {
  constructor(registry, value) {
    super(registry, value);
    throw new Error('The `usize` type should not be used. Since it is platform-specific, it creates incompatibilities between native (generally u64) and WASM (always u32) code. Use one of the `u32` or `u64` types explicitly.');
  }

}
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/primitive/index.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @summary Type definitions that are used in the system
 */






















;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/index.types.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0




/***/ }),

/***/ 26248:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "assets": () => (/* reexport */ assets_definitions),
  "attestations": () => (/* reexport */ attestations_definitions),
  "aura": () => (/* reexport */ aura_definitions),
  "author": () => (/* reexport */ author_definitions),
  "authorship": () => (/* reexport */ authorship_definitions),
  "babe": () => (/* reexport */ babe_definitions),
  "balances": () => (/* reexport */ balances_definitions),
  "beefy": () => (/* reexport */ beefy_definitions),
  "bridges": () => (/* reexport */ bridges_definitions),
  "chain": () => (/* reexport */ chain_definitions),
  "childstate": () => (/* reexport */ childstate_definitions),
  "claims": () => (/* reexport */ claims_definitions),
  "collective": () => (/* reexport */ collective_definitions),
  "consensus": () => (/* reexport */ consensus_definitions),
  "contracts": () => (/* reexport */ contracts_definitions),
  "contractsAbi": () => (/* reexport */ contractsAbi_definitions),
  "crowdloan": () => (/* reexport */ crowdloan_definitions),
  "cumulus": () => (/* reexport */ cumulus_definitions),
  "democracy": () => (/* reexport */ democracy_definitions),
  "elections": () => (/* reexport */ elections_definitions),
  "engine": () => (/* reexport */ engine_definitions),
  "eth": () => (/* reexport */ eth_definitions),
  "evm": () => (/* reexport */ evm_definitions),
  "extrinsics": () => (/* reexport */ extrinsics_definitions),
  "genericAsset": () => (/* reexport */ genericAsset_definitions),
  "gilt": () => (/* reexport */ gilt_definitions),
  "grandpa": () => (/* reexport */ grandpa_definitions),
  "identity": () => (/* reexport */ identity_definitions),
  "imOnline": () => (/* reexport */ imOnline_definitions),
  "lottery": () => (/* reexport */ lottery_definitions),
  "metadata": () => (/* reexport */ metadata_definitions),
  "mmr": () => (/* reexport */ mmr_definitions),
  "offchain": () => (/* reexport */ offchain_definitions),
  "offences": () => (/* reexport */ offences_definitions),
  "parachains": () => (/* reexport */ parachains_definitions),
  "payment": () => (/* reexport */ payment_definitions),
  "poll": () => (/* reexport */ poll_definitions),
  "proxy": () => (/* reexport */ proxy_definitions),
  "purchase": () => (/* reexport */ purchase_definitions),
  "recovery": () => (/* reexport */ recovery_definitions),
  "rpc": () => (/* reexport */ rpc_definitions),
  "runtime": () => (/* reexport */ definitions),
  "scaleInfo": () => (/* reexport */ scaleInfo_definitions),
  "scheduler": () => (/* reexport */ scheduler_definitions),
  "session": () => (/* reexport */ session_definitions),
  "society": () => (/* reexport */ society_definitions),
  "staking": () => (/* reexport */ staking_definitions),
  "state": () => (/* reexport */ state_definitions),
  "support": () => (/* reexport */ support_definitions),
  "syncstate": () => (/* reexport */ syncstate_definitions),
  "system": () => (/* reexport */ system_definitions),
  "treasury": () => (/* reexport */ treasury_definitions),
  "txpayment": () => (/* reexport */ txpayment_definitions),
  "uniques": () => (/* reexport */ uniques_definitions),
  "utility": () => (/* reexport */ utility_definitions),
  "vesting": () => (/* reexport */ vesting_definitions),
  "xcm": () => (/* reexport */ xcm_definitions)
});

// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(51119);
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/runtime/definitions.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
const numberTypes = {
  Fixed64: 'Int<64, Fixed64>',
  FixedI64: 'Int<64, FixedI64>',
  FixedU64: 'UInt<64, FixedU64>',
  Fixed128: 'Int<128, Fixed128>',
  FixedI128: 'Int<128, FixedI128>',
  FixedU128: 'UInt<128, FixedU128>',
  I32F32: 'Int<64, I32F32>',
  U32F32: 'UInt<64, U32F32>',
  PerU16: 'UInt<16, PerU16>',
  Perbill: 'UInt<32, Perbill>',
  Percent: 'UInt<8, Percent>',
  Permill: 'UInt<32, Permill>',
  Perquintill: 'UInt<64, Perquintill>'
};
/* harmony default export */ const definitions = ({
  rpc: {},
  types: _objectSpread(_objectSpread({}, numberTypes), {}, {
    AccountId: 'GenericAccountId',
    AccountIdOf: 'AccountId',
    AccountIndex: 'GenericAccountIndex',
    Address: 'MultiAddress',
    AssetId: 'u32',
    Balance: 'UInt<128, Balance>',
    BalanceOf: 'Balance',
    Block: 'GenericBlock',
    BlockNumber: 'u32',
    Call: 'GenericCall',
    CallHash: 'Hash',
    CallHashOf: 'CallHash',
    ChangesTrieConfiguration: {
      digestInterval: 'u32',
      digestLevels: 'u32'
    },
    ChangesTrieSignal: {
      _enum: {
        NewConfiguration: 'Option<ChangesTrieConfiguration>'
      }
    },
    ConsensusEngineId: 'GenericConsensusEngineId',
    CodecHash: 'Hash',
    Digest: {
      logs: 'Vec<DigestItem>'
    },
    DigestItem: {
      _enum: {
        Other: 'Bytes',
        // 0
        AuthoritiesChange: 'Vec<AuthorityId>',
        // 1
        ChangesTrieRoot: 'Hash',
        // 2
        SealV0: 'SealV0',
        // 3
        Consensus: 'Consensus',
        // 4
        Seal: 'Seal',
        // 5
        PreRuntime: 'PreRuntime',
        // 6
        ChangesTrieSignal: 'ChangesTrieSignal' // 7

      }
    },
    ExtrinsicsWeight: {
      normal: 'Weight',
      operational: 'Weight'
    },
    H32: '[u8; 4; H32]',
    H64: '[u8; 8; H64]',
    H128: '[u8; 16; H128]',
    H160: '[u8; 20; H160]',
    H256: '[u8; 32; H256]',
    H512: '[u8; 64; H512]',
    H1024: '[u8; 128; H1024]',
    H2048: '[u8; 256; H2048]',
    Hash: 'H256',
    Header: {
      parentHash: 'Hash',
      number: 'Compact<BlockNumber>',
      stateRoot: 'Hash',
      extrinsicsRoot: 'Hash',
      digest: 'Digest'
    },
    HeaderPartial: {
      parentHash: 'Hash',
      // since we only parse JSON with this, having non-compact works
      number: 'BlockNumber'
    },
    IndicesLookupSource: 'GenericLookupSource',
    Index: 'u32',
    Justification: '(ConsensusEngineId, EncodedJustification)',
    EncodedJustification: 'Bytes',
    Justifications: 'Vec<Justification>',
    KeyValue: '(StorageKey, StorageData)',
    KeyTypeId: 'u32',
    LockIdentifier: '[u8; 8]',
    LookupSource: 'MultiAddress',
    LookupTarget: 'AccountId',
    ModuleId: 'LockIdentifier',
    MultiAddress: 'GenericMultiAddress',
    MultiSigner: {
      _enum: {
        Ed25519: '[u8; 32]',
        Sr25519: '[u8; 32]',
        Ecdsa: '[u8; 33]'
      }
    },
    Moment: 'UInt<64, Moment>',
    OpaqueCall: 'Bytes',
    Origin: 'DoNotConstruct<Origin>',
    OriginCaller: {
      _enum: {
        // this should be dynamically built from the actual modules, based on index
        System: 'SystemOrigin'
      }
    },
    PalletId: 'LockIdentifier',
    PalletsOrigin: 'OriginCaller',
    PalletVersion: {
      major: 'u16',
      minor: 'u8',
      patch: 'u8'
    },
    Pays: {
      _enum: ['Yes', 'No']
    },
    Phantom: 'Null',
    PhantomData: 'Null',
    Releases: {
      _enum: ['V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10']
    },
    RuntimeDbWeight: {
      read: 'Weight',
      write: 'Weight'
    },
    SignedBlock: 'SignedBlockWithJustifications',
    SignedBlockWithJustification: {
      block: 'Block',
      justification: 'Option<EncodedJustification>'
    },
    SignedBlockWithJustifications: {
      block: 'Block',
      justifications: 'Option<Justifications>'
    },
    Slot: 'u64',
    StorageData: 'Bytes',
    StorageProof: {
      trieNodes: 'Vec<Bytes>'
    },
    TransactionPriority: 'u64',
    TransactionInfo: {
      _alias: {
        dataSize: 'size'
      },
      chunkRoot: 'H256',
      contentHash: 'H256',
      dataSize: 'u32',
      blockChunks: 'u32'
    },
    TransactionStorageProof: {
      chunk: 'Vec<u8>',
      proof: 'Vec<Vec<u8>>'
    },
    ValidatorId: 'AccountId',
    ValidatorIdOf: 'ValidatorId',
    Weight: 'u64',
    WeightMultiplier: 'Fixed64',
    // digest
    PreRuntime: '(ConsensusEngineId, Bytes)',
    SealV0: '(u64, Signature)',
    Seal: '(ConsensusEngineId, Bytes)',
    Consensus: '(ConsensusEngineId, Bytes)'
  })
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/assets/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const assets_definitions = ({
  rpc: {},
  types: {
    AssetApprovalKey: {
      owner: 'AccountId',
      delegate: 'AccountId'
    },
    AssetApproval: {
      amount: 'TAssetBalance',
      deposit: 'TAssetDepositBalance'
    },
    AssetBalance: {
      balance: 'TAssetBalance',
      isFrozen: 'bool',
      isSufficient: 'bool'
    },
    AssetDestroyWitness: {
      accounts: 'Compact<u32>',
      sufficients: 'Compact<u32>',
      approvals: 'Compact<u32>'
    },
    AssetDetails: {
      owner: 'AccountId',
      issuer: 'AccountId',
      admin: 'AccountId',
      freezer: 'AccountId',
      supply: 'TAssetBalance',
      deposit: 'TAssetDepositBalance',
      minBalance: 'TAssetBalance',
      isSufficient: 'bool',
      accounts: 'u32',
      sufficients: 'u32',
      approvals: 'u32',
      isFrozen: 'bool'
    },
    AssetMetadata: {
      deposit: 'TAssetDepositBalance',
      name: 'Vec<u8>',
      symbol: 'Vec<u8>',
      decimals: 'u8',
      isFrozen: 'bool'
    },
    TAssetBalance: 'u64',
    TAssetDepositBalance: 'BalanceOf'
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/authorship/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const authorship_definitions = ({
  rpc: {},
  types: {
    UncleEntryItem: {
      _enum: {
        InclusionHeight: 'BlockNumber',
        Uncle: '(Hash, Option<AccountId>)'
      }
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/aura/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const aura_definitions = ({
  rpc: {},
  types: {
    RawAuraPreDigest: {
      slotNumber: 'u64'
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/babe/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const babe_definitions = ({
  rpc: {
    epochAuthorship: {
      description: 'Returns data about which slots (primary or secondary) can be claimed in the current epoch with the keys in the keystore',
      params: [],
      type: 'HashMap<AuthorityId, EpochAuthorship>'
    }
  },
  types: {
    AllowedSlots: {
      _enum: ['PrimarySlots', 'PrimaryAndSecondaryPlainSlots', 'PrimaryAndSecondaryVRFSlots']
    },
    BabeAuthorityWeight: 'u64',
    BabeEpochConfiguration: {
      c: '(u64, u64)',
      allowedSlots: 'AllowedSlots'
    },
    BabeBlockWeight: 'u32',
    BabeEquivocationProof: {
      offender: 'AuthorityId',
      slotNumber: 'SlotNumber',
      firstHeader: 'Header',
      secondHeader: 'Header'
    },
    BabeWeight: 'u64',
    MaybeRandomness: 'Option<Randomness>',
    MaybeVrf: 'Option<VrfData>',
    EpochAuthorship: {
      primary: 'Vec<u64>',
      secondary: 'Vec<u64>',
      secondary_vrf: 'Vec<u64>'
    },
    NextConfigDescriptor: {
      _enum: {
        V0: 'Null',
        V1: 'NextConfigDescriptorV1'
      }
    },
    NextConfigDescriptorV1: {
      c: '(u64, u64)',
      allowedSlots: 'AllowedSlots'
    },
    Randomness: 'Hash',
    RawBabePreDigest: {
      _enum: {
        Phantom: 'Null',
        // index starts at 1... empty slot at 0
        Primary: 'RawBabePreDigestPrimary',
        SecondaryPlain: 'RawBabePreDigestSecondaryPlain',
        SecondaryVRF: 'RawBabePreDigestSecondaryVRF'
      }
    },
    RawBabePreDigestPrimary: {
      authorityIndex: 'u32',
      // AuthorityIndex (also in aura)
      slotNumber: 'SlotNumber',
      vrfOutput: 'VrfOutput',
      vrfProof: 'VrfProof'
    },
    RawBabePreDigestSecondaryPlain: {
      authorityIndex: 'u32',
      // AuthorityIndex (also in aura)
      slotNumber: 'SlotNumber'
    },
    RawBabePreDigestSecondaryVRF: {
      authorityIndex: 'u32',
      slotNumber: 'SlotNumber',
      vrfOutput: 'VrfOutput',
      vrfProof: 'VrfProof'
    },
    RawBabePreDigestTo159: {
      _enum: {
        Primary: 'RawBabePreDigestPrimaryTo159',
        Secondary: 'RawBabePreDigestSecondaryTo159'
      }
    },
    RawBabePreDigestPrimaryTo159: {
      authorityIndex: 'u32',
      slotNumber: 'SlotNumber',
      weight: 'BabeBlockWeight',
      vrfOutput: 'VrfOutput',
      vrfProof: 'VrfProof'
    },
    RawBabePreDigestSecondaryTo159: {
      authorityIndex: 'u32',
      slotNumber: 'SlotNumber',
      weight: 'BabeBlockWeight'
    },
    // a cross old/new compatible version of the digest, that is _only_ useful
    // for partial parsing and extraction of the author. This assumes that all
    // entries has the authorityIndex in the first position - and that it is all
    // we are interested in
    RawBabePreDigestCompat: {
      _enum: {
        Zero: 'u32',
        One: 'u32',
        Two: 'u32',
        Three: 'u32'
      }
    },
    SlotNumber: 'u64',
    VrfData: '[u8; 32]',
    VrfOutput: '[u8; 32]',
    VrfProof: '[u8; 64]'
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/balances/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const balances_definitions = ({
  rpc: {},
  types: {
    AccountData: {
      free: 'Balance',
      reserved: 'Balance',
      miscFrozen: 'Balance',
      feeFrozen: 'Balance'
    },
    BalanceLockTo212: {
      id: 'LockIdentifier',
      amount: 'Balance',
      until: 'BlockNumber',
      reasons: 'WithdrawReasons'
    },
    BalanceLock: {
      id: 'LockIdentifier',
      amount: 'Balance',
      reasons: 'Reasons'
    },
    BalanceStatus: {
      _enum: ['Free', 'Reserved']
    },
    Reasons: {
      _enum: ['Fee', 'Misc', 'All']
    },
    ReserveData: {
      id: 'ReserveIdentifier',
      amount: 'Balance'
    },
    ReserveIdentifier: '[u8; 8]',
    VestingSchedule: {
      offset: 'Balance',
      perBlock: 'Balance',
      startingBlock: 'BlockNumber'
    },
    WithdrawReasons: {
      _set: {
        TransactionPayment: 0b00000001,
        Transfer: 0b00000010,
        Reserve: 0b00000100,
        Fee: 0b00001000,
        Tip: 0b00010000
      }
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/beefy/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const beefy_definitions = ({
  rpc: {
    subscribeJustifications: {
      description: 'Returns the block most recently finalized by BEEFY, alongside side its justification.',
      params: [],
      pubsub: ['justifications', 'subscribeJustifications', 'unsubscribeJustifications'],
      type: 'BeefySignedCommitment'
    }
  },
  types: {
    BeefyCommitment: {
      payload: 'BeefyPayload',
      blockNumber: 'BlockNumber',
      validatorSetId: 'ValidatorSetId'
    },
    BeefySignedCommitment: {
      commitment: 'BeefyCommitment',
      signatures: 'Vec<Option<Signature>>'
    },
    BeefyNextAuthoritySet: {
      id: 'u64',
      len: 'u32',
      root: 'H256'
    },
    BeefyPayload: 'MmrRootHash',
    MmrRootHash: 'H256',
    ValidatorSetId: 'u64'
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/collective/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const collective_definitions = ({
  rpc: {},
  types: {
    CollectiveOrigin: {
      _enum: {
        Members: '(MemberCount, MemberCount)',
        Member: 'AccountId'
      }
    },
    MemberCount: 'u32',
    ProposalIndex: 'u32',
    VotesTo230: {
      index: 'ProposalIndex',
      threshold: 'MemberCount',
      ayes: 'Vec<AccountId>',
      nays: 'Vec<AccountId>'
    },
    Votes: {
      index: 'ProposalIndex',
      threshold: 'MemberCount',
      ayes: 'Vec<AccountId>',
      nays: 'Vec<AccountId>',
      end: 'BlockNumber'
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/consensus/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const consensus_definitions = ({
  rpc: {},
  types: {
    AuthorityId: 'AccountId',
    RawVRFOutput: '[u8; 32]'
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/contracts/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const contracts_definitions = ({
  rpc: {
    call: {
      description: 'Executes a call to a contract',
      params: [{
        name: 'callRequest',
        type: 'ContractCallRequest'
      }, {
        name: 'at',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'ContractExecResult'
    },
    instantiate: {
      description: 'Instantiate a new contract',
      params: [{
        name: 'request',
        type: 'InstantiateRequest'
      }, {
        name: 'at',
        type: 'BlockHash',
        isHstoric: true,
        isOptional: true
      }],
      type: 'ContractInstantiateResult'
    },
    getStorage: {
      description: 'Returns the value under a specified storage key in a contract',
      params: [{
        name: 'address',
        type: 'AccountId'
      }, {
        name: 'key',
        type: 'H256'
      }, {
        name: 'at',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'Option<Bytes>'
    },
    rentProjection: {
      description: 'Returns the projected time a given contract will be able to sustain paying its rent',
      params: [{
        name: 'address',
        type: 'AccountId'
      }, {
        name: 'at',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'Option<BlockNumber>'
    }
  },
  types: {
    AliveContractInfo: {
      trieId: 'TrieId',
      storageSize: 'u32',
      pairCount: 'u32',
      codeHash: 'CodeHash',
      rentAllowance: 'Balance',
      rentPaid: 'Balance',
      deductBlock: 'BlockNumber',
      lastWrite: 'Option<BlockNumber>',
      _reserved: 'Option<Null>'
    },
    CodeHash: 'Hash',
    ContractCallRequest: {
      origin: 'AccountId',
      dest: 'AccountId',
      value: 'Balance',
      gasLimit: 'u64',
      inputData: 'Bytes'
    },
    ContractExecResultSuccessTo255: {
      status: 'u8',
      data: 'Raw'
    },
    ContractExecResultTo255: {
      _enum: {
        Success: 'ContractExecResultSuccessTo255',
        Error: 'Null'
      }
    },
    ContractExecResultSuccessTo260: {
      flags: 'u32',
      data: 'Bytes',
      gasConsumed: 'u64'
    },
    ContractExecResultTo260: {
      _enum: {
        Success: 'ContractExecResultSuccessTo260',
        Error: 'Null'
      }
    },
    ContractExecResultErrModule: {
      index: 'u8',
      error: 'u8',
      message: 'Option<Text>'
    },
    ContractExecResultErr: {
      _enum: {
        Other: 'Text',
        CannotLookup: 'Null',
        BadOrigin: 'Null',
        Module: 'ContractExecResultErrModule'
      }
    },
    ContractExecResultOk: {
      flags: 'u32',
      data: 'Bytes'
    },
    ContractExecResultResult: {
      _enum: {
        Ok: 'ContractExecResultOk',
        Err: 'ContractExecResultErr'
      }
    },
    ContractExecResult: {
      gasConsumed: 'u64',
      debugMessage: 'Text',
      result: 'ContractExecResultResult'
    },
    ContractInfo: {
      _enum: {
        Alive: 'AliveContractInfo',
        Tombstone: 'TombstoneContractInfo'
      }
    },
    ContractStorageKey: '[u8; 32]',
    DeletedContract: {
      pairCount: 'u32',
      trieId: 'TrieId'
    },
    ExecReturnValue: {
      flags: 'u32',
      data: 'Bytes'
    },
    Gas: 'u64',
    HostFnWeightsTo264: {
      caller: 'Weight',
      address: 'Weight',
      gasLeft: 'Weight',
      balance: 'Weight',
      valueTransferred: 'Weight',
      minimumBalance: 'Weight',
      tombstoneDeposit: 'Weight',
      rentAllowance: 'Weight',
      blockNumber: 'Weight',
      now: 'Weight',
      weightToFee: 'Weight',
      gas: 'Weight',
      input: 'Weight',
      inputPerByte: 'Weight',
      return: 'Weight',
      returnPerByte: 'Weight',
      terminate: 'Weight',
      restoreTo: 'Weight',
      restoreToPerDelta: 'Weight',
      random: 'Weight',
      depositEvent: 'Weight',
      depositEventPerTopic: 'Weight',
      depositEventPerByte: 'Weight',
      setRentAllowance: 'Weight',
      setStorage: 'Weight',
      setStoragePerByte: 'Weight',
      clearStorage: 'Weight',
      getStorage: 'Weight',
      getStoragePerByte: 'Weight',
      transfer: 'Weight',
      call: 'Weight',
      callTransferSurcharge: 'Weight',
      callPerInputByte: 'Weight',
      callPerOutputByte: 'Weight',
      instantiate: 'Weight',
      instantiatePerInputByte: 'Weight',
      instantiatePerOutputByte: 'Weight',
      hashSha2256: 'Weight',
      hashSha2256PerByte: 'Weight',
      hashKeccak256: 'Weight',
      hashKeccak256PerByte: 'Weight',
      hashBlake2256: 'Weight',
      hashBlake2256PerByte: 'Weight',
      hashBlake2128: 'Weight',
      hashBlake2128PerByte: 'Weight'
    },
    HostFnWeights: {
      caller: 'Weight',
      address: 'Weight',
      gasLeft: 'Weight',
      balance: 'Weight',
      valueTransferred: 'Weight',
      minimumBalance: 'Weight',
      tombstoneDeposit: 'Weight',
      rentAllowance: 'Weight',
      blockNumber: 'Weight',
      now: 'Weight',
      weightToFee: 'Weight',
      gas: 'Weight',
      input: 'Weight',
      inputPerByte: 'Weight',
      return: 'Weight',
      returnPerByte: 'Weight',
      terminate: 'Weight',
      terminatePerCodeByte: 'Weight',
      restoreTo: 'Weight',
      restoreToPerCallerCodeByte: 'Weight',
      restoreToPerTombstoneCodeByte: 'Weight',
      restoreToPerDelta: 'Weight',
      random: 'Weight',
      depositEvent: 'Weight',
      depositEventPerTopic: 'Weight',
      depositEventPerByte: 'Weight',
      setRentAllowance: 'Weight',
      setStorage: 'Weight',
      setStoragePerByte: 'Weight',
      clearStorage: 'Weight',
      getStorage: 'Weight',
      getStoragePerByte: 'Weight',
      transfer: 'Weight',
      call: 'Weight',
      callPerCodeByte: 'Weight',
      callTransferSurcharge: 'Weight',
      callPerInputByte: 'Weight',
      callPerOutputByte: 'Weight',
      instantiate: 'Weight',
      instantiatePerCodeByte: 'Weight',
      instantiatePerInputByte: 'Weight',
      instantiatePerOutputByte: 'Weight',
      instantiatePerSaltByte: 'Weight',
      hashSha2256: 'Weight',
      hashSha2256PerByte: 'Weight',
      hashKeccak256: 'Weight',
      hashKeccak256PerByte: 'Weight',
      hashBlake2256: 'Weight',
      hashBlake2256PerByte: 'Weight',
      hashBlake2128: 'Weight',
      hashBlake2128PerByte: 'Weight',
      rentParams: 'Weight'
    },
    InstantiateRequest: {
      origin: 'AccountId',
      endowment: 'Balance',
      gasLimit: 'Gas',
      code: 'Bytes',
      data: 'Bytes',
      salt: 'Bytes'
    },
    ContractInstantiateResult: {
      _enum: {
        Ok: 'InstantiateReturnValue',
        Err: 'Null'
      }
    },
    InstantiateReturnValue: {
      result: 'ExecReturnValue',
      accountId: 'AccountId',
      rentProjection: 'Option<RentProjection>'
    },
    InstructionWeights: {
      i64const: 'u32',
      i64load: 'u32',
      i64store: 'u32',
      select: 'u32',
      rIf: 'u32',
      br: 'u32',
      brIf: 'u32',
      brIable: 'u32',
      brIablePerEntry: 'u32',
      call: 'u32',
      callIndirect: 'u32',
      callIndirectPerParam: 'u32',
      localGet: 'u32',
      localSet: 'u32',
      local_tee: 'u32',
      globalGet: 'u32',
      globalSet: 'u32',
      memoryCurrent: 'u32',
      memoryGrow: 'u32',
      i64clz: 'u32',
      i64ctz: 'u32',
      i64popcnt: 'u32',
      i64eqz: 'u32',
      i64extendsi32: 'u32',
      i64extendui32: 'u32',
      i32wrapi64: 'u32',
      i64eq: 'u32',
      i64ne: 'u32',
      i64lts: 'u32',
      i64ltu: 'u32',
      i64gts: 'u32',
      i64gtu: 'u32',
      i64les: 'u32',
      i64leu: 'u32',
      i64ges: 'u32',
      i64geu: 'u32',
      i64add: 'u32',
      i64sub: 'u32',
      i64mul: 'u32',
      i64divs: 'u32',
      i64divu: 'u32',
      i64rems: 'u32',
      i64remu: 'u32',
      i64and: 'u32',
      i64or: 'u32',
      i64xor: 'u32',
      i64shl: 'u32',
      i64shrs: 'u32',
      i64shru: 'u32',
      i64rotl: 'u32',
      i64rotr: 'u32'
    },
    LimitsTo264: {
      eventTopics: 'u32',
      stackHeight: 'u32',
      globals: 'u32',
      parameters: 'u32',
      memoryPages: 'u32',
      tableSize: 'u32',
      brTableSize: 'u32',
      subjectLen: 'u32',
      codeSize: 'u32'
    },
    Limits: {
      eventTopics: 'u32',
      stackHeight: 'u32',
      globals: 'u32',
      parameters: 'u32',
      memoryPages: 'u32',
      tableSize: 'u32',
      brTableSize: 'u32',
      subjectLen: 'u32'
    },
    PrefabWasmModule: {
      scheduleVersion: 'Compact<u32>',
      initial: 'Compact<u32>',
      maximum: 'Compact<u32>',
      refcount: 'Compact<u64>',
      _reserved: 'Option<Null>',
      code: 'Bytes',
      originalCodeLen: 'u32'
    },
    RentProjection: {
      _enum: {
        EvictionAt: 'BlockNumber',
        NoEviction: 'Null'
      }
    },
    ScheduleTo212: {
      version: 'u32',
      putCodePerByteCost: 'Gas',
      growMemCost: 'Gas',
      regularOpCost: 'Gas',
      returnDataPerByteCost: 'Gas',
      eventDataPerByteCost: 'Gas',
      eventPerTopicCost: 'Gas',
      eventBaseCost: 'Gas',
      sandboxDataReadCost: 'Gas',
      sandboxDataWriteCost: 'Gas',
      maxEventTopics: 'u32',
      maxStackHeight: 'u32',
      maxMemoryPages: 'u32',
      enablePrintln: 'bool',
      maxSubjectLen: 'u32'
    },
    ScheduleTo258: {
      version: 'u32',
      putCodePerByteCost: 'Gas',
      growMemCost: 'Gas',
      regularOpCost: 'Gas',
      returnDataPerByteCost: 'Gas',
      eventDataPerByteCost: 'Gas',
      eventPerTopicCost: 'Gas',
      eventBaseCost: 'Gas',
      sandboxDataReadCost: 'Gas',
      sandboxDataWriteCost: 'Gas',
      transferCost: 'Gas',
      maxEventTopics: 'u32',
      maxStackHeight: 'u32',
      maxMemoryPages: 'u32',
      enablePrintln: 'bool',
      maxSubjectLen: 'u32'
    },
    ScheduleTo264: {
      version: 'u32',
      enablePrintln: 'bool',
      limits: 'LimitsTo264',
      instructionWeights: 'InstructionWeights',
      hostFnWeights: 'HostFnWeightsTo264'
    },
    Schedule: {
      version: 'u32',
      enablePrintln: 'bool',
      limits: 'Limits',
      instructionWeights: 'InstructionWeights',
      hostFnWeights: 'HostFnWeights'
    },
    SeedOf: 'Hash',
    TombstoneContractInfo: 'Hash',
    TrieId: 'Bytes'
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/democracy/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
const AllConvictions = [// 0.1x votes, unlocked.
'None', // 1x votes, locked for an enactment period following a successful vote.
'Locked1x', // 2x votes, locked for 2x enactment periods following a successful vote.
'Locked2x', // 3x votes, locked for 4x...
'Locked3x', // 4x votes, locked for 8x...
'Locked4x', // 5x votes, locked for 16x...
'Locked5x', /// 6x votes, locked for 32x...
'Locked6x'];
/* harmony default export */ const democracy_definitions = ({
  rpc: {},
  types: {
    AccountVote: {
      _enum: {
        Standard: 'AccountVoteStandard',
        Split: 'AccountVoteSplit'
      }
    },
    AccountVoteSplit: {
      aye: 'Balance',
      nay: 'Balance'
    },
    AccountVoteStandard: {
      vote: 'Vote',
      balance: 'Balance'
    },
    Conviction: {
      _enum: AllConvictions
    },
    Delegations: {
      votes: 'Balance',
      capital: 'Balance'
    },
    PreimageStatus: {
      _enum: {
        Missing: 'BlockNumber',
        Available: 'PreimageStatusAvailable'
      }
    },
    PreimageStatusAvailable: {
      data: 'Bytes',
      provider: 'AccountId',
      deposit: 'Balance',
      since: 'BlockNumber',
      expiry: 'Option<BlockNumber>'
    },
    PriorLock: '(BlockNumber, Balance)',
    PropIndex: 'u32',
    Proposal: 'Call',
    ProxyState: {
      _enum: {
        Open: 'AccountId',
        Active: 'AccountId'
      }
    },
    ReferendumIndex: 'u32',
    ReferendumInfoTo239: {
      end: 'BlockNumber',
      proposalHash: 'Hash',
      threshold: 'VoteThreshold',
      delay: 'BlockNumber'
    },
    ReferendumInfo: {
      _enum: {
        Ongoing: 'ReferendumStatus',
        Finished: 'ReferendumInfoFinished'
      }
    },
    ReferendumInfoFinished: {
      approved: 'bool',
      end: 'BlockNumber'
    },
    ReferendumStatus: {
      end: 'BlockNumber',
      proposalHash: 'Hash',
      threshold: 'VoteThreshold',
      delay: 'BlockNumber',
      tally: 'Tally'
    },
    Tally: {
      ayes: 'Balance',
      nays: 'Balance',
      turnout: 'Balance'
    },
    Voting: {
      _enum: {
        Direct: 'VotingDirect',
        Delegating: 'VotingDelegating'
      }
    },
    VotingDirect: {
      votes: 'Vec<VotingDirectVote>',
      delegations: 'Delegations',
      prior: 'PriorLock'
    },
    VotingDirectVote: '(ReferendumIndex, AccountVote)',
    VotingDelegating: {
      balance: 'Balance',
      target: 'AccountId',
      conviction: 'Conviction',
      delegations: 'Delegations',
      prior: 'PriorLock'
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/elections/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const elections_definitions = ({
  rpc: {},
  types: {
    ApprovalFlag: 'u32',
    DefunctVoter: {
      who: 'AccountId',
      voteCount: 'Compact<u32>',
      candidateCount: 'Compact<u32>'
    },
    Renouncing: {
      _enum: {
        Member: 'Null',
        RunnerUp: 'Null',
        Candidate: 'Compact<u32>'
      }
    },
    SetIndex: 'u32',
    Vote: 'GenericVote',
    VoteIndex: 'u32',
    VoterInfo: {
      lastActive: 'VoteIndex',
      lastWin: 'VoteIndex',
      pot: 'Balance',
      stake: 'Balance'
    },
    VoteThreshold: {
      _enum: ['Super majority approval', 'Super majority rejection', 'Simple majority']
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/engine/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const engine_definitions = ({
  rpc: {
    createBlock: {
      description: 'Instructs the manual-seal authorship task to create a new block',
      params: [{
        name: 'createEmpty',
        type: 'bool'
      }, {
        name: 'finalize',
        type: 'bool'
      }, {
        name: 'parentHash',
        type: 'BlockHash',
        isOptional: true
      }],
      type: 'CreatedBlock'
    },
    finalizeBlock: {
      description: 'Instructs the manual-seal authorship task to finalize a block',
      params: [{
        name: 'hash',
        type: 'BlockHash'
      }, {
        name: 'justification',
        type: 'Justification',
        isOptional: true
      }],
      type: 'bool'
    }
  },
  types: {
    CreatedBlock: {
      hash: 'BlockHash',
      aux: 'ImportedAux'
    },
    ImportedAux: {
      headerOnly: 'bool',
      clearJustificationRequests: 'bool',
      needsJustification: 'bool',
      badJustification: 'bool',
      needsFinalityProof: 'bool',
      isNewBest: 'bool'
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/evm/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const evm_definitions = ({
  rpc: {},
  types: {
    EvmAccount: {
      nonce: 'u256',
      balance: 'u256'
    },
    EvmLog: {
      address: 'H160',
      topics: 'Vec<H256>',
      data: 'Bytes'
    },
    EvmVicinity: {
      gasPrice: 'u256',
      origin: 'H160'
    },
    ExitError: {
      _enum: {
        StackUnderflow: 'Null',
        StackOverflow: 'Null',
        InvalidJump: 'Null',
        InvalidRange: 'Null',
        DesignatedInvalid: 'Null',
        CallTooDeep: 'Null',
        CreateCollision: 'Null',
        CreateContractLimit: 'Null',
        OutOfOffset: 'Null',
        OutOfGas: 'Null',
        OutOfFund: 'Null',
        PCUnderflow: 'Null',
        CreateEmpty: 'Null',
        Other: 'Text'
      }
    },
    ExitFatal: {
      _enum: {
        NotSupported: 'Null',
        UnhandledInterrupt: 'Null',
        CallErrorAsFatal: 'ExitError',
        Other: 'Text'
      }
    },
    ExitReason: {
      _enum: {
        Succeed: 'ExitSucceed',
        Error: 'ExitError',
        Revert: 'ExitRevert',
        Fatal: 'ExitFatal'
      }
    },
    ExitRevert: {
      _enum: ['Reverted']
    },
    ExitSucceed: {
      _enum: ['Stopped', 'Returned', 'Suicided']
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/extrinsics/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const extrinsics_definitions = ({
  rpc: {},
  types: {
    Extrinsic: 'GenericExtrinsic',
    ExtrinsicEra: 'GenericExtrinsicEra',
    ExtrinsicPayload: 'GenericExtrinsicPayload',
    ExtrinsicSignature: 'MultiSignature',
    ExtrinsicV4: 'GenericExtrinsicV4',
    ExtrinsicPayloadV4: 'GenericExtrinsicPayloadV4',
    ExtrinsicSignatureV4: 'GenericExtrinsicSignatureV4',
    ExtrinsicUnknown: 'GenericExtrinsicUnknown',
    ExtrinsicPayloadUnknown: 'GenericExtrinsicPayloadUnknown',
    // eras
    ImmortalEra: 'GenericImmortalEra',
    MortalEra: 'GenericMortalEra',
    // signatures & signer
    AnySignature: 'H512',
    MultiSignature: {
      _enum: {
        Ed25519: 'Ed25519Signature',
        Sr25519: 'Sr25519Signature',
        Ecdsa: 'EcdsaSignature'
      }
    },
    Signature: 'H512',
    SignerPayload: 'GenericSignerPayload',
    EcdsaSignature: '[u8; 65]',
    Ed25519Signature: 'H512',
    Sr25519Signature: 'H512'
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/genericAsset/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const genericAsset_definitions = ({
  rpc: {},
  types: {
    AssetOptions: {
      initalIssuance: 'Compact<Balance>',
      permissions: 'PermissionLatest'
    },
    Owner: {
      _enum: {
        None: 'Null',
        Address: 'AccountId'
      }
    },
    PermissionsV1: {
      update: 'Owner',
      mint: 'Owner',
      burn: 'Owner'
    },
    PermissionVersions: {
      _enum: {
        V1: 'PermissionsV1'
      }
    },
    PermissionLatest: 'PermissionsV1'
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/gilt/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const gilt_definitions = ({
  rpc: {},
  types: {
    ActiveGilt: {
      proportion: 'Perquintill',
      amount: 'Balance',
      who: 'AccountId',
      expiry: 'BlockNumber'
    },
    ActiveGiltsTotal: {
      frozen: 'Balance',
      proportion: 'Perquintill',
      index: 'ActiveIndex',
      target: 'Perquintill'
    },
    ActiveIndex: 'u32',
    GiltBid: {
      amount: 'Balance',
      who: 'AccountId'
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/grandpa/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const grandpa_definitions = ({
  rpc: {
    proveFinality: {
      description: 'Prove finality for the range (begin; end] hash.',
      params: [{
        name: 'begin',
        type: 'BlockHash'
      }, {
        name: 'end',
        type: 'BlockHash'
      }, {
        name: 'authoritiesSetId',
        type: 'u64',
        isOptional: true
      }],
      type: 'Option<EncodedFinalityProofs>'
    },
    roundState: {
      description: 'Returns the state of the current best round state as well as the ongoing background rounds',
      params: [],
      type: 'ReportedRoundStates'
    },
    subscribeJustifications: {
      description: 'Subscribes to grandpa justifications',
      params: [],
      pubsub: ['justifications', 'subscribeJustifications', 'unsubscribeJustifications'],
      type: 'JustificationNotification'
    }
  },
  types: {
    AuthorityIndex: 'u64',
    AuthorityList: 'Vec<NextAuthority>',
    AuthoritySet: {
      currentAuthorities: 'AuthorityList',
      setId: 'u64',
      pendingStandardChanges: 'ForkTreePendingChange',
      pendingForcedChanges: 'Vec<PendingChange>',
      authoritySetChanges: 'AuthoritySetChanges'
    },
    ForkTreePendingChange: {
      roots: 'Vec<ForkTreePendingChangeNode>',
      bestFinalizedNumber: 'Option<BlockNumber>'
    },
    ForkTreePendingChangeNode: {
      hash: 'BlockHash',
      number: 'BlockNumber',
      data: 'PendingChange',
      // actual data, here PendingChange
      children: 'Vec<ForkTreePendingChangeNode>'
    },
    AuthoritySetChange: '(U64, BlockNumber)',
    AuthoritySetChanges: 'Vec<AuthoritySetChange>',
    AuthorityWeight: 'u64',
    DelayKind: {
      _enum: {
        Finalized: 'Null',
        Best: 'DelayKindBest'
      }
    },
    DelayKindBest: {
      medianLastFinalized: 'BlockNumber'
    },
    EncodedFinalityProofs: 'Bytes',
    GrandpaEquivocation: {
      _enum: {
        Prevote: 'GrandpaEquivocationValue',
        Precommit: 'GrandpaEquivocationValue'
      }
    },
    GrandpaEquivocationProof: {
      setId: 'SetId',
      equivocation: 'GrandpaEquivocation'
    },
    GrandpaEquivocationValue: {
      roundNumber: 'u64',
      identity: 'AuthorityId',
      first: '(GrandpaPrevote, AuthoritySignature)',
      second: '(GrandpaPrevote, AuthoritySignature)'
    },
    GrandpaPrevote: {
      targetHash: 'Hash',
      targetNumber: 'BlockNumber'
    },
    GrandpaCommit: {
      targetHash: 'BlockHash',
      targetNumber: 'BlockNumber',
      precommits: 'Vec<GrandpaSignedPrecommit>'
    },
    GrandpaPrecommit: {
      targetHash: 'BlockHash',
      targetNumber: 'BlockNumber'
    },
    GrandpaSignedPrecommit: {
      precommit: 'GrandpaPrecommit',
      signature: 'AuthoritySignature',
      id: 'AuthorityId'
    },
    GrandpaJustification: {
      round: 'u64',
      commit: 'GrandpaCommit',
      votesAncestries: 'Vec<Header>'
    },
    JustificationNotification: 'Bytes',
    KeyOwnerProof: 'MembershipProof',
    NextAuthority: '(AuthorityId, AuthorityWeight)',
    PendingChange: {
      nextAuthorities: 'AuthorityList',
      delay: 'BlockNumber',
      canonHeight: 'BlockNumber',
      canonHash: 'BlockHash',
      delayKind: 'DelayKind'
    },
    PendingPause: {
      scheduledAt: 'BlockNumber',
      delay: 'BlockNumber'
    },
    PendingResume: {
      scheduledAt: 'BlockNumber',
      delay: 'BlockNumber'
    },
    Precommits: {
      currentWeight: 'u32',
      missing: 'BTreeSet<AuthorityId>'
    },
    Prevotes: {
      currentWeight: 'u32',
      missing: 'BTreeSet<AuthorityId>'
    },
    ReportedRoundStates: {
      setId: 'u32',
      best: 'RoundState',
      background: 'Vec<RoundState>'
    },
    RoundState: {
      round: 'u32',
      totalWeight: 'u32',
      thresholdWeight: 'u32',
      prevotes: 'Prevotes',
      precommits: 'Precommits'
    },
    SetId: 'u64',
    StoredPendingChange: {
      scheduledAt: 'BlockNumber',
      delay: 'BlockNumber',
      nextAuthorities: 'AuthorityList'
    },
    StoredState: {
      _enum: {
        Live: 'Null',
        PendingPause: 'PendingPause',
        Paused: 'Null',
        PendingResume: 'PendingResume'
      }
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/identity/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const identity_definitions = ({
  rpc: {},
  types: {
    IdentityFields: {
      _set: {
        _bitLength: 64,
        // Mapped here to 32 bits, in Rust these are 64-bit values
        Display: 0b00000000000000000000000000000001,
        Legal: 0b00000000000000000000000000000010,
        Web: 0b00000000000000000000000000000100,
        Riot: 0b00000000000000000000000000001000,
        Email: 0b00000000000000000000000000010000,
        PgpFingerprint: 0b00000000000000000000000000100000,
        Image: 0b00000000000000000000000001000000,
        Twitter: 0b00000000000000000000000010000000
      }
    },
    IdentityInfoAdditional: '(Data, Data)',
    IdentityInfo: {
      additional: 'Vec<IdentityInfoAdditional>',
      display: 'Data',
      legal: 'Data',
      web: 'Data',
      riot: 'Data',
      email: 'Data',
      pgpFingerprint: 'Option<H160>',
      image: 'Data',
      twitter: 'Data'
    },
    IdentityJudgement: {
      _enum: {
        Unknown: 'Null',
        FeePaid: 'Balance',
        Reasonable: 'Null',
        KnownGood: 'Null',
        OutOfDate: 'Null',
        LowQuality: 'Null',
        Erroneous: 'Null'
      }
    },
    RegistrationJudgement: '(RegistrarIndex, IdentityJudgement)',
    Registration: {
      judgements: 'Vec<RegistrationJudgement>',
      deposit: 'Balance',
      info: 'IdentityInfo'
    },
    RegistrarIndex: 'u32',
    RegistrarInfo: {
      account: 'AccountId',
      fee: 'Balance',
      fields: 'IdentityFields'
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/imOnline/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const imOnline_definitions = ({
  rpc: {},
  types: {
    AuthIndex: 'u32',
    AuthoritySignature: 'Signature',
    Heartbeat: {
      blockNumber: 'BlockNumber',
      networkState: 'OpaqueNetworkState',
      sessionIndex: 'SessionIndex',
      authorityIndex: 'AuthIndex',
      validatorsLen: 'u32'
    },
    HeartbeatTo244: {
      blockNumber: 'BlockNumber',
      networkState: 'OpaqueNetworkState',
      sessionIndex: 'SessionIndex',
      authorityIndex: 'AuthIndex'
    },
    OpaqueMultiaddr: 'Bytes',
    OpaquePeerId: 'Bytes',
    OpaqueNetworkState: {
      peerId: 'OpaquePeerId',
      externalAddresses: 'Vec<OpaqueMultiaddr>'
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/lottery/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const lottery_definitions = ({
  rpc: {},
  types: {
    CallIndex: '(u8, u8)',
    LotteryConfig: {
      price: 'Balance',
      start: 'BlockNumber',
      length: 'BlockNumber',
      delay: 'BlockNumber',
      repeat: 'bool'
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/mmr/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const mmr_definitions = ({
  rpc: {
    generateProof: {
      description: 'Generate MMR proof for given leaf index.',
      params: [{
        name: 'leafIndex',
        type: 'u64'
      }, {
        name: 'at',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'MmrLeafProof'
    }
  },
  types: {
    MmrLeafProof: {
      blockHash: 'BlockHash',
      leaf: 'Bytes',
      proof: 'Bytes'
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/offences/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const offences_definitions = ({
  rpc: {},
  types: {
    DeferredOffenceOf: '(Vec<OffenceDetails>, Vec<Perbill>, SessionIndex)',
    Kind: '[u8; 16]',
    OffenceDetails: {
      offender: 'Offender',
      reporters: 'Vec<Reporter>'
    },
    Offender: 'IdentificationTuple',
    OpaqueTimeSlot: 'Bytes',
    ReportIdOf: 'Hash',
    Reporter: 'AccountId'
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/proxy/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const proxy_definitions = ({
  rpc: {},
  types: {
    ProxyDefinition: {
      delegate: 'AccountId',
      proxyType: 'ProxyType',
      delay: 'BlockNumber'
    },
    ProxyType: {
      _enum: ['Any', 'NonTransfer', 'Governance', 'Staking']
    },
    ProxyAnnouncement: {
      real: 'AccountId',
      callHash: 'Hash',
      height: 'BlockNumber'
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/recovery/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const recovery_definitions = ({
  rpc: {},
  types: {
    ActiveRecovery: {
      created: 'BlockNumber',
      deposit: 'Balance',
      friends: 'Vec<AccountId>'
    },
    RecoveryConfig: {
      delayPeriod: 'BlockNumber',
      deposit: 'Balance',
      friends: 'Vec<AccountId>',
      threshold: 'u16'
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/scheduler/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const scheduler_definitions = ({
  rpc: {},
  types: {
    Period: '(BlockNumber, u32)',
    Priority: 'u8',
    SchedulePeriod: 'Period',
    SchedulePriority: 'Priority',
    Scheduled: {
      maybeId: 'Option<Bytes>',
      priority: 'SchedulePriority',
      call: 'Call',
      maybePeriodic: 'Option<SchedulePeriod>',
      origin: 'PalletsOrigin'
    },
    ScheduledTo254: {
      maybeId: 'Option<Bytes>',
      priority: 'SchedulePriority',
      call: 'Call',
      maybePeriodic: 'Option<SchedulePeriod>'
    },
    TaskAddress: '(BlockNumber, u32)'
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/session/definitions.js


function definitions_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function definitions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { definitions_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { definitions_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
// The runtime definition of SessionKeys are passed as a Trait to session
// Defined in `node/runtime/src/lib.rs` as follow
//   impl_opaque_keys! {
//     pub struct SessionKeys {
// Here we revert to tuples to keep the interfaces "opaque", as per the use
const keyTypes = {
  // key for beefy
  BeefyKey: '[u8; 33]',
  // default to Substrate master defaults, 4 keys (polkadot master, 5 keys)
  Keys: 'SessionKeys4',
  SessionKeys1: '(AccountId)',
  SessionKeys2: '(AccountId, AccountId)',
  SessionKeys3: '(AccountId, AccountId, AccountId)',
  SessionKeys4: '(AccountId, AccountId, AccountId, AccountId)',
  SessionKeys5: '(AccountId, AccountId, AccountId, AccountId, AccountId)',
  SessionKeys6: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)',
  SessionKeys6B: '(AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)',
  SessionKeys7: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)',
  SessionKeys7B: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)',
  SessionKeys8: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)',
  SessionKeys8B: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)',
  SessionKeys9: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)',
  SessionKeys9B: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)',
  SessionKeys10: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)',
  SessionKeys10B: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)'
};
/* harmony default export */ const session_definitions = ({
  rpc: {},
  types: definitions_objectSpread(definitions_objectSpread({}, keyTypes), {}, {
    FullIdentification: 'Exposure',
    IdentificationTuple: '(ValidatorId, FullIdentification)',
    MembershipProof: {
      session: 'SessionIndex',
      trieNodes: 'Vec<Vec<u8>>',
      validatorCount: 'ValidatorCount'
    },
    SessionIndex: 'u32',
    ValidatorCount: 'u32'
  })
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/society/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const society_definitions = ({
  rpc: {},
  types: {
    Bid: {
      who: 'AccountId',
      kind: 'BidKind',
      value: 'Balance'
    },
    BidKind: {
      _enum: {
        Deposit: 'Balance',
        Vouch: '(AccountId, Balance)'
      }
    },
    // a society-specific Judgement (not the same as identity Judgement)
    SocietyJudgement: {
      _enum: ['Rebid', 'Reject', 'Approve']
    },
    // a society-specific Vote
    SocietyVote: {
      _enum: ['Skeptic', 'Reject', 'Approve']
    },
    StrikeCount: 'u32',
    VouchingStatus: {
      _enum: ['Vouching', 'Banned']
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/staking/definitions.js


function staking_definitions_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function staking_definitions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { staking_definitions_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { staking_definitions_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
const deprecated = {
  Points: 'u32',
  EraPoints: {
    total: 'Points',
    individual: 'Vec<Points>'
  }
};
const phragmen = {
  CompactAssignments: 'CompactAssignmentsWith24',
  CompactAssignmentsWith16: {
    votes1: 'Vec<(NominatorIndexCompact, ValidatorIndexCompact)>',
    votes2: 'Vec<(NominatorIndexCompact, CompactScoreCompact, ValidatorIndexCompact)>',
    votes3: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 2], ValidatorIndexCompact)>',
    votes4: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 3], ValidatorIndexCompact)>',
    votes5: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 4], ValidatorIndexCompact)>',
    votes6: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 5], ValidatorIndexCompact)>',
    votes7: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 6], ValidatorIndexCompact)>',
    votes8: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 7], ValidatorIndexCompact)>',
    votes9: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 8], ValidatorIndexCompact)>',
    votes10: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 9], ValidatorIndexCompact)>',
    votes11: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 10], ValidatorIndexCompact)>',
    votes12: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 11], ValidatorIndexCompact)>',
    votes13: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 12], ValidatorIndexCompact)>',
    votes14: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 13], ValidatorIndexCompact)>',
    votes15: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 14], ValidatorIndexCompact)>',
    votes16: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 15], ValidatorIndexCompact)>'
  },
  CompactAssignmentsWith24: {
    votes1: 'Vec<(NominatorIndexCompact, ValidatorIndexCompact)>',
    votes2: 'Vec<(NominatorIndexCompact, CompactScoreCompact, ValidatorIndexCompact)>',
    votes3: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 2], ValidatorIndexCompact)>',
    votes4: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 3], ValidatorIndexCompact)>',
    votes5: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 4], ValidatorIndexCompact)>',
    votes6: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 5], ValidatorIndexCompact)>',
    votes7: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 6], ValidatorIndexCompact)>',
    votes8: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 7], ValidatorIndexCompact)>',
    votes9: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 8], ValidatorIndexCompact)>',
    votes10: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 9], ValidatorIndexCompact)>',
    votes11: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 10], ValidatorIndexCompact)>',
    votes12: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 11], ValidatorIndexCompact)>',
    votes13: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 12], ValidatorIndexCompact)>',
    votes14: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 13], ValidatorIndexCompact)>',
    votes15: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 14], ValidatorIndexCompact)>',
    votes16: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 15], ValidatorIndexCompact)>',
    votes17: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 16], ValidatorIndexCompact)>',
    votes18: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 17], ValidatorIndexCompact)>',
    votes19: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 18], ValidatorIndexCompact)>',
    votes20: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 19], ValidatorIndexCompact)>',
    votes21: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 20], ValidatorIndexCompact)>',
    votes22: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 21], ValidatorIndexCompact)>',
    votes23: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 22], ValidatorIndexCompact)>',
    votes24: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 23], ValidatorIndexCompact)>'
  },
  CompactAssignmentsTo265: 'CompactAssignmentsWith16',
  CompactAssignmentsTo257: {
    votes1: 'Vec<(NominatorIndex, [CompactScore; 0], ValidatorIndex)>',
    votes2: 'Vec<(NominatorIndex, [CompactScore; 1], ValidatorIndex)>',
    votes3: 'Vec<(NominatorIndex, [CompactScore; 2], ValidatorIndex)>',
    votes4: 'Vec<(NominatorIndex, [CompactScore; 3], ValidatorIndex)>',
    votes5: 'Vec<(NominatorIndex, [CompactScore; 4], ValidatorIndex)>',
    votes6: 'Vec<(NominatorIndex, [CompactScore; 5], ValidatorIndex)>',
    votes7: 'Vec<(NominatorIndex, [CompactScore; 6], ValidatorIndex)>',
    votes8: 'Vec<(NominatorIndex, [CompactScore; 7], ValidatorIndex)>',
    votes9: 'Vec<(NominatorIndex, [CompactScore; 8], ValidatorIndex)>',
    votes10: 'Vec<(NominatorIndex, [CompactScore; 9], ValidatorIndex)>',
    votes11: 'Vec<(NominatorIndex, [CompactScore; 10], ValidatorIndex)>',
    votes12: 'Vec<(NominatorIndex, [CompactScore; 11], ValidatorIndex)>',
    votes13: 'Vec<(NominatorIndex, [CompactScore; 12], ValidatorIndex)>',
    votes14: 'Vec<(NominatorIndex, [CompactScore; 13], ValidatorIndex)>',
    votes15: 'Vec<(NominatorIndex, [CompactScore; 14], ValidatorIndex)>',
    votes16: 'Vec<(NominatorIndex, [CompactScore; 15], ValidatorIndex)>'
  },
  CompactScore: '(ValidatorIndex, OffchainAccuracy)',
  CompactScoreCompact: '(ValidatorIndexCompact, OffchainAccuracyCompact)',
  ElectionCompute: {
    // in previous versions the last entry was "AuthorityId"
    // (since no data attached, and it is via SCALE can rename)
    _enum: ['OnChain', 'Signed', 'Unsigned']
  },
  ElectionPhase: {
    _enum: {
      Off: null,
      Signed: null,
      Unsigned: '(bool, BlockNumber)'
    }
  },
  ElectionResult: {
    compute: 'ElectionCompute',
    slotStake: 'Balance',
    electedStashes: 'Vec<AccountId>',
    exposures: 'Vec<(AccountId, Exposure)>'
  },
  ElectionScore: '[u128; 3]',
  ElectionSize: {
    validators: 'Compact<ValidatorIndex>',
    nominators: 'Compact<NominatorIndex>'
  },
  ElectionStatus: {
    _enum: {
      Close: 'Null',
      Open: 'BlockNumber'
    }
  },
  ExtendedBalance: 'u128',
  RawSolution: 'RawSolutionWith24',
  RawSolutionWith16: {
    compact: 'CompactAssignmentsWith16',
    score: 'ElectionScore',
    round: 'u32'
  },
  RawSolutionWith24: {
    compact: 'CompactAssignmentsWith24',
    score: 'ElectionScore',
    round: 'u32'
  },
  RawSolutionTo265: 'RawSolutionWith16',
  ReadySolution: {
    supports: 'SolutionSupports',
    score: 'ElectionScore',
    compute: 'ElectionCompute'
  },
  RoundSnapshot: {
    voters: 'Vec<(AccountId, VoteWeight, Vec<AccountId>)>',
    targets: 'Vec<AccountId>'
  },
  SeatHolder: {
    who: 'AccountId',
    stake: 'Balance',
    deposit: 'Balance'
  },
  SolutionOrSnapshotSize: {
    voters: 'Compact<u32>',
    targets: 'Compact<u32>'
  },
  SolutionSupport: {
    total: 'ExtendedBalance',
    voters: 'Vec<(AccountId, ExtendedBalance)>'
  },
  SolutionSupports: 'Vec<(AccountId, SolutionSupport)>',
  Voter: {
    votes: 'Vec<AccountId>',
    stake: 'Balance',
    deposit: 'Balance'
  },
  VoteWeight: 'u64'
};
/* harmony default export */ const staking_definitions = ({
  rpc: {},
  types: staking_definitions_objectSpread(staking_definitions_objectSpread(staking_definitions_objectSpread({}, deprecated), phragmen), {}, {
    ActiveEraInfo: {
      index: 'EraIndex',
      start: 'Option<Moment>'
    },
    EraIndex: 'u32',
    EraRewardPoints: {
      total: 'RewardPoint',
      individual: 'BTreeMap<AccountId, RewardPoint>'
    },
    EraRewards: {
      total: 'u32',
      rewards: 'Vec<u32>'
    },
    Exposure: {
      total: 'Compact<Balance>',
      own: 'Compact<Balance>',
      others: 'Vec<IndividualExposure>'
    },
    Forcing: {
      _enum: ['NotForcing', 'ForceNew', 'ForceNone', 'ForceAlways']
    },
    IndividualExposure: {
      who: 'AccountId',
      value: 'Compact<Balance>'
    },
    KeyType: 'AccountId',
    MomentOf: 'Moment',
    Nominations: {
      targets: 'Vec<AccountId>',
      submittedIn: 'EraIndex',
      suppressed: 'bool'
    },
    NominatorIndex: 'u32',
    NominatorIndexCompact: 'Compact<NominatorIndex>',
    OffchainAccuracy: 'PerU16',
    OffchainAccuracyCompact: 'Compact<OffchainAccuracy>',
    PhragmenScore: '[u128; 3]',
    Points: 'u32',
    RewardDestination: {
      _enum: {
        Staked: 'Null',
        Stash: 'Null',
        Controller: 'Null',
        Account: 'AccountId',
        None: 'Null'
      }
    },
    RewardPoint: 'u32',
    SlashJournalEntry: {
      who: 'AccountId',
      amount: 'Balance',
      ownSlash: 'Balance'
    },
    SlashingSpansTo204: {
      spanIndex: 'SpanIndex',
      lastStart: 'EraIndex',
      prior: 'Vec<EraIndex>'
    },
    SlashingSpans: {
      spanIndex: 'SpanIndex',
      lastStart: 'EraIndex',
      lastNonzeroSlash: 'EraIndex',
      prior: 'Vec<EraIndex>'
    },
    SpanIndex: 'u32',
    SpanRecord: {
      slashed: 'Balance',
      paidOut: 'Balance'
    },
    StakingLedgerTo223: {
      stash: 'AccountId',
      total: 'Compact<Balance>',
      active: 'Compact<Balance>',
      unlocking: 'Vec<UnlockChunk>'
    },
    StakingLedgerTo240: {
      stash: 'AccountId',
      total: 'Compact<Balance>',
      active: 'Compact<Balance>',
      unlocking: 'Vec<UnlockChunk>',
      lastReward: 'Option<EraIndex>'
    },
    StakingLedger: {
      stash: 'AccountId',
      total: 'Compact<Balance>',
      active: 'Compact<Balance>',
      unlocking: 'Vec<UnlockChunk>',
      claimedRewards: 'Vec<EraIndex>'
    },
    UnappliedSlashOther: '(AccountId, Balance)',
    UnappliedSlash: {
      validator: 'AccountId',
      own: 'Balance',
      others: 'Vec<UnappliedSlashOther>',
      reporters: 'Vec<AccountId>',
      payout: 'Balance'
    },
    UnlockChunk: {
      value: 'Compact<Balance>',
      era: 'Compact<BlockNumber>'
    },
    ValidatorIndex: 'u16',
    ValidatorIndexCompact: 'Compact<ValidatorIndex>',
    ValidatorPrefs: 'ValidatorPrefsWithBlocked',
    ValidatorPrefsWithCommission: {
      commission: 'Compact<Perbill>'
    },
    ValidatorPrefsWithBlocked: {
      commission: 'Compact<Perbill>',
      blocked: 'bool'
    },
    ValidatorPrefsTo196: {
      validatorPayment: 'Compact<Balance>'
    },
    ValidatorPrefsTo145: {
      unstakeThreshold: 'Compact<u32>',
      validatorPayment: 'Compact<Balance>'
    }
  })
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/support/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const support_definitions = ({
  rpc: {},
  types: {
    WeightToFeeCoefficient: {
      coeffInteger: 'Balance',
      coeffFrac: 'Perbill',
      negative: 'bool',
      degree: 'u8'
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/syncstate/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const syncstate_definitions = ({
  rpc: {
    genSyncSpec: {
      endpoint: 'sync_state_genSyncSpec',
      description: 'Returns the json-serialized chainspec running the node, with a sync state.',
      params: [{
        name: 'raw',
        type: 'bool'
      }],
      type: 'Json'
    }
  },
  types: {}
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/system/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const system_definitions = ({
  rpc: {
    accountNextIndex: {
      alias: ['account_nextIndex'],
      description: 'Retrieves the next accountIndex as available on the node',
      params: [{
        name: 'accountId',
        type: 'AccountId'
      }],
      type: 'Index'
    },
    dryRun: {
      alias: ['system_dryRunAt'],
      description: 'Dry run an extrinsic at a given block',
      params: [{
        name: 'extrinsic',
        type: 'Bytes'
      }, {
        name: 'at',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'ApplyExtrinsicResult'
    },
    name: {
      description: 'Retrieves the node name',
      params: [],
      type: 'Text'
    },
    version: {
      description: 'Retrieves the version of the node',
      params: [],
      type: 'Text'
    },
    chain: {
      description: 'Retrieves the chain',
      params: [],
      type: 'Text'
    },
    chainType: {
      description: 'Retrieves the chain type',
      params: [],
      type: 'ChainType'
    },
    properties: {
      description: 'Get a custom set of properties as a JSON object, defined in the chain spec',
      params: [],
      type: 'ChainProperties'
    },
    health: {
      description: 'Return health status of the node',
      params: [],
      type: 'Health'
    },
    localPeerId: {
      description: 'Returns the base58-encoded PeerId of the node',
      params: [],
      type: 'Text'
    },
    localListenAddresses: {
      description: 'The addresses include a trailing /p2p/ with the local PeerId, and are thus suitable to be passed to addReservedPeer or as a bootnode address for example',
      params: [],
      type: 'Vec<Text>'
    },
    peers: {
      description: 'Returns the currently connected peers',
      params: [],
      type: 'Vec<PeerInfo>'
    },
    networkState: {
      alias: ['system_unstable_networkState'],
      description: 'Returns current state of the network',
      params: [],
      type: 'NetworkState'
    },
    addReservedPeer: {
      description: 'Adds a reserved peer',
      params: [{
        name: 'peer',
        type: 'Text'
      }],
      type: 'Text'
    },
    removeReservedPeer: {
      description: 'Remove a reserved peer',
      params: [{
        name: 'peerId',
        type: 'Text'
      }],
      type: 'Text'
    },
    reservedPeers: {
      description: 'Returns the list of reserved peers',
      params: [],
      type: 'Vec<Text>'
    },
    nodeRoles: {
      description: 'Returns the roles the node is running as',
      params: [],
      type: 'Vec<NodeRole>'
    },
    syncState: {
      description: 'Returns the state of the syncing of the node',
      params: [],
      type: 'SyncState'
    },
    addLogFilter: {
      description: 'Adds the supplied directives to the current log filter',
      params: [{
        name: 'directives',
        type: 'Text'
      }],
      type: 'Null'
    },
    resetLogFilter: {
      description: 'Resets the log filter to Substrate defaults',
      params: [],
      type: 'Null'
    }
  },
  types: {
    AccountInfo: 'AccountInfoWithTripleRefCount',
    AccountInfoWithRefCount: {
      nonce: 'Index',
      refcount: 'RefCount',
      data: 'AccountData'
    },
    AccountInfoWithDualRefCount: {
      nonce: 'Index',
      consumers: 'RefCount',
      providers: 'RefCount',
      data: 'AccountData'
    },
    // original naming
    AccountInfoWithProviders: 'AccountInfoWithDualRefCount',
    AccountInfoWithTripleRefCount: {
      nonce: 'Index',
      consumers: 'RefCount',
      providers: 'RefCount',
      sufficients: 'RefCount',
      data: 'AccountData'
    },
    ApplyExtrinsicResult: 'Result<DispatchOutcome, TransactionValidityError>',
    ArithmeticError: {
      _enum: ['Underflow', 'Overflow', 'DivisionByZero']
    },
    BlockLength: {
      max: 'PerDispatchClassU32'
    },
    BlockWeights: {
      baseBlock: 'Weight',
      maxBlock: 'Weight',
      perClass: 'PerDispatchClassWeightsPerClass'
    },
    ChainProperties: 'GenericChainProperties',
    ChainType: {
      _enum: {
        Development: 'Null',
        Local: 'Null',
        Live: 'Null',
        Custom: 'Text'
      }
    },
    ConsumedWeight: 'PerDispatchClassWeight',
    DigestOf: 'Digest',
    DispatchClass: {
      _enum: ['Normal', 'Operational', 'Mandatory']
    },
    DispatchError: {
      _enum: {
        Other: 'Null',
        CannotLookup: 'Null',
        BadOrigin: 'Null',
        Module: 'DispatchErrorModule',
        ConsumerRemaining: 'Null',
        NoProviders: 'Null',
        Token: 'TokenError',
        Arithmetic: 'ArithmeticError'
      }
    },
    DispatchErrorModule: {
      index: 'u8',
      error: 'u8'
    },
    DispatchErrorTo198: {
      module: 'Option<u8>',
      error: 'u8'
    },
    DispatchInfo: {
      weight: 'Weight',
      class: 'DispatchClass',
      paysFee: 'Pays'
    },
    DispatchInfoTo190: {
      weight: 'Weight',
      class: 'DispatchClass'
    },
    DispatchInfoTo244: {
      weight: 'Weight',
      class: 'DispatchClass',
      paysFee: 'bool'
    },
    DispatchOutcome: 'Result<(), DispatchError>',
    DispatchResult: 'Result<(), DispatchError>',
    DispatchResultOf: 'DispatchResult',
    DispatchResultTo198: 'Result<(), Text>',
    Event: 'GenericEvent',
    EventId: '[u8; 2]',
    EventIndex: 'u32',
    EventRecord: {
      phase: 'Phase',
      event: 'Event',
      topics: 'Vec<Hash>'
    },
    Health: {
      peers: 'u64',
      isSyncing: 'bool',
      shouldHavePeers: 'bool'
    },
    InvalidTransaction: {
      _enum: {
        Call: 'Null',
        Payment: 'Null',
        Future: 'Null',
        Stale: 'Null',
        BadProof: 'Null',
        AncientBirthBlock: 'Null',
        ExhaustsResources: 'Null',
        Custom: 'u8',
        BadMandatory: 'Null',
        MandatoryDispatch: 'Null'
      }
    },
    Key: 'Bytes',
    LastRuntimeUpgradeInfo: {
      specVersion: 'Compact<u32>',
      specName: 'Text'
    },
    NetworkState: {
      peerId: 'Text',
      listenedAddresses: 'Vec<Text>',
      externalAddresses: 'Vec<Text>',
      connectedPeers: 'HashMap<Text, Peer>',
      notConnectedPeers: 'HashMap<Text, NotConnectedPeer>',
      averageDownloadPerSec: 'u64',
      averageUploadPerSec: 'u64',
      peerset: 'NetworkStatePeerset'
    },
    NetworkStatePeerset: {
      messageQueue: 'u64',
      nodes: 'HashMap<Text, NetworkStatePeersetInfo>'
    },
    NetworkStatePeersetInfo: {
      connected: 'bool',
      reputation: 'i32'
    },
    NodeRole: {
      _enum: {
        Full: 'Null',
        LightClient: 'Null',
        Authority: 'Null',
        UnknownRole: 'u8'
      }
    },
    NotConnectedPeer: {
      knownAddresses: 'Vec<Text>',
      latestPingTime: 'Option<PeerPing>',
      versionString: 'Option<Text>'
    },
    Peer: {
      enabled: 'bool',
      endpoint: 'PeerEndpoint',
      knownAddresses: 'Vec<Text>',
      latestPingTime: 'PeerPing',
      open: 'bool',
      versionString: 'Text'
    },
    PeerEndpoint: {
      listening: 'PeerEndpointAddr'
    },
    PeerEndpointAddr: {
      _alias: {
        localAddr: 'local_addr',
        sendBackAddr: 'send_back_addr'
      },
      localAddr: 'Text',
      sendBackAddr: 'Text'
    },
    PeerPing: {
      nanos: 'u64',
      secs: 'u64'
    },
    PeerInfo: {
      peerId: 'Text',
      roles: 'Text',
      protocolVersion: 'u32',
      bestHash: 'Hash',
      bestNumber: 'BlockNumber'
    },
    PerDispatchClassU32: {
      normal: 'u32',
      operational: 'u32',
      mandatory: 'u32'
    },
    PerDispatchClassWeight: {
      normal: 'Weight',
      operational: 'Weight',
      mandatory: 'Weight'
    },
    PerDispatchClassWeightsPerClass: {
      normal: 'WeightPerClass',
      operational: 'WeightPerClass',
      mandatory: 'WeightPerClass'
    },
    Phase: {
      _enum: {
        ApplyExtrinsic: 'u32',
        Finalization: 'Null',
        Initialization: 'Null'
      }
    },
    RawOrigin: {
      _enum: {
        Root: 'Null',
        Signed: 'AccountId',
        None: 'Null'
      }
    },
    RefCount: 'u32',
    RefCountTo259: 'u8',
    SyncState: {
      startingBlock: 'BlockNumber',
      currentBlock: 'BlockNumber',
      highestBlock: 'Option<BlockNumber>'
    },
    SystemOrigin: 'RawOrigin',
    TokenError: {
      _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', // these are dropped, but still in older versions
      // (if this adjusts, will need to take a re-look)
      'Underflow', 'Overflow']
    },
    TransactionValidityError: {
      _enum: {
        Invalid: 'InvalidTransaction',
        Unknown: 'UnknownTransaction'
      }
    },
    UnknownTransaction: {
      _enum: {
        CannotLookup: 'Null',
        NoUnsignedValidator: 'Null',
        Custom: 'u8'
      }
    },
    WeightPerClass: {
      baseExtrinsic: 'Weight',
      maxExtrinsic: 'Weight',
      maxTotal: 'Option<Weight>',
      reserved: 'Option<Weight>'
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/treasury/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const treasury_definitions = ({
  rpc: {},
  types: {
    Bounty: {
      proposer: 'AccountId',
      value: 'Balance',
      fee: 'Balance',
      curatorDeposit: 'Balance',
      bond: 'Balance',
      status: 'BountyStatus'
    },
    BountyIndex: 'u32',
    BountyStatus: {
      _enum: {
        Proposed: 'Null',
        Approved: 'Null',
        Funded: 'Null',
        CuratorProposed: 'BountyStatusCuratorProposed',
        Active: 'BountyStatusActive',
        PendingPayout: 'BountyStatusPendingPayout'
      }
    },
    BountyStatusActive: {
      curator: 'AccountId',
      updateDue: 'BlockNumber'
    },
    BountyStatusCuratorProposed: {
      curator: 'AccountId'
    },
    BountyStatusPendingPayout: {
      curator: 'AccountId',
      beneficiary: 'AccountId',
      unlockAt: 'BlockNumber'
    },
    OpenTip: {
      reason: 'Hash',
      who: 'AccountId',
      finder: 'AccountId',
      deposit: 'Balance',
      closes: 'Option<BlockNumber>',
      tips: 'Vec<OpenTipTip>',
      findersFee: 'bool'
    },
    OpenTipTo225: {
      reason: 'Hash',
      who: 'AccountId',
      finder: 'Option<OpenTipFinderTo225>',
      closes: 'Option<BlockNumber>',
      tips: 'Vec<OpenTipTip>'
    },
    OpenTipFinderTo225: '(AccountId, Balance)',
    OpenTipTip: '(AccountId, Balance)',
    TreasuryProposal: {
      proposer: 'AccountId',
      value: 'Balance',
      beneficiary: 'AccountId',
      bond: 'Balance'
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/txpayment/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
/* harmony default export */ const txpayment_definitions = ({
  rpc: {},
  types: {
    Multiplier: 'Fixed128'
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/uniques/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const uniques_definitions = ({
  rpc: {},
  types: {
    ClassId: 'u32',
    InstanceId: 'u32',
    DepositBalance: 'Balance',
    DepositBalanceOf: 'Balance',
    ClassDetails: {
      owner: 'AccountId',
      issuer: 'AccountId',
      admin: 'AccountId',
      freezer: 'AccountId',
      totalTeposit: 'DepositBalance',
      freeHolding: 'bool',
      instances: 'u32',
      instanceMetadatas: 'u32',
      isFrozen: 'bool'
    },
    DestroyWitness: {
      instances: 'Compact<u32>',
      instanceMetadatas: 'Compact<u32>'
    },
    InstanceDetails: {
      owner: 'AccountId',
      approved: 'Option<AccountId>',
      isFrozen: 'bool',
      deposit: 'DepositBalance'
    },
    ClassMetadata: {
      deposit: 'DepositBalance',
      name: 'Vec<u8>',
      information: 'Vec<u8>',
      isFrozen: 'bool'
    },
    InstanceMetadata: {
      deposit: 'DepositBalance',
      name: 'Vec<u8>',
      information: 'Vec<u8>',
      isFrozen: 'bool'
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/utility/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const utility_definitions = ({
  rpc: {},
  types: {
    Multisig: {
      when: 'Timepoint',
      deposit: 'Balance',
      depositor: 'AccountId',
      approvals: 'Vec<AccountId>'
    },
    Timepoint: {
      height: 'BlockNumber',
      index: 'u32'
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/vesting/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const vesting_definitions = ({
  rpc: {},
  types: {
    VestingInfo: {
      locked: 'Balance',
      perBlock: 'Balance',
      startingBlock: 'BlockNumber'
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/attestations/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const attestations_definitions = ({
  rpc: {},
  types: {
    BlockAttestations: {
      receipt: 'CandidateReceipt',
      valid: 'Vec<AccountId>',
      invalid: 'Vec<AccountId>'
    },
    IncludedBlocks: {
      actualNumber: 'BlockNumber',
      session: 'SessionIndex',
      randomSeed: 'H256',
      activeParachains: 'Vec<ParaId>',
      paraBlocks: 'Vec<Hash>'
    },
    MoreAttestations: {}
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/bridges/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const bridges_definitions = ({
  rpc: {},
  types: {
    BridgedBlockHash: 'H256',
    BridgedBlockNumber: 'BlockNumber',
    BridgedHeader: 'Header',
    InitializationData: {
      header: 'Header',
      authorityList: 'AuthorityList',
      setId: 'SetId',
      isHalted: 'bool'
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/claims/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const claims_definitions = ({
  rpc: {},
  types: {
    EthereumAddress: 'H160',
    StatementKind: {
      _enum: ['Regular', 'Saft']
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/crowdloan/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const crowdloan_definitions = ({
  rpc: {},
  types: {
    FundIndex: 'u32',
    LastContribution: {
      _enum: {
        Never: 'Null',
        PreEnding: 'u32',
        Ending: 'BlockNumber'
      }
    },
    FundInfo: {
      depositor: 'AccountId',
      verifier: 'Option<MultiSigner>',
      deposit: 'Balance',
      raised: 'Balance',
      end: 'BlockNumber',
      cap: 'Balance',
      lastContribution: 'LastContribution',
      firstPeriod: 'LeasePeriod',
      lastPeriod: 'LeasePeriod',
      trieIndex: 'TrieIndex'
    },
    TrieIndex: 'u32'
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/cumulus/definitions.js


function cumulus_definitions_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function cumulus_definitions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { cumulus_definitions_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { cumulus_definitions_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
const dmpQueue = {
  ConfigData: {
    maxIndividual: 'Weight'
  },
  MessageId: '[u8; 32]',
  OverweightIndex: 'u64',
  PageCounter: 'u32',
  PageIndexData: {
    beginUsed: 'PageCounter',
    endUsed: 'PageCounter',
    overweightCount: 'OverweightIndex'
  }
};
/* harmony default export */ const cumulus_definitions = ({
  rpc: {},
  types: cumulus_definitions_objectSpread({}, dmpQueue)
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/parachains/hrmp.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const hrmp = ({
  HrmpChannel: {
    maxCapacity: 'u32',
    maxTotalSize: 'u32',
    maxMessageSize: 'u32',
    msgCount: 'u32',
    totalSize: 'u32',
    mqcHead: 'Option<Hash>',
    senderDeposit: 'Balance',
    recipientDeposit: 'Balance'
  },
  HrmpChannelId: {
    sender: 'u32',
    receiver: 'u32'
  },
  HrmpOpenChannelRequest: {
    confirmed: 'bool',
    age: 'SessionIndex',
    senderDeposit: 'Balance',
    maxMessageSize: 'u32',
    maxCapacity: 'u32',
    maxTotalSize: 'u32'
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/parachains/slots.js


function slots_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function slots_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { slots_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { slots_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
const SLOT_RANGE_COUNT = 10;
const oldTypes = {
  Bidder: {
    _enum: {
      New: 'NewBidder',
      Existing: 'ParaId'
    }
  },
  IncomingParachain: {
    _enum: {
      Unset: 'NewBidder',
      Fixed: 'IncomingParachainFixed',
      Deploy: 'IncomingParachainDeploy'
    }
  },
  IncomingParachainDeploy: {
    code: 'ValidationCode',
    initialHeadData: 'HeadData'
  },
  IncomingParachainFixed: {
    codeHash: 'Hash',
    codeSize: 'u32',
    initialHeadData: 'HeadData'
  },
  NewBidder: {
    who: 'AccountId',
    sub: 'SubId'
  },
  SubId: 'u32'
};
/* harmony default export */ const slots = (slots_objectSpread(slots_objectSpread({}, oldTypes), {}, {
  AuctionIndex: 'u32',
  LeasePeriod: 'BlockNumber',
  LeasePeriodOf: 'BlockNumber',
  SlotRange: {
    _enum: ['ZeroZero', 'ZeroOne', 'ZeroTwo', 'ZeroThree', 'OneOne', 'OneTwo', 'OneThree', 'TwoTwo', 'TwoThree', 'ThreeThree']
  },
  WinningData: `[WinningDataEntry; ${SLOT_RANGE_COUNT}]`,
  WinningDataEntry: 'Option<(AccountId, ParaId, BalanceOf)>',
  WinnersData: 'Vec<WinnersDataTuple>',
  WinnersDataTuple: '(AccountId, ParaId, BalanceOf, SlotRange)'
}));
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/parachains/definitions.js


function parachains_definitions_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function parachains_definitions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { parachains_definitions_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { parachains_definitions_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */

 // proposeParachain

const proposeTypes = {
  ParachainProposal: {
    proposer: 'AccountId',
    genesisHead: 'HeadData',
    validators: 'Vec<ValidatorId>',
    name: 'Bytes',
    balance: 'Balance'
  },
  RegisteredParachainInfo: {
    validators: 'Vec<ValidatorId>',
    proposer: 'AccountId'
  }
};
const cumulusTypes = {
  ServiceQuality: {
    _enum: ['Ordered', 'Fast']
  }
};
/* harmony default export */ const parachains_definitions = ({
  rpc: {},
  types: parachains_definitions_objectSpread(parachains_definitions_objectSpread(parachains_definitions_objectSpread(parachains_definitions_objectSpread(parachains_definitions_objectSpread({}, cumulusTypes), hrmp), proposeTypes), slots), {}, {
    AbridgedCandidateReceipt: {
      parachainIndex: 'ParaId',
      relayParent: 'Hash',
      headData: 'HeadData',
      collator: 'CollatorId',
      signature: 'CollatorSignature',
      povBlockHash: 'Hash',
      commitments: 'CandidateCommitments'
    },
    AbridgedHostConfiguration: {
      maxCodeSize: 'u32',
      maxHeadDataSize: 'u32',
      maxUpwardQueueCount: 'u32',
      maxUpwardQueueSize: 'u32',
      maxUpwardMessageSize: 'u32',
      maxUpwardMessageNumPerCandidate: 'u32',
      hrmpMaxMessageNumPerCandidate: 'u32',
      validationUpgradeFrequency: 'BlockNumber',
      validationUpgradeDelay: 'BlockNumber'
    },
    AbridgedHrmpChannel: {
      maxCapacity: 'u32',
      maxTotalSize: 'u32',
      maxMessageSize: 'u32',
      msgCount: 'u32',
      totalSize: 'u32',
      mqcHead: 'Option<Hash>'
    },
    AssignmentId: 'AccountId',
    AssignmentKind: {
      _enum: {
        Parachain: 'Null',
        Parathread: '(CollatorId, u32)'
      }
    },
    AttestedCandidate: {
      candidate: 'AbridgedCandidateReceipt',
      validityVotes: 'Vec<ValidityAttestation>',
      validatorIndices: 'BitVec'
    },
    AuthorityDiscoveryId: 'AccountId',
    AvailabilityBitfield: 'BitVec',
    AvailabilityBitfieldRecord: {
      bitfield: 'AvailabilityBitfield',
      submittedTt: 'BlockNumber'
    },
    BackedCandidate: {
      candidate: 'CommittedCandidateReceipt',
      validityVotes: 'Vec<ValidityAttestation>',
      validatorIndices: 'BitVec'
    },
    BufferedSessionChange: {
      applyAt: 'BlockNumber',
      validators: 'Vec<ValidatorId>',
      queued: 'Vec<ValidatorId>',
      sessionIndex: 'SessionIndex'
    },
    CandidateCommitments: {
      upwardMessages: 'Vec<UpwardMessage>',
      horizontalMessages: 'Vec<OutboundHrmpMessage>',
      newValidationCode: 'Option<ValidationCode>',
      headData: 'HeadData',
      processedDownwardMessages: 'u32',
      hrmpWatermark: 'BlockNumber'
    },
    CandidateDescriptor: {
      paraId: 'ParaId',
      relayParent: 'RelayChainHash',
      collatorId: 'CollatorId',
      persistedValidationDataHash: 'Hash',
      povHash: 'Hash',
      erasureRoot: 'Hash',
      signature: 'CollatorSignature',
      paraHead: 'Hash',
      validationCodeHash: 'Hash'
    },
    CandidateHash: 'Hash',
    CandidateInfo: {
      who: 'AccountId',
      deposit: 'Balance'
    },
    CandidatePendingAvailability: {
      core: 'CoreIndex',
      hash: 'CandidateHash',
      descriptor: 'CandidateDescriptor',
      availabilityVotes: 'BitVec',
      backers: 'BitVec',
      relayParentNumber: 'BlockNumber',
      backedInNumber: 'BlockNumber',
      backingGroup: 'GroupIndex'
    },
    CandidateReceipt: {
      descriptor: 'CandidateDescriptor',
      commitmentsHash: 'Hash'
    },
    GlobalValidationData: {
      maxCodeSize: 'u32',
      maxHeadDataSize: 'u32',
      blockNumber: 'BlockNumber'
    },
    CollatorId: 'H256',
    CollatorSignature: 'Signature',
    CommittedCandidateReceipt: {
      descriptor: 'CandidateDescriptor',
      commitments: 'CandidateCommitments'
    },
    CoreAssignment: {
      core: 'CoreIndex',
      paraId: 'ParaId',
      kind: 'AssignmentKind',
      groupIdx: 'GroupIndex'
    },
    CoreIndex: 'u32',
    CoreOccupied: {
      _enum: {
        Parathread: 'ParathreadEntry',
        Parachain: 'Null'
      }
    },
    DisputeStatementSet: {
      candidateHash: 'CandidateHash',
      session: 'SessionIndex',
      statements: 'Vec<(DisputeStatement, ValidatorIndex, ValidatorSignature)>'
    },
    MultiDisputeStatementSet: 'Vec<DisputeStatementSet>',
    DisputeStatement: {
      _enum: {
        Valid: 'ValidDisputeStatementKind',
        Invalid: 'InvalidDisputeStatementKind'
      }
    },
    ValidDisputeStatementKind: {
      _enum: ['Explicit', 'BackingSeconded', 'BackingValid', 'ApprovalChecking']
    },
    InvalidDisputeStatementKind: {
      _enum: ['Explicit']
    },
    ExplicitDisputeStatement: {
      valid: 'bool',
      candidateHash: 'CandidateHash',
      session: 'SessionIndex'
    },
    DoubleVoteReport: {
      identity: 'ValidatorId',
      first: '(Statement, ValidatorSignature)',
      second: '(Statement, ValidatorSignature)',
      proof: 'MembershipProof',
      signingContext: 'SigningContext'
    },
    DownwardMessage: 'Bytes',
    GroupIndex: 'u32',
    GlobalValidationSchedule: {
      maxCodeSize: 'u32',
      maxHeadDataSize: 'u32',
      blockNumber: 'BlockNumber'
    },
    HeadData: 'Bytes',
    HostConfiguration: {
      maxCodeSize: 'u32',
      maxHeadDataSize: 'u32',
      maxUpwardQueueCount: 'u32',
      maxUpwardQueueSize: 'u32',
      maxUpwardMessageSize: 'u32',
      maxUpwardMessageNumPerCandidate: 'u32',
      hrmpMaxMessageNumPerCandidate: 'u32',
      validationUpgradeFrequency: 'BlockNumber',
      validationUpgradeDelay: 'BlockNumber',
      maxPovSize: 'u32',
      maxDownwardMessageSize: 'u32',
      preferredDispatchableUpwardMessagesStepWeight: 'Weight',
      hrmpMaxParachainOutboundChannels: 'u32',
      hrmpMaxParathreadOutboundChannels: 'u32',
      hrmpOpenRequestTtl: 'u32',
      hrmpSenderDeposit: 'Balance',
      hrmpRecipientDeposit: 'Balance',
      hrmpChannelMaxCapacity: 'u32',
      hrmpChannelMaxTotalSize: 'u32',
      hrmpMaxParachainInboundChannels: 'u32',
      hrmpMaxParathreadInboundChannels: 'u32',
      hrmpChannelMaxMessageSize: 'u32',
      codeRetentionPeriod: 'BlockNumber',
      parathreadCores: 'u32',
      parathreadRetries: 'u32',
      groupRotationFrequency: 'BlockNumber',
      chainAvailabilityPeriod: 'BlockNumber',
      threadAvailabilityPeriod: 'BlockNumber',
      schedulingLookahead: 'u32',
      maxValidatorsPerCore: 'Option<u32>',
      maxValidators: 'Option<u32>',
      disputePeriod: 'SessionIndex',
      disputePostConclusionAcceptancePeriod: 'BlockNumber',
      disputeMaxSpamSlots: 'u32',
      disputeConclusionByTimeOutPeriod: 'BlockNumber',
      noShowSlots: 'u32',
      nDelayTranches: 'u32',
      zerothDelayTrancheWidth: 'u32',
      neededApprovals: 'u32',
      relayVrfModuloSamples: 'u32'
    },
    InboundDownwardMessage: {
      pubSentAt: 'BlockNumber',
      pubMsg: 'DownwardMessage'
    },
    InboundHrmpMessage: {
      sentAt: 'BlockNumber',
      data: 'Bytes'
    },
    InboundHrmpMessages: 'Vec<InboundHrmpMessage>',
    LocalValidationData: {
      parentHead: 'HeadData',
      balance: 'Balance',
      codeUpgradeAllowed: 'Option<BlockNumber>'
    },
    MessageIngestionType: {
      downwardMessages: 'Vec<InboundDownwardMessage>',
      horizontalMessages: 'BTreeMap<ParaId, InboundHrmpMessages>'
    },
    MessageQueueChain: 'RelayChainHash',
    OutboundHrmpMessage: {
      recipient: 'u32',
      data: 'Bytes'
    },
    ParachainDispatchOrigin: {
      _enum: ['Signed', 'Parachain', 'Root']
    },
    ParachainInherentData: {
      validationData: 'PersistedValidationData',
      relayChainState: 'StorageProof',
      downwardMessages: 'Vec<InboundDownwardMessage>',
      horizontalMessages: 'BTreeMap<ParaId, VecInboundHrmpMessage>'
    },
    ParachainsInherentData: {
      bitfields: 'SignedAvailabilityBitfields',
      backedCandidates: 'Vec<BackedCandidate>',
      disputes: 'MultiDisputeStatementSet',
      parentHeader: 'Header'
    },
    ParaGenesisArgs: {
      genesisHead: 'Bytes',
      validationCode: 'Bytes',
      parachain: 'bool'
    },
    ParaId: 'u32',
    ParaInfo: {
      manager: 'AccountId',
      deposit: 'Balance',
      locked: 'bool'
    },
    ParaLifecycle: {
      _enum: ['Onboarding', 'Parathread', 'Parachain', 'UpgradingToParachain', 'DowngradingToParathread', 'OutgoingParathread', 'OutgoingParachain']
    },
    ParaPastCodeMeta: {
      upgradeTimes: 'Vec<BlockNumber>',
      lastPruned: 'Option<BlockNumber>'
    },
    ParaScheduling: {
      _enum: ['Always', 'Dynamic']
    },
    ParathreadClaim: '(ParaId, CollatorId)',
    ParathreadClaimQueue: {
      queue: 'Vec<QueuedParathread>',
      nextCoreOffset: 'u32'
    },
    ParathreadEntry: {
      claim: 'ParathreadClaim',
      retries: 'u32'
    },
    ParaValidatorIndex: 'u32',
    PersistedValidationData: {
      parentHead: 'HeadData',
      relayParentNumber: 'RelayChainBlockNumber',
      relayParentStorageRoot: 'Hash',
      maxPovSize: 'u32'
    },
    RelayBlockNumber: 'u32',
    RelayChainBlockNumber: 'RelayBlockNumber',
    RelayHash: 'Hash',
    RelayChainHash: 'RelayHash',
    QueuedParathread: {
      claim: 'ParathreadEntry',
      coreOffset: 'u32'
    },
    Remark: '[u8; 32]',
    Retriable: {
      _enum: {
        Never: 'Null',
        WithRetries: 'u32'
      }
    },
    Scheduling: {
      _enum: ['Always', 'Dynamic']
    },
    SessionInfo: {
      validators: 'Vec<ValidatorId>',
      discoveryKeys: 'Vec<AuthorityDiscoveryId>',
      assignmentKeys: 'Vec<AssignmentId>',
      validatorGroups: 'Vec<SessionInfoValidatorGroup>',
      nCores: 'u32',
      zerothDelayTrancheWidth: 'u32',
      relayVrfModuloSamples: 'u32',
      nDelayTranches: 'u32',
      noShowSlots: 'u32',
      neededApprovals: 'u32'
    },
    SessionInfoValidatorGroup: 'Vec<ParaValidatorIndex>',
    SignedAvailabilityBitfield: {
      payload: 'BitVec',
      validatorIndex: 'ParaValidatorIndex',
      signature: 'ValidatorSignature'
    },
    SignedAvailabilityBitfields: 'Vec<SignedAvailabilityBitfield>',
    SigningContext: {
      sessionIndex: 'SessionIndex',
      parentHash: 'Hash'
    },
    Statement: {
      _enum: {
        Never: 'Null',
        // starts at 1
        Candidate: 'Hash',
        Valid: 'Hash',
        Invalid: 'Hash'
      }
    },
    TransientValidationData: {
      maxCodeSize: 'u32',
      maxHeadDataSize: 'u32',
      balance: 'Balance',
      codeUpgradeAllowed: 'Option<BlockNumber>',
      dmqLength: 'u32'
    },
    UpwardMessage: 'Bytes',
    ValidationFunctionParams: {
      maxCodeSize: 'u32',
      relayChainHeight: 'RelayChainBlockNumber',
      codeUpgradeAllowed: 'Option<RelayChainBlockNumber>'
    },
    ValidationCode: 'Bytes',
    ValidationData: {
      persisted: 'PersistedValidationData',
      transient: 'TransientValidationData'
    },
    ValidationDataType: {
      validationData: 'ValidationData',
      relayChainState: 'Vec<Bytes>'
    },
    ValidatorSignature: 'Signature',
    ValidityAttestation: {
      _enum: {
        Never: 'Null',
        // starts at 1
        Implicit: 'ValidatorSignature',
        Explicit: 'ValidatorSignature'
      }
    },
    MessagingStateSnapshot: {
      relayDispatchQueueSize: '(u32, u32)',
      egressChannels: 'Vec<MessagingStateSnapshotEgressEntry>'
    },
    MessagingStateSnapshotEgressEntry: '(ParaId, AbridgedHrmpChannel)',
    SystemInherentData: 'ParachainInherentData',
    VecInboundHrmpMessage: 'Vec<InboundHrmpMessage>'
  })
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/poll/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const poll_definitions = ({
  rpc: {},
  types: {
    Approvals: '[bool; 4]'
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/purchase/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const purchase_definitions = ({
  rpc: {},
  types: {
    AccountStatus: {
      validity: 'AccountValidity',
      freeBalance: 'Balance',
      lockedBalance: 'Balance',
      signature: 'Vec<u8>',
      vat: 'Permill'
    },
    AccountValidity: {
      _enum: ['Invalid', 'Initiated', 'Pending', 'ValidLow', 'ValidHigh', 'Completed']
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/xcm/definitions.js


function xcm_definitions_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function xcm_definitions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { xcm_definitions_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { xcm_definitions_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
const xcm = {
  XcmAssetEffects: {
    assets: 'Vec<MultiAsset>',
    effects: 'Vec<XcmOrder>'
  },
  XcmWithdrawAsset: 'XcmAssetEffects',
  XcmReserveAssetDeposit: 'XcmAssetEffects',
  XcmTeleportAsset: 'XcmAssetEffects',
  XcmQueryResponse: {
    queryId: 'Compact<u64>',
    response: 'XcmResponse'
  },
  XcmTransferAsset: {
    assets: 'Vec<MultiAsset>',
    dest: 'MultiLocation'
  },
  XcmTransferReserveAsset: {
    assets: 'Vec<MultiAsset>',
    dest: 'MultiLocation',
    effects: 'Vec<XcmOrder>'
  },
  XcmTransact: {
    originType: 'XcmOriginKind',
    requireWeightAtMost: 'u64',
    call: 'DoubleEncodedCall'
  },
  XcmHrmpNewChannelOpenRequest: {
    sender: 'Compact<u32>',
    maxMessageSize: 'Compact<u32>',
    maxCapacity: 'Compact<u32>'
  },
  XcmHrmpChannelAccepted: {
    recipient: 'Compact<u32>'
  },
  XcmHrmpChannelClosing: {
    initiator: 'Compact<u32>',
    sender: 'Compact<u32>',
    recipient: 'Compact<u32>'
  },
  XcmRelayedFrom: {
    who: 'MultiLocation',
    message: 'Xcm'
  },
  Xcm: {
    _enum: {
      WithdrawAsset: 'XcmWithdrawAsset',
      ReserveAssetDeposit: 'XcmReserveAssetDeposit',
      TeleportAsset: 'XcmTeleportAsset',
      QueryResponse: 'XcmQueryResponse',
      TransferAsset: 'XcmTransferAsset',
      TransferReserveAsset: 'XcmTransferReserveAsset',
      Transact: 'XcmTransact',
      HrmpNewChannelOpenRequest: 'XcmHrmpNewChannelOpenRequest',
      HrmpChannelAccepted: 'XcmHrmpChannelAccepted',
      HrmpChannelClosing: 'XcmHrmpChannelClosing',
      RelayedFrom: 'XcmRelayedFrom'
    }
  },
  XcmpMessageFormat: {
    _enum: ['ConcatenatedVersionedXcm', 'ConcatenatedEncodedBlob', 'Signals']
  },
  VersionedXcm: {
    _enum: {
      V0: 'Xcm'
    }
  }
};
const xmcOrder = {
  XcmOrderDepositAsset: {
    assets: 'Vec<MultiAsset>',
    dest: 'MultiLocation'
  },
  XcmOrderDepositReserveAsset: {
    assets: 'Vec<MultiAsset>',
    dest: 'MultiLocation',
    effects: 'Vec<XcmOrder>'
  },
  XcmOrderExchangeAsset: {
    give: 'Vec<MultiAsset>',
    receive: 'Vec<MultiAsset>'
  },
  XcmOrderInitiateReserveWithdraw: {
    assets: 'Vec<MultiAsset>',
    reserve: 'MultiLocation',
    effects: 'Vec<XcmOrder>'
  },
  XcmOrderInitiateTeleport: {
    assets: 'Vec<MultiAsset>',
    dest: 'MultiLocation',
    effects: 'Vec<XcmOrder>'
  },
  XcmOrderQueryHolding: {
    queryId: 'Compact<u64>',
    dest: 'MultiLocation',
    assets: 'Vec<MultiAsset>'
  },
  XcmOrderBuyExecution: {
    fees: 'MultiAsset',
    weight: 'u64',
    debt: 'u64',
    haltOnError: 'bool',
    xcm: 'Vec<Xcm>'
  },
  XcmOrder: {
    _enum: {
      Null: 'Null',
      DepositAsset: 'XcmOrderDepositAsset',
      DepositReserveAsset: 'XcmOrderDepositReserveAsset',
      ExchangeAsset: 'XcmOrderExchangeAsset',
      InitiateReserveWithdraw: 'XcmOrderInitiateReserveWithdraw',
      InitiateTeleport: 'XcmOrderInitiateTeleport',
      QueryHolding: 'XcmOrderQueryHolding',
      BuyExecution: 'XcmOrderBuyExecution'
    }
  }
};
const multiAsset = {
  InboundStatus: {
    _enum: ['Ok', 'Suspended']
  },
  OutboundStatus: {
    _enum: ['Ok', 'Suspended']
  },
  MultiAssetAbstractFungible: {
    id: 'Vec<u8>',
    instance: 'Compact<u128>'
  },
  MultiAssetAbstractNonFungible: {
    class: 'Vec<u8>',
    instance: 'AssetInstance'
  },
  MultiAssetConcreteFungible: {
    id: 'MultiLocation',
    amount: 'Compact<u128>'
  },
  MultiAssetConcreteNonFungible: {
    class: 'MultiLocation',
    instance: 'AssetInstance'
  },
  MultiAsset: {
    _enum: {
      None: 'Null',
      All: 'Null',
      AllFungible: 'Null',
      AllNonFungible: 'Null',
      AllAbstractFungible: 'Vec<u8>',
      AllAbstractNonFungible: 'Vec<u8>',
      AllConcreteFungible: 'MultiLocation',
      AllConcreteNonFungible: 'MultiLocation',
      AbstractFungible: 'MultiAssetAbstractFungible',
      AbstractNonFungible: 'MultiAssetAbstractNonFungible',
      ConcreteFungible: 'MultiAssetConcreteFungible',
      ConcreteNonFungible: 'MultiAssetConcreteNonFungible'
    }
  },
  VersionedMultiAsset: {
    _enum: {
      V0: 'MultiAsset'
    }
  }
};
const junction = {
  BodyId: {
    _enum: {
      Unit: 'Null',
      Named: 'Vec<u8>',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null'
    }
  },
  BodyPart: {
    _enum: {
      Voice: 'Null',
      Members: 'Compact<u32>',
      Fraction: 'BodyPartFraction',
      AtLeastProportion: 'BodyPartAtLeastProportion',
      MoreThanProportion: 'BodyPartMoreThanProportion'
    }
  },
  BodyPartFraction: {
    nom: 'Compact<u32>',
    denom: 'Compact<u32>'
  },
  BodyPartAtLeastProportion: {
    nom: 'Compact<u32>',
    denom: 'Compact<u32>'
  },
  BodyPartMoreThanProportion: {
    nom: 'Compact<u32>',
    denom: 'Compact<u32>'
  },
  AccountId32Junction: {
    network: 'NetworkId',
    id: 'AccountId'
  },
  AccountIndex64Junction: {
    network: 'NetworkId',
    index: 'Compact<u64>'
  },
  AccountKey20Junction: {
    network: 'NetworkId',
    index: '[u8; 20]'
  },
  PluralityJunction: {
    id: 'BodyId',
    part: 'BodyPart'
  },
  Junction: {
    _enum: {
      Parent: 'Null',
      Parachain: 'Compact<u32>',
      AccountId32: 'AccountId32Junction',
      AccountIndex64: 'AccountIndex64Junction',
      AccountKey20: 'AccountKey20Junction',
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: 'Vec<u8>',
      OnlyChild: 'Null',
      Plurality: 'PluralityJunction'
    }
  },
  NetworkId: {
    _enum: {
      Any: 'Null',
      Named: 'Vec<u8>',
      Polkadot: 'Null',
      Kusama: 'Null'
    }
  }
};
/* harmony default export */ const xcm_definitions = ({
  rpc: {},
  types: xcm_definitions_objectSpread(xcm_definitions_objectSpread(xcm_definitions_objectSpread(xcm_definitions_objectSpread(xcm_definitions_objectSpread({}, junction), multiAsset), xcm), xmcOrder), {}, {
    DoubleEncodedCall: {
      encoded: 'Vec<u8>'
    },
    XcmOriginKind: {
      _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
    },
    XcmResponse: {
      _enum: {
        Assets: 'Vec<MultiAsset>'
      }
    },
    XcmError: {
      _enum: {
        Undefined: 'Null',
        Overflow: 'Null',
        Unimplemented: 'Null',
        UnhandledXcmVersion: 'Null',
        UnhandledXcmMessage: 'Null',
        UnhandledEffect: 'Null',
        EscalationOfPrivilege: 'Null',
        UntrustedReserveLocation: 'Null',
        UntrustedTeleportLocation: 'Null',
        DestinationBufferOverflow: 'Null',
        SendFailed: 'Null',
        // (#[codec(skip)] &'static str),
        CannotReachDestination: '(MultiLocation, Xcm)',
        MultiLocationFull: 'Null',
        FailedToDecode: 'Null',
        BadOrigin: 'Null',
        ExceedsMaxMessageSize: 'Null',
        FailedToTransactAsset: 'Null',
        // (#[codec(skip)] &'static str),
        WeightLimitReached: 'Weight',
        Wildcard: 'Null',
        TooMuchWeightRequired: 'Null',
        NotHoldingFees: 'Null',
        WeightNotComputable: 'Null',
        Barrier: 'Null',
        NotWithdrawable: 'Null',
        LocationCannotHold: 'Null',
        TooExpensive: 'Null'
      }
    },
    MultiLocation: {
      _enum: {
        Null: 'Null',
        X1: 'Junction',
        X2: '(Junction, Junction)',
        X3: '(Junction, Junction, Junction)',
        X4: '(Junction, Junction, Junction, Junction)',
        X5: '(Junction, Junction, Junction, Junction, Junction)',
        X6: '(Junction, Junction, Junction, Junction, Junction, Junction)',
        X7: '(Junction, Junction, Junction, Junction, Junction, Junction, Junction)',
        X8: '(Junction, Junction, Junction, Junction, Junction, Junction, Junction, Junction)'
      }
    },
    Outcome: {
      _enum: {
        Complete: 'Weight',
        Incomplete: '(Weight, XcmError)',
        Error: 'XcmError'
      }
    },
    QueueConfigData: {
      suspendThreshold: 'u32',
      dropThreshold: 'u32',
      resumeThreshold: 'u32',
      thresholdWeight: 'Weight',
      weightRestrictDecay: 'Weight'
    },
    VersionedMultiLocation: {
      _enum: {
        V0: 'MultiLocation'
      }
    },
    AssetInstance: {
      _enum: {
        Undefined: 'Null',
        Index8: 'u8',
        Index16: 'Compact<u16>',
        Index32: 'Compact<u32>',
        Index64: 'Compact<u64>',
        Index128: 'Compact<u128>',
        Array4: '[u8; 4]',
        Array8: '[u8; 8]',
        Array16: '[u8; 16]',
        Array32: '[u8; 32]',
        Blob: 'Vec<u8>'
      }
    }
  })
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/contractsAbi/definitions.js


function contractsAbi_definitions_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function contractsAbi_definitions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { contractsAbi_definitions_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { contractsAbi_definitions_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
const layout = {
  ContractCryptoHasher: {
    _enum: ['Blake2x256', 'Sha2x256', 'Keccak256']
  },
  ContractDiscriminant: 'u32',
  ContractLayoutArray: {
    offset: 'ContractLayoutKey',
    len: 'u32',
    cellsPerElem: 'u64',
    layout: 'ContractStorageLayout'
  },
  ContractLayoutCell: {
    key: 'ContractLayoutKey',
    ty: 'SiLookupTypeId'
  },
  ContractLayoutEnum: {
    dispatchKey: 'ContractLayoutKey',
    variants: 'BTreeMap<ContractDiscriminant, ContractLayoutStruct>'
  },
  ContractLayoutHash: {
    offset: 'ContractLayoutKey',
    strategy: 'ContractLayoutHashingStrategy',
    layout: 'ContractStorageLayout'
  },
  ContractLayoutHashingStrategy: {
    hasher: 'ContractCryptoHasher',
    postfix: 'Vec<u8>',
    prefix: 'Vec<u8>'
  },
  ContractLayoutKey: '[u8; 32]',
  ContractLayoutStruct: {
    fields: 'Vec<ContractLayoutStructField>'
  },
  ContractLayoutStructField: {
    layout: 'ContractStorageLayout',
    name: 'Text'
  },
  ContractStorageLayout: {
    _enum: {
      Cell: 'ContractLayoutCell',
      Hash: 'ContractLayoutHash',
      Array: 'ContractLayoutArray',
      Struct: 'ContractLayoutStruct',
      Enum: 'ContractLayoutEnum'
    }
  }
};
const spec = {
  ContractConstructorSpec: {
    name: 'Text',
    selector: 'ContractSelector',
    args: 'Vec<ContractMessageParamSpec>',
    docs: 'Vec<Text>'
  },
  ContractContractSpec: {
    constructors: 'Vec<ContractConstructorSpec>',
    messages: 'Vec<ContractMessageSpec>',
    events: 'Vec<ContractEventSpec>',
    docs: 'Vec<Text>'
  },
  ContractDisplayName: 'SiPath',
  ContractEventParamSpec: {
    name: 'Text',
    indexed: 'bool',
    type: 'ContractTypeSpec',
    docs: 'Vec<Text>'
  },
  ContractEventSpec: {
    name: 'Text',
    args: 'Vec<ContractEventParamSpec>',
    docs: 'Vec<Text>'
  },
  ContractMessageParamSpec: {
    name: 'Text',
    type: 'ContractTypeSpec'
  },
  ContractMessageSpec: {
    name: 'Text',
    selector: 'ContractSelector',
    mutates: 'bool',
    payable: 'bool',
    args: 'Vec<ContractMessageParamSpec>',
    returnType: 'Option<ContractTypeSpec>',
    docs: 'Vec<Text>'
  },
  ContractSelector: '[u8; 4]',
  ContractTypeSpec: {
    type: 'SiLookupTypeId',
    displayName: 'ContractDisplayName'
  }
};
/* harmony default export */ const contractsAbi_definitions = ({
  rpc: {},
  types: contractsAbi_definitions_objectSpread(contractsAbi_definitions_objectSpread(contractsAbi_definitions_objectSpread({}, layout), spec), {}, {
    ContractProject: {
      // added by ABI serialization
      metadataVersion: 'Text',
      source: 'ContractProjectSource',
      contract: 'ContractProjectContract',
      // expanded scale registry: RegistryReadOnly
      types: 'Vec<SiType>',
      // renamed from layout (ignored for now, incomplete)
      // storage: 'ContractStorageLayout',
      spec: 'ContractContractSpec'
    },
    ContractProjectContract: {
      name: 'Text',
      version: 'Text',
      authors: 'Vec<Text>',
      description: 'Option<Text>',
      documentation: 'Option<Text>',
      repository: 'Option<Text>',
      homepage: 'Option<Text>',
      license: 'Option<Text>'
    },
    ContractProjectSource: {
      _alias: {
        wasmHash: 'hash'
      },
      wasmHash: '[u8; 32]',
      language: 'Text',
      compiler: 'Text',
      wasm: 'Raw'
    }
  })
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/scaleInfo/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const scaleInfo_definitions = ({
  rpc: {},
  types: {
    SiField: {
      name: 'Option<Text>',
      type: 'SiLookupTypeId'
    },
    SiLookupTypeId: 'u32',
    SiPath: 'Vec<Text>',
    SiType: {
      path: 'SiPath',
      params: 'Vec<SiLookupTypeId>',
      def: 'SiTypeDef'
    },
    SiTypeDef: {
      _enum: {
        Composite: 'SiTypeDefComposite',
        Variant: 'SiTypeDefVariant',
        Sequence: 'SiTypeDefSequence',
        Array: 'SiTypeDefArray',
        Tuple: 'SiTypeDefTuple',
        Primitive: 'SiTypeDefPrimitive'
      }
    },
    SiTypeDefArray: {
      len: 'u16',
      type: 'SiLookupTypeId'
    },
    SiTypeDefComposite: {
      fields: 'Vec<SiField>'
    },
    SiTypeDefVariant: {
      variants: 'Vec<SiVariant>'
    },
    SiTypeDefPrimitive: {
      _enum: ['Bool', 'Char', 'Str', 'U8', 'U16', 'U32', 'U64', 'U128', 'U256', 'I8', 'I16', 'I32', 'I64', 'I128', 'I256']
    },
    SiTypeDefSequence: {
      type: 'SiLookupTypeId'
    },
    SiTypeDefTuple: 'Vec<SiLookupTypeId>',
    SiVariant: {
      name: 'Text',
      fields: 'Vec<SiField>',
      discriminant: 'Option<u64>'
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/eth/rpc.js


function rpc_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function rpc_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { rpc_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { rpc_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// As per frontier
// We use aliasSection here to override since these are in another namespace
const netRpc = {
  listening: {
    aliasSection: 'net',
    description: 'Returns true if client is actively listening for network connections. Otherwise false.',
    params: [],
    type: 'bool'
  },
  peerCount: {
    aliasSection: 'net',
    description: 'Returns number of peers connected to node.',
    params: [],
    type: 'String'
  },
  version: {
    aliasSection: 'net',
    description: 'Returns protocol version.',
    params: [],
    type: 'String'
  }
};
const web3Rpc = {
  clientVersion: {
    aliasSection: 'web3',
    description: 'Returns current client version.',
    params: [],
    type: 'String'
  },
  sha3: {
    aliasSection: 'web3',
    description: 'Returns sha3 of the given data',
    params: [{
      name: 'data',
      type: 'Bytes'
    }],
    type: 'H256'
  }
};
const rpc = rpc_objectSpread(rpc_objectSpread(rpc_objectSpread({}, netRpc), web3Rpc), {}, {
  accounts: {
    description: 'Returns accounts list.',
    params: [],
    type: 'Vec<H160>'
  },
  blockNumber: {
    description: 'Returns the blockNumber',
    params: [],
    type: 'U256'
  },
  call: {
    description: 'Call contract, returning the output data.',
    params: [{
      name: 'request',
      type: 'EthCallRequest'
    }, {
      isOptional: true,
      name: 'number',
      type: 'BlockNumber'
    }],
    type: 'Bytes'
  },
  chainId: {
    description: 'Returns the chain ID used for transaction signing at the current best block. None is returned if not available.',
    params: [],
    type: 'U64'
  },
  coinbase: {
    description: 'Returns block author.',
    params: [],
    type: 'H160'
  },
  estimateGas: {
    description: 'Estimate gas needed for execution of given contract.',
    params: [{
      name: 'request',
      type: 'EthCallRequest'
    }, {
      isOptional: true,
      name: 'number',
      type: 'BlockNumber'
    }],
    type: 'U256'
  },
  gasPrice: {
    description: 'Returns current gas price.',
    params: [],
    type: 'U256'
  },
  getBalance: {
    description: 'Returns balance of the given account.',
    params: [{
      name: 'address',
      type: 'H160'
    }, {
      isOptional: true,
      name: 'number',
      type: 'BlockNumber'
    }],
    type: 'U256'
  },
  getBlockByHash: {
    description: 'Returns block with given hash.',
    params: [{
      name: 'hash',
      type: 'H256'
    }, {
      name: 'full',
      type: 'bool'
    }],
    type: 'Option<EthRichBlock>'
  },
  getBlockByNumber: {
    description: 'Returns block with given number.',
    params: [{
      name: 'block',
      type: 'BlockNumber'
    }, {
      name: 'full',
      type: 'bool'
    }],
    type: 'Option<EthRichBlock>'
  },
  getBlockTransactionCountByHash: {
    description: 'Returns the number of transactions in a block with given hash.',
    params: [{
      name: 'hash',
      type: 'H256'
    }],
    type: 'U256'
  },
  getBlockTransactionCountByNumber: {
    description: 'Returns the number of transactions in a block with given block number.',
    params: [{
      name: 'block',
      type: 'BlockNumber'
    }],
    type: 'U256'
  },
  getCode: {
    description: 'Returns the code at given address at given time (block number).',
    params: [{
      name: 'address',
      type: 'H160'
    }, {
      isOptional: true,
      name: 'number',
      type: 'BlockNumber'
    }],
    type: 'Bytes'
  },
  getFilterChanges: {
    description: 'Returns filter changes since last poll.',
    params: [{
      name: 'index',
      type: 'U256'
    }],
    type: 'EthFilterChanges'
  },
  getFilterLogs: {
    description: 'Returns all logs matching given filter (in a range \'from\' - \'to\').',
    params: [{
      name: 'index',
      type: 'U256'
    }],
    type: 'Vec<EthLog>'
  },
  getLogs: {
    description: 'Returns logs matching given filter object.',
    params: [{
      name: 'filter',
      type: 'EthFilter'
    }],
    type: 'Vec<EthLog>'
  },
  getProof: {
    description: 'Returns proof for account and storage.',
    params: [{
      name: 'address',
      type: 'H160'
    }, {
      name: 'storageKeys',
      type: 'Vec<H256>'
    }, {
      name: 'number',
      type: 'BlockNumber'
    }],
    type: 'EthAccount'
  },
  getStorageAt: {
    description: 'Returns content of the storage at given address.',
    params: [{
      name: 'address',
      type: 'H160'
    }, {
      name: 'index',
      type: 'U256'
    }, {
      isOptional: true,
      name: 'number',
      type: 'BlockNumber'
    }],
    type: 'H256'
  },
  getTransactionByBlockHashAndIndex: {
    description: 'Returns transaction at given block hash and index.',
    params: [{
      name: 'hash',
      type: 'H256'
    }, {
      name: 'index',
      type: 'U256'
    }],
    type: 'EthTransaction'
  },
  getTransactionByBlockNumberAndIndex: {
    description: 'Returns transaction by given block number and index.',
    params: [{
      name: 'number',
      type: 'BlockNumber'
    }, {
      name: 'index',
      type: 'U256'
    }],
    type: 'EthTransaction'
  },
  getTransactionByHash: {
    description: 'Get transaction by its hash.',
    params: [{
      name: 'hash',
      type: 'H256'
    }],
    type: 'EthTransaction'
  },
  getTransactionCount: {
    description: 'Returns the number of transactions sent from given address at given time (block number).',
    params: [{
      name: 'hash',
      type: 'H256'
    }, {
      isOptional: true,
      name: 'number',
      type: 'BlockNumber'
    }],
    type: 'U256'
  },
  getTransactionReceipt: {
    description: 'Returns transaction receipt by transaction hash.',
    params: [{
      name: 'hash',
      type: 'H256'
    }],
    type: 'EthReceipt'
  },
  getUncleByBlockHashAndIndex: {
    description: 'Returns an uncles at given block and index.',
    params: [{
      name: 'hash',
      type: 'H256'
    }, {
      name: 'index',
      type: 'U256'
    }],
    type: 'EthRichBlock'
  },
  getUncleByBlockNumberAndIndex: {
    description: 'Returns an uncles at given block and index.',
    params: [{
      name: 'number',
      type: 'BlockNumber'
    }, {
      name: 'index',
      type: 'U256'
    }],
    type: 'EthRichBlock'
  },
  getUncleCountByBlockHash: {
    description: 'Returns the number of uncles in a block with given hash.',
    params: [{
      name: 'hash',
      type: 'H256'
    }],
    type: 'U256'
  },
  getUncleCountByBlockNumber: {
    description: 'Returns the number of uncles in a block with given block number.',
    params: [{
      name: 'number',
      type: 'BlockNumber'
    }],
    type: 'U256'
  },
  getWork: {
    description: 'Returns the hash of the current block, the seedHash, and the boundary condition to be met.',
    params: [],
    type: 'EthWork'
  },
  hashrate: {
    description: 'Returns the number of hashes per second that the node is mining with.',
    params: [],
    type: 'U256'
  },
  mining: {
    description: 'Returns true if client is actively mining new blocks.',
    params: [],
    type: 'bool'
  },
  newBlockFilter: {
    description: 'Returns id of new block filter.',
    params: [],
    type: 'U256'
  },
  newFilter: {
    description: 'Returns id of new filter.',
    params: [{
      name: 'filter',
      type: 'EthFilter'
    }],
    type: 'U256'
  },
  newPendingTransactionFilter: {
    description: 'Returns id of new block filter.',
    params: [],
    type: 'U256'
  },
  protocolVersion: {
    description: 'Returns protocol version encoded as a string (quotes are necessary).',
    params: [],
    type: 'u64'
  },
  sendRawTransaction: {
    description: 'Sends signed transaction, returning its hash.',
    params: [{
      name: 'bytes',
      type: 'Bytes'
    }],
    type: 'H256'
  },
  sendTransaction: {
    description: 'Sends transaction; will block waiting for signer to return the transaction hash',
    params: [{
      name: 'tx',
      type: 'EthTransactionRequest'
    }],
    type: 'H256'
  },
  submitHashrate: {
    description: 'Used for submitting mining hashrate.',
    params: [{
      name: 'index',
      type: 'U256'
    }, {
      name: 'hash',
      type: 'H256'
    }],
    type: 'bool'
  },
  submitWork: {
    description: 'Used for submitting a proof-of-work solution.',
    params: [{
      name: 'nonce',
      type: 'H64'
    }, {
      name: 'headerHash',
      type: 'H256'
    }, {
      name: 'mixDigest',
      type: 'H256'
    }],
    type: 'bool'
  },
  subscribe: {
    description: 'Subscribe to Eth subscription.',
    params: [{
      name: 'kind',
      type: 'EthSubKind'
    }, {
      isOptional: true,
      name: 'params',
      type: 'EthSubParams'
    }],
    pubsub: ['subscription', 'subscribe', 'unsubscribe'],
    type: 'Null'
  },
  syncing: {
    description: 'Returns an object with data about the sync status or false.',
    params: [],
    type: 'EthSyncStatus'
  },
  uninstallFilter: {
    description: 'Uninstalls filter.',
    params: [{
      name: 'index',
      type: 'U256'
    }],
    type: 'bool'
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/eth/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
// As per frontier

const types = {
  EthereumAccountId: 'GenericEthereumAccountId',
  EthereumLookupSource: 'GenericEthereumLookupSource',
  EthereumSignature: '[u8; 65]',
  EthAccount: {
    address: 'H160',
    balance: 'U256',
    nonce: 'U256',
    codeHash: 'H256',
    storageHash: 'H256',
    accountProof: 'Vec<Bytes>',
    storageProof: 'Vec<EthStorageProof>'
  },
  EthBlock: {
    header: 'EthHeader',
    transactions: 'Vec<EthTransaction>',
    ommers: 'Vec<EthHeader>'
  },
  EthHeader: {
    parentHash: 'H256',
    ommersHash: 'H256',
    beneficiary: 'H160',
    stateRoot: 'H256',
    transactionsRoot: 'H256',
    receiptsRoot: 'H256',
    logsBloom: 'EthBloom',
    difficulty: 'U256',
    number: 'U256',
    gasLimit: 'U256',
    gasUsed: 'U256',
    timestamp: 'u64',
    extraData: 'Bytes',
    mixMash: 'H256',
    nonce: 'H64'
  },
  EthRichBlock: {
    _alias: {
      blockHash: 'hash',
      blockSize: 'size'
    },
    blockHash: 'Option<H256>',
    parentHash: 'H256',
    sha3Uncles: 'H256',
    author: 'H160',
    miner: 'H160',
    stateRoot: 'H256',
    transactionsRoot: 'H256',
    receiptsRoot: 'H256',
    number: 'Option<U256>',
    gasUsed: 'U256',
    gasLimit: 'U256',
    extraData: 'Bytes',
    logsBloom: 'EthBloom',
    timestamp: 'U256',
    difficulty: 'U256',
    totalDifficulty: 'Option<U256>',
    sealFields: 'Vec<Bytes>',
    uncles: 'Vec<H256>',
    transactions: 'Vec<EthTransaction>',
    blockSize: 'Option<U256>'
  },
  EthBloom: 'H2048',
  EthCallRequest: {
    from: 'Option<H160>',
    to: 'Option<H160>',
    gasPrice: 'Option<U256>',
    gas: 'Option<U256>',
    value: 'Option<U256>',
    data: 'Option<Bytes>',
    nonce: 'Option<U256>'
  },
  EthFilter: {
    fromBlock: 'Option<BlockNumber>',
    toBlock: 'Option<BlockNumber>',
    blockHash: 'Option<H256>',
    address: 'Option<EthFilterAddress>',
    topics: 'Option<EthFilterTopic>'
  },
  EthFilterAddress: {
    _enum: {
      Single: 'H160',
      Multiple: 'Vec<H160>',
      Null: 'Null'
    }
  },
  EthFilterChanges: {
    _enum: {
      Logs: 'Vec<EthLog>',
      Hashes: 'Vec<H256>',
      Empty: 'Null'
    }
  },
  EthFilterTopic: {
    _enum: {
      Single: 'EthFilterTopicInner',
      Multiple: 'Vec<EthFilterTopicInner>',
      Null: 'Null'
    }
  },
  EthFilterTopicEntry: 'Option<H256>',
  EthFilterTopicInner: {
    _enum: {
      Single: 'EthFilterTopicEntry',
      Multiple: 'Vec<EthFilterTopicEntry>',
      Null: 'Null'
    }
  },
  EthRichHeader: {
    _alias: {
      blockHash: 'hash',
      blockSize: 'size'
    },
    blockHash: 'Option<H256>',
    parentHash: 'H256',
    sha3Uncles: 'H256',
    author: 'H160',
    miner: 'H160',
    stateRoot: 'H256',
    transactionsRoot: 'H256',
    receiptsRoot: 'H256',
    number: 'Option<U256>',
    gasUsed: 'U256',
    gasLimit: 'U256',
    extraData: 'Bytes',
    logsBloom: 'EthBloom',
    timestamp: 'U256',
    difficulty: 'U256',
    sealFields: 'Vec<Bytes>',
    blockSize: 'Option<U256>'
  },
  EthLog: {
    address: 'H160',
    topics: 'Vec<H256>',
    data: 'Bytes',
    blockHash: 'Option<H256>',
    blockNumber: 'Option<U256>',
    transactionHash: 'Option<H256>',
    transactionIndex: 'Option<U256>',
    logIndex: 'Option<U256>',
    transactionLogIndex: 'Option<U256>',
    removed: 'bool'
  },
  EthReceipt: {
    transactionHash: 'Option<H256>',
    transactionIndex: 'Option<U256>',
    blockHash: 'Option<H256>',
    from: 'Option<H160>',
    to: 'Option<H160>',
    blockNumber: 'Option<U256>',
    cumulativeGasUsed: 'U256',
    gasUsed: 'Option<U256>',
    contractAddress: 'Option<H160>',
    logs: 'Vec<EthLog>',
    root: 'Option<H256>',
    logsBloom: 'EthBloom',
    statusCode: 'Option<U64>'
  },
  EthStorageProof: {
    key: 'U256',
    value: 'U256',
    proof: 'Vec<Bytes>'
  },
  EthSubKind: {
    _enum: ['newHeads', 'logs', 'newPendingTransactions', 'syncing']
  },
  EthSubParams: {
    _enum: {
      None: 'Null',
      Logs: 'EthFilter'
    }
  },
  EthSubResult: {
    _enum: {
      Header: 'EthRichHeader',
      Log: 'EthLog',
      TransactionHash: 'H256',
      SyncState: 'EthSyncStatus'
    }
  },
  EthSyncInfo: {
    startingBlock: 'U256',
    currentBlock: 'U256',
    highestBlock: 'U256',
    warpChunksAmount: 'Option<U256>',
    warpChunksProcessed: 'Option<U256>'
  },
  EthSyncStatus: {
    _enum: {
      Info: 'EthSyncInfo',
      None: 'Null'
    }
  },
  EthTransaction: {
    nonce: 'U256',
    gasPrice: 'U256',
    gasLimit: 'U256',
    action: 'EthTransactionAction',
    value: 'U256',
    input: 'Bytes',
    signature: 'EthTransactionSignature'
  },
  EthTransactionSignature: {
    v: 'u64',
    r: 'H256',
    s: 'H256'
  },
  EthTransactionAction: {
    _enum: {
      Call: 'H160',
      Create: 'Null'
    }
  },
  EthTransactionCondition: {
    _enum: {
      block: 'u64',
      time: 'u64'
    }
  },
  EthTransactionRequest: {
    from: 'Option<H160>',
    to: 'Option<H160>',
    gasPrice: 'Option<U256>',
    gas: 'Option<U256>',
    value: 'Option<U256>',
    data: 'Option<Bytes>',
    nonce: 'Option<U256>'
  },
  EthTransactionStatus: {
    transactionHash: 'H256',
    transactionIndex: 'u32',
    from: 'H160',
    to: 'Option<H160>',
    contractAddress: 'Option<H160>',
    logs: 'Vec<EthLog>',
    logsBloom: 'EthBloom'
  },
  EthWork: {
    powHash: 'H256',
    seedHash: 'H256',
    target: 'H256',
    number: 'Option<u64>'
  }
};
/* harmony default export */ const eth_definitions = ({
  rpc: rpc,
  types
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/metadata/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
const AllHashers = {
  Blake2_128: null,
  // eslint-disable-line camelcase
  Blake2_256: null,
  // eslint-disable-line camelcase
  Blake2_128Concat: null,
  // eslint-disable-line camelcase
  Twox128: null,
  Twox256: null,
  Twox64Concat: null,
  // new in v11
  Identity: null
};
/* harmony default export */ const metadata_definitions = ({
  rpc: {},
  types: {
    // v9
    DoubleMapTypeV9: {
      hasher: 'StorageHasherV9',
      key1: 'Type',
      key2: 'Type',
      value: 'Type',
      key2Hasher: 'StorageHasherV9'
    },
    ErrorMetadataV9: {
      name: 'Text',
      documentation: 'Vec<Text>'
    },
    EventMetadataV9: {
      name: 'Text',
      args: 'Vec<Type>',
      documentation: 'Vec<Text>'
    },
    FunctionArgumentMetadataV9: {
      name: 'Text',
      type: 'Type'
    },
    FunctionMetadataV9: {
      name: 'Text',
      args: 'Vec<FunctionArgumentMetadataV9>',
      documentation: 'Vec<Text>'
    },
    MapTypeV9: {
      hasher: 'StorageHasherV9',
      key: 'Type',
      value: 'Type',
      linked: 'bool'
    },
    MetadataV9: {
      modules: 'Vec<ModuleMetadataV9>'
    },
    ModuleConstantMetadataV9: {
      name: 'Text',
      type: 'Type',
      value: 'Bytes',
      documentation: 'Vec<Text>'
    },
    ModuleMetadataV9: {
      name: 'Text',
      storage: 'Option<StorageMetadataV9>',
      calls: 'Option<Vec<FunctionMetadataV9>>',
      events: 'Option<Vec<EventMetadataV9>>',
      constants: 'Vec<ModuleConstantMetadataV9>',
      errors: 'Vec<ErrorMetadataV9>'
    },
    StorageEntryMetadataV9: {
      name: 'Text',
      modifier: 'StorageEntryModifierV9',
      type: 'StorageEntryTypeV9',
      fallback: 'Bytes',
      documentation: 'Vec<Text>'
    },
    StorageEntryModifierV9: {
      _enum: ['Optional', 'Default', 'Required']
    },
    StorageEntryTypeV9: {
      _enum: {
        Plain: 'Type',
        Map: 'MapTypeV9',
        DoubleMap: 'DoubleMapTypeV9'
      }
    },
    StorageHasherV9: {
      _enum: {
        Blake2_128: null,
        // eslint-disable-line camelcase
        Blake2_256: null,
        // eslint-disable-line camelcase
        Twox128: null,
        Twox256: null,
        Twox64Concat: null
      }
    },
    StorageMetadataV9: {
      prefix: 'Text',
      items: 'Vec<StorageEntryMetadataV9>'
    },
    // v10
    DoubleMapTypeV10: {
      hasher: 'StorageHasherV10',
      key1: 'Type',
      key2: 'Type',
      value: 'Type',
      key2Hasher: 'StorageHasherV10'
    },
    ErrorMetadataV10: 'ErrorMetadataV9',
    EventMetadataV10: 'EventMetadataV9',
    FunctionArgumentMetadataV10: 'FunctionArgumentMetadataV9',
    FunctionMetadataV10: 'FunctionMetadataV9',
    MapTypeV10: {
      hasher: 'StorageHasherV10',
      key: 'Type',
      value: 'Type',
      linked: 'bool'
    },
    MetadataV10: {
      modules: 'Vec<ModuleMetadataV10>'
    },
    ModuleConstantMetadataV10: 'ModuleConstantMetadataV9',
    ModuleMetadataV10: {
      name: 'Text',
      storage: 'Option<StorageMetadataV10>',
      calls: 'Option<Vec<FunctionMetadataV10>>',
      events: 'Option<Vec<EventMetadataV10>>',
      constants: 'Vec<ModuleConstantMetadataV10>',
      errors: 'Vec<ErrorMetadataV10>'
    },
    StorageEntryModifierV10: 'StorageEntryModifierV9',
    StorageEntryMetadataV10: {
      name: 'Text',
      modifier: 'StorageEntryModifierV10',
      type: 'StorageEntryTypeV10',
      fallback: 'Bytes',
      documentation: 'Vec<Text>'
    },
    StorageEntryTypeV10: {
      _enum: {
        Plain: 'Type',
        Map: 'MapTypeV10',
        DoubleMap: 'DoubleMapTypeV10'
      }
    },
    StorageMetadataV10: {
      prefix: 'Text',
      items: 'Vec<StorageEntryMetadataV10>'
    },
    StorageHasherV10: {
      _enum: {
        Blake2_128: null,
        // eslint-disable-line camelcase
        Blake2_256: null,
        // eslint-disable-line camelcase
        Blake2_128Concat: null,
        // eslint-disable-line camelcase
        Twox128: null,
        Twox256: null,
        Twox64Concat: null
      }
    },
    // v11
    DoubleMapTypeV11: {
      hasher: 'StorageHasherV11',
      key1: 'Type',
      key2: 'Type',
      value: 'Type',
      key2Hasher: 'StorageHasherV11'
    },
    ErrorMetadataV11: 'ErrorMetadataV10',
    EventMetadataV11: 'EventMetadataV10',
    ExtrinsicMetadataV11: {
      version: 'u8',
      signedExtensions: 'Vec<Text>'
    },
    FunctionArgumentMetadataV11: 'FunctionArgumentMetadataV10',
    FunctionMetadataV11: 'FunctionMetadataV10',
    MapTypeV11: {
      hasher: 'StorageHasherV11',
      key: 'Type',
      value: 'Type',
      linked: 'bool'
    },
    MetadataV11: {
      modules: 'Vec<ModuleMetadataV11>',
      extrinsic: 'ExtrinsicMetadataV11'
    },
    ModuleConstantMetadataV11: 'ModuleConstantMetadataV10',
    ModuleMetadataV11: {
      name: 'Text',
      storage: 'Option<StorageMetadataV11>',
      calls: 'Option<Vec<FunctionMetadataV11>>',
      events: 'Option<Vec<EventMetadataV11>>',
      constants: 'Vec<ModuleConstantMetadataV11>',
      errors: 'Vec<ErrorMetadataV11>'
    },
    StorageEntryModifierV11: 'StorageEntryModifierV10',
    StorageEntryMetadataV11: {
      name: 'Text',
      modifier: 'StorageEntryModifierV11',
      type: 'StorageEntryTypeV11',
      fallback: 'Bytes',
      documentation: 'Vec<Text>'
    },
    StorageEntryTypeV11: {
      _enum: {
        Plain: 'Type',
        Map: 'MapTypeV11',
        DoubleMap: 'DoubleMapTypeV11'
      }
    },
    StorageMetadataV11: {
      prefix: 'Text',
      items: 'Vec<StorageEntryMetadataV11>'
    },
    StorageHasherV11: {
      _enum: AllHashers
    },
    // v12
    DoubleMapTypeV12: 'DoubleMapTypeV11',
    ErrorMetadataV12: 'ErrorMetadataV11',
    EventMetadataV12: 'EventMetadataV11',
    ExtrinsicMetadataV12: 'ExtrinsicMetadataV11',
    FunctionArgumentMetadataV12: 'FunctionArgumentMetadataV11',
    FunctionMetadataV12: 'FunctionMetadataV11',
    MapTypeV12: 'MapTypeV11',
    MetadataV12: {
      modules: 'Vec<ModuleMetadataV12>',
      extrinsic: 'ExtrinsicMetadataV12'
    },
    ModuleConstantMetadataV12: 'ModuleConstantMetadataV11',
    ModuleMetadataV12: {
      name: 'Text',
      storage: 'Option<StorageMetadataV12>',
      calls: 'Option<Vec<FunctionMetadataV12>>',
      events: 'Option<Vec<EventMetadataV12>>',
      constants: 'Vec<ModuleConstantMetadataV12>',
      errors: 'Vec<ErrorMetadataV12>',
      index: 'u8'
    },
    StorageEntryModifierV12: 'StorageEntryModifierV11',
    StorageEntryMetadataV12: 'StorageEntryMetadataV11',
    StorageEntryTypeV12: 'StorageEntryTypeV11',
    StorageMetadataV12: 'StorageMetadataV11',
    StorageHasherV12: 'StorageHasherV11',
    // v13
    DoubleMapTypeV13: 'DoubleMapTypeV12',
    ErrorMetadataV13: 'ErrorMetadataV12',
    EventMetadataV13: 'EventMetadataV12',
    ExtrinsicMetadataV13: 'ExtrinsicMetadataV12',
    FunctionArgumentMetadataV13: 'FunctionArgumentMetadataV12',
    FunctionMetadataV13: 'FunctionMetadataV12',
    MapTypeV13: 'MapTypeV12',
    MetadataV13: {
      modules: 'Vec<ModuleMetadataV13>',
      extrinsic: 'ExtrinsicMetadataV13'
    },
    ModuleConstantMetadataV13: 'ModuleConstantMetadataV12',
    ModuleMetadataV13: {
      name: 'Text',
      storage: 'Option<StorageMetadataV13>',
      calls: 'Option<Vec<FunctionMetadataV13>>',
      events: 'Option<Vec<EventMetadataV13>>',
      constants: 'Vec<ModuleConstantMetadataV13>',
      errors: 'Vec<ErrorMetadataV13>',
      index: 'u8'
    },
    NMapTypeV13: {
      keyVec: 'Vec<Type>',
      hashers: 'Vec<StorageHasherV13>',
      value: 'Type'
    },
    StorageEntryModifierV13: 'StorageEntryModifierV12',
    StorageEntryMetadataV13: {
      name: 'Text',
      modifier: 'StorageEntryModifierV13',
      type: 'StorageEntryTypeV13',
      fallback: 'Bytes',
      documentation: 'Vec<Text>'
    },
    StorageEntryTypeV13: {
      _enum: {
        Plain: 'Type',
        Map: 'MapTypeV13',
        DoubleMap: 'DoubleMapTypeV13',
        NMap: 'NMapTypeV13'
      }
    },
    StorageMetadataV13: {
      prefix: 'Text',
      items: 'Vec<StorageEntryMetadataV13>'
    },
    StorageHasherV13: 'StorageHasherV12',
    // This always maps to the latest
    DoubleMapTypeLatest: 'DoubleMapTypeV13',
    ErrorMetadataLatest: 'ErrorMetadataV13',
    EventMetadataLatest: 'EventMetadataV13',
    ExtrinsicMetadataLatest: 'ExtrinsicMetadataV13',
    FunctionArgumentMetadataLatest: 'FunctionArgumentMetadataV13',
    FunctionMetadataLatest: 'FunctionMetadataV13',
    MapTypeLatest: 'MapTypeV13',
    MetadataLatest: 'MetadataV13',
    ModuleConstantMetadataLatest: 'ModuleConstantMetadataV13',
    ModuleMetadataLatest: 'ModuleMetadataV13',
    NMapTypeLatest: 'NMapTypeV13',
    StorageEntryMetadataLatest: 'StorageEntryMetadataV13',
    StorageEntryModifierLatest: 'StorageEntryModifierV13',
    StorageEntryTypeLatest: 'StorageEntryTypeV13',
    StorageMetadataLatest: 'StorageMetadataV13',
    StorageHasher: 'StorageHasherV13',
    // the enum containing all the mappings
    MetadataAll: {
      _enum: {
        V0: 'DoNotConstruct<MetadataV0>',
        V1: 'DoNotConstruct<MetadataV1>',
        V2: 'DoNotConstruct<MetadataV2>',
        V3: 'DoNotConstruct<MetadataV3>',
        V4: 'DoNotConstruct<MetadataV4>',
        V5: 'DoNotConstruct<MetadataV5>',
        V6: 'DoNotConstruct<MetadataV6>',
        V7: 'DoNotConstruct<MetadataV7>',
        V8: 'DoNotConstruct<MetadataV8>',
        // First version on Kusama in V9, dropping will be problematic
        V9: 'MetadataV9',
        V10: 'MetadataV10',
        V11: 'MetadataV11',
        V12: 'MetadataV12',
        V13: 'MetadataV13'
      }
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/rpc/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const rpc_definitions = ({
  rpc: {
    methods: {
      description: 'Retrieves the list of RPC methods that are exposed by the node',
      params: [],
      type: 'RpcMethods'
    }
  },
  types: {
    RpcMethods: {
      version: 'u32',
      methods: 'Vec<Text>'
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/author/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const author_definitions = ({
  rpc: {
    hasKey: {
      description: 'Returns true if the keystore has private keys for the given public key and key type.',
      params: [{
        name: 'publicKey',
        type: 'Bytes'
      }, {
        name: 'keyType',
        type: 'Text'
      }],
      type: 'bool'
    },
    hasSessionKeys: {
      description: 'Returns true if the keystore has private keys for the given session public keys.',
      params: [{
        name: 'sessionKeys',
        type: 'Bytes'
      }],
      type: 'bool'
    },
    removeExtrinsic: {
      description: 'Remove given extrinsic from the pool and temporarily ban it to prevent reimporting',
      params: [{
        name: 'bytesOrHash',
        type: 'Vec<ExtrinsicOrHash>'
      }],
      type: 'Vec<Hash>'
    },
    insertKey: {
      description: 'Insert a key into the keystore.',
      params: [{
        name: 'keyType',
        type: 'Text'
      }, {
        name: 'suri',
        type: 'Text'
      }, {
        name: 'publicKey',
        type: 'Bytes'
      }],
      type: 'Bytes'
    },
    rotateKeys: {
      description: 'Generate new session keys and returns the corresponding public keys',
      params: [],
      type: 'Bytes'
    },
    pendingExtrinsics: {
      description: 'Returns all pending extrinsics, potentially grouped by sender',
      params: [],
      type: 'Vec<Extrinsic>'
    },
    submitExtrinsic: {
      isSigned: true,
      description: 'Submit a fully formatted extrinsic for block inclusion',
      params: [{
        name: 'extrinsic',
        type: 'Extrinsic'
      }],
      type: 'Hash'
    },
    submitAndWatchExtrinsic: {
      description: 'Submit and subscribe to watch an extrinsic until unsubscribed',
      isSigned: true,
      params: [{
        name: 'extrinsic',
        type: 'Extrinsic'
      }],
      pubsub: ['extrinsicUpdate', 'submitAndWatchExtrinsic', 'unwatchExtrinsic'],
      type: 'ExtrinsicStatus'
    }
  },
  types: {
    ExtrinsicOrHash: {
      _enum: {
        Hash: 'Hash',
        Extrinsic: 'Bytes'
      }
    },
    ExtrinsicStatus: {
      _enum: {
        Future: 'Null',
        Ready: 'Null',
        Broadcast: 'Vec<Text>',
        InBlock: 'Hash',
        Retracted: 'Hash',
        FinalityTimeout: 'Hash',
        Finalized: 'Hash',
        Usurped: 'Hash',
        Dropped: 'Null',
        Invalid: 'Null'
      }
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/chain/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const chain_definitions = ({
  rpc: {
    getHeader: {
      alias: ['chain_getHead'],
      description: 'Retrieves the header for a specific block',
      params: [{
        name: 'hash',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'Header'
    },
    getBlock: {
      description: 'Get header and body of a relay chain block',
      params: [{
        name: 'hash',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'SignedBlock'
    },
    getBlockHash: {
      description: 'Get the block hash for a specific block',
      params: [{
        name: 'blockNumber',
        type: 'BlockNumber',
        isOptional: true
      }],
      type: 'BlockHash'
    },
    getFinalizedHead: {
      alias: ['chain_getFinalisedHead'],
      description: 'Get hash of the last finalized block in the canon chain',
      params: [],
      type: 'BlockHash'
    },
    subscribeNewHeads: {
      alias: ['chain_unsubscribeNewHeads', 'subscribe_newHead', 'unsubscribe_newHead'],
      description: 'Retrieves the best header via subscription',
      params: [],
      // NOTE These still has the aliassed version, compatible with 1.x
      pubsub: ['newHead', 'subscribeNewHead', 'unsubscribeNewHead'],
      type: 'Header'
    },
    subscribeFinalizedHeads: {
      alias: ['chain_subscribeFinalisedHeads', 'chain_unsubscribeFinalisedHeads'],
      description: 'Retrieves the best finalized header via subscription',
      params: [],
      pubsub: ['finalizedHead', 'subscribeFinalizedHeads', 'unsubscribeFinalizedHeads'],
      type: 'Header'
    },
    subscribeAllHeads: {
      description: 'Retrieves the newest header via subscription',
      params: [],
      pubsub: ['allHead', 'subscribeAllHeads', 'unsubscribeAllHeads'],
      type: 'Header'
    }
  },
  types: {
    BlockHash: 'Hash'
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/childstate/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const childstate_definitions = ({
  rpc: {
    getKeys: {
      description: 'Returns the keys with prefix from a child storage, leave empty to get all the keys',
      params: [{
        name: 'childKey',
        type: 'PrefixedStorageKey'
      }, {
        name: 'prefix',
        type: 'StorageKey'
      }, {
        name: 'at',
        type: 'Hash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'Vec<StorageKey>'
    },
    getStorage: {
      description: 'Returns a child storage entry at a specific block state',
      params: [{
        name: 'childKey',
        type: 'PrefixedStorageKey'
      }, {
        name: 'key',
        type: 'StorageKey'
      }, {
        name: 'at',
        type: 'Hash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'Option<StorageData>'
    },
    getStorageHash: {
      description: 'Returns the hash of a child storage entry at a block state',
      params: [{
        name: 'childKey',
        type: 'PrefixedStorageKey'
      }, {
        name: 'key',
        type: 'StorageKey'
      }, {
        name: 'at',
        type: 'Hash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'Option<Hash>'
    },
    getStorageSize: {
      description: 'Returns the size of a child storage entry at a block state',
      params: [{
        name: 'childKey',
        type: 'PrefixedStorageKey'
      }, {
        name: 'key',
        type: 'StorageKey'
      }, {
        name: 'at',
        type: 'Hash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'Option<u64>'
    }
  },
  types: {
    // StorageKey extends Bytes
    PrefixedStorageKey: 'StorageKey'
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/offchain/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const offchain_definitions = ({
  rpc: {
    localStorageSet: {
      description: 'Set offchain local storage under given key and prefix',
      params: [{
        name: 'kind',
        type: 'StorageKind'
      }, {
        name: 'key',
        type: 'Bytes'
      }, {
        name: 'value',
        type: 'Bytes'
      }],
      type: 'Null'
    },
    localStorageGet: {
      description: 'Get offchain local storage under given key and prefix',
      params: [{
        name: 'kind',
        type: 'StorageKind'
      }, {
        name: 'key',
        type: 'Bytes'
      }],
      type: 'Option<Bytes>'
    }
  },
  types: {
    StorageKind: {
      _enum: {
        PERSISTENT: 1,
        LOCAL: 2
      }
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/payment/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
const QUERY_PARAMS = [{
  name: 'extrinsic',
  type: 'Bytes'
}, {
  name: 'at',
  type: 'BlockHash',
  isHistoric: true,
  isOptional: true
}];
/* harmony default export */ const payment_definitions = ({
  rpc: {
    queryInfo: {
      description: 'Retrieves the fee information for an encoded extrinsic',
      params: QUERY_PARAMS,
      type: 'RuntimeDispatchInfo'
    },
    queryFeeDetails: {
      description: 'Query the detailed fee of a given encoded extrinsic',
      params: QUERY_PARAMS,
      type: 'FeeDetails'
    }
  },
  types: {
    FeeDetails: {
      inclusionFee: 'Option<InclusionFee>' // skipped in serde
      // tip: 'Balance'

    },
    InclusionFee: {
      baseFee: 'Balance',
      lenFee: 'Balance',
      adjustedWeightFee: 'Balance'
    },
    RuntimeDispatchInfo: {
      weight: 'Weight',
      class: 'DispatchClass',
      partialFee: 'Balance'
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/state/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// order important in structs... :)

/* eslint-disable sort-keys */
/* harmony default export */ const state_definitions = ({
  rpc: {
    call: {
      alias: ['state_callAt'],
      description: 'Perform a call to a builtin on the chain',
      params: [{
        name: 'method',
        type: 'Text'
      }, {
        name: 'data',
        type: 'Bytes'
      }, {
        name: 'at',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'Bytes'
    },
    getKeys: {
      description: 'Retrieves the keys with a certain prefix',
      params: [{
        name: 'key',
        type: 'StorageKey'
      }, {
        name: 'at',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'Vec<StorageKey>'
    },
    getPairs: {
      description: 'Returns the keys with prefix, leave empty to get all the keys (deprecated: Use getKeysPaged)',
      params: [{
        name: 'prefix',
        type: 'StorageKey'
      }, {
        name: 'at',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'Vec<KeyValue>'
    },
    getKeysPaged: {
      alias: ['state_getKeysPagedAt'],
      description: 'Returns the keys with prefix with pagination support.',
      params: [{
        name: 'key',
        type: 'StorageKey'
      }, {
        name: 'count',
        type: 'u32'
      }, {
        name: 'startKey',
        type: 'StorageKey',
        isOptional: true
      }, {
        name: 'at',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'Vec<StorageKey>'
    },
    getStorage: {
      alias: ['state_getStorageAt'],
      description: 'Retrieves the storage for a key',
      params: [{
        name: 'key',
        type: 'StorageKey'
      }, {
        name: 'at',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'StorageData'
    },
    getStorageHash: {
      alias: ['state_getStorageHashAt'],
      description: 'Retrieves the storage hash',
      params: [{
        name: 'key',
        type: 'StorageKey'
      }, {
        name: 'at',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'Hash'
    },
    getStorageSize: {
      alias: ['state_getStorageSizeAt'],
      description: 'Retrieves the storage size',
      params: [{
        name: 'key',
        type: 'StorageKey'
      }, {
        name: 'at',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'u64'
    },
    getChildKeys: {
      description: 'Retrieves the keys with prefix of a specific child storage',
      params: [{
        name: 'childStorageKey',
        type: 'StorageKey'
      }, {
        name: 'childDefinition',
        type: 'StorageKey'
      }, {
        name: 'childType',
        type: 'u32'
      }, {
        name: 'key',
        type: 'StorageKey'
      }, {
        name: 'at',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'Vec<StorageKey>'
    },
    getChildStorage: {
      description: 'Retrieves the child storage for a key',
      params: [{
        name: 'childStorageKey',
        type: 'StorageKey'
      }, {
        name: 'childDefinition',
        type: 'StorageKey'
      }, {
        name: 'childType',
        type: 'u32'
      }, {
        name: 'key',
        type: 'StorageKey'
      }, {
        name: 'at',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'StorageData'
    },
    getChildStorageHash: {
      description: 'Retrieves the child storage hash',
      params: [{
        name: 'childStorageKey',
        type: 'StorageKey'
      }, {
        name: 'childDefinition',
        type: 'StorageKey'
      }, {
        name: 'childType',
        type: 'u32'
      }, {
        name: 'key',
        type: 'StorageKey'
      }, {
        name: 'at',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'Hash'
    },
    getChildStorageSize: {
      description: 'Retrieves the child storage size',
      params: [{
        name: 'childStorageKey',
        type: 'StorageKey'
      }, {
        name: 'childDefinition',
        type: 'StorageKey'
      }, {
        name: 'childType',
        type: 'u32'
      }, {
        name: 'key',
        type: 'StorageKey'
      }, {
        name: 'at',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'u64'
    },
    getMetadata: {
      description: 'Returns the runtime metadata',
      params: [{
        name: 'at',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'Metadata'
    },
    getRuntimeVersion: {
      alias: ['chain_getRuntimeVersion'],
      description: 'Get the runtime version',
      params: [{
        name: 'at',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'RuntimeVersion'
    },
    queryStorage: {
      description: 'Query historical storage entries (by key) starting from a start block',
      params: [{
        name: 'keys',
        type: 'Vec<StorageKey>'
      }, {
        name: 'fromBlock',
        type: 'Hash'
      }, {
        name: 'toBlock',
        type: 'BlockHash',
        isOptional: true
      }],
      type: 'Vec<StorageChangeSet>'
    },
    queryStorageAt: {
      description: 'Query storage entries (by key) starting at block hash given as the second parameter',
      params: [{
        name: 'keys',
        type: 'Vec<StorageKey>'
      }, {
        name: 'at',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'Vec<StorageChangeSet>'
    },
    getChildReadProof: {
      description: 'Returns proof of storage for child key entries at a specific block state.',
      params: [{
        name: 'childStorageKey',
        type: 'PrefixedStorageKey'
      }, {
        name: 'keys',
        type: 'Vec<StorageKey>'
      }, {
        name: 'at',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'ReadProof'
    },
    getReadProof: {
      description: 'Returns proof of storage entries at a specific block state',
      params: [{
        name: 'keys',
        type: 'Vec<StorageKey>'
      }, {
        name: 'at',
        type: 'BlockHash',
        isHistoric: true,
        isOptional: true
      }],
      type: 'ReadProof'
    },
    subscribeRuntimeVersion: {
      alias: ['chain_subscribeRuntimeVersion', 'chain_unsubscribeRuntimeVersion'],
      description: 'Retrieves the runtime version via subscription',
      params: [],
      pubsub: ['runtimeVersion', 'subscribeRuntimeVersion', 'unsubscribeRuntimeVersion'],
      type: 'RuntimeVersion'
    },
    subscribeStorage: {
      description: 'Subscribes to storage changes for the provided keys',
      params: [{
        name: 'keys',
        type: 'Vec<StorageKey>',
        isOptional: true
      }],
      pubsub: ['storage', 'subscribeStorage', 'unsubscribeStorage'],
      type: 'StorageChangeSet'
    },
    traceBlock: {
      description: 'Provides a way to trace the re-execution of a single block',
      params: [{
        name: 'block',
        type: 'Hash'
      }, {
        name: 'targets',
        type: 'Option<Text>'
      }, {
        name: 'storageKeys',
        type: 'Option<Text>'
      }],
      type: 'TraceBlockResponse'
    }
  },
  types: {
    ApiId: '[u8; 8]',
    BlockTrace: {
      blockHash: 'Text',
      parentHash: 'Text',
      tracingTargets: 'Text',
      storageKeys: 'Text',
      spans: 'Vec<BlockTraceSpan>',
      events: 'Vec<BlockTraceEvent>'
    },
    BlockTraceEvent: {
      target: 'Text',
      data: 'BlockTraceEventData',
      parentId: 'Option<u64>'
    },
    BlockTraceEventData: {
      stringValues: 'HashMap<Text, Text>'
    },
    BlockTraceSpan: {
      id: 'u64',
      parentId: 'Option<u64>',
      name: 'Text',
      target: 'Text',
      wasm: 'bool'
    },
    KeyValueOption: '(StorageKey, Option<StorageData>)',
    ReadProof: {
      at: 'Hash',
      proof: 'Vec<Bytes>'
    },
    RuntimeVersionApi: '(ApiId, u32)',
    RuntimeVersion: {
      specName: 'Text',
      implName: 'Text',
      authoringVersion: 'u32',
      specVersion: 'u32',
      implVersion: 'u32',
      apis: 'Vec<RuntimeVersionApi>',
      transactionVersion: 'u32'
    },
    RuntimeVersionPartial: {
      specName: 'Text',
      specVersion: 'u32'
    },
    StorageChangeSet: {
      block: 'Hash',
      changes: 'Vec<KeyValueOption>'
    },
    TraceBlockResponse: {
      _enum: {
        TraceError: 'TraceError',
        BlockTrace: 'BlockTrace'
      }
    },
    TraceError: {
      error: 'Text'
    }
  }
});
;// CONCATENATED MODULE: ../../node_modules/@polkadot/types/interfaces/definitions.js
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// technically runtime can go below, but since it is the base, do it first
 // substrate types




































 // polkadot-specific types









 // scale-info & contracts


 // other useful types

 // pull in metadata & rpc last, assuming that is uses info from above


 // rpc-only definitions








/***/ }),

/***/ 31760:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ packageInfo)
/* harmony export */ });
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
// Auto-generated by @polkadot/dev, do not edit
const packageInfo = {
  name: '@polkadot/types',
  version: '4.13.1'
};

/***/ }),

/***/ 14241:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ Bytes)
/* harmony export */ });
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13948);
/* harmony import */ var _codec_Raw_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90094);
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

 // Bytes are used for things like on-chain code, so it has a healthy limit

const MAX_LENGTH = 10 * 1024 * 1024;
/** @internal */

function decodeBytesU8a(value) {
  if (!value.length) {
    return new Uint8Array();
  } // handle all other Uint8Array inputs, these do have a length prefix


  const [offset, length] = (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.compactFromU8a)(value);
  const total = offset + length.toNumber();
  (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.assert)(length.lten(MAX_LENGTH), () => `Bytes length ${length.toString()} exceeds ${MAX_LENGTH}`);
  (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.assert)(total <= value.length, () => `Bytes: required length less than remainder, expected at least ${total}, found ${value.length}`);
  return value.subarray(offset, total);
}
/** @internal */


function decodeBytes(value) {
  if (Array.isArray(value) || (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isString)(value)) {
    return (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.u8aToU8a)(value);
  } else if (!(value instanceof _codec_Raw_js__WEBPACK_IMPORTED_MODULE_1__/* .Raw */ .N) && (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isU8a)(value)) {
    // We are ensuring we are not a Raw instance. In the case of a Raw we already have gotten
    // rid of the length, i.e. new Bytes(new Bytes(...)) will work as expected
    return decodeBytesU8a(value);
  }

  return value;
}
/**
 * @name Bytes
 * @description
 * A Bytes wrapper for Vec<u8>. The significant difference between this and a normal Uint8Array
 * is that this version allows for length-encoding. (i.e. it is a variable-item codec, the same
 * as what is found in [[Text]] and [[Vec]])
 */


class Bytes extends _codec_Raw_js__WEBPACK_IMPORTED_MODULE_1__/* .Raw */ .N {
  constructor(registry, value) {
    super(registry, decodeBytes(value));
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */


  get encodedLength() {
    return this.length + (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.compactToU8a)(this.length).length;
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return 'Bytes';
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */


  toU8a(isBare) {
    return isBare ? super.toU8a(isBare) : (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.compactAddLength)(this);
  }

}

/***/ }),

/***/ 92327:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ DoNotConstruct)
/* harmony export */ });
/* harmony import */ var _Null_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47261);
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name DoNotConstruct
 * @description
 * An unknown type that fails on construction with the type info
 */

class DoNotConstruct extends _Null_js__WEBPACK_IMPORTED_MODULE_0__/* .Null */ .p {
  constructor(registry, typeName = 'DoNotConstruct') {
    super(registry);
    throw new Error(`Cannot construct unknown type ${typeName}`);
  }

  static with(typeName) {
    return class extends DoNotConstruct {
      constructor(registry) {
        super(registry, typeName);
      }

    };
  }

}

/***/ }),

/***/ 47261:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ Null)
/* harmony export */ });
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13948);
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name Null
 * @description
 * Implements a type that does not contain anything (apart from `null`)
 */

class Null {
  constructor(registry) {
    this.registry = void 0;
    this.createdAtHash = void 0;
    this.registry = registry;
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */


  get encodedLength() {
    return 0;
  }
  /**
   * @description returns a hash of the contents
   */


  get hash() {
    throw new Error('.hash is not implemented on Null');
  }
  /**
   * @description Checks if the value is an empty value (always true)
   */


  get isEmpty() {
    return true;
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */


  eq(other) {
    return other instanceof Null || (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isNull)(other);
  }
  /**
   * @description Returns a hex string representation of the value
   */


  toHex() {
    return '0x';
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */


  toHuman() {
    return this.toJSON();
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */


  toJSON() {
    return null;
  }
  /**
   * @description Returns the base runtime type name for this instance
   */


  toRawType() {
    return 'Null';
  }
  /**
   * @description Returns the string representation of the value
   */


  toString() {
    return '';
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  toU8a(isBare) {
    return new Uint8Array();
  }

}

/***/ }),

/***/ 53326:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ unwrapStorageType),
/* harmony export */   "Q": () => (/* binding */ StorageKey)
/* harmony export */ });
/* harmony import */ var _polkadot_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13948);
/* harmony import */ var _Bytes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14241);
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0


const HASHER_MAP = {
  // opaque
  Blake2_128: [16, false],
  // eslint-disable-line camelcase
  Blake2_128Concat: [16, true],
  // eslint-disable-line camelcase
  Blake2_256: [32, false],
  // eslint-disable-line camelcase
  Identity: [0, true],
  Twox128: [16, false],
  Twox256: [32, false],
  Twox64Concat: [8, true]
};
/** @internal */

function unwrapStorageType(type, isOptional) {
  const outputType = type.isPlain ? type.asPlain.toString() : type.isMap ? type.asMap.value.toString() : type.isDoubleMap ? type.asDoubleMap.value.toString() : type.asNMap.value.toString();
  return isOptional ? `Option<${outputType}>` : outputType;
}
/** @internal */

function decodeStorageKey(value) {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  if (value instanceof StorageKey) {
    return {
      key: value,
      method: value.method,
      section: value.section
    };
  } else if (!value || (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isString)(value) || (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isU8a)(value)) {
    // let Bytes handle these inputs
    return {
      key: value
    };
  } else if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value)) {
    return {
      key: value(),
      method: value.method,
      section: value.section
    };
  } else if (Array.isArray(value)) {
    const [fn, arg] = value;
    (0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.assert)((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isFunction)(fn), 'Expected function input for key construction');
    return {
      key: fn(arg),
      method: fn.method,
      section: fn.section
    };
  }

  throw new Error(`Unable to convert input ${value} to StorageKey`);
}
/** @internal */


function decodeHashers(registry, value, hashers) {
  // the storage entry is xxhashAsU8a(prefix, 128) + xxhashAsU8a(method, 128), 256 bits total
  let offset = 32;
  return hashers.reduce((result, [hasher, type]) => {
    const [hashLen, canDecode] = HASHER_MAP[hasher.type];
    const decoded = canDecode ? registry.createType(type, value.subarray(offset + hashLen)) : registry.createType('Raw', value.subarray(offset, offset + hashLen));
    offset += hashLen + (canDecode ? decoded.encodedLength : 0);
    result.push(decoded);
    return result;
  }, []);
}
/** @internal */


function decodeArgsFromMeta(registry, value, meta) {
  if (!meta || !(meta.type.isMap || meta.type.isDoubleMap || meta.type.isNMap)) {
    return [];
  }

  if (meta.type.isMap) {
    const mapInfo = meta.type.asMap;
    return decodeHashers(registry, value, [[mapInfo.hasher, mapInfo.key.toString()]]);
  } else if (meta.type.isDoubleMap) {
    const mapInfo = meta.type.asDoubleMap;
    return decodeHashers(registry, value, [[mapInfo.hasher, mapInfo.key1.toString()], [mapInfo.key2Hasher, mapInfo.key2.toString()]]);
  }

  const mapInfo = meta.type.asNMap;
  return decodeHashers(registry, value, mapInfo.hashers.map((h, i) => [h, mapInfo.keyVec[i].toString()]));
}
/** @internal */


function getMeta(value) {
  if (value instanceof StorageKey) {
    return value.meta;
  } else if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value)) {
    return value.meta;
  } else if (Array.isArray(value)) {
    const [fn] = value;
    return fn.meta;
  }

  return undefined;
}
/** @internal */


function getType(value) {
  if (value instanceof StorageKey) {
    return value.outputType;
  } else if ((0,_polkadot_util__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value)) {
    return unwrapStorageType(value.meta.type);
  } else if (Array.isArray(value)) {
    const [fn] = value;

    if (fn.meta) {
      return unwrapStorageType(fn.meta.type);
    }
  } // If we have no type set, default to Raw


  return 'Raw';
}
/**
 * @name StorageKey
 * @description
 * A representation of a storage key (typically hashed) in the system. It can be
 * constructed by passing in a raw key or a StorageEntry with (optional) arguments.
 */


class StorageKey extends _Bytes_js__WEBPACK_IMPORTED_MODULE_1__/* .Bytes */ .J {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore This is assigned via this.decodeArgsFromMeta()
  constructor(registry, value, override = {}) {
    const {
      key,
      method,
      section
    } = decodeStorageKey(value);
    super(registry, key);
    this._args = void 0;
    this._meta = void 0;
    this._outputType = void 0;
    this._method = void 0;
    this._section = void 0;
    this._outputType = getType(value); // decode the args (as applicable based on the key and the hashers, after all init)

    this.setMeta(getMeta(value), override.section || section, override.method || method);
  }
  /**
   * @description Return the decoded arguments (applicable to map/doublemap with decodable values)
   */


  get args() {
    return this._args;
  }
  /**
   * @description The metadata or `undefined` when not available
   */


  get meta() {
    return this._meta;
  }
  /**
   * @description The key method or `undefined` when not specified
   */


  get method() {
    return this._method;
  }
  /**
   * @description The output type
   */


  get outputType() {
    return this._outputType;
  }
  /**
   * @description The key section or `undefined` when not specified
   */


  get section() {
    return this._section;
  }

  is(key) {
    return key.section === this.section && key.method === this.method;
  }
  /**
   * @description Sets the meta for this key
   */


  setMeta(meta, section, method) {
    this._meta = meta;
    this._method = method || this._method;
    this._section = section || this._section;

    if (meta) {
      this._outputType = unwrapStorageType(meta.type);
    }

    try {
      this._args = decodeArgsFromMeta(this.registry, this.toU8a(true), this.meta);
    } catch (error) {// ignore...
    }

    return this;
  }
  /**
   * @description Returns the Human representation for this type
   */


  toHuman() {
    return this._args.length ? this._args.map(arg => arg.toHuman()) : super.toHuman();
  }
  /**
   * @description Returns the raw type for this
   */


  toRawType() {
    return 'StorageKey';
  }

}

/***/ }),

/***/ 65558:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ u32)
/* harmony export */ });
/* harmony import */ var _codec_UInt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14552);
// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name u32
 * @description
 * A 32-bit unsigned integer
 */

class u32 extends _codec_UInt_js__WEBPACK_IMPORTED_MODULE_0__/* .UInt.with */ .v.with(32) {}

/***/ })

}]);