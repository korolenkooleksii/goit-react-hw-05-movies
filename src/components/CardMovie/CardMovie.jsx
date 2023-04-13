import { useLocation } from 'react-router-dom';

import { TbArrowNarrowLeft } from 'react-icons/tb';

import {
  InfoByMovie,
  Poster,
  Text,
  AboutMovie,
  Title,
  Genres,
  WrapInfo,
  WrapPoster,
  WrapAdd,
  AddList,
  Link,
  AddItem,
  LinkBack,
} from './CardMovie.styled';

const BASE_URL = 'http://image.tmdb.org/t/p/';
const LOGO_SIZE = 'w500';

export const CardMovie = ({ data }) => {
  const location = useLocation();

  const { poster_path, title, genres, overview, release_date, vote_average } =
    data;

  return (
    <>
      
      <LinkBack to={location.state?.from ?? '/' }>
        <TbArrowNarrowLeft/>Go back</LinkBack>
      {title && (
        <>
          <InfoByMovie>
            <WrapPoster>
              <Poster src={BASE_URL + LOGO_SIZE + poster_path} alt={title} />
            </WrapPoster>
            <WrapInfo>
              <Title>
                {title} ({release_date.slice(0, 4)})
              </Title>
              <Text>User Score: {(vote_average * 10).toFixed(2)}%</Text>
              <AboutMovie>Overview</AboutMovie>
              <Text>{overview}</Text>
              <Genres>Genres</Genres>
              <Text>{genres.map(genre => genre.name).join(' ')}</Text>
            </WrapInfo>
          </InfoByMovie>
          <WrapAdd>
            <Text>Additional information</Text>
            <AddList>
              <AddItem>
                <Link to="cast">Cast</Link>
              </AddItem>
              <AddItem>
                <Link to="reviews">Reviews</Link>
              </AddItem>
            </AddList>
          </WrapAdd>
        </>
      )}
    </>
  );
};
