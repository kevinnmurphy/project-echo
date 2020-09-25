import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import BootstrapNavbar from './app/Navbar';

import Home from './routes/Home';
import Profile from './routes/Profile';
import Playlists from './routes/Playlists';

import Loading from './app/Loading';
import Iframe from './features/iframe/iframe';

import { EditPlaylistForm } from './features/playlists/EditPlaylistForm';
import { SinglePlaylistPage } from './features/playlists/SinglePlaylistPage';

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
          <Route
            exact
            path='/playlists'
            render={() => (
              <React.Fragment>
                <Playlists />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path='/playlists/:playlistId'
            component={SinglePlaylistPage}
          />
          <Route
            exact
            path='/editPlaylist/:playlistId'
            component={EditPlaylistForm}
          />

          {/* <Redirect to='/' /> */}

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
