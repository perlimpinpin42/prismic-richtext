(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("PrismicRichtext", [], factory);
	else if(typeof exports === 'object')
		exports["PrismicRichtext"] = factory();
	else
		root["PrismicRichtext"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ramda/src/flatten.js":
/*!*******************************************!*\
  !*** ./node_modules/ramda/src/flatten.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry1 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar _makeFlat = /*#__PURE__*/__webpack_require__(/*! ./internal/_makeFlat */ \"./node_modules/ramda/src/internal/_makeFlat.js\");\n\n/**\n * Returns a new list by pulling every item out of it (and all its sub-arrays)\n * and putting them in a new array, depth-first.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig [a] -> [b]\n * @param {Array} list The array to consider.\n * @return {Array} The flattened list.\n * @see R.unnest\n * @example\n *\n *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);\n *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]\n */\n\n\nvar flatten = /*#__PURE__*/_curry1( /*#__PURE__*/_makeFlat(true));\nmodule.exports = flatten;\n\n//# sourceURL=webpack://PrismicRichtext/./node_modules/ramda/src/flatten.js?");

/***/ }),

/***/ "./node_modules/ramda/src/init.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/init.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var slice = /*#__PURE__*/__webpack_require__(/*! ./slice */ \"./node_modules/ramda/src/slice.js\");\n\n/**\n * Returns all but the last element of the given list or string.\n *\n * @func\n * @memberOf R\n * @since v0.9.0\n * @category List\n * @sig [a] -> [a]\n * @sig String -> String\n * @param {*} list\n * @return {*}\n * @see R.last, R.head, R.tail\n * @example\n *\n *      R.init([1, 2, 3]);  //=> [1, 2]\n *      R.init([1, 2]);     //=> [1]\n *      R.init([1]);        //=> []\n *      R.init([]);         //=> []\n *\n *      R.init('abc');  //=> 'ab'\n *      R.init('ab');   //=> 'a'\n *      R.init('a');    //=> ''\n *      R.init('');     //=> ''\n */\n\n\nvar init = /*#__PURE__*/slice(0, -1);\nmodule.exports = init;\n\n//# sourceURL=webpack://PrismicRichtext/./node_modules/ramda/src/init.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_checkForMethod.js":
/*!************************************************************!*\
  !*** ./node_modules/ramda/src/internal/_checkForMethod.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _isArray = /*#__PURE__*/__webpack_require__(/*! ./_isArray */ \"./node_modules/ramda/src/internal/_isArray.js\");\n\n/**\n * This checks whether a function has a [methodname] function. If it isn't an\n * array it will execute that function otherwise it will default to the ramda\n * implementation.\n *\n * @private\n * @param {Function} fn ramda implemtation\n * @param {String} methodname property to check for a custom implementation\n * @return {Object} Whatever the return value of the method is.\n */\n\n\nfunction _checkForMethod(methodname, fn) {\n  return function () {\n    var length = arguments.length;\n    if (length === 0) {\n      return fn();\n    }\n    var obj = arguments[length - 1];\n    return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));\n  };\n}\nmodule.exports = _checkForMethod;\n\n//# sourceURL=webpack://PrismicRichtext/./node_modules/ramda/src/internal/_checkForMethod.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_curry1.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_curry1.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _isPlaceholder = /*#__PURE__*/__webpack_require__(/*! ./_isPlaceholder */ \"./node_modules/ramda/src/internal/_isPlaceholder.js\");\n\n/**\n * Optimized internal one-arity curry function.\n *\n * @private\n * @category Function\n * @param {Function} fn The function to curry.\n * @return {Function} The curried function.\n */\n\n\nfunction _curry1(fn) {\n  return function f1(a) {\n    if (arguments.length === 0 || _isPlaceholder(a)) {\n      return f1;\n    } else {\n      return fn.apply(this, arguments);\n    }\n  };\n}\nmodule.exports = _curry1;\n\n//# sourceURL=webpack://PrismicRichtext/./node_modules/ramda/src/internal/_curry1.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_curry2.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_curry2.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry1 = /*#__PURE__*/__webpack_require__(/*! ./_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar _isPlaceholder = /*#__PURE__*/__webpack_require__(/*! ./_isPlaceholder */ \"./node_modules/ramda/src/internal/_isPlaceholder.js\");\n\n/**\n * Optimized internal two-arity curry function.\n *\n * @private\n * @category Function\n * @param {Function} fn The function to curry.\n * @return {Function} The curried function.\n */\n\n\nfunction _curry2(fn) {\n  return function f2(a, b) {\n    switch (arguments.length) {\n      case 0:\n        return f2;\n      case 1:\n        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {\n          return fn(a, _b);\n        });\n      default:\n        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {\n          return fn(_a, b);\n        }) : _isPlaceholder(b) ? _curry1(function (_b) {\n          return fn(a, _b);\n        }) : fn(a, b);\n    }\n  };\n}\nmodule.exports = _curry2;\n\n//# sourceURL=webpack://PrismicRichtext/./node_modules/ramda/src/internal/_curry2.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_curry3.js":
/*!****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_curry3.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry1 = /*#__PURE__*/__webpack_require__(/*! ./_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar _curry2 = /*#__PURE__*/__webpack_require__(/*! ./_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\nvar _isPlaceholder = /*#__PURE__*/__webpack_require__(/*! ./_isPlaceholder */ \"./node_modules/ramda/src/internal/_isPlaceholder.js\");\n\n/**\n * Optimized internal three-arity curry function.\n *\n * @private\n * @category Function\n * @param {Function} fn The function to curry.\n * @return {Function} The curried function.\n */\n\n\nfunction _curry3(fn) {\n  return function f3(a, b, c) {\n    switch (arguments.length) {\n      case 0:\n        return f3;\n      case 1:\n        return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {\n          return fn(a, _b, _c);\n        });\n      case 2:\n        return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {\n          return fn(_a, b, _c);\n        }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {\n          return fn(a, _b, _c);\n        }) : _curry1(function (_c) {\n          return fn(a, b, _c);\n        });\n      default:\n        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {\n          return fn(_a, _b, c);\n        }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {\n          return fn(_a, b, _c);\n        }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {\n          return fn(a, _b, _c);\n        }) : _isPlaceholder(a) ? _curry1(function (_a) {\n          return fn(_a, b, c);\n        }) : _isPlaceholder(b) ? _curry1(function (_b) {\n          return fn(a, _b, c);\n        }) : _isPlaceholder(c) ? _curry1(function (_c) {\n          return fn(a, b, _c);\n        }) : fn(a, b, c);\n    }\n  };\n}\nmodule.exports = _curry3;\n\n//# sourceURL=webpack://PrismicRichtext/./node_modules/ramda/src/internal/_curry3.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isArray.js":
/*!*****************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isArray.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Tests whether or not an object is an array.\n *\n * @private\n * @param {*} val The object to test.\n * @return {Boolean} `true` if `val` is an array, `false` otherwise.\n * @example\n *\n *      _isArray([]); //=> true\n *      _isArray(null); //=> false\n *      _isArray({}); //=> false\n */\nmodule.exports = Array.isArray || function _isArray(val) {\n  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';\n};\n\n//# sourceURL=webpack://PrismicRichtext/./node_modules/ramda/src/internal/_isArray.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isArrayLike.js":
/*!*********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isArrayLike.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry1 = /*#__PURE__*/__webpack_require__(/*! ./_curry1 */ \"./node_modules/ramda/src/internal/_curry1.js\");\n\nvar _isArray = /*#__PURE__*/__webpack_require__(/*! ./_isArray */ \"./node_modules/ramda/src/internal/_isArray.js\");\n\nvar _isString = /*#__PURE__*/__webpack_require__(/*! ./_isString */ \"./node_modules/ramda/src/internal/_isString.js\");\n\n/**\n * Tests whether or not an object is similar to an array.\n *\n * @private\n * @category Type\n * @category List\n * @sig * -> Boolean\n * @param {*} x The object to test.\n * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.\n * @example\n *\n *      _isArrayLike([]); //=> true\n *      _isArrayLike(true); //=> false\n *      _isArrayLike({}); //=> false\n *      _isArrayLike({length: 10}); //=> false\n *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true\n */\n\n\nvar _isArrayLike = /*#__PURE__*/_curry1(function isArrayLike(x) {\n  if (_isArray(x)) {\n    return true;\n  }\n  if (!x) {\n    return false;\n  }\n  if (typeof x !== 'object') {\n    return false;\n  }\n  if (_isString(x)) {\n    return false;\n  }\n  if (x.nodeType === 1) {\n    return !!x.length;\n  }\n  if (x.length === 0) {\n    return true;\n  }\n  if (x.length > 0) {\n    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);\n  }\n  return false;\n});\nmodule.exports = _isArrayLike;\n\n//# sourceURL=webpack://PrismicRichtext/./node_modules/ramda/src/internal/_isArrayLike.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isPlaceholder.js":
/*!***********************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isPlaceholder.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _isPlaceholder(a) {\n       return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;\n}\nmodule.exports = _isPlaceholder;\n\n//# sourceURL=webpack://PrismicRichtext/./node_modules/ramda/src/internal/_isPlaceholder.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_isString.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_isString.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _isString(x) {\n  return Object.prototype.toString.call(x) === '[object String]';\n}\nmodule.exports = _isString;\n\n//# sourceURL=webpack://PrismicRichtext/./node_modules/ramda/src/internal/_isString.js?");

/***/ }),

/***/ "./node_modules/ramda/src/internal/_makeFlat.js":
/*!******************************************************!*\
  !*** ./node_modules/ramda/src/internal/_makeFlat.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _isArrayLike = /*#__PURE__*/__webpack_require__(/*! ./_isArrayLike */ \"./node_modules/ramda/src/internal/_isArrayLike.js\");\n\n/**\n * `_makeFlat` is a helper function that returns a one-level or fully recursive\n * function based on the flag passed in.\n *\n * @private\n */\n\n\nfunction _makeFlat(recursive) {\n  return function flatt(list) {\n    var value, jlen, j;\n    var result = [];\n    var idx = 0;\n    var ilen = list.length;\n\n    while (idx < ilen) {\n      if (_isArrayLike(list[idx])) {\n        value = recursive ? flatt(list[idx]) : list[idx];\n        j = 0;\n        jlen = value.length;\n        while (j < jlen) {\n          result[result.length] = value[j];\n          j += 1;\n        }\n      } else {\n        result[result.length] = list[idx];\n      }\n      idx += 1;\n    }\n    return result;\n  };\n}\nmodule.exports = _makeFlat;\n\n//# sourceURL=webpack://PrismicRichtext/./node_modules/ramda/src/internal/_makeFlat.js?");

/***/ }),

/***/ "./node_modules/ramda/src/last.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/last.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nth = /*#__PURE__*/__webpack_require__(/*! ./nth */ \"./node_modules/ramda/src/nth.js\");\n\n/**\n * Returns the last element of the given list or string.\n *\n * @func\n * @memberOf R\n * @since v0.1.4\n * @category List\n * @sig [a] -> a | Undefined\n * @sig String -> String\n * @param {*} list\n * @return {*}\n * @see R.init, R.head, R.tail\n * @example\n *\n *      R.last(['fi', 'fo', 'fum']); //=> 'fum'\n *      R.last([]); //=> undefined\n *\n *      R.last('abc'); //=> 'c'\n *      R.last(''); //=> ''\n */\n\n\nvar last = /*#__PURE__*/nth(-1);\nmodule.exports = last;\n\n//# sourceURL=webpack://PrismicRichtext/./node_modules/ramda/src/last.js?");

/***/ }),

