import DOM from './dom';
import NEWS from './news';
import Article from './article';

const hello = () => {
  const story = new Article();
  console.log(story);
  console.log(NEWS);
  console.log(Article);
};

// DOM MANIPULATION
DOM.slider.addEventListener('click', () => {
  DOM.slider.classList.toggle('slide');
});

hello();
