import { useEffect, useState } from 'react';
import { deletePerson, getAllPersons, savePerson, updatePerson } from './application/api';

export type TPerson = {
  name: string;
};

export type TGetPerson = {
  id: string;
  name: string;
};

function App() {
  const [personName, setPersonName] = useState<TPerson>({ name: '' });
  const [personId, setPersonId] = useState<string>('');
  const [persons, setPersons] = useState<TGetPerson[]>([{ id: '', name: '' }]);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    queryPersons().catch(console.error);
  }, [persons]);

  const queryPersons = async () => {
    const docs: TGetPerson[] = await getAllPersons();
    setPersons(docs);
  };

  const onNamePersonChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPersonName({ name: target.value });
  };

  const handleUpdatePerson = (person: TGetPerson) => {
    setPersonName((prev) => ({ ...prev, name: person.name }));
    setPersonId(person.id);
    setIsUpdating(true);
  };

  const handleSavePerson = () => {
    if (!isUpdating) {
      savePerson(personName)
        .then(() => {
          setPersonName((prev) => ({ ...prev, name: '' }));
          setPersonId('');
          setIsUpdating(false);
        })
        .catch(console.error);
    } else {
      updatePerson({ id: personId, name: personName.name }).catch(console.error);
      setPersonName((prev) => ({ ...prev, name: '' }));
      setPersonId('');
      setIsUpdating(false);
    }
  };

  return (
    <div>
      <input type="text" onChange={onNamePersonChange} value={personName.name} placeholder="Person Name" />
      <button onClick={handleSavePerson}>{isUpdating ? 'Update' : 'Add'}</button>

      {persons.map((person) => (
        <p key={person.id}>
          {person.id} - {person.name}{' '}
          <button
            onClick={() => {
              handleUpdatePerson(person);
            }}
          >
            Update
          </button>{' '}
          <button
            onClick={() => {
              deletePerson(person.id).catch(console.error);
            }}
          >
            Delete
          </button>
        </p>
      ))}
    </div>
  );
}

export default App;
