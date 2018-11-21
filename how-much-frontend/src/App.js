import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/pages/home/home';
import Login from './components/pages/login/login';
import Register from './components/pages/register/register';
import viewOne from './components/pages/viewOne/viewOne';


import './App.css';

/*const theme = createMuiTheme({

  palette: {
    common:{
      black:"#000",
      white:"#fff"},
    
    background: {
      paper:"#fff",
      default:"#fafafa"},

    primary: {
      light:"rgba(75, 149, 230, 0.85)",
      main:"rgba(75, 111, 230, 0.95)",
      dark:"#303f9f","contrastText":"#fff"},

    secondary: {
      light:"rgba(255, 89, 102, 1)",
      main:"rgba(255, 0, 18, 0.79)",
      dark:"rgba(209, 0, 14, 1)",
      contrastText:"rgba(255, 255, 255, 1)"},

    error: {
      light:"rgba(253, 255, 110, 0.88)",
      main:"rgba(252, 255, 0, 1)",
      dark:"rgba(219, 221, 0, 1)",
      contrastText:"#fff"},
    text:{
      primary:"rgba(0, 0, 0, 0.87)",
      secondary:"rgba(0, 0, 0, 0.54)",
      disabled:"rgba(0, 0, 0, 0.38)",
      hint:"rgba(0, 0, 0, 0.38)"}
    }
});*/
class App extends Component {

  render() {
    return (
        <BrowserRouter>
            <div>
              <Route exact={true} path='/' render={() =>
                <Home/>
              }/>
              <Route exact={true} path='/login' render={() =>
                <Login/>
              }/>
              <Route exact={true} path='/register' render={() =>
                <Register/>
              }/>
              <Route path='/viewOne' render={() =>
                <viewOne/>
              }/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
