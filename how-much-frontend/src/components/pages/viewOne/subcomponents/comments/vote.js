import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import UpArrow from '@material-ui/icons/KeyboardArrowUp';
import DownArrow from '@material-ui/icons/KeyboardArrowDown';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';

class Vote extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.replyId,
      votes: this.props.votes
    }

    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
  }

  upvote() {
    axios({
      method: 'patch',
      url: `http://localhost:5000/api/v1/comment/vote`,
      params: {
        voteType: 'up',
        replyId: this.state.id
      },
      headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + sessionStorage.getItem('Authorization')
      },
    })
    .then(() => {
      this.setState({votes: (this.state.votes + 1)})
    })
    .catch(err => {
      console.log(err);
    });

  }

  downvote() {
    axios({
      method: 'patch',
      url: `http://localhost:5000/api/v1/comment/vote`,
      params: {
        voteType: 'down',
        replyId: this.state.id
      },
      headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + sessionStorage.getItem('Authorization')
      },
    })
    .then(() => {
      this.setState({votes: (this.state.votes - 1)})
    })
    .catch(err => {
      console.log(err);
    });

  }



  render() {
    if('Authorization' in sessionStorage){
      return (
        <div>
          <Grid container direction={'column'} style={styles.mainBox}>
            
            <Grid item>
              <IconButton onClick={() => {this.upvote()}}>
                <UpArrow />
              </IconButton>
            </Grid>
            
            <Grid item>
              <h5>{this.state.votes}</h5>
            </Grid>
            
            <Grid item>
              <IconButton onClick={() => {this.downvote()}}>
                <DownArrow />
              </IconButton>
            </Grid>
  
          </Grid>
        </div>
      );
    }
    else {
      return(
      <div>
        <Grid container direction={'row'} style={styles.mainBox}>
          <Grid item md={12}>
            <h5>{this.state.votes}</h5>
            <p><strong>log in<br />to vote</strong></p>
          </Grid>
        </Grid>
      </div>
      )
    }
  }
}

const styles = {

  mainBox: {
    textAlign: 'center',
    marginTop: '10%',
    marginBottom: '10%',
    borderRight: '2px solid #f2f2f2',
  },
}

export default Vote;
