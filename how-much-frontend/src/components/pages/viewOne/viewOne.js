import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Body from './subcomponents/body/body';
import Comments from './subcomponents/comments/comments';
import Navbar from '../../universal/header/header'
import './viewOne.css';

class ViewOne extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    }
  }


  componentDidMount() {
    if(typeof this.props.location.query !== 'undefined') {
      this.setState({id: this.props.location.query.id}, () => {
        axios({
          method: 'get',
          url: `http://localhost:5000/api/v1/posts/one`,
          params: {
            id: this.state.id
          },
          headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + sessionStorage.getItem('Authorization')
          },
        })
        .then((post) => {
          this.setState({post: {
            username: post.data.username,
            title: post.data.title,
            description: post.data.description,
            quantity: post.data.quantity,
            condition: post.data.condition,
            brand: post.data.brand,
            model: post.data.model,
            madeIn: post.data.madeIn,
            created: post.data.createdAt
          }});
          this.setState({replies: post.data.replies});
        })
        .catch(err => {
          console.log(err);
        })
      });
    }
    else {
      window.location.href = '/';
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <Grid container={true} style={styles.mainGrid}>
          
          <Grid item md={2} sm={1} xs={"auto"}></Grid>
          
          <Grid item md={8} sm={10} xs={12} >
            <Body post={this.state.post}/>
          </Grid>
          
          <Grid item md={2} sm={1} xs={"auto"}></Grid>

        </Grid>

        <Grid container={true}>
          
          <Grid item md={2} sm={1} xs={"auto"}></Grid>
          
          <Grid item md={8} sm={10} xs={12} >
            <h3>Comments:</h3>
            <Comments replies={this.state.replies} postId={this.state.id}/>
          </Grid>
          
          <Grid item md={2} sm={1} xs={"auto"}></Grid>

        </Grid>
      </div>
    );
  }
}

const styles = {
  mainGrid: {
    marginTop: "40px"
  }
}

export default withRouter(ViewOne);
