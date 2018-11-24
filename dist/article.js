'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _news = require('./news');

var _news2 = _interopRequireDefault(_news);

var _dom = require('./dom');

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Article = function () {
  function Article(position) {
    _classCallCheck(this, Article);

    this.article = _news2.default.stories[position];
    this.slider = _dom2.default.slider;
    // ARTICLE INFO
    this.author = this.article.author;
    this.date = this.article.publishedAt;
    this.outlet = this.article.source.name;
    this.url = this.article.url;
    this.pic = this.article.urlToImage;
    this.title = this.article.title;
  }

  _createClass(Article, [{
    key: 'createImg',
    value: function createImg() {
      var img = document.createElement('img');
      var url = this.pic;
      img.setAttribute('src', url);
      img.classList.add('article__pic');
      return img;
    }
  }, {
    key: 'createTitle',
    value: function createTitle() {
      var json = this.title;
      var title = document.createElement('h3');
      var span = document.createElement('span');
      title.appendChild(span);
      title.classList.add('article__title');
      span.innerText = json;
      return title;
    }
  }, {
    key: 'createFigure',
    value: function createFigure() {
      var figure = document.createElement('figure');
      var elements = [this.createImg(), this.createTitle()];
      figure.classList.add('article__figure');
      elements.forEach(function (i) {
        return figure.appendChild(i);
      });
      return figure;
    }
  }, {
    key: 'createAuthor',
    value: function createAuthor() {
      var json = this.author;
      var author = document.createElement('h5');
      author.classList.add('article__author');
      author.innerText = '- ' + json;
      return author;
    }
  }, {
    key: 'createOutlet',
    value: function createOutlet() {
      var json = this.outlet;
      var outlet = document.createElement('h4');
      outlet.classList.add('article__outlet');
      outlet.innerText = json;
      return outlet;
    }
  }, {
    key: 'createDate',
    value: function createDate() {
      var json = this.date;
      var month = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec'][json.substring(5, 7) - 1];
      var year = '20' + json.substring(2, 4);
      var day = json.substring(8, 10);
      var date = document.createElement('h5');
      date.classList.add('article__date');
      date.innerText = month + ' ' + day + ', ' + year;
      return date;
    }
  }, {
    key: 'createArticle',
    value: function createArticle() {
      var article = document.createElement('article');
      var elements = [this.createFigure(), this.createAuthor(), this.createOutlet(), this.createDate()];
      elements.forEach(function (i) {
        return article.appendChild(i);
      });
      _dom2.default.main.appendChild(article);
      article.classList.add('article');
      article.classList.add('fadeIn');
      article.classList.add('currentArticle');
      elements.forEach(function (i) {
        return article.appendChild(i);
      });
      return article;
    }
  }]);

  return Article;
}();

exports.default = Article;