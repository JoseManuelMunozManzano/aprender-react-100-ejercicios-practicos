import { useEffect, useState } from 'react';
import { IDoor, IScene, scenes } from './data/scenes';
import { Scene, Txt, Door } from './styles/styled';

const App = () => {
  const getSceneByName = (title: string): IScene | undefined => scenes.find((scene) => scene.title === title);

  const [currentScene, setCurrentScene] = useState(getSceneByName('espacio'));
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    calculateSceneDimensions();
  }, []);

  const calculateSceneDimensions = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const a = 16;
    const b = 9;
    const proportion = a / b;
    const proportion2 = w / h;

    if (proportion > proportion2) {
      setWidth(w);
      setHeight((w * b) / a);
    } else {
      setHeight(h);
      setWidth((h * a) / b);
    }
  };

  return (
    <>
      <Scene $width={width} $height={height} $back={currentScene!.back}>
        <Txt $x={0}>{currentScene!.txt}</Txt>
        {currentScene!.doors.map((door: IDoor, i) => (
          <Door
            key={i}
            onClick={() => {
              setCurrentScene(getSceneByName(door.target));
            }}
            $data={door}
          ></Door>
        ))}
      </Scene>
    </>
  );
};

export default App;
