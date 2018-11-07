'use strict';

const DOM = {
  slider: document.querySelector('.slider'),
  main: document.querySelector('.main'),
  heading: document.querySelector('.heading'),
  pic: document.querySelector('.heading__pic img'),
  title: document.querySelector('.heading__header'),
};

// GETTING THE NEWS
let news = [];

async function apiCall() {
  const apiKey = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8baaf90261984e748f990e495360e903';
  const data = await fetch(apiKey);
  const json = data.json();
  return json;
}

async function queueNews() {
  const json = await apiCall();
  const stories = json.articles;
  news = [...stories];
}

// CREATING DOM CARDS
class Card {
  constructor(article) {
    this.src = news[article];
    this.author = this.src.author;
    this.content = this.src.content;
    this.description = this.src.description;
    this.date = this.src.date;
    this.outlet = this.src.source.name;
    this.title = this.src.title;
    this.url = this.src.url;
    this.pic = this.src.urlToImage;
  }
}

const newCard = (num) => {
  const card = new Card(num);
  console.log(card);
};

// DOM MANIPULATION
DOM.slider.addEventListener('click', () => {
  DOM.slider.classList.toggle('slide');
});

// CALL THE API AS SOON AS THE PAGE LOADS
queueNews();
