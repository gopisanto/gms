import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Groceries from './GroceryList'
import Address from './Address';
import {
  Switch,
  Route,
} from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import Header from './Header';
import AppBar from './AppBar';
import FilterMenu from './FilterMenu';
import Cart from './Cart';
import Col from './Col';
import "./App.css";
import styles from './App.style';


function App({ classes: { app, filterMenu, groceries } }) {
  const history = useHistory();
  const [filter, setFilter] = useState('');
  const [filterByCode, setFilterByCode] = useState('');
  const [openCart, setOpenCart] = useState(false);
  const onFilterChange = ({ target: { value } }) => {
    setFilterByCode('');
    setFilter(value);
  }
  const onItemClick = code => {
    history.push('/');
    setFilter('');
    setFilterByCode(code);
  }
  const onMenuClick = () => {
    history.push('/filterMenu');
  }

  const onCartClick = () => setOpenCart(true);
  
  return (
    <div className={app}>
      <Header />
      <AppBar value={filter} onChange={onFilterChange} menuClickHandler={onMenuClick} onCartClick={onCartClick} />
      <div>
        <Switch>
          <Route path="/" exact>
            <div className="groceryContent">
              <Col className={filterMenu}>
                <FilterMenu itemClickHandler={onItemClick} />
              </Col>
              <Col numCol={9} className={groceries}>
                <Groceries filter={filter} filterByCode={filterByCode} />
              </Col>
            </div>
            <Drawer anchor="right" open={openCart} onClose={() => setOpenCart(false)}>
              <Cart onBack={() => setOpenCart(false)} />
            </Drawer>
          </Route>
          <Route path="/filterMenu" exact>
            <FilterMenu itemClickHandler={onItemClick} />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/address" exact>
            <Address filter={filter} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default withStyles(styles)(App);
