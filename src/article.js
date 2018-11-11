import NEWS from './news';
import DOM from './dom';

class Article {
  constructor(position) {
    this.article = NEWS.stories[position];
    this.slider = DOM.slider;
    // ARTICLE INFO
    this.author = this.article.author;
    this.content = this.article.content;
    this.description = this.article.description;
    this.date = this.article.date;
    this.outlet = this.article.source.name;
    this.title = this.article.title;
    this.url = this.article.url;
    this.pic = this.article.urlToImage;
  }

  placeArticle() {
    const side = this.slider.classList.contains('slide') ? 'placeRight' : 'placeLeft';
    return side;
  }

  createArticle() {
    const newArticle = document.createElement('section');
    newArticle.classList.add('article');
    newArticle.classList.add(this.placeArticle());
    newArticle.innerHTML = `
      <div class="article__pic">
        <img src=${this.pic} alt="${this.title}">
        <h5 class="article__pic__outlet">${this.outlet}</h5>
        <h4 class="article__pic__title">${this.title}</h4>
      </div>

      <div class="article__info">
        <div class="article__info__content">
        <p>
        ${this.content}
        </p>
        </div>
        <div class="article__info__links">
          <h5 class="article__info__author"><span>Written By :</span> ${this.author}</h5>
          <h5 class="article__info__date">${this.date}</h5>
        </div>
      </div>
    `;
    return newArticle;
  }
}

export default Article;
