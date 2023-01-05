// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({22:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

exports.default = isArray;
},{}],30:[function(require,module,exports) {
var global = arguments[3];
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

exports.default = freeGlobal;
},{}],27:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _freeGlobal = require('./_freeGlobal.js');

var _freeGlobal2 = _interopRequireDefault(_freeGlobal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal2.default || freeSelf || Function('return this')();

exports.default = root;
},{"./_freeGlobal.js":30}],18:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _root = require('./_root.js');

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var Symbol = _root2.default.Symbol;

exports.default = Symbol;
},{"./_root.js":27}],19:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol = require('./_Symbol.js');

var _Symbol2 = _interopRequireDefault(_Symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol2.default ? _Symbol2.default.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

exports.default = getRawTag;
},{"./_Symbol.js":18}],20:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

exports.default = objectToString;
},{}],13:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol = require('./_Symbol.js');

var _Symbol2 = _interopRequireDefault(_Symbol);

var _getRawTag = require('./_getRawTag.js');

var _getRawTag2 = _interopRequireDefault(_getRawTag);

var _objectToString = require('./_objectToString.js');

var _objectToString2 = _interopRequireDefault(_objectToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol2.default ? _Symbol2.default.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? (0, _getRawTag2.default)(value) : (0, _objectToString2.default)(value);
}

exports.default = baseGetTag;
},{"./_Symbol.js":18,"./_getRawTag.js":19,"./_objectToString.js":20}],15:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

exports.default = isObjectLike;
},{}],26:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = require('./_baseGetTag.js');

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _isObjectLike = require('./isObjectLike.js');

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || (0, _isObjectLike2.default)(value) && (0, _baseGetTag2.default)(value) == symbolTag;
}

exports.default = isSymbol;
},{"./_baseGetTag.js":13,"./isObjectLike.js":15}],23:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArray = require('./isArray.js');

var _isArray2 = _interopRequireDefault(_isArray);

var _isSymbol = require('./isSymbol.js');

var _isSymbol2 = _interopRequireDefault(_isSymbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if ((0, _isArray2.default)(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || (0, _isSymbol2.default)(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

exports.default = isKey;
},{"./isArray.js":22,"./isSymbol.js":26}],61:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

exports.default = isObject;
},{}],59:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = require('./_baseGetTag.js');

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _isObject = require('./isObject.js');

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!(0, _isObject2.default)(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = (0, _baseGetTag2.default)(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

exports.default = isFunction;
},{"./_baseGetTag.js":13,"./isObject.js":61}],64:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _root = require('./_root.js');

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to detect overreaching core-js shims. */
var coreJsData = _root2.default['__core-js_shared__'];

exports.default = coreJsData;
},{"./_root.js":27}],60:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _coreJsData = require('./_coreJsData.js');

var _coreJsData2 = _interopRequireDefault(_coreJsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(_coreJsData2.default && _coreJsData2.default.keys && _coreJsData2.default.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

exports.default = isMasked;
},{"./_coreJsData.js":64}],62:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

exports.default = toSource;
},{}],57:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction = require('./isFunction.js');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isMasked = require('./_isMasked.js');

var _isMasked2 = _interopRequireDefault(_isMasked);

var _isObject = require('./isObject.js');

var _isObject2 = _interopRequireDefault(_isObject);

var _toSource = require('./_toSource.js');

var _toSource2 = _interopRequireDefault(_toSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!(0, _isObject2.default)(value) || (0, _isMasked2.default)(value)) {
    return false;
  }
  var pattern = (0, _isFunction2.default)(value) ? reIsNative : reIsHostCtor;
  return pattern.test((0, _toSource2.default)(value));
}

exports.default = baseIsNative;
},{"./isFunction.js":59,"./_isMasked.js":60,"./isObject.js":61,"./_toSource.js":62}],58:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

exports.default = getValue;
},{}],53:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseIsNative = require('./_baseIsNative.js');

var _baseIsNative2 = _interopRequireDefault(_baseIsNative);

var _getValue = require('./_getValue.js');

var _getValue2 = _interopRequireDefault(_getValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = (0, _getValue2.default)(object, key);
  return (0, _baseIsNative2.default)(value) ? value : undefined;
}

exports.default = getNative;
},{"./_baseIsNative.js":57,"./_getValue.js":58}],56:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getNative = require('./_getNative.js');

var _getNative2 = _interopRequireDefault(_getNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references that are verified to be native. */
var nativeCreate = (0, _getNative2.default)(Object, 'create');

exports.default = nativeCreate;
},{"./_getNative.js":53}],48:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nativeCreate = require('./_nativeCreate.js');

var _nativeCreate2 = _interopRequireDefault(_nativeCreate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate2.default ? (0, _nativeCreate2.default)(null) : {};
  this.size = 0;
}

exports.default = hashClear;
},{"./_nativeCreate.js":56}],49:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

exports.default = hashDelete;
},{}],50:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nativeCreate = require('./_nativeCreate.js');

var _nativeCreate2 = _interopRequireDefault(_nativeCreate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate2.default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

exports.default = hashGet;
},{"./_nativeCreate.js":56}],51:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nativeCreate = require('./_nativeCreate.js');

var _nativeCreate2 = _interopRequireDefault(_nativeCreate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate2.default ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

exports.default = hashHas;
},{"./_nativeCreate.js":56}],52:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nativeCreate = require('./_nativeCreate.js');

var _nativeCreate2 = _interopRequireDefault(_nativeCreate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = _nativeCreate2.default && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

exports.default = hashSet;
},{"./_nativeCreate.js":56}],39:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hashClear = require('./_hashClear.js');

var _hashClear2 = _interopRequireDefault(_hashClear);

var _hashDelete = require('./_hashDelete.js');

var _hashDelete2 = _interopRequireDefault(_hashDelete);

var _hashGet = require('./_hashGet.js');

var _hashGet2 = _interopRequireDefault(_hashGet);

var _hashHas = require('./_hashHas.js');

var _hashHas2 = _interopRequireDefault(_hashHas);

var _hashSet = require('./_hashSet.js');

var _hashSet2 = _interopRequireDefault(_hashSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear2.default;
Hash.prototype['delete'] = _hashDelete2.default;
Hash.prototype.get = _hashGet2.default;
Hash.prototype.has = _hashHas2.default;
Hash.prototype.set = _hashSet2.default;

exports.default = Hash;
},{"./_hashClear.js":48,"./_hashDelete.js":49,"./_hashGet.js":50,"./_hashHas.js":51,"./_hashSet.js":52}],43:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

exports.default = listCacheClear;
},{}],63:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

exports.default = eq;
},{}],55:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _eq = require('./eq.js');

var _eq2 = _interopRequireDefault(_eq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if ((0, _eq2.default)(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

exports.default = assocIndexOf;
},{"./eq.js":63}],44:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assocIndexOf = require('./_assocIndexOf.js');

var _assocIndexOf2 = _interopRequireDefault(_assocIndexOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = (0, _assocIndexOf2.default)(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

exports.default = listCacheDelete;
},{"./_assocIndexOf.js":55}],45:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assocIndexOf = require('./_assocIndexOf.js');

var _assocIndexOf2 = _interopRequireDefault(_assocIndexOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = (0, _assocIndexOf2.default)(data, key);

  return index < 0 ? undefined : data[index][1];
}

exports.default = listCacheGet;
},{"./_assocIndexOf.js":55}],46:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assocIndexOf = require('./_assocIndexOf.js');

var _assocIndexOf2 = _interopRequireDefault(_assocIndexOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return (0, _assocIndexOf2.default)(this.__data__, key) > -1;
}

exports.default = listCacheHas;
},{"./_assocIndexOf.js":55}],47:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assocIndexOf = require('./_assocIndexOf.js');

var _assocIndexOf2 = _interopRequireDefault(_assocIndexOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = (0, _assocIndexOf2.default)(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

exports.default = listCacheSet;
},{"./_assocIndexOf.js":55}],40:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _listCacheClear = require('./_listCacheClear.js');

var _listCacheClear2 = _interopRequireDefault(_listCacheClear);

var _listCacheDelete = require('./_listCacheDelete.js');

var _listCacheDelete2 = _interopRequireDefault(_listCacheDelete);

var _listCacheGet = require('./_listCacheGet.js');

var _listCacheGet2 = _interopRequireDefault(_listCacheGet);

var _listCacheHas = require('./_listCacheHas.js');

var _listCacheHas2 = _interopRequireDefault(_listCacheHas);

var _listCacheSet = require('./_listCacheSet.js');

var _listCacheSet2 = _interopRequireDefault(_listCacheSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear2.default;
ListCache.prototype['delete'] = _listCacheDelete2.default;
ListCache.prototype.get = _listCacheGet2.default;
ListCache.prototype.has = _listCacheHas2.default;
ListCache.prototype.set = _listCacheSet2.default;

exports.default = ListCache;
},{"./_listCacheClear.js":43,"./_listCacheDelete.js":44,"./_listCacheGet.js":45,"./_listCacheHas.js":46,"./_listCacheSet.js":47}],41:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getNative = require('./_getNative.js');

var _getNative2 = _interopRequireDefault(_getNative);

var _root = require('./_root.js');

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references that are verified to be native. */
var Map = (0, _getNative2.default)(_root2.default, 'Map');

exports.default = Map;
},{"./_getNative.js":53,"./_root.js":27}],34:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Hash = require('./_Hash.js');

var _Hash2 = _interopRequireDefault(_Hash);

var _ListCache = require('./_ListCache.js');

var _ListCache2 = _interopRequireDefault(_ListCache);

var _Map = require('./_Map.js');

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash2.default(),
    'map': new (_Map2.default || _ListCache2.default)(),
    'string': new _Hash2.default()
  };
}

exports.default = mapCacheClear;
},{"./_Hash.js":39,"./_ListCache.js":40,"./_Map.js":41}],54:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

exports.default = isKeyable;
},{}],42:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isKeyable = require('./_isKeyable.js');

var _isKeyable2 = _interopRequireDefault(_isKeyable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return (0, _isKeyable2.default)(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

exports.default = getMapData;
},{"./_isKeyable.js":54}],35:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getMapData = require('./_getMapData.js');

var _getMapData2 = _interopRequireDefault(_getMapData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = (0, _getMapData2.default)(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

exports.default = mapCacheDelete;
},{"./_getMapData.js":42}],36:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getMapData = require('./_getMapData.js');

var _getMapData2 = _interopRequireDefault(_getMapData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return (0, _getMapData2.default)(this, key).get(key);
}

exports.default = mapCacheGet;
},{"./_getMapData.js":42}],37:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getMapData = require('./_getMapData.js');

var _getMapData2 = _interopRequireDefault(_getMapData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return (0, _getMapData2.default)(this, key).has(key);
}

exports.default = mapCacheHas;
},{"./_getMapData.js":42}],38:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getMapData = require('./_getMapData.js');

var _getMapData2 = _interopRequireDefault(_getMapData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = (0, _getMapData2.default)(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

exports.default = mapCacheSet;
},{"./_getMapData.js":42}],33:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapCacheClear = require('./_mapCacheClear.js');

var _mapCacheClear2 = _interopRequireDefault(_mapCacheClear);

var _mapCacheDelete = require('./_mapCacheDelete.js');

var _mapCacheDelete2 = _interopRequireDefault(_mapCacheDelete);

var _mapCacheGet = require('./_mapCacheGet.js');

var _mapCacheGet2 = _interopRequireDefault(_mapCacheGet);

var _mapCacheHas = require('./_mapCacheHas.js');

var _mapCacheHas2 = _interopRequireDefault(_mapCacheHas);

var _mapCacheSet = require('./_mapCacheSet.js');

var _mapCacheSet2 = _interopRequireDefault(_mapCacheSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear2.default;
MapCache.prototype['delete'] = _mapCacheDelete2.default;
MapCache.prototype.get = _mapCacheGet2.default;
MapCache.prototype.has = _mapCacheHas2.default;
MapCache.prototype.set = _mapCacheSet2.default;

exports.default = MapCache;
},{"./_mapCacheClear.js":34,"./_mapCacheDelete.js":35,"./_mapCacheGet.js":36,"./_mapCacheHas.js":37,"./_mapCacheSet.js":38}],32:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MapCache = require('./_MapCache.js');

var _MapCache2 = _interopRequireDefault(_MapCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function () {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache2.default)();
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache2.default;

exports.default = memoize;
},{"./_MapCache.js":33}],28:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _memoize = require('./memoize.js');

var _memoize2 = _interopRequireDefault(_memoize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = (0, _memoize2.default)(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

exports.default = memoizeCapped;
},{"./memoize.js":32}],24:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _memoizeCapped = require('./_memoizeCapped.js');

var _memoizeCapped2 = _interopRequireDefault(_memoizeCapped);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = (0, _memoizeCapped2.default)(function (string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
      result.push('');
    }
  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});

exports.default = stringToPath;
},{"./_memoizeCapped.js":28}],31:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

exports.default = arrayMap;
},{}],29:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol = require('./_Symbol.js');

var _Symbol2 = _interopRequireDefault(_Symbol);

var _arrayMap = require('./_arrayMap.js');

var _arrayMap2 = _interopRequireDefault(_arrayMap);

var _isArray = require('./isArray.js');

var _isArray2 = _interopRequireDefault(_isArray);

var _isSymbol = require('./isSymbol.js');

var _isSymbol2 = _interopRequireDefault(_isSymbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol2.default ? _Symbol2.default.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if ((0, _isArray2.default)(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return (0, _arrayMap2.default)(value, baseToString) + '';
  }
  if ((0, _isSymbol2.default)(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

exports.default = baseToString;
},{"./_Symbol.js":18,"./_arrayMap.js":31,"./isArray.js":22,"./isSymbol.js":26}],25:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseToString = require('./_baseToString.js');

var _baseToString2 = _interopRequireDefault(_baseToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : (0, _baseToString2.default)(value);
}

exports.default = toString;
},{"./_baseToString.js":29}],16:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArray = require('./isArray.js');

var _isArray2 = _interopRequireDefault(_isArray);

var _isKey = require('./_isKey.js');

var _isKey2 = _interopRequireDefault(_isKey);

var _stringToPath = require('./_stringToPath.js');

var _stringToPath2 = _interopRequireDefault(_stringToPath);

var _toString = require('./toString.js');

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if ((0, _isArray2.default)(value)) {
    return value;
  }
  return (0, _isKey2.default)(value, object) ? [value] : (0, _stringToPath2.default)((0, _toString2.default)(value));
}

exports.default = castPath;
},{"./isArray.js":22,"./_isKey.js":23,"./_stringToPath.js":24,"./toString.js":25}],17:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isSymbol = require('./isSymbol.js');

var _isSymbol2 = _interopRequireDefault(_isSymbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || (0, _isSymbol2.default)(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

exports.default = toKey;
},{"./isSymbol.js":26}],12:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _castPath = require('./_castPath.js');

var _castPath2 = _interopRequireDefault(_castPath);

var _toKey = require('./_toKey.js');

var _toKey2 = _interopRequireDefault(_toKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = (0, _castPath2.default)(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[(0, _toKey2.default)(path[index++])];
  }
  return index && index == length ? object : undefined;
}

exports.default = baseGet;
},{"./_castPath.js":16,"./_toKey.js":17}],10:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGet = require('./_baseGet.js');

var _baseGet2 = _interopRequireDefault(_baseGet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : (0, _baseGet2.default)(object, path);
  return result === undefined ? defaultValue : result;
}

exports.default = get;
},{"./_baseGet.js":12}],21:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

exports.default = overArg;
},{}],14:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overArg = require('./_overArg.js');

var _overArg2 = _interopRequireDefault(_overArg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var getPrototype = (0, _overArg2.default)(Object.getPrototypeOf, Object);

exports.default = getPrototype;
},{"./_overArg.js":21}],11:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = require('./_baseGetTag.js');

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _getPrototype = require('./_getPrototype.js');

var _getPrototype2 = _interopRequireDefault(_getPrototype);

var _isObjectLike = require('./isObjectLike.js');

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!(0, _isObjectLike2.default)(value) || (0, _baseGetTag2.default)(value) != objectTag) {
    return false;
  }
  var proto = (0, _getPrototype2.default)(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

exports.default = isPlainObject;
},{"./_baseGetTag.js":13,"./_getPrototype.js":14,"./isObjectLike.js":15}],9:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

exports.default = last;
},{}],8:[function(require,module,exports) {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)) {
    if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = target => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2)) if (!__hasOwnProp.call(target, key) && key !== "default") __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = module2 => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// src/index.ts
__export(exports, {
  AbstractDerivation: () => AbstractDerivation,
  Atom: () => Atom,
  Box: () => Box,
  ConstantDerivation: () => ConstantDerivation,
  DerivationFromSource: () => DerivationFromSource,
  PointerProxy: () => PointerProxy,
  Ticker: () => Ticker,
  getPointerParts: () => getPointerParts,
  isDerivation: () => isDerivation,
  isPointer: () => isPointer,
  iterateAndCountTicks: () => iterateAndCountTicks,
  iterateOver: () => iterateOver,
  pointer: () => pointer_default,
  prism: () => prism_default,
  val: () => val,
  valueDerivation: () => valueDerivation
});

// src/Atom.ts
var import_get = __toModule(require("lodash-es/get"));
var import_isPlainObject = __toModule(require("lodash-es/isPlainObject"));
var import_last = __toModule(require("lodash-es/last"));

// src/utils/Tappable.ts
var Tappable = class {
  constructor(props) {
    this._untapFromSourceTimeout = null;
    this._cb = arg => {
      this._tappers.forEach(cb => {
        cb(arg);
      });
    };
    this._lastTapperId = 0;
    this._untapFromSource = null;
    this._props = props;
    this._tappers = new Map();
  }
  _check() {
    if (this._untapFromSource) {
      if (this._tappers.size === 0) {
        this._scheduleToUntapFromSource();
      }
    } else {
      if (this._tappers.size !== 0) {
        this._untapFromSource = this._props.tapToSource(this._cb);
      }
    }
  }
  _scheduleToUntapFromSource() {
    if (this._untapFromSourceTimeout !== null) return;
    this._untapFromSourceTimeout = setTimeout(() => {
      this._untapFromSourceTimeout = null;
      if (this._tappers.size === 0) {
        this._untapFromSource();
        this._untapFromSource = null;
      }
    }, 0);
  }
  tap(cb) {
    const tapperId = this._lastTapperId++;
    this._tappers.set(tapperId, cb);
    this._check();
    return () => {
      this._removeTapperById(tapperId);
    };
  }
  _removeTapperById(id) {
    this._tappers.delete(id);
    this._check();
  }
};

// src/utils/Emitter.ts
var Emitter = class {
  constructor() {
    this._lastTapperId = 0;
    this._tappers = new Map();
    this.tappable = new Tappable({
      tapToSource: cb => {
        return this._tap(cb);
      }
    });
  }
  _tap(cb) {
    const tapperId = this._lastTapperId++;
    this._tappers.set(tapperId, cb);
    this._onNumberOfTappersChangeListener && this._onNumberOfTappersChangeListener(this._tappers.size);
    return () => {
      this._removeTapperById(tapperId);
    };
  }
  _removeTapperById(id) {
    const oldSize = this._tappers.size;
    this._tappers.delete(id);
    const newSize = this._tappers.size;
    if (oldSize !== newSize) {
      this._onNumberOfTappersChangeListener && this._onNumberOfTappersChangeListener(this._tappers.size);
    }
  }
  emit(payload) {
    this._tappers.forEach(cb => {
      cb(payload);
    });
  }
  hasTappers() {
    return this._tappers.size !== 0;
  }
  onNumberOfTappersChange(cb) {
    this._onNumberOfTappersChangeListener = cb;
  }
};

// src/derivations/DerivationEmitter.ts
var DerivationEmitter = class {
  constructor(derivation, ticker) {
    this._possiblyMarkAsStale = () => {
      this._ticker.onThisOrNextTick(this._refresh);
    };
    this._refresh = () => {
      const newValue = this._derivation.getValue();
      if (newValue === this._lastValue && this._lastValueRecorded === true) return;
      this._lastValue = newValue;
      this._lastValueRecorded = true;
      this._emitter.emit(newValue);
    };
    this._derivation = derivation;
    this._ticker = ticker;
    this._emitter = new Emitter();
    this._emitter.onNumberOfTappersChange(() => {
      this._reactToNumberOfTappersChange();
    });
    this._hadTappers = false;
    this._lastValueRecorded = false;
    this._lastValue = void 0;
    return this;
  }
  _reactToNumberOfTappersChange() {
    const hasTappers = this._emitter.hasTappers();
    if (hasTappers !== this._hadTappers) {
      this._hadTappers = hasTappers;
      if (hasTappers) {
        this._derivation.addDependent(this._possiblyMarkAsStale);
      } else {
        this._derivation.removeDependent(this._possiblyMarkAsStale);
      }
    }
  }
  tappable() {
    return this._emitter.tappable;
  }
};

// src/derivations/DerivationValuelessEmitter.ts
var DerivationValuelessEmitter = class {
  constructor(derivation, dontEmitValues = false) {
    this.dontEmitValues = dontEmitValues;
    this._possiblyMarkAsStale = () => {
      this._emitter.emit(void 0);
    };
    this._derivation = derivation;
    this._emitter = new Emitter();
    this._emitter.onNumberOfTappersChange(() => {
      this._reactToNumberOfTappersChange();
    });
    this._hadTappers = false;
    return this;
  }
  _reactToNumberOfTappersChange() {
    const hasTappers = this._emitter.hasTappers();
    if (hasTappers !== this._hadTappers) {
      this._hadTappers = hasTappers;
      if (hasTappers) {
        this._derivation.addDependent(this._possiblyMarkAsStale);
      } else {
        this._derivation.removeDependent(this._possiblyMarkAsStale);
      }
    }
  }
  tappable() {
    return this._emitter.tappable;
  }
};

