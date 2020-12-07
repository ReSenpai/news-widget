const russianNewsApi = 'http://newsapi.org/v2/top-headlines?country=ru&apiKey=efbb712ca15d41b8b7f57df9f8fdf4c8';
const req = new Request(russianNewsApi);

const newsApi = {
    async getNews() {
        try {
            const response = await fetch(req);
            const data = response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }
}

export default newsApi;