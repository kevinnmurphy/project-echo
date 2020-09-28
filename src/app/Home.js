import React from 'react';
import Loading from './Loading';
import Iframe from '../features/iframe/iframe';

function Home() {
  return (
    <div>
      {/* <script src='https://sdk.scdn.co/spotify-player.js'></script> */}
      <h4>Home</h4>
      <Loading />
      <Iframe />
    </div>
  );
}

export default Home;
