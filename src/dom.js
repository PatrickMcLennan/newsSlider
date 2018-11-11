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
DOM.slider.addEventListener('click', () => {
  DOM.slider.classList.toggle('slide');
  NEWS.storiesPosition += 1;
  const story = new Article(NEWS.storiesPosition);
  story.placeElement();
});

export default DOM;
