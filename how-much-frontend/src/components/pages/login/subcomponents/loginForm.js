import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import axios from 'axios';


class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''        
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    handleLogin(event) {
        
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/v1/user/login',
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                username: this.state.username,
                password: this.state.password
            }
        })
        .then((res) => {

            if(res.status === 200) {
                sessionStorage.setItem('Authorization', res.data);
                window.location.href = '/';
            }
            else {
                alert('Login error occured');
            }

        })
        .catch((err) => {
            alert('Incorrect username or password');
        });
    }

    render() {
        return (
            <div>
                <Grid container={true} justify="center" direction="column" style={styles.grid}>
                        <Typography variant="display1" align="center" gutterBottom >
                            Login
                        </Typography>                 
                        <TextField 
                            label="Username"
                            variant="outlined"
                            onChange = {this.handleChange('username')}
                        />
                        <br />
                        <TextField 
                            label="Password"
                            variant="outlined"
                            type="password"
                            onChange = {this.handleChange('password')}
                        />
                        <br />
                        <Button
                            variant="contained"
                            color="primary"
                            style={styles.button}
                            onClick={(event) => this.handleLogin(event)}
                        >Login</Button>
                </Grid>
            </div>
        );
    }
}

const styles = {
    grid: {
        paddingLeft: "10%",
        paddingRight: "10%"
    },
    button: {
        width: "20%",
        left: "40%"
    },
    loginText: {
        marginTop: "15"
    }
}

export default LoginForm;
