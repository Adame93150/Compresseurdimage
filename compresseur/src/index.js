import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./Styles/index.scss"
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';



ReactDOM.render(
  <React.StrictMode>
  //permet de faire appel au fichier App permettant d'afficher le projet
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


