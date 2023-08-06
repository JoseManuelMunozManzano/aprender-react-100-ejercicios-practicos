import { useDispatch } from 'react-redux';
import { setArea } from '../store/area';
import { useEffect, useState } from 'react';

interface dataArea {
  height: number;
  width: number;
}

const AreaForm = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<dataArea>({ height: 0, width: 0 });

  useEffect(() => {
    dispatch(setArea(data));
  }, [data, dispatch]);

  const onHeightChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const height = +target.value;
    setData((data) => ({ ...data, height }));
  };

  const onWidthChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const width = +target.value;
    setData((data) => ({ ...data, width }));
  };

  return (
    <div>
      <h1>Area de un Rectángulo</h1>
      <input type="text" onChange={onHeightChange} placeholder="Alto" />
      <input type="text" onChange={onWidthChange} placeholder="Ancho" />
    </div>
  );
};

export default AreaForm;
