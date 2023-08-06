import { PanelStyle } from '../../styles/styles';

interface Props {
  onSomeEvent: (value: number) => void;
}

export const DatoAlPadre = ({ onSomeEvent }: Props): JSX.Element => {
  return (
    <>
      <h1>Enviar Props del componente hijo al padre</h1>
      <PanelStyle onClick={() => onSomeEvent(3)}>Púlsame</PanelStyle>
    </>
  );
};
