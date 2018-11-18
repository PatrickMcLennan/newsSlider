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

function shuffleArticles(originalArticles, newArticles) {
  originalArticles.forEach(function (i) {
    return document.removeChild(i);
  });
  newArticles.forEach(function (i) {
    return i.classList.add('currentArticle');
  });
}

function animate() {
  var slider = _dom2.default.slider;

  var currentArticles = [].concat(_toConsumableArray(_dom2.default.main.querySelectorAll('.currentArticle')));
  var newArticles = [createHTML(), createHTML()];
  slider.classList.toggle('move');
  var animation = function animation() {
    currentArticles.forEach(function (i) {
      return i.classList.toggle('fadeIn');
    });
    newArticles.forEach(function (i) {
      return i.classList.toggle('fadeIn');
    });
  };
  shuffleArticles(currentArticles, newArticles);
  return animation;
}

_dom2.default.slider.addEventListener('click', animate);