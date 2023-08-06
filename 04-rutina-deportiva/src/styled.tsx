import styled, { css } from 'styled-components';
import flecha from './assets/flecha.png';

const Btn = css`
  display: inline-block;
  cursor: pointer;
  background-image: url(${flecha});
  background-size: 100% 100%;
  width: 30px;
  height: 30px;
`;

const BorderRed = css`
  border: 4px solid red;
  z-index: 1;
`;

const BorderTrasparent = css`
  border: 4px solid transparent;
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

export const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

interface Props {
  $active: boolean;
}

export const Img = styled.img<Props>`
  ${({ $active }) => ($active ? BorderRed : BorderTrasparent)}
`;

export const BtnLeft = styled.span`
  ${Btn}
  margin-right: 10px;
`;

export const BtnRight = styled.span`
  ${Btn}
  transform: rotate(180deg);
  margin-left: 10px;
`;
