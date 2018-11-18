import DOM from './dom';
import NEWS from './news';
import Article from './article';

function createHTML() {
  NEWS.arrayPosition += 1;
  const article = new Article(NEWS.arrayPosition);
  const html = article.pic === null ? createHTML() : article.createArticle();
  return html;
}

function shuffleArticles(originalArticles, newArticles) {
  originalArticles.forEach(i => document.removeChild(i));
  newArticles.forEach(i => i.classList.add('currentArticle'));
}

function animate() {
  const { slider } = DOM;
  const currentArticles = [...DOM.main.querySelectorAll('.currentArticle')];
  const newArticles = [createHTML(), createHTML()];
  slider.classList.toggle('move');
  const animation = () => {
    currentArticles.forEach(i => i.classList.toggle('fadeIn'));
    newArticles.forEach(i => i.classList.toggle('fadeIn'));
  };
  shuffleArticles(currentArticles, newArticles);
  return animation;
}

DOM.slider.addEventListener('click', animate);
