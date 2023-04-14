import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { CardMovie } from 'components/CardMovie';
import { Loader } from 'components/Loader';

import { getFullInfoMovie } from 'api/api-fullInfo-movie'; 

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FullInfo = () => {
  const { id } = useParams('');

  const [idMovie, setIdMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const results = await getFullInfoMovie(id);

        setIdMovie(results);
      } catch (error) {
        toast.error(
          `${error.message}. Movie loading error. Restart the application.`
        );
      }
    })();
  }, [id]);

  return (
    <main>
      <CardMovie data={idMovie} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default FullInfo;
