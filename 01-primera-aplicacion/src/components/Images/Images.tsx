import { useState } from 'react';

const HERO_IMAGES = {
  img1: '/heroes/marvel-captain.jpg',
  img2: '/heroes/marvel-cyclops.jpg',
  img3: '/heroes/marvel-daredevil.jpg',
};

export const Images = () => {
  const [image, setImage] = useState<undefined | string>(undefined);

  return (
    <>
      <h1>Images</h1>
      <button onClick={() => setImage(HERO_IMAGES.img1)}>Capitán América</button>
      <button onClick={() => setImage(HERO_IMAGES.img2)}>Cíclope</button>
      <button onClick={() => setImage(HERO_IMAGES.img3)}>Daredevil</button>
      <br />
      {image && <img src={image} alt="Imagen" style={{ marginTop: '10px' }} height={333} />}
    </>
  );
};
