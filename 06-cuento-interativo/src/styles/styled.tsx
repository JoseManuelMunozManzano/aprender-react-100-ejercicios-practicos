import styled, { createGlobalStyle } from 'styled-components';
import { IDoor } from '../data/scenes';

interface ISceneProps {
  $back: string;
  $width: number;
  $height: number;
}

interface ITxt {
  $x: number;
}

interface IStDoor {
  $data: IDoor;
}

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    margin: 0;
  }
`;

export const Scene = styled.div<ISceneProps>`
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  background-image: url(${({ $back }) => $back});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: black;
  position: relative;
  margin: auto;
`;

export const Txt = styled.div<ITxt>`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  border: 2px solid gray;
  box-shadow: 3px 3px 3px black;
  position: absolute;
  z-index: 2;
  top: 3px;
  left: ${({ $x }) => $x}%;
  margin: 10px;
  padding: 7px;
`;

export const Door = styled.div<IStDoor>`
  position: absolute;
  left: ${({ $data }) => $data.x}%;
  top: ${({ $data }) => $data.y}%;
  width: ${({ $data }) => $data.width}%;
  height: ${({ $data }) => $data.height}%;
  border: 1px solid red;
  cursor: pointer;
`;