/***/ "./node_modules/ramda/src/nth.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/src/nth.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry2 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\nvar _isString = /*#__PURE__*/__webpack_require__(/*! ./internal/_isString */ \"./node_modules/ramda/src/internal/_isString.js\");\n\n/**\n * Returns the nth element of the given list or string. If n is negative the\n * element at index length + n is returned.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category List\n * @sig Number -> [a] -> a | Undefined\n * @sig Number -> String -> String\n * @param {Number} offset\n * @param {*} list\n * @return {*}\n * @example\n *\n *      const list = ['foo', 'bar', 'baz', 'quux'];\n *      R.nth(1, list); //=> 'bar'\n *      R.nth(-1, list); //=> 'quux'\n *      R.nth(-99, list); //=> undefined\n *\n *      R.nth(2, 'abc'); //=> 'c'\n *      R.nth(3, 'abc'); //=> ''\n * @symb R.nth(-1, [a, b, c]) = c\n * @symb R.nth(0, [a, b, c]) = a\n * @symb R.nth(1, [a, b, c]) = b\n */\n\n\nvar nth = /*#__PURE__*/_curry2(function nth(offset, list) {\n  var idx = offset < 0 ? list.length + offset : offset;\n  return _isString(list) ? list.charAt(idx) : list[idx];\n});\nmodule.exports = nth;\n\n//# sourceURL=webpack://PrismicRichtext/./node_modules/ramda/src/nth.js?");

