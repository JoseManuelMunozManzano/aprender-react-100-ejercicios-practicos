import { useReducer, useRef } from 'react';
import { formReducer, INITIAL_STATE, Tag } from './formReducer';

export const Form = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  // Para acceder al text indicado en el Text Area
  const tagRef = useRef<HTMLTextAreaElement>(null);

  // Segundo caso
  // De nuevo todo esto funciona bien, pero este estado es complejo y es mucho mejor
  // trabajarlo con un useReducer, haciendo el código más legigle.

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    dispatch({ type: 'changeInput', payload: { name: e.target.name, value: e.target.value } });
  };

  console.log(state);

  const handleTags = () => {
    const tags = tagRef.current!.value.split(',');
    tags.forEach((tag) => {
      dispatch({ type: 'addTag', payload: tag });
    });
  };

  const handleRemoveTag = (tag: Tag) => {
    dispatch({ type: 'removeTag', payload: tag });
  };

  const handleIncrease = () => {
    dispatch({ type: 'increase' });
  };

  const handleDecrease = () => {
    dispatch({ type: 'decrease' });
  };

  return (
    <div>
      <form>
        <input type="text" name="title" onChange={handleChange} placeholder="Title" />
        <input type="text" name="desc" onChange={handleChange} placeholder="Desc" />
        <input type="number" name="price" onChange={handleChange} placeholder="Price" />
        <p>Category:</p>
        <select name="category" id="category" onChange={handleChange}>
          <option value="sneakers">Sneakers</option>
          <option value="tshirts">T-shirts</option>
          <option value="jeans">Jeans</option>
        </select>
        <p>Tags:</p>
        <textarea ref={tagRef} placeholder="Seperate tags with commas..."></textarea>
        <button type="button" onClick={handleTags}>
          Add Tags
        </button>
        <div className="tags">
          {state.tags!.map((tag) => (
            <small key={tag} onClick={() => handleRemoveTag(tag)}>
              {tag}
            </small>
          ))}
        </div>
        <div className="quantity">
          <button type="button" onClick={handleDecrease}>
            -
          </button>
          <span>Quantity ({state.quantity})</span>
          <button type="button" onClick={handleIncrease}>
            +
          </button>
        </div>
      </form>
    </div>
  );
};
