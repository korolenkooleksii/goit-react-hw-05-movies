import axios from 'axios';

// https://api.themoviedb.org/3/trending/all/day?api_key=81f7e5d829987e856b2ed6841a3a514f

const ENDPOINT = 'https://api.themoviedb.org/';
const KEY = '81f7e5d829987e856b2ed6841a3a514f';

axios.defaults.baseURL = `${ENDPOINT}`;
axios.defaults.params = {
  // media_type: 'movie',
  // time_window: 'week',
  api_key: KEY,
};

export const getTrending = async () => {
  const {
    data: { results },
  } = await axios.get(`3/trending/movie/week?`);

  return results;
};
