import { IAnswer, IQuestion } from '../data/questions';

type array = IQuestion[] | IAnswer[];

export const shuffleArray = <T,>(array: T[]): T[] => {
  let counter = array.length;

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);
    counter--;

    const temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
};
