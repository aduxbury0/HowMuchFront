import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Vote from './vote';



class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: this.props.reply.username,
            content: this.props.reply.content,
            votes: this.props.reply.votes,
            confirmed: this.props.reply.confirmed,
            url: this.props.reply.url,
            created: this.props.reply.createdAt,
            id: this.props.reply._id
        }
    }

  render() {
    return (
      <div>
          <Paper>
              <Grid container>

                <Grid item md={1}>
                    <Vote replyId={this.state.id} votes={this.state.votes}/>
                </Grid>

                <Grid item md={11} style={styles.leftPadding}>
                    <Grid container>
                        <Grid item md={3}>
                            <h4>{this.state.username}</h4>
                        </Grid>
                        <Grid item md={7}>
                            <h4>{this.state.url}</h4>
                        </Grid>
                        <Grid item md={2}>
                            
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={12}>
                            <p>{this.state.content}</p>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={12}>
                            <h5>Posted on: {this.state.created.substring(0, 10)}</h5>
                        </Grid>
                    </Grid>
                </Grid>

              </Grid>
          </Paper>
      </div>
    );
  }
}

const styles = {
    leftPadding: {
        paddingLeft: '20px',
        paddingRight: '20px'
    }

}

export default Comment;
