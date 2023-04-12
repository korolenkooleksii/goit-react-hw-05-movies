import { useState, useEffect } from 'react';

export const CardMovie = ({ data }) => {
  const [movie, setMovie] = useState(null);
  console.log('data - ', data);

  const { poster_path, title, genres, overview, release_date, vote_average } =
    data;

  // const names = students.map(student => student.name);

  // const listOfGenres = genres =>
  //   genres.reduce((acc, genre) => acc.push(...genre.name), []);

  // useEffect(() => {
  //   if (genres) {
  //     console.log(listOfGenres());
  //   }

  // }, [genres]);

  // if (genres) {
  //   const listOfGenres = genres.map(genre => genre.name).join(' ');

  // }

  return (
    <>
      <p>Full Info about movie</p>
      {title && (
        <div>
          <div>
            <img src={poster_path} alt={title} />
          </div>
          <div>
            <h1>
              {title} ({Number.parseInt(release_date)})
            </h1>
            <p>User Score: {vote_average * 10}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{genres.map(genre => genre.name).join(' ')}</p>
          </div>
        </div>
      )}
    </>
  );
};
