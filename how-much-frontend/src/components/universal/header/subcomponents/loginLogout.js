import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link }  from 'react-router-dom';

class ViewOne extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        if('Authorization' in sessionStorage) {
            sessionStorage.removeItem('Authorization');
            this.forceUpdate();
        }
        else {
            alert('You are not logged in, don\'t try to log out');
        }

    }

  render() {
        if('Authorization' in sessionStorage) {
            return (
            <div>
                <Button style={styles.askQuestion}><Link to='/post' style={styles.links}>Ask Question</Link></Button>
                <Button style={styles.button} onClick={(event) => this.handleLogout(event)}><Link style={styles.links} to='/'>Log Out</Link></Button>
            </div> )
        }
        else {
            return (
                <div>
                    <Button href="/login" style={styles.button}><Link style={styles.links} to='/login'>Login</Link></Button>
                    <Button href="/register" style={styles.button}><Link style={styles.links} to='/register'>Register</Link></Button>
                </div> 
            )
        }
    }
}

const styles = {
    button: {
        width: "30%",
        minWidth: "100px",
        left: "35%",
        marginLeft: "10px",
        marginRight: "10px",
        backgroundColor: "inherit",
    },

    links: {
        color: "white",
        fontFamily: "Roboto",
        fontSize: "16px",
        textDecoration: "none"
    },
    askQuestion: {
        width: "30%",
        minWidth: "100px",
        left: "35%",
        marginLeft: "10px",
        marginRight: "10px",
        backgroundColor: '#01B2A6'
    }
}

export default ViewOne;
