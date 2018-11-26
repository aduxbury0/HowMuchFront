import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Navbar from '../../universal/header/header';
import Paper from '@material-ui/core/Paper';
import RegistrationForm from './subcomponents/registrationForm';

class Register extends Component {
  render() {
    return (
        <div>
        <Navbar />
        <Grid container={true}>
          <Grid item md={4} sm={1} xs={"auto"}></Grid>
          <Grid item md={4} sm={10} xs={12}>
            <Paper style={styles.loginPaper}>
              <RegistrationForm />
            </Paper>
          </Grid>
          <Grid item md={4} sm={1} xs={"auto"}></Grid>
          </Grid>
      </div>
    );
  }
}

const styles = {
  loginPaper: {
    marginTop: "40%",
    paddingTop: "20px",
    paddingBottom: "20px",
  }
}

export default Register;
