// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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
      localRequire.cache = {};

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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"classes/_Workout.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Workout = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Workout = /*#__PURE__*/function () {
  function Workout(distance, duration, coords) {
    _classCallCheck(this, Workout);
    _defineProperty(this, "date", this._date);
    _defineProperty(this, "id", Date.now());
    this.distance = distance;
    this.duration = duration;
    this.coords = coords;
  }
  _createClass(Workout, [{
    key: "_date",
    get: function get() {
      var dateFormat = new Intl.DateTimeFormat(navigator.language, {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      });
      return dateFormat.format(new Date());
    }
  }]);
  return Workout;
}();
exports.Workout = Workout;
},{}],"node_modules/lodash-es/_listCacheClear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
var _default = listCacheClear;
exports.default = _default;
},{}],"node_modules/lodash-es/eq.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
var _default = eq;
exports.default = _default;
},{}],"node_modules/lodash-es/_assocIndexOf.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _eq = _interopRequireDefault(require("./eq.js"));
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
    if ((0, _eq.default)(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _default = assocIndexOf;
exports.default = _default;
},{"./eq.js":"node_modules/lodash-es/eq.js"}],"node_modules/lodash-es/_listCacheDelete.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assocIndexOf = _interopRequireDefault(require("./_assocIndexOf.js"));
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
    index = (0, _assocIndexOf.default)(data, key);
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
var _default = listCacheDelete;
exports.default = _default;
},{"./_assocIndexOf.js":"node_modules/lodash-es/_assocIndexOf.js"}],"node_modules/lodash-es/_listCacheGet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assocIndexOf = _interopRequireDefault(require("./_assocIndexOf.js"));
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
    index = (0, _assocIndexOf.default)(data, key);
  return index < 0 ? undefined : data[index][1];
}
var _default = listCacheGet;
exports.default = _default;
},{"./_assocIndexOf.js":"node_modules/lodash-es/_assocIndexOf.js"}],"node_modules/lodash-es/_listCacheHas.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assocIndexOf = _interopRequireDefault(require("./_assocIndexOf.js"));
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
  return (0, _assocIndexOf.default)(this.__data__, key) > -1;
}
var _default = listCacheHas;
exports.default = _default;
},{"./_assocIndexOf.js":"node_modules/lodash-es/_assocIndexOf.js"}],"node_modules/lodash-es/_listCacheSet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assocIndexOf = _interopRequireDefault(require("./_assocIndexOf.js"));
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
    index = (0, _assocIndexOf.default)(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var _default = listCacheSet;
exports.default = _default;
},{"./_assocIndexOf.js":"node_modules/lodash-es/_assocIndexOf.js"}],"node_modules/lodash-es/_ListCache.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _listCacheClear = _interopRequireDefault(require("./_listCacheClear.js"));
var _listCacheDelete = _interopRequireDefault(require("./_listCacheDelete.js"));
var _listCacheGet = _interopRequireDefault(require("./_listCacheGet.js"));
var _listCacheHas = _interopRequireDefault(require("./_listCacheHas.js"));
var _listCacheSet = _interopRequireDefault(require("./_listCacheSet.js"));
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
ListCache.prototype.clear = _listCacheClear.default;
ListCache.prototype['delete'] = _listCacheDelete.default;
ListCache.prototype.get = _listCacheGet.default;
ListCache.prototype.has = _listCacheHas.default;
ListCache.prototype.set = _listCacheSet.default;
var _default = ListCache;
exports.default = _default;
},{"./_listCacheClear.js":"node_modules/lodash-es/_listCacheClear.js","./_listCacheDelete.js":"node_modules/lodash-es/_listCacheDelete.js","./_listCacheGet.js":"node_modules/lodash-es/_listCacheGet.js","./_listCacheHas.js":"node_modules/lodash-es/_listCacheHas.js","./_listCacheSet.js":"node_modules/lodash-es/_listCacheSet.js"}],"node_modules/lodash-es/_stackClear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ListCache = _interopRequireDefault(require("./_ListCache.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache.default();
  this.size = 0;
}
var _default = stackClear;
exports.default = _default;
},{"./_ListCache.js":"node_modules/lodash-es/_ListCache.js"}],"node_modules/lodash-es/_stackDelete.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
    result = data['delete'](key);
  this.size = data.size;
  return result;
}
var _default = stackDelete;
exports.default = _default;
},{}],"node_modules/lodash-es/_stackGet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}
var _default = stackGet;
exports.default = _default;
},{}],"node_modules/lodash-es/_stackHas.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}
var _default = stackHas;
exports.default = _default;
},{}],"node_modules/lodash-es/_freeGlobal.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
var _default = freeGlobal;
exports.default = _default;
},{}],"node_modules/lodash-es/_root.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _freeGlobal = _interopRequireDefault(require("./_freeGlobal.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal.default || freeSelf || Function('return this')();
var _default = root;
exports.default = _default;
},{"./_freeGlobal.js":"node_modules/lodash-es/_freeGlobal.js"}],"node_modules/lodash-es/_Symbol.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _root = _interopRequireDefault(require("./_root.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Built-in value references. */
var Symbol = _root.default.Symbol;
var _default = Symbol;
exports.default = _default;
},{"./_root.js":"node_modules/lodash-es/_root.js"}],"node_modules/lodash-es/_getRawTag.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Symbol = _interopRequireDefault(require("./_Symbol.js"));
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
var symToStringTag = _Symbol.default ? _Symbol.default.toStringTag : undefined;

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
var _default = getRawTag;
exports.default = _default;
},{"./_Symbol.js":"node_modules/lodash-es/_Symbol.js"}],"node_modules/lodash-es/_objectToString.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
var _default = objectToString;
exports.default = _default;
},{}],"node_modules/lodash-es/_baseGetTag.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Symbol = _interopRequireDefault(require("./_Symbol.js"));
var _getRawTag = _interopRequireDefault(require("./_getRawTag.js"));
var _objectToString = _interopRequireDefault(require("./_objectToString.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** `Object#toString` result references. */
var nullTag = '[object Null]',
  undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol.default ? _Symbol.default.toStringTag : undefined;

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
  return symToStringTag && symToStringTag in Object(value) ? (0, _getRawTag.default)(value) : (0, _objectToString.default)(value);
}
var _default = baseGetTag;
exports.default = _default;
},{"./_Symbol.js":"node_modules/lodash-es/_Symbol.js","./_getRawTag.js":"node_modules/lodash-es/_getRawTag.js","./_objectToString.js":"node_modules/lodash-es/_objectToString.js"}],"node_modules/lodash-es/isObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
var _default = isObject;
exports.default = _default;
},{}],"node_modules/lodash-es/isFunction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _baseGetTag = _interopRequireDefault(require("./_baseGetTag.js"));
var _isObject = _interopRequireDefault(require("./isObject.js"));
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
  if (!(0, _isObject.default)(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = (0, _baseGetTag.default)(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var _default = isFunction;
exports.default = _default;
},{"./_baseGetTag.js":"node_modules/lodash-es/_baseGetTag.js","./isObject.js":"node_modules/lodash-es/isObject.js"}],"node_modules/lodash-es/_coreJsData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _root = _interopRequireDefault(require("./_root.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Used to detect overreaching core-js shims. */
var coreJsData = _root.default['__core-js_shared__'];
var _default = coreJsData;
exports.default = _default;
},{"./_root.js":"node_modules/lodash-es/_root.js"}],"node_modules/lodash-es/_isMasked.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _coreJsData = _interopRequireDefault(require("./_coreJsData.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(_coreJsData.default && _coreJsData.default.keys && _coreJsData.default.keys.IE_PROTO || '');
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
var _default = isMasked;
exports.default = _default;
},{"./_coreJsData.js":"node_modules/lodash-es/_coreJsData.js"}],"node_modules/lodash-es/_toSource.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
var _default = toSource;
exports.default = _default;
},{}],"node_modules/lodash-es/_baseIsNative.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _isFunction = _interopRequireDefault(require("./isFunction.js"));
var _isMasked = _interopRequireDefault(require("./_isMasked.js"));
var _isObject = _interopRequireDefault(require("./isObject.js"));
var _toSource = _interopRequireDefault(require("./_toSource.js"));
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
  if (!(0, _isObject.default)(value) || (0, _isMasked.default)(value)) {
    return false;
  }
  var pattern = (0, _isFunction.default)(value) ? reIsNative : reIsHostCtor;
  return pattern.test((0, _toSource.default)(value));
}
var _default = baseIsNative;
exports.default = _default;
},{"./isFunction.js":"node_modules/lodash-es/isFunction.js","./_isMasked.js":"node_modules/lodash-es/_isMasked.js","./isObject.js":"node_modules/lodash-es/isObject.js","./_toSource.js":"node_modules/lodash-es/_toSource.js"}],"node_modules/lodash-es/_getValue.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
var _default = getValue;
exports.default = _default;
},{}],"node_modules/lodash-es/_getNative.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _baseIsNative = _interopRequireDefault(require("./_baseIsNative.js"));
var _getValue = _interopRequireDefault(require("./_getValue.js"));
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
  var value = (0, _getValue.default)(object, key);
  return (0, _baseIsNative.default)(value) ? value : undefined;
}
var _default = getNative;
exports.default = _default;
},{"./_baseIsNative.js":"node_modules/lodash-es/_baseIsNative.js","./_getValue.js":"node_modules/lodash-es/_getValue.js"}],"node_modules/lodash-es/_Map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _getNative = _interopRequireDefault(require("./_getNative.js"));
var _root = _interopRequireDefault(require("./_root.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* Built-in method references that are verified to be native. */
var Map = (0, _getNative.default)(_root.default, 'Map');
var _default = Map;
exports.default = _default;
},{"./_getNative.js":"node_modules/lodash-es/_getNative.js","./_root.js":"node_modules/lodash-es/_root.js"}],"node_modules/lodash-es/_nativeCreate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _getNative = _interopRequireDefault(require("./_getNative.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* Built-in method references that are verified to be native. */
var nativeCreate = (0, _getNative.default)(Object, 'create');
var _default = nativeCreate;
exports.default = _default;
},{"./_getNative.js":"node_modules/lodash-es/_getNative.js"}],"node_modules/lodash-es/_hashClear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _nativeCreate = _interopRequireDefault(require("./_nativeCreate.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate.default ? (0, _nativeCreate.default)(null) : {};
  this.size = 0;
}
var _default = hashClear;
exports.default = _default;
},{"./_nativeCreate.js":"node_modules/lodash-es/_nativeCreate.js"}],"node_modules/lodash-es/_hashDelete.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
var _default = hashDelete;
exports.default = _default;
},{}],"node_modules/lodash-es/_hashGet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _nativeCreate = _interopRequireDefault(require("./_nativeCreate.js"));
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
  if (_nativeCreate.default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
var _default = hashGet;
exports.default = _default;
},{"./_nativeCreate.js":"node_modules/lodash-es/_nativeCreate.js"}],"node_modules/lodash-es/_hashHas.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _nativeCreate = _interopRequireDefault(require("./_nativeCreate.js"));
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
  return _nativeCreate.default ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
