import DOM from './dom';
import NEWS from './news';
import Article from './article';

function createHTML() {
  NEWS.arrayPosition += 1;
  const article = new Article(NEWS.arrayPosition);
  const html = article.pic === null ? createHTML() : article.createArticle();
  return html;
}

function placeHTML() {
  const { main, slider } = DOM;
  const newArticle = createHTML();
  main.appendChild(newArticle);
  const placedArticle = slider.classList.contains('slide') ? newArticle.classList.add('placeRight') : newArticle.classList.add('placeLeft');
  return placedArticle;
}

function animate() {
  const { main, slider } = DOM;
  const currentArticle = main.getElementsByTagName('section');
  const newArticle = placeHTML();
}

DOM.slider.addEventListener('click', animate);
