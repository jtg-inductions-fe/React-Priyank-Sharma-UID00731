import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from 'App';
import { Provider } from 'react-redux';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from '@theme';

import { store } from './store/store';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </Provider>
    </StrictMode>,
);
