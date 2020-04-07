import React, { useState } from 'react';
import GroceriesList from "./Groceries_list";
import Groceries from './GroceryList'
import Address from './Address';
import {
  Switch,
  Route,
} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import Row from './Row';
import Col from './Col';
import "./App.css";

function App() {
  const [filter, setFilter] = useState('');

  return (
    <div className="App">
      <h1>Indian Groceries</h1>
      <Row clas="contact">
        <Col numCol={4}></Col>
        <Col numCol={8}><label> Whatsapp your order to Poornima:- +4915143571582</label></Col>
      </Row>
      <Row>
        <div className="filter">
          <span className="menuIcon"><MenuIcon /></span>
          <div className="labelValue">
            <label>Search</label>
            <input value={filter} onChange={({ target: { value } }) => setFilter(value)} />
          </div>
        </div>
      </Row>
      <Row>
        <Switch>
          <Route path="/" exact>
            <Row className="groceryContent">
              <Col numCol={3}>
                something menu here
              </Col>

              <Col numCol={9}>
                <Groceries filter={filter} />
              </Col>
            </Row>
          </Route>
          <Route path="/address" exact>
            <Address filter={filter} />
          </Route>
        </Switch>
      </Row>
    </div>
  );
}

export default App;
