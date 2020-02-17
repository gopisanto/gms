import React, { useState } from 'react';
import GroceriesList from "./Groceries_list";
import Address from './Address';
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
        <div className="labelValue">
          <label>Search</label>
          <input value={filter} onChange={({ target: { value } }) => setFilter(value)} />
        </div>
      </Row>
      <Row>
        <Switch>
          <Route path="/" exact>
            <GroceriesList filter={filter} />
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
