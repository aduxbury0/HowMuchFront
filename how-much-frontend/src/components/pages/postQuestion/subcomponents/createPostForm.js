import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { InputLabel } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

class CreatePostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            quantity: '',
            condition: '',
            brand: '',
            model: '',
            madeIn: '',     
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    handleSubmit(event) {
        
        if(this.state.title === ''){
            alert('Title cannot be empty');
            return;
        }
        else if(this.state.quantity === ''){
            alert('Quantity cannot be empty');
            return;
        }
        else if(this.state.description === ''){
            alert('Description cannot be empty');
            return;
        }
        else if(this.state.condition === ''){
            alert('Condition must be selected');
            return;
        }

        axios({
            method: 'post',
            url: 'http://localhost:5000/api/v1/posts/post',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + sessionStorage.getItem('Authorization')
            },
            data: {
                title: this.state.title,
                description: this.state.description,
                quantity: this.state.quantity,
                condition: this.state.condition,
                brand: this.state.brand,
                model: this.state.model,
                madeIn: this.state.madeIn,
            }
        })
        .then(() => {
            alert('Question created');

        })
        .catch(err => {
            console.log(err)
        })    
    }

    render() {
        const { classes } = this.props;

        if('Authorization' in sessionStorage){

        return (
            <div>
                <Grid container={true} justify="center" direction="column" style={styles.grid}>
                        <p style={styles.topText}>Enter details here to create a "How Much" question</p>              
                        <Grid container>
                        
                            <Grid item md={6}>
                                <TextField
                                style={styles.inputBoxes} 
                                label="Title"
                                variant="outlined"
                                onChange = {this.handleChange('title')}
                                />
                            </Grid>
                            
                            <Grid item md={6}>
                                <TextField
                                style={styles.inputBoxes} 
                                label="Quantity"
                                type="number"
                                variant="outlined"
                                onChange = {this.handleChange('quantity')}
                                />
                            </Grid>
                        </Grid>
                
                        <Grid container>
                            <Grid item md={12}>
                                <TextField 
                                    fullWidth={true}
                                    multiline={true}
                                    rows={6}
                                    label={'Description'}
                                    placeholder={'Enter product description here'}
                                    onChange = {this.handleChange('description')}
                                />
                            </Grid>
                        </Grid>

                        <Grid container>
                        
                        <Grid item md={6}>
                        <FormControl className={classes.formControl} style={styles.inputBoxes}>
                        <InputLabel htmlFor="condition-input">Condition</InputLabel>
                        <Select
                            
                            value={this.state.condition}
                            onChange={this.handleChange('condition')}
                            inputProps={{
                            name: 'condition',
                            id: 'condition-input',
                            }}>
                            <MenuItem value={'NEW'}>New</MenuItem>
                            <MenuItem value={'USED - LIKE NEW'}>Used - Like new</MenuItem>
                            <MenuItem value={'USED'}>Used</MenuItem>
                        </Select>
                        </FormControl>
                        </Grid>
                        
                        <Grid item md={6}>
                            <TextField
                            style={styles.inputBoxes} 
                            label="Brand"
                            variant="outlined"
                            onChange = {this.handleChange('brand')}
                            />
                        </Grid>
                    </Grid>

                    <Grid container>
                        
                        <Grid item md={6}>
                            <TextField
                            style={styles.inputBoxes} 
                            label="Model"
                            variant="outlined"
                            onChange = {this.handleChange('model')}
                            />
                        </Grid>
                        
                        <Grid item md={6}>
                            <TextField
                            style={styles.inputBoxes} 
                            label="Made In"
                            variant="outlined"
                            onChange = {this.handleChange('madeIn')}
                            />
                        </Grid>
                    </Grid>

                        <Button
                            variant="contained"
                            color="primary"
                            style={styles.button}
                            onClick={(event) => this.handleSubmit(event)}
                        >Submit</Button>
                </Grid>
            </div>
        );
    }
    else {
        return(
            <div>
                    <p style={styles.topText} >You must be logged in to post</p>
            </div>
        );
    }
  }
}

const styles = {
    grid: {
        paddingLeft: "10%",
        paddingRight: "10%"
    },
    button: {
        marginTop: '25px',
        width: "15%",
        left: "40%"
    },
    topText: {
        marginTop: "15px",
        fontFamily: "Roboto",
        fontSize: '18px',
        textAlign: 'center'
    },
    inputBoxes: {
        width: '90%',
        left: '5%',
        paddingLeft: '5px',
        paddingRight: '5px',
        paddingTop: '10px',
        paddingBottom: '5px'
    }
  }


export default withStyles(styles)(CreatePostForm);

