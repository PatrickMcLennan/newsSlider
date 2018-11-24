import NEWS from './news';
import DOM from './dom';

class Article {
  constructor(position) {
    this.article = NEWS.stories[position];
    this.slider = DOM.slider;
    // ARTICLE INFO
    this.author = this.article.author;
    this.date = this.article.publishedAt;
    this.outlet = this.article.source.name;
    this.url = this.article.url;
    this.pic = this.article.urlToImage;
    this.title = this.article.title;
  }

  createImg() {
    const img = document.createElement('img');
    const url = this.pic;
    img.setAttribute('src', url);
    img.classList.add('article__pic');
    return img;
  }

  createTitle() {
    const json = this.title;
    const title = document.createElement('h3');
    const span = document.createElement('span');
    title.appendChild(span);
    title.classList.add('article__title');
    span.innerText = json;
    return title;
  }

  createFigure() {
    const figure = document.createElement('figure');
    const elements = [this.createImg(), this.createTitle()];
    figure.classList.add('article__figure');
    elements.forEach(i => figure.appendChild(i));
    return figure;
  }

  createAuthor() {
    const json = this.author;
    const author = document.createElement('h5');
    author.classList.add('article__author');
    author.innerText = `- ${json}`;
    return author;
  }

  createOutlet() {
    const json = this.outlet;
    const outlet = document.createElement('h4');
    outlet.classList.add('article__outlet');
    outlet.innerText = json;
    return outlet;
  }

  createDate() {
    const json = this.date;
    const month = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec'][(json.substring(5, 7)) - 1];
    const year = `20${json.substring(2, 4)}`;
    const day = json.substring(8, 10);
    const date = document.createElement('h5');
    date.classList.add('article__date');
    date.innerText = `${month} ${day}, ${year}`;
    return date;
  }

  createArticle() {
    const article = document.createElement('article');
    const elements = [this.createFigure(), this.createAuthor(), this.createOutlet(), this.createDate()];
    elements.forEach(i => article.appendChild(i));
    DOM.main.appendChild(article);
    article.classList.add('article');
    article.classList.add('fadeIn');
    article.classList.add('currentArticle');
    elements.forEach(i => article.appendChild(i));
    return article;
  }
}

export default Article;
