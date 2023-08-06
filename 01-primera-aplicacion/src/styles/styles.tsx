import styled, { css } from 'styled-components';

const desktopStartWidth = 996;
const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

const SalmonBackColor = css`
  background-color: salmon;
`;

export const BoxStyle = styled.div`
  width: 70px;
  height: 70px;
  margin: 50px;
  ${SalmonBackColor}

  ${mobile} {
    width: 100%;
  }
`;

export const PanelStyle = styled.button`
  padding: 20px;
  ${SalmonBackColor}

  &:hover {
    background-color: palegreen;
  }
`;

export const RectangleStyle = styled(BoxStyle)`
  width: 200px;
`;
