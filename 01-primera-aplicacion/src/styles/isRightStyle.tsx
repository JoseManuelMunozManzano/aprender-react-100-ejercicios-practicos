import styled, { css } from 'styled-components';

interface Props {
  $isright: boolean;
}

export const IsRightStyle = styled.div<Props>`
  ${({ $isright }) =>
    $isright
      ? css`
          background-color: green;
          width: 200px;
          height: 50px;
        `
      : css`
          background-color: red;
          width: 250px;
          height: 50px;
        `}
`;

interface InputStyleProps {
  $mymaxlength: number;
}

export const InputStyle = styled.input.attrs<InputStyleProps>((props) => ({
  type: 'password',
  maxLength: props.$mymaxlength || 5,
}))<InputStyleProps>`
  color: blue;
`;