// src/derivations/IDerivation.ts
function isDerivation(d) {
  return d && d.isDerivation && d.isDerivation === true;
}

// src/derivations/flatMap.ts
var UPDATE_NEEDED_FROM;
(function (UPDATE_NEEDED_FROM2) {
  UPDATE_NEEDED_FROM2[UPDATE_NEEDED_FROM2["none"] = 0] = "none";
  UPDATE_NEEDED_FROM2[UPDATE_NEEDED_FROM2["dep"] = 1] = "dep";
  UPDATE_NEEDED_FROM2[UPDATE_NEEDED_FROM2["inner"] = 2] = "inner";
})(UPDATE_NEEDED_FROM || (UPDATE_NEEDED_FROM = {}));
var makeFlatMapDerivationClass = () => {
  class FlatMapDerivation extends AbstractDerivation {
    constructor(_depDerivation, _fn) {
      super();
      this._depDerivation = _depDerivation;
      this._fn = _fn;
      this._innerDerivation = void 0;
      this._staleDependency = 1;
      this._addDependency(_depDerivation);
      return this;
    }
    _recalculateHot() {
      const updateNeededFrom = this._staleDependency;
      this._staleDependency = 0;
      if (updateNeededFrom === 2) {
        return this._innerDerivation.getValue();
      }
      const possibleInnerDerivation = this._fn(this._depDerivation.getValue());
      if (isDerivation(possibleInnerDerivation)) {
        this._innerDerivation = possibleInnerDerivation;
        this._addDependency(possibleInnerDerivation);
        return possibleInnerDerivation.getValue();
      } else {
        return possibleInnerDerivation;
      }
    }
    _recalculateCold() {
      const possibleInnerDerivation = this._fn(this._depDerivation.getValue());
      if (isDerivation(possibleInnerDerivation)) {
        return possibleInnerDerivation.getValue();
      } else {
        return possibleInnerDerivation;
      }
    }
    _recalculate() {
      return this.isHot ? this._recalculateHot() : this._recalculateCold();
    }
    _reactToDependencyBecomingStale(msgComingFrom) {
      const updateNeededFrom = msgComingFrom === this._depDerivation ? 1 : 2;
      if (updateNeededFrom === 2 && msgComingFrom !== this._innerDerivation) {
        throw Error(`got a _reactToDependencyBecomingStale() from neither the dep nor the inner derivation`);
      }
      if (this._staleDependency === 0) {
        this._staleDependency = updateNeededFrom;
        if (updateNeededFrom === 1) {
          this._removeInnerDerivation();
        }
      } else if (this._staleDependency === 1) {} else {
        if (updateNeededFrom === 1) {
          this._staleDependency = 1;
          this._removeInnerDerivation();
        }
      }
    }
    _removeInnerDerivation() {
      if (this._innerDerivation) {
        this._removeDependency(this._innerDerivation);
        this._innerDerivation = void 0;
      }
    }
    _keepHot() {
      this._staleDependency = 1;
      this.getValue();
    }
    _becomeCold() {
      this._staleDependency = 1;
      this._removeInnerDerivation();
    }
  }
  FlatMapDerivation.displayName = "flatMap";
  return FlatMapDerivation;
};
var cls = void 0;
function flatMap(dep, fn) {
  if (!cls) {
    cls = makeFlatMapDerivationClass();
  }
  return new cls(dep, fn);
}

// src/derivations/map.ts
var makeMapDerivationClass = () => class MapDerivation extends AbstractDerivation {
  constructor(_dep, _fn) {
    super();
    this._dep = _dep;
    this._fn = _fn;
    this._addDependency(_dep);
  }
  _recalculate() {
    return this._fn(this._dep.getValue());
  }
  _reactToDependencyBecomingStale() {}
};
var cls2 = void 0;
function flatMap2(dep, fn) {
  if (!cls2) {
    cls2 = makeMapDerivationClass();
  }
  return new cls2(dep, fn);
}

// src/utils/Stack.ts
var Stack = class {
  constructor() {
    this._head = void 0;
  }
  peek() {
    return this._head && this._head.data;
  }
  pop() {
    const head = this._head;
    if (!head) {
      return void 0;
    }
    this._head = head.next;
    return head.data;
  }
  push(data) {
    const node = { next: this._head, data };
    this._head = node;
  }
};

// src/derivations/prism/discoveryMechanism.ts
function createMechanism() {
  const noop2 = () => {};
  const stack = new Stack();
  const noopCollector = noop2;
  const pushCollector2 = collector => {
    stack.push(collector);
  };
  const popCollector2 = collector => {
    const existing = stack.peek();
    if (existing !== collector) {
      throw new Error(`Popped collector is not on top of the stack`);
    }
    stack.pop();
  };
  const startIgnoringDependencies2 = () => {
    stack.push(noopCollector);
  };
  const stopIgnoringDependencies2 = () => {
    if (stack.peek() !== noopCollector) {
      if ("development" === "development") {
        console.warn("This should never happen");
      }
    } else {
      stack.pop();
    }
  };
  const reportResolutionStart2 = d => {
    const possibleCollector = stack.peek();
    if (possibleCollector) {
      possibleCollector(d);
    }
    stack.push(noopCollector);
  };
  const reportResolutionEnd2 = _d => {
    stack.pop();
  };
  return {
    type: "Dataverse_discoveryMechanism",
    startIgnoringDependencies: startIgnoringDependencies2,
    stopIgnoringDependencies: stopIgnoringDependencies2,
    reportResolutionStart: reportResolutionStart2,
    reportResolutionEnd: reportResolutionEnd2,
    pushCollector: pushCollector2,
    popCollector: popCollector2
  };
}
function getSharedMechanism() {
  const varName = "__dataverse_discoveryMechanism_sharedStack";
  if (window) {
    const existingMechanism = window[varName];
    if (existingMechanism && typeof existingMechanism === "object" && existingMechanism.type === "Dataverse_discoveryMechanism") {
      return existingMechanism;
    } else {
      const mechanism = createMechanism();
      window[varName] = mechanism;
      return mechanism;
    }
  } else {
    return createMechanism();
  }
}
var {
  startIgnoringDependencies,
  stopIgnoringDependencies,
  reportResolutionEnd,
  reportResolutionStart,
  pushCollector,
  popCollector
} = getSharedMechanism();

// src/derivations/AbstractDerivation.ts
var AbstractDerivation = class {
  constructor() {
    this.isDerivation = true;
    this._didMarkDependentsAsStale = false;
    this._isHot = false;
    this._isFresh = false;
    this._lastValue = void 0;
    this._dependents = new Set();
    this._dependencies = new Set();
    this._internal_markAsStale = which => {
      this._reactToDependencyBecomingStale(which);
      if (this._didMarkDependentsAsStale) return;
      this._didMarkDependentsAsStale = true;
      this._isFresh = false;
      this._dependents.forEach(dependent => {
        dependent(this);
      });
    };
  }
  get isHot() {
    return this._isHot;
  }
  _addDependency(d) {
    if (this._dependencies.has(d)) return;
    this._dependencies.add(d);
    if (this._isHot) d.addDependent(this._internal_markAsStale);
  }
  _removeDependency(d) {
    if (!this._dependencies.has(d)) return;
    this._dependencies.delete(d);
    if (this._isHot) d.removeDependent(this._internal_markAsStale);
  }
  changes(ticker) {
    return new DerivationEmitter(this, ticker).tappable();
  }
  changesWithoutValues() {
    return new DerivationValuelessEmitter(this).tappable();
  }
  keepHot() {
    return this.changesWithoutValues().tap(() => {});
  }
  tapImmediate(ticker, fn) {
    const untap = this.changes(ticker).tap(fn);
    fn(this.getValue());
    return untap;
  }
  addDependent(d) {
    const hadDepsBefore = this._dependents.size > 0;
    this._dependents.add(d);
    const hasDepsNow = this._dependents.size > 0;
    if (hadDepsBefore !== hasDepsNow) {
      this._reactToNumberOfDependentsChange();
    }
  }
  removeDependent(d) {
    const hadDepsBefore = this._dependents.size > 0;
    this._dependents.delete(d);
    const hasDepsNow = this._dependents.size > 0;
    if (hadDepsBefore !== hasDepsNow) {
      this._reactToNumberOfDependentsChange();
    }
  }
  _markAsStale(which) {
    this._internal_markAsStale(which);
  }
  getValue() {
    reportResolutionStart(this);
    if (!this._isFresh) {
      const newValue = this._recalculate();
      this._lastValue = newValue;
      if (this._isHot) {
        this._isFresh = true;
        this._didMarkDependentsAsStale = false;
      }
    }
    reportResolutionEnd(this);
    return this._lastValue;
  }
  _reactToNumberOfDependentsChange() {
    const shouldBecomeHot = this._dependents.size > 0;
    if (shouldBecomeHot === this._isHot) return;
    this._isHot = shouldBecomeHot;
    this._didMarkDependentsAsStale = false;
    this._isFresh = false;
    if (shouldBecomeHot) {
      this._dependencies.forEach(d => {
        d.addDependent(this._internal_markAsStale);
      });
      this._keepHot();
    } else {
      this._dependencies.forEach(d => {
        d.removeDependent(this._internal_markAsStale);
      });
      this._becomeCold();
    }
  }
  _keepHot() {}
  _becomeCold() {}
  map(fn) {
    return flatMap2(this, fn);
  }
  flatMap(fn) {
    return flatMap(this, fn);
  }
};

// src/derivations/DerivationFromSource.ts
var noop = () => {};
var DerivationFromSource = class extends AbstractDerivation {
  constructor(_tapToSource, _getValueFromSource) {
    super();
    this._tapToSource = _tapToSource;
    this._getValueFromSource = _getValueFromSource;
    this._untapFromChanges = noop;
    this._cachedValue = void 0;
    this._hasCachedValue = false;
  }
  _recalculate() {
    if (this.isHot) {
      if (!this._hasCachedValue) {
        this._cachedValue = this._getValueFromSource();
        this._hasCachedValue = true;
      }
      return this._cachedValue;
    } else {
      return this._getValueFromSource();
    }
  }
  _keepHot() {
    this._hasCachedValue = false;
    this._cachedValue = void 0;
    this._untapFromChanges = this._tapToSource(newValue => {
      this._hasCachedValue = true;
      this._cachedValue = newValue;
      this._markAsStale(this);
    });
  }
  _becomeCold() {
    this._untapFromChanges();
    this._untapFromChanges = noop;
    this._hasCachedValue = false;
    this._cachedValue = void 0;
  }
  _reactToDependencyBecomingStale() {}
};

// src/pointer.ts
var pointerMetaWeakMap = new WeakMap();
var pointerMetaSymbol = Symbol("pointerMeta");
var cachedSubPointersWeakMap = new WeakMap();
var handler = {
  get(obj, prop) {
    if (prop === pointerMetaSymbol) return pointerMetaWeakMap.get(obj);
    let subs = cachedSubPointersWeakMap.get(obj);
    if (!subs) {
      subs = {};
      cachedSubPointersWeakMap.set(obj, subs);
    }
    if (subs[prop]) return subs[prop];
    const meta = pointerMetaWeakMap.get(obj);
    const subPointer = pointer({ root: meta.root, path: [...meta.path, prop] });
    subs[prop] = subPointer;
    return subPointer;
  }
};
var getPointerMeta = p => {
  const meta = p[pointerMetaSymbol];
  return meta;
};
var getPointerParts = p => {
  const { root, path } = getPointerMeta(p);
  return { root, path };
};
function pointer(args) {
  var _a;
  const meta = {
    root: args.root,
    path: (_a = args.path) != null ? _a : []
  };
  const hiddenObj = {};
  pointerMetaWeakMap.set(hiddenObj, meta);
  return new Proxy(hiddenObj, handler);
}
var pointer_default = pointer;
var isPointer = p => {
  return p && !!getPointerMeta(p);
};

// src/utils/updateDeep.ts
function updateDeep(state2, path, reducer) {
  if (path.length === 0) return reducer(state2);
  return hoop(state2, path, reducer);
}
var hoop = (s, path, reducer) => {
  if (path.length === 0) {
    return reducer(s);
  }
  if (Array.isArray(s)) {
    let [index, ...restOfPath] = path;
    index = parseInt(String(index), 10);
    if (isNaN(index)) index = 0;
    const oldVal = s[index];
    const newVal = hoop(oldVal, restOfPath, reducer);
    if (oldVal === newVal) return s;
    const newS = [...s];
    newS.splice(index, 1, newVal);
    return newS;
  } else if (typeof s === "object" && s !== null) {
    const [key, ...restOfPath] = path;
    const oldVal = s[key];
    const newVal = hoop(oldVal, restOfPath, reducer);
    if (oldVal === newVal) return s;
    const newS = __spreadProps(__spreadValues({}, s), { [key]: newVal });
    return newS;
  } else {
    const [key, ...restOfPath] = path;
    return { [key]: hoop(void 0, restOfPath, reducer) };
  }
};

// src/Atom.ts
var ValueTypes;
(function (ValueTypes2) {
  ValueTypes2[ValueTypes2["Dict"] = 0] = "Dict";
  ValueTypes2[ValueTypes2["Array"] = 1] = "Array";
  ValueTypes2[ValueTypes2["Other"] = 2] = "Other";
})(ValueTypes || (ValueTypes = {}));
var getTypeOfValue = v => {
  if (Array.isArray(v)) return 1;
  if ((0, import_isPlainObject.default)(v)) return 0;
  return 2;
};
var getKeyOfValue = (v, key, vType = getTypeOfValue(v)) => {
  if (vType === 0 && typeof key === "string") {
    return v[key];
  } else if (vType === 1 && isValidArrayIndex(key)) {
    return v[key];
  } else {
    return void 0;
  }
};
var isValidArrayIndex = key => {
  const inNumber = typeof key === "number" ? key : parseInt(key, 10);
  return !isNaN(inNumber) && inNumber >= 0 && inNumber < Infinity && (inNumber | 0) === inNumber;
};
var Scope = class {
  constructor(_parent, _path) {
    this._parent = _parent;
    this._path = _path;
    this.children = new Map();
    this.identityChangeListeners = new Set();
  }
  addIdentityChangeListener(cb) {
    this.identityChangeListeners.add(cb);
  }
  removeIdentityChangeListener(cb) {
    this.identityChangeListeners.delete(cb);
    this._checkForGC();
  }
  removeChild(key) {
    this.children.delete(key);
    this._checkForGC();
  }
  getChild(key) {
    return this.children.get(key);
  }
  getOrCreateChild(key) {
    let child = this.children.get(key);
    if (!child) {
      child = child = new Scope(this, this._path.concat([key]));
      this.children.set(key, child);
    }
    return child;
  }
  _checkForGC() {
    if (this.identityChangeListeners.size > 0) return;
    if (this.children.size > 0) return;
    if (this._parent) {
      this._parent.removeChild((0, import_last.default)(this._path));
    }
  }
};
var Atom = class {
  constructor(initialState) {
    this.$$isIdentityDerivationProvider = true;
    this.reduceState = (path, reducer) => {
      const newState = updateDeep(this.getState(), path, reducer);
      this.setState(newState);
      return newState;
    };
    this._onPathValueChange = (path, cb) => {
      const scope2 = this._getOrCreateScopeForPath(path);
      scope2.identityChangeListeners.add(cb);
      const untap = () => {
        scope2.identityChangeListeners.delete(cb);
      };
      return untap;
    };
    this._currentState = initialState;
    this._rootScope = new Scope(void 0, []);
    this.pointer = pointer_default({ root: this, path: [] });
  }
  setState(newState) {
    const oldState = this._currentState;
    this._currentState = newState;
    this._checkUpdates(this._rootScope, oldState, newState);
  }
  getState() {
    return this._currentState;
  }
  getIn(path) {
    return path.length === 0 ? this.getState() : (0, import_get.default)(this.getState(), path);
  }
  setIn(path, val2) {
    return this.reduceState(path, () => val2);
  }
  _checkUpdates(scope2, oldState, newState) {
    if (oldState === newState) return;
    scope2.identityChangeListeners.forEach(cb => cb(newState));
    if (scope2.children.size === 0) return;
    const oldValueType = getTypeOfValue(oldState);
    const newValueType = getTypeOfValue(newState);
    if (oldValueType === 2 && oldValueType === newValueType) return;
    scope2.children.forEach((childScope, childKey) => {
      const oldChildVal = getKeyOfValue(oldState, childKey, oldValueType);
      const newChildVal = getKeyOfValue(newState, childKey, newValueType);
      this._checkUpdates(childScope, oldChildVal, newChildVal);
    });
  }
  _getOrCreateScopeForPath(path) {
    let curScope = this._rootScope;
    for (const pathEl of path) {
      curScope = curScope.getOrCreateChild(pathEl);
    }
    return curScope;
  }
  getIdentityDerivation(path) {
    return new DerivationFromSource(listener => this._onPathValueChange(path, listener), () => this.getIn(path));
  }
};
var identityDerivationWeakMap = new WeakMap();
var valueDerivation = pointer2 => {
  const meta = getPointerMeta(pointer2);
  let derivation = identityDerivationWeakMap.get(meta);
  if (!derivation) {
    const root = meta.root;
    if (!isIdentityChangeProvider(root)) {
      throw new Error(`Cannot run valueDerivation() on a pointer whose root is not an IdentityChangeProvider`);
    }
    const { path } = meta;
    derivation = root.getIdentityDerivation(path);
    identityDerivationWeakMap.set(meta, derivation);
  }
  return derivation;
};
function isIdentityChangeProvider(val2) {
  return typeof val2 === "object" && val2 !== null && val2["$$isIdentityDerivationProvider"] === true;
}
var val = pointerOrDerivationOrPlainValue => {
  if (isPointer(pointerOrDerivationOrPlainValue)) {
    return valueDerivation(pointerOrDerivationOrPlainValue).getValue();
  } else if (isDerivation(pointerOrDerivationOrPlainValue)) {
    return pointerOrDerivationOrPlainValue.getValue();
  } else {
    return pointerOrDerivationOrPlainValue;
  }
};

// src/Box.ts
var Box = class {
  constructor(_value) {
    this._value = _value;
    this._emitter = new Emitter();
    this._publicDerivation = new DerivationFromSource(listener => this._emitter.tappable.tap(listener), this.get.bind(this));
  }
  set(v) {
    if (v === this._value) return;
    this._value = v;
    this._emitter.emit(v);
  }
  get() {
    return this._value;
  }
  get derivation() {
    return this._publicDerivation;
  }
};

// src/derivations/ConstantDerivation.ts
var ConstantDerivation = class extends AbstractDerivation {
  constructor(v) {
    super();
    this._v = v;
    return this;
  }
  _recalculate() {
    return this._v;
  }
  _reactToDependencyBecomingStale() {}
};

// src/derivations/iterateAndCountTicks.ts
function* iterateAndCountTicks(pointerOrDerivation) {
  let d;
  if (isPointer(pointerOrDerivation)) {
    d = valueDerivation(pointerOrDerivation);
  } else if (isDerivation(pointerOrDerivation)) {
    d = pointerOrDerivation;
  } else {
    throw new Error(`Only pointers and derivations are supported`);
  }
  let ticksCountedSinceLastYield = 0;
  const untap = d.changesWithoutValues().tap(() => {
    ticksCountedSinceLastYield++;
  });
  try {
    while (true) {
      const ticks = ticksCountedSinceLastYield;
      ticksCountedSinceLastYield = 0;
      yield { value: d.getValue(), ticks };
    }
  } finally {
    untap();
  }
}

// src/Ticker.ts
var Ticker = class {
  constructor() {
    this._ticking = false;
    this._scheduledForThisOrNextTick = new Set();
    this._scheduledForNextTick = new Set();
    this._timeAtCurrentTick = 0;
  }
  onThisOrNextTick(fn) {
    this._scheduledForThisOrNextTick.add(fn);
  }
  onNextTick(fn) {
    this._scheduledForNextTick.add(fn);
  }
  offThisOrNextTick(fn) {
    this._scheduledForThisOrNextTick.delete(fn);
  }
  offNextTick(fn) {
    this._scheduledForNextTick.delete(fn);
  }
  get time() {
    if (this._ticking) {
      return this._timeAtCurrentTick;
    } else return performance.now();
  }
  tick(t = performance.now()) {
    this._ticking = true;
    this._timeAtCurrentTick = t;
    this._scheduledForNextTick.forEach(v => this._scheduledForThisOrNextTick.add(v));
    this._scheduledForNextTick.clear();
    this._tick(0);
    this._ticking = false;
  }
  _tick(iterationNumber) {
    const time = this.time;
    if (iterationNumber > 10) {
      console.warn("_tick() recursing for 10 times");
    }
    if (iterationNumber > 100) {
      throw new Error(`Maximum recursion limit for _tick()`);
    }
    const oldSet = this._scheduledForThisOrNextTick;
    this._scheduledForThisOrNextTick = new Set();
    oldSet.forEach(fn => {
      fn(time);
    });
    if (this._scheduledForThisOrNextTick.size > 0) {
      return this._tick(iterationNumber + 1);
    }
  }
};

// src/derivations/iterateOver.ts
function* iterateOver(pointerOrDerivation) {
  let d;
  if (isPointer(pointerOrDerivation)) {
    d = valueDerivation(pointerOrDerivation);
  } else if (isDerivation(pointerOrDerivation)) {
    d = pointerOrDerivation;
  } else {
    throw new Error(`Only pointers and derivations are supported`);
  }
  const ticker = new Ticker();
  const untap = d.changes(ticker).tap(v => {});
  try {
    while (true) {
      ticker.tick();
      yield d.getValue();
    }
  } finally {
    untap();
  }
}

