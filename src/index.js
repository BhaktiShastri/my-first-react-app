import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import {HashRouter} from "react-router-dom";
import './App.css';
import './Components/header.css';
import './Components/Section/main.css';

import './Components/footer.css';



ReactDOM.render((
    <HashRouter>
      <App />
    </HashRouter>
    
  ), document.getElementById('root'));