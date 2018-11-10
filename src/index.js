import NEWS from './news';
import Article from './article';

const hello = () => {
  const story = new Article(4);
  story.sayHello();
};

hello();
