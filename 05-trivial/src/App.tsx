import { useState } from 'react';

import { questions, IQuestion } from './data/questions';
import { Box, Img, QuestionTxt, Row } from './styles/styled';
import { Popup } from './styles/popup';
import { shuffleArray } from './utils/shuffle';

const q = shuffleArray<IQuestion>(questions);

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [visible, setVisible] = useState(false);

  const clikedAnswer = (isRight: boolean): void => {
    const isWinner = isRight && currentQuestion == questions.length - 1;
    isWinner && setVisible(true);

    setCurrentQuestion(
      isRight
        ? currentQuestion < questions.length - 1
          ? currentQuestion + 1
          : 0
        : currentQuestion > 0
        ? currentQuestion
        : 0
    );
  };

  const question = q[currentQuestion];

  return (
    <>
      <h1>Trivial</h1>
      <QuestionTxt>{question.question}</QuestionTxt>
      <Row>
        <Box>
          {shuffleArray(question.answers).map((answer, index) => (
            <p key={index}>
              <button onClick={() => clikedAnswer(answer.isRight)}>X</button> {answer.txt}
            </p>
          ))}
        </Box>
        <Img src={question.img} />
      </Row>
      <Popup $visible={visible}>
        <div>
          <p>Enhorabuena, has ganado</p>
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setVisible(false);
            }}
          >
            Volver a empezar
          </button>
        </div>
      </Popup>
    </>
  );
};

export default App;
