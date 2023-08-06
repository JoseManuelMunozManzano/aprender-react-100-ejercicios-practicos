import TemperatureForm from './components/TemperatureForm';
import PaintResults from './components/PainResults';
import { Provider } from './store';
import CoinForm from './components/CoinForm';
import AreaForm from './components/AreaForm';

function App() {
  return (
    <Provider>
      <TemperatureForm />
      <CoinForm />
      <AreaForm />
      <PaintResults />
    </Provider>
  );
}

export default App;
