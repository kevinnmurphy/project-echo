import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import BootstrapNavbar from './app/Navbar';

import Home from './app/Home';
import PlaylistContainer from './features/playlists/PlaylistContainer';
import UserProfile from './features/users/UserProfile';

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
          <Route exact path='/profile'>
            <UserProfile />
          </Route>
          <Route
            exact
            path='/playlists'
            render={() => (
              <React.Fragment>
                <PlaylistContainer />
              </React.Fragment>
            )}
          />
          <Route path='/playlists/:slug' component={SinglePlaylistPage} />
          <Route path='/editPlaylist/:slug' component={EditPlaylistForm} />

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
