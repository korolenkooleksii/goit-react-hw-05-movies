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
} from './CardMovie.styled';

const baseURL = 'http://image.tmdb.org/t/p/';
const logoSizes = 'w500';

export const CardMovie = ({ data }) => {
  const { poster_path, title, genres, overview, release_date, vote_average } =
    data;
  

  return (
    <>
      {title && (
        <>
          <InfoByMovie>
            <WrapPoster>
              <Poster src={baseURL + logoSizes + poster_path} alt={title} />
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
              <AddItem><Link to="cast">Cast</Link></AddItem>
              <AddItem><Link to="reviews">Reviews</Link></AddItem>
            </AddList>
          </WrapAdd>
        </>
      )}
    </>
  );
};
