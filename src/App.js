import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Loading from './Loading';
import './App.css';

import SongsContainer from './components/songs/SongsContainer';
import PlaylistContainer from './components/playlists/PlaylistContainer';

import Iframe from './components/iframe/iframe';
import BootstrapNavbar from './Navbar';

function App() {
  return (
    <div className='App'>
      <BootstrapNavbar />
      <header className='App-header'>
        <Loading />
        <p>Select your playlist.</p>
      </header>

      <PlaylistContainer />
      <Iframe />
      {/* <SongsContainer /> */}

      <footer></footer>
    </div>
  );
}

export default App;
