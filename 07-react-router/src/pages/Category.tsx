import { useLocation } from 'react-router-dom';
import Menu from '../components/Menu';

const Category = () => {
  const query = new URLSearchParams(useLocation().search);
  const categoria = query.get('categoria');
  return (
    <div>
      <Menu />
      <p>Categoria: {categoria}</p>
    </div>
  );
};

export default Category;
