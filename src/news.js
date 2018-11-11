const NEWS = {
  stories: [],
  arrayPosition: -1,
  apiKey: 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8baaf90261984e748f990e495360e903',
};

async function apiCall() {
  const data = await fetch(NEWS.apiKey);
  const json = data.json();
  return json;
}

(async () => {
  const json = await apiCall();
  const news = json.articles;
  NEWS.stories = [...news];
})();

export default NEWS;
