import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  max-width: 1080px;
  margin: auto;
  column-gap: 2%;
`;

export const Box = styled(Link)`
  text-decoration: none;
  color: black;
  text-align: center;

  img {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  max-width: 1200px;
  margin: auto;

  img {
    width: 100%;
  }
`;

export const Pagination = styled.div`
  text-align: center;

  a {
    display: inline-block;
    padding: 7px;
  }
`;
