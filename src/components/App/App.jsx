import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout';

const Home = lazy(() => import("../../pages/Home"));
const Movies = lazy(() => import('../../pages/Movies'));
const FullInfo = lazy(() => import('../../pages/FullInfo'));
const NotFound = lazy(() => import('../../pages/NotFound'));
const Cast = lazy (()=>import("../Cast/Cast"))
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<FullInfo />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