/***/ }),

/***/ "./node_modules/ramda/src/slice.js":
/*!*****************************************!*\
  !*** ./node_modules/ramda/src/slice.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _checkForMethod = /*#__PURE__*/__webpack_require__(/*! ./internal/_checkForMethod */ \"./node_modules/ramda/src/internal/_checkForMethod.js\");\n\nvar _curry3 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry3 */ \"./node_modules/ramda/src/internal/_curry3.js\");\n\n/**\n * Returns the elements of the given list or string (or object with a `slice`\n * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).\n *\n * Dispatches to the `slice` method of the third argument, if present.\n *\n * @func\n * @memberOf R\n * @since v0.1.4\n * @category List\n * @sig Number -> Number -> [a] -> [a]\n * @sig Number -> Number -> String -> String\n * @param {Number} fromIndex The start index (inclusive).\n * @param {Number} toIndex The end index (exclusive).\n * @param {*} list\n * @return {*}\n * @example\n *\n *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']\n *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']\n *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']\n *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']\n *      R.slice(0, 3, 'ramda');                     //=> 'ram'\n */\n\n\nvar slice = /*#__PURE__*/_curry3( /*#__PURE__*/_checkForMethod('slice', function slice(fromIndex, toIndex, list) {\n  return Array.prototype.slice.call(list, fromIndex, toIndex);\n}));\nmodule.exports = slice;\n\n//# sourceURL=webpack://PrismicRichtext/./node_modules/ramda/src/slice.js?");

