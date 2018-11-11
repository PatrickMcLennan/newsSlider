import DOM from './dom';
import NEWS from './news';
import Article from './article';

function createHTML() {
  NEWS.arrayPosition += 1;
  const article = new Article(NEWS.arrayPosition);
  const html = article.pic === null ? createHTML() : article.createArticle();
  return html;
}

const sliderRight = () => {
  let slidRight = false;
  if (DOM.slider.classList.contains('slide')) {
    slidRight = true;
  }
  return slidRight;
};

function placeHTML() {
  const { main, slider } = DOM;
  const newArticle = createHTML();
  main.appendChild(newArticle);
  sliderRight() === false ? newArticle.classList.add('placeLeft') : newArticle.classList.add('placeRight');
  return newArticle;
}

function animate() {
  const { main, slider } = DOM;
  const currentArticle = main.getElementsByTagName('section');
  const newArticle = placeHTML();
}

DOM.slider.addEventListener('click', placeHTML);
