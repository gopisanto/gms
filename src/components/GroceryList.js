import React from 'react';
import Grid from '@material-ui/core/Grid';

import GroceryListItem from './GroceryListItem';
import groceries from '../groceries.json';
import './GroceryList.css';



const GroceryList = ({ filter, filterByCode }) => {
  const relevantGroceries = groceries.groceries.filter(grocery => !grocery.hide);

  return (
    <Grid container spacing={3}>
      {
        relevantGroceries.filter(grocery => {
          const brand = grocery.brand.toLowerCase().trim();
          const item = grocery.item.toLowerCase().trim();
          const term = filter.toLowerCase().trim();
          const code = grocery.categoryCode;
          const available = grocery.available;

          return (brand.indexOf(term) !== -1 || item.indexOf(term) !== -1) && ((filterByCode && code.includes(filterByCode)) || !filterByCode) && ((!filterByCode && available) || filterByCode);
        }).map(item => {
          return (
            <React.Fragment key={`${item.itemCode}`}>
              <GroceryListItem item={item} />
            </React.Fragment>
          );
        })
      }
    </Grid >
  );
};

export default GroceryList;