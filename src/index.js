import DOM from './dom';
import NEWS from './news';
import Article from './article';

function createHTML() {
  NEWS.arrayPosition += 1;
  const article = new Article(NEWS.arrayPosition);
  const html = article.pic === null ? createHTML() : article.createArticle();
  return html;
}

function animate() {
  const { slider, main } = DOM;
  const currentArticle = DOM.main.querySelector('.currentArticle');
  const placedArticle = createHTML();
  main.appendChild(placedArticle);
  slider.classList.toggle('slide');
  const articles = [currentArticle, placedArticle];
  const animation = slider.classList.contains('slide') ? articles.forEach(i => i.classlist.toggle('placeLeft')) : articles.forEach(i => i.classList.toggle('placeRight'));
  return animation;
}

DOM.slider.addEventListener('click', animate);
