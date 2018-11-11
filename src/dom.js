import Article from './article';
import NEWS from './news';

const DOM = {
  slider: document.querySelector('.slider'),
  main: document.querySelector('.main'),
  heading: document.querySelector('.heading'),
  pic: document.querySelector('.heading__pic img'),
  title: document.querySelector('.heading__header'),
};

// DOM MANIPULATION

function slideArticle() {
  const { slider } = DOM;
  DOM.slider.classList.toggle('slide');
  NEWS.storiesPosition += 1;
  const article = new Article(NEWS.storiesPosition);
  slider.classList.contains('slide') ? article.classList.add('slideLeft') : article.classList.add('slideRight');
}
DOM.slider.addEventListener('click', slideArticle);

export default DOM;
