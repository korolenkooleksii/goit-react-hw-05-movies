import { useEffect, useState } from 'react';

import { getTrending } from 'api/api-trending';

import { TrendingList } from 'components/TrendingList';
import { Loader } from 'components/Loader';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const results = await getTrending();
        if (!results.length) {
          toast.info('There are no movies for your request.');
          setIsLoading(false);
          return;
        }
        setMovies(results);
        setIsLoading(false);
      } catch (error) {
        toast.error(
          `${error.message}. Movies loading error. Restart the application.`
        );
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <main>
      <TrendingList data={movies} />
      {isLoading && <Loader />}
    </main>
  );
};

export default Home;
