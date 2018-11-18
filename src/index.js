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
  const { slider } = DOM;
  const currentArticles = [...DOM.main.querySelectorAll('.currentArticle')];
  const newArticles = [createHTML(), createHTML()];
  slider.classList.toggle('move');
  currentArticles.forEach((i) => {
    i.classList.toggle('fadeIn');
  });
  currentArticles.addEventListener('transitionend', () => {
    newArticles.forEach((i) => {
      i.classList.add('fadeIn');
      i.classList.add('currentArticle');
    });
  });
}

DOM.slider.addEventListener('click', animate);


// I'M REMOVING THE ELEMENTS BEFORE THE "TRANSITIONEND" EVENT FIRES OFF
