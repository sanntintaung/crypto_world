import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { Provider } from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import 'antd/dist/antd.css'
import {store} from './store/configStore'

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Provider store={store}>
              <App />
          </Provider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

