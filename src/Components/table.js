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

export default function BasicTable({order_number,
  total_quantity,total_amount,username,order_number2, total_amount2, username2, total_quantity2, order_number3, total_amount3, username3, total_quantity3, 
  order_number4, total_amount4, username4, total_quantity4, order_number5, total_amount5, username5, total_quantity5, 
  Title, Title2, Title3, Title4}) {
  const classes = useStyles();

  return (
    <TableContainer className="table" component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">{Title}</TableCell>
            <TableCell align="right">{Title2}</TableCell>
            <TableCell align="right">{Title3}</TableCell>
            <TableCell align="right">{Title4}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key="1">
              <TableCell align="right">{username}</TableCell>
              <TableCell align="right">{order_number}</TableCell>
              <TableCell align="right">{total_amount}</TableCell>
              <TableCell align="right">{total_quantity}</TableCell>
            </TableRow>
            <TableRow key="1">
              <TableCell align="right">{username2}</TableCell>
              <TableCell align="right">{order_number2}</TableCell>
              <TableCell align="right">{total_amount2}</TableCell>
              <TableCell align="right">{total_quantity2}</TableCell>
            </TableRow>
            <TableRow key="1">
              <TableCell align="right">{username3}</TableCell>
              <TableCell align="right">{order_number3}</TableCell>
              <TableCell align="right">{total_amount3}</TableCell>
              <TableCell align="right">{total_quantity3}</TableCell>
            </TableRow>
            <TableRow key="1">
              <TableCell align="right">{username4}</TableCell>
              <TableCell align="right">{order_number4}</TableCell>
              <TableCell align="right">{total_amount4}</TableCell>
              <TableCell align="right">{total_quantity4}</TableCell>
            </TableRow>
            <TableRow key="1">
              <TableCell align="right">{username5}</TableCell>
              <TableCell align="right">{order_number5}</TableCell>
              <TableCell align="right">{total_amount5}</TableCell>
              <TableCell align="right">{total_quantity5}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}