import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CardMovie } from 'components/CardMovie';

import { getFullInfoMovie } from 'api/api-fullinfo-movie';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FullInfo = () => {
  const { id } = useParams('');

  const [idMovie, setIdMovie] = useState({});

  useEffect(() => {

    const fetchFullInfoMovie = async () => {
      // setIsLoading(true);
      // setDisabled(false);
      try {
        const results = await getFullInfoMovie(id);

        setIdMovie(results);

        // if (!hits.length) {
        //   toast.info('There are no images for your request.');
        //   setIsLoading(false);
        //   return;
        // }

        // setIsLoading(false);
      } catch (error) {
        toast.error(
          `${error.message}. Movie loading error. Restart the application.`
        );
        // setIsLoading(false);
      }
    };

    fetchFullInfoMovie();
  }, [id]);

  return <>
    <CardMovie data={ idMovie} />
  </>;
};

export default FullInfo;
