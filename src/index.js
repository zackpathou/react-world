import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/index.scss";

//On appel le composant App.js avec l'id root dans le dossier public index.html
ReactDOM.render(
  <React.StrictMode>
    <App />   
  </React.StrictMode>,
  document.getElementById('root')
);

