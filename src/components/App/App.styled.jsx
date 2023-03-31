import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const AppHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const NavigationItem = styled.li`
  color: black;
`;

export const NavigationLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 24px;
  color: black;
  text-decoration: none;
  &.active {
    color: white;
    background: rgb(255, 0, 44);
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    background: rgb(255, 0, 44);
`;