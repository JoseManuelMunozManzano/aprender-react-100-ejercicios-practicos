import styled from 'styled-components';

export const Row = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  max-width: 900px;
  margin: auto;
  align-items: center;
`;

export const QuestionTxt = styled.p`
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 2px 2px 2px gray;
  text-align: center;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Box = styled.div`
  font-size: 3rem;
  padding-left: 39px;

  p {
    display: flex;
    align-items: center;

    button {
      margin-right: 14px;
      font-weight: bold;
      font-size: 2rem;
    }
  }
`;
