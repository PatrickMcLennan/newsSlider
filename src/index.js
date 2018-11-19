import DOM from './dom';
import NEWS from './news';
import Article from './article';

function createHTML() {
  NEWS.arrayPosition += 1;
  const article = new Article(NEWS.arrayPosition);
  const html = article.pic === null ? createHTML() : article.createArticle();
  return html;
}

function animateIn() {
  const articles = [createHTML(), createHTML()];
  articles.forEach((i) => {
    DOM.main.appendChild(i);
    i.classList.toggle('fadeIn');
    i.classList.toggle('currentArticle');
  });
}

function animateOut() {
  const { slider } = DOM;
  const currentArticles = [...DOM.main.querySelectorAll('.currentArticle')];
  // const newArticles = [createHTML(), createHTML()];
  slider.classList.toggle('move');
  currentArticles.forEach(i => i.classList.toggle('fadeIn'));
  setTimeout(() => {
    currentArticles.forEach(i => i.remove());
    animateIn();
  }, 425);
}

DOM.slider.addEventListener('click', animateOut);


// I'M REMOVING THE ELEMENTS BEFORE THE "TRANSITIONEND" EVENT FIRES OFF
