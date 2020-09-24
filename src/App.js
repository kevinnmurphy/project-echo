import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import BootstrapNavbar from './app/Navbar';

import Home from './routes/Home';
import Profile from './routes/Profile';
import Playlists from './routes/Playlists';

import Loading from './app/Loading';
import Iframe from './components/iframe/iframe';

import { PlaylistList } from './components/playlists/PlaylistList';
import { AddPlaylistForm } from './components/playlists/AddPlaylistForm';
import { EditPlaylistForm } from './components/playlists/EditPlaylistForm';
import { SinglePlaylistPage } from './components/playlists/SinglePlaylistPage';

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
                {/* <Playlists /> */}
                <AddPlaylistForm />
                <PlaylistList />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path='/playlists/:postId'
            component={SinglePlaylistPage}
          />
          <Route
            exact
            path='/editPlaylist/:postId'
            component={EditPlaylistForm}
          />
          <Redirect to='/' />

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
