# APRENDER REACT CON 100 EJERCICIOS PRACTICOS

Estudio del libro Aprender Reat con 100 Ejercicios Prácticos.

Todos los proyectos se han creado usando Vite `npm create vite` y Typescript.

Para instalar dependencias: `npm i`

Donde se encuentre un fichero .env.template, cambiar el nombre a .env e indicar los valores correctos de las variables de entorno.

Para ejecutar: `npm run dev`

Los ejercicios son los siguientes:

- 01-primera-aplicacion

  App usando lo básico de React.

  - useState
  - Componentes
  - Estilos en Componentes
    - Fichero .css
    - Estilos inline
    - Syled Components
  - Carga de imágenes
  - Uso de props para mandar información de componentes padres a hijos
  - Uso de children
  - Paso de información de un componente padre a uno hijo

- 02-speech

  Dado un fichero JSON con un array con frases de texto, vamos pasando desde la primera a la última usando botones.

  - useState
  - Styled components

- 03-pruebaUseEffect

  Es una prueba de como funciona useEffect

- 04-rutina-deportiva

  App con distintas rutinas deportivas y un contador para ir pasando entre las distintas actividades que tiene cada rutina.

  - Uso de fichero TypeScript con seed inicial que se carga a la app
  - Carga de imágenes
  - Styled Components
  - Recorrer arrays con map
  - useEffect con setTimeout

- 05-trivial

  App con un juego tipo Trivial donde las preguntas y las posibles respuestas aparecen en un orden random.

  - Uso de fichero TypeScript con seed inicial de preguntas y respuestas que se carga a la app
  - Carga de imágenes
  - Styled Components
  - Uso de Math.random()
  - Recorrer arrays con map

- 06-cuento-interactivo

  App de cuento interactivo donde puedes elegir como continua la historia

  - Uso de fichero TypeScript con seed inicial de escenas y posibles caminos que esta puede tomar, que se carga a la app
  - Carga de imágenes y cálculo dinámico para mantener proporcionalidad.
  - Styled Components
  - useState
  - useEffect
  - Recorrer arrays con map

- 07-react-router

  App para mostrar como usar React Router v6

  Ir a la URL siguiente: `http://localhost:5173/myPage`

  - Uso de ficheros .env, vite-env.d.ts y carga de variables de entorno en Vite.
  - React Router v6 y uso de baseName

- 08-fetch-api

  App muy simple solo para mostrar el uso de Fetch API y Axios.

  - Uso de la extensión VSCode Paste JSON as Code para generar las interfaces y los types para TypeScript
  - useEffect con llamadas a funciones asíncronas
  - Fetch API
  - Axios

- 09-chistes-api

  App con chistes de Chuck Norris divididos por temática para practicar el uso de Axios.

  - Uso de la extensión VSCode Paste JSON as Code para generar las interfaces y los types para TypeScript
  - useEffect con llamadas a funciones asíncronas
  - Axios
  - Recorrer arrays con map

- 10-star-wars-api

  App un poco más elaborada donde se trabaja, usando Axios, con la API de Star Wars, mostrando imágenes de personajes, ficha de los mismos y paginación.

  - Uso de la extensión VSCode Paste JSON as Code para generar las interfaces y los types para TypeScript
  - Axios
  - React Router v6
  - Styled Components
  - useEffect con llamadas a funciones asíncronas
  - Paginación
  - Recorrer arrays con map

- 11-context-api

  Pequeña demostración de como trabajar con context API para poder pasar estados a lo largo de la aplicación sin tener que usar props.

  - useContext

- 12-redux-example

  Pequeña demostración de como trabajar usando Redux para poder pasar estados a lo largo de la aplicación sin tener que usar props.

  - Redux: Se usa la forma nueva de trabajar usando redux-toolkit
    - `https://redux.js.org/usage/migrating-to-modern-redux#reducers-and-actions-with-createslice`
  - Como crear más de una propiedad en un reducer y más de un reducer.

- 13-redux-exercises

  Pequeñas apps para trabajar un poco más con Redux.

- 14-firebase-example

  App de React que usa como backend Firebase

  - Uso de ficheros .env, vite-env.d.ts y carga de variables de entorno en Vite.
  - Creado backend usando Firebase
    - `https://firebase.google.com`
  - CRUD completo

- 15-auth0-example

  Pequeña app de login que hace uso del paquete auth0 para lograr autenticarnos.

  - Uso de ficheros .env, vite-env.d.ts y carga de variables de entorno en Vite.
  - Auth0
    - `https://auth0.com/es`
