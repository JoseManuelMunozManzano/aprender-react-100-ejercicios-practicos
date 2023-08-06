import { useState } from 'react';

export const Grades = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <h1>Grados a Fahrenheit</h1>
      <div style={{ color: 'red', fontSize: '20px', border: '2px solid purple', padding: '10px' }}>
        <input type="text" onChange={(e) => setValue((+e.target.value * 9) / 5 + 32)} placeholder="Grados" />
        <p>{value}</p>
      </div>
    </>
  );
};
