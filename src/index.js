import DOM from './dom';
import NEWS from './news';
import Article from './article';

function create() {
  NEWS.arrayPosition += 1;
  const article = new Article(NEWS.arrayPosition);
  const html = article.pic === null ? create() : article.createArticle();
  return html;
}

function getDirection(newArt, currentArt, slider) {
  if (slider.classList.contains('slide')) {
    currentArt.style.transform = 'translateX(-100vw)';
    newArt.style.transform = 'translateX(-100vw)';
  } else {
    currentArt.style.transform = 'translateX(100vw)';
    newArt.style.transform = 'translateX(100vw)';
  }
}

function animate() {
  const newArticle = create();
  const { main, slider } = DOM;
  const currentArticle = main.getElementsByTagName('section');
  getDirection(newArticle, currentArticle, slider);
  slider.classList.toggle('slide');
  document.removeChild(currentArticle);
}

DOM.slider.addEventListener('click', animate);
