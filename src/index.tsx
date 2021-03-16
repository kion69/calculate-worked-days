import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { GlobalStyle } from './style';
import NavigationHeader from './component/NavgationHeader';
import { StylesProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { Store, createStore, applyMiddleware } from 'redux';
import reducer from './store/reducer';
import thunk from 'redux-thunk';


const store: Store<GenericState, GenericAction> & {
  dispatch: GenericDispatchType
} = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <Provider store={store}>
        <NavigationHeader />
      </Provider>
    </StylesProvider>
    <GlobalStyle />
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
