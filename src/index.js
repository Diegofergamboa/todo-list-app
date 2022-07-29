import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const titulo = <h1>Esto es un titulo</h1>
const subtitulo =  <h2>Esto es un subtitulos</h2>
const encabezado = <h3>Esto es un encabezado</h3>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App
    />
);
