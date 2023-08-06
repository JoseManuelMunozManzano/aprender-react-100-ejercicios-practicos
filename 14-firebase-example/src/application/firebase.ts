// Código necesario para establecer la conexión entre nuestra aplicación y los servicios de Firebase
import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_PROJECT_ID + '.firebaseapp.com',
  projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_PROJECT_ID + '.appspot.com',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export default app;
