import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import {
  NavigationLink,
  AppHeader,
  NavigationList,
  NavigationItem,
} from './App.styled';

const Home = lazy(() => import('pages/Home/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Movie = lazy(() => import('pages/Movie/Movie'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const NotFound = lazy(()=>import('pages/NotFound/NotFound'));

export const App = () => {
  return (
    <>
      <AppHeader>
        <nav>
          <NavigationList>
            <li>
              {' '}
              <NavigationLink to="/" end>
                {' '}
                Home
              </NavigationLink>
            </li>
            <NavigationItem>
              {' '}
              <NavigationLink to="/movies">Movies</NavigationLink>
            </NavigationItem>
          </NavigationList>
        </nav>
      </AppHeader>

      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Suspense>
    </>
  );
};

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