// src/derivations/prism/prism.ts
var voidFn = () => {};
var PrismDerivation = class extends AbstractDerivation {
  constructor(_fn) {
    super();
    this._fn = _fn;
    this._cacheOfDendencyValues = new Map();
    this._possiblyStaleDeps = new Set();
    this._prismScope = new PrismScope();
  }
  _recalculate() {
    let value;
    if (this._possiblyStaleDeps.size > 0) {
      let anActuallyStaleDepWasFound = false;
      startIgnoringDependencies();
      for (const dep of this._possiblyStaleDeps) {
        if (this._cacheOfDendencyValues.get(dep) !== dep.getValue()) {
          anActuallyStaleDepWasFound = true;
          break;
        }
      }
      stopIgnoringDependencies();
      this._possiblyStaleDeps.clear();
      if (!anActuallyStaleDepWasFound) {
        return this._lastValue;
      }
    }
    const newDeps = new Set();
    this._cacheOfDendencyValues.clear();
    const collector = observedDep => {
      newDeps.add(observedDep);
      this._addDependency(observedDep);
    };
    pushCollector(collector);
    hookScopeStack.push(this._prismScope);
    try {
      value = this._fn();
    } catch (error) {
      console.error(error);
    } finally {
      const topOfTheStack = hookScopeStack.pop();
      if (topOfTheStack !== this._prismScope) {
        console.warn(`The Prism hook stack has slipped. This is a bug.`);
      }
    }
    popCollector(collector);
    this._dependencies.forEach(dep => {
      if (!newDeps.has(dep)) {
        this._removeDependency(dep);
      }
    });
    this._dependencies = newDeps;
    startIgnoringDependencies();
    newDeps.forEach(dep => {
      this._cacheOfDendencyValues.set(dep, dep.getValue());
    });
    stopIgnoringDependencies();
    return value;
  }
  _reactToDependencyBecomingStale(msgComingFrom) {
    this._possiblyStaleDeps.add(msgComingFrom);
  }
  _keepHot() {
    this._prismScope = new PrismScope();
    startIgnoringDependencies();
    this.getValue();
    stopIgnoringDependencies();
  }
  _becomeCold() {
    cleanupScopeStack(this._prismScope);
    this._prismScope = new PrismScope();
  }
};
var PrismScope = class {
  constructor() {
    this.isPrismScope = true;
    this._subs = {};
  }
  sub(key) {
    if (!this._subs[key]) {
      this._subs[key] = new PrismScope();
    }
    return this._subs[key];
  }
  get subs() {
    return this._subs;
  }
};
function cleanupScopeStack(scope2) {
  for (const [_, sub2] of Object.entries(scope2.subs)) {
    cleanupScopeStack(sub2);
  }
  cleanupEffects(scope2);
}
function cleanupEffects(scope2) {
  const effects = effectsWeakMap.get(scope2);
  if (effects) {
    for (const k of Object.keys(effects)) {
      const effect2 = effects[k];
      safelyRun(effect2.cleanup, void 0);
    }
  }
  effectsWeakMap.delete(scope2);
}
function safelyRun(fn, returnValueInCaseOfError) {
  let returnValue = returnValueInCaseOfError;
  let success = false;
  try {
    returnValue = fn();
    success = true;
  } catch (error) {
    setTimeout(() => {
      throw error;
    });
  }
  return { success, returnValue };
}
var hookScopeStack = new Stack();
var refsWeakMap = new WeakMap();
var effectsWeakMap = new WeakMap();
var memosWeakMap = new WeakMap();
function ref(key, initialValue) {
  const scope2 = hookScopeStack.peek();
  if (!scope2) {
    throw new Error(`prism.ref() is called outside of a prism() call.`);
  }
  let refs = refsWeakMap.get(scope2);
  if (!refs) {
    refs = {};
    refsWeakMap.set(scope2, refs);
  }
  if (refs[key]) {
    return refs[key];
  } else {
    const ref2 = {
      current: initialValue
    };
    refs[key] = ref2;
    return ref2;
  }
}
function effect(key, cb, deps) {
  const scope2 = hookScopeStack.peek();
  if (!scope2) {
    throw new Error(`prism.effect() is called outside of a prism() call.`);
  }
  let effects = effectsWeakMap.get(scope2);
  if (!effects) {
    effects = {};
    effectsWeakMap.set(scope2, effects);
  }
  if (!effects[key]) {
    effects[key] = {
      cleanup: voidFn,
      deps: [{}]
    };
  }
  const effect2 = effects[key];
  if (depsHaveChanged(effect2.deps, deps)) {
    effect2.cleanup();
    startIgnoringDependencies();
    effect2.cleanup = safelyRun(cb, voidFn).returnValue;
    stopIgnoringDependencies();
    effect2.deps = deps;
  }
}
function depsHaveChanged(oldDeps, newDeps) {
  if (oldDeps === void 0 || newDeps === void 0) {
    return true;
  } else if (oldDeps.length !== newDeps.length) {
    return true;
  } else {
    return oldDeps.some((el, i) => el !== newDeps[i]);
  }
}
function memo(key, fn, deps) {
  const scope2 = hookScopeStack.peek();
  if (!scope2) {
    throw new Error(`prism.memo() is called outside of a prism() call.`);
  }
  let memos = memosWeakMap.get(scope2);
  if (!memos) {
    memos = {};
    memosWeakMap.set(scope2, memos);
  }
  if (!memos[key]) {
    memos[key] = {
      cachedValue: null,
      deps: [{}]
    };
  }
  const memo2 = memos[key];
  if (depsHaveChanged(memo2.deps, deps)) {
    startIgnoringDependencies();
    memo2.cachedValue = safelyRun(fn, void 0).returnValue;
    stopIgnoringDependencies();
    memo2.deps = deps;
  }
  return memo2.cachedValue;
}
function state(key, initialValue) {
  const { b, setValue } = prism.memo("state/" + key, () => {
    const b2 = new Box(initialValue);
    const setValue2 = val2 => b2.set(val2);
    return { b: b2, setValue: setValue2 };
  }, []);
  return [b.derivation.getValue(), setValue];
}
function ensurePrism() {
  const scope2 = hookScopeStack.peek();
  if (!scope2) {
    throw new Error(`The parent function is called outside of a prism() call.`);
  }
}
function scope(key, fn) {
  const parentScope = hookScopeStack.peek();
  if (!parentScope) {
    throw new Error(`prism.scope() is called outside of a prism() call.`);
  }
  const subScope = parentScope.sub(key);
  hookScopeStack.push(subScope);
  const ret = safelyRun(fn, void 0).returnValue;
  hookScopeStack.pop();
  return ret;
}
function sub(key, fn, deps) {
  return memo(key, () => prism(fn), deps).getValue();
}
function inPrism() {
  return !!hookScopeStack.peek();
}
var prism = fn => {
  return new PrismDerivation(fn);
};
prism.ref = ref;
prism.effect = effect;
prism.memo = memo;
prism.ensurePrism = ensurePrism;
prism.state = state;
prism.scope = scope;
prism.sub = sub;
prism.inPrism = inPrism;
var prism_default = prism;

// src/PointerProxy.ts
var PointerProxy = class {
  constructor(currentPointer) {
    this.$$isIdentityDerivationProvider = true;
    this._currentPointerBox = new Box(currentPointer);
    this.pointer = pointer_default({ root: this, path: [] });
  }
  setPointer(p) {
    this._currentPointerBox.set(p);
  }
  getIdentityDerivation(path) {
    return this._currentPointerBox.derivation.flatMap(p => {
      const subPointer = path.reduce((pointerSoFar, pathItem) => pointerSoFar[pathItem], p);
      return valueDerivation(subPointer);
    });
  }
};
//# sourceMappingURL=index.js.map
},{"lodash-es/get":10,"lodash-es/isPlainObject":11,"lodash-es/last":9}],6:[function(require,module,exports) {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {})) if (__hasOwnProp.call(b2, prop)) __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b2)) {
    if (__propIsEnum.call(b2, prop)) __defNormalProp(a2, prop, b2[prop]);
  }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __markAsModule = target => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source) if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols) for (var prop of __getOwnPropSymbols(source)) {
    if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop)) target[prop] = source[prop];
  }
  return target;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2)) if (!__hasOwnProp.call(target, key) && key !== "default") __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = module2 => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// ../node_modules/timing-function/lib/UnitBezier.js
var require_UnitBezier = __commonJS({
  "../node_modules/timing-function/lib/UnitBezier.js"(exports, module2) {
    var UnitBezier2;
    module2.exports = UnitBezier2 = function () {
      function UnitBezier3(p1x, p1y, p2x, p2y) {
        this.set(p1x, p1y, p2x, p2y);
      }
      UnitBezier3.prototype.set = function (p1x, p1y, p2x, p2y) {
        this._cx = 3 * p1x;
        this._bx = 3 * (p2x - p1x) - this._cx;
        this._ax = 1 - this._cx - this._bx;
        this._cy = 3 * p1y;
        this._by = 3 * (p2y - p1y) - this._cy;
        this._ay = 1 - this._cy - this._by;
      };
      UnitBezier3.epsilon = 1e-6;
      UnitBezier3.prototype._sampleCurveX = function (t3) {
        return ((this._ax * t3 + this._bx) * t3 + this._cx) * t3;
      };
      UnitBezier3.prototype._sampleCurveY = function (t3) {
        return ((this._ay * t3 + this._by) * t3 + this._cy) * t3;
      };
      UnitBezier3.prototype._sampleCurveDerivativeX = function (t3) {
        return (3 * this._ax * t3 + 2 * this._bx) * t3 + this._cx;
      };
      UnitBezier3.prototype._solveCurveX = function (x2, epsilon) {
        var d2, i2, t0, t1, t22, x22;
        t0 = void 0;
        t1 = void 0;
        t22 = void 0;
        x22 = void 0;
        d2 = void 0;
        i2 = void 0;
        t22 = x2;
        i2 = 0;
        while (i2 < 8) {
          x22 = this._sampleCurveX(t22) - x2;
          if (Math.abs(x22) < epsilon) {
            return t22;
          }
          d2 = this._sampleCurveDerivativeX(t22);
          if (Math.abs(d2) < epsilon) {
            break;
          }
          t22 = t22 - x22 / d2;
          i2++;
        }
        t0 = 0;
        t1 = 1;
        t22 = x2;
        if (t22 < t0) {
          return t0;
        }
        if (t22 > t1) {
          return t1;
        }
        while (t0 < t1) {
          x22 = this._sampleCurveX(t22);
          if (Math.abs(x22 - x2) < epsilon) {
            return t22;
          }
          if (x2 > x22) {
            t0 = t22;
          } else {
            t1 = t22;
          }
          t22 = (t1 - t0) * 0.5 + t0;
        }
        return t22;
      };
      UnitBezier3.prototype.solve = function (x2, epsilon) {
        return this._sampleCurveY(this._solveCurveX(x2, epsilon));
      };
      UnitBezier3.prototype.solveSimple = function (x2) {
        return this._sampleCurveY(this._solveCurveX(x2, 1e-6));
      };
      return UnitBezier3;
    }();
  }
});

// ../node_modules/levenshtein-edit-distance/index.js
var require_levenshtein_edit_distance = __commonJS({
  "../node_modules/levenshtein-edit-distance/index.js"(exports, module2) {
    var cache;
    var codes;
    cache = [];
    codes = [];
    function levenshtein(value, other, insensitive) {
      var length, lengthOther, code, result, distance, distanceOther, index, indexOther;
      if (value === other) {
        return 0;
      }
      length = value.length;
      lengthOther = other.length;
      if (length === 0) {
        return lengthOther;
      }
      if (lengthOther === 0) {
        return length;
      }
      if (insensitive) {
        value = value.toLowerCase();
        other = other.toLowerCase();
      }
      index = 0;
      while (index < length) {
        codes[index] = value.charCodeAt(index);
        cache[index] = ++index;
      }
      indexOther = 0;
      while (indexOther < lengthOther) {
        code = other.charCodeAt(indexOther);
        result = distance = indexOther++;
        index = -1;
        while (++index < length) {
          distanceOther = code === codes[index] ? distance : distance + 1;
          distance = cache[index];
          cache[index] = result = distance > result ? distanceOther > result ? result + 1 : distanceOther : distanceOther > distance ? distance + 1 : distanceOther;
        }
      }
      return result;
    }
    module2.exports = levenshtein;
  }
});

// ../node_modules/propose/propose.js
var require_propose = __commonJS({
  "../node_modules/propose/propose.js"(exports, module2) {
    var levenshtein = require_levenshtein_edit_distance();
    function propose2() {
      var ratio;
      var distance;
      var proposed;
      var threshold;
      var ignoreCase;
      var max_ratio = 0;
      var word = arguments[0];
      var dictionary = arguments[1];
      var len = dictionary.length;
      var options = arguments[2];
      if (options) {
        threshold = options.threshold;
        ignoreCase = options.ignoreCase;
      }
      if (threshold === void 0) threshold = 0;
      for (var i2 = 0; i2 < len; ++i2) {
        if (ignoreCase) distance = levenshtein(word, dictionary[i2], true);else distance = levenshtein(word, dictionary[i2]);
        if (distance > word.length) ratio = 1 - distance / dictionary[i2].length;else ratio = 1 - distance / word.length;
        if (ratio > max_ratio) {
          max_ratio = ratio;
          proposed = dictionary[i2];
        }
      }
      if (max_ratio >= threshold) return proposed;
      return null;
    }
    module2.exports = propose2;
  }
});

// ../node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "../node_modules/fast-deep-equal/index.js"(exports, module2) {
    "use strict";

    module2.exports = function equal(a2, b2) {
      if (a2 === b2) return true;
      if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
        if (a2.constructor !== b2.constructor) return false;
        var length, i2, keys;
        if (Array.isArray(a2)) {
          length = a2.length;
          if (length != b2.length) return false;
          for (i2 = length; i2-- !== 0;) if (!equal(a2[i2], b2[i2])) return false;
          return true;
        }
        if (a2.constructor === RegExp) return a2.source === b2.source && a2.flags === b2.flags;
        if (a2.valueOf !== Object.prototype.valueOf) return a2.valueOf() === b2.valueOf();
        if (a2.toString !== Object.prototype.toString) return a2.toString() === b2.toString();
        keys = Object.keys(a2);
        length = keys.length;
        if (length !== Object.keys(b2).length) return false;
        for (i2 = length; i2-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b2, keys[i2])) return false;
        for (i2 = length; i2-- !== 0;) {
          var key = keys[i2];
          if (!equal(a2[key], b2[key])) return false;
        }
        return true;
      }
      return a2 !== a2 && b2 !== b2;
    };
  }
});

// core/src/index.ts
__export(exports, {
  getProject: () => getProject,
  onChange: () => onChange,
  types: () => propTypes_exports
});

// core/src/coreExports.ts
var coreExports_exports = {};
__export(coreExports_exports, {
  getProject: () => getProject,
  onChange: () => onChange,
  types: () => propTypes_exports
});

// core/src/projects/projectsSingleton.ts
var import_dataverse = __toModule(require("@theatre/dataverse"));
var ProjectsSingleton = class {
  constructor() {
    __publicField(this, "atom", new import_dataverse.Atom({ projects: {} }));
  }
  add(id, project) {
    this.atom.reduceState(["projects", id], () => project);
  }
  get(id) {
    return this.atom.getState().projects[id];
  }
  has(id) {
    return !!this.get(id);
  }
};
var singleton = new ProjectsSingleton();
var projectsSingleton_default = singleton;

// core/src/privateAPIs.ts
var publicAPIToPrivateAPIMap = new WeakMap();
function privateAPI(pub) {
  return publicAPIToPrivateAPIMap.get(pub);
}
function setPrivateAPI(pub, priv) {
  publicAPIToPrivateAPIMap.set(pub, priv);
}

// shared/src/utils/index.ts
var emptyArray = [];

// ../node_modules/lodash-es/isArray.js
var isArray = Array.isArray;
var isArray_default = isArray;

// ../node_modules/lodash-es/_freeGlobal.js
var freeGlobal = typeof window == "object" && window && window.Object === Object && window;
var freeGlobal_default = freeGlobal;

// ../node_modules/lodash-es/_root.js
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root;

// ../node_modules/lodash-es/_Symbol.js
var Symbol2 = root_default.Symbol;
var Symbol_default = Symbol2;

// ../node_modules/lodash-es/_getRawTag.js
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];
  try {
    value[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e2) {}
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
var getRawTag_default = getRawTag;

// ../node_modules/lodash-es/_objectToString.js
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
var objectToString_default = objectToString;

// ../node_modules/lodash-es/_baseGetTag.js
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
var baseGetTag_default = baseGetTag;

// ../node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike;

// ../node_modules/lodash-es/isSymbol.js
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
}
var isSymbol_default = isSymbol;

// ../node_modules/lodash-es/_isKey.js
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray_default(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol_default(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var isKey_default = isKey;

// ../node_modules/lodash-es/isObject.js
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_default = isObject;

// ../node_modules/lodash-es/isFunction.js
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject_default(value)) {
    return false;
  }
  var tag = baseGetTag_default(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;

// ../node_modules/lodash-es/_coreJsData.js
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;

// ../node_modules/lodash-es/_isMasked.js
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked;

// ../node_modules/lodash-es/_toSource.js
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e2) {}
    try {
      return func + "";
    } catch (e2) {}
  }
  return "";
}
var toSource_default = toSource;

// ../node_modules/lodash-es/_baseIsNative.js
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto2 = Function.prototype;
var objectProto3 = Object.prototype;
var funcToString2 = funcProto2.toString;
var hasOwnProperty2 = objectProto3.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(value) {
  if (!isObject_default(value) || isMasked_default(value)) {
    return false;
  }
  var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value));
}
var baseIsNative_default = baseIsNative;

// ../node_modules/lodash-es/_getValue.js
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
var getValue_default = getValue;

// ../node_modules/lodash-es/_getNative.js
function getNative(object, key) {
  var value = getValue_default(object, key);
  return baseIsNative_default(value) ? value : void 0;
}
var getNative_default = getNative;

// ../node_modules/lodash-es/_nativeCreate.js
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;

// ../node_modules/lodash-es/_hashClear.js
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default = hashClear;

// ../node_modules/lodash-es/_hashDelete.js
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var hashDelete_default = hashDelete;

// ../node_modules/lodash-es/_hashGet.js
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto4 = Object.prototype;
var hasOwnProperty3 = objectProto4.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty3.call(data, key) ? data[key] : void 0;
}
var hashGet_default = hashGet;

// ../node_modules/lodash-es/_hashHas.js
var objectProto5 = Object.prototype;
var hasOwnProperty4 = objectProto5.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty4.call(data, key);
}
var hashHas_default = hashHas;

// ../node_modules/lodash-es/_hashSet.js
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
  return this;
}
var hashSet_default = hashSet;

// ../node_modules/lodash-es/_Hash.js
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype["delete"] = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;

// ../node_modules/lodash-es/_listCacheClear.js
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default = listCacheClear;

// ../node_modules/lodash-es/eq.js
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_default = eq;

