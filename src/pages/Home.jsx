import { useEffect, useState } from 'react';

import { getTrending } from 'api/api-trending';

import { TrendingList } from 'components/TrendingList';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      // setIsLoading(true);
      // setDisabled(false);
      try {
        const results = await getTrending();

        setMovies(results);

        // if (!hits.length) {
        //   toast.info('There are no images for your request.');
        //   setIsLoading(false);
        //   return;
        // }

        // setIsLoading(false);
      } catch (error) {
        toast.error(
          `${error.message}. Movies loading error. Restart the application.`
        );
        // setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);
  return (
    <main>
      <TrendingList data={movies} />
    </main>
  );
};

export default Home;
