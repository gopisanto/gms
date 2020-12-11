import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from '../src/components/App';
import reducer from '../src/redux/reducers';

const store = createStore(reducer, composeWithDevTools());
const holiday = true;

const Holiday = () => <div style={{fontSize: '22px', fontWeight: 'bold', display: 'flex', height: '100vh', overflow: 'auto', textAlign: 'center', alignItems: 'center'}}>
  We are not processing anymore orders for now, sorry for the inconvenience. We will inform you again once we start taking orders. Thank you and Be safe.
</div>;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      { holiday ? <Holiday /> : <App /> }
    </Router>
  </Provider>,
  document.getElementById('root')
);
