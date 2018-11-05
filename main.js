'use strict';

// VARIABLES
const DOM = {
  slider: document.querySelector('.slider'),
  main: document.querySelector('.main'),
};

// NEWS
class Source {
  constructor() {
    this.apiKey = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8baaf90261984e748f990e495360e903';
    this.json = this.getJSON();
  }

  async getJSON() {
    const response = await fetch(this.apiKey);
    const data = response.json();
    return data;
  }
}

async function news() {
  const src = new Source();
  const json = await src.json;
  console.log(json.articles);
}

// DOM MANIPULATION
DOM.slider.addEventListener('click', () => {
  DOM.slider.classList.toggle('slide');
});

// EVENTS
document.onload = news();
