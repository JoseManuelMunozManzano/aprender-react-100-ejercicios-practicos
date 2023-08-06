import { CollectionReference, addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc } from 'firebase/firestore';
import { db } from './firebase';
import { TGetPerson, TPerson } from '../App';

// Métdos que interactúan con Firebase mediante operaciones de alta, baja, modificación y consulta.
const collectionName = 'persons';
const itemsCollection: CollectionReference = collection(db, collectionName);

// CREATE
export const savePerson = async (obj: TPerson): Promise<void> => {
  await addDoc(itemsCollection, obj);
};

// GET
export const getAllPersons = async (): Promise<TGetPerson[]> => {
  const result = await getDocs(query(itemsCollection));

  return result.docs.map((doc) => {
    const { name } = doc.data() as TPerson;
    return { name, id: doc.id };
  });
};

// DELETE
export const deletePerson = async (id: string): Promise<void> => {
  await deleteDoc(doc(itemsCollection, id));
};

// UPDATE
export const updatePerson = async (data: TGetPerson): Promise<void> => {
  const { id, name } = data;
  await updateDoc(doc(db, collectionName, id), { name });
};
