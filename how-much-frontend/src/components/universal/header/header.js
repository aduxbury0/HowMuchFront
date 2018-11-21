import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LoginLogout from './subcomponents/loginLogout';
import { Link }  from 'react-router-dom';

class Login extends Component {

  render() {
    return (

        <div>
            <AppBar position="static">
                <Toolbar>
                    <Grid container alignItems="center" justify="center">
                        <Grid item xs={1}></Grid>
                        
                        <Grid item xs={8}>
                            <Link to="/" style={styles.links}>
                                <Typography variant="title" color="inherit">
                                        How Much! - Ask the question
                                </Typography>
                            </Link>
                        </Grid>

                        <Grid item xs={3}>
                            <Grid container>
                                <LoginLogout></LoginLogout>
                            </Grid>
                        </Grid>
                        
                    </Grid>

                </Toolbar>
            </AppBar>
        </div>
    );
  }
}

const styles = {
    links: {
        color: "white",
        fontFamily: "Roboto",
        textDecoration: "none"
    }
}

export default Login;
