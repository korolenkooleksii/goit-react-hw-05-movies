import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header';

import { ToastContainer } from 'react-toastify';

import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <ToastContainer />
    </Container>
  );
};
