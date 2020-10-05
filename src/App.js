import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import BootstrapNavbar from './app/Navbar';

import Home from './app/Home';
import UserProfile from './features/users/UserProfile';

import Loading from './app/Loading';
import Iframe from './features/iframe/iframe';

import RedirectPage from './app/RedirectPage';

import PlaylistRouting from './features/playlists/PlaylistRouting';

import { PlayerPage } from './features/player/PlayerPage';
import Tracks from './features/spotify/authSong';

import { useAuth0 } from '@auth0/auth0-react';
import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import {
  selectAllUsers,
  currentUserAdd,
  addUser,
} from './features/users/usersSlice';

function App() {
  const { user, isAuthenticated } = useAuth0();
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) return;
    const { email, name, picture } = user;
    const existingUser = users.find((user) => user.name === name);
    if (existingUser) {
      dispatch(currentUserAdd(existingUser.id));
    } else {
      const addCurrentUser = async () => {
        const resultAction = await dispatch(
          addUser({ email, name, picture_url: picture })
        );
        const newUser = unwrapResult(resultAction);
        dispatch(currentUserAdd(newUser.id));
      };
      addCurrentUser();
    }
  }, [isAuthenticated]);

  return (
    <Router>
      <BootstrapNavbar />
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/redirect' component={RedirectPage} />
          <Route exact path='/profile'>
            <UserProfile />
          </Route>
          <Route path='/playlists' component={PlaylistRouting} />
          <React.Fragment>
            <header className='App-header'>
              <Loading />
              <p>Page Not Found.</p>
            </header>
            <PlayerPage />
            {/* <Tracks /> */}

            <Iframe />
            {/* <SongsContainer /> */}

            <footer></footer>
          </React.Fragment>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
