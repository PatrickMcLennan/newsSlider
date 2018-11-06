'use strict';

const DOM = {
  slider: document.querySelector('.slider'),
  main: document.querySelector('.main'),
  heading: document.querySelector('.heading'),
  pic: document.querySelector('.heading__pic img'),
  title: document.querySelector('.heading__header'),
};

// NEWS
class ApiCall {
  constructor() {
    this.apiKey = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8baaf90261984e748f990e495360e903';
    this.stories = [];
  }

  async getJSON() {
    const call = await fetch(this.apiKey);
    const json = call.json();
    return json.articles;
  }
}

// DOM MANIPULATION
DOM.slider.addEventListener('click', () => {
  DOM.slider.classList.toggle('slide');
});

async function getNews() {
  const news = new ApiCall();
  const stories = await news.getJSON();
  console.log(stories);
}

getNews();
