import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//importation des differents fichier de style SCSS
import "./Styles/index.scss"
//importation des bibliothèque de stye
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

//Permet d'afficher le rendu 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


