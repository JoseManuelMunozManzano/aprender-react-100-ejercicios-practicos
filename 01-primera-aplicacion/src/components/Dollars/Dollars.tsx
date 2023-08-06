import { useState } from 'react';
import './Dollars.css';

export const Dollars = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <h1>Euros a Dólares</h1>
      <div className="dollars-div">
        <input type="text" onChange={(e) => setValue(+e.target.value * 2)} placeholder="Euros" />
        <p>{value}</p>
      </div>
    </>
  );
};
