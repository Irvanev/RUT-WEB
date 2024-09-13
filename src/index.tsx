import React from 'react';
import ReactDOM from 'react-dom/client';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import './styles/globals.scss';
import App from './App';
import {ToasterComponent, ToasterProvider} from '@gravity-ui/uikit';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <ToasterProvider>
            <App />
            <ToasterComponent className="optional additional classes" />
        </ToasterProvider>
    </React.StrictMode>,
);
