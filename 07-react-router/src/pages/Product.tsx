import { useParams } from 'react-router-dom';
import Menu from '../components/Menu';

const Product = () => {
  const { id } = useParams();

  return (
    <>
      <Menu />
      <p>Product ID: {id}</p>
    </>
  );
};

export default Product;
