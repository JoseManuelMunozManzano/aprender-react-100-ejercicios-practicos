interface Props {
  title: string;
}

export const Hello = (props: Props) => {
  return <h2>Hola {props.title}</h2>;
};
