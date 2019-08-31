import React, {useState} from 'react';
import GroceriesList from "./Groceries_list";
import "./App.css";

function App() {
  const [filter, setFilter] = useState('');

  return (
    <div className="App">
      <div className="labelValue">
        <label>Search</label>
        <input value={filter} onChange={({target: {value}}) => setFilter(value)} />
      </div>
      <GroceriesList filter={filter} />
    </div>
  );
}

export default App;
