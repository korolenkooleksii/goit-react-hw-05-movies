import { Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout';


import Home from 'pages/Home';
import Movies from 'pages/Movies';
import FullInfo from 'pages/FullInfo';
import NotFound from 'pages/NotFound';
import { Cast } from 'components/Cast';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<FullInfo />} >
          <Route path='cast' element={ <Cast/>} />
          <Route path='reviews' element={ <div>REVIEWS</div>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
      
    </Routes>
  );
};
