import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Navbar from '../../../universal/header/header';

class ApiV1 extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Grid container>
          <h1>API V1</h1>
        </Grid>
      </div>
    );
  }
}

export default ApiV1;
