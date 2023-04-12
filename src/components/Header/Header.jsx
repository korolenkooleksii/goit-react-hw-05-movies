import { Head, Nav, Link } from './Header.styled';

export const Header = () => {
  return (
    <Head>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
    </Head>
  );
};
