import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { CardMovie } from 'components/CardMovie';
import { Loader } from 'components/Loader';

import { getFullInfoMovie } from '../api/api-fullInfo-movie';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FullInfo = () => {
  const { id } = useParams('');

  const [idMovie, setIdMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    (async () => {
      setIsLoading(true);

      try {
        const results = await getFullInfoMovie(id);

        setIdMovie(results);
        setIsLoading(false);
      } catch (error) {
        toast.error(
          `${error.message}. Movie loading error. Restart the application.`
        );
        setIsLoading(false);
      }
    }) ();

    // fetchFullInfoMovie();
  }, [id]);

  return (
    <main>
      <CardMovie data={idMovie} />
      {isLoading && <Loader />}
      <Outlet/>
    </main>
  );
};

export default FullInfo;
