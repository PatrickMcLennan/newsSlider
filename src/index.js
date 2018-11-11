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
  const { slider, main } = DOM;
  const currentArticle = main.getElementsByTagName('section');
  const newArticle = placeHTML();
  const [moveLeft, moveRight] = ['placeLeft', 'placeRight'];
  if (slider.classList.contains('slide')) {
    currentArticle.classList.add(moveLeft);
    newArticle.classList.toggle(moveLeft);
  } else {
    currentArticle.classList.add(moveRight);
    newArticle.classList.toggle(moveRight);
  }
  main.removeChild(currentArticle);
}

DOM.slider.addEventListener('click', animate);
