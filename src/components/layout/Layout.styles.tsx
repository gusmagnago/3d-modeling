import { styled } from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`;

export const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  height: 100%;
  align-items: center;
  margin-top: 50px;
`;

export const Link = styled.div`
  margin-bottom: 20px;
  & a {
    text-decoration: none;
    color: #000000;
    text-transform: uppercase;
    font-size: 20px;
  }
`;
