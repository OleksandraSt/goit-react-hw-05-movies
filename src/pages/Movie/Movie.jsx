import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import { getMovies } from 'components/api/Api';
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import { MovieTitle } from './Movie.styled';

const Movie = () => {
    const [searchMovies, setSearchMovies] = useState([]);
    const [, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('query') ?? '';
    const location = useLocation();
    useEffect(() => {
      if (!searchQuery) {
        setSearchMovies([]);
        return;
      }
      if (searchQuery.trim() === '' || searchQuery === '') {
        alert('Please, enter a valid query');
        return;
      }
      getMovies(searchQuery.toLowerCase().trim())
        .then(movies => {
          setSearchMovies(movies);
          if (movies.length === 0) {
            alert('Sorry, there are no movies that fit this search');
          }
          setError(null);
        })
        .catch(error => {
          console.log(error.message);
          setSearchMovies([]);
          setError(error);
        });
    }, [searchQuery]);
  
    const onSubmit = value => {
      setSearchParams(value !== '' ? { query: value } : {});
    };
  
    return (
      <main>
        <section>
          <MovieTitle>Search movies</MovieTitle>
          <SearchForm onSubmit={onSubmit} value={searchQuery} />
          {searchMovies?.length > 0 && (
            <TrendingMovies movies={searchMovies} location={location} />
          )}
        </section>
      </main>
    );
  };
  
  export default Movie;