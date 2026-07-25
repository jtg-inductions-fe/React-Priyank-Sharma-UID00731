/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_COOKIE_MAX_AGE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
