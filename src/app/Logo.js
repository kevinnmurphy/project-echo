import React from 'react';
import '../App.css';

import logo from '../logos/echologo.png';
// import logo from './logo.svg';

function Loading() {
  return (
    <div>
      <img
        src={logo}
        className='d-inline-block align-top'
        height='30'
        width='30'
        padding='10'
        alt='logo'
      />
    </div>
  );
}

export default Loading;
