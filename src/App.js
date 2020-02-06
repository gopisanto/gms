import React, {useState} from 'react';
import GroceriesList from "./Groceries_list";
import Row from './Row';
import Col from './Col';
import "./App.css";

function App() {
  const [filter, setFilter] = useState('');
  const [flag, setFlag] = useState(false);
  
  if(!flag) {
    return (
      <div>Site under maintainance and might take some time. Please try visiting after some time. Thanks for your co-operation.</div>
    ); 
  }
  
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
          <input value={filter} onChange={({target: {value}}) => setFilter(value)} />
        </div>
      </Row>
      <Row>
        <GroceriesList filter={filter} />
      </Row>
    </div>
  );
}

export default App;
