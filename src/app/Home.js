import React from 'react';
import Loading from './Loading';
import Iframe from '../features/iframe/iframe';

import { Button } from 'react-bootstrap';

// import chunk from 'lodash/chunk';
// import { getParamValues } from '../features/spotify/functions';
// import _ from 'lodash';

function Home(props) {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL,
  } = process.env;

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  return (
    <div>
      <h4>Home</h4>

      <Button variant='info' type='submit' onClick={handleLogin}>
        Login to spotify
      </Button>
      <Loading />
      <Iframe />
    </div>
  );
}

export default Home;
