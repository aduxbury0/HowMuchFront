import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Navbar from '../../universal/header/header';
import Paper from '@material-ui/core/Paper';
import CreatePost from './subcomponents/createPostForm';

class PostQuestion extends Component {
  render() {
    return (
        <div>
            <Navbar />
            <Grid container={true}>
                <Grid item md={3} sm={1} xs={"auto"}></Grid>
                <Grid item md={6} sm={10} xs={12}>
                    <Paper style={styles.loginPaper}>
                        <CreatePost />
                    </Paper>

                </Grid>
                <Grid item md={3} sm={1} xs={"auto"}></Grid>
            </Grid>
        </div>
    );
  }
}

const styles = {
    loginPaper: {
      marginTop: "5%",
      paddingTop: "20px",
      paddingBottom: "20px",
    }
  }

export default PostQuestion;
