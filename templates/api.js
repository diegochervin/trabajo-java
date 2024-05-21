// Reemplaza 'TU_API_KEY' con la clave de API que conseguiste de NewsAPI
const apiKey = '762de7a6b9ba474f8e79060340422c30';
const url = `https://newsapi.org/v2/top-headlines?country=ar&category=health&apiKey=${apiKey}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    displayNews(data.articles);
  })
  .catch(error => console.error('Fetch error:', error));

function displayNews(articles) {
  const newsContainer = document.getElementById('news-container');
  articles.forEach(article => {
    const articleElement = document.createElement('div');
    articleElement.classList.add('article');

    const title = document.createElement('h2');
    title.textContent = article.title;

    const description = document.createElement('p');
    description.textContent = article.description;

    const link = document.createElement('a');
    link.href = article.url;
    link.textContent = 'Leer más';
    link.target = '_blank';

    articleElement.appendChild(title);
    articleElement.appendChild(description);
    articleElement.appendChild(link);

    newsContainer.appendChild(articleElement);
  });
}