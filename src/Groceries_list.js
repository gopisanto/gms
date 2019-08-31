
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

const GroceriesList = ({filter}) => {
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
            <TableCell>ITEM</TableCell>
            <TableCell align="right"><label className="bld">UNIT WEIGHT</label></TableCell>
            <TableCell align="right">UNIT PRICE</TableCell>
            <TableCell align="right">AVAILABLE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {groceries.groceries.filter(grocery => {
              const brand = grocery.brand.toLowerCase().trim();
              const item = grocery.item.toLowerCase().trim();
              const term = filter.toLowerCase().trim();

              return brand.indexOf(term) !== -1 || item.indexOf(term) !== -1;
          }).map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.brand.toUpperCase()}
              </TableCell>
              <TableCell>{row.item.toUpperCase()}</TableCell>
              <TableCell align="right">{row.unitWeight}</TableCell>
              <TableCell align="right">{row.unitPrice}</TableCell>
              <TableCell align="center">
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