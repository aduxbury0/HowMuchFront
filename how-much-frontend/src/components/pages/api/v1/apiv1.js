import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Navbar from '../../../universal/header/header';
import Paper from '@material-ui/core/Paper';

class ApiV1 extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Grid container={true}>
            <Grid item md={3} sm={1} xs={"auto"}></Grid>
            <Grid item md={6} sm={10} xs={12}>
              <h1>API V1</h1>
              <div>
                <h2>Post Functions</h2>

                <Paper style={styles.mainPaper}>
                  <h3>Add a new Post</h3>
                  <p><strong>[POST] /api/v1/posts/post</strong></p>
                  <p><strong>Headers:</strong><br /> 
                  &emsp;Authorization: Bearer &lt;KEY HERE&gt;<br /> 
                  &emsp;Content-Type: application/json
                  </p>
                  <p><strong>Body:</strong><br />
                  &emsp;title: The title of the post<br />
                  &emsp;description: a description of the item you wish to buy<br />
                  &emsp;quantity: how many you wish to buy<br />
                  &emsp;condition: from "NEW" / "USED" / "USED - LIKE NEW"<br />
                  &emsp;brand: The brand of the item you wish to buy<br />
                  &emsp;model: model number of the item if relevent<br />
                  &emsp;madeIn: the country of origin of the item<br />
                  </p>

                  <p><strong>Example:</strong><br />
                  &#123; <br/>
                  &emsp;"title": "test2", <br />
                  &emsp;"description": "test2 desc", <br />
                  &emsp;"quantity": "2", <br />
                  &emsp;"condition": "new", <br />
                  &emsp;"brand": "TestCo2", <br />
                  &emsp;"model": "TestCo 3000", <br />
                  &emsp;"madeIn": "Japan" <br />
                  &#125;
                  </p>

                  <p><strong>Response: </strong><br />
                  &emsp;Success: 200 <br />
                  &emsp;Failure: 500 <br />
                  </p>
                </Paper>

                <Paper style={styles.mainPaper}>
                  <h3>Get all posts</h3>
                  <p><strong>[GET] /api/v1/posts/all</strong></p>
                  <p><strong>Headers:</strong><br /> 
                  &emsp;Authorization: Bearer &lt;KEY HERE&gt;<br /> 
                  </p>
                  <p><strong>Body:</strong><br />

                  </p>

                  <p><strong>Example:</strong><br />
                  
                  </p>

                  <p><strong>Response: </strong><br />
                  &emsp;Success: 200 and a JSON object of all posts<br />
                  &emsp;Failure: 500 <br />
                  </p>
                </Paper>

                <Paper style={styles.mainPaper}>
                  <h3>Get a single post</h3>
                  <p><strong>[GET] /api/v1/posts/one</strong></p>
                  <p><strong>Headers:</strong><br /> 
                  &emsp;Authorization: Bearer &lt;KEY HERE&gt;<br /> 
                  </p>
                  <p><strong>Params:</strong><br />
                  &emsp;id: The id number of the post<br />

                  </p>

                  <p><strong>Example:</strong><br />
                  &#123; <br/>
                  &emsp;"id": "5bef5b23db5c401e046d384a", <br />
                  &#125;
                  </p>

                  <p><strong>Response: </strong><br />
                  &emsp;Success: 200 and a JSON object containing the post<br />
                  &emsp;Failure: 404 if post doesn't exist, 500 otherwise<br />
                  </p>
                </Paper>

                <Paper style={styles.mainPaper}>
                  <h3>Search for a post</h3>
                  <p><strong>[GET] /api/v1/posts/search</strong></p>
                  <p><strong>Headers:</strong><br /> 
                  &emsp;Authorization: Bearer &lt;KEY HERE&gt;<br /> 
                  &emsp;Content-Type: application/json
                  </p>
                  <p><strong>Params:</strong><br />
                  &emsp;category: The category of the data you are using to search by (categories are listed in the Body area of POST documentation<br/>&emsp; "Add a new Post")<br />
                  &emsp;data: the data to search the category for<br />
                  </p>

                  <p><strong>Example (params):</strong><br />
                  &#123; <br/>
                  &emsp;"category": "quantity", <br />
                  &emsp;"data": "2", <br />
                  &#125;
                  </p>

                  <p><strong>Response: </strong><br />
                  &emsp;Success: 200 and an array with JSON objects inside that match the category data <br />
                  &emsp;Failure: 404 if doesnt exist, 500 otherwise <br />
                  </p>
                </Paper>

              </div>
              <div>
                <h2>Reply Functions</h2>

                <Paper style={styles.mainPaper}>
                  <h3>Add a new Reply</h3>
                  <p><strong>[POST] /api/v1/comment/post</strong></p>
                  <p><strong>Headers:</strong><br /> 
                  &emsp;Authorization: Bearer &lt;KEY HERE&gt;<br /> 
                  &emsp;Content-Type: application/json
                  </p>

                  <p><strong>Params:</strong><br /> 
                  &emsp;postId: the id of the post you want to comment on<br /> 
                  </p>

                  <p><strong>Body:</strong><br />
                  &emsp;content: The content of the reply<br />
                  &emsp;url: url of the item you are linking to<br />
                  </p>

                  <p><strong>Example:</strong><br />
                  &#123; <br/>
                  &emsp;"content": "new reply content go here", <br />
                  &emsp;"url": "www.testurl.test", <br />
                  &#125;
                  </p>

                  <p><strong>Response: </strong><br />
                  &emsp;Success: 201 and "Reply successfully created" <br />
                  &emsp;Failure: 500 <br />
                  </p>
                </Paper>

                <Paper style={styles.mainPaper}>
                  <h3>Get all replies on a specific post</h3>
                  <p><strong>[GET] /api/v1/comment/all</strong></p>
                  <p><strong>Headers:</strong><br /> 
                  &emsp;Authorization: Bearer &lt;KEY HERE&gt;<br /> 
                  </p>
                  <p><strong>Params:</strong><br />
                  &emsp;id: The id of the post you want replies for<br />
                  </p>

                  <p><strong>Example:</strong><br />
                  &#123; <br/>
                  &emsp;"id": "5bef5b23db5c401e046d384a", <br />
                  &#125;
                  </p>

                  <p><strong>Response: </strong><br />
                  &emsp;Success: 200 and an array of JSON objects (each object is a single reply)<br />
                  &emsp;Failure: 500 <br />
                  </p>
                </Paper>

                <Paper style={styles.mainPaper}>
                  <h3>Vote on a reply (up or down)</h3>
                  <p><strong>[PATCH] /api/v1/comment/vote</strong></p>
                  <p><strong>Headers:</strong><br /> 
                  &emsp;Authorization: Bearer &lt;KEY HERE&gt;<br /> 
                  </p>
                  <p><strong>Params:</strong><br />
                  &emsp;voteType: "up" or "down" only<br />
                  &emsp;replyId: the id of the reply you want to up or downvote<br />
                  </p>

                  <p><strong>Example:</strong><br />
                  &#123; <br/>
                  &emsp;"voteType": "up", <br />
                  &emsp;"replyId": "5bf1d937dff41e2fb03e27c8", <br />
                  &#125;
                  </p>

                  <p><strong>Response: </strong><br />
                  &emsp;Success: 204 <br />
                  &emsp;Failure: 500 or 400 if incorrect vote value ("up" or "down" only) <br />
                  </p>
                </Paper>
                
                <Paper style={styles.mainPaper}>
                  <h3>Confirm a reply as the accepted answer</h3>
                  <p><strong>[PATCH] /api/v1/comment/confirm</strong></p>
                  <p><strong>Headers:</strong><br /> 
                  &emsp;Authorization: Bearer &lt;KEY HERE&gt;<br /> 
                  </p>
                  <p><strong>Params:</strong><br />
                  &emsp;postId: the id of the post you created<br />
                  &emsp;replyId: the id of the reply you want to confirm as the accepted answer<br />
                  </p>

                  <p><strong>Example (params):</strong><br />
                  &#123; <br/>
                  &emsp;"postId": "5bf1d937dff41e2as45v30f9", <br />
                  &emsp;"replyId": "5bf1d937dff41e2fb03e27c8", <br />
                  &#125;
                  </p>

                  <p><strong>Response: </strong><br />
                  &emsp;Success: 204 <br />
                  &emsp;Failure: 403 if you did not create the post that the comment is on, 500 else <br />
                  </p>
                </Paper>
              </div>
              <div>
                <h2>User Functions</h2>

                <Paper style={styles.mainPaper}>
                  <h3>Register a new user</h3>
                  <p><strong>[POST] /api/v1/posts/post</strong></p>
                  <p><strong>Headers:</strong><br /> 
                  &emsp;Content-Type: application/json
                  </p>
                  <p><strong>Body:</strong><br />
                  &emsp;username: the username you want to use for the service<br />
                  &emsp;password: the password you want to use for the service<br />
                  </p>

                  <p><strong>Example:</strong><br />
                  &#123; <br/>
                  &emsp;"username": "newUser1", <br />
                  &emsp;"password": "testPassword1234", <br />
                  &#125;
                  </p>

                  <p><strong>Response: </strong><br />
                  &emsp;Success: 200 <br />
                  &emsp;Failure: 400 if you do not pass strings for both values, 500 else <br />
                  </p>
                </Paper>

                <Paper style={styles.mainPaper}>
                  <h3>Register a new user</h3>
                  <p><strong>[POST] /api/v1/user/login</strong></p>
                  <p><strong>Headers:</strong><br /> 
                  &emsp;Content-Type: application/json
                  </p>
                  <p><strong>Body:</strong><br />
                  &emsp;username: the username you use for the service<br />
                  &emsp;password: the password you use for the service<br />
                  </p>

                  <p><strong>Example:</strong><br />
                  &#123; <br/>
                  &emsp;"username": "newUser1", <br />
                  &emsp;"password": "testPassword1234", <br />
                  &#125;
                  </p>

                  <p><strong>Response: </strong><br />
                  &emsp;Success: 200, a JSON web token to use as your authorization header for all other routes <br />
                  &emsp;Failure: 401<br />
                  </p>
                </Paper>

              </div>
            </Grid>
            <Grid item md={3} sm={1} xs={"auto"}></Grid>
          
        </Grid>
      </div>
    );
  }
}

const styles = {
  mainPaper: {
    backgroundColor: "#fafafa",
    marginTop: "10px",
    marginBottom: "10px",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingRight: "20px",
    paddingLeft: "20px"
  }
}


export default ApiV1;