/***/ }),

/***/ "./node_modules/ramda/src/sortBy.js":
/*!******************************************!*\
  !*** ./node_modules/ramda/src/sortBy.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry2 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\n/**\n * Sorts the list according to the supplied function.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Relation\n * @sig Ord b => (a -> b) -> [a] -> [a]\n * @param {Function} fn\n * @param {Array} list The list to sort.\n * @return {Array} A new list sorted by the keys generated by `fn`.\n * @example\n *\n *      const sortByFirstItem = R.sortBy(R.prop(0));\n *      const pairs = [[-1, 1], [-2, 2], [-3, 3]];\n *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]\n *\n *      const sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));\n *      const alice = {\n *        name: 'ALICE',\n *        age: 101\n *      };\n *      const bob = {\n *        name: 'Bob',\n *        age: -10\n *      };\n *      const clara = {\n *        name: 'clara',\n *        age: 314.159\n *      };\n *      const people = [clara, bob, alice];\n *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]\n */\n\n\nvar sortBy = /*#__PURE__*/_curry2(function sortBy(fn, list) {\n  return Array.prototype.slice.call(list, 0).sort(function (a, b) {\n    var aa = fn(a);\n    var bb = fn(b);\n    return aa < bb ? -1 : aa > bb ? 1 : 0;\n  });\n});\nmodule.exports = sortBy;\n\n//# sourceURL=webpack://PrismicRichtext/./node_modules/ramda/src/sortBy.js?");

/***/ }),

/***/ "./node_modules/ramda/src/sortWith.js":
/*!********************************************!*\
  !*** ./node_modules/ramda/src/sortWith.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _curry2 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry2 */ \"./node_modules/ramda/src/internal/_curry2.js\");\n\n/**\n * Sorts a list according to a list of comparators.\n *\n * @func\n * @memberOf R\n * @since v0.23.0\n * @category Relation\n * @sig [(a, a) -> Number] -> [a] -> [a]\n * @param {Array} functions A list of comparator functions.\n * @param {Array} list The list to sort.\n * @return {Array} A new list sorted according to the comarator functions.\n * @example\n *\n *      const alice = {\n *        name: 'alice',\n *        age: 40\n *      };\n *      const bob = {\n *        name: 'bob',\n *        age: 30\n *      };\n *      const clara = {\n *        name: 'clara',\n *        age: 40\n *      };\n *      const people = [clara, bob, alice];\n *      const ageNameSort = R.sortWith([\n *        R.descend(R.prop('age')),\n *        R.ascend(R.prop('name'))\n *      ]);\n *      ageNameSort(people); //=> [alice, clara, bob]\n */\n\n\nvar sortWith = /*#__PURE__*/_curry2(function sortWith(fns, list) {\n  return Array.prototype.slice.call(list, 0).sort(function (a, b) {\n    var result = 0;\n    var i = 0;\n    while (result === 0 && i < fns.length) {\n      result = fns[i](a, b);\n      i += 1;\n    }\n    return result;\n  });\n});\nmodule.exports = sortWith;\n\n//# sourceURL=webpack://PrismicRichtext/./node_modules/ramda/src/sortWith.js?");

/***/ }),

