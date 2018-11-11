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

// function placeArticle() {
//   const { slider, main } = DOM;
//   const article = createArticle();
//   main.appendChild(article);
//   slider.classList.contains('slide') ? article.style.transform = 'translateX(100vw)' : article.style.transform = 'translateX(-100vw)';
// }

// function slideArticles() {
//   const { slider } = DOM;
//   DOM.slider.classList.toggle('slide');
//   NEWS.storiesPosition += 1;
//   const article = new Article(NEWS.storiesPosition);
//   console.log(article);
//   slider.classList.contains('slide') ? article.classList.add('slideLeft') : article.classList.add('slideRight');
// }

function create() {
  NEWS.storiesPosition += 1;
  const article = new Article(NEWS.storiesPosition);
  const html = article.createArticle();
  console.log(html);
}

DOM.slider.addEventListener('click', create());

export default DOM;
