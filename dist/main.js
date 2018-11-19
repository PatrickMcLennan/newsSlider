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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news */ \"./src/news.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\nclass Article {\n  constructor(position) {\n    this.article = _news__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stories[position];\n    this.slider = _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].slider;\n    // ARTICLE INFO\n    this.author = this.article.author;\n    this.date = this.article.publishedAt;\n    this.outlet = this.article.source.name;\n    this.url = this.article.url;\n    this.pic = this.article.urlToImage;\n    this.title = this.article.title;\n  }\n\n  createImg() {\n    const img = document.createElement('img');\n    const url = this.pic;\n    img.setAttribute('src', url);\n    img.classList.add('article__pic');\n    return img;\n  }\n\n  createTitle() {\n    const json = this.title;\n    const title = document.createElement('h3');\n    title.classList.add('article__title');\n    title.innerText = json;\n    return title;\n  }\n\n  createAuthor() {\n    const json = this.author;\n    const author = document.createElement('h5');\n    author.classList.add('article__author');\n    author.innerText = json;\n    return author;\n  }\n\n  createOutlet() {\n    const json = this.outlet;\n    const outlet = document.createElement('h4');\n    outlet.classList.add('article__outlet');\n    outlet.innerText = json;\n    return outlet;\n  }\n\n  createDate() {\n    const json = this.date;\n    const month = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec'][(json.substring(5, 7)) - 1];\n    const year = `20${json.substring(2, 4)}`;\n    const day = json.substring(8, 10);\n    const date = document.createElement('h5');\n    date.classList.add('article__date');\n    date.innerText = `${month} ${day}, ${year}`;\n    return date;\n  }\n\n  createArticle() {\n    const article = document.createElement('article');\n    const elements = [this.createImg(), this.createTitle(), this.createAuthor(), this.createOutlet(), this.createDate()];\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].main.appendChild(article);\n    article.classList.add('article');\n    elements.forEach(i => article.appendChild(i));\n    return article;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\n\n\n//# sourceURL=webpack:///./src/article.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DOM = {\n  slider: document.querySelector('.slider'),\n  main: document.querySelector('main'),\n  currentArticle: document.querySelector('.currentArticle'),\n  heading: document.querySelector('.heading'),\n  pic: document.querySelector('.heading__pic img'),\n  title: document.querySelector('.heading__header'),\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DOM);\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news */ \"./src/news.js\");\n/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article */ \"./src/article.js\");\n\n\n\n\nfunction createHTML() {\n  _news__WEBPACK_IMPORTED_MODULE_1__[\"default\"].arrayPosition += 1;\n  const article = new _article__WEBPACK_IMPORTED_MODULE_2__[\"default\"](_news__WEBPACK_IMPORTED_MODULE_1__[\"default\"].arrayPosition);\n  const html = article.pic === null ? createHTML() : article.createArticle();\n  return html;\n}\n\nfunction animateIn() {\n  const articles = [createHTML(), createHTML()];\n  articles.forEach((i) => {\n    i.classList.toggle('fadeIn');\n    i.classList.toggle('currentArticle');\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].main.appendChild(i);\n  });\n}\n\nfunction animateOut() {\n  const { slider } = _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  const currentArticles = [..._dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].main.querySelectorAll('.currentArticle')];\n  // const newArticles = [createHTML(), createHTML()];\n  slider.classList.toggle('move');\n  currentArticles.forEach(i => i.classList.toggle('fadeIn'));\n  setTimeout(() => {\n    currentArticles.forEach(i => i.remove());\n    animateIn();\n  }, 425);\n}\n\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].slider.addEventListener('click', animateOut);\n\n\n// I'M REMOVING THE ELEMENTS BEFORE THE \"TRANSITIONEND\" EVENT FIRES OFF\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/news.js":
/*!*********************!*\
  !*** ./src/news.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst NEWS = {\n  stories: [],\n  arrayPosition: -1,\n  apiKey: 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8baaf90261984e748f990e495360e903',\n};\n\nasync function apiCall() {\n  const data = await fetch(NEWS.apiKey);\n  const json = data.json();\n  return json;\n}\n\n(async () => {\n  const json = await apiCall();\n  const news = json.articles;\n  NEWS.stories = [...news];\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NEWS);\n\n\n//# sourceURL=webpack:///./src/news.js?");

/***/ })

/******/ });