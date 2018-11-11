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
  const { slider, main, currentArticle } = DOM;
  const newArticle = createHTML();
  main.appendChild(newArticle);
  const placedArticle = slider.classList.contains('slide') ? newArticle.classList.add('placeRight') : newArticle.classList.add('placeLeft');
  return placedArticle;

}

function animate() {
  const { slider, main, currentArticle } = DOM;
  const placedArticle = placeHTML();
  if (slider.classList.contains('slide')) {
    currentArticle.classList.add('placeLeft');
    placedArticle.classList.toggle('placeLeft');
  } else {
    currentArticle.classList.add('placeRight');
    placedArticle.classList.toggle('placeRight');
  }
  main.removeChild(currentArticle);
  slider.classList.toggle('slide');
}

DOM.slider.addEventListener('click', animate);
