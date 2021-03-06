import React from 'react';
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

const Address = () => {
  console.log(`addresses are ${JSON.stringify(addresses)}`);
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
                {!isMobile ? row.item.toUpperCase() : `${formatCurrency(row.unitPrice)} / ${row.unitWeight}`}
              </TableCell>
              <TableCell align="right">{!isMobile ? row.unitWeight : isAvailable(row.available)}</TableCell>
              <When guard={!isMobile}>
                <TableCell align="right">{formatCurrency(row.unitPrice)}</TableCell>
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

export default Address;