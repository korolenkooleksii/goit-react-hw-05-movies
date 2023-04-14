import axios from 'axios';

const ENDPOINT = 'https://api.themoviedb.org/';
const KEY = '81f7e5d829987e856b2ed6841a3a514f';

axios.defaults.baseURL = `${ENDPOINT}`;
axios.defaults.params = {
  api_key: KEY,
};

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=81f7e5d829987e856b2ed6841a3a514f&language=en-US

export const getFullInfoMovie = async idMovie => {
  const { data } = await axios.get(`3/movie/${idMovie}?`);

  return data;
};

