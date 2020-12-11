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

const holiday = true;

const Holiday = () => <div style={{fontSize: '22px', fontWeight: 'bold', display: 'flex', height: '100vh', overflow: 'auto', textAlign: 'center', alignItems: 'center'}}>
  We are not processing anymore orders for now, sorry for the inconvenience. We will inform you again once we start taking orders. Thank you and Be safe.
</div>;

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
      {
        !holiday
        &&
        <React.Fragment>
          <Header />
          <h3>Important:- We will consider orders placed till 10th December 2020, since we will close and resume our services again from March 1st, 2021. Since we are going to India.</h3>
          <AppBar value={filter} onChange={onFilterChange} menuClickHandler={onMenuClick} onCartClick={onCartClick} />
        </React.Fragment>
      }
      <div>
        <Switch>
          <Route path='/' exact>
            <Holiday />
          </Route>
          <Route path="/abcdhfjhsjgfhgsfhjgshfbbewhiryhyweirhjbhfghjghjfgjhsdfgjgsdbcnbsdjfghjsdfgjsdfg" exact>
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
            <AppBar value={filter} onChange={onFilterChange} menuClickHandler={onMenuClick} onCartClick={onCartClick} />
            <Address filter={filter} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default withStyles(styles)(App);
