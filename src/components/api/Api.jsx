import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '7651f4fc4c55634ce2fb0f6883d09fb5';
const TRENGING_MOVIES = '/trending/movie/day';

export const getTrendingMovies = async () => {
    const { data } = await axios(TRENGING_MOVIES, {
      params: {
        api_key: API_KEY,
      },
    });

    const moviesResult = movies => {
        return movies.map(
          ({ id, title, poster_path: posterPath, release_date: releaseDate }) => ({
            id,
            title,
            posterPath,
            releaseDate,
          })
        );
      };
      return moviesResult(data.results);
    };

export const getMovieById = async movieId => {
    const { data } = await axios(`/movie/${movieId}`, {
          params: {
            api_key: API_KEY,
            language: 'en-US',
          },
        });

    const {
            title,
            poster_path: posterPath,
            release_date: releaseDate,
            genres,
            overview,
            vote_average: voteAverage,
          } = data;
          return { title, posterPath, releaseDate, genres, overview, voteAverage };
        };

export const getCast = async movieId => {
  const { data } = await axios(`/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  const actorsResult = actors => {
    return actors.map(({ id, name, profile_path: profilePath, character }) => ({
      id,
      name,
      profilePath,
      character,
    }));
  };
  return actorsResult(data.cast);
};

export const getReviews = async movieId => {
    const { data } = await axios(`/movie/${movieId}/reviews`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    const reviewsResult = reviews => {
      return reviews.map(({ id, author, content }) => ({ id, author, content }));
    };
    return reviewsResult(data.results);
  };

export const getMovies = async query => {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query,
      page: 1,
      include_adult: false,
    },
  });
  const moviesResult = movies => {
    return movies.map(
      ({ id, title, poster_path: posterPath, release_date: releaseDate }) => ({
        id,
        title,
        posterPath,
        releaseDate,
      })
    );
  };
  return moviesResult(data.results);
};