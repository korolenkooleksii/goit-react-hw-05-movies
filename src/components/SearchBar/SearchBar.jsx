import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

import { MoviesList } from 'components/MoviesList';

import { getSearchMovie } from 'api/api-search-movies';

import { SearchForm, SearchButton, SearchInput } from './SearchBar.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SearchBar = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query' ?? '');

  const location = useLocation();

  useEffect(() => {
    if (!query) return;

    (async () => {
      try {
        const results = await getSearchMovie(query);
        if (!results.length) {
          toast.info('There are no movies for your request.');
          return;
        }
        setMovies(results);
      } catch (error) {
        toast.error(
          `${error.message}. Movies loading error. Restart the application.`
        );
      }
    })();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    if (e.target.elements.text.value === '') {
      toast.error('Enter movie title.');
      return;
    }

    const form = e.currentTarget;
    setSearchParams({ query: form.elements.text.value.trim() });

    form.reset();
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter movie title"
          name="text"
        />
        <SearchButton type="submit">
          <BsSearch />
        </SearchButton>
      </SearchForm>
      {movies && <MoviesList data={movies} location={location} />}
    </>
  );
};
