'use strict';

// 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8baaf90261984e748f990e495360e903';

const DOM = {
  slider: document.querySelector('.slider'),
  main: document.querySelector('.main'),
};

// NEWS
class ApiCall {

  constructor(choice) {
    this.apiKey = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8baaf90261984e748f990e495360e903';
    this.pic = '';
    this.title = '';
    this.content = '';
    this.url = '';
    this.author = '';
    this.choice = choice;
  }

  async getJSON() {
    const call = await fetch(this.apiKey);
    const json = call.json();
    return json;
  }

  async pullData(choice) {
    const allData = await this.getJSON();
    const chosen = allData.articles[choice];
    this.pic = chosen.urlToImage;
    this.title = chosen.title;
    this.content = chosen.content;
    this.url = chosen.url;
    this.author = chosen.author;
    console.log(this);
  }
}

// DOM MANIPULATION
DOM.slider.addEventListener('click', () => {
  DOM.slider.classList.toggle('slide');
});

const newNews = () => {
  const newTry = new ApiCall();
  newTry.pullData(5);
};

newNews();
