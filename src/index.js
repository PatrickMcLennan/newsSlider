import DOM from './dom';
import NEWS from './news';
import Article from './article';

function create() {
  NEWS.arrayPosition += 1;
  const article = new Article(NEWS.arrayPosition);
  const html = article.pic === null ? create() : article.createArticle();
  return html;
}

function slide() {
  const html = create();
  const { main, slider } = DOM;
  const currentArticle = main.children;
  console.log(currentArticle);
  slider.classList.toggle('slide');
}

DOM.slider.addEventListener('click', slide);
