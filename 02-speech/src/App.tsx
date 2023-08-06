import { useState } from 'react';
import paragraphs from './data/romeo-y-julieta.json';
import { Btn, Row } from './styles/styles';

function App() {
  const [currentParagraph, setCurrentParagraph] = useState(0);

  const nextParagraph = () => {
    if (currentParagraph !== paragraphs.length - 1) {
      setCurrentParagraph(currentParagraph + 1);
    }
  };

  const prevParagraph = () => {
    if (currentParagraph !== 0) {
      setCurrentParagraph(currentParagraph - 1);
    }
  };

  return (
    <>
      <Row>
        <Btn onClick={prevParagraph}>Anterior</Btn>
        <Btn onClick={nextParagraph}>Siguiente</Btn>
        <p>{paragraphs[currentParagraph]}</p>
      </Row>
    </>
  );
}

export default App;