/***/ "./src/astext.ts":
/*!***********************!*\
  !*** ./src/astext.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction asText(richtext, joinString) {\n  const join = typeof joinString === 'string' ? joinString : ' ';\n  return richtext.map(block => block.text).join(join);\n}\n\nvar _default = asText;\nexports.default = _default;\n\n//# sourceURL=webpack://PrismicRichtext/./src/astext.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _astext = _interopRequireDefault(__webpack_require__(/*! ./astext */ \"./src/astext.ts\"));\n\nvar _tree = _interopRequireDefault(__webpack_require__(/*! ./tree */ \"./src/tree.ts\"));\n\nvar _serialize = _interopRequireDefault(__webpack_require__(/*! ./serialize */ \"./src/serialize.ts\"));\n\nvar _types = __webpack_require__(/*! ./types */ \"./src/types.ts\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = {\n  asText: _astext.default,\n  asTree: _tree.default.fromRichText,\n  serialize: _serialize.default,\n  Elements: _types.NODE_TYPES\n};\n\n//# sourceURL=webpack://PrismicRichtext/./src/index.ts?");

/***/ }),

/***/ "./src/nodes.ts":
/*!**********************!*\
  !*** ./src/nodes.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ListBlockNode = exports.OrderedListBlockNode = exports.OrderedListItemBlockNode = exports.ListItemBlockNode = exports.BlockNode = exports.TextNode = exports.SpanNode = exports.Node = void 0;\n\nvar _uuid = _interopRequireDefault(__webpack_require__(/*! ./uuid */ \"./src/uuid.ts\"));\n\nvar _types = __webpack_require__(/*! ./types */ \"./src/types.ts\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass Node {\n  constructor(type, element, children) {\n    this.key = (0, _uuid.default)();\n    this.type = type;\n    this.element = element;\n    this.children = children;\n  }\n\n}\n\nexports.Node = Node;\n\nclass SpanNode extends Node {\n  constructor(start, end, type, text, children, element) {\n    super(type, element, children);\n    this.start = start;\n    this.end = end;\n    this.text = text;\n    this.children = children;\n  }\n\n  boundaries() {\n    return {\n      lower: this.start,\n      upper: this.end\n    };\n  }\n\n  isParentOf(node) {\n    return this.start <= node.start && this.end >= node.end;\n  }\n\n  setChildren(children) {\n    return new SpanNode(this.start, this.end, this.type, this.text, children, this.element);\n  }\n\n  static slice(node, start, end, text) {\n    return new SpanNode(start, end, node.type, text.slice(start, end), node.children, node.element);\n  }\n\n}\n\nexports.SpanNode = SpanNode;\n\nclass TextNode extends SpanNode {\n  constructor(start, end, text) {\n    const element = {\n      type: _types.NODE_TYPES.span,\n      start,\n      end,\n      text\n    };\n    super(start, end, _types.NODE_TYPES.span, text, [], element);\n  }\n\n}\n\nexports.TextNode = TextNode;\n\nclass BlockNode extends Node {\n  constructor(type, block, children = []) {\n    super(type, block, children);\n  }\n\n}\n\nexports.BlockNode = BlockNode;\n\nclass ListItemBlockNode extends BlockNode {\n  constructor(block, children) {\n    super(_types.NODE_TYPES.listItem, block, children);\n  }\n\n}\n\nexports.ListItemBlockNode = ListItemBlockNode;\n\nclass OrderedListItemBlockNode extends BlockNode {\n  constructor(block, children) {\n    super(_types.NODE_TYPES.oListItem, block, children);\n  }\n\n}\n\nexports.OrderedListItemBlockNode = OrderedListItemBlockNode;\n\nclass OrderedListBlockNode extends BlockNode {\n  constructor(block, children) {\n    super(_types.NODE_TYPES.oList, block, children);\n  }\n\n  addChild(node) {\n    const children = this.children.concat(node);\n    return new OrderedListBlockNode(this.element, children);\n  }\n\n}\n\nexports.OrderedListBlockNode = OrderedListBlockNode;\n\nclass ListBlockNode extends BlockNode {\n  constructor(block, children) {\n    super(_types.NODE_TYPES.list, block, children);\n  }\n\n  addChild(node) {\n    const children = this.children.concat(node);\n    return new ListBlockNode(this.element, children);\n  }\n\n}\n\nexports.ListBlockNode = ListBlockNode;\n\n//# sourceURL=webpack://PrismicRichtext/./src/nodes.ts?");

/***/ }),

