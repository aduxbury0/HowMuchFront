import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import axios from 'axios';

class RegistrationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordConfirm: '',
            passwordDifferent: false       
        }
        this.handleRegister = this.handleRegister.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
        if(this.state.password !== this.state.passwordConfirm && this.state.passwordDifferent !== true){
            this.setState({passwordDifferent: true});
        }
        else {
            this.setState({passwordDifferent: false});
        }
    };

    handleRegister(event) {
        if(this.state.password === this.state.passwordConfirm) {
            axios({
                method: 'post',
                url: 'http://localhost:5000/api/v1/user/register',
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    username: this.state.username,
                    password: this.state.password
                }
            })
            .then((res) => {
                if(res.status === 201) {
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
                            alert('The account was successfully created but a login error occured');
                        }
            
                    })
                    .catch((err) => {
                        alert('The account was successfully created but a login error occured');
                    });
                }
            })
            .catch((err) => {
                alert(err)

            })
        }
        else {
            alert('Both passwords must match');
        }
    }

    render() {
        return (
            <div>
                <Grid container={true} justify="center" direction="column" style={styles.grid}>
                        <Typography variant="display1" align="center" gutterBottom >
                            Register
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
                        <TextField 
                            label="Confirm Password"
                            variant="outlined"
                            type="password"
                            onChange = {this.handleChange('passwordConfirm')}
                            error = {this.state.passwordDifferent}
                        />
                        <br />
                        <Button
                            variant="contained"
                            color="primary"
                            style={styles.button}
                            onClick={(event) => this.handleRegister(event)}
                        >Register</Button>
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
        width: "30%",
        left: "35%"
    },
    loginText: {
        marginTop: "15"
    },
}

export default RegistrationForm;