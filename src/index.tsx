import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Descriptions from 'main/pages/descriptions';
import Details from 'main/pages/details';
import { Provider } from 'react-redux';
import config from 'main/store/config';
import Dashboard from 'main/pages/dashboard';
import App from './App';

const store = config();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/descriptions" exact component={Descriptions} />
        <Route path="/details" exact component={Details} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
