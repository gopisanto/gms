
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { loadCSS } from 'fg-loadcss';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import { withStyles } from '@material-ui/core/styles';

import groceries from './groceries.json';
import When from './When';

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

const isMobile = window.innerWidth <= 680;

const formatCurrency = money => new Intl.NumberFormat('de-DE',
  { style: 'currency', currency: 'EUR' }
).format(money);

const tableHeaders = isMobile
  ? [{ label: 'item', align: 'left' }, { label: 'price / weight', align: 'right' }, { label: 'in stock', align: 'center' }]
  : [{ label: 'brand', align: 'left' }, { label: 'item', align: 'left' }, { label: 'weight', align: 'right' }, { label: 'price', align: 'right' }, { label: 'in stock', align: 'right' }]

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const GroceriesList = ({ filter }) => {
  const classes = useStyles();
  const flag = true;

  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  const isAvailable = flag => flag
    ? <DoneIcon />
    : <ClearIcon />;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {tableHeaders.map((header, index) => <StyledTableCell key={index} align={header.align}>{header.label.toUpperCase()}</StyledTableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {groceries.groceries.filter(grocery => {
            const brand = grocery.brand.toLowerCase().trim();
            const item = grocery.item.toLowerCase().trim();
            const term = filter.toLowerCase().trim();

            return brand.indexOf(term) !== -1 || item.indexOf(term) !== -1;
          }).map((row, index) => (
            <TableRow key={index} className={index % 2 !== 0 ? 'odd' : ''}>
              <TableCell component="th" scope="row">
                {!isMobile ? row.brand.toUpperCase() : `${row.brand.toUpperCase()} ${row.item.toUpperCase()}`}
              </TableCell>
              <TableCell align={!isMobile ? 'left' : 'right'}>
                {!isMobile ? row.item.toUpperCase() : `${formatCurrency(flag ? 0 : row.unitPrice)} / ${row.unitWeight}`}
              </TableCell>
              <TableCell align="right">{!isMobile ? row.unitWeight : isAvailable(row.available)}</TableCell>
              <When guard={!isMobile}>
                <TableCell align="right">{flag ? formatCurrency(0) : formatCurrency(row.unitPrice)}</TableCell>
                <TableCell align="center">
                  {isAvailable(row.available)}
                </TableCell>
              </When>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default GroceriesList;
