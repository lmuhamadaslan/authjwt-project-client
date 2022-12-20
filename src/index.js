import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bulma/css/bulma.css"
import axios from "axios"

// menagtur creadentials agar client bisa menyimpan cookie
axios.defaults.withCredentials = true

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);
