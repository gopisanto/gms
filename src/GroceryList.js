import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import groceries from './groceries.json';
import grocery from './grocery.png';

import './GroceryList.css';

const formatCurrency = money => new Intl.NumberFormat('de-DE',
  { style: 'currency', currency: 'EUR' }
).format(money);

const GroceryList = ({ filter }) => {
  return (
    <Grid container spacing={3}>
      {
        groceries.groceries.filter(grocery => {
          const brand = grocery.brand.toLowerCase().trim();
          const item = grocery.item.toLowerCase().trim();
          const term = filter.toLowerCase().trim();

          return brand.indexOf(term) !== -1 || item.indexOf(term) !== -1;
        }).map(row => {
          return (
            <Grid item xs={6} md={3} key={`${row.item}-${row.unitWeight}`}>
              <Paper variant="outlined" square>
                <Card>
                  <CardMedia
                    src={grocery}
                    component="img"
                    title={`${row.brand} ${row.item} ${row.unitWeight}`}
                  />
                  <CardContent>
                    <Typography variant="h6" component="h6">
                      {`${row.brand} ${row.item}`.toUpperCase()}
                    </Typography>
                    <Typography variant="h6" component="h6">
                      {`${formatCurrency(row.unitPrice)} / ${row.unitWeight}`}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <div className="qtyContainer">
                      Qty.
                      <input className="quantity" type="text" placeholder="Quantity" />
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                      >
                        Add to cart
                      </Button>
                    </div>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
          );
        })
      }
    </Grid>
  );
};

export default GroceryList;