import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CardMovie } from 'components/CardMovie';
import { Loader } from 'components/Loader';

import { getFullInfoMovie } from 'api/api-fullinfo-movie';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FullInfo = () => {
  const { id } = useParams('');

  const [idMovie, setIdMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    const fetchFullInfoMovie = async () => {
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
    };

    fetchFullInfoMovie();
  }, [id]);

  return (
    <main>
      <CardMovie data={idMovie} />
      {isLoading && <Loader/>}
    </main>
  );
};

export default FullInfo;
