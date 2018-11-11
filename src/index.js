import DOM from './dom';
import NEWS from './news';
import Article from './article';

function createHTML() {
  let { arrayPosition: story } = NEWS;
  story += 1;
  const article = new Article(story);
  const html = article.pic === null ? createHTML() : article.createArticle();
  return html;
}

// function placeHTML() {
//   const { slider } = DOM;
//   const newArticle = createHTML();
//   const placedArticle = slider.classList.contains('slide') ? newArticle.classList.add('placeRight') : newArticle.classList.add('placeLeft');
//   console.log(placedArticle);
// }

function animate() {
  const { slider, main, currentArticle } = DOM;
  const placedArticle = createHTML();
  const articles = [currentArticle, placedArticle];
  if (slider.classList.contains('slide')) {
    articles.forEach(i => i.classList.toggle('placeLeft'));
  } else {
    articles.forEach(i => i.classList.toggle('placeRight'));
  }
  main.parentNode.removeChild(currentArticle);
  slider.classList.toggle('slide');
}

DOM.slider.addEventListener('click', animate);
