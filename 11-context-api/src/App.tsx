import MyProvider from './application/Provider';
import Login from './components/Login';
import ShowState from './components/ShowState';

function App() {
  return (
    <MyProvider>
      <Login />
      <ShowState />
    </MyProvider>
  );
}

export default App;
