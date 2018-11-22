'use strict';

var _dom = require('./dom');

var _dom2 = _interopRequireDefault(_dom);

var _news = require('./news');

var _news2 = _interopRequireDefault(_news);

var _article = require('./article');

var _article2 = _interopRequireDefault(_article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function createHTML() {
  _news2.default.arrayPosition += 1;
  var article = new _article2.default(_news2.default.arrayPosition);
  var html = article.pic === null ? createHTML() : article.createArticle();
  return html;
}

function animateOut() {
  var slider = _dom2.default.slider;

  var currentArticles = [].concat(_toConsumableArray(_dom2.default.main.querySelectorAll('.currentArticle')));
  slider.classList.toggle('move');
  currentArticles.forEach(function (i) {
    return i.classList.toggle('fadeIn');
  });
  setTimeout(function () {
    currentArticles.forEach(function (i) {
      return i.remove();
    });
    createHTML();
    createHTML();
  }, 800);
}

_dom2.default.slider.addEventListener('click', animateOut);

// I'M REMOVING THE ELEMENTS BEFORE THE "TRANSITIONEND" EVENT FIRES OFF