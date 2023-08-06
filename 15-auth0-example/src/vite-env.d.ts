/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REACT_APP_AUTH0_DOMAIN: string;
  readonly VITE_REACT_APP_AUTH0_CLIENT_ID: string;
  // más variables de entorno...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
