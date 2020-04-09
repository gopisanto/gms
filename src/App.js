import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Groceries from './GroceryList'
import Address from './Address';
import {
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import AppBar from './components/AppBar';
import FilterMenu from './components/FilterMenu';
import Col from './Col';
import "./App.css";
import styles from './App.style';

function App({ classes: { app, filterMenu, groceries } }) {
  const history = useHistory();
  const [filter, setFilter] = useState('');
  const [filterByCode, setFilterByCode] = useState('');
  const onFilterChange = ({ target: { value } }) => {
    setFilterByCode('');
    setFilter(value);
  }
  const onItemClick = code => {
    history.push('/');
    setFilterByCode(code);
  }
  const onMenuClick = () => {
    history.push('/filterMenu');
  }

  return (
    <div className={app}>
      <Header />
      <AppBar value={filter} onChange={onFilterChange} menuClickHandler={onMenuClick} />
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
          </Route>
          <Route path="/filterMenu" exact>
            <FilterMenu itemClickHandler={onItemClick} />
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
