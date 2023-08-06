import Consumer1 from './components/Consumer1';
import Consumer2 from './components/Consumer2';
import { Provider } from './store';

function App() {
  return (
    <Provider>
      <Consumer1 />
      <Consumer2 />
    </Provider>
  );
}

export default App;
