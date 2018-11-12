import DOM from './dom';
import NEWS from './news';
import Article from './article';

function createHTML() {
  NEWS.arrayPosition += 1;
  const article = new Article(NEWS.arrayPosition);
  const html = article.pic === null ? createHTML() : article.createArticle();
  return html;
}

function shuffleArticles(originalArticle, placedArticle) {
  DOM.main.removeChild(originalArticle);
  DOM.main.appendChild(placedArticle);
  placedArticle.classList.add('currentArticle');
}

function animate() {
  const { slider } = DOM;
  const currentArticle = DOM.main.querySelector('.currentArticle');
  const placedArticle = createHTML();
  const articles = [currentArticle, placedArticle];
  slider.classList.toggle('move');
  const animation = slider.classList.contains('move') ? articles.forEach(i => i.classList.add('placeLeft')) : articles.forEach(i => i.classList.add('placeRight'));
  shuffleArticles(currentArticle, placedArticle);
  return animation;
}

DOM.slider.addEventListener('click', animate);
