import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'components/api/Api';
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import { HomeContainer, HomeTitle } from './Home.styled';

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const location = useLocation();
    const [, setError] = useState(null);
    useEffect(() => {
      getTrendingMovies()
        .then(setTrendingMovies)
        .catch(error => setError(error));
    }, []);
  
    return (
      <HomeContainer>
        <main>
          <HomeTitle>Trending movies</HomeTitle>
          {trendingMovies && (
            <TrendingMovies movies={trendingMovies} location={location} />
          )}
        </main>
      </HomeContainer>
    );
  };
  
  export default Home;