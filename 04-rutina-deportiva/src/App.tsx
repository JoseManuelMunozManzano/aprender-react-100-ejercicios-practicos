import { useEffect, useState } from 'react';

import workoutsData from './data/routine';
import { BtnLeft, Img, Row, BtnRight } from './styled';

function App() {
  const [currentWorkout, setCurrentWorkout] = useState(0);
  const [currentEx, setCurrentEx] = useState(0);
  const [counter, setCounter] = useState(10);
  const [clockWorking, setClockWorking] = useState(false);

  const timerTime = 5;
  const workout = workoutsData[currentWorkout];

  useEffect(() => {
    if (clockWorking) {
      if (counter > 0) {
        setTimeout(() => setCounter(counter - 1), 1000);
      } else if (currentEx < workout.routine.length - 1) {
        setTimeout(() => setCounter(timerTime), 1000);
        setCurrentEx(currentEx + 1);
      } else {
        setClockWorking(false);
        setCurrentEx(0);
      }
    } else {
      setCounter(timerTime);
      setCurrentEx(0);
    }
  }, [counter, clockWorking, workout.routine.length]);

  const prevWorkOut = () => {
    currentWorkout > 0 && setCurrentWorkout(currentWorkout - 1);
  };

  const nextWorkOut = () => {
    currentWorkout < workoutsData.length - 1 && setCurrentWorkout(currentWorkout + 1);
  };

  return (
    <>
      <h1>
        <BtnLeft onClick={prevWorkOut}></BtnLeft>
        {workout.title}
        <BtnRight onClick={nextWorkOut}></BtnRight>
      </h1>

      <button onClick={() => setClockWorking(!clockWorking)}>Countdown: {counter} s</button>
      <Row>
        <img src={workout.routine[currentEx].img} />
        <Row>
          {workout.routine.map((exercise, index) => (
            <Img src={exercise.img} key={index} onClick={() => setCurrentEx(index)} $active={index === currentEx} />
          ))}
        </Row>
      </Row>
    </>
  );
}

export default App;
