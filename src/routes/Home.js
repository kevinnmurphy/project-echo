import React from 'react';
import Loading from '../app/Loading';
import Iframe from '../components/iframe/iframe';

function Home() {
  return (
    <div>
      <h4>Home</h4>
      <Loading />
      <Iframe />
    </div>
  );
}

export default Home;
