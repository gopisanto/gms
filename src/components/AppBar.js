import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { reduce } from 'lodash';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import styles from './AppBar.style.js';

const AppBarComp = ({ classes, value, onChange, menuClickHandler, onCartClick, total }) => {
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={menuClickHandler}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={value}
              onChange={onChange}
            />
          </div>
          <div className={classes.grow} />
          <div>
            <IconButton
              edge="end"
              aria-label="Your items"
              aria-haspopup="true"
              color="inherit"
              disabled={total <= 0}
            >
              <AddShoppingCartIcon fontSize="large" onClick={onCartClick} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = state => {
  const total = reduce(state.cart, (result, item) => {
    return item.quantity * item.unitPrice + result;
  }, 0);
  return { total }
}

export default withStyles(styles)(connect(mapStateToProps)(AppBarComp));