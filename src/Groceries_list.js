
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { loadCSS } from 'fg-loadcss';
import clsx from 'clsx';
import Icon from '@material-ui/core/Icon';

import groceries from './groceries.json';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    margin: '20px auto',
    overflowX: 'auto'
  },
  head: {
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 'bold'
  },
  table: {
    minWidth: 650,
  },
}));

const GroceriesList = () => {
  const classes = useStyles();

  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>BRAND</TableCell>
            <TableCell align="right">ITEM</TableCell>
            <TableCell align="right">UNIT WEIGHT</TableCell>
            <TableCell align="right">UNIT PRICE</TableCell>
            <TableCell align="right">AVAILABLE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {groceries.groceries.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.brand}
              </TableCell>
              <TableCell align="right">{row.item}</TableCell>
              <TableCell align="right">{row.unitWeight}</TableCell>
              <TableCell align="right">{row.unitPrice}</TableCell>
              <TableCell align="right">
                {
                  row.available
                    ? <Icon className={clsx(classes.icon, 'fas fa-check')} />
                    : <Icon className={clsx(classes.icon, 'fas fa-times')} />
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default GroceriesList;