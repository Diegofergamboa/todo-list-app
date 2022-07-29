import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Con la nueva implementación de React 18+, ahora se usa como referencia al elemento raiz un método de ReactDom que se llama 'createRoot'.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App
    />
);
