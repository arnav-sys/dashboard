import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./style.css"


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable3({username, order_no, date, status, total_quantity, count}) {
  const classes = useStyles();

  return (
    <TableContainer className="table" component={Paper}>
        <h2 className="text">detail order report</h2>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Order no</TableCell>
            <TableCell align="right">Order date</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">total qty</TableCell>
            <TableCell align="right">total product Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key="1">
              <TableCell align="right">{username}</TableCell>
              <TableCell align="right">{order_no}</TableCell>
              <TableCell align="right">{date}</TableCell>
              <TableCell align="right">{status}</TableCell>
              <TableCell align="right">{total_quantity}</TableCell>
              <TableCell align="right">{count}</TableCell>

            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}