var _default = hashHas;
exports.default = _default;
},{"./_nativeCreate.js":"node_modules/lodash-es/_nativeCreate.js"}],"node_modules/lodash-es/_hashSet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _nativeCreate = _interopRequireDefault(require("./_nativeCreate.js"));
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
  data[key] = _nativeCreate.default && value === undefined ? HASH_UNDEFINED : value;
  return this;
}
var _default = hashSet;
exports.default = _default;
},{"./_nativeCreate.js":"node_modules/lodash-es/_nativeCreate.js"}],"node_modules/lodash-es/_Hash.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hashClear = _interopRequireDefault(require("./_hashClear.js"));
var _hashDelete = _interopRequireDefault(require("./_hashDelete.js"));
var _hashGet = _interopRequireDefault(require("./_hashGet.js"));
var _hashHas = _interopRequireDefault(require("./_hashHas.js"));
var _hashSet = _interopRequireDefault(require("./_hashSet.js"));
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
Hash.prototype.clear = _hashClear.default;
Hash.prototype['delete'] = _hashDelete.default;
Hash.prototype.get = _hashGet.default;
Hash.prototype.has = _hashHas.default;
Hash.prototype.set = _hashSet.default;
var _default = Hash;
exports.default = _default;
},{"./_hashClear.js":"node_modules/lodash-es/_hashClear.js","./_hashDelete.js":"node_modules/lodash-es/_hashDelete.js","./_hashGet.js":"node_modules/lodash-es/_hashGet.js","./_hashHas.js":"node_modules/lodash-es/_hashHas.js","./_hashSet.js":"node_modules/lodash-es/_hashSet.js"}],"node_modules/lodash-es/_mapCacheClear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Hash = _interopRequireDefault(require("./_Hash.js"));
var _ListCache = _interopRequireDefault(require("./_ListCache.js"));
var _Map = _interopRequireDefault(require("./_Map.js"));
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
    'hash': new _Hash.default(),
    'map': new (_Map.default || _ListCache.default)(),
    'string': new _Hash.default()
  };
}
var _default = mapCacheClear;
exports.default = _default;
},{"./_Hash.js":"node_modules/lodash-es/_Hash.js","./_ListCache.js":"node_modules/lodash-es/_ListCache.js","./_Map.js":"node_modules/lodash-es/_Map.js"}],"node_modules/lodash-es/_isKeyable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
var _default = isKeyable;
exports.default = _default;
},{}],"node_modules/lodash-es/_getMapData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _isKeyable = _interopRequireDefault(require("./_isKeyable.js"));
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
  return (0, _isKeyable.default)(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
var _default = getMapData;
exports.default = _default;
},{"./_isKeyable.js":"node_modules/lodash-es/_isKeyable.js"}],"node_modules/lodash-es/_mapCacheDelete.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _getMapData = _interopRequireDefault(require("./_getMapData.js"));
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
  var result = (0, _getMapData.default)(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _default = mapCacheDelete;
exports.default = _default;
},{"./_getMapData.js":"node_modules/lodash-es/_getMapData.js"}],"node_modules/lodash-es/_mapCacheGet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _getMapData = _interopRequireDefault(require("./_getMapData.js"));
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
  return (0, _getMapData.default)(this, key).get(key);
}
var _default = mapCacheGet;
exports.default = _default;
},{"./_getMapData.js":"node_modules/lodash-es/_getMapData.js"}],"node_modules/lodash-es/_mapCacheHas.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _getMapData = _interopRequireDefault(require("./_getMapData.js"));
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
  return (0, _getMapData.default)(this, key).has(key);
}
var _default = mapCacheHas;
exports.default = _default;
},{"./_getMapData.js":"node_modules/lodash-es/_getMapData.js"}],"node_modules/lodash-es/_mapCacheSet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _getMapData = _interopRequireDefault(require("./_getMapData.js"));
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
  var data = (0, _getMapData.default)(this, key),
    size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _default = mapCacheSet;
