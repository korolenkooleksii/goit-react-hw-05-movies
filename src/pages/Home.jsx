import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getTrending } from 'api/api-trending';

import { MoviesList } from 'components/MoviesList';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const results = await getTrending();
        if (!results.length) {
          toast.info('There are no movies for your request.');
          return;
        }
        setMovies(results);
      } catch (error) {
        toast.error(
          `${error.message}. Movies loading error. Restart the application.`
        );
      }
    })();
  }, []);
  return (
    <main>
      <MoviesList
        data={movies}
        message={'Trending today'}
        location={location}
      />
    </main>
  );
};

export default Home;
