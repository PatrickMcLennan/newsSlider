const NEWS = {
  stories: [],
  storiesPosition: -1,
};

async function apiCall() {
  const apiKey = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8baaf90261984e748f990e495360e903';
  const data = await fetch(apiKey);
  const json = data.json();
  return json;
}

(async () => {
  const json = await apiCall();
  const news = json.articles;
  NEWS.stories = [...news];
})();

export default NEWS;
