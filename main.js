'use strict';

const DOM = {
  slider: document.querySelector('.slider'),
  main: document.querySelector('.main'),
};

// NEWS
class Source {
  constructor() {
    this.apiKey = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8baaf90261984e748f990e495360e903';
  }

  async getJSON() {
    const response = await fetch(this.apiKey);
    const data = response.json();
    return data;
  }

  async findSrc(selection) {
    const jsonObj = await this.getJSON();
    const json = jsonObj.articles;
    return json[selection];
  }
}

// DOM MANIPULATION
DOM.slider.addEventListener('click', () => {
  DOM.slider.classList.toggle('slide');
});

// EVENTS

const news = () => {
  const newTry = new Source();
  console.log(newTry.findSrc(11));
};

news();

// CNBC, [1]
// Forbes, [4]
// MArketWatch, [5]
// Reuters, [7]
// Gizmodo, [8]
// WSJ, [10]
// NYT, [11]
// CNN [13]
