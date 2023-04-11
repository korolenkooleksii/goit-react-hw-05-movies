import { Route, Routes, } from 'react-router-dom';

import { Container, Header, Nav, Link } from './App.styled';
import Home from 'pages/Home';
import FullInfo from 'pages/FullInfo';
import NotFound from 'pages/NotFound';

import { ToastContainer } from 'react-toastify';


export const App = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<FullInfo />} />
        <Route path="/movies" element={<div>MOVIES</div>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
