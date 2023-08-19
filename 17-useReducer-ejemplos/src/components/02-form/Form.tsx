import { useRef, useState } from 'react';

type Tag = string;

interface Product {
  title: string;
  desc: string;
  price: number;
  category: string;
  tags: Tag[];
  images: {
    sm: string;
    md: string;
    lg: string;
  };
  quantity: number;
}

export const Form = () => {
  const [product, setProduct] = useState<Product>({
    title: '',
    desc: '',
    price: 0,
    category: '',
    tags: [],
    images: {
      sm: '',
      md: '',
      lg: '',
    },
    quantity: 0,
  });
  const tagRef = useRef<HTMLTextAreaElement>(null);

  // Segundo caso
  // De nuevo todo esto funciona bien, pero este estado es complejo y es mucho mejor
  // trabajarlo con un useReducer, haciendo el código más legigle.

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleTags = () => {
    const tags = tagRef.current!.value.split(',');
    tags.forEach((tag) => {
      setProduct((prev) => ({ ...prev, tags: [...prev.tags, tag] }));
    });
  };

  const handleRemoveTag = (tag: Tag) => {
    setProduct((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }));
  };

  const handleIncrease = () => {
    setProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };

  const handleDecrease = () => {
    setProduct((prev) => ({
      ...prev,
      quantity: prev.quantity - 1,
    }));
  };

  return (
    <div>
      <form>
        <input type="text" name="title" onChange={handleChange} placeholder="Title" />
        <br />
        <input type="text" name="desc" onChange={handleChange} placeholder="Desc" />
        <br />
        <input type="number" name="price" onChange={handleChange} placeholder="Price" />
        <br />
        <p>Category:</p>
        <select name="category" id="category" onChange={handleChange}>
          <option value="sneakers">Sneakers</option>
          <option value="tshirts">T-shirts</option>
          <option value="jeans">Jeans</option>
        </select>
        <p>Tags:</p>
        <textarea ref={tagRef} placeholder="Seperate tags with commas..."></textarea>
        <br />
        <button type="button" onClick={handleTags}>
          Add Tags
        </button>
        <div className="tags">
          {product.tags.map((tag) => (
            <small key={tag} onClick={() => handleRemoveTag(tag)}>
              {tag}
            </small>
          ))}
        </div>
        <br />
        <div className="quantity">
          <button type="button" onClick={handleDecrease}>
            -
          </button>
          <span>Quantity ({product.quantity})</span>
          <button type="button" onClick={handleIncrease}>
            +
          </button>
        </div>
      </form>
    </div>
  );
};