exports.default = _default;
},{"./_getMapData.js":"node_modules/lodash-es/_getMapData.js"}],"node_modules/lodash-es/_MapCache.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mapCacheClear = _interopRequireDefault(require("./_mapCacheClear.js"));
var _mapCacheDelete = _interopRequireDefault(require("./_mapCacheDelete.js"));
var _mapCacheGet = _interopRequireDefault(require("./_mapCacheGet.js"));
var _mapCacheHas = _interopRequireDefault(require("./_mapCacheHas.js"));
var _mapCacheSet = _interopRequireDefault(require("./_mapCacheSet.js"));
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
MapCache.prototype.clear = _mapCacheClear.default;
MapCache.prototype['delete'] = _mapCacheDelete.default;
MapCache.prototype.get = _mapCacheGet.default;
MapCache.prototype.has = _mapCacheHas.default;
MapCache.prototype.set = _mapCacheSet.default;
var _default = MapCache;
exports.default = _default;
},{"./_mapCacheClear.js":"node_modules/lodash-es/_mapCacheClear.js","./_mapCacheDelete.js":"node_modules/lodash-es/_mapCacheDelete.js","./_mapCacheGet.js":"node_modules/lodash-es/_mapCacheGet.js","./_mapCacheHas.js":"node_modules/lodash-es/_mapCacheHas.js","./_mapCacheSet.js":"node_modules/lodash-es/_mapCacheSet.js"}],"node_modules/lodash-es/_stackSet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ListCache = _interopRequireDefault(require("./_ListCache.js"));
var _Map = _interopRequireDefault(require("./_Map.js"));
var _MapCache = _interopRequireDefault(require("./_MapCache.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache.default) {
    var pairs = data.__data__;
    if (!_Map.default || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache.default(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var _default = stackSet;
exports.default = _default;
},{"./_ListCache.js":"node_modules/lodash-es/_ListCache.js","./_Map.js":"node_modules/lodash-es/_Map.js","./_MapCache.js":"node_modules/lodash-es/_MapCache.js"}],"node_modules/lodash-es/_Stack.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ListCache = _interopRequireDefault(require("./_ListCache.js"));
var _stackClear = _interopRequireDefault(require("./_stackClear.js"));
var _stackDelete = _interopRequireDefault(require("./_stackDelete.js"));
var _stackGet = _interopRequireDefault(require("./_stackGet.js"));
var _stackHas = _interopRequireDefault(require("./_stackHas.js"));
var _stackSet = _interopRequireDefault(require("./_stackSet.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache.default(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear.default;
Stack.prototype['delete'] = _stackDelete.default;
Stack.prototype.get = _stackGet.default;
Stack.prototype.has = _stackHas.default;
Stack.prototype.set = _stackSet.default;
var _default = Stack;
exports.default = _default;
},{"./_ListCache.js":"node_modules/lodash-es/_ListCache.js","./_stackClear.js":"node_modules/lodash-es/_stackClear.js","./_stackDelete.js":"node_modules/lodash-es/_stackDelete.js","./_stackGet.js":"node_modules/lodash-es/_stackGet.js","./_stackHas.js":"node_modules/lodash-es/_stackHas.js","./_stackSet.js":"node_modules/lodash-es/_stackSet.js"}],"node_modules/lodash-es/_arrayEach.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var _default = arrayEach;
exports.default = _default;
},{}],"node_modules/lodash-es/_defineProperty.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _getNative = _interopRequireDefault(require("./_getNative.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defineProperty = function () {
  try {
    var func = (0, _getNative.default)(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();
var _default = defineProperty;
exports.default = _default;
},{"./_getNative.js":"node_modules/lodash-es/_getNative.js"}],"node_modules/lodash-es/_baseAssignValue.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty = _interopRequireDefault(require("./_defineProperty.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty.default) {
    (0, _defineProperty.default)(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}
var _default = baseAssignValue;
exports.default = _default;
},{"./_defineProperty.js":"node_modules/lodash-es/_defineProperty.js"}],"node_modules/lodash-es/_assignValue.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _baseAssignValue = _interopRequireDefault(require("./_baseAssignValue.js"));
var _eq = _interopRequireDefault(require("./eq.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && (0, _eq.default)(objValue, value)) || value === undefined && !(key in object)) {
    (0, _baseAssignValue.default)(object, key, value);
  }
}
var _default = assignValue;
exports.default = _default;
},{"./_baseAssignValue.js":"node_modules/lodash-es/_baseAssignValue.js","./eq.js":"node_modules/lodash-es/eq.js"}],"node_modules/lodash-es/_copyObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assignValue = _interopRequireDefault(require("./_assignValue.js"));
var _baseAssignValue = _interopRequireDefault(require("./_baseAssignValue.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
    length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      (0, _baseAssignValue.default)(object, key, newValue);
    } else {
      (0, _assignValue.default)(object, key, newValue);
    }
  }
  return object;
}
var _default = copyObject;
exports.default = _default;
},{"./_assignValue.js":"node_modules/lodash-es/_assignValue.js","./_baseAssignValue.js":"node_modules/lodash-es/_baseAssignValue.js"}],"node_modules/lodash-es/_baseTimes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
    result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var _default = baseTimes;
exports.default = _default;
},{}],"node_modules/lodash-es/isObjectLike.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
var _default = isObjectLike;
exports.default = _default;
},{}],"node_modules/lodash-es/_baseIsArguments.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _baseGetTag = _interopRequireDefault(require("./_baseGetTag.js"));
var _isObjectLike = _interopRequireDefault(require("./isObjectLike.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return (0, _isObjectLike.default)(value) && (0, _baseGetTag.default)(value) == argsTag;
}
var _default = baseIsArguments;
exports.default = _default;
},{"./_baseGetTag.js":"node_modules/lodash-es/_baseGetTag.js","./isObjectLike.js":"node_modules/lodash-es/isObjectLike.js"}],"node_modules/lodash-es/isArguments.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _baseIsArguments = _interopRequireDefault(require("./_baseIsArguments.js"));
var _isObjectLike = _interopRequireDefault(require("./isObjectLike.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = (0, _baseIsArguments.default)(function () {
  return arguments;
}()) ? _baseIsArguments.default : function (value) {
  return (0, _isObjectLike.default)(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
var _default = isArguments;
exports.default = _default;
},{"./_baseIsArguments.js":"node_modules/lodash-es/_baseIsArguments.js","./isObjectLike.js":"node_modules/lodash-es/isObjectLike.js"}],"node_modules/lodash-es/isArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
var _default = isArray;
exports.default = _default;
},{}],"node_modules/lodash-es/stubFalse.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}
var _default = stubFalse;
exports.default = _default;
},{}],"node_modules/lodash-es/isBuffer.js":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _root = _interopRequireDefault(require("./_root.js"));
var _stubFalse = _interopRequireDefault(require("./stubFalse.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.default.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || _stubFalse.default;
var _default = isBuffer;
exports.default = _default;
},{"./_root.js":"node_modules/lodash-es/_root.js","./stubFalse.js":"node_modules/lodash-es/stubFalse.js"}],"node_modules/lodash-es/_isIndex.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
var _default = isIndex;
exports.default = _default;
},{}],"node_modules/lodash-es/isLength.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var _default = isLength;
exports.default = _default;
},{}],"node_modules/lodash-es/_baseIsTypedArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _baseGetTag = _interopRequireDefault(require("./_baseGetTag.js"));
var _isLength = _interopRequireDefault(require("./isLength.js"));
var _isObjectLike = _interopRequireDefault(require("./isObjectLike.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  funcTag = '[object Function]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  objectTag = '[object Object]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return (0, _isObjectLike.default)(value) && (0, _isLength.default)(value.length) && !!typedArrayTags[(0, _baseGetTag.default)(value)];
}
var _default = baseIsTypedArray;
exports.default = _default;
},{"./_baseGetTag.js":"node_modules/lodash-es/_baseGetTag.js","./isLength.js":"node_modules/lodash-es/isLength.js","./isObjectLike.js":"node_modules/lodash-es/isObjectLike.js"}],"node_modules/lodash-es/_baseUnary.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}
var _default = baseUnary;
exports.default = _default;
},{}],"node_modules/lodash-es/_nodeUtil.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _freeGlobal = _interopRequireDefault(require("./_freeGlobal.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.default.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;
    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();
