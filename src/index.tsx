import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { GlobalStyle, NavigationBar, yellow } from './style';
import { HashRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';

const style = {
  bodyPage: {
    marginTop: '60px'
  }
}

ReactDOM.render(
  <React.StrictMode>

    <HashRouter basename="/">

      <NavigationBar background={yellow}>
        <Link to="/">Home</Link>
        <Link to="/calculator">Rolê</Link>
      </NavigationBar>

      <div style={style.bodyPage}>
        <Switch>

          <Redirect exact from='/' to='/home' />

          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/calculator' component={Calculator}>
            <Calculator />
          </Route>

        </Switch>
      </div>

    </HashRouter>

    <GlobalStyle />
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
