import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import { addToCart } from '../src/redux/reducers';
import { formatCurrency } from './helper';
import styles from './GroceryListItem.style';

const GroceryListItem = ({ item, quantity, classes, addToCart: addItem }) => {
  const [qty, setQty] = useState(quantity);
  const onAddToCart = () => addItem({
    quantity: qty,
    unitPrice: item.unitPrice,
    itemCode: item.itemCode,
    brand: item.brand,
    name: item.item,
    unitWeight: item.unitWeight
  });
  const onQtyChange = ({ target: { value } }) => {
    if (value >= 0) {
      setQty(value)
    }
  }
  return (
    <Grid item xs={6} md={3} key={`${item.item}-${item.unitWeight}-${item.brand}`}>
      <Paper variant="outlined" square className={classes.paper}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={`${item.imgUrl}`}
            title={`${item.brand} ${item.item} ${item.unitWeight}`}
          />
          <CardContent classes={{ root: classes.content }}>
            <Typography variant="subtitle2" component="subtitle2">
              {`${item.brand} ${item.item}`.toUpperCase()}
            </Typography>
            <br />
            <Typography variant="subtitle2" component="subtitle2">
              {`${formatCurrency(item.unitPrice)} / ${item.unitWeight}`}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <div className="qtyContainer">
              Qty.
              <input
                className={classes.quantity}
                type="number"
                placeholder="Qty."
                min='0'
                value={qty}
                onChange={onQtyChange} />
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.addToCart}
                onClick={onAddToCart}
              >
                Add to cart
              </Button>
            </div>
          </CardActions>
        </Card>
      </Paper>
    </Grid >
  );
}

const mapStateToProps = ({ cart }, { item: { itemCode } }) => {
  const quantity = (cart[itemCode] && cart[itemCode].quantity) || 0;

  return { quantity };
}

export default withStyles(styles)(connect(mapStateToProps, { addToCart })(GroceryListItem));