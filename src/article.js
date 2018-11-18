import NEWS from './news';
import DOM from './dom';

// class Article {
//   constructor(position) {
//     this.article = NEWS.stories[position];
//     this.slider = DOM.slider;
//     // ARTICLE INFO
//     this.author = this.article.author;
//     this.content = this.article.content;
//     this.description = this.article.description;
//     this.date = this.article.date;
//     this.outlet = this.article.source.name;
//     this.title = this.article.title;
//     this.url = this.article.url;
//     this.pic = this.article.urlToImage;
//   }

//   createArticle() {
//     const newArticle = document.createElement('article');
//     newArticle.innerHTML = `
//       <div class="article__pic">
//         <img src=${this.pic} alt="${this.title}">
//         <h5 class="article__pic__outlet">${this.outlet}</h5>
//         <h4 class="article__pic__title">${this.title}</h4>
//       </div>

//       <div class="article__info">
//         <div class="article__info__content">
//         <p>
//         ${this.content}
//         </p>
//         </div>
//         <div class="article__info__links">
//           <h5 class="article__info__author"><span>Written By :</span> ${this.author}</h5>
//           <h5 class="article__info__date">${this.date}</h5>
//         </div>
//       </div>
//     `;
//     return newArticle;
//   }
// }

// export default Article;


class Article {
  constructor(position) {
    this.article = [NEWS.stories[position]];
    this.slider = DOM.slider;
    // ARTICLE INFO
    this.author = this.article.author;
    this.date = this.article.date;
    this.outlet = this.article.name;
    this.url = this.article.url;
    this.pic = this.article.urlToImage;
    this.title = this.article.title;
  }

  createArticle() {
    const article = document.createElement('article');
    DOM.main.appendChild(article);
    return article;
  }

  createImg() {
    const img = document.createElement('img');
    const url = this.pic;
    img.setAttribute('url', url);
    return img;
  }

  createText(json,) {
    const
  }
}
