import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/pages/home/home';
import Login from './components/pages/login/login';
import Register from './components/pages/register/register';
import ViewOne from './components/pages/viewOne/viewOne';
import ApiV1 from './components/pages/api/v1/apiv1';
import PostQuestion from './components/pages/postQuestion/postQuestion';


import './App.css';

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
              <Route exact={true} path='/viewOne' render={() =>
                <ViewOne/>
              }/>
              <Route exact={true} path='/api/v1' render={() =>
                <ApiV1 />
              }/>
              <Route exact={true} path='/post' render={() => 
                <PostQuestion />
              }/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
