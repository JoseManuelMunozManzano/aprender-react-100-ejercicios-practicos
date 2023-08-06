import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../apis/api';
import { Gender, Result } from '../interfaces/star-wars.interface';
import { Row } from '../styles/styled';

const emptyResult: Result = {
  name: '',
  height: '',
  mass: '',
  hair_color: '',
  skin_color: '',
  eye_color: '',
  birth_year: '',
  gender: Gender.NA,
  homeworld: '',
  films: [],
  species: [],
  vehicles: [],
  starships: [],
  created: '',
  edited: '',
  url: '',
};

const Profile = () => {
  const { id = '' } = useParams<string>();
  const [character, setCharacter] = useState<Result>(emptyResult);

  useEffect(() => {
    getCharacterById(id)
      .then((res) => {
        setCharacter(res.data);
      })
      .catch(console.error);
  }, [id]);

  return (
    <Row>
      <div>
        <h1>{character.name}</h1>
        <p>Height: {character.height}</p>
        <p>Gender: {character.gender}</p>
        <p>Hair color: {character.hair_color}</p>
        <p>Skin color: {character.skin_color}</p>
      </div>
      <img src={`http://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="" />
    </Row>
  );
};

export default Profile;
