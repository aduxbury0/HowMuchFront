import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Navbar from '../../universal/header/header'
import QuestionTable from './subcomponents/questionTable';
import Paper from '@material-ui/core/Paper';

class Home extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Grid container={true} style={styles.mainGrid}>
          
          <Grid item md={2} sm={1} xs={"auto"}></Grid>
          
          <Grid item md={8} sm={10} xs={12} >
            <Paper>
              <QuestionTable />
            </Paper>
            
          </Grid>
          
          <Grid item md={2} sm={1} xs={"auto"}></Grid>

          </Grid>
      </div>
    );
  }
}

const styles = {
  mainGrid: {
    marginTop: "40px"
  }
}

export default Home;
