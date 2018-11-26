import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LoginLogout from './subcomponents/loginLogout';
import { Link }  from 'react-router-dom';
import Button from '@material-ui/core/Button';

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
                <Grid container direction={'row'} alignContent={"center"} justify={'center'} wrap={'nowrap'} md={12} sm={false} style={styles.apiBar}>
                    <div>
                        <Typography style={styles.apiBarText} color={'inherit'} align={'center'} variant='h6'>To visit our API Documentation</Typography>
                    </div>
                    <div>
                        <Button style={styles.button}><Link to={'/api/v1'} style={styles.apilinks}>Click Here</Link></Button>
                    </div>
                        
                        

                </Grid>
        </div>
    );
  }
}

const styles = {
    links: {
        color: "white",
        fontFamily: "Roboto",
        textDecoration: "none"
    },
    apiBar: {
        minHeight: '40px',
        backgroundColor: '#01B2A6',
        //boxShadow: '0px 0px 10px black'
    },
    apiBarText: {
        fontFamily: 'Roboto',
        marginTop: '5px'
    },
    button: {
        width: "10%",
        minWidth: "100px",
        left: "35%",
        marginLeft: "0px",
        marginRight: "10px",
        backgroundColor: "#ff556f",
        marginTop: '5px',
        marginBottom: '5px',
    },
    apilinks: {
        color: "white",
        fontFamily: "Roboto",
        fontSize: "16px",
        textDecoration: "none",
        whiteSpace: 'nowrap'
    },
}

export default Login;
