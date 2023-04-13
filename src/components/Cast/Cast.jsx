import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Loader } from 'components/Loader';

import { getCastMovie } from 'api/api-cast-movie';

import {
  ActorCard,
  ActorFoto,
  ActorName,
  CastList,
  WrapActorCard,
} from './Cast.styled';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseURL = 'http://image.tmdb.org/t/p/';
const logoSizes = 'w154';
const defaultFoto = 'https://via.placeholder.com/200x300?text=no+photo';

export const Cast = () => {
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
    <>
      <CastList>
        {castMovie.map(({ name, profile_path, id }) => (
          <ActorCard key={id}>
            <WrapActorCard>
              <ActorFoto
                src={
                  profile_path
                    ? baseURL + logoSizes + profile_path
                    : defaultFoto
                }
                alt={name}
                width="154"
              />
            </WrapActorCard>
            <ActorName>{name}</ActorName>
          </ActorCard>
        ))}
      </CastList>
      {isLoading && <Loader />}
    </>
  );
};
