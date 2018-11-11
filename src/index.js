import DOM from './dom';
import NEWS from './news';
import Article from './article';

function create() {
  NEWS.arrayPosition += 1;
  const article = new Article(NEWS.arrayPosition);
  const html = article.pic === null ? create() : article.createArticle();
  console.log(html);
}

DOM.slider.addEventListener('click', create);
