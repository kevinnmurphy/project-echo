import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import BootstrapNavbar from './app/Navbar';

import Home from './app/Home';
import UserProfile from './features/users/UserProfile';
import RedirectPage from './app/RedirectPage';
import Loading from './app/Loading';
import PlaylistRouting from './features/playlists/PlaylistRouting';

import { useAuth0 } from '@auth0/auth0-react';
import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import {
  selectAllUsers,
  currentUserFindOrAdd,
  addUser,
} from './features/users/usersSlice';

function App() {
  const { user, isAuthenticated } = useAuth0();
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) return;
    const { name, picture } = user;
    const existingUser = users.find((user) => user.name === name);
    //unique uid in db from auth
    // const existingUser = users.find((user) => user.uid === id);
    if (existingUser) {
      dispatch(currentUserFindOrAdd(existingUser.id));
    } else {
      const addCurrentUser = async () => {
        const resultAction = await dispatch(
          addUser({ name, pic_url: picture })
        );
        const newUser = unwrapResult(resultAction);
        dispatch(currentUserFindOrAdd(newUser.id));
      };
      addCurrentUser();
    }
  }, [isAuthenticated, user, users, dispatch]);

  return (
    <Router>
      <BootstrapNavbar />
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/redirect' component={RedirectPage} />
          <Route exact path='/profile' component={UserProfile} />
          <Route path='/playlists' component={PlaylistRouting} />
          <React.Fragment>
            <header className='App-header'>
              <Loading />
              <p>Page Not Found.</p>
            </header>
            <footer></footer>
          </React.Fragment>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
