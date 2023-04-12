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

  // console.log(results);

    return results;

  // return [
  //   {
  //     adult: false,
  //     backdrop_path: '/ytdebEE0ndYLSTEctPgh8e0vaBs.jpg',
  //     id: 76600,
  //     title: 'Avatar: The Way of Water',
  //     original_language: 'en',
  //     original_title: 'Avatar: The Way of Water',
  //     overview:
  //       'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
  //     poster_path: '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
  //     media_type: 'movie',
  //     genre_ids: [878, 12, 28],
  //     popularity: 6686.292,
  //     release_date: '2022-12-14',
  //     video: false,
  //     vote_average: 7.743,
  //     vote_count: 6884,
  //   },
  // ];

};
