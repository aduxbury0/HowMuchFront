import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


class Body extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            title: '',
            description: '',
            quantity: 0,
            condition: '',
            brand: '',
            model: '',
            madeIn: '',
            created: ''
        }
    }

    componentWillReceiveProps(newProps) {
        if(typeof newProps.post !== 'undefined'){
        this.setState({
            username: newProps.post.username,
            title: newProps.post.title,
            description: newProps.post.description,
            quantity: newProps.post.quantity,
            condition: newProps.post.condition,
            brand: newProps.post.brand,
            model: newProps.post.model,
            madeIn: newProps.post.madeIn,
            created: newProps.post.created
        });
        }
    }

  render() {
    
    return (
        <div>
            <Paper>
                <Grid container>
                    <Grid item xs={12} style={styles.title}>
                        <h2>{this.state.title}</h2>
                    </Grid>
                    <Grid item xs={12} style={styles.username}>
                        <p><strong>Asked by: </strong>{this.state.username} <strong>on </strong>{this.state.created.substring(0, 10)}</p>
                    </Grid>
                    <Grid item xs={12} style={styles.descriptionBox}>
                        <p>{this.state.description}</p>
                    </Grid>
                    <Grid container style={styles.attributeContainer}>
                        <Grid item md={4} sm={12} style={styles.attributeBox}>
                            <p><strong>Quantity: </strong>{this.state.quantity}</p>
                        </Grid>
                        <Grid item md={4} sm={12} style={styles.attributeBox}>
                            <p><strong>Condition: </strong>{this.state.condition}</p>
                        </Grid>
                        <Grid item md={4} sm={12} style={styles.attributeBox}>
                            <p><strong>Brand: </strong>{this.state.brand}</p>
                        </Grid>
                    </Grid>
                    <Grid container style={styles.attributeContainer}>
                        <Grid item md={6} sm={12} style={styles.attributeBox}>
                            <p><strong>Model: </strong>{this.state.model}</p>
                        </Grid>
                        <Grid item md={6} sm={12} style={styles.attributeBox}>
                            <p><strong>Made in: </strong>{this.state.madeIn}</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
  }
}

const styles = {
    title: {
        textAlign: 'center'
    },
    username: {
        textAlign: 'center'
    },
    descriptionBox: {
      backgroundColor: '#f7f7f7',
      marginLeft: '30px',
      marginRight: '30px',
      paddingLeft: '15px',
      paddingRight: '15px',
      marginBottom: '10px'
    },

    attributeContainer: {
        marginLeft: '10px',
        marginRight: '10px',
        paddingLeft: '15px',
        paddingRight: '15px',
        marginTop: '10px',
        marginBottom: '10px'
      },

    attributeBox: {
        backgroundColor: '#f7f7f7',
        textAlign: 'center',
        border: '5px solid white'
    }
  }

export default Body;
