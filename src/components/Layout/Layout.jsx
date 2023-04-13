import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';

import { Loader } from 'components/Loader';
import { Header } from 'components/Header';
import { ToastContainer } from 'react-toastify';

import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </Container>
  );
};
