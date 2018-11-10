const DOM = {
  slider: document.querySelector('.slider'),
  main: document.querySelector('.main'),
  heading: document.querySelector('.heading'),
  pic: document.querySelector('.heading__pic img'),
  title: document.querySelector('.heading__header'),
  card: {
    pic: document.querySelector('.card__pic'),
    outlet: document.querySelector('.card__outlet'),
    title: document.querySelector('.card__title'),
  },
};

// DOM MANIPULATION
DOM.slider.addEventListener('click', () => {
  DOM.slider.classList.toggle('slide');
});

export default DOM;
