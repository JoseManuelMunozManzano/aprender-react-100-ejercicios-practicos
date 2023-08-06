import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        <p>Hello {user!.name}</p>
        <img src={user!.picture} />
        <br />
        <button
          onClick={() => {
            logout().catch(console.error);
          }}
        >
          Salir
        </button>
      </div>
    );
  } else {
    return (
      <button
        onClick={() => {
          loginWithRedirect().catch(console.error);
        }}
      >
        Log in
      </button>
    );
  }
}

export default App;
