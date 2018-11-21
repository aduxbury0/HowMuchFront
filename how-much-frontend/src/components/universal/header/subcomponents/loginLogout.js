import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link }  from 'react-router-dom';

class ViewOne extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


  render() {
        if('Authorization' in sessionStorage) {
            return (
            <div>
                <Button style={styles.button}><Link style={styles.links} to='/login'>Log Out</Link></Button>
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
    }
}

export default ViewOne;
