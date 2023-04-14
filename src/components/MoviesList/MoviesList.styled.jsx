import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

export const TextTrends = styled.h1`
  margin: 0;
  padding-top: 20px;
  padding-left: 40px;
  color: ${p => p.theme.colors.dark};
`;

export const TrendsList = styled.ul`
  margin: 0;
  margin-top: 20px;
  padding-left: 60px;
`;

export const Trend = styled.li`
  margin: 0;
  color: ${p => p.theme.colors.dark};
`;

export const Link = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  color: ${p => p.theme.colors.blue};
  transition: all 300ms ease-out;

  :hover {
    color: ${p => p.theme.colors.orange};
    text-decoration: underline;
  }
`;
