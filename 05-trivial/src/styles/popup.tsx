import styled from 'styled-components';

interface IPopUp {
  $visible: boolean;
}

export const Popup = styled.div<IPopUp>`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: ${({ $visible }) => ($visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;

  div {
    border-radius: 20px;
    border: 4px solid black;
    max-width: 600px;
    padding: 30px;
    background-color: white;
  }
`;
