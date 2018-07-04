import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from '/home/shri/tweeter_project/client/js/home/view.js';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Gloria Hallelujah', 'cursive']
  }
});
class Main extends React.Component{
    render(){
      return(

          <Route path='/' component={Home}>
          </Route>

      );
    }
}
export default Main
