/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/article.js":
/*!************************!*\
  !*** ./src/article.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news */ \"./src/news.js\");\n\n\nclass Article {\n  constructor(position) {\n    this.article = _news__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stories[position];\n    // ARTICLE INFO\n    this.author = this.article.author;\n    this.content = this.article.content;\n    this.description = this.article.description;\n    this.date = this.article.date;\n    this.outlet = this.article.source.name;\n    this.title = this.article.title;\n    this.url = this.article.url;\n    this.pic = this.article.urlToImage;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\n\n\n//# sourceURL=webpack:///./src/article.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DOM = {\n  slider: document.querySelector('.slider'),\n  main: document.querySelector('.main'),\n  heading: document.querySelector('.heading'),\n  pic: document.querySelector('.heading__pic img'),\n  title: document.querySelector('.heading__header'),\n};\n\n// DOM MANIPULATION\nDOM.slider.addEventListener('click', () => {\n  DOM.slider.classList.toggle('slide');\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DOM);\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news */ \"./src/news.js\");\n/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article */ \"./src/article.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n\n(() => {\n  console.log(_news__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  console.log(_article__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  console.log(_dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n})();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/news.js":
/*!*********************!*\
  !*** ./src/news.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst NEWS = {\n  stories: [],\n  storiesPosition: -1,\n  apiKey: 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8baaf90261984e748f990e495360e903',\n};\n\nasync function apiCall() {\n  const data = await fetch(NEWS.apiKey);\n  const json = data.json();\n  return json;\n}\n\n(async () => {\n  const json = await apiCall();\n  const news = json.articles;\n  NEWS.stories = [...news];\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NEWS);\n\n\n//# sourceURL=webpack:///./src/news.js?");

/***/ })

/******/ });