var _default = nodeUtil;
exports.default = _default;
},{"./_freeGlobal.js":"node_modules/lodash-es/_freeGlobal.js"}],"node_modules/lodash-es/isTypedArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _baseIsTypedArray = _interopRequireDefault(require("./_baseIsTypedArray.js"));
var _baseUnary = _interopRequireDefault(require("./_baseUnary.js"));
var _nodeUtil = _interopRequireDefault(require("./_nodeUtil.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil.default && _nodeUtil.default.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? (0, _baseUnary.default)(nodeIsTypedArray) : _baseIsTypedArray.default;
var _default = isTypedArray;
exports.default = _default;
},{"./_baseIsTypedArray.js":"node_modules/lodash-es/_baseIsTypedArray.js","./_baseUnary.js":"node_modules/lodash-es/_baseUnary.js","./_nodeUtil.js":"node_modules/lodash-es/_nodeUtil.js"}],"node_modules/lodash-es/_arrayLikeKeys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _baseTimes = _interopRequireDefault(require("./_baseTimes.js"));
var _isArguments = _interopRequireDefault(require("./isArguments.js"));
var _isArray = _interopRequireDefault(require("./isArray.js"));
var _isBuffer = _interopRequireDefault(require("./isBuffer.js"));
var _isIndex = _interopRequireDefault(require("./_isIndex.js"));
var _isTypedArray = _interopRequireDefault(require("./isTypedArray.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = (0, _isArray.default)(value),
    isArg = !isArr && (0, _isArguments.default)(value),
    isBuff = !isArr && !isArg && (0, _isBuffer.default)(value),
    isType = !isArr && !isArg && !isBuff && (0, _isTypedArray.default)(value),
    skipIndexes = isArr || isArg || isBuff || isType,
    result = skipIndexes ? (0, _baseTimes.default)(value.length, String) : [],
    length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    (0, _isIndex.default)(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _default = arrayLikeKeys;
exports.default = _default;
},{"./_baseTimes.js":"node_modules/lodash-es/_baseTimes.js","./isArguments.js":"node_modules/lodash-es/isArguments.js","./isArray.js":"node_modules/lodash-es/isArray.js","./isBuffer.js":"node_modules/lodash-es/isBuffer.js","./_isIndex.js":"node_modules/lodash-es/_isIndex.js","./isTypedArray.js":"node_modules/lodash-es/isTypedArray.js"}],"node_modules/lodash-es/_isPrototype.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
    proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}
var _default = isPrototype;
exports.default = _default;
},{}],"node_modules/lodash-es/_overArg.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
var _default = overArg;
exports.default = _default;
},{}],"node_modules/lodash-es/_nativeKeys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _overArg = _interopRequireDefault(require("./_overArg.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = (0, _overArg.default)(Object.keys, Object);
var _default = nativeKeys;
exports.default = _default;
},{"./_overArg.js":"node_modules/lodash-es/_overArg.js"}],"node_modules/lodash-es/_baseKeys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _isPrototype = _interopRequireDefault(require("./_isPrototype.js"));
var _nativeKeys = _interopRequireDefault(require("./_nativeKeys.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!(0, _isPrototype.default)(object)) {
    return (0, _nativeKeys.default)(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}
var _default = baseKeys;
exports.default = _default;
},{"./_isPrototype.js":"node_modules/lodash-es/_isPrototype.js","./_nativeKeys.js":"node_modules/lodash-es/_nativeKeys.js"}],"node_modules/lodash-es/isArrayLike.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _isFunction = _interopRequireDefault(require("./isFunction.js"));
var _isLength = _interopRequireDefault(require("./isLength.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && (0, _isLength.default)(value.length) && !(0, _isFunction.default)(value);
}
var _default = isArrayLike;
exports.default = _default;
},{"./isFunction.js":"node_modules/lodash-es/isFunction.js","./isLength.js":"node_modules/lodash-es/isLength.js"}],"node_modules/lodash-es/keys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _arrayLikeKeys = _interopRequireDefault(require("./_arrayLikeKeys.js"));
var _baseKeys = _interopRequireDefault(require("./_baseKeys.js"));
var _isArrayLike = _interopRequireDefault(require("./isArrayLike.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return (0, _isArrayLike.default)(object) ? (0, _arrayLikeKeys.default)(object) : (0, _baseKeys.default)(object);
}
var _default = keys;
exports.default = _default;
},{"./_arrayLikeKeys.js":"node_modules/lodash-es/_arrayLikeKeys.js","./_baseKeys.js":"node_modules/lodash-es/_baseKeys.js","./isArrayLike.js":"node_modules/lodash-es/isArrayLike.js"}],"node_modules/lodash-es/_baseAssign.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _copyObject = _interopRequireDefault(require("./_copyObject.js"));
var _keys = _interopRequireDefault(require("./keys.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && (0, _copyObject.default)(source, (0, _keys.default)(source), object);
}
var _default = baseAssign;
exports.default = _default;
},{"./_copyObject.js":"node_modules/lodash-es/_copyObject.js","./keys.js":"node_modules/lodash-es/keys.js"}],"node_modules/lodash-es/_nativeKeysIn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _default = nativeKeysIn;
exports.default = _default;
},{}],"node_modules/lodash-es/_baseKeysIn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _isObject = _interopRequireDefault(require("./isObject.js"));
var _isPrototype = _interopRequireDefault(require("./_isPrototype.js"));
var _nativeKeysIn = _interopRequireDefault(require("./_nativeKeysIn.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!(0, _isObject.default)(object)) {
    return (0, _nativeKeysIn.default)(object);
  }
  var isProto = (0, _isPrototype.default)(object),
    result = [];
  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _default = baseKeysIn;
exports.default = _default;
},{"./isObject.js":"node_modules/lodash-es/isObject.js","./_isPrototype.js":"node_modules/lodash-es/_isPrototype.js","./_nativeKeysIn.js":"node_modules/lodash-es/_nativeKeysIn.js"}],"node_modules/lodash-es/keysIn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _arrayLikeKeys = _interopRequireDefault(require("./_arrayLikeKeys.js"));
var _baseKeysIn = _interopRequireDefault(require("./_baseKeysIn.js"));
var _isArrayLike = _interopRequireDefault(require("./isArrayLike.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return (0, _isArrayLike.default)(object) ? (0, _arrayLikeKeys.default)(object, true) : (0, _baseKeysIn.default)(object);
}
var _default = keysIn;
exports.default = _default;
},{"./_arrayLikeKeys.js":"node_modules/lodash-es/_arrayLikeKeys.js","./_baseKeysIn.js":"node_modules/lodash-es/_baseKeysIn.js","./isArrayLike.js":"node_modules/lodash-es/isArrayLike.js"}],"node_modules/lodash-es/_baseAssignIn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _copyObject = _interopRequireDefault(require("./_copyObject.js"));
var _keysIn = _interopRequireDefault(require("./keysIn.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && (0, _copyObject.default)(source, (0, _keysIn.default)(source), object);
}
var _default = baseAssignIn;
exports.default = _default;
},{"./_copyObject.js":"node_modules/lodash-es/_copyObject.js","./keysIn.js":"node_modules/lodash-es/keysIn.js"}],"node_modules/lodash-es/_cloneBuffer.js":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _root = _interopRequireDefault(require("./_root.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.default.Buffer : undefined,
  allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
    result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
var _default = cloneBuffer;
exports.default = _default;
},{"./_root.js":"node_modules/lodash-es/_root.js"}],"node_modules/lodash-es/_copyArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
    length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var _default = copyArray;
exports.default = _default;
},{}],"node_modules/lodash-es/_arrayFilter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
    length = array == null ? 0 : array.length,
    resIndex = 0,
    result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _default = arrayFilter;
exports.default = _default;
},{}],"node_modules/lodash-es/stubArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}
var _default = stubArray;
exports.default = _default;
},{}],"node_modules/lodash-es/_getSymbols.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _arrayFilter = _interopRequireDefault(require("./_arrayFilter.js"));
var _stubArray = _interopRequireDefault(require("./stubArray.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? _stubArray.default : function (object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return (0, _arrayFilter.default)(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var _default = getSymbols;
exports.default = _default;
},{"./_arrayFilter.js":"node_modules/lodash-es/_arrayFilter.js","./stubArray.js":"node_modules/lodash-es/stubArray.js"}],"node_modules/lodash-es/_copySymbols.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _copyObject = _interopRequireDefault(require("./_copyObject.js"));
var _getSymbols = _interopRequireDefault(require("./_getSymbols.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return (0, _copyObject.default)(source, (0, _getSymbols.default)(source), object);
}
var _default = copySymbols;
exports.default = _default;
},{"./_copyObject.js":"node_modules/lodash-es/_copyObject.js","./_getSymbols.js":"node_modules/lodash-es/_getSymbols.js"}],"node_modules/lodash-es/_arrayPush.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
    length = values.length,
    offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
