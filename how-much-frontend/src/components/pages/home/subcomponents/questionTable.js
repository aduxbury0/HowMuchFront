import React, { Component } from 'react';
import QuestionRow from './questionRow';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import { TableHead } from '@material-ui/core';
import { TableCell } from '@material-ui/core';

class QuestionTable extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            table: []
        }
    }

    componentWillMount() {
        axios({
            method: 'get',
            url: 'http://localhost:5000/api/v1/posts/all',
            headers: {
                "Content-Type": "application/json"
            },
          })
          .then((response) => {
              let table = []
              response.data.forEach(element => {
  
                  table.push(
                      <QuestionRow 
                          key={element._id}
                          id={element._id}
                          username={element.username} 
                          title={element.title} 
                          quantity={element.quantity} 
                          condition={element.condition} 
                      />
                  );
              });
              this.setState({table: table});
              return;
          })
          .catch((err) => {
              console.log(err);
          });
    }

  render() {
    return (
        <Table>
            <TableHead>
                <TableCell>Title</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Condition</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell></TableCell>
            </TableHead>
            <TableBody>
                {this.state.table}
            </TableBody>
        </Table>
    );
  }
}

export default QuestionTable;


