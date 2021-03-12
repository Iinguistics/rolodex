import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
//import './index.css';
import App from './components/App';
import { Router } from "react-router-dom";
import history from "./history";

ReactDOM.render(
  <Router history={history}>
    <App history={history} />
  </Router>,
  document.getElementById('root')
);

