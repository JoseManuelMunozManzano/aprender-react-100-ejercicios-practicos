/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REACT_APP_API_KEY: string;
  readonly VITE_REACT_APP_PROJECT_ID: string;
  // más variables de entorno...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
