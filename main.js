'use strict';

const DOM = {
  slider: document.querySelector('.slider'),
  main: document.querySelector('.main'),
};


class Main {
  constructor() {
    this.apiKey = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8baaf90261984e748f990e495360e903';
    this.json = this.getJSON();
  }

  async getJSON() {
    const response = await fetch(this.apiKey);
    const data = response.json();
    return data;
  }

  async getSources() {
    const json = await this.getJSON();
    console.log(json.articles);
  }
}

DOM.slider.addEventListener('click', () => {
  DOM.slider.classList.toggle('slide');
});

const news = () => {
  const newNews = new Main();
  newNews.getSources();
};

news();
