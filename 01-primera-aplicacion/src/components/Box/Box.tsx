interface Props {
  children: string;
}

export const Box = (props: Props) => {
  return <div>{props.children}</div>;
};
