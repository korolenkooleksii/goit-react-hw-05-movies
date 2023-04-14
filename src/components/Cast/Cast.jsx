import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCastMovie } from 'api/api-cast-movie';

import {
  ActorCard,
  ActorFoto,
  ActorName,
  CastList,
  TextInfo,
  WrapActorCard,
} from './Cast.styled';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BASE_URL = 'http://image.tmdb.org/t/p/';
const LOGO_SIZE = 'w154';
const defaultFoto = 'https://via.placeholder.com/200x300?text=no+photo';

const Cast = () => {
  const { id } = useParams('');
  const [castMovie, setCastMovie] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const results = await getCastMovie(id);

        setCastMovie(results);
      } catch (error) {
        toast.error(
          `${error.message}. Info loading error. Restart the application.`
        );
      }
    })();
  }, [id]);

  return (
    <>
      {castMovie.length > 0 && <CastList>
        {castMovie.map(({ name, profile_path, id }) => (
          <ActorCard key={id}>
            <WrapActorCard>
              <ActorFoto
                src={
                  profile_path
                    ? BASE_URL + LOGO_SIZE + profile_path
                    : defaultFoto
                }
                alt={name}
                width="154"
              />
            </WrapActorCard>
            <ActorName>{name}</ActorName>
          </ActorCard>
        ))}
      </CastList>}
      {!castMovie.length && <TextInfo>We don`t have any cast fro this movie.</TextInfo>} 
      
    </>
  );
};

export default Cast;
