import { IsRightStyle } from '../../styles/isRightStyle';

interface Props {
  opcion: number;
  dato1: number;
  dato2?: number;
}

export const ComponenteMultiple = ({ opcion, dato1, dato2 = 0 }: Props) => {
  const calcularDolares = (): JSX.Element => <p>Dólares: ${dato1 * 2}</p>;
  const calcularFahrenheit = (): JSX.Element => <p>GradosFahrenheit: {(dato1 * 9) / 5 + 32} ºF</p>;
  const calcularArea = (): JSX.Element => <p>Area: {dato1 * dato2} m2</p>;
  const calcularHotel = (): JSX.Element => <p>Coste alquiler hotel: {dato1 * 40}€</p>;
  const calcularCoche = (): JSX.Element => (
    <p>Coste alquiler coche: {40 * dato1 - (dato1 >= 7 ? 50 : dato1 >= 3 ? 20 : 0)}€</p>
  );

  return (
    <IsRightStyle $isright={true}>
      {opcion === 1
        ? calcularDolares()
        : opcion === 2
        ? calcularFahrenheit()
        : opcion === 3
        ? calcularArea()
        : opcion === 4
        ? calcularHotel()
        : opcion === 5
        ? calcularCoche()
        : ''}
    </IsRightStyle>
  );
};
