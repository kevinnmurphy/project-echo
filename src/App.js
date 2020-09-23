import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Loading from './app/Loading';
import './App.css';

import Iframe from './components/iframe/iframe';
import BootstrapNavbar from './app/Navbar';

import { SinglePlaylistPage } from './components/playlists/SinglePlaylistPage';
import PlaylistList from './components/playlists/PlaylistList';

import Home from './routes/Home';
import Profile from './routes/Profile';
import Playlists from './routes/Playlists';

function App() {
  return (
    <Router>
      <BootstrapNavbar />
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/playlists'>
            <Playlists />
          </Route>
          <Route
            exact
            path='/'
            render={() => (
              <React.Fragment>
                <PlaylistList />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path='/playlists/:playlistId'
            component={SinglePlaylistPage}
          />

          <header className='App-header'>
            <Loading />
            <p>Select your playlist.</p>
          </header>
          <Iframe />
          {/* <SongsContainer /> */}

          <footer></footer>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
