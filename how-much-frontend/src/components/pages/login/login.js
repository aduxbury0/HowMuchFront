import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Navbar from '../../universal/header/header';
import LoginForm from './subcomponents/loginForm';
import Paper from '@material-ui/core/Paper';

import './login.css';

class Login extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Grid container={true}>
          <Grid item md={4} xs={"auto"}></Grid>
          <Grid item md={4} xs={12}>
            <Paper style={styles.loginPaper}>
              <LoginForm/>
            </Paper>

          </Grid>
          <Grid item md={4} xs={"auto"}></Grid>
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

export default Login;
