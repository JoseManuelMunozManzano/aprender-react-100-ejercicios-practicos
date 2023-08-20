import './App.css';
import { /* Expensive, */ ExpensiveWithDependency } from './componentes/01-expensive-function';

function App() {
  return (
    <>
      {/* <Expensive /> */}
      <ExpensiveWithDependency />
    </>
  );
}

export default App;
