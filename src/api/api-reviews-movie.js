import axios from 'axios';

const ENDPOINT = 'https://api.themoviedb.org/';
const KEY = '81f7e5d829987e856b2ed6841a3a514f';

axios.defaults.baseURL = `${ENDPOINT}`;
axios.defaults.params = {
  api_key: KEY,
};

export const getReviewsMovie = async idMovie => {
  const {
    data: { results },
  } = await axios.get(`3/movie/${idMovie}/reviews?`);

  return results;
};
