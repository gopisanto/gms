import React from 'react';
import Grid from '@material-ui/core/Grid';

import GroceryListItem from './GroceryListItem';
import groceries from '../groceries.json';
import './GroceryList.css';



const GroceryList = ({ filter, filterByCode }) => {
  return (
    <Grid container spacing={3}>
      {
        groceries.groceries.filter(grocery => {
          const brand = grocery.brand.toLowerCase().trim();
          const item = grocery.item.toLowerCase().trim();
          const term = filter.toLowerCase().trim();
          const code = grocery.categoryCode;

          return (brand.indexOf(term) !== -1 || item.indexOf(term) !== -1) && ((filterByCode && code.includes(filterByCode)) || !filterByCode);
        }).map(item => {
          return (
            <React.Fragment>
              <GroceryListItem item={item} />
            </React.Fragment>
          );
        })
      }
    </Grid >
  );
};

export default GroceryList;