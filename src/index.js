import DOM from './dom';
import NEWS from './news';
import Article from './article';

function createHTML() {
  NEWS.arrayPosition += 1;
  const article = new Article(NEWS.arrayPosition);
  const html = article.pic === null ? createHTML() : article.createArticle();
  return html;
}

function inWithTheNew(parent) {
  const newArticles = [createHTML(), createHTML()];
  DOM.main.removeChild(parent);
  newArticles.forEach((i) => {
    DOM.main.appendChild(i);
    i.classList.toggle('fadeIn');
    i.classList.toggle('currentClass');
  });
}

function outWithTheOld() {
  const { slider } = DOM;
  const currentArticles = [...DOM.main.querySelectorAll('.currentArticle')];
  slider.classList.toggle('move');
  currentArticles.forEach((i) => {
    i.addEventListener('transitionend', inWithTheNew(i));
    i.classList.toggle('fadeIn');
  });
}

DOM.slider.addEventListener('click', outWithTheOld);


// I'M REMOVING THE ELEMENTS BEFORE THE "TRANSITIONEND" EVENT FIRES OFF
