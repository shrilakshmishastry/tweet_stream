import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './js/App.js'
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
  (
    <div>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </div>
  ),
  document.getElementById('root')
);