/***/ "./src/richtext.ts":
/*!*************************!*\
  !*** ./src/richtext.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.RichTextBlock = void 0;\n\nvar _types = __webpack_require__(/*! ./types */ \"./src/types.ts\");\n\nclass RichTextBlock {\n  constructor(type, text, spans) {\n    this.type = type;\n    this.text = text;\n    this.spans = spans;\n  }\n\n  static isEmbedBlock(type) {\n    return type === _types.NODE_TYPES.embed;\n  }\n\n  static isImageBlock(type) {\n    return type === _types.NODE_TYPES.image;\n  }\n\n  static isList(type) {\n    return type === _types.NODE_TYPES.list;\n  }\n\n  static isOrderedList(type) {\n    return type === _types.NODE_TYPES.oList;\n  }\n\n  static isListItem(type) {\n    return type === _types.NODE_TYPES.listItem;\n  }\n\n  static isOrderedListItem(type) {\n    return type === _types.NODE_TYPES.oListItem;\n  }\n\n  static emptyList() {\n    return {\n      type: _types.NODE_TYPES.list,\n      spans: [],\n      text: ''\n    };\n  }\n\n  static emptyOrderedList() {\n    return {\n      type: _types.NODE_TYPES.oList,\n      spans: [],\n      text: ''\n    };\n  }\n\n}\n\nexports.RichTextBlock = RichTextBlock;\n\n//# sourceURL=webpack://PrismicRichtext/./src/richtext.ts?");

/***/ }),

/***/ "./src/serialize.ts":
/*!**************************!*\
  !*** ./src/serialize.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _tree = _interopRequireDefault(__webpack_require__(/*! ./tree */ \"./src/tree.ts\"));\n\nvar _nodes = __webpack_require__(/*! ./nodes */ \"./src/nodes.ts\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction fromRichText(richText, serialize, htmlSerializer) {\n  const tree = _tree.default.fromRichText(richText);\n\n  return tree.children.map((node, index) => {\n    return serializeNode(node, serialize, index, htmlSerializer);\n  });\n}\n\nfunction serializeNode(parentNode, serializer, index, htmlSerializer) {\n  function step(node, idx) {\n    const text = node instanceof _nodes.SpanNode ? node.text : null;\n    const serializedChildren = node.children.reduce((acc, node, i) => {\n      return acc.concat([step(node, i)]);\n    }, []);\n    const maybeSerialized = htmlSerializer && htmlSerializer(node.type, node.element, text, serializedChildren, idx);\n    return maybeSerialized || serializer(node.type, node.element, text, serializedChildren, idx);\n  }\n\n  return step(parentNode, index);\n}\n\nvar _default = fromRichText;\nexports.default = _default;\n\n//# sourceURL=webpack://PrismicRichtext/./src/serialize.ts?");

/***/ }),

