import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Link }  from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ForwardIcon from '@material-ui/icons/Forward';

class QuestionRow extends Component {
    
  render() {
    return (
        <TableRow>
            <TableCell>{this.props.title}</TableCell>
            <TableCell>{this.props.username}</TableCell>
            <TableCell>{this.props.condition}</TableCell>
            <TableCell>{this.props.quantity}</TableCell>
            <TableCell><Link to={{pathname: '/viewOne', query: {id: this.props.id} }} >
                <IconButton
                    key='close'
                    aria-label='close'
                    color='secondary'>
                    <ForwardIcon color='secondary'></ForwardIcon>
                </IconButton>
            </Link></TableCell>
        </TableRow>
    );
  }
}

export default QuestionRow;


