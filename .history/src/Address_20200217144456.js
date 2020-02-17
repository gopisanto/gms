import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { map } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import copy from 'copy-to-clipboard';
import addresses from './addresses.json';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    margin: '20px auto',
    overflowX: 'auto'
  },
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  table: {
    minWidth: 370,
  },
}));

const tableHeaders = [
  { label: 'Name', align: 'left' },
  { label: 'Mobile', align: 'center' },
  { label: 'Whatsapp', align: 'center' },
  { label: 'Address', align: 'left' },
  { label: 'copy address', align: 'center' }
];

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const Address = () => {
  console.log(`addresses are ${JSON.stringify(addresses)}`);
  const classes = useStyles();
  return (
    <ul>
      {map(addresses, address => (<li key={`${address.name}${address.address}`}>{`Address for ${address.name} is ${address.address}`}</li>))}
    </ul>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {tableHeaders.map((header, index) => <StyledTableCell key={index} align={header.align}>{header.label.toUpperCase()}</StyledTableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {addresses.filter(address => {
            const name = address.name.toLowerCase();
            const mobile = address.address.trim();
            const whatsApp = address.whatsapp.trim();
            const term = filter.toLowerCase().trim();

            return name.indexOf(term) !== -1 || mobile.indexOf(term) !== -1 || whatsApp.indexOf(term) !== -1;
          }).map((row, index) => (
            <TableRow key={index} className={index % 2 !== 0 ? 'odd' : ''}>
              <TableCell component="th" scope="row">
                {row.name.toUpperCase()}
              </TableCell>
              <TableCell align="left">
                {row.mobile}
              </TableCell>
              <TableCell align="left">
                {row.whatsapp}
              </TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">
                <span onClick={() => copy(row.address)}>copy address</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    );
}

export default Address;