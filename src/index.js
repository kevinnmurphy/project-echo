import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
// import AppTest from './AppTest';
import * as serviceWorker from './serviceWorker';
import store from './app/store';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Auth0Provider } from '@auth0/auth0-react';

import { fetchUsers } from './features/users/usersSlice';
store.dispatch(fetchUsers());

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain='dev-ms6p76bw.us.auth0.com'
      clientId='RNyTNvlhVjw98GdNSgpgyUtrKoQjGD1g'
      redirectUri={window.location.origin}
      // audience='https://dev-ms6p76bw.us.auth0.com/api/v2/'
      // scope='read:current_user update:current_user_metadata '
    >
      <App />
    </Auth0Provider>
  </Provider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
