import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './viewOne.css';
import Navbar from '../../universal/header/header'

class ViewOne extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Grid container>
          <h1>VIEW ONE</h1>
        </Grid>
        
      </div>
    );
  }
}

export default ViewOne;
