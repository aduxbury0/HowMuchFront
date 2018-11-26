import React, { Component } from 'react';
import PostedComments from './postedComments';
import NewComment from './newComment';


class Comments extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      postId: '',
      replies: []
    }
  }

  componentWillReceiveProps(newProps) {
    if(typeof newProps.replies !== 'undefined' && newProps.replies !== {}) {
      this.setState({replies: newProps.replies, postId: newProps.postId}, () => {
     });
    }
  }


  render() {
    return (
      <div>
        <div>
          <PostedComments replies={this.state.replies} />
        </div>

        <div>
          <NewComment postId={this.state.postId}/>
        </div>
      </div>
    );
  }

}

export default Comments;
