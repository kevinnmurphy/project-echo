import React from 'react';
import './App.css';

import logo from './logos/echologo.png';
// import logo from './logo.svg';

function Loading() {
  return (
    <div>
      <img src={logo} className='App-logo' alt='logo' />
    </div>
  );
}

export default Loading;