var _default = arrayPush;
exports.default = _default;
},{}],"node_modules/lodash-es/_getPrototype.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _overArg = _interopRequireDefault(require("./_overArg.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Built-in value references. */
var getPrototype = (0, _overArg.default)(Object.getPrototypeOf, Object);
var _default = getPrototype;
exports.default = _default;
},{"./_overArg.js":"node_modules/lodash-es/_overArg.js"}],"node_modules/lodash-es/_getSymbolsIn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _arrayPush = _interopRequireDefault(require("./_arrayPush.js"));
var _getPrototype = _interopRequireDefault(require("./_getPrototype.js"));
var _getSymbols = _interopRequireDefault(require("./_getSymbols.js"));
var _stubArray = _interopRequireDefault(require("./stubArray.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? _stubArray.default : function (object) {
  var result = [];
  while (object) {
    (0, _arrayPush.default)(result, (0, _getSymbols.default)(object));
    object = (0, _getPrototype.default)(object);
  }
  return result;
};
var _default = getSymbolsIn;
exports.default = _default;
},{"./_arrayPush.js":"node_modules/lodash-es/_arrayPush.js","./_getPrototype.js":"node_modules/lodash-es/_getPrototype.js","./_getSymbols.js":"node_modules/lodash-es/_getSymbols.js","./stubArray.js":"node_modules/lodash-es/stubArray.js"}],"node_modules/lodash-es/_copySymbolsIn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _copyObject = _interopRequireDefault(require("./_copyObject.js"));
var _getSymbolsIn = _interopRequireDefault(require("./_getSymbolsIn.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return (0, _copyObject.default)(source, (0, _getSymbolsIn.default)(source), object);
}
var _default = copySymbolsIn;
exports.default = _default;
},{"./_copyObject.js":"node_modules/lodash-es/_copyObject.js","./_getSymbolsIn.js":"node_modules/lodash-es/_getSymbolsIn.js"}],"node_modules/lodash-es/_baseGetAllKeys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _arrayPush = _interopRequireDefault(require("./_arrayPush.js"));
var _isArray = _interopRequireDefault(require("./isArray.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return (0, _isArray.default)(object) ? result : (0, _arrayPush.default)(result, symbolsFunc(object));
}
var _default = baseGetAllKeys;
exports.default = _default;
},{"./_arrayPush.js":"node_modules/lodash-es/_arrayPush.js","./isArray.js":"node_modules/lodash-es/isArray.js"}],"node_modules/lodash-es/_getAllKeys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _baseGetAllKeys = _interopRequireDefault(require("./_baseGetAllKeys.js"));
var _getSymbols = _interopRequireDefault(require("./_getSymbols.js"));
var _keys = _interopRequireDefault(require("./keys.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return (0, _baseGetAllKeys.default)(object, _keys.default, _getSymbols.default);
}
var _default = getAllKeys;
exports.default = _default;
},{"./_baseGetAllKeys.js":"node_modules/lodash-es/_baseGetAllKeys.js","./_getSymbols.js":"node_modules/lodash-es/_getSymbols.js","./keys.js":"node_modules/lodash-es/keys.js"}],"node_modules/lodash-es/_getAllKeysIn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _baseGetAllKeys = _interopRequireDefault(require("./_baseGetAllKeys.js"));
var _getSymbolsIn = _interopRequireDefault(require("./_getSymbolsIn.js"));
var _keysIn = _interopRequireDefault(require("./keysIn.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return (0, _baseGetAllKeys.default)(object, _keysIn.default, _getSymbolsIn.default);
}
var _default = getAllKeysIn;
exports.default = _default;
},{"./_baseGetAllKeys.js":"node_modules/lodash-es/_baseGetAllKeys.js","./_getSymbolsIn.js":"node_modules/lodash-es/_getSymbolsIn.js","./keysIn.js":"node_modules/lodash-es/keysIn.js"}],"node_modules/lodash-es/_DataView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _getNative = _interopRequireDefault(require("./_getNative.js"));
var _root = _interopRequireDefault(require("./_root.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* Built-in method references that are verified to be native. */
var DataView = (0, _getNative.default)(_root.default, 'DataView');
var _default = DataView;
exports.default = _default;
},{"./_getNative.js":"node_modules/lodash-es/_getNative.js","./_root.js":"node_modules/lodash-es/_root.js"}],"node_modules/lodash-es/_Promise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _getNative = _interopRequireDefault(require("./_getNative.js"));
var _root = _interopRequireDefault(require("./_root.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* Built-in method references that are verified to be native. */
var Promise = (0, _getNative.default)(_root.default, 'Promise');
var _default = Promise;
exports.default = _default;
},{"./_getNative.js":"node_modules/lodash-es/_getNative.js","./_root.js":"node_modules/lodash-es/_root.js"}],"node_modules/lodash-es/_Set.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _getNative = _interopRequireDefault(require("./_getNative.js"));
var _root = _interopRequireDefault(require("./_root.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* Built-in method references that are verified to be native. */
var Set = (0, _getNative.default)(_root.default, 'Set');
var _default = Set;
exports.default = _default;
},{"./_getNative.js":"node_modules/lodash-es/_getNative.js","./_root.js":"node_modules/lodash-es/_root.js"}],"node_modules/lodash-es/_WeakMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _getNative = _interopRequireDefault(require("./_getNative.js"));
var _root = _interopRequireDefault(require("./_root.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* Built-in method references that are verified to be native. */
var WeakMap = (0, _getNative.default)(_root.default, 'WeakMap');
var _default = WeakMap;
exports.default = _default;
},{"./_getNative.js":"node_modules/lodash-es/_getNative.js","./_root.js":"node_modules/lodash-es/_root.js"}],"node_modules/lodash-es/_getTag.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _DataView = _interopRequireDefault(require("./_DataView.js"));
var _Map = _interopRequireDefault(require("./_Map.js"));
var _Promise = _interopRequireDefault(require("./_Promise.js"));
var _Set = _interopRequireDefault(require("./_Set.js"));
var _WeakMap = _interopRequireDefault(require("./_WeakMap.js"));
var _baseGetTag = _interopRequireDefault(require("./_baseGetTag.js"));
var _toSource = _interopRequireDefault(require("./_toSource.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** `Object#toString` result references. */
var mapTag = '[object Map]',
  objectTag = '[object Object]',
  promiseTag = '[object Promise]',
  setTag = '[object Set]',
  weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = (0, _toSource.default)(_DataView.default),
  mapCtorString = (0, _toSource.default)(_Map.default),
  promiseCtorString = (0, _toSource.default)(_Promise.default),
  setCtorString = (0, _toSource.default)(_Set.default),
  weakMapCtorString = (0, _toSource.default)(_WeakMap.default);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag.default;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (_DataView.default && getTag(new _DataView.default(new ArrayBuffer(1))) != dataViewTag || _Map.default && getTag(new _Map.default()) != mapTag || _Promise.default && getTag(_Promise.default.resolve()) != promiseTag || _Set.default && getTag(new _Set.default()) != setTag || _WeakMap.default && getTag(new _WeakMap.default()) != weakMapTag) {
  getTag = function (value) {
    var result = (0, _baseGetTag.default)(value),
      Ctor = result == objectTag ? value.constructor : undefined,
      ctorString = Ctor ? (0, _toSource.default)(Ctor) : '';
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
var _default = getTag;
exports.default = _default;
},{"./_DataView.js":"node_modules/lodash-es/_DataView.js","./_Map.js":"node_modules/lodash-es/_Map.js","./_Promise.js":"node_modules/lodash-es/_Promise.js","./_Set.js":"node_modules/lodash-es/_Set.js","./_WeakMap.js":"node_modules/lodash-es/_WeakMap.js","./_baseGetTag.js":"node_modules/lodash-es/_baseGetTag.js","./_toSource.js":"node_modules/lodash-es/_toSource.js"}],"node_modules/lodash-es/_initCloneArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
    result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var _default = initCloneArray;
exports.default = _default;
},{}],"node_modules/lodash-es/_Uint8Array.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _root = _interopRequireDefault(require("./_root.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Built-in value references. */
var Uint8Array = _root.default.Uint8Array;
var _default = Uint8Array;
exports.default = _default;
},{"./_root.js":"node_modules/lodash-es/_root.js"}],"node_modules/lodash-es/_cloneArrayBuffer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Uint8Array = _interopRequireDefault(require("./_Uint8Array.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array.default(result).set(new _Uint8Array.default(arrayBuffer));
  return result;
}
var _default = cloneArrayBuffer;
exports.default = _default;
},{"./_Uint8Array.js":"node_modules/lodash-es/_Uint8Array.js"}],"node_modules/lodash-es/_cloneDataView.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _cloneArrayBuffer = _interopRequireDefault(require("./_cloneArrayBuffer.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? (0, _cloneArrayBuffer.default)(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var _default = cloneDataView;
exports.default = _default;
},{"./_cloneArrayBuffer.js":"node_modules/lodash-es/_cloneArrayBuffer.js"}],"node_modules/lodash-es/_cloneRegExp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var _default = cloneRegExp;
exports.default = _default;
},{}],"node_modules/lodash-es/_cloneSymbol.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Symbol = _interopRequireDefault(require("./_Symbol.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol.default ? _Symbol.default.prototype : undefined,
  symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var _default = cloneSymbol;
