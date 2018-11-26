import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class NewComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.postId,
      commentBody: '',
      commentUrl: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitComment = this.submitComment.bind(this);
  }
  
  componentWillReceiveProps(newProps) {
    if(newProps.postId) {
      this.setState({id: newProps.postId});
    }
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  submitComment() {
    if(this.state.commentBody !== '' && this.state.commentBody !== ' ') {
      axios({
        method: 'post',
        url: 'http://localhost:5000/api/v1/comment/post',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem('Authorization')
        },
        params: {
          id: this.state.id
        },
        data: {
          "content": this.state.commentBody,
          "url": this.state.commentUrl
        }
      })
      .then(() => {
        alert('Comment submitted successfully');
      })
      .catch(err => {
        console.log(err)
      });
    }
    else {
      alert('Please do not submit empty comments');
    }
  }


  render() {
    if('Authorization' in sessionStorage) {

      return (
        <div>
          <Paper style={styles.topMargin}>
            <Grid container direction={'column'}>
              <Grid item md={12} style={styles.textAreaStyle}>
                <TextField 
                  fullWidth={true} 
                  multiline={true} 
                  placeholder={'Enter comment text here'} 
                  rows={8} 
                  onChange={this.handleChange('commentBody')}
                  required={true}
                />
              </Grid>
              <Grid>
              <TextField
                  style={styles.textAreaStyle} 
                  fullWidth={true} 
                  placeholder={'Enter product URL here'} 
                  onChange={this.handleChange('commentUrl')}
                  
                />
              </Grid>
              <Grid item md={12} style={styles.buttonAreaStyle}>
                <Button onClick={() => {this.submitComment()}}>Submit</Button>
              </Grid>
            </Grid>
          </Paper>
        </div>
      );
    }
    else {
      return(
        <Paper style={styles.topMargin}>
          <Grid container>
            <Grid item md={12} style={styles.logInMessage}>
              <h4>Log in to comment</h4>
            </Grid>
          </Grid>
        </Paper>
      );
    }
  }
}

const styles = {

  topMargin: {
    marginTop: '20px'
  },
  textAreaStyle: {
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '20px'
  },
  buttonAreaStyle: {
    textAlign: 'center',
    marginTop: '10px',
    marginBottom: '10px'
  },
  logInMessage: {
    textAlign: 'center',
    top: '45%'
  }
}

export default NewComment;
