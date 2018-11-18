'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var NEWS = {
  stories: [],
  arrayPosition: -1,
  apiKey: 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8baaf90261984e748f990e495360e903'
};

async function apiCall() {
  var data = await fetch(NEWS.apiKey);
  var json = data.json();
  return json;
}

(async function () {
  var json = await apiCall();
  var news = json.articles;
  NEWS.stories = [].concat(_toConsumableArray(news));
})();

exports.default = NEWS;