exports.default = _default;
},{"./_Symbol.js":"node_modules/lodash-es/_Symbol.js"}],"node_modules/lodash-es/_cloneTypedArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _cloneArrayBuffer = _interopRequireDefault(require("./_cloneArrayBuffer.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? (0, _cloneArrayBuffer.default)(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _default = cloneTypedArray;
exports.default = _default;
},{"./_cloneArrayBuffer.js":"node_modules/lodash-es/_cloneArrayBuffer.js"}],"node_modules/lodash-es/_initCloneByTag.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _cloneArrayBuffer = _interopRequireDefault(require("./_cloneArrayBuffer.js"));
var _cloneDataView = _interopRequireDefault(require("./_cloneDataView.js"));
var _cloneRegExp = _interopRequireDefault(require("./_cloneRegExp.js"));
var _cloneSymbol = _interopRequireDefault(require("./_cloneSymbol.js"));
var _cloneTypedArray = _interopRequireDefault(require("./_cloneTypedArray.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return (0, _cloneArrayBuffer.default)(object);
    case boolTag:
    case dateTag:
      return new Ctor(+object);
    case dataViewTag:
      return (0, _cloneDataView.default)(object, isDeep);
    case float32Tag:
    case float64Tag:
    case int8Tag:
    case int16Tag:
    case int32Tag:
    case uint8Tag:
    case uint8ClampedTag:
    case uint16Tag:
    case uint32Tag:
      return (0, _cloneTypedArray.default)(object, isDeep);
    case mapTag:
      return new Ctor();
    case numberTag:
    case stringTag:
      return new Ctor(object);
    case regexpTag:
      return (0, _cloneRegExp.default)(object);
    case setTag:
      return new Ctor();
    case symbolTag:
      return (0, _cloneSymbol.default)(object);
  }
}
var _default = initCloneByTag;
exports.default = _default;
},{"./_cloneArrayBuffer.js":"node_modules/lodash-es/_cloneArrayBuffer.js","./_cloneDataView.js":"node_modules/lodash-es/_cloneDataView.js","./_cloneRegExp.js":"node_modules/lodash-es/_cloneRegExp.js","./_cloneSymbol.js":"node_modules/lodash-es/_cloneSymbol.js","./_cloneTypedArray.js":"node_modules/lodash-es/_cloneTypedArray.js"}],"node_modules/lodash-es/_baseCreate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _isObject = _interopRequireDefault(require("./isObject.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = function () {
  function object() {}
  return function (proto) {
    if (!(0, _isObject.default)(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();
var _default = baseCreate;
exports.default = _default;
},{"./isObject.js":"node_modules/lodash-es/isObject.js"}],"node_modules/lodash-es/_initCloneObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _baseCreate = _interopRequireDefault(require("./_baseCreate.js"));
var _getPrototype = _interopRequireDefault(require("./_getPrototype.js"));
var _isPrototype = _interopRequireDefault(require("./_isPrototype.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return typeof object.constructor == 'function' && !(0, _isPrototype.default)(object) ? (0, _baseCreate.default)((0, _getPrototype.default)(object)) : {};
}
var _default = initCloneObject;
exports.default = _default;
},{"./_baseCreate.js":"node_modules/lodash-es/_baseCreate.js","./_getPrototype.js":"node_modules/lodash-es/_getPrototype.js","./_isPrototype.js":"node_modules/lodash-es/_isPrototype.js"}],"node_modules/lodash-es/_baseIsMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _getTag = _interopRequireDefault(require("./_getTag.js"));
var _isObjectLike = _interopRequireDefault(require("./isObjectLike.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return (0, _isObjectLike.default)(value) && (0, _getTag.default)(value) == mapTag;
}
var _default = baseIsMap;
exports.default = _default;
},{"./_getTag.js":"node_modules/lodash-es/_getTag.js","./isObjectLike.js":"node_modules/lodash-es/isObjectLike.js"}],"node_modules/lodash-es/isMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _baseIsMap = _interopRequireDefault(require("./_baseIsMap.js"));
var _baseUnary = _interopRequireDefault(require("./_baseUnary.js"));
var _nodeUtil = _interopRequireDefault(require("./_nodeUtil.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* Node.js helper references. */
var nodeIsMap = _nodeUtil.default && _nodeUtil.default.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? (0, _baseUnary.default)(nodeIsMap) : _baseIsMap.default;
var _default = isMap;
exports.default = _default;
},{"./_baseIsMap.js":"node_modules/lodash-es/_baseIsMap.js","./_baseUnary.js":"node_modules/lodash-es/_baseUnary.js","./_nodeUtil.js":"node_modules/lodash-es/_nodeUtil.js"}],"node_modules/lodash-es/_baseIsSet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _getTag = _interopRequireDefault(require("./_getTag.js"));
var _isObjectLike = _interopRequireDefault(require("./isObjectLike.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return (0, _isObjectLike.default)(value) && (0, _getTag.default)(value) == setTag;
}
var _default = baseIsSet;
exports.default = _default;
},{"./_getTag.js":"node_modules/lodash-es/_getTag.js","./isObjectLike.js":"node_modules/lodash-es/isObjectLike.js"}],"node_modules/lodash-es/isSet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _baseIsSet = _interopRequireDefault(require("./_baseIsSet.js"));
var _baseUnary = _interopRequireDefault(require("./_baseUnary.js"));
var _nodeUtil = _interopRequireDefault(require("./_nodeUtil.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* Node.js helper references. */
var nodeIsSet = _nodeUtil.default && _nodeUtil.default.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? (0, _baseUnary.default)(nodeIsSet) : _baseIsSet.default;
var _default = isSet;
exports.default = _default;
},{"./_baseIsSet.js":"node_modules/lodash-es/_baseIsSet.js","./_baseUnary.js":"node_modules/lodash-es/_baseUnary.js","./_nodeUtil.js":"node_modules/lodash-es/_nodeUtil.js"}],"node_modules/lodash-es/_baseClone.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Stack = _interopRequireDefault(require("./_Stack.js"));
var _arrayEach = _interopRequireDefault(require("./_arrayEach.js"));
var _assignValue = _interopRequireDefault(require("./_assignValue.js"));
var _baseAssign = _interopRequireDefault(require("./_baseAssign.js"));
var _baseAssignIn = _interopRequireDefault(require("./_baseAssignIn.js"));
var _cloneBuffer = _interopRequireDefault(require("./_cloneBuffer.js"));
var _copyArray = _interopRequireDefault(require("./_copyArray.js"));
var _copySymbols = _interopRequireDefault(require("./_copySymbols.js"));
var _copySymbolsIn = _interopRequireDefault(require("./_copySymbolsIn.js"));
var _getAllKeys = _interopRequireDefault(require("./_getAllKeys.js"));
var _getAllKeysIn = _interopRequireDefault(require("./_getAllKeysIn.js"));
var _getTag = _interopRequireDefault(require("./_getTag.js"));
var _initCloneArray = _interopRequireDefault(require("./_initCloneArray.js"));
var _initCloneByTag = _interopRequireDefault(require("./_initCloneByTag.js"));
var _initCloneObject = _interopRequireDefault(require("./_initCloneObject.js"));
var _isArray = _interopRequireDefault(require("./isArray.js"));
var _isBuffer = _interopRequireDefault(require("./isBuffer.js"));
var _isMap = _interopRequireDefault(require("./isMap.js"));
var _isObject = _interopRequireDefault(require("./isObject.js"));
var _isSet = _interopRequireDefault(require("./isSet.js"));
var _keys = _interopRequireDefault(require("./keys.js"));
var _keysIn = _interopRequireDefault(require("./keysIn.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
  CLONE_FLAT_FLAG = 2,
  CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  funcTag = '[object Function]',
  genTag = '[object GeneratorFunction]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  objectTag = '[object Object]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  symbolTag = '[object Symbol]',
  weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
    isDeep = bitmask & CLONE_DEEP_FLAG,
    isFlat = bitmask & CLONE_FLAT_FLAG,
    isFull = bitmask & CLONE_SYMBOLS_FLAG;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!(0, _isObject.default)(value)) {
    return value;
  }
  var isArr = (0, _isArray.default)(value);
  if (isArr) {
    result = (0, _initCloneArray.default)(value);
    if (!isDeep) {
      return (0, _copyArray.default)(value, result);
    }
  } else {
    var tag = (0, _getTag.default)(value),
      isFunc = tag == funcTag || tag == genTag;
    if ((0, _isBuffer.default)(value)) {
      return (0, _cloneBuffer.default)(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : (0, _initCloneObject.default)(value);
      if (!isDeep) {
        return isFlat ? (0, _copySymbolsIn.default)(value, (0, _baseAssignIn.default)(result, value)) : (0, _copySymbols.default)(value, (0, _baseAssign.default)(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = (0, _initCloneByTag.default)(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack.default());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if ((0, _isSet.default)(value)) {
    value.forEach(function (subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if ((0, _isMap.default)(value)) {
    value.forEach(function (subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? _getAllKeysIn.default : _getAllKeys.default : isFlat ? _keysIn.default : _keys.default;
  var props = isArr ? undefined : keysFunc(value);
  (0, _arrayEach.default)(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    (0, _assignValue.default)(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}
var _default = baseClone;
exports.default = _default;
},{"./_Stack.js":"node_modules/lodash-es/_Stack.js","./_arrayEach.js":"node_modules/lodash-es/_arrayEach.js","./_assignValue.js":"node_modules/lodash-es/_assignValue.js","./_baseAssign.js":"node_modules/lodash-es/_baseAssign.js","./_baseAssignIn.js":"node_modules/lodash-es/_baseAssignIn.js","./_cloneBuffer.js":"node_modules/lodash-es/_cloneBuffer.js","./_copyArray.js":"node_modules/lodash-es/_copyArray.js","./_copySymbols.js":"node_modules/lodash-es/_copySymbols.js","./_copySymbolsIn.js":"node_modules/lodash-es/_copySymbolsIn.js","./_getAllKeys.js":"node_modules/lodash-es/_getAllKeys.js","./_getAllKeysIn.js":"node_modules/lodash-es/_getAllKeysIn.js","./_getTag.js":"node_modules/lodash-es/_getTag.js","./_initCloneArray.js":"node_modules/lodash-es/_initCloneArray.js","./_initCloneByTag.js":"node_modules/lodash-es/_initCloneByTag.js","./_initCloneObject.js":"node_modules/lodash-es/_initCloneObject.js","./isArray.js":"node_modules/lodash-es/isArray.js","./isBuffer.js":"node_modules/lodash-es/isBuffer.js","./isMap.js":"node_modules/lodash-es/isMap.js","./isObject.js":"node_modules/lodash-es/isObject.js","./isSet.js":"node_modules/lodash-es/isSet.js","./keys.js":"node_modules/lodash-es/keys.js","./keysIn.js":"node_modules/lodash-es/keysIn.js"}],"node_modules/lodash-es/cloneDeep.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _baseClone = _interopRequireDefault(require("./_baseClone.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
  CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return (0, _baseClone.default)(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var _default = cloneDeep;
exports.default = _default;
},{"./_baseClone.js":"node_modules/lodash-es/_baseClone.js"}],"script.js":[function(require,module,exports) {
'use strict';

var _Workout3 = require("./classes/_Workout.js");
var _cloneDeep = _interopRequireDefault(require("./node_modules/lodash-es/cloneDeep.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var form = document.querySelector('.form');
var containerWorkouts = document.querySelector('.workouts');
var inputType = document.querySelector('.form__input--type');
var inputDistance = document.querySelector('.form__input--distance');
var inputDuration = document.querySelector('.form__input--duration');
var inputTemp = document.querySelector('.form__input--temp');
var inputClimb = document.querySelector('.form__input--climb');
var workoutHint = document.querySelector('.workout-hint');
var resetWorkouts = document.querySelector('.setting-reset-workouts');
var changeMaps = document.querySelector('.setting-maps');
var _map = /*#__PURE__*/new WeakMap();
var _mapEvent = /*#__PURE__*/new WeakMap();
var _workouts = /*#__PURE__*/new WeakMap();
var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);
    _classPrivateFieldInitSpec(this, _map, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _mapEvent, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _workouts, {
      writable: true,
      value: []
    });
    _defineProperty(this, "maps", [{
      link: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      copyright: {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }
    }, {
      link: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      copyright: {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      }
    }, {
      link: 'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png',
      copyright: {
        maxZoom: 20,
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      }
    }]);
    _defineProperty(this, "indexMap", +JSON.parse(localStorage.getItem('indexMap')) || 0);
    this._getPosition();
    this._localStorageData();
    this._hintToAddWorkout();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleClimbField);
    containerWorkouts.addEventListener('click', this._moveToWorkout.bind(this));
    resetWorkouts.addEventListener('click', this.reset.bind(this));
    changeMaps.addEventListener('click', this.changeMapsView.bind(this));
  }
  _createClass(App, [{
    key: "_getPosition",
    value: function _getPosition() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
          console.log('Включите доступ к местоположению');
        });
      }
    }
  }, {
    key: "_loadMap",
    value: function _loadMap(position) {
      var _this = this;
      var _position$coords = position.coords,
        longitude = _position$coords.longitude,
        latitude = _position$coords.latitude;
      _classPrivateFieldSet(this, _map, L.map('map').setView([latitude, longitude], 14));
      L.tileLayer(this.maps[this.indexMap].link, this.maps[this.indexMap].copyright).addTo(_classPrivateFieldGet(this, _map));
      _classPrivateFieldGet(this, _map).on('click', this._showForm.bind(this));
      _classPrivateFieldGet(this, _workouts).forEach(function (workout) {
        return _this._displayWorkout(workout);
      });
    }
  }, {
    key: "_showForm",
    value: function _showForm(e) {
      workoutHint.classList.add('hidden');
      form.classList.remove('hidden');
      _classPrivateFieldSet(this, _mapEvent, e);
      inputDistance.focus();
    }
  }, {
    key: "_toggleClimbField",
    value: function _toggleClimbField() {
      inputClimb.closest('.form__row').classList.toggle('form__row--hidden');
      inputTemp.closest('.form__row').classList.toggle('form__row--hidden');
    }
  }, {
    key: "_newWorkout",
    value: function _newWorkout(e) {
      e.preventDefault();
      //get data from form
      var duration = +inputDuration.value;
      var type = inputType.value;
      var distance = +inputDistance.value;
      var formFieldsNotType = form.querySelectorAll(".form__input:not(.form__input--type)");
      var checkNumbers = function checkNumbers() {
        for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
          numbers[_key] = arguments[_key];
        }
        return numbers.every(function (number) {
          return Number.isFinite(number);
        });
      };
      var checkNumbersPositive = function checkNumbersPositive() {
        for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          numbers[_key2] = arguments[_key2];
        }
        return numbers.every(function (number) {
          return number > 0;
        });
      };
      var _classPrivateFieldGet2 = _classPrivateFieldGet(this, _mapEvent).latlng,
        lat = _classPrivateFieldGet2.lat,
        lng = _classPrivateFieldGet2.lng;
      var workout;

      //  if the workout is a run create object
      if (type === 'running') {
        //data validity check
        var temp = +inputTemp.value;
        if (!checkNumbers(duration, distance, temp) || !checkNumbersPositive(duration, distance, temp)) {
          this.notification();
          return;
        }
        workout = new Running(distance, duration, [lat, lng], temp);
      }
      if (type === 'cycling') {
        var climb = +inputClimb.value;
        //data validity check
        if (!checkNumbers(duration, distance, climb) || !checkNumbersPositive(duration, distance)) {
          this.notification();
          return;
        }
        workout = new Cycling(distance, duration, [lat, lng], climb);
      }
      //add new Object in a workout Array
      _classPrivateFieldGet(this, _workouts).push(workout);
      this._saveToLocalStorage();
      // display the workout on the map

      // display the workout in the list
      formFieldsNotType.forEach(function (input) {
        input.value = '';
      });
      form.classList.add('hidden');
      this._displayWorkout(workout);
    }
  }, {
    key: "_displayWorkout",
    value: function _displayWorkout(workout) {
      L.marker(workout.coords).addTo(_classPrivateFieldGet(this, _map)).bindPopup(L.popup({
        maxWidth: 350,
        autoClose: false,
        closeOnClick: false,
        className: "".concat(workout.type, "-popup")
      })).setPopupContent("".concat(workout.type === 'running' ? '🏃 Пробежка' : '🚵‍♂️ Велотренировка', " ").concat(workout.date)).openPopup();
      this._addWorkoutOnSideBar(workout);
    }
  }, {
    key: "_addWorkoutOnSideBar",
    value: function _addWorkoutOnSideBar(workout) {
      var html = "\n      <li class=\"workout workout--".concat(workout.type, "\" data-id=\"").concat(workout.id, "\">\n        <h2 class=\"workout__title\">").concat(workout.type === 'running' ? 'Пробежка' : 'Велотренировка', " ").concat(workout.date, "</h2>\n        <div class=\"workout__details\">\n          <span class=\"workout__icon\">").concat(workout.type === 'running' ? '🏃' : '🚵‍♂️', "</span>\n          <span class=\"workout__value\">").concat(workout.distance, "</span>\n          <span class=\"workout__unit\">\u043A\u043C</span>\n        </div>\n        <div class=\"workout__details\">\n          <span class=\"workout__icon\">\u23F1</span>\n          <span class=\"workout__value\">").concat(workout.duration, "</span>\n          <span class=\"workout__unit\">\u043C\u0438\u043D</span>\n        </div>\n        <div class=\"workout__details\">\n          <span class=\"workout__icon\">\uD83D\uDCCF\u23F1</span>\n          <span class=\"workout__value\">").concat(workout.type === 'running' ? workout.pace.toFixed(2) : workout.speed.toFixed(2), "</span>\n          <span class=\"workout__unit\">").concat(workout.type === 'running' ? 'мин/км' : 'км/ч', "</span>\n        </div>\n        <div class=\"workout__details\">\n        \n          <span class=\"workout__icon\">").concat(workout.type === 'running' ? '👟⏱' : '🏔', "</span>\n          <span class=\"workout__value\">").concat(workout.temp || workout.climb, "</span>\n          <span class=\"workout__unit\">").concat(workout.type === 'running' ? 'шаг/мин' : 'м', "</span>\n        </div>\n        <button class=\"delete-workout\">X</button>\n      </li>");
      containerWorkouts.insertAdjacentHTML('beforeend', html);
    }
  }, {
    key: "_moveToWorkout",
    value: function _moveToWorkout(e) {
      var workoutElement = e.target.closest('.workout');
      if (!workoutElement) return;
      var workout = _classPrivateFieldGet(this, _workouts).find(function (item) {
        return item.id === +workoutElement.getAttribute('data-id');
      });
      _classPrivateFieldGet(this, _map).setView(workout.coords, 17, {
        animate: true,
        pan: {
          duration: 1
        }
      });
    }
  }, {
    key: "_saveToLocalStorage",
    value: function _saveToLocalStorage() {
      localStorage.setItem('workouts', JSON.stringify(_classPrivateFieldGet(this, _workouts)));
    }
  }, {
    key: "_hintToAddWorkout",
    value: function _hintToAddWorkout() {
      if (_classPrivateFieldGet(this, _workouts).length === 0) {
        workoutHint.classList.remove('hidden');
      }
    }
  }, {
    key: "_localStorageData",
    value: function _localStorageData() {
      var data = JSON.parse(localStorage.getItem('workouts'));
      if (!data) return;
      _classPrivateFieldSet(this, _workouts, data);
    }
  }, {
    key: "reset",
    value: function reset() {
      localStorage.removeItem('workouts');
      location.reload();
    }
  }, {
    key: "changeMapsView",
    value: function changeMapsView() {
      this.indexMap === this.maps.length - 1 ? this.indexMap = 0 : ++this.indexMap;
      localStorage.setItem('indexMap', JSON.stringify(this.indexMap));
      location.reload();
    }
  }, {
    key: "notification",
    value: function notification() {
      var fieldWithAnError = document.querySelector(':focus').closest('.form__row');
      fieldWithAnError.style.position = 'relative';
      var errorNotification = "<p class=\"notification\">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043B\u043E</p>";
      fieldWithAnError.insertAdjacentHTML('afterbegin', errorNotification);
      setTimeout(function () {
        fieldWithAnError.querySelector('.notification').remove();
      }, 1500);
    }
  }, {
    key: "deleteOneWorkout",
    value: function deleteOneWorkout() {}
  }]);
  return App;
}();
var Running = /*#__PURE__*/function (_Workout) {
  _inherits(Running, _Workout);
  var _super = _createSuper(Running);
  function Running(distance, duration, coords, temp) {
    var _this2;
    _classCallCheck(this, Running);
    _this2 = _super.call(this, distance, duration, coords);
    _defineProperty(_assertThisInitialized(_this2), "type", 'running');
    _this2.temp = temp;
    _this2.calculatePace();
    return _this2;
  }
  _createClass(Running, [{
    key: "calculatePace",
    value: function calculatePace() {
      this.pace = this.duration / this.distance;
    }
  }]);
  return Running;
}(_Workout3.Workout);
var Cycling = /*#__PURE__*/function (_Workout2) {
  _inherits(Cycling, _Workout2);
  var _super2 = _createSuper(Cycling);
  function Cycling(distance, duration, coords, climb) {
    var _this3;
    _classCallCheck(this, Cycling);
    _this3 = _super2.call(this, distance, duration, coords);
    _defineProperty(_assertThisInitialized(_this3), "type", 'cycling');
    _this3.climb = climb;
    _this3.calculateSpeed();
    return _this3;
  }
  _createClass(Cycling, [{
    key: "calculateSpeed",
    value: function calculateSpeed() {
      this.speed = this.distance / this.duration / 60;
    }
  }]);
  return Cycling;
}(_Workout3.Workout);
var app = new App();
var state = {
  cart: [{
    product: 'apple',
    quantity: 5
  }, {
    product: 'meet',
    quantity: 5,
    name: [{
      meeting: true
    }]
  }],
  user: {
    loggedIn: true
  },
  popo: true
};
console.log('================================');
var stateCloneDeep = (0, _cloneDeep.default)(state);
stateCloneDeep.popo = 'false';
stateCloneDeep.user.loggedIn = false;
console.log(state);
console.log(stateCloneDeep);
},{"./classes/_Workout.js":"classes/_Workout.js","./node_modules/lodash-es/cloneDeep.js":"node_modules/lodash-es/cloneDeep.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62095" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
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
        parents.push(k);
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
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
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
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map