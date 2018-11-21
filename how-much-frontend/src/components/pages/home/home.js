import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './home.css';
import Navbar from '../../universal/header/header'

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Grid container>
          <h1>HOME</h1>
        </Grid>
      </div>
    );
  }
}

export default Home;
