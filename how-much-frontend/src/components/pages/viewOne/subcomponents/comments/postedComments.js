import React, { Component } from 'react';
import Comment from './comment';


class PostedComments extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }

  componentWillReceiveProps(newProps) {
    if(typeof newProps.replies !== 'undefined' && newProps.replies !== {}) {
      let comments = [];
      newProps.replies.forEach(reply => {
        comments.push(
          <Comment
            key={reply._id} 
            reply={reply}
          />
        );
      });
      this.setState({comments: comments});
    }
  }

  render() {
    return (
      <div>
        {this.state.comments}
      </div>
    );
  }

}

export default PostedComments;
