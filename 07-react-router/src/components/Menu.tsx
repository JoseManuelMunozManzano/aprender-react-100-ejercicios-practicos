import { Link, useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();

  const pulsado = () => {
    navigate('/page2');
  };

  return (
    <>
      <ul>
        <li>
          <Link to={'/'}>Inicio</Link>
        </li>
        <li>
          <Link to={'/page2'}>Page2</Link>
        </li>
        <li>
          <Link to={'/category?categoria=4'}>Category</Link>
        </li>
        <li>
          <Link to={'/product/5'}>Product</Link>
        </li>
        <li>
          <Link to="/ajksdfkjhasdk">Error en la url</Link>
        </li>
      </ul>

      <button onClick={pulsado}>Page2</button>
    </>
  );
};

export default Menu;
