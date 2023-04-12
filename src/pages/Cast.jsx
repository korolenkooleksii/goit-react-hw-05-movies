import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Loader } from 'components/Loader';
import { CastList } from 'components/CastList';

import { getCastMovie } from 'api/api-cast-movie';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cast = () => {
  const { id } = useParams('');

  const [isLoading, setIsLoading] = useState(false);
  const [castMovie, setCastMovie] = useState([]);

  useEffect(() => {

    const fetchCastMovie = async () => {
      setIsLoading(true);


      try {
        const results = await getCastMovie(id);

        setCastMovie(results);
        setIsLoading(false);
      } catch (error) {
        toast.error(
          `${error.message}. Info loading error. Restart the application.`
        );
        setIsLoading(false);
      }
    };

    fetchCastMovie();
  }, [id]);

  return (
    <main>
      <CastList data={castMovie} />
      {isLoading && <Loader />}
    </main>
  )
};

export default Cast;