/***/ "./src/tree.ts":
/*!*********************!*\
  !*** ./src/tree.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _flatten2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/flatten */ \"./node_modules/ramda/src/flatten.js\"));\n\nvar _sortBy2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/sortBy */ \"./node_modules/ramda/src/sortBy.js\"));\n\nvar _sortWith2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/sortWith */ \"./node_modules/ramda/src/sortWith.js\"));\n\nvar _init2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/init */ \"./node_modules/ramda/src/init.js\"));\n\nvar _last2 = _interopRequireDefault(__webpack_require__(/*! ramda/src/last */ \"./node_modules/ramda/src/last.js\"));\n\nvar _uuid = _interopRequireDefault(__webpack_require__(/*! ./uuid */ \"./src/uuid.ts\"));\n\nvar _richtext = __webpack_require__(/*! ./richtext */ \"./src/richtext.ts\");\n\nvar _types = __webpack_require__(/*! ./types */ \"./src/types.ts\");\n\nvar _nodes = __webpack_require__(/*! ./nodes */ \"./src/nodes.ts\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction sortByPriorities(nodes) {\n  return nodes.sort((nodeA, nodeB) => {\n    if (nodeA.isParentOf(nodeB)) {\n      return -1;\n    } else if (nodeB.isParentOf(nodeA)) {\n      return 1;\n    } else {\n      const result = _types.PRIORITIES[nodeA.type] - _types.PRIORITIES[nodeB.type];\n      return result === 0 ? nodeA.text.length - nodeB.text.length : result;\n    }\n  });\n}\n\nfunction sliceNode(text, elected, node) {\n  if (node.start < elected.start) {\n    return {\n      inner: _nodes.SpanNode.slice(node, elected.start, node.end, text),\n      outer: _nodes.SpanNode.slice(node, node.start, elected.start, text)\n    };\n  } else if (node.end > elected.end) {\n    return {\n      inner: _nodes.SpanNode.slice(node, node.start, elected.end, text),\n      outer: _nodes.SpanNode.slice(node, elected.end, node.end, text)\n    };\n  } else {\n    return {\n      inner: node\n    };\n  }\n}\n\nfunction partitionGroup(text, group) {\n  const partitioned = group.others.reduce(({\n    inner: innerAcc,\n    outer: outerAcc\n  }, node) => {\n    const slicedNode = sliceNode(text, group.elected, node);\n    return {\n      inner: innerAcc.concat(slicedNode.inner),\n      outer: slicedNode.outer ? outerAcc.concat(slicedNode.outer) : outerAcc\n    };\n  }, {\n    inner: [],\n    outer: []\n  });\n  const {\n    inner,\n    outer\n  } = partitioned;\n  const head = group.elected.setChildren(buildTreeAndFill(text, inner, group.elected.boundaries()));\n  return [head].concat(buildTree(text, outer));\n}\n\nfunction groupWith(p, nodes) {\n  return nodes.reduce((groups, node) => {\n    const previousGroup = (0, _last2.default)(groups);\n\n    if (previousGroup) {\n      const included = previousGroup.some(nodeGroup => nodeGroup.isParentOf(node));\n\n      if (included) {\n        return (0, _init2.default)(groups).concat([previousGroup.concat(node)]);\n      } else {\n        const previousNode = (0, _last2.default)(previousGroup);\n\n        if (previousNode && p(previousNode, node)) {\n          return (0, _init2.default)(groups).concat([previousGroup.concat(node)]);\n        } else {\n          return groups.concat([[node]]);\n        }\n      }\n    } else {\n      return [[node]];\n    }\n  }, []);\n}\n\nfunction groupNodes(nodes) {\n  const sortByStart = (nodeA, nodeB) => nodeA.start - nodeB.start;\n\n  const sortByEnd = (nodeA, nodeB) => nodeA.end - nodeB.end;\n\n  const sortedNodes = (0, _sortWith2.default)([sortByStart, sortByEnd], nodes);\n  return groupWith((nodeA, nodeB) => nodeA.end >= nodeB.start, sortedNodes);\n}\n\nfunction electNode(candidates) {\n  if (candidates.length === 0) {\n    throw new Error(\"Unable to elect node on empty list\");\n  } else {\n    const [elected, ...others] = sortByPriorities(candidates);\n    return {\n      elected,\n      others\n    };\n  }\n}\n\nfunction fill(text, nodes, boundaries) {\n  return nodes.reduce((acc, node, index) => {\n    let result = [];\n    const fillStart = index === 0 && node.start > boundaries.lower;\n    const fillEnd = index === nodes.length - 1 && boundaries.upper > node.end;\n\n    if (fillStart) {\n      const textNode = new _nodes.TextNode(boundaries.lower, node.start, text.slice(boundaries.lower, node.start));\n      result = result.concat(textNode);\n    } else {\n      const previousNode = nodes[index - 1];\n\n      if (previousNode) {\n        if (node.start > previousNode.end) {\n          const subtext = text.slice(previousNode.end, node.start);\n          const textNode = new _nodes.TextNode(previousNode.end, node.start, subtext);\n          result = result.concat(textNode);\n        }\n      }\n    }\n\n    result = result.concat(node);\n\n    if (fillEnd) {\n      const textNode = new _nodes.TextNode(node.end, boundaries.upper, text.slice(node.end, boundaries.upper));\n      result = result.concat(textNode);\n    }\n\n    return acc.concat(result);\n  }, []);\n}\n\nfunction buildTreeAndFill(text, nodes, boundaries) {\n  if (nodes.length > 0) {\n    const tree = buildTree(text, nodes);\n    return fill(text, tree, boundaries);\n  } else {\n    const subtext = text.slice(boundaries.lower, boundaries.upper);\n    return [new _nodes.TextNode(boundaries.lower, boundaries.upper, subtext)];\n  }\n}\n\nfunction buildTree(text, nodes) {\n  const sortedNodes = (0, _sortBy2.default)(node => node.start, nodes);\n  const groups = groupNodes(sortedNodes);\n  const postElection = groups.map(electNode);\n  const tree = (0, _flatten2.default)(postElection.map(group => partitionGroup(text, group)));\n  return (0, _sortBy2.default)(node => node.start, tree);\n}\n\nfunction processTextBlock(block) {\n  const nodes = block.spans.map(span => {\n    const text = block.text.slice(span.start, span.end);\n    return new _nodes.SpanNode(span.start, span.end, span.type, text, [], span);\n  });\n  const boundaries = {\n    lower: 0,\n    upper: block.text.length\n  };\n  return buildTreeAndFill(block.text, nodes, boundaries);\n}\n\nclass Tree {\n  static fromRichText(richText) {\n    return {\n      key: (0, _uuid.default)(),\n      children: richText.reduce((acc, block, index) => {\n        if (_richtext.RichTextBlock.isEmbedBlock(block.type) || _richtext.RichTextBlock.isImageBlock(block.type)) {\n          return acc.concat(new _nodes.BlockNode(block.type, block));\n        } else {\n          const textNodes = processTextBlock(block);\n          const previousBlock = acc[acc.length - 1];\n\n          if (_richtext.RichTextBlock.isListItem(block.type) && previousBlock && previousBlock instanceof _nodes.ListBlockNode) {\n            const listItem = new _nodes.ListItemBlockNode(block, textNodes);\n            const updatedPreviousBlock = previousBlock.addChild(listItem);\n            return (0, _init2.default)(acc).concat(updatedPreviousBlock);\n          } else if (_richtext.RichTextBlock.isOrderedListItem(block.type) && previousBlock && previousBlock instanceof _nodes.OrderedListBlockNode) {\n            const orderedListItem = new _nodes.OrderedListItemBlockNode(block, textNodes);\n            const updatedPreviousBlock = previousBlock.addChild(orderedListItem);\n            return (0, _init2.default)(acc).concat(updatedPreviousBlock);\n          } else if (_richtext.RichTextBlock.isListItem(block.type)) {\n            const listItem = new _nodes.ListItemBlockNode(block, textNodes);\n            const list = new _nodes.ListBlockNode(_richtext.RichTextBlock.emptyList(), [listItem]);\n            return acc.concat(list);\n          } else if (_richtext.RichTextBlock.isOrderedListItem(block.type)) {\n            const orderedListItem = new _nodes.OrderedListItemBlockNode(block, textNodes);\n            const orderedList = new _nodes.OrderedListBlockNode(_richtext.RichTextBlock.emptyOrderedList(), [orderedListItem]);\n            return acc.concat(orderedList);\n          } else {\n            return acc.concat(new _nodes.BlockNode(block.type, block, textNodes));\n          }\n        }\n      }, [])\n    };\n  }\n\n}\n\nexports.default = Tree;\n\n//# sourceURL=webpack://PrismicRichtext/./src/tree.ts?");

