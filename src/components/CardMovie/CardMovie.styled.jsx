import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const InfoByMovie = styled.div`
  padding: 40px;
  display: flex;
  align-items: center;
  gap: 40px;
  border-bottom: 1px solid ${p => p.theme.colors.grey};
  box-shadow: ${p => p.theme.colors.shadow};
  color: ${p => p.theme.colors.dark};
`;

export const WrapPoster = styled.div`
  width: 350px;
  height: 400px;
  overflow: hidden;
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const Title = styled.h1``;

export const AboutMovie = styled.h2``;

export const Genres = styled.h3``;

export const WrapInfo = styled.div``;

export const Text = styled.p`
  margin: 0;
  font-weight: 500;
`;

export const WrapAdd = styled.div`
  padding: 20px 40px;
  border-bottom: 1px solid ${p => p.theme.colors.grey};
  box-shadow: ${p => p.theme.colors.shadow};

`;

export const AddList = styled.ul`
  margin: 0;
  margin-top: 10px;
  padding-left: 40px;
`;

export const AddItem = styled.li`
  margin: 5px;
  color: ${p => p.theme.colors.dark};
`;

export const Link = styled(NavLink)`
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: ${p => p.theme.colors.blue};
  transition: all 300ms ease-out;

  :hover {
    color: ${p => p.theme.colors.orange};
    text-decoration: underline;
  }
`;
