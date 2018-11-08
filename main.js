'use strict';

const DOM = {
  slider: document.querySelector('.slider'),
  main: document.querySelector('.main'),
  heading: document.querySelector('.heading'),
  pic: document.querySelector('.heading__pic img'),
  title: document.querySelector('.heading__header'),
};

const NEWS = {
  stories: [],
  articleCount: -1,
};

// GET THE NEWS AS SOON AS THE PAGE LOADS
async function apiCall() {
  const apiKey = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8baaf90261984e748f990e495360e903';
  const data = await fetch(apiKey);
  const json = data.json();
  return json;
}

// (async () => {
//   const json = await apiCall();
//   const news = json.articles;
//   NEWS.stories = [...news];
// })();

// CREATE DOM CARDS ON THE C.T.A
class Card {
  constructor(article) {
    this.article = NEWS.stories[article];
    this.author = this.article.author;
    this.content = this.article.content;
    this.description = this.article.description;
    this.date = this.article.date;
    this.outlet = this.article.source.name;
    this.title = this.article.title;
    this.url = this.article.url;
    this.pic = this.article.urlToImage;
  }
}

// const newCard = (num) => {
//   const card = new Card(num);
//   console.log(card);
// };

// DOM MANIPULATION
DOM.slider.addEventListener('click', () => {
  DOM.slider.classList.toggle('slide');
});
