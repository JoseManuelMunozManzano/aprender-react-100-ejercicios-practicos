import { useState } from 'react';

import data from './data/data.json';

import { ComponenteMultiple } from './components/ComponenteMultiple/ComponenteMultiple';
import { Area } from './components/Area/Area';
import { Box } from './components/Box/Box';
import { DatoAlPadre } from './components/DatoAlPadre/DatoAlPadre';
import { Dollars } from './components/Dollars/Dollars';
import { Grades } from './components/Grades/Grades';
import { Hello } from './components/Hello/Hello';
import { Images } from './components/Images/Images';
import { Post } from './components/Post/Post';
import { BoxStyle } from './styles/styles';
import { InputStyle } from './styles/isRightStyle';
import { GlobalStyle } from './styles/globalStyle';

interface Data {
  id: number;
  nombre: string;
  edad: number;
}

const myData: Data[] = data;

function App() {
  const [datoDelPadre, setDatoDelPadre] = useState<number>();
  const [dato1, setDato1] = useState<string>('0');
  const [dato2, setDato2] = useState<string>('0');

  const changePadre = (value: number): void => {
    setDatoDelPadre(value);
  };

  const calculoAreaHandler = (a: number, b: number): number => {
    return a * b;
  };

  return (
    <>
      <GlobalStyle />
      <Dollars />
      <Grades />
      <Area calculoArea={calculoAreaHandler} />
      <Images />
      <Hello title="José Manuel" />
      <Box>Texto 1</Box>
      <Box>Texto 2</Box>
      <DatoAlPadre onSomeEvent={changePadre} />
      <p>{datoDelPadre}</p>
      <Post postTitle="Viaje a la Luna" author="Julio Verne">
        Texto 1
      </Post>

      <input type="text" onChange={(e) => setDato1(e.target.value)} placeholder="0" />
      <input type="text" onChange={(e) => setDato2(e.target.value)} placeholder="0" />
      <ComponenteMultiple opcion={1} dato1={+dato1} />
      <ComponenteMultiple opcion={2} dato1={+dato1} />
      <ComponenteMultiple opcion={3} dato1={+dato1} dato2={+dato2} />
      <ComponenteMultiple opcion={4} dato1={+dato1} />
      <ComponenteMultiple opcion={5} dato1={+dato1} />

      <br />

      <div>
        {myData
          .filter((d) => d.edad < 44)
          .map((d, index) => (
            <p key={index}>{d.nombre}</p>
          ))}
      </div>

      <br />

      <BoxStyle>
        <div></div>
      </BoxStyle>

      <InputStyle $mymaxlength={3} />
    </>
  );
}

export default App;
