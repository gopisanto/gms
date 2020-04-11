import React from 'react';
import { connect } from 'react-redux';
import { map, reduce, filter } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import copy from 'copy-to-clipboard';
import { deleteItemFromCart } from '../redux/reducers';
import { formatCurrency } from '../helper';

const useStyles = makeStyles(theme => ({
  table: {
    width: 500,
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
  copyOrder: {
    margin: '15px 5px',
  },
  ctr: {
    textAlign: 'center',
    textDecoration: 'underline'
  },
  deleteItem: {
    cursor: 'pointer'
  }
}));

const prepareCopyText = (cart, total) => {
  const description = reduce(cart, (result, item) => {
    if (item.quantity && item.quantity > 0) {
      return result.concat(`${item.brand} ${item.name}(${item.unitWeight}) ${item.quantity} * ${formatCurrency(item.unitPrice)} = ${formatCurrency(item.quantity * item.unitPrice)}\n`.toUpperCase())
    }
    return result;
  }, '');
  return `${description}\n Total = ${formatCurrency(total)}`;
}

const Cart = ({ cart, onBack, total, deleteItemFromCart }) => {
  const classes = useStyles();
  const goBack = 'X';
  copy(prepareCopyText(cart, total));
  const handleItemDelete = item => deleteItemFromCart(item);

  if (total <= 0) {
    onBack();
    return null;
  }

  return (
    <div>
      <Button color="primary" onClick={onBack}><h2>{goBack}</h2></Button>
      <h2 className={classes.ctr}>Invoice</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="left"><h4>Item</h4></TableCell>
              <TableCell align="right"><h4>Quantity</h4></TableCell>
              <TableCell align="right"><h4>Unit price</h4></TableCell>
              <TableCell align="right"><h4>Total</h4></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {map(filter(cart, item => item.quantity && item.quantity > 0), row => (
              <TableRow key={row.itemCode}>
                <TableCell>{`${row.brand} ${row.name}(${row.unitWeight})`.toUpperCase()}</TableCell>
                <TableCell align="center">{row.quantity}</TableCell>
                <TableCell align="right">{`${formatCurrency(row.unitPrice)}`}</TableCell>
                <TableCell align="right">{formatCurrency(row.quantity * row.unitPrice)}</TableCell>
                <TableCell align="center" className={classes.deleteItem} onClick={() => handleItemDelete(row)}><CloseIcon color="primary" /></TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={3} align="right"><h3>Total</h3></TableCell>
              <TableCell align="right">{formatCurrency(total)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" className={classes.copyOrder}>Copy the order</Button>
      <span>{'<-- Click here to copy the order and paste it in Whatsapp'}</span>
    </div>
  );
}

export default connect(state => {
  const total = reduce(state.cart, (result, item) => {
    return item.quantity * item.unitPrice + result;
  }, 0);
  return { cart: state.cart, total }
}, { deleteItemFromCart })(Cart);