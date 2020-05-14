import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { addToCart } from '../redux/reducers';
import { formatCurrency } from '../helper';
import styles from './GroceryListItem.style';
import commingsoon from '../commingsoon.json';

const GroceryListItem = ({ item, classes, addToCart: addItem }) => {
  const [qty, setQty] = useState();
  const [error, setError] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const onAddToCart = () => {
    addItem({
      quantity: qty,
      unitPrice: item.unitPrice,
      itemCode: item.itemCode,
      brand: item.brand,
      name: item.item,
      unitWeight: item.unitWeight
    });
    setQty('');
    setAddedToCart(true);
  }
  const onQtyChange = ({ target: { value } }) => {
    setQty(value);
    if (!Number.isInteger(Number(value))) {
      setError(true);
    } else if (value >= 0) {
      setError(false);
    }
  }
  const qtyClass = classNames(classes.quantity, { [classes.error]: error });
  // the below priceClass was used to put a black foreground for non available items, but its awkward for now so just commenting. after proper decision remove this line
  // const priceClass = !item.available ? classes.outOfStockPrice : '';
  return (
    <Grid item xs={6} sm={4} md={3} key={`${item.item}-${item.unitWeight}-${item.brand}`} className={classes.itemContainer}>
      {!item.available && <div className={classes.outOfStock}>
        {""}
      </div>}
      <Paper variant="outlined" square className={classes.paper}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={!!item.imgUrl ? require(`../../src${item.imgUrl}`) : null}
            title={`${item.brand} ${item.item} ${item.unitWeight}`}
          />
          <CardContent classes={{ root: classes.content }}>
            {
              !item.available
              &&
              <React.Fragment>
                <Typography variant="overline" component="subtitle2" color="error">
                  {commingsoon.includes(item.itemCode) ? "comming soon" : "out of stock"}
                </Typography>
                <br />
              </React.Fragment>
            }
            {
              item.itemCode === 'btlgourd'
              &&
              <React.Fragment>
                <Typography variant="overline" component="subtitle2" color="textPrimary">
                  Available per Stuck also.
                </Typography>
                <br />
              </React.Fragment>
            }
            <Typography variant="subtitle2" component="subtitle2">
              {`${item.brand} ${item.item}`.toUpperCase()}
            </Typography>
            <br />
            <Typography variant="subtitle2" component="subtitle2">
              {`${formatCurrency(!item.available ? 0 : item.unitPrice)} / ${item.unitWeight}`}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <div className="qtyContainer">
              <div className="flexified">
                <div>
                  <input
                    className={qtyClass}
                    type="number"
                    placeholder="Qty."
                    min='1'
                    value={qty}
                    onChange={onQtyChange} />
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.addToCart}
                    onClick={onAddToCart}
                    disabled={!qty || qty <= 0 || error}
                  >
                    To cart
              </Button>
                </div>
                {error && <label className={classes.errorLabel}>Enter proper quantity (no decimals)</label>}
              </div>
              <Snackbar
                open={addedToCart}
                autoHideDuration={3000}
                onClose={() => setAddedToCart(false)}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MuiAlert onClose={() => setAddedToCart(false)} severity="success" variant="filled">
                  {`${item.brand} ${item.item} added to cart.`}
                </MuiAlert>
              </Snackbar>
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