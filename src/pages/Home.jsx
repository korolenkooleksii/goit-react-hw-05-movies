import { useEffect, useState } from 'react';

import { getTrending } from 'api/api-trending';

import { TrendingList } from 'components/TrendingList';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

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
      <TrendingList data={movies} />
    </main>
  );
};

export default Home;