// ../node_modules/lodash-es/_assocIndexOf.js
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_default(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var assocIndexOf_default = assocIndexOf;

// ../node_modules/lodash-es/_listCacheDelete.js
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf_default(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var listCacheDelete_default = listCacheDelete;

// ../node_modules/lodash-es/_listCacheGet.js
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf_default(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var listCacheGet_default = listCacheGet;

// ../node_modules/lodash-es/_listCacheHas.js
function listCacheHas(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default = listCacheHas;

// ../node_modules/lodash-es/_listCacheSet.js
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf_default(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var listCacheSet_default = listCacheSet;

// ../node_modules/lodash-es/_ListCache.js
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype["delete"] = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;

// ../node_modules/lodash-es/_Map.js
var Map2 = getNative_default(root_default, "Map");
var Map_default = Map2;

// ../node_modules/lodash-es/_mapCacheClear.js
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
var mapCacheClear_default = mapCacheClear;

// ../node_modules/lodash-es/_isKeyable.js
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var isKeyable_default = isKeyable;

// ../node_modules/lodash-es/_getMapData.js
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;

// ../node_modules/lodash-es/_mapCacheDelete.js
function mapCacheDelete(key) {
  var result = getMapData_default(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var mapCacheDelete_default = mapCacheDelete;

// ../node_modules/lodash-es/_mapCacheGet.js
function mapCacheGet(key) {
  return getMapData_default(this, key).get(key);
}
var mapCacheGet_default = mapCacheGet;

// ../node_modules/lodash-es/_mapCacheHas.js
function mapCacheHas(key) {
  return getMapData_default(this, key).has(key);
}
var mapCacheHas_default = mapCacheHas;

// ../node_modules/lodash-es/_mapCacheSet.js
function mapCacheSet(key, value) {
  var data = getMapData_default(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var mapCacheSet_default = mapCacheSet;

// ../node_modules/lodash-es/_MapCache.js
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype["delete"] = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;

// ../node_modules/lodash-es/memoize.js
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function () {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache_default)();
  return memoized;
}
memoize.Cache = MapCache_default;
var memoize_default = memoize;

// ../node_modules/lodash-es/_memoizeCapped.js
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize_default(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var memoizeCapped_default = memoizeCapped;

// ../node_modules/lodash-es/_stringToPath.js
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped_default(function (string2) {
  var result = [];
  if (string2.charCodeAt(0) === 46) {
    result.push("");
  }
  string2.replace(rePropName, function (match, number2, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number2 || match);
  });
  return result;
});
var stringToPath_default = stringToPath;

// ../node_modules/lodash-es/_arrayMap.js
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var arrayMap_default = arrayMap;

// ../node_modules/lodash-es/_baseToString.js
var INFINITY = 1 / 0;
var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
var symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray_default(value)) {
    return arrayMap_default(value, baseToString) + "";
  }
  if (isSymbol_default(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var baseToString_default = baseToString;

// ../node_modules/lodash-es/toString.js
function toString(value) {
  return value == null ? "" : baseToString_default(value);
}
var toString_default = toString;

// ../node_modules/lodash-es/_castPath.js
function castPath(value, object) {
  if (isArray_default(value)) {
    return value;
  }
  return isKey_default(value, object) ? [value] : stringToPath_default(toString_default(value));
}
var castPath_default = castPath;

// ../node_modules/lodash-es/_toKey.js
var INFINITY2 = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol_default(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY2 ? "-0" : result;
}
var toKey_default = toKey;

// ../node_modules/lodash-es/_baseGet.js
function baseGet(object, path) {
  path = castPath_default(path, object);
  var index = 0,
      length = path.length;
  while (object != null && index < length) {
    object = object[toKey_default(path[index++])];
  }
  return index && index == length ? object : void 0;
}
var baseGet_default = baseGet;

// ../node_modules/lodash-es/get.js
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet_default(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_default = get;

// shared/src/utils/getDeep.ts
function getDeep(v2, path) {
  if (path.length === 0) return v2;
  return get_default(v2, path);
}

// shared/src/utils/SimpleCache.ts
var SimpleCache = class {
  constructor() {
    __publicField(this, "_values", {});
  }
  get(key, producer) {
    if (this.has(key)) {
      return this._values[key];
    } else {
      const cachedValue = producer();
      this._values[key] = cachedValue;
      return cachedValue;
    }
  }
  has(key) {
    return this._values.hasOwnProperty(key);
  }
};

// core/src/sheetObjects/SheetObjectTemplate.ts
var import_dataverse7 = __toModule(require("@theatre/dataverse"));

// ../node_modules/lodash-es/_defineProperty.js
var defineProperty = function () {
  try {
    var func = getNative_default(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e2) {}
}();
var defineProperty_default = defineProperty;

// ../node_modules/lodash-es/_baseAssignValue.js
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty_default) {
    defineProperty_default(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var baseAssignValue_default = baseAssignValue;

// ../node_modules/lodash-es/_assignValue.js
var objectProto6 = Object.prototype;
var hasOwnProperty5 = objectProto6.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty5.call(object, key) && eq_default(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue_default(object, key, value);
  }
}
var assignValue_default = assignValue;

// ../node_modules/lodash-es/_isIndex.js
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
var isIndex_default = isIndex;

// ../node_modules/lodash-es/_baseSet.js
function baseSet(object, path, value, customizer) {
  if (!isObject_default(object)) {
    return object;
  }
  path = castPath_default(path, object);
  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;
  while (nested != null && ++index < length) {
    var key = toKey_default(path[index]),
        newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject_default(objValue) ? objValue : isIndex_default(path[index + 1]) ? [] : {};
      }
    }
    assignValue_default(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
var baseSet_default = baseSet;

// ../node_modules/lodash-es/set.js
function set(object, path, value) {
  return object == null ? object : baseSet_default(object, path, value);
}
var set_default = set;

// core/src/sheetObjects/getPropDefaultsOfSheetObject.ts
var cachedDefaults = new WeakMap();
function getPropDefaultsOfSheetObject(config) {
  return getDefaultsOfPropTypeConfig(config);
}
function getDefaultsOfPropTypeConfig(config) {
  if (cachedDefaults.has(config)) {
    return cachedDefaults.get(config);
  }
  const generated = config.type === "compound" ? generateDefaultsForCompound(config) : config.type === "enum" ? generateDefaultsForEnum(config) : config.default;
  cachedDefaults.set(config, generated);
  return generated;
}
function generateDefaultsForEnum(config) {
  const defaults = {
    $case: config.defaultCase
  };
  for (const [case_, caseConf] of Object.entries(config.cases)) {
    defaults[case_] = getDefaultsOfPropTypeConfig(caseConf);
  }
  return defaults;
}
function generateDefaultsForCompound(config) {
  const defaults = {};
  for (const [key, propConf] of Object.entries(config.props)) {
    defaults[key] = getDefaultsOfPropTypeConfig(propConf);
  }
  return defaults;
}

// core/src/sequences/trackValueAtTime.ts
var import_dataverse2 = __toModule(require("@theatre/dataverse"));

// shared/src/logger.ts
var logger = {
  log: console.log,
  warn: console.warn,
  error: console.error,
  trace: console.trace
};
var logger_default = logger;

// core/src/sequences/trackValueAtTime.ts
var import_UnitBezier = __toModule(require_UnitBezier());
function trackValueAtTime(trackP, timeD) {
  return (0, import_dataverse2.prism)(() => {
    const track = (0, import_dataverse2.val)(trackP);
    const driverD = import_dataverse2.prism.memo("driver", () => {
      if (!track) {
        return new import_dataverse2.ConstantDerivation(void 0);
      } else if (track.type === "BasicKeyframedTrack") {
        return trackValueAtTime_basicKeyframedTrack(track, timeD);
      } else {
        logger_default.error(`Track type not yet supported.`);
        return new import_dataverse2.ConstantDerivation(void 0);
      }
    }, [track]);
    return driverD.getValue();
  });
}
function trackValueAtTime_basicKeyframedTrack(track, timeD) {
  return (0, import_dataverse2.prism)(() => {
    let stateRef = import_dataverse2.prism.ref("state", { started: false });
    let state = stateRef.current;
    const time = timeD.getValue();
    if (!state.started || time < state.validFrom || state.validTo <= time) {
      stateRef.current = state = pp(timeD, track);
    }
    return state.der.getValue();
  });
}
var undefinedConstD = new import_dataverse2.ConstantDerivation(void 0);
var pp = (progressionD, track) => {
  const progression = progressionD.getValue();
  if (track.keyframes.length === 0) {
    return {
      started: true,
      validFrom: -Infinity,
      validTo: Infinity,
      der: undefinedConstD
    };
  }
  let currentKeyframeIndex = 0;
  while (true) {
    const currentKeyframe = track.keyframes[currentKeyframeIndex];
    if (!currentKeyframe) {
      if ("development" !== "production") {
        logger_default.error(`Bug here`);
      }
      return states.error;
    }
    const isLastKeyframe = currentKeyframeIndex === track.keyframes.length - 1;
    if (progression < currentKeyframe.position) {
      if (currentKeyframeIndex === 0) {
        return states.beforeFirstKeyframe(currentKeyframe);
      } else {
        if ("development" !== "production") {
          logger_default.error(`Bug here`);
        }
        return states.error;
      }
    } else if (currentKeyframe.position === progression) {
      if (isLastKeyframe) {
        return states.lastKeyframe(currentKeyframe);
      } else {
        return states.between(currentKeyframe, track.keyframes[currentKeyframeIndex + 1], progressionD);
      }
    } else {
      if (currentKeyframeIndex === track.keyframes.length - 1) {
        return states.lastKeyframe(currentKeyframe);
      } else {
        const nextKeyframeIndex = currentKeyframeIndex + 1;
        if (track.keyframes[nextKeyframeIndex].position <= progression) {
          currentKeyframeIndex = nextKeyframeIndex;
          continue;
        } else {
          return states.between(currentKeyframe, track.keyframes[currentKeyframeIndex + 1], progressionD);
        }
      }
    }
  }
};
var states = {
  beforeFirstKeyframe(kf) {
    return {
      started: true,
      validFrom: -Infinity,
      validTo: kf.position,
      der: new import_dataverse2.ConstantDerivation(kf.value)
    };
  },
  lastKeyframe(kf) {
    return {
      started: true,
      validFrom: kf.position,
      validTo: Infinity,
      der: new import_dataverse2.ConstantDerivation(kf.value)
    };
  },
  between(left, right, progressionD) {
    if (!left.connectedRight) {
      return {
        started: true,
        validFrom: left.position,
        validTo: right.position,
        der: new import_dataverse2.ConstantDerivation(left.value)
      };
    }
    const solver = new import_UnitBezier.default(left.handles[2], left.handles[3], right.handles[0], right.handles[1]);
    const globalProgressionToLocalProgression = globalProgression => {
      return (globalProgression - left.position) / (right.position - left.position);
    };
    const der = (0, import_dataverse2.prism)(() => {
      const progression = globalProgressionToLocalProgression(progressionD.getValue());
      const valueProgression = solver.solveSimple(progression);
      return left.value + valueProgression * (right.value - left.value);
    });
    return {
      started: true,
      validFrom: left.position,
      validTo: right.position,
      der
    };
  },
  error: {
    started: true,
    validFrom: -Infinity,
    validTo: Infinity,
    der: undefinedConstD
  }
};

// shared/src/utils/deepMergeWithCache.ts
function deepMergeWithCache(base, override, cache) {
  const _cache = cache;
  const possibleCachedValue = _cache.get(base);
  if (possibleCachedValue && possibleCachedValue.override === override) {
    return possibleCachedValue.merged;
  }
  const merged = __spreadValues({}, base);
  for (const key of Object.keys(override)) {
    const valueInOverride = override[key];
    const valueInBase = base[key];
    merged[key] = typeof valueInOverride === "object" && typeof valueInBase === "object" ? deepMergeWithCache(valueInBase, valueInOverride, cache) : typeof valueInOverride === "undefined" ? valueInBase : valueInOverride;
  }
  cache.set(base, { override, merged });
  return merged;
}

// shared/src/utils/pointerDeep.ts
function pointerDeep(base, toAppend) {
  let p2 = base;
  for (const k2 of toAppend) {
    p2 = p2[k2];
  }
  return p2;
}

// shared/src/utils/valToAtom.ts
var import_dataverse3 = __toModule(require("@theatre/dataverse"));
var valToAtom = (key, vals) => {
  const a2 = import_dataverse3.prism.memo(key, () => new import_dataverse3.Atom(vals), []);
  a2.setState(vals);
  return a2;
};

// core/src/sheetObjects/SheetObject.ts
var import_dataverse6 = __toModule(require("@theatre/dataverse"));

// core/src/coreTicker.ts
var import_dataverse4 = __toModule(require("@theatre/dataverse"));
var coreTicker = new import_dataverse4.Ticker();
var coreTicker_default = coreTicker;
var onAnimationFrame = t3 => {
  coreTicker.tick(t3);
  window.requestAnimationFrame(onAnimationFrame);
};
window.requestAnimationFrame(onAnimationFrame);

// core/src/sheetObjects/TheatreSheetObject.ts
var import_dataverse5 = __toModule(require("@theatre/dataverse"));
var TheatreSheetObject = class {
  constructor(internals) {
    __publicField(this, "_cache", new SimpleCache());
    setPrivateAPI(this, internals);
  }
  get type() {
    return "Theatre_SheetObject_PublicAPI";
  }
  get props() {
    return privateAPI(this).propsP;
  }
  get sheet() {
    return privateAPI(this).sheet.publicApi;
  }
  get project() {
    return privateAPI(this).sheet.project.publicApi;
  }
  get address() {
    return __spreadValues({}, privateAPI(this).address);
  }
  _valuesDerivation() {
    return this._cache.get("onValuesChangeDerivation", () => {
      const sheetObject = privateAPI(this);
      const d2 = (0, import_dataverse5.prism)(() => {
        return (0, import_dataverse5.val)(sheetObject.getValues().getValue());
      });
      return d2;
    });
  }
  onValuesChange(fn2) {
    return this._valuesDerivation().tapImmediate(coreTicker_default, fn2);
  }
  get value() {
    return this._valuesDerivation().getValue();
  }
  set initialValue(val6) {
    privateAPI(this).setInitialValue(val6);
  }
};

// core/src/sheetObjects/SheetObject.ts
var SheetObject = class {
  constructor(sheet, template, nativeObject) {
    this.sheet = sheet;
    this.template = template;
    this.nativeObject = nativeObject;
    __publicField(this, "$$isIdentityDerivationProvider", true);
    __publicField(this, "address");
    __publicField(this, "publicApi");
    __publicField(this, "_initialValue", new import_dataverse6.Atom({}));
    __publicField(this, "_cache", new SimpleCache());
    this.address = __spreadProps(__spreadValues({}, template.address), {
      sheetInstanceId: sheet.address.sheetInstanceId
    });
    this.publicApi = new TheatreSheetObject(this);
  }
  get type() {
    return "Theatre_SheetObject";
  }
  getValues() {
    return this._cache.get("getValues()", () => (0, import_dataverse6.prism)(() => {
      const defaults = (0, import_dataverse6.val)(this.template.getDefaultValues());
      const initial = (0, import_dataverse6.val)(this._initialValue.pointer);
      const withInitialCache = import_dataverse6.prism.memo("withInitialCache", () => new WeakMap(), []);
      const withInitial = deepMergeWithCache(defaults, initial, withInitialCache);
      const statics = (0, import_dataverse6.val)(this.template.getStaticValues());
      const withStaticsCache = import_dataverse6.prism.memo("withStatics", () => new WeakMap(), []);
      const withStatics = deepMergeWithCache(withInitial, statics, withStaticsCache);
      let final = withStatics;
      let sequenced;
      {
        const pointerToSequencedValuesD = import_dataverse6.prism.memo("seq", () => this.getSequencedValues(), []);
        const withSeqsCache = import_dataverse6.prism.memo("withSeqsCache", () => new WeakMap(), []);
        sequenced = (0, import_dataverse6.val)((0, import_dataverse6.val)(pointerToSequencedValuesD));
        const withSeqs = deepMergeWithCache(final, sequenced, withSeqsCache);
        final = withSeqs;
      }
      const a2 = valToAtom("finalAtom", final);
      return a2.pointer;
    }));
  }
  getValueByPointer(pointer2) {
    const allValuesP = (0, import_dataverse6.val)(this.getValues());
    const { path } = (0, import_dataverse6.getPointerParts)(pointer2);
    return (0, import_dataverse6.val)(pointerDeep(allValuesP, path));
  }
  getIdentityDerivation(path) {
    return (0, import_dataverse6.prism)(() => {
      const allValuesP = (0, import_dataverse6.val)(this.getValues());
      return (0, import_dataverse6.val)(pointerDeep(allValuesP, path));
    });
  }
  getSequencedValues() {
    return (0, import_dataverse6.prism)(() => {
      const tracksToProcessD = import_dataverse6.prism.memo("tracksToProcess", () => this.template.getArrayOfValidSequenceTracks(), []);
      const tracksToProcess = (0, import_dataverse6.val)(tracksToProcessD);
      const valsAtom = new import_dataverse6.Atom({});
      import_dataverse6.prism.effect("processTracks", () => {
        const untaps = [];
        for (const { trackId, pathToProp } of tracksToProcess) {
          const derivation = this._trackIdToDerivation(trackId);
          const updateSequenceValueFromItsDerivation = () => {
            valsAtom.setIn(pathToProp, derivation.getValue());
          };
          const untap = derivation.changesWithoutValues().tap(updateSequenceValueFromItsDerivation);
          updateSequenceValueFromItsDerivation();
          untaps.push(untap);
        }
        return () => {
          for (const untap of untaps) {
            untap();
          }
        };
      }, tracksToProcess);
      return valsAtom.pointer;
    });
  }
  _trackIdToDerivation(trackId) {
    const trackP = this.template.project.pointers.historic.sheetsById[this.address.sheetId].sequence.tracksByObject[this.address.objectKey].trackData[trackId];
    const timeD = this.sheet.getSequence().positionDerivation;
    return trackValueAtTime(trackP, timeD);
  }
  get propsP() {
    return this._cache.get("propsP", () => (0, import_dataverse6.pointer)({ root: this, path: [] }));
  }
  validateValue(pointer2, value) {}
  setInitialValue(val6) {
    this.validateValue(this.propsP, val6);
    this._initialValue.setState(val6);
  }
};

// core/src/sheetObjects/SheetObjectTemplate.ts
var SheetObjectTemplate = class {
  constructor(sheetTemplate, objectKey, nativeObject, config) {
    this.sheetTemplate = sheetTemplate;
    __publicField(this, "address");
    __publicField(this, "type", "Theatre_SheetObjectTemplate");
    __publicField(this, "_config");
    __publicField(this, "_cache", new SimpleCache());
    __publicField(this, "project");
    this.address = __spreadProps(__spreadValues({}, sheetTemplate.address), { objectKey });
    this._config = new import_dataverse7.Atom(config);
    this.project = sheetTemplate.project;
  }
  get config() {
    return this._config.getState();
  }
  createInstance(sheet, nativeObject, config) {
    this._config.setState(config);
    return new SheetObject(sheet, this, nativeObject);
  }
  overrideConfig(nativeObject, config) {
    this._config.setState(config);
  }
  getDefaultValues() {
    return this._cache.get("getDefaultValues()", () => (0, import_dataverse7.prism)(() => {
      const config = (0, import_dataverse7.val)(this._config.pointer);
      return getPropDefaultsOfSheetObject(config);
    }));
  }
  getStaticValues() {
    return this._cache.get("getDerivationOfStatics", () => (0, import_dataverse7.prism)(() => {
      const pointerToSheetState = this.sheetTemplate.project.pointers.historic.sheetsById[this.address.sheetId];
      return (0, import_dataverse7.val)(pointerToSheetState.staticOverrides.byObject[this.address.objectKey]) || {};
    }));
  }
  getArrayOfValidSequenceTracks() {
    return this._cache.get("getArrayOfValidSequenceTracks", () => (0, import_dataverse7.prism)(() => {
      const defaults = (0, import_dataverse7.val)(this.getDefaultValues());
      const pointerToSheetState = this.project.pointers.historic.sheetsById[this.address.sheetId];
      const trackIdByPropPath = (0, import_dataverse7.val)(pointerToSheetState.sequence.tracksByObject[this.address.objectKey].trackIdByPropPath);
      const arrayOfIds = [];
      if (trackIdByPropPath) {
        for (const [pathToPropInString, trackId] of Object.entries(trackIdByPropPath)) {
          let pathToProp;
          try {
            pathToProp = JSON.parse(pathToPropInString);
          } catch (e2) {
            logger_default.warn(`property ${JSON.stringify(pathToPropInString)} cannot be parsed. Skipping.`);
            continue;
          }
          const defaultValue = get_default(defaults, pathToProp);
          if (typeof defaultValue === "undefined" || typeof defaultValue === "object") {
            continue;
          }
          arrayOfIds.push({ pathToProp, trackId });
        }
      } else {
        return emptyArray;
      }
      if (arrayOfIds.length === 0) {
        return emptyArray;
      } else {
        return arrayOfIds;
      }
    }));
  }
  getMapOfValidSequenceTracks_forStudio() {
    if ("development" !== "production") {
      return this._cache.get("getMapOfValidSequenceTracks_forStudio", () => this.getArrayOfValidSequenceTracks().map(arr => {
        let map = {};
        for (const { pathToProp, trackId } of arr) {
          set_default(map, pathToProp, trackId);
        }
        return map;
      }));
    } else {
      return new import_dataverse7.ConstantDerivation({});
    }
  }
  getDefaultsAtPointer(pointer2) {
    const { path } = (0, import_dataverse7.getPointerParts)(pointer2);
    const defaults = this.getDefaultValues().getValue();
    const defaultsAtPath = getDeep(defaults, path);
    return defaultsAtPath;
  }
};

// core/src/sheets/SheetTemplate.ts
var import_dataverse12 = __toModule(require("@theatre/dataverse"));

// shared/src/utils/didYouMean.ts
var import_propose = __toModule(require_propose());
function didYouMean(str, dictionary, prepend = "Did you mean ", append = "?") {
  const p2 = (0, import_propose.default)(str, dictionary, {
    threshold: 0.7
  });
  if (p2) {
    return prepend + JSON.stringify(p2) + append;
  } else {
    return "";
  }
}

// shared/src/utils/errors.ts
var TheatreError = class extends Error {};
var InvalidArgumentError = class extends TheatreError {};

// core/src/sequences/Sequence.ts
var import_dataverse10 = __toModule(require("@theatre/dataverse"));

// ../node_modules/lodash-es/_trimmedEndIndex.js
var reWhitespace = /\s/;
function trimmedEndIndex(string2) {
  var index = string2.length;
  while (index-- && reWhitespace.test(string2.charAt(index))) {}
  return index;
}
var trimmedEndIndex_default = trimmedEndIndex;

// ../node_modules/lodash-es/_baseTrim.js
var reTrimStart = /^\s+/;
function baseTrim(string2) {
  return string2 ? string2.slice(0, trimmedEndIndex_default(string2) + 1).replace(reTrimStart, "") : string2;
}
var baseTrim_default = baseTrim;

// ../node_modules/lodash-es/toNumber.js
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol_default(value)) {
    return NAN;
  }
  if (isObject_default(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject_default(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim_default(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_default = toNumber;

// ../node_modules/lodash-es/toFinite.js
var INFINITY3 = 1 / 0;
var MAX_INTEGER = 17976931348623157e292;
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber_default(value);
  if (value === INFINITY3 || value === -INFINITY3) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
var toFinite_default = toFinite;

// ../node_modules/lodash-es/toInteger.js
function toInteger(value) {
  var result = toFinite_default(value),
      remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
var toInteger_default = toInteger;

// ../node_modules/lodash-es/_overArg.js
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
var overArg_default = overArg;

// ../node_modules/lodash-es/_getPrototype.js
var getPrototype = overArg_default(Object.getPrototypeOf, Object);
var getPrototype_default = getPrototype;

// ../node_modules/lodash-es/isPlainObject.js
var objectTag = "[object Object]";
var funcProto3 = Function.prototype;
var objectProto7 = Object.prototype;
var funcToString3 = funcProto3.toString;
var hasOwnProperty6 = objectProto7.hasOwnProperty;
var objectCtorString = funcToString3.call(Object);
function isPlainObject(value) {
  if (!isObjectLike_default(value) || baseGetTag_default(value) != objectTag) {
    return false;
  }
  var proto = getPrototype_default(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty6.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString3.call(Ctor) == objectCtorString;
}
var isPlainObject_default = isPlainObject;

// ../node_modules/lodash-es/_baseSlice.js
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}
var baseSlice_default = baseSlice;

// ../node_modules/lodash-es/_castSlice.js
function castSlice(array, start, end) {
  var length = array.length;
  end = end === void 0 ? length : end;
  return !start && end >= length ? array : baseSlice_default(array, start, end);
}
var castSlice_default = castSlice;

// ../node_modules/lodash-es/_hasUnicode.js
var rsAstralRange = "\\ud800-\\udfff";
var rsComboMarksRange = "\\u0300-\\u036f";
var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange = "\\u20d0-\\u20ff";
var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
var rsVarRange = "\\ufe0e\\ufe0f";
var rsZWJ = "\\u200d";
var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
function hasUnicode(string2) {
  return reHasUnicode.test(string2);
}
var hasUnicode_default = hasUnicode;

// ../node_modules/lodash-es/_asciiToArray.js
function asciiToArray(string2) {
  return string2.split("");
}
var asciiToArray_default = asciiToArray;

// ../node_modules/lodash-es/_unicodeToArray.js
var rsAstralRange2 = "\\ud800-\\udfff";
var rsComboMarksRange2 = "\\u0300-\\u036f";
var reComboHalfMarksRange2 = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange2 = "\\u20d0-\\u20ff";
var rsComboRange2 = rsComboMarksRange2 + reComboHalfMarksRange2 + rsComboSymbolsRange2;
var rsVarRange2 = "\\ufe0e\\ufe0f";
var rsAstral = "[" + rsAstralRange2 + "]";
var rsCombo = "[" + rsComboRange2 + "]";
var rsFitz = "\\ud83c[\\udffb-\\udfff]";
var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
var rsNonAstral = "[^" + rsAstralRange2 + "]";
var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var rsZWJ2 = "\\u200d";
var reOptMod = rsModifier + "?";
var rsOptVar = "[" + rsVarRange2 + "]?";
var rsOptJoin = "(?:" + rsZWJ2 + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
function unicodeToArray(string2) {
  return string2.match(reUnicode) || [];
}
var unicodeToArray_default = unicodeToArray;

// ../node_modules/lodash-es/_stringToArray.js
function stringToArray(string2) {
  return hasUnicode_default(string2) ? unicodeToArray_default(string2) : asciiToArray_default(string2);
}
var stringToArray_default = stringToArray;

// ../node_modules/lodash-es/_baseProperty.js
function baseProperty(key) {
  return function (object) {
    return object == null ? void 0 : object[key];
  };
}
var baseProperty_default = baseProperty;

// ../node_modules/lodash-es/_baseRepeat.js
var MAX_SAFE_INTEGER2 = 9007199254740991;
var nativeFloor = Math.floor;
function baseRepeat(string2, n2) {
  var result = "";
  if (!string2 || n2 < 1 || n2 > MAX_SAFE_INTEGER2) {
    return result;
  }
  do {
    if (n2 % 2) {
      result += string2;
    }
    n2 = nativeFloor(n2 / 2);
    if (n2) {
      string2 += string2;
    }
  } while (n2);
  return result;
}
var baseRepeat_default = baseRepeat;

// ../node_modules/lodash-es/_asciiSize.js
var asciiSize = baseProperty_default("length");
var asciiSize_default = asciiSize;

// ../node_modules/lodash-es/_unicodeSize.js
var rsAstralRange3 = "\\ud800-\\udfff";
var rsComboMarksRange3 = "\\u0300-\\u036f";
var reComboHalfMarksRange3 = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange3 = "\\u20d0-\\u20ff";
var rsComboRange3 = rsComboMarksRange3 + reComboHalfMarksRange3 + rsComboSymbolsRange3;
var rsVarRange3 = "\\ufe0e\\ufe0f";
var rsAstral2 = "[" + rsAstralRange3 + "]";
var rsCombo2 = "[" + rsComboRange3 + "]";
var rsFitz2 = "\\ud83c[\\udffb-\\udfff]";
var rsModifier2 = "(?:" + rsCombo2 + "|" + rsFitz2 + ")";
var rsNonAstral2 = "[^" + rsAstralRange3 + "]";
var rsRegional2 = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var rsSurrPair2 = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var rsZWJ3 = "\\u200d";
var reOptMod2 = rsModifier2 + "?";
var rsOptVar2 = "[" + rsVarRange3 + "]?";
var rsOptJoin2 = "(?:" + rsZWJ3 + "(?:" + [rsNonAstral2, rsRegional2, rsSurrPair2].join("|") + ")" + rsOptVar2 + reOptMod2 + ")*";
var rsSeq2 = rsOptVar2 + reOptMod2 + rsOptJoin2;
var rsSymbol2 = "(?:" + [rsNonAstral2 + rsCombo2 + "?", rsCombo2, rsRegional2, rsSurrPair2, rsAstral2].join("|") + ")";
var reUnicode2 = RegExp(rsFitz2 + "(?=" + rsFitz2 + ")|" + rsSymbol2 + rsSeq2, "g");
function unicodeSize(string2) {
  var result = reUnicode2.lastIndex = 0;
  while (reUnicode2.test(string2)) {
    ++result;
  }
  return result;
}
var unicodeSize_default = unicodeSize;

// ../node_modules/lodash-es/_stringSize.js
function stringSize(string2) {
  return hasUnicode_default(string2) ? unicodeSize_default(string2) : asciiSize_default(string2);
}
var stringSize_default = stringSize;

// ../node_modules/lodash-es/_createPadding.js
var nativeCeil = Math.ceil;
function createPadding(length, chars) {
  chars = chars === void 0 ? " " : baseToString_default(chars);
  var charsLength = chars.length;
  if (charsLength < 2) {
    return charsLength ? baseRepeat_default(chars, length) : chars;
  }
  var result = baseRepeat_default(chars, nativeCeil(length / stringSize_default(chars)));
  return hasUnicode_default(chars) ? castSlice_default(stringToArray_default(result), 0, length).join("") : result.slice(0, length);
}
var createPadding_default = createPadding;

// ../node_modules/lodash-es/padStart.js
function padStart(string2, length, chars) {
  string2 = toString_default(string2);
  length = toInteger_default(length);
  var strLength = length ? stringSize_default(string2) : 0;
  return length && strLength < length ? createPadding_default(length - strLength, chars) + string2 : string2;
}
var padStart_default = padStart;

// shared/src/utils/defer.ts
function defer() {
  let resolve;
  let reject;
  const promise = new Promise((rs, rj) => {
    resolve = v2 => {
      rs(v2);
      deferred.status = "resolved";
    };
    reject = v2 => {
      rj(v2);
      deferred.status = "rejected";
    };
  });
  const deferred = {
    resolve,
    reject,
    promise,
    status: "pending"
  };
  return deferred;
}

// shared/src/utils/noop.ts
var noop = () => {};
var noop_default = noop;

// core/src/sequences/playbackControllers/DefaultPlaybackController.ts
var import_dataverse8 = __toModule(require("@theatre/dataverse"));
var DefaultPlaybackController = class {
  constructor(_ticker) {
    this._ticker = _ticker;
    __publicField(this, "playing", false);
    __publicField(this, "_stopPlayCallback", noop_default);
    __publicField(this, "_state", new import_dataverse8.Atom({ position: 0 }));
    __publicField(this, "statePointer");
    this.statePointer = this._state.pointer;
  }
  destroy() {}
  pause() {
    this._stopPlayCallback();
    this.playing = false;
    this._stopPlayCallback = noop_default;
  }
  gotoPosition(time) {
    this._updatePositionInState(time);
  }
  _updatePositionInState(time) {
    this._state.reduceState(["position"], () => time);
  }
  getCurrentPosition() {
    return this._state.getState().position;
  }
  play(iterationCount, range, rate, direction) {
    if (this.playing) {
      this.pause();
    }
    this.playing = true;
    const ticker = this._ticker;
    const iterationLength = range[1] - range[0];
    {
      const startPos = this.getCurrentPosition();
      if (startPos < range[0] || startPos > range[1]) {
        if (direction === "normal" || direction === "alternate") {
          this._updatePositionInState(range[0]);
        } else if (direction === "reverse" || direction === "alternateReverse") {
          this._updatePositionInState(range[1]);
        }
      } else if (direction === "normal" || direction === "alternate") {
        if (startPos === range[1]) {
          this._updatePositionInState(range[0]);
        }
      } else {
        if (startPos === range[0]) {
          this._updatePositionInState(range[1]);
        }
      }
    }
    const deferred = defer();
    const initialTickerTime = ticker.time;
    const totalPlaybackLength = iterationLength * iterationCount;
    let initialElapsedPos = this.getCurrentPosition() - range[0];
    if (direction === "reverse" || direction === "alternateReverse") {
      initialElapsedPos = range[1] - this.getCurrentPosition();
    }
    const tick = currentTickerTime => {
      const elapsedTickerTime = Math.max(currentTickerTime - initialTickerTime, 0);
      const elapsedTickerTimeInSeconds = elapsedTickerTime / 1e3;
      const elapsedPos = Math.min(elapsedTickerTimeInSeconds * rate + initialElapsedPos, totalPlaybackLength);
      if (elapsedPos !== totalPlaybackLength) {
        const iterationNumber = Math.floor(elapsedPos / iterationLength);
        let currentIterationPos = elapsedPos / iterationLength % 1 * iterationLength;
        if (direction !== "normal") {
          if (direction === "reverse") {
            currentIterationPos = iterationLength - currentIterationPos;
          } else {
            const isCurrentIterationNumberEven = iterationNumber % 2 === 0;
            if (direction === "alternate") {
              if (!isCurrentIterationNumberEven) {
                currentIterationPos = iterationLength - currentIterationPos;
              }
            } else {
              if (isCurrentIterationNumberEven) {
                currentIterationPos = iterationLength - currentIterationPos;
              }
            }
          }
        }
        this._updatePositionInState(currentIterationPos + range[0]);
        requestNextTick();
      } else {
        if (direction === "normal") {
          this._updatePositionInState(range[1]);
        } else if (direction === "reverse") {
          this._updatePositionInState(range[0]);
        } else {
          const isLastIterationEven = (iterationCount - 1) % 2 === 0;
          if (direction === "alternate") {
            if (isLastIterationEven) {
              this._updatePositionInState(range[1]);
            } else {
              this._updatePositionInState(range[0]);
            }
          } else {
            if (isLastIterationEven) {
              this._updatePositionInState(range[0]);
            } else {
              this._updatePositionInState(range[1]);
            }
          }
        }
        this.playing = false;
        deferred.resolve(true);
      }
    };
    this._stopPlayCallback = () => {
      ticker.offThisOrNextTick(tick);
      ticker.offNextTick(tick);
      if (this.playing) deferred.resolve(false);
    };
    const requestNextTick = () => ticker.onNextTick(tick);
    ticker.onThisOrNextTick(tick);
    return deferred.promise;
  }
};

// core/src/sequences/playbackControllers/AudioPlaybackController.ts
var import_dataverse9 = __toModule(require("@theatre/dataverse"));
var AudioPlaybackController = class {
  constructor(_ticker, _decodedBuffer, _audioContext, _nodeDestination) {
    this._ticker = _ticker;
    this._decodedBuffer = _decodedBuffer;
    this._audioContext = _audioContext;
    this._nodeDestination = _nodeDestination;
    __publicField(this, "_mainGain");
    __publicField(this, "_state", new import_dataverse9.Atom({ position: 0 }));
    __publicField(this, "statePointer");
    __publicField(this, "_stopPlayCallback", noop_default);
    __publicField(this, "playing", false);
    this.statePointer = this._state.pointer;
    this._mainGain = this._audioContext.createGain();
    this._mainGain.connect(this._nodeDestination);
  }
  destroy() {}
  pause() {
    this._stopPlayCallback();
    this.playing = false;
    this._stopPlayCallback = noop_default;
  }
  gotoPosition(time) {
    this._updatePositionInState(time);
  }
  _updatePositionInState(time) {
    this._state.reduceState(["position"], () => time);
  }
  getCurrentPosition() {
    return this._state.getState().position;
  }
  play(iterationCount, range, rate, direction) {
    if (this.playing) {
      this.pause();
    }
    this.playing = true;
    const ticker = this._ticker;
    let startPos = this.getCurrentPosition();
    const iterationLength = range[1] - range[0];
    if (direction !== "normal") {
      throw new InvalidArgumentError(`Audio-controlled sequences can only be played in the "normal" direction. '${direction}' given.`);
    }
    if (startPos < range[0] || startPos > range[1]) {
      this._updatePositionInState(range[0]);
    } else if (startPos === range[1]) {
      this._updatePositionInState(range[0]);
    }
    startPos = this.getCurrentPosition();
    const deferred = defer();
    const currentSource = this._audioContext.createBufferSource();
    currentSource.buffer = this._decodedBuffer;
    currentSource.connect(this._mainGain);
    currentSource.playbackRate.value = rate;
    if (iterationCount > 1e3) {
      console.warn(`Audio-controlled sequences cannot have an iterationCount larger than 1000. It has been clamped to 1000.`);
      iterationCount = 1e3;
    }
    if (iterationCount > 1) {
      currentSource.loop = true;
      currentSource.loopStart = range[0];
      currentSource.loopEnd = range[1];
    }
    const initialTickerTime = ticker.time;
    let initialElapsedPos = startPos - range[0];
    const totalPlaybackLength = iterationLength * iterationCount;
    currentSource.start(0, startPos, totalPlaybackLength - initialElapsedPos);
    const tick = currentTickerTime => {
      const elapsedTickerTime = Math.max(currentTickerTime - initialTickerTime, 0);
      const elapsedTickerTimeInSeconds = elapsedTickerTime / 1e3;
      const elapsedPos = Math.min(elapsedTickerTimeInSeconds * rate + initialElapsedPos, totalPlaybackLength);
      if (elapsedPos !== totalPlaybackLength) {
        let currentIterationPos = elapsedPos / iterationLength % 1 * iterationLength;
        this._updatePositionInState(currentIterationPos + range[0]);
        requestNextTick();
      } else {
        this._updatePositionInState(range[1]);
        this.playing = false;
        cleanup();
        deferred.resolve(true);
      }
    };
    const cleanup = () => {
      currentSource.stop();
      currentSource.disconnect();
    };
    this._stopPlayCallback = () => {
      cleanup();
      ticker.offThisOrNextTick(tick);
      ticker.offNextTick(tick);
      if (this.playing) deferred.resolve(false);
    };
    const requestNextTick = () => ticker.onNextTick(tick);
    ticker.onThisOrNextTick(tick);
    return deferred.promise;
  }
};

// core/src/sequences/TheatreSequence.ts
var TheatreSequence = class {
  get type() {
    return "Theatre_Sequence_PublicAPI";
  }
  constructor(sheet) {
    setPrivateAPI(this, sheet);
  }
  play(conf) {
    if (privateAPI(this)._project.isReady()) {
      return privateAPI(this).play(conf);
    } else {
      if ("development" !== "production") {
        logger_default.warn(`You seem to have called sequence.play() before the project has finished loading.
This would **not** a problem in production when using '@theatre/core', since Theatre loads instantly in core mode. However, when using '@theatre/studio', it takes a few milliseconds for it to load your project's state, before which your sequences cannot start playing.

To fix this, simply defer calling sequence.play() until after the project is loaded, like this:
project.ready.then(() => {
  sequence.play()
})`);
      }
      const d2 = defer();
      d2.resolve(true);
      return d2.promise;
    }
  }
  pause() {
    privateAPI(this).pause();
  }
  get position() {
    return privateAPI(this).position;
  }
  set position(position) {
    privateAPI(this).position = position;
  }
  async attachAudio(args) {
    const { audioContext, destinationNode, decodedBuffer } = await resolveAudioBuffer(args);
    const playbackController = new AudioPlaybackController(coreTicker_default, decodedBuffer, audioContext, destinationNode);
    privateAPI(this).replacePlaybackController(playbackController);
  }
};
async function resolveAudioBuffer(args) {
  const audioContext = args.audioContext || new AudioContext();
  const decodedBufferDeferred = defer();
  if (args.source instanceof AudioBuffer) {
    decodedBufferDeferred.resolve(args.source);
  } else if (typeof args.source !== "string") {
    throw new Error(`Error validating arguments to sequence.attachAudio(). args.source must either be a string or an instance of AudioBuffer.`);
  } else {
    let fetchResponse;
    try {
      fetchResponse = await fetch(args.source);
    } catch (e2) {
      console.error(e2);
      throw new Error(`Could not fetch '${args.source}'. Network error logged above.`);
    }
    let buffer;
    try {
      buffer = await fetchResponse.arrayBuffer();
    } catch (e2) {
      console.error(e2);
      throw new Error(`Could not read '${args.source}' as an arrayBuffer.`);
    }
    audioContext.decodeAudioData(buffer, decodedBufferDeferred.resolve, decodedBufferDeferred.reject);
  }
  let decodedBuffer;
  try {
    decodedBuffer = await decodedBufferDeferred.promise;
  } catch (e2) {
    console.error(e2);
    throw new Error(`Could not decode ${args.source} as an audio file.`);
  }
  const destinationNode = args.destinationNode || audioContext.destination;
  return {
    destinationNode,
    audioContext,
    decodedBuffer
  };
}

// core/src/sequences/Sequence.ts
var possibleDirections = ["normal", "reverse", "alternate", "alternateReverse"];
var Sequence = class {
  constructor(_project, _sheet, _lengthD, _subUnitsPerUnitD, playbackController) {
    this._project = _project;
    this._sheet = _sheet;
    this._lengthD = _lengthD;
    this._subUnitsPerUnitD = _subUnitsPerUnitD;
    __publicField(this, "address");
    __publicField(this, "publicApi");
    __publicField(this, "_playbackControllerBox");
    __publicField(this, "_statePointerDerivation");
    __publicField(this, "_positionD");
    __publicField(this, "_positionFormatterD");
    __publicField(this, "_playableRangeD");
    __publicField(this, "closestGridPosition", posInUnitSpace => {
      const subUnitsPerUnit = this.subUnitsPerUnit;
      const gridLength = 1 / subUnitsPerUnit;
      return parseFloat((Math.round(posInUnitSpace / gridLength) * gridLength).toFixed(3));
    });
    this.address = __spreadProps(__spreadValues({}, this._sheet.address), { sequenceName: "default" });
    this.publicApi = new TheatreSequence(this);
    this._playbackControllerBox = new import_dataverse10.Box(playbackController != null ? playbackController : new DefaultPlaybackController(coreTicker_default));
    this._statePointerDerivation = this._playbackControllerBox.derivation.map(playbackController2 => playbackController2.statePointer);
    this._positionD = this._statePointerDerivation.flatMap(statePointer => (0, import_dataverse10.valueDerivation)(statePointer.position));
    this._positionFormatterD = this._subUnitsPerUnitD.map(subUnitsPerUnit => new TimeBasedPositionFormatter(subUnitsPerUnit));
  }
  get positionFormatter() {
    return this._positionFormatterD.getValue();
  }
  get derivationToStatePointer() {
    return this._statePointerDerivation;
  }
  get length() {
    return this._lengthD.getValue();
  }
  get positionDerivation() {
    return this._positionD;
  }
  get position() {
    return this._playbackControllerBox.get().getCurrentPosition();
  }
  get subUnitsPerUnit() {
    return this._subUnitsPerUnitD.getValue();
  }
  get positionSnappedToGrid() {
    return this.closestGridPosition(this.position);
  }
  set position(requestedPosition) {
    let position = requestedPosition;
    this.pause();
    if ("development" !== "production") {
      if (typeof position !== "number") {
        logger_default.error(`value t in sequence.position = t must be a number. ${typeof position} given`);
        position = 0;
      }
      if (position < 0) {
        logger_default.error(`sequence.position must be a positive number. ${position} given`);
        position = 0;
      }
    }
    if (position > this.length) {
      position = this.length;
    }
    const dur = this.length;
    this._playbackControllerBox.get().gotoPosition(position > dur ? dur : position);
  }
  getDurationCold() {
    return this._lengthD.getValue();
  }
  get playing() {
    return this._playbackControllerBox.get().playing;
  }
  _makeRangeFromSequenceTemplate() {
    return (0, import_dataverse10.prism)(() => {
      return [0, (0, import_dataverse10.val)(this._lengthD)];
    });
  }
  async play(conf) {
    const sequenceDuration = this.length;
    const range = conf && conf.range ? conf.range : [0, sequenceDuration];
    if ("development" !== "production") {
      if (typeof range[0] !== "number" || range[0] < 0) {
        throw new InvalidArgumentError(`Argument conf.range[0] in sequence.play(conf) must be a positive number. ${JSON.stringify(range[0])} given.`);
      }
      if (range[0] >= sequenceDuration) {
        throw new InvalidArgumentError(`Argument conf.range[0] in sequence.play(conf) cannot be longer than the duration of the sequence, which is ${sequenceDuration}s. ${JSON.stringify(range[0])} given.`);
      }
      if (typeof range[1] !== "number" || range[1] <= 0) {
        throw new InvalidArgumentError(`Argument conf.range[1] in sequence.play(conf) must be a number larger than zero. ${JSON.stringify(range[1])} given.`);
      }
      if (range[1] > sequenceDuration) {
        logger_default.warn(`Argument conf.range[1] in sequence.play(conf) cannot be longer than the duration of the sequence, which is ${sequenceDuration}s. ${JSON.stringify(range[1])} given.`);
        range[1] = sequenceDuration;
      }
      if (range[1] <= range[0]) {
        throw new InvalidArgumentError(`Argument conf.range[1] in sequence.play(conf) must be larger than conf.range[0]. ${JSON.stringify(range)} given.`);
      }
    }
    const iterationCount = conf && typeof conf.iterationCount === "number" ? conf.iterationCount : 1;
    if ("development" !== "production") {
      if (!(Number.isInteger(iterationCount) && iterationCount > 0) && iterationCount !== Infinity) {
        throw new InvalidArgumentError(`Argument conf.iterationCount in sequence.play(conf) must be an integer larger than 0. ${JSON.stringify(iterationCount)} given.`);
      }
    }
    const rate = conf && typeof conf.rate !== "undefined" ? conf.rate : 1;
    if ("development" !== "production") {
      if (typeof rate !== "number" || rate === 0) {
        throw new InvalidArgumentError(`Argument conf.rate in sequence.play(conf) must be a number larger than 0. ${JSON.stringify(rate)} given.`);
      }
      if (rate < 0) {
        throw new InvalidArgumentError(`Argument conf.rate in sequence.play(conf) must be a number larger than 0. ${JSON.stringify(rate)} given. If you want the animation to play backwards, try setting conf.direction to 'reverse' or 'alternateReverse'.`);
      }
    }
    const direction = conf && conf.direction ? conf.direction : "normal";
    if ("development" !== "production") {
      if (possibleDirections.indexOf(direction) === -1) {
        throw new InvalidArgumentError(`Argument conf.direction in sequence.play(conf) must be one of ${JSON.stringify(possibleDirections)}. ${JSON.stringify(direction)} given. ${didYouMean(direction, possibleDirections)}`);
      }
    }
    return await this._play(iterationCount, [range[0], range[1]], rate, direction);
  }
  _play(iterationCount, range, rate, direction) {
    return this._playbackControllerBox.get().play(iterationCount, range, rate, direction);
  }
  pause() {
    this._playbackControllerBox.get().pause();
  }
  replacePlaybackController(playbackController) {
    this.pause();
    const oldController = this._playbackControllerBox.get();
    this._playbackControllerBox.set(playbackController);
    const time = oldController.getCurrentPosition();
    oldController.destroy();
    playbackController.gotoPosition(time);
  }
};
var TimeBasedPositionFormatter = class {
  constructor(_fps) {
    this._fps = _fps;
  }
  formatSubUnitForGrid(posInUnitSpace) {
    const subSecondPos = posInUnitSpace % 1;
    const frame = 1 / this._fps;
    const frames = Math.round(subSecondPos / frame);
    return frames + "f";
  }
  formatFullUnitForGrid(posInUnitSpace) {
    let p2 = posInUnitSpace;
    let s2 = "";
    if (p2 >= hour) {
      const hours = Math.floor(p2 / hour);
      s2 += hours + "h";
      p2 = p2 % hour;
    }
    if (p2 >= minute) {
      const minutes = Math.floor(p2 / minute);
      s2 += minutes + "m";
      p2 = p2 % minute;
    }
    if (p2 >= second) {
      const seconds = Math.floor(p2 / second);
      s2 += seconds + "s";
      p2 = p2 % second;
    }
    const frame = 1 / this._fps;
    if (p2 >= frame) {
      const frames = Math.floor(p2 / frame);
      s2 += frames + "f";
      p2 = p2 % frame;
    }
    return s2.length === 0 ? "0s" : s2;
  }
  formatForPlayhead(posInUnitSpace) {
    let p2 = posInUnitSpace;
    let s2 = "";
    if (p2 >= hour) {
      const hours = Math.floor(p2 / hour);
      s2 += padStart_default(hours.toString(), 2, "0") + "h";
      p2 = p2 % hour;
    }
    if (p2 >= minute) {
      const minutes = Math.floor(p2 / minute);
      s2 += padStart_default(minutes.toString(), 2, "0") + "m";
      p2 = p2 % minute;
    } else if (s2.length > 0) {
      s2 += "00m";
    }
    if (p2 >= second) {
      const seconds = Math.floor(p2 / second);
      s2 += padStart_default(seconds.toString(), 2, "0") + "s";
      p2 = p2 % second;
    } else {
      s2 += "00s";
    }
    const frameLength = 1 / this._fps;
    if (p2 >= frameLength) {
      const frames = Math.round(p2 / frameLength);
      s2 += padStart_default(frames.toString(), 2, "0") + "f";
      p2 = p2 % frameLength;
    } else if (p2 / frameLength > 0.98) {
      const frames = 1;
      s2 += padStart_default(frames.toString(), 2, "0") + "f";
      p2 = p2 % frameLength;
    } else {
      s2 += "00f";
    }
    return s2.length === 0 ? "00s00f" : s2;
  }
  formatBasic(posInUnitSpace) {
    return posInUnitSpace.toFixed(2) + "s";
  }
};
var second = 1;
var minute = second * 60;
var hour = minute * 60;

// core/src/propTypes/index.ts
var propTypes_exports = {};
__export(propTypes_exports, {
  boolean: () => boolean,
  compound: () => compound,
  number: () => number,
  string: () => string,
  stringLiteral: () => stringLiteral
});

// shared/src/utils/ellipsify.ts
function ellipsify(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.substr(0, maxLength - 3) + "...";
}

// shared/src/utils/userReadableTypeOfValue.ts
var userReadableTypeOfValue = v2 => {
  if (typeof v2 === "string") {
    return `string("${ellipsify(v2, 10)}")`;
  } else if (typeof v2 === "number") {
    return `number(${ellipsify(String(v2), 10)})`;
  } else if (v2 === null) {
    return "null";
  } else if (v2 === void 0) {
    return "undefined";
  } else if (typeof v2 === "boolean") {
    return String(v2);
  } else if (Array.isArray(v2)) {
    return "array";
  } else if (typeof v2 === "object") {
    return "object";
  } else {
    return "unknown";
  }
};
var userReadableTypeOfValue_default = userReadableTypeOfValue;

// core/src/propTypes/internals.ts
var propTypeSymbol = Symbol("TheatrePropType_Basic");
function isLonghandPropType(t3) {
  return typeof t3 === "object" && !!t3 && t3[propTypeSymbol] === "TheatrePropType";
}
function toLonghandProp(p2) {
  if (typeof p2 === "number") {
    return number(p2);
  } else if (typeof p2 === "boolean") {
    return boolean(p2);
  } else if (typeof p2 === "string") {
    return string(p2);
  } else if (typeof p2 === "object" && !!p2) {
    if (isLonghandPropType(p2)) return p2;
    if (isPlainObject_default(p2)) {
      return compound(p2);
    } else {
      throw new InvalidArgumentError(`This value is not a valid prop type: ${userReadableTypeOfValue_default(p2)}`);
    }
  } else {
    throw new InvalidArgumentError(`This value is not a valid prop type: ${userReadableTypeOfValue_default(p2)}`);
  }
}
function sanitizeCompoundProps(props) {
  const sanitizedProps = {};
  if ("development" !== "production") {
    if (typeof props !== "object" || !props) {
      throw new InvalidArgumentError(`t.compound() expects an object, like: {x: 10}. ${userReadableTypeOfValue_default(props)} given.`);
    }
  }
  for (const key of Object.keys(props)) {
    if ("development" !== "production") {
      if (typeof key !== "string") {
        throw new InvalidArgumentError(`t.compound()'s keys must be all strings. ${userReadableTypeOfValue_default(key)} given.`);
      } else if (key.length === 0 || !key.match(/^\w+$/)) {
        throw new InvalidArgumentError(`compound key ${userReadableTypeOfValue_default(key)} is invalid. The keys must be alphanumeric and start with a letter.`);
      } else if (key.length > 64) {
        throw new InvalidArgumentError(`compound key ${userReadableTypeOfValue_default(key)} is too long.`);
      }
    }
    const val6 = props[key];
    if (isLonghandPropType(val6)) {
      sanitizedProps[key] = val6;
    } else {
      sanitizedProps[key] = toLonghandProp(val6);
    }
  }
  return sanitizedProps;
}

// core/src/propTypes/index.ts
var validateCommonOpts = (fnCallSignature, opts) => {
  if ("development" !== "production") {
    if (opts === void 0) return;
    if (typeof opts !== "object" || opts === null) {
      throw new Error(`opts in ${fnCallSignature} must either be undefined or an object.`);
    }
    if (Object.prototype.hasOwnProperty.call(opts, "label")) {
      const { label } = opts;
      if (typeof label !== "string") {
        throw new Error(`opts.label in ${fnCallSignature} should be a string. ${userReadableTypeOfValue_default(label)} given.`);
      }
      if (label.trim().length !== label.length) {
        throw new Error(`opts.label in ${fnCallSignature} should not start/end with whitespace. "${label}" given.`);
      }
      if (label.length === 0) {
        throw new Error(`opts.label in ${fnCallSignature} should not be an empty string. If you wish to have no label, remove opts.label from opts.`);
      }
    }
  }
};
var compound = (props, opts) => {
  validateCommonOpts("t.compound(props, opts)", opts);
  return {
    type: "compound",
    props: sanitizeCompoundProps(props),
    valueType: null,
    [propTypeSymbol]: "TheatrePropType",
    label: opts == null ? void 0 : opts.label
  };
};
var number = (defaultValue, opts) => {
  var _a;
  if ("development" !== "production") {
    validateCommonOpts("t.number(defaultValue, opts)", opts);
    if (typeof defaultValue !== "number" || !isFinite(defaultValue)) {
      throw new Error(`Argument defaultValue in t.number(defaultValue) must be a number. ${userReadableTypeOfValue_default(defaultValue)} given.`);
    }
    if (typeof opts === "object" && opts !== null) {
      if (Object.prototype.hasOwnProperty.call(opts, "range")) {
        if (!Array.isArray(opts.range)) {
          throw new Error(`opts.range in t.number(defaultValue, opts) must be a tuple of two numbers. ${userReadableTypeOfValue_default(opts.range)} given.`);
        }
        if (opts.range.length !== 2) {
          throw new Error(`opts.range in t.number(defaultValue, opts) must have two elements. ${opts.range.length} given.`);
        }
        if (!opts.range.every(n2 => typeof n2 === "number" && !isNaN(n2))) {
          throw new Error(`opts.range in t.number(defaultValue, opts) must be a tuple of two numbers.`);
        }
        if (opts.range[0] >= opts.range[1]) {
          throw new Error(`opts.range[0] in t.number(defaultValue, opts) must be smaller than opts.range[1]. Given: ${JSON.stringify(opts.range)}`);
        }
      }
      if (Object.prototype.hasOwnProperty.call(opts, "nudgeMultiplier")) {
        if (typeof opts.nudgeMultiplier !== "number" || !isFinite(opts.nudgeMultiplier)) {
          throw new Error(`opts.nudgeMultiplier in t.number(defaultValue, opts) must be a finite number. ${userReadableTypeOfValue_default(opts.nudgeMultiplier)} given.`);
        }
      }
      if (Object.prototype.hasOwnProperty.call(opts, "nudgeFn")) {
        if (typeof (opts == null ? void 0 : opts.nudgeFn) !== "function") {
          throw new Error(`opts.nudgeFn in t.number(defaultValue, opts) must be a function. ${userReadableTypeOfValue_default(opts.nudgeFn)} given.`);
        }
      }
    }
  }
  return __spreadProps(__spreadValues({
    type: "number",
    valueType: 0,
    default: defaultValue,
    [propTypeSymbol]: "TheatrePropType"
  }, opts ? opts : {}), {
    label: opts == null ? void 0 : opts.label,
    nudgeFn: (_a = opts == null ? void 0 : opts.nudgeFn) != null ? _a : defaultNumberNudgeFn,
    nudgeMultiplier: typeof (opts == null ? void 0 : opts.nudgeMultiplier) === "number" ? opts.nudgeMultiplier : 1
  });
};
var boolean = (defaultValue, opts) => {
  if ("development" !== "production") {
    validateCommonOpts("t.boolean(defaultValue, opts)", opts);
    if (typeof defaultValue !== "boolean") {
      throw new Error(`defaultValue in t.boolean(defaultValue) must be a boolean. ${userReadableTypeOfValue_default(defaultValue)} given.`);
    }
  }
  return {
    type: "boolean",
    default: defaultValue,
    valueType: null,
    [propTypeSymbol]: "TheatrePropType",
    label: opts == null ? void 0 : opts.label
  };
};
var string = (defaultValue, opts) => {
  if ("development" !== "production") {
    validateCommonOpts("t.string(defaultValue, opts)", opts);
    if (typeof defaultValue !== "string") {
      throw new Error(`defaultValue in t.string(defaultValue) must be a string. ${userReadableTypeOfValue_default(defaultValue)} given.`);
    }
  }
  return {
    type: "string",
    default: defaultValue,
    valueType: null,
    [propTypeSymbol]: "TheatrePropType",
    label: opts == null ? void 0 : opts.label
  };
};
function stringLiteral(defaultValue, options, opts) {
  var _a;
  return {
    type: "stringLiteral",
    default: defaultValue,
    options: __spreadValues({}, options),
    [propTypeSymbol]: "TheatrePropType",
    valueType: null,
    as: (_a = opts == null ? void 0 : opts.as) != null ? _a : "menu",
    label: opts == null ? void 0 : opts.label
  };
}
var defaultNumberNudgeFn = ({
  config,
  deltaX,
  deltaFraction,
  magnitude
}) => {
  const { range } = config;
  if (range) {
    return deltaFraction * (range[1] - range[0]) * magnitude * config.nudgeMultiplier;
  }
  return deltaX * magnitude * config.nudgeMultiplier;
};

// shared/src/utils/slashedPaths.ts
var sanifySlashedPath = p2 => p2.replace(/^[\s\/]*/, "").replace(/[\s\/]*$/, "").replace(/\s*\/\s*/, " / ");
var getValidationErrorsOfSlashedPath = p2 => {
  if (typeof p2 !== "string") return `it is not a string. (it is a ${typeof p2})`;
  const components = p2.split(/\//);
  if (components.length === 0) return `it is empty.`;
  for (let i2 = 0; i2 < components.length; i2++) {
    const component = components[i2].trim();
    if (component.length === 0) return `the component #${i2 + 1} is empty.`;
    if (component.length > 32) return `the component '${component}' must have 32 characters or less.`;
  }
};
function validateAndSanitiseSlashedPathOrThrow(unsanitisedPath, fnName) {
  const sanitisedPath = sanifySlashedPath(unsanitisedPath);
  if ("development" !== "development") {
    return sanitisedPath;
  }
  const validation = getValidationErrorsOfSlashedPath(sanitisedPath);
  if (validation) {
    throw new InvalidArgumentError(`The path in ${fnName}(${typeof unsanitisedPath === "string" ? `"${unsanitisedPath}"` : ""}) is invalid because ${validation}`);
  }
  if (unsanitisedPath !== sanitisedPath) {
    logger_default.warn(`The path in ${fnName}("${unsanitisedPath}") was sanitised to "${sanitisedPath}".`);
  }
  return sanitisedPath;
}

// core/src/sheets/TheatreSheet.ts
var import_fast_deep_equal = __toModule(require_fast_deep_equal());
var weakMapOfUnsanitizedProps = new WeakMap();
var TheatreSheet = class {
  get type() {
    return "Theatre_Sheet_PublicAPI";
  }
  constructor(sheet) {
    setPrivateAPI(this, sheet);
  }
  object(key, config) {
    const internal = privateAPI(this);
    const sanitizedPath = validateAndSanitiseSlashedPathOrThrow(key, `sheet.object("${key}", ...)`);
    const existingObject = internal.getObject(sanitizedPath);
    const nativeObject = null;
    if (existingObject) {
      if ("development" !== "production") {
        const prevConfig = weakMapOfUnsanitizedProps.get(existingObject);
        if (prevConfig) {
          if (!(0, import_fast_deep_equal.default)(config, prevConfig)) {
            throw new Error(`You seem to have called sheet.object("${key}", config) twice, with different values for \`config\`. This is disallowed because changing the config of an object on the fly would make it difficult to reason about.

You can fix this by either re-using the existing object, or calling sheet.object("${key}", config) with the same config.`);
          }
        }
      }
      return existingObject.publicApi;
    } else {
      const sanitizedConfig = compound(config);
      const object = internal.createObject(sanitizedPath, nativeObject, sanitizedConfig);
      if ("development" !== "production") {
        weakMapOfUnsanitizedProps.set(object, config);
      }
      return object.publicApi;
    }
  }
  get sequence() {
    return privateAPI(this).getSequence().publicApi;
  }
  get project() {
    return privateAPI(this).project.publicApi;
  }
  get address() {
    return __spreadValues({}, privateAPI(this).address);
  }
};

// core/src/sheets/Sheet.ts
var import_dataverse11 = __toModule(require("@theatre/dataverse"));
var Sheet = class {
  constructor(template, instanceId) {
    this.template = template;
    this.instanceId = instanceId;
    __publicField(this, "_objects", new import_dataverse11.Atom({}));
    __publicField(this, "_sequence");
    __publicField(this, "address");
    __publicField(this, "publicApi");
    __publicField(this, "project");
    __publicField(this, "objectsP", this._objects.pointer);
    __publicField(this, "type", "Theatre_Sheet");
    this.project = template.project;
    this.address = __spreadProps(__spreadValues({}, template.address), {
      sheetInstanceId: this.instanceId
    });
    this.publicApi = new TheatreSheet(this);
  }
  createObject(key, nativeObject, config) {
    const objTemplate = this.template.getObjectTemplate(key, nativeObject, config);
    const object = objTemplate.createInstance(this, nativeObject, config);
    this._objects.setIn([key], object);
    return object;
  }
  getObject(key) {
    return this._objects.getState()[key];
  }
  getSequence() {
    if (!this._sequence) {
      const lengthD = (0, import_dataverse11.valueDerivation)(this.project.pointers.historic.sheetsById[this.address.sheetId].sequence.length).map(s2 => typeof s2 === "number" ? s2 : 10);
      const subUnitsPerUnitD = (0, import_dataverse11.valueDerivation)(this.project.pointers.historic.sheetsById[this.address.sheetId].sequence.subUnitsPerUnit).map(s2 => typeof s2 === "number" ? s2 : 30);
      this._sequence = new Sequence(this.template.project, this, lengthD, subUnitsPerUnitD);
    }
    return this._sequence;
  }
};

// core/src/sheets/SheetTemplate.ts
var SheetTemplate = class {
  constructor(project, sheetId) {
    this.project = project;
    __publicField(this, "type", "Theatre_SheetTemplate");
    __publicField(this, "address");
    __publicField(this, "_instances", new import_dataverse12.Atom({}));
    __publicField(this, "instancesP", this._instances.pointer);
    __publicField(this, "_objectTemplates", new import_dataverse12.Atom({}));
    __publicField(this, "objectTemplatesP", this._objectTemplates.pointer);
    this.address = __spreadProps(__spreadValues({}, project.address), { sheetId });
  }
  getInstance(instanceId) {
    let inst = this._instances.getState()[instanceId];
    if (!inst) {
      inst = new Sheet(this, instanceId);
      this._instances.setIn([instanceId], inst);
    }
    return inst;
  }
  getObjectTemplate(key, nativeObject, config) {
    let template = this._objectTemplates.getState()[key];
    if (!template) {
      template = new SheetObjectTemplate(this, key, nativeObject, config);
      this._objectTemplates.setIn([key], template);
    }
    return template;
  }
};

// core/src/projects/Project.ts
var import_dataverse13 = __toModule(require("@theatre/dataverse"));
var import_dataverse14 = __toModule(require("@theatre/dataverse"));

// shared/src/utils/delay.ts
var delay = dur => new Promise(resolve => setTimeout(resolve, dur));
var delay_default = delay;

// ../node_modules/immer/dist/immer.esm.js
function n(n2) {
  for (var t3 = arguments.length, r2 = Array(t3 > 1 ? t3 - 1 : 0), e2 = 1; e2 < t3; e2++) r2[e2 - 1] = arguments[e2];
  if ("development" !== "production") {
    var i2 = Y[n2],
        o2 = i2 ? typeof i2 == "function" ? i2.apply(null, r2) : i2 : "unknown error nr: " + n2;
    throw Error("[Immer] " + o2);
  }
  throw Error("[Immer] minified error nr: " + n2 + (r2.length ? " " + r2.map(function (n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function t2(n2) {
  return !!n2 && !!n2[Q];
}
function r(n2) {
  return !!n2 && (function (n3) {
    if (!n3 || typeof n3 != "object") return false;
    var t3 = Object.getPrototypeOf(n3);
    if (t3 === null) return true;
    var r2 = Object.hasOwnProperty.call(t3, "constructor") && t3.constructor;
    return r2 === Object || typeof r2 == "function" && Function.toString.call(r2) === Z;
  }(n2) || Array.isArray(n2) || !!n2[L] || !!n2.constructor[L] || s(n2) || v(n2));
}
function e(r2) {
  return t2(r2) || n(23, r2), r2[Q].t;
}
function i(n2, t3, r2) {
  r2 === void 0 && (r2 = false), o(n2) === 0 ? (r2 ? Object.keys : nn)(n2).forEach(function (e2) {
    r2 && typeof e2 == "symbol" || t3(e2, n2[e2], n2);
  }) : n2.forEach(function (r3, e2) {
    return t3(e2, r3, n2);
  });
}
function o(n2) {
  var t3 = n2[Q];
  return t3 ? t3.i > 3 ? t3.i - 4 : t3.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v(n2) ? 3 : 0;
}
function u(n2, t3) {
  return o(n2) === 2 ? n2.has(t3) : Object.prototype.hasOwnProperty.call(n2, t3);
}
function a(n2, t3) {
  return o(n2) === 2 ? n2.get(t3) : n2[t3];
}
function f(n2, t3, r2) {
  var e2 = o(n2);
  e2 === 2 ? n2.set(t3, r2) : e2 === 3 ? (n2.delete(t3), n2.add(r2)) : n2[t3] = r2;
}
function c(n2, t3) {
  return n2 === t3 ? n2 !== 0 || 1 / n2 == 1 / t3 : n2 != n2 && t3 != t3;
}
function s(n2) {
  return X && n2 instanceof Map;
}
function v(n2) {
  return q && n2 instanceof Set;
}
function p(n2) {
  return n2.o || n2.t;
}
function l(n2) {
  if (Array.isArray(n2)) return Array.prototype.slice.call(n2);
  var t3 = tn(n2);
  delete t3[Q];
  for (var r2 = nn(t3), e2 = 0; e2 < r2.length; e2++) {
    var i2 = r2[e2],
        o2 = t3[i2];
    o2.writable === false && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (t3[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), t3);
}
function d(n2, e2) {
  return e2 === void 0 && (e2 = false), y(n2) || t2(n2) || !r(n2) ? n2 : (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e2 && i(n2, function (n3, t3) {
    return d(t3, true);
  }, true), n2);
}
function h() {
  n(2);
}
function y(n2) {
  return n2 == null || typeof n2 != "object" || Object.isFrozen(n2);
}
function b(t3) {
  var r2 = rn[t3];
  return r2 || n(18, t3), r2;
}
function _() {
  return "development" === "production" || U || n(0), U;
}
function j(n2, t3) {
  t3 && (b("Patches"), n2.u = [], n2.s = [], n2.v = t3);
}
function O(n2) {
  g(n2), n2.p.forEach(S), n2.p = null;
}
function g(n2) {
  n2 === U && (U = n2.l);
}
function w(n2) {
  return U = { p: [], l: U, h: n2, m: true, _: 0 };
}
function S(n2) {
  var t3 = n2[Q];
  t3.i === 0 || t3.i === 1 ? t3.j() : t3.O = true;
}
function P(t3, e2) {
  e2._ = e2.p.length;
  var i2 = e2.p[0],
      o2 = t3 !== void 0 && t3 !== i2;
  return e2.h.g || b("ES5").S(e2, t3, o2), o2 ? (i2[Q].P && (O(e2), n(4)), r(t3) && (t3 = M(e2, t3), e2.l || x(e2, t3)), e2.u && b("Patches").M(i2[Q], t3, e2.u, e2.s)) : t3 = M(e2, i2, []), O(e2), e2.u && e2.v(e2.u, e2.s), t3 !== H ? t3 : void 0;
}
function M(n2, t3, r2) {
  if (y(t3)) return t3;
  var e2 = t3[Q];
  if (!e2) return i(t3, function (i2, o3) {
    return A(n2, e2, t3, i2, o3, r2);
  }, true), t3;
  if (e2.A !== n2) return t3;
  if (!e2.P) return x(n2, e2.t, true), e2.t;
  if (!e2.I) {
    e2.I = true, e2.A._--;
    var o2 = e2.i === 4 || e2.i === 5 ? e2.o = l(e2.k) : e2.o;
    i(e2.i === 3 ? new Set(o2) : o2, function (t4, i2) {
      return A(n2, e2, o2, t4, i2, r2);
    }), x(n2, o2, false), r2 && n2.u && b("Patches").R(e2, r2, n2.u, n2.s);
  }
  return e2.o;
}
function A(e2, i2, o2, a2, c2, s2) {
  if ("development" !== "production" && c2 === o2 && n(5), t2(c2)) {
    var v2 = M(e2, c2, s2 && i2 && i2.i !== 3 && !u(i2.D, a2) ? s2.concat(a2) : void 0);
    if (f(o2, a2, v2), !t2(v2)) return;
    e2.m = false;
  }
  if (r(c2) && !y(c2)) {
    if (!e2.h.F && e2._ < 1) return;
    M(e2, c2), i2 && i2.A.l || x(e2, c2);
  }
}
function x(n2, t3, r2) {
  r2 === void 0 && (r2 = false), n2.h.F && n2.m && d(t3, r2);
}
function z(n2, t3) {
  var r2 = n2[Q];
  return (r2 ? p(r2) : n2)[t3];
}
function I(n2, t3) {
  if (t3 in n2) for (var r2 = Object.getPrototypeOf(n2); r2;) {
    var e2 = Object.getOwnPropertyDescriptor(r2, t3);
    if (e2) return e2;
    r2 = Object.getPrototypeOf(r2);
  }
}
function k(n2) {
  n2.P || (n2.P = true, n2.l && k(n2.l));
}
function E(n2) {
  n2.o || (n2.o = l(n2.t));
}
function R(n2, t3, r2) {
  var e2 = s(t3) ? b("MapSet").N(t3, r2) : v(t3) ? b("MapSet").T(t3, r2) : n2.g ? function (n3, t4) {
    var r3 = Array.isArray(n3),
        e3 = { i: r3 ? 1 : 0, A: t4 ? t4.A : _(), P: false, I: false, D: {}, l: t4, t: n3, k: null, o: null, j: null, C: false },
        i2 = e3,
        o2 = en;
    r3 && (i2 = [e3], o2 = on);
    var u2 = Proxy.revocable(i2, o2),
        a2 = u2.revoke,
        f2 = u2.proxy;
    return e3.k = f2, e3.j = a2, f2;
  }(t3, r2) : b("ES5").J(t3, r2);
  return (r2 ? r2.A : _()).p.push(e2), e2;
}
function D(e2) {
  return t2(e2) || n(22, e2), function n2(t3) {
    if (!r(t3)) return t3;
    var e3,
        u2 = t3[Q],
        c2 = o(t3);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b("ES5").K(u2))) return u2.t;
      u2.I = true, e3 = F(t3, c2), u2.I = false;
    } else e3 = F(t3, c2);
    return i(e3, function (t4, r2) {
      u2 && a(u2.t, t4) === r2 || f(e3, t4, n2(r2));
    }), c2 === 3 ? new Set(e3) : e3;
  }(e2);
}
function F(n2, t3) {
  switch (t3) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l(n2);
}
var G;
var U;
var W = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol";
var X = typeof Map != "undefined";
var q = typeof Set != "undefined";
var B = typeof Proxy != "undefined" && Proxy.revocable !== void 0 && typeof Reflect != "undefined";
var H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G);
var L = W ? Symbol.for("immer-draftable") : "__$immer_draftable";
var Q = W ? Symbol.for("immer-state") : "__$immer_state";
var V = typeof Symbol != "undefined" && Symbol.iterator || "@@iterator";
var Y = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function (n2) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n2;
  }, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function (n2) {
    return "Cannot apply patch, path doesn't resolve: " + n2;
  }, 16: 'Sets cannot have "replace" patches.', 17: function (n2) {
    return "Unsupported patch operation: " + n2;
  }, 18: function (n2) {
    return "The plugin for '" + n2 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n2 + "()` when initializing your application.";
  }, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function (n2) {
    return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n2 + "'";
  }, 22: function (n2) {
    return "'current' expects a draft, got: " + n2;
  }, 23: function (n2) {
    return "'original' expects a draft, got: " + n2;
  }, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" };
var Z = "" + Object.prototype.constructor;
var nn = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function (n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames;
var tn = Object.getOwnPropertyDescriptors || function (n2) {
  var t3 = {};
  return nn(n2).forEach(function (r2) {
    t3[r2] = Object.getOwnPropertyDescriptor(n2, r2);
  }), t3;
};
var rn = {};
var en = { get: function (n2, t3) {
    if (t3 === Q) return n2;
    var e2 = p(n2);
    if (!u(e2, t3)) return function (n3, t4, r2) {
      var e3,
          i3 = I(t4, r2);
      return i3 ? "value" in i3 ? i3.value : (e3 = i3.get) === null || e3 === void 0 ? void 0 : e3.call(n3.k) : void 0;
    }(n2, e2, t3);
    var i2 = e2[t3];
    return n2.I || !r(i2) ? i2 : i2 === z(n2.t, t3) ? (E(n2), n2.o[t3] = R(n2.A.h, i2, n2)) : i2;
  }, has: function (n2, t3) {
    return t3 in p(n2);
  }, ownKeys: function (n2) {
    return Reflect.ownKeys(p(n2));
  }, set: function (n2, t3, r2) {
    var e2 = I(p(n2), t3);
    if (e2 == null ? void 0 : e2.set) return e2.set.call(n2.k, r2), true;
    if (!n2.P) {
      var i2 = z(p(n2), t3),
          o2 = i2 == null ? void 0 : i2[Q];
      if (o2 && o2.t === r2) return n2.o[t3] = r2, n2.D[t3] = false, true;
      if (c(r2, i2) && (r2 !== void 0 || u(n2.t, t3))) return true;
      E(n2), k(n2);
    }
    return n2.o[t3] === r2 && typeof r2 != "number" && (r2 !== void 0 || t3 in n2.o) || (n2.o[t3] = r2, n2.D[t3] = true, true);
  }, deleteProperty: function (n2, t3) {
    return z(n2.t, t3) !== void 0 || t3 in n2.t ? (n2.D[t3] = false, E(n2), k(n2)) : delete n2.D[t3], n2.o && delete n2.o[t3], true;
  }, getOwnPropertyDescriptor: function (n2, t3) {
    var r2 = p(n2),
        e2 = Reflect.getOwnPropertyDescriptor(r2, t3);
    return e2 ? { writable: true, configurable: n2.i !== 1 || t3 !== "length", enumerable: e2.enumerable, value: r2[t3] } : e2;
  }, defineProperty: function () {
    n(11);
  }, getPrototypeOf: function (n2) {
    return Object.getPrototypeOf(n2.t);
  }, setPrototypeOf: function () {
    n(12);
  } };
var on = {};
i(en, function (n2, t3) {
  on[n2] = function () {
    return arguments[0] = arguments[0][0], t3.apply(this, arguments);
  };
}), on.deleteProperty = function (t3, r2) {
  return "development" !== "production" && isNaN(parseInt(r2)) && n(13), en.deleteProperty.call(this, t3[0], r2);
}, on.set = function (t3, r2, e2) {
  return "development" !== "production" && r2 !== "length" && isNaN(parseInt(r2)) && n(14), en.set.call(this, t3[0], r2, e2, t3[0]);
};
var un = function () {
  function e2(t3) {
    var e3 = this;
    this.g = B, this.F = true, this.produce = function (t4, i3, o2) {
      if (typeof t4 == "function" && typeof i3 != "function") {
        var u2 = i3;
        i3 = t4;
        var a2 = e3;
        return function (n2) {
          var t5 = this;
          n2 === void 0 && (n2 = u2);
          for (var r2 = arguments.length, e4 = Array(r2 > 1 ? r2 - 1 : 0), o3 = 1; o3 < r2; o3++) e4[o3 - 1] = arguments[o3];
          return a2.produce(n2, function (n3) {
            var r3;
            return (r3 = i3).call.apply(r3, [t5, n3].concat(e4));
          });
        };
      }
      var f2;
      if (typeof i3 != "function" && n(6), o2 !== void 0 && typeof o2 != "function" && n(7), r(t4)) {
        var c2 = w(e3),
            s2 = R(e3, t4, void 0),
            v2 = true;
        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? O(c2) : g(c2);
        }
        return typeof Promise != "undefined" && f2 instanceof Promise ? f2.then(function (n2) {
          return j(c2, o2), P(n2, c2);
        }, function (n2) {
          throw O(c2), n2;
        }) : (j(c2, o2), P(f2, c2));
      }
      if (!t4 || typeof t4 != "object") {
        if ((f2 = i3(t4)) === H) return;
        return f2 === void 0 && (f2 = t4), e3.F && d(f2, true), f2;
      }
      n(21, t4);
    }, this.produceWithPatches = function (n2, t4) {
      return typeof n2 == "function" ? function (t5) {
        for (var r3 = arguments.length, i4 = Array(r3 > 1 ? r3 - 1 : 0), o2 = 1; o2 < r3; o2++) i4[o2 - 1] = arguments[o2];
        return e3.produceWithPatches(t5, function (t6) {
          return n2.apply(void 0, [t6].concat(i4));
        });
      } : [e3.produce(n2, t4, function (n3, t5) {
        r2 = n3, i3 = t5;
      }), r2, i3];
      var r2, i3;
    }, typeof (t3 == null ? void 0 : t3.useProxies) == "boolean" && this.setUseProxies(t3.useProxies), typeof (t3 == null ? void 0 : t3.autoFreeze) == "boolean" && this.setAutoFreeze(t3.autoFreeze);
  }
  var i2 = e2.prototype;
  return i2.createDraft = function (e3) {
    r(e3) || n(8), t2(e3) && (e3 = D(e3));
    var i3 = w(this),
        o2 = R(this, e3, void 0);
    return o2[Q].C = true, g(i3), o2;
  }, i2.finishDraft = function (t3, r2) {
    var e3 = t3 && t3[Q];
    "development" !== "production" && (e3 && e3.C || n(9), e3.I && n(10));
    var i3 = e3.A;
    return j(i3, r2), P(void 0, i3);
  }, i2.setAutoFreeze = function (n2) {
    this.F = n2;
  }, i2.setUseProxies = function (t3) {
    t3 && !B && n(20), this.g = t3;
  }, i2.applyPatches = function (n2, r2) {
    var e3;
    for (e3 = r2.length - 1; e3 >= 0; e3--) {
      var i3 = r2[e3];
      if (i3.path.length === 0 && i3.op === "replace") {
        n2 = i3.value;
        break;
      }
    }
    var o2 = b("Patches").$;
    return t2(n2) ? o2(n2, r2) : this.produce(n2, function (n3) {
      return o2(n3, r2.slice(e3 + 1));
    });
  }, e2;
}();
var an = new un();
var fn = an.produce;
var cn = an.produceWithPatches.bind(an);
var sn = an.setAutoFreeze.bind(an);
var vn = an.setUseProxies.bind(an);
var pn = an.applyPatches.bind(an);
var ln = an.createDraft.bind(an);
var dn = an.finishDraft.bind(an);

// shared/src/globals.ts
var globals = {
  currentProjectStateDefinitionVersion: "0.4.0"
};
var globals_default = globals;

// core/src/projects/initialiseProjectState.ts
async function initialiseProjectState(studio, project, onDiskState) {
  await delay_default(0);
  studio.transaction(({ drafts }) => {
    var _a;
    const projectId = project.address.projectId;
    drafts.ephemeral.coreByProject[projectId] = {
      lastExportedObject: null,
      loadingState: { type: "loading" }
    };
    drafts.ahistoric.coreByProject[projectId] = {
      ahistoricStuff: ""
    };
    function useInitialState() {
      drafts.ephemeral.coreByProject[projectId].loadingState = {
        type: "loaded"
      };
      drafts.historic.coreByProject[projectId] = {
        sheetsById: {},
        definitionVersion: globals_default.currentProjectStateDefinitionVersion,
        revisionHistory: []
      };
    }
    function useOnDiskState(state) {
      drafts.ephemeral.coreByProject[projectId].loadingState = {
        type: "loaded"
      };
      drafts.historic.coreByProject[projectId] = state;
    }
    function useBrowserState() {
      drafts.ephemeral.coreByProject[projectId].loadingState = {
        type: "loaded"
      };
    }
    function browserStateIsNotBasedOnDiskState(onDiskState2) {
      drafts.ephemeral.coreByProject[projectId].loadingState = {
        type: "browserStateIsNotBasedOnDiskState",
        onDiskState: onDiskState2
      };
    }
    const browserState = (_a = e(drafts.historic)) == null ? void 0 : _a.coreByProject[project.address.projectId];
    if (!browserState) {
      if (!onDiskState) {
        useInitialState();
      } else {
        useOnDiskState(onDiskState);
      }
    } else {
      if (!onDiskState) {
        useBrowserState();
      } else {
        if (browserState.revisionHistory.indexOf(onDiskState.revisionHistory[0]) == -1) {
          browserStateIsNotBasedOnDiskState(onDiskState);
        } else {
          useBrowserState();
        }
      }
    }
  });
}

// core/src/projects/Project.ts
var Project = class {
  constructor(id, config = {}, publicApi) {
    this.config = config;
    this.publicApi = publicApi;
    __publicField(this, "pointers");
    __publicField(this, "_pointerProxies");
    __publicField(this, "address");
    __publicField(this, "_readyDeferred");
    __publicField(this, "_sheetTemplates", new import_dataverse14.Atom({}));
    __publicField(this, "sheetTemplatesP", this._sheetTemplates.pointer);
    __publicField(this, "_studio");
    __publicField(this, "type", "Theatre_Project");
    var _a;
    this.address = { projectId: id };
    const onDiskStateAtom = new import_dataverse14.Atom({
      ahistoric: {
        ahistoricStuff: ""
      },
      historic: (_a = config.state) != null ? _a : {
        sheetsById: {},
        definitionVersion: globals_default.currentProjectStateDefinitionVersion,
        revisionHistory: []
      },
      ephemeral: {
        loadingState: {
          type: "loaded"
        },
        lastExportedObject: null
      }
    });
    this._pointerProxies = {
      historic: new import_dataverse13.PointerProxy(onDiskStateAtom.pointer.historic),
      ahistoric: new import_dataverse13.PointerProxy(onDiskStateAtom.pointer.ahistoric),
      ephemeral: new import_dataverse13.PointerProxy(onDiskStateAtom.pointer.ephemeral)
    };
    this.pointers = {
      historic: this._pointerProxies.historic.pointer,
      ahistoric: this._pointerProxies.ahistoric.pointer,
      ephemeral: this._pointerProxies.ephemeral.pointer
    };
    projectsSingleton_default.add(id, this);
    this._readyDeferred = defer();
    if (config.state) {
      setTimeout(() => {
        if (!this._studio) {
          this._readyDeferred.resolve(void 0);
        }
      }, 0);
    } else {
      setTimeout(() => {
        if (!this._studio) {
          throw new Error(`Argument config.state in Theatre.getProject("${id}", config) is empty. This is fine while you are using @theatre/core along with @theatre/sutdio. But since @theatre/studio is not loaded, the state of project "${id}" will be empty.

To fix this, you need to add @theatre/studio into the bundle and export the projet's state. Learn how to do that at https://docs.theatrejs.com/in-depth/#exporting`);
        }
      }, 1e3);
    }
  }
  attachToStudio(studio) {
    if (this._studio) {
      if (this._studio !== studio) {
        throw new Error(`Project ${this.address.projectId} is already attached to studio ${this._studio.address.studioId}`);
      } else {
        console.warn(`Project ${this.address.projectId} is already attached to studio ${this._studio.address.studioId}`);
        return;
      }
    }
    this._studio = studio;
    studio.initialized.then(async () => {
      await initialiseProjectState(studio, this, this.config.state);
      this._pointerProxies.historic.setPointer(studio.atomP.historic.coreByProject[this.address.projectId]);
      this._pointerProxies.ahistoric.setPointer(studio.atomP.ahistoric.coreByProject[this.address.projectId]);
      this._pointerProxies.ephemeral.setPointer(studio.atomP.ephemeral.coreByProject[this.address.projectId]);
      this._readyDeferred.resolve(void 0);
    });
  }
  get isAttachedToStudio() {
    return !!this._studio;
  }
  get ready() {
    return this._readyDeferred.promise;
  }
  isReady() {
    return this._readyDeferred.status === "resolved";
  }
  getOrCreateSheet(sheetId, instanceId = "default") {
    let template = this._sheetTemplates.getState()[sheetId];
    if (!template) {
      template = new SheetTemplate(this, sheetId);
      this._sheetTemplates.setIn([sheetId], template);
    }
    return template.getInstance(instanceId);
  }
};

// shared/src/utils/sanitizers.ts
var _validateSym = (val6, thingy, range) => {
  if (typeof val6 !== "string") {
    return `${thingy} must be a string. ${userReadableTypeOfValue_default(val6)} given.`;
  } else if (val6.trim().length !== val6.length) {
    return `${thingy} must not have leading or trailing spaces. '${val6}' given.`;
  } else if (val6.length < range[0] || val6.length > range[1]) {
    return `${thingy} must have between ${range[0]} and ${range[1]} characters. '${val6}' given.`;
  }
};
var validateName = (name, thingy, shouldThrow = false) => {
  const result = _validateSym(name, thingy, [3, 32]);
  if (typeof result === "string" && shouldThrow) {
    throw new InvalidArgumentError(result);
  } else {
    return result;
  }
};
var validateInstanceId = (name, thingy, shouldThrow = false) => {
  const result = _validateSym(name, thingy, [1, 32]);
  if (typeof result === "string" && shouldThrow) {
    throw new InvalidArgumentError(result);
  } else {
    return result;
  }
};

// core/src/projects/TheatreProject.ts
var TheatreProject = class {
  get type() {
    return "Theatre_Project_PublicAPI";
  }
  constructor(id, config = {}) {
    setPrivateAPI(this, new Project(id, config, this));
  }
  get ready() {
    return privateAPI(this).ready;
  }
  get isReady() {
    return privateAPI(this).isReady();
  }
  get address() {
    return __spreadValues({}, privateAPI(this).address);
  }
  sheet(sheetId, instanceId = "default") {
    const sanitizedPath = validateAndSanitiseSlashedPathOrThrow(sheetId, "project.sheet");
    if ("development" !== "production") {
      validateInstanceId(instanceId, "instanceId in project.sheet(sheetId, instanceId)", true);
    }
    return privateAPI(this).getOrCreateSheet(sanitizedPath, instanceId).publicApi;
  }
};

// core/src/coreExports.ts
var import_fast_deep_equal2 = __toModule(require_fast_deep_equal());
var import_dataverse15 = __toModule(require("@theatre/dataverse"));
var import_dataverse16 = __toModule(require("@theatre/dataverse"));
function getProject(id, config = {}) {
  const restOfConfig = __objRest(config, []);
  const existingProject = projectsSingleton_default.get(id);
  if (existingProject) {
    if ("development" !== "production") {
      if (!(0, import_fast_deep_equal2.default)(config, existingProject.config)) {
        throw new Error(`You seem to have called Theatre.getProject("${id}", config) twice, with different config objects. This is disallowed because changing the config of a project on the fly can lead to hard-to-debug issues.

You can fix this by either calling Theatre.getProject() once per projectId, or calling it multiple times but with the exact same config.`);
      }
    }
    return existingProject.publicApi;
  }
  if ("development" !== "production") {
    validateName(id, "projectName in Theatre.getProject(projectName)", true);
    validateProjectIdOrThrow(id);
  }
  if (config.state) {
    if ("development" !== "production") {
      shallowValidateOnDiskState(id, config.state);
    } else {
      deepValidateOnDiskState(id, config.state);
    }
  }
  return new TheatreProject(id, restOfConfig);
}
var shallowValidateOnDiskState = (projectId, s2) => {
  if (Array.isArray(s2) || s2 == null || s2.definitionVersion !== globals_default.currentProjectStateDefinitionVersion) {
    throw new InvalidArgumentError(`Error validating conf.state in Theatre.getProject(${JSON.stringify(projectId)}, conf). The state seems to be formatted in a way that is unreadable to Theatre.js. Read more at https://docs.theatrejs.com`);
  }
};
var deepValidateOnDiskState = (projectId, s2) => {
  shallowValidateOnDiskState(projectId, s2);
};
var validateProjectIdOrThrow = value => {
  if (typeof value !== "string") {
    throw new InvalidArgumentError(`Argument 'projectId' in \`Theatre.getProject(projectId, ...)\` must be a string. Instead, it was ${userReadableTypeOfValue_default(value)}.`);
  }
  const idTrimmed = value.trim();
  if (idTrimmed.length !== value.length) {
    throw new InvalidArgumentError(`Argument 'projectId' in \`Theatre.getProject("${value}", ...)\` should not have surrounding whitespace.`);
  }
  if (idTrimmed.length < 3) {
    throw new InvalidArgumentError(`Argument 'projectId' in \`Theatre.getProject("${value}", ...)\` should be at least 3 characters long.`);
  }
};
function onChange(pointer2, callback) {
  if ((0, import_dataverse15.isPointer)(pointer2)) {
    const derivation = (0, import_dataverse16.valueDerivation)(pointer2);
    return derivation.tapImmediate(coreTicker_default, callback);
  } else if ((0, import_dataverse16.isDerivation)(pointer2)) {
    return pointer2.tapImmediate(coreTicker_default, callback);
  } else {
    throw new Error(`Called onChange(p) where p is neither a pointer nor a derivation.`);
  }
}

// shared/src/globalVariableNames.ts
var studioBundle = "__TheatreJS_StudioBundle";
var coreBundle = "__TheatreJS_CoreBundle";

// core/src/CoreBundle.ts
var CoreBundle = class {
  constructor() {
    __publicField(this, "_studio");
  }
  get type() {
    return "Theatre_CoreBundle";
  }
  get version() {
    return "0.4.1";
  }
  getBitsForStudio(studio, callback) {
    if (this._studio) {
      throw new Error(`@theatre/core is already attached to @theatre/studio`);
    }
    this._studio = studio;
    const bits = {
      projectsP: projectsSingleton_default.atom.pointer.projects,
      privateAPI,
      coreExports: coreExports_exports
    };
    callback(bits);
  }
};

// core/src/index.ts
registerCoreBundle();
function registerCoreBundle() {
  if (typeof window == "undefined") return;
  const existingBundle = window[coreBundle];
  if (typeof existingBundle !== "undefined") {
    if (typeof existingBundle === "object" && existingBundle && typeof existingBundle.version === "string") {
      throw new Error(`It seems that the module '@theatre/core' is loaded more than once. This could have two possible causes:
1. You might have two separate versions of theatre in node_modules.
2. Or this might be a bundling misconfiguration, in case you're using a bundler like Webpack/ESBuild/Rollup.

Note that it **is okay** to import '@theatre/core' multiple times. But those imports should point to the same module.`);
    } else {
      throw new Error(`The variable window.${coreBundle} seems to be already set by a module other than @theatre/core.`);
    }
  }
  const coreBundle2 = new CoreBundle();
  window[coreBundle] = coreBundle2;
  const possibleExistingStudioBundle = window[studioBundle];
  if (possibleExistingStudioBundle && possibleExistingStudioBundle !== null && possibleExistingStudioBundle.type === "Theatre_StudioBundle") {
    possibleExistingStudioBundle.registerCoreBundle(coreBundle2);
  }
}
/**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
//# sourceMappingURL=index.js.map
},{"@theatre/dataverse":8}],4:[function(require,module,exports) {
module.exports = {
  "sheetsById": {
    "Scene": {
      "staticOverrides": {
        "byObject": {
          "Box": {
            "position": {
              "x": 0,
              "y": -70
            },
            "stretch": 1
          },
          "cloud": {
            "scale": {
              "y": 0.8800000000000001
            }
          }
        }
      },
      "sequence": {
        "subUnitsPerUnit": 30,
        "length": 1.9,
        "type": "PositionalSequence",
        "tracksByObject": {
          "Box": {
            "trackData": {
              "wxbWoxARW1": {
                "type": "BasicKeyframedTrack",
                "keyframes": [
                  {
                    "id": "oA9neDKc_t",
                    "position": 0,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.5,
                      0
                    ],
                    "value": 200
                  },
                  {
                    "id": "T5K45k1biC",
                    "position": 0.767,
                    "connectedRight": true,
                    "handles": [
                      0.9880749247796269,
                      0.28865979381443296,
                      0.055335968379446654,
                      0.7010309278350515
                    ],
                    "value": 0
                  },
                  {
                    "id": "zEjE5IABRY",
                    "position": 0.967,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.00940452636776026,
                      0.75
                    ],
                    "value": 0
                  },
                  {
                    "id": "c7Rsqt62u8",
                    "position": 1.867,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.5,
                      0
                    ],
                    "value": 200
                  }
                ]
              },
              "K-rP9MzwU3": {
                "type": "BasicKeyframedTrack",
                "keyframes": [
                  {
                    "id": "YMY6mHDq1n",
                    "position": 0,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.3314182496363463,
                      1.0389152451070798
                    ],
                    "value": 1
                  },
                  {
                    "id": "DgReMAmW1y",
                    "position": 0.767,
                    "connectedRight": true,
                    "handles": [
                      0.4873281413473615,
                      1.3008703664281547,
                      0.46151363496539094,
                      -0.03056062221591116
                    ],
                    "value": 1.5964285714285713
                  },
                  {
                    "id": "wv7AMFGVCj",
                    "position": 0.867,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.5,
                      0
                    ],
                    "value": 0.3916756655247968
                  },
                  {
                    "id": "bFNOg8oZYx",
                    "position": 0.967,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.013264545738778444,
                      1.2814150037704441
                    ],
                    "value": 1.57
                  },
                  {
                    "id": "CXB5qa_1lT",
                    "position": 1.867,
                    "connectedRight": true,
                    "handles": [
                      0.3361263307023411,
                      0.9535131466783937,
                      0.5,
                      0
                    ],
                    "value": 1
                  }
                ]
              }
            },
            "trackIdByPropPath": {
              "[\"position\",\"y\"]": "wxbWoxARW1",
              "[\"stretch\"]": "K-rP9MzwU3"
            }
          },
          "cloud": {
            "trackData": {
              "skggOJErEs": {
                "type": "BasicKeyframedTrack",
                "keyframes": [
                  {
                    "id": "msS3E-wxEj",
                    "position": 0.767,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.5,
                      0
                    ],
                    "value": 0
                  },
                  {
                    "id": "lZUdivqBND",
                    "position": 0.8,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.034282794810009204,
                      0.9732231404958678
                    ],
                    "value": 1
                  },
                  {
                    "id": "k29POsYB6k",
                    "position": 1.4,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.5,
                      0
                    ],
                    "value": 0
                  }
                ]
              },
              "UX4lnGAHp7": {
                "type": "BasicKeyframedTrack",
                "keyframes": [
                  {
                    "id": "1t4z76fRHo",
                    "position": 0.8,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.3015639734407866,
                      0.6348760330578513
                    ],
                    "value": 0.75
                  },
                  {
                    "id": "IzpeYzBYZL",
                    "position": 1.4,
                    "connectedRight": true,
                    "handles": [
                      0.5302330799822701,
                      0.8545454545454547,
                      0.5,
                      0
                    ],
                    "value": 2.151848925619835
                  }
                ]
              }
            },
            "trackIdByPropPath": {
              "[\"opacity\"]": "skggOJErEs",
              "[\"scale\",\"x\"]": "UX4lnGAHp7"
            }
          }
        }
      }
    },
    "A sheet": {
      "staticOverrides": {
        "byObject": {
          "An object": {
            "position": {
              "x": 13.25
            },
            "enabled": true,
            "name": "hello",
            "type": "alert"
          },
          "Dummy": {
            "x": 9.4,
            "str": "bar",
            "bool": false,
            "position": {
              "x": 10.33
            },
            "mode": "foo"
          },
          "A dummy object": {
            "num": 5,
            "str": "hislkdfjsdlkfj",
            "bool": false,
            "position": {
              "x": 13.829999999999998
            }
          },
          "Some object": {
            "n": 10.5,
            "s": "string",
            "b": false,
            "position": {
              "x": 0
            },
            "streetLight": "yellow"
          }
        }
      }
    },
    "Bouncing Box": {
      "staticOverrides": {
        "byObject": {
          "Box": {
            "stretch": 1.5
          },
          "Dust": {
            "opacity": 0.1299999999999999
          }
        }
      },
      "sequence": {
        "subUnitsPerUnit": 30,
        "length": 2.19,
        "type": "PositionalSequence",
        "tracksByObject": {
          "Box": {
            "trackData": {
              "Ifz8cBW_sM": {
                "type": "BasicKeyframedTrack",
                "keyframes": [
                  {
                    "id": "qhnEaXWdKG",
                    "position": 0,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.5,
                      0
                    ],
                    "value": 200
                  },
                  {
                    "id": "mRq4OOqqXy",
                    "position": 0.933,
                    "connectedRight": true,
                    "handles": [
                      0.9547313234949364,
                      0.07017543859649122,
                      0.0396198401883564,
                      0.9298245614035088
                    ],
                    "value": 0
                  },
                  {
                    "id": "sIpbu9K2g3",
                    "position": 1.067,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.004042780935645418,
                      0.8421052631578947
                    ],
                    "value": 0
                  },
                  {
                    "id": "BXnk1hsV28",
                    "position": 2,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.5,
                      0
                    ],
                    "value": 200
                  }
                ]
              },
              "EaDkEZyFmC": {
                "type": "BasicKeyframedTrack",
                "keyframes": [
                  {
                    "id": "tgZc91870h",
                    "position": 0,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.4675210406068705,
                      0.8596491228070177
                    ],
                    "value": 1
                  },
                  {
                    "id": "N0KshqirZJ",
                    "position": 0.4,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.5,
                      0
                    ],
                    "value": 1.4983060614842052
                  },
                  {
                    "id": "hHRDjd7Ypv",
                    "position": 0.933,
                    "connectedRight": true,
                    "handles": [
                      0.5600073152759899,
                      -0.043859649122807154,
                      0.40664730234310087,
                      0.4052488144586026
                    ],
                    "value": 1.1181286549707603
                  },
                  {
                    "id": "U1amlNQgrQ",
                    "position": 1,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.5,
                      0
                    ],
                    "value": 0.3086726640135786
                  },
                  {
                    "id": "sa4cJn4tiT",
                    "position": 1.067,
                    "connectedRight": true,
                    "handles": [
                      0.5138622014505045,
                      0.7999547405069918,
                      0.07334523087443,
                      0.6233349697512098
                    ],
                    "value": 1.480588622843574
                  },
                  {
                    "id": "vW0e8hXBdY",
                    "position": 2,
                    "connectedRight": true,
                    "handles": [
                      0.1630127819341324,
                      0.921756126597166,
                      0.5,
                      0
                    ],
                    "value": 1
                  }
                ]
              }
            },
            "trackIdByPropPath": {
              "[\"y\"]": "Ifz8cBW_sM",
              "[\"stretch\"]": "EaDkEZyFmC"
            }
          },
          "Dust": {
            "trackData": {
              "v-nK3b7YnM": {
                "type": "BasicKeyframedTrack",
                "keyframes": [
                  {
                    "id": "ZLtcPq9a_J",
                    "position": 0.933,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.5,
                      0
                    ],
                    "value": 0
                  },
                  {
                    "id": "4TVRzOfzz2",
                    "position": 0.967,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.2442316110999973,
                      0.47368421052631576
                    ],
                    "value": 0.09000000000000002
                  },
                  {
                    "id": "9DIum3_G4p",
                    "position": 1.533,
                    "connectedRight": true,
                    "handles": [
                      0.4674476595945451,
                      0.5877192982456142,
                      0.5,
                      0
                    ],
                    "value": 0
                  }
                ]
              },
              "XhWt2fiHyl": {
                "type": "BasicKeyframedTrack",
                "keyframes": [
                  {
                    "id": "ci1ayL_Ikx",
                    "position": 0.967,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.05403179252312387,
                      0.6796706678978147
                    ],
                    "value": 1.061557402277624
                  },
                  {
                    "id": "JHkblzARCf",
                    "position": 2.033,
                    "connectedRight": true,
                    "handles": [
                      0.28271683584630164,
                      0.6315789473684211,
                      0.5,
                      0
                    ],
                    "value": 4.324931744032206
                  }
                ]
              }
            },
            "trackIdByPropPath": {
              "[\"opacity\"]": "v-nK3b7YnM",
              "[\"stretch\"]": "XhWt2fiHyl"
            }
          }
        }
      }
    },
    "Bouncing box": {
      "staticOverrides": {
        "byObject": {
          "Box": {
            "y": 57,
            "stretch": 0.8300000000000001
          },
          "Dust": {
            "scaleX": 0.84,
            "opacity": 0.42999999999999994
          }
        }
      },
      "sequence": {
        "subUnitsPerUnit": 30,
        "length": 2.2,
        "type": "PositionalSequence",
        "tracksByObject": {
          "Box": {
            "trackData": {
              "5teqFHUmNz": {
                "type": "BasicKeyframedTrack",
                "keyframes": [
                  {
                    "id": "FK3NdNsiY4",
                    "position": 0,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.5,
                      0
                    ],
                    "value": 16
                  },
                  {
                    "id": "YzXQa7ndCg",
                    "position": 0.9,
                    "connectedRight": true,
                    "handles": [
                      0.9452032412872213,
                      0.37864077669902907,
                      0.05479675871277876,
                      0.6116504854368932
                    ],
                    "value": 0
                  },
                  {
                    "id": "5uuJDIUpbU",
                    "position": 1.1,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.03784890040375044,
                      0.6019417475728155
                    ],
                    "value": 0
                  },
                  {
                    "id": "xktNZKB6Mc",
                    "position": 2,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.5,
                      0
                    ],
                    "value": 16
                  }
                ]
              },
              "O2Eix_0DTs": {
                "type": "BasicKeyframedTrack",
                "keyframes": [
                  {
                    "id": "iC71GnFG3i",
                    "position": 0,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.4903739338534547,
                      0.8178118054891104
                    ],
                    "value": 1
                  },
                  {
                    "id": "KTb_INARlO",
                    "position": 0.333,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.4830397882179916,
                      -0.2886394607608625
                    ],
                    "value": 1.25
                  },
                  {
                    "id": "JbwhjzE8fs",
                    "position": 0.9,
                    "connectedRight": true,
                    "handles": [
                      0.5226136157093445,
                      -0.2988775734238811,
                      0.5,
                      0
                    ],
                    "value": 1.1683730187771697
                  },
                  {
                    "id": "X1lmH2Njin",
                    "position": 1,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.5,
                      0
                    ],
                    "value": 0.52
                  },
                  {
                    "id": "vqUGgR3Gf3",
                    "position": 1.1,
                    "connectedRight": true,
                    "handles": [
                      0.6446081215097558,
                      0.8640776699029127,
                      0.06003215318437044,
                      -0.23807513718868722
                    ],
                    "value": 1.6128419266660383
                  },
                  {
                    "id": "IexmjL3EUI",
                    "position": 2,
                    "connectedRight": true,
                    "handles": [
                      0.06969419217326263,
                      0.8649490931990076,
                      0.5,
                      0
                    ],
                    "value": 1
                  }
                ]
              }
            },
            "trackIdByPropPath": {
              "[\"y\"]": "5teqFHUmNz",
              "[\"stretch\"]": "O2Eix_0DTs"
            }
          },
          "Dust": {
            "trackData": {
              "1TevSBz7q3": {
                "type": "BasicKeyframedTrack",
                "keyframes": [
                  {
                    "id": "5zQWsnnNNZ",
                    "position": 1.033,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.5,
                      0
                    ],
                    "value": 0
                  },
                  {
                    "id": "LHe_AHqvKD",
                    "position": 1.1,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0.07592438339235419,
                      0.7873503628994251
                    ],
                    "value": 0.42
                  },
                  {
                    "id": "09t5VMGXwV",
                    "position": 1.4,
                    "connectedRight": true,
                    "handles": [
                      0.32985226909702386,
                      0.9615420869073429,
                      0.5,
                      0
                    ],
                    "value": 0
                  }
                ]
              },
              "167NcgHgjK": {
                "type": "BasicKeyframedTrack",
                "keyframes": [
                  {
                    "id": "tXIG5BIjYw",
                    "position": 1.067,
                    "connectedRight": true,
                    "handles": [
                      0.5,
                      1,
                      0,
                      0.6476201283577692
                    ],
                    "value": 1
                  },
                  {
                    "id": "CX0H98UnBL",
                    "position": 2.133,
                    "connectedRight": true,
                    "handles": [
                      0.4882042271848642,
                      0.9457037302089177,
                      0.5,
                      0
                    ],
                    "value": 3.0220685456255145
                  }
                ]
              }
            },
            "trackIdByPropPath": {
              "[\"opacity\"]": "1TevSBz7q3",
              "[\"scaleX\"]": "167NcgHgjK"
            }
          }
        }
      }
    }
  },
  "definitionVersion": "0.4.0",
  "revisionHistory": [
    "____47AWP79UeMT-7Lb2",
    "____oS063KQAsLS6Ky1H",
    "____K____nFeqeeVbKzu07we",
    "____KnFeqeeVbKzu07we",
    "____RZZeL1nMtrWPq42p",
    "_____7-pdzUHKJvKmIgA",
    "____zyvAf8ZLs5X0Cxp7",
    "____fn4kKodFEk_RO74d",
    "____d0ofcBshZXQgUH15",
    "____wZiV7___qSXzAz1q"
  ]
};
},{}],3:[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@theatre/core");
var state_json_1 = __importDefault(require("./state.json"));
//import studio from "@theatre/studio"
//studio.initialize()
var proj = (0, core_1.getProject)("foobarloremipsum", { state: state_json_1.default });
var sheet = proj.sheet("Bouncing box");
var nudgableNumber = core_1.types.number(1, { nudgeMultiplier: 0.01 });
function makeBouncingBox(i) {
    var component = document.getElementById("component");
    //const boxContainer = document.getElementById("boxContainer")
    var boxDiv = document.getElementById("box");
    var dustDiv = document.getElementById("dust");
    var textDiv = document.getElementById("text");
    var fl = false;
    var kb = false;
    window.addEventListener("keyup", function (evt) {
        if (evt.key.match('5')) kb = true;
    });
    window.addEventListener("keydown", function (evt) {
        if (evt.key.match('c') || evt.key.match('C')) if (component != null) component.style.backgroundColor = "#B2FE99";
        if (evt.key.match('4')) if (kb == true) {
            if (component != null) component.style.backgroundColor = "#C3BBEC";
            kb = false;
        }
    });
    component === null || component === void 0 ? void 0 : component.addEventListener("click", function () {
        fl = true;
        component.style.backgroundColor = "#000";
        sheet.sequence.play({ iterationCount: 3 }).then(function () {
            fl = false;
            if (textDiv != null) textDiv.innerText = textObj1.value.content;
        });
        if (textDiv != null) textDiv.innerText = textObj3.value.content;
    });
    var boxObj = sheet.object("Box", {
        y: 0,
        stretch: nudgableNumber
    });
    boxObj.onValuesChange(function (_a) {
        var y = _a.y,
            stretch = _a.stretch;
        if (boxDiv != null) boxDiv.style.transform = "translateY(" + -y + "px) scale(" + 1 / stretch + ", " + stretch + ")";
    });
    var dustObj = sheet.object("Dust", {
        opacity: nudgableNumber,
        scaleX: nudgableNumber
    });
    dustObj.onValuesChange(function (_a) {
        var opacity = _a.opacity,
            scaleX = _a.scaleX;
        if (dustDiv != null) {
            dustDiv.style.opacity = String(opacity);
            dustDiv.style.transform = "scaleX(" + scaleX + ")";
        }
    });
    var textObj1 = sheet.object("Text1", { content: "foo", position: { x1: 10, y1: 10 } });
    var textObj2 = sheet.object("Text2", { content: "bar", position: { x2: 10, y2: 10 } });
    var textObj3 = sheet.object("Text3", { content: "baz", position: { x3: 10, y3: 10 } });
    textObj1.onValuesChange(function (values) {
        if (textDiv != null) {
            textDiv.style.left = values.position.x1 + 'px';
            textDiv.style.top = values.position.y1 + 'px';
        }
    });
    textObj2.onValuesChange(function (values) {
        if (textDiv != null) {
            textDiv.style.left = values.position.x2 + 'px';
            textDiv.style.top = values.position.y2 + 'px';
        }
    });
    textObj3.onValuesChange(function (values) {
        if (textDiv != null) {
            textDiv.style.left = values.position.x3 + 'px';
            textDiv.style.top = values.position.y3 + 'px';
        }
    });
    if (textDiv != null) textDiv.innerText = textObj1.value.content;
    component === null || component === void 0 ? void 0 : component.addEventListener("mouseout", function () {
        if (fl == false) {
            if (textDiv != null) textDiv.innerText = textObj1.value.content;
            component.style.background = "#6200ee";
        }
    });
    component === null || component === void 0 ? void 0 : component.addEventListener("mouseover", function () {
        if (fl == false) {
            component.style.background = "#facc15";
            if (textDiv != null) textDiv.innerText = textObj2.value.content;
        }
    });
}
makeBouncingBox(1);
},{"@theatre/core":6,"./state.json":4}],69:[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '58424' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
      // Clear the console after HMR
      console.clear();
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[69,3], null)
//# sourceMappingURL=/component.13daecc6.map