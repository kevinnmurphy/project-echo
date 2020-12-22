import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Tracks = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: 'https://accounts.spotify.com/authorize',
          scope: 'user-read-private user-read-email',
        });
        const query = 'stronger';
        const response = await fetch(
          `https://api.spotify.com/v1/search?q=${query}&type=track`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTracks(await response.json());
        console.log(response.json());
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently]);

  if (!tracks) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {tracks.map((track, index) => {
        return <li key={index}>{track}</li>;
      })}
    </ul>
  );
};

export default Tracks;

/*
https://accounts.spotify.com/authorize?
response_type=code&
client_id=f996e0e04a5142258907b008c42d47d8&
redirect_uri=http%3A%2F%2Flocalhost&
scope=user-follow-modify&
state=e21392da45dbf4&
code_challenge=KADwyz1X~HIdcAG20lnXitK6k51xBP4pEMEZHmCneHD1JhrcHjE1P3yU_NjhBz4TdhV6acGo16PCd10xLwMJJ4uCutQZHw&
code_challenge_method=S256
*/
