import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './js/App.js'
import {BrowserRouter} from 'react-router-dom';


WebFont.load({
  google: {
    families: ['Gloria Hallelujah', 'cursive']
  }
});

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
