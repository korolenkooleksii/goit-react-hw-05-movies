import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
`;

export const Header = styled.header`
  border-bottom: 1px solid ${p => p.theme.colors.grey};
  box-shadow: ${p => p.theme.colors.shadow};
`;

export const Nav = styled.nav`
  display: flex;
  padding-left: 20px;
`;

export const Link = styled(NavLink)`
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  color: ${p => p.theme.colors.dark};

  &.active {
    color: ${p => p.theme.colors.orange};
  }
`;
