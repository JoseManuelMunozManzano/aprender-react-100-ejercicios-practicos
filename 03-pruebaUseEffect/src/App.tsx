import { useState } from 'react';
import { C1 } from './C1';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {count % 2 === 0 ? <C1 /> : <div>txt</div>}
      <button onClick={() => setCount(count + 1)}>Pulsar</button>
    </>
  );
}

export default App;
