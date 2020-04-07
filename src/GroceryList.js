import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import groceries from './groceries.json';

const GroceryList = ({ filter }) => {
  return (
    <Grid container spacing={1}>
      {
        groceries.groceries.filter(grocery => {
          const brand = grocery.brand.toLowerCase().trim();
          const item = grocery.item.toLowerCase().trim();
          const term = filter.toLowerCase().trim();

          return brand.indexOf(term) !== -1 || item.indexOf(term) !== -1;
        }).map((row, index) => {
          <Grid item xs={6} md={3} />
        })
      }
    </Grid>
  );
};