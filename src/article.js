import NEWS from './news';
import DOM from './dom';

class Card {
  constructor(article) {
    this.article = NEWS.stories[article];
    this.card = DOM.card;
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

  sayHello() {
    console.log(this);
  }
}

export default Card;
