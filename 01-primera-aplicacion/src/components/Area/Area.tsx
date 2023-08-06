import React, { useState } from 'react';

interface Props {
  calculoArea: (a: number, b: number) => number;
}

const styles: React.CSSProperties = {
  color: 'purple',
  fontSize: '20px',
  border: '2px solid purple',
};

export const Area = ({ calculoArea }: Props) => {
  const [ancho, setAncho] = useState(0);
  const [alto, setAlto] = useState(0);

  return (
    <>
      <h1>Area de un rectángulo</h1>
      <div style={styles}>
        <input
          type="text"
          onChange={(e) => {
            setAncho(+e.target.value);
          }}
          placeholder="Ancho"
        />
        <input
          type="text"
          onChange={(e) => {
            setAlto(+e.target.value);
          }}
          placeholder="Alto"
        />
        <p>{calculoArea(ancho, alto)}</p>
      </div>
    </>
  );
};
