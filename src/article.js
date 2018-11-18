import NEWS from './news';
import DOM from './dom';

class Article {
  constructor(position) {
    this.article = NEWS.stories[position];
    this.slider = DOM.slider;
    // ARTICLE INFO
    this.author = this.article.author;
    this.date = this.article.date;
    this.outlet = this.article.name;
    this.url = this.article.url;
    this.pic = this.article.urlToImage;
    this.title = this.article.title;
  }

  createImg() {
    const img = document.createElement('img');
    const url = this.pic;
    img.setAttribute('url', url);
    img.classList.add('article__pic');
    return img;
  }

  createTitle() {
    const json = this.title;
    const title = document.createElement('h3');
    title.classList.add('article__title');
    title.innerText = json;
    return title;
  }

  createAuthor() {
    const json = this.author;
    const author = document.createElement('h5');
    author.classList.add('article__info__author');
    author.innerText = json;
    return author;
  }

  createOutlet() {
    const json = this.outlet;
    const outlet = document.createElement('h4');
    outlet.classList.add('outlet');
    outlet.innerText = json;
    return outlet;
  }

  createArticle() {
    const article = document.createElement('article');
    const elements = [this.createImg(), this.createTitle(), this.createAuthor(), this.createOutlet()];
    elements.forEach(i => article.appendChild(i));
    DOM.main.appendChild(article);
    return article;
  }
}

export default Article;