/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.PRIORITIES = exports.NODE_TYPES = void 0;\nconst NODE_TYPES = {\n  heading1: \"heading1\",\n  heading2: \"heading2\",\n  heading3: \"heading3\",\n  heading4: \"heading4\",\n  heading5: \"heading5\",\n  heading6: \"heading6\",\n  paragraph: \"paragraph\",\n  preformatted: \"preformatted\",\n  strong: \"strong\",\n  em: \"em\",\n  listItem: \"list-item\",\n  oListItem: \"o-list-item\",\n  list: \"group-list-item\",\n  oList: \"group-o-list-item\",\n  image: \"image\",\n  embed: \"embed\",\n  hyperlink: \"hyperlink\",\n  label: \"label\",\n  span: \"span\"\n};\nexports.NODE_TYPES = NODE_TYPES;\nconst PRIORITIES = {\n  [NODE_TYPES.heading1]: 4,\n  [NODE_TYPES.heading2]: 4,\n  [NODE_TYPES.heading3]: 4,\n  [NODE_TYPES.heading4]: 4,\n  [NODE_TYPES.heading5]: 4,\n  [NODE_TYPES.heading6]: 4,\n  [NODE_TYPES.paragraph]: 3,\n  [NODE_TYPES.preformatted]: 5,\n  [NODE_TYPES.strong]: 6,\n  [NODE_TYPES.em]: 6,\n  [NODE_TYPES.oList]: 1,\n  [NODE_TYPES.list]: 1,\n  [NODE_TYPES.listItem]: 1,\n  [NODE_TYPES.oListItem]: 1,\n  [NODE_TYPES.image]: 1,\n  [NODE_TYPES.embed]: 1,\n  [NODE_TYPES.hyperlink]: 3,\n  [NODE_TYPES.label]: 4,\n  [NODE_TYPES.span]: 7\n};\nexports.PRIORITIES = PRIORITIES;\n\n//# sourceURL=webpack://PrismicRichtext/./src/types.ts?");

/***/ }),

/***/ "./src/uuid.ts":
/*!*********************!*\
  !*** ./src/uuid.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = uuid;\n\nfunction uuid() {\n  var d = new Date().getTime();\n  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {\n    var r = (d + Math.random() * 16) % 16 | 0;\n    d = Math.floor(d / 16);\n    return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);\n  });\n  return uuid;\n}\n\n;\n\n//# sourceURL=webpack://PrismicRichtext/./src/uuid.ts?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/axa/Sites/prismic-richtext/src/index.ts */\"./src/index.ts\");\n\n\n//# sourceURL=webpack://PrismicRichtext/multi_./src/index.ts?");

/***/ })

/******/ });
});