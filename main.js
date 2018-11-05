'use strict';

const DOM = {
  slider: document.querySelector('.slider'),
  main: document.querySelector('.main'),
  pic: document.querySelector('.main__pic'),
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

  async pullData() {
    const allData = await this.getJSON();
    const chosen = allData.articles[this.choice];
    this.pic = chosen.urlToImage;
    this.title = chosen.title;
    this.content = chosen.content;
    this.url = chosen.url;
    this.author = chosen.author;
    return this;
  }
}

// DOM MANIPULATION
DOM.slider.addEventListener('click', () => {
  DOM.slider.classList.toggle('slide');
});

async function newNews(choice) {
  const src = new ApiCall(choice);
  await src.pullData();
  DOM.pic.style.backgroundImage = `url(${src.pic})`;
  console.log(src.pic);
}

newNews(7);
