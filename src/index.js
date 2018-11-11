import DOM from './dom';
import NEWS from './news';
import Article from './article';

function create() {
  NEWS.storiesPosition += 1;
  const article = new Article(NEWS.arrayPosition);
  const html = article.createArticle();
  console.log('hello');
  console.log(html);
}

DOM.slider.addEventListener('click', create);
