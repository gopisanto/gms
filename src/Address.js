import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
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
  clickable: {
    cursor: 'pointer',
    color: 'blue'
  }
}));

const tableHeaders = [
  { label: 'Name', align: 'left' },
  { label: 'Mobile', align: 'left' },
  { label: 'Whatsapp', align: 'left' },
  { label: 'Address', align: 'left' },
  { label: 'Bell name', align: 'left' },
  { label: 'Floor', align: 'center' },
  { label: 'copy address', align: 'center' }
];

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  }
}))(TableCell);

const Address = ({ filter }) => {
  console.log(`addresses are ${JSON.stringify(addresses)}`);
  const classes = useStyles();
  return (
    <React.Fragment>
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
                <TableCell align="left">{row.address}</TableCell>
                <TableCell align="left">{row.bellName}</TableCell>
                <TableCell align="center">{row.floor}</TableCell>
                <TableCell align="center">
                  <span className={classes.clickable} onClick={() => copy(row.address)}>copy address</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </React.Fragment>
  );
}

export default Address;
