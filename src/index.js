import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './fonts/8-BIT WONDER.TTF'
import './fonts/ReturnofGanon.ttf'
import './fonts/megaman_2.ttf'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
