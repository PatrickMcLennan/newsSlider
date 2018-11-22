import DOM from './dom';
import NEWS from './news';
import Article from './article';

function createHTML() {
  NEWS.arrayPosition += 1;
  const article = new Article(NEWS.arrayPosition);
  const html = article.pic === null ? createHTML() : article.createArticle();
  return html;
}

function animateOut() {
  const { slider } = DOM;
  const currentArticles = [...DOM.main.querySelectorAll('.currentArticle')];
  slider.classList.toggle('move');
  currentArticles.forEach(i => i.classList.toggle('fadeIn'));
  setTimeout(() => {
    currentArticles.forEach(i => i.remove());
    createHTML();
    createHTML();
  }, 800);
}

DOM.slider.addEventListener('click', animateOut);


// I'M REMOVING THE ELEMENTS BEFORE THE "TRANSITIONEND" EVENT FIRES OFF
