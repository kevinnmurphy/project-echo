import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import SongCard from './SongCard';
import CardDeck from 'react-bootstrap/CardDeck';
// import { selectAllSongs, fetchSongs, removeSong } from './songsSlice';
// import Loading from '../../app/Loading';

// import songsSlice from './songsSlice';

// import { songPlaylistObj } from '../../db/songs';

import SortableComponent from './Sort';

const songPlaylistObj = {
  tracks: [
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI',
            },
            href: 'https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI',
            id: '12Chz98pHFMPJEknJQMWvI',
            name: 'Muse',
            type: 'artist',
            uri: 'spotify:artist:12Chz98pHFMPJEknJQMWvI',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/0lw68yx3MhKflWFqCsGkIs',
        },
        href: 'https://api.spotify.com/v1/albums/0lw68yx3MhKflWFqCsGkIs',
        id: '0lw68yx3MhKflWFqCsGkIs',
        images: [
          {
            height: 640,
            url:
              'https://i.scdn.co/image/ab67616d0000b27328933b808bfb4cbbd0385400',
            width: 640,
          },
          {
            height: 300,
            url:
              'https://i.scdn.co/image/ab67616d00001e0228933b808bfb4cbbd0385400',
            width: 300,
          },
          {
            height: 64,
            url:
              'https://i.scdn.co/image/ab67616d0000485128933b808bfb4cbbd0385400',
            width: 64,
          },
        ],
        name: 'Black Holes and Revelations',
        release_date: '2006-06-19',
        release_date_precision: 'day',
        total_tracks: 12,
        type: 'album',
        uri: 'spotify:album:0lw68yx3MhKflWFqCsGkIs',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI',
          },
          href: 'https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI',
          id: '12Chz98pHFMPJEknJQMWvI',
          name: 'Muse',
          type: 'artist',
          uri: 'spotify:artist:12Chz98pHFMPJEknJQMWvI',
        },
      ],
      disc_number: 1,
      duration_ms: 366213,
      explicit: false,
      external_ids: {
        isrc: 'GBAHT0500600',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/7ouMYWpwJ422jRcDASZB7P',
      },
      href: 'https://api.spotify.com/v1/tracks/7ouMYWpwJ422jRcDASZB7P',
      id: '7ouMYWpwJ422jRcDASZB7P',
      is_local: false,
      is_playable: true,
      name: 'Knights of Cydonia',
      popularity: 69,
      preview_url:
        'https://p.scdn.co/mp3-preview/d7624ec5f93b6d92c1836a95c40ecce463584f6e?cid=774b29d4f13844c495f206cafdad9c86',
      track_number: 11,
      type: 'track',
      uri: 'spotify:track:7ouMYWpwJ422jRcDASZB7P',
    },
    {
      album: {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI',
            },
            href: 'https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI',
            id: '12Chz98pHFMPJEknJQMWvI',
            name: 'Muse',
            type: 'artist',
            uri: 'spotify:artist:12Chz98pHFMPJEknJQMWvI',
          },
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/0eFHYz8NmK75zSplL5qlfM',
        },
        href: 'https://api.spotify.com/v1/albums/0eFHYz8NmK75zSplL5qlfM',
        id: '0eFHYz8NmK75zSplL5qlfM',
        images: [
          {
            height: 640,
            url:
              'https://i.scdn.co/image/ab67616d0000b273b6d4566db0d12894a1a3b7a2',
            width: 640,
          },
          {
            height: 300,
            url:
              'https://i.scdn.co/image/ab67616d00001e02b6d4566db0d12894a1a3b7a2',
            width: 300,
          },
          {
            height: 64,
            url:
              'https://i.scdn.co/image/ab67616d00004851b6d4566db0d12894a1a3b7a2',
            width: 64,
          },
        ],
        name: 'The Resistance',
        release_date: '2009-09-10',
        release_date_precision: 'day',
        total_tracks: 11,
        type: 'album',
        uri: 'spotify:album:0eFHYz8NmK75zSplL5qlfM',
      },
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI',
          },
          href: 'https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI',
          id: '12Chz98pHFMPJEknJQMWvI',
          name: 'Muse',
          type: 'artist',
          uri: 'spotify:artist:12Chz98pHFMPJEknJQMWvI',
        },
      ],
      disc_number: 1,
      duration_ms: 304840,
      explicit: false,
      external_ids: {
        isrc: 'GBAHT0900320',
      },
      external_urls: {
        spotify: 'https://open.spotify.com/track/4VqPOruhp5EdPBeR92t6lQ',
      },
      href: 'https://api.spotify.com/v1/tracks/4VqPOruhp5EdPBeR92t6lQ',
      id: '4VqPOruhp5EdPBeR92t6lQ',
      is_local: false,
      is_playable: true,
      name: 'Uprising',
      popularity: 75,
      preview_url:
        'https://p.scdn.co/mp3-preview/104ad0ea32356b9f3b2e95a8610f504c90b0026b?cid=774b29d4f13844c495f206cafdad9c86',
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:4VqPOruhp5EdPBeR92t6lQ',
    },
  ],
};

function msToTime(duration) {
  let seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60);
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return minutes + ':' + seconds;
}

export const SongList = ({ query }) => {
  // const dispatch = useDispatch();
  // const songs = useSelector((state) => selectAllSongs(state));
  const songs = [songPlaylistObj];

  // const songStatus = useSelector((state) => state.songs.status);
  // useEffect(() => {
  //   if (songStatus === 'idle') {
  //     dispatch(songsSlice.fetchSongs());
  //   }
  // }, [songStatus, dispatch]);

  // const error = useSelector((state) => state.songs.error);

  // const deleteSong = (id) => {
  //   dispatch(songsSlice.removeSong(id));
  // };
  // const filtered = songs.filter((song) => song.playlist === playlistId);
  // const renderSonglists = songs.tracks.map((song) => (
  const renderSonglists = songs[0].tracks.map((song) => (
    <SongCard
      key={song.id}
      // position={1}
      name={song.name}
      artist={song.artists[0].name}
      id={song.id}
      time={msToTime(song.duration_ms)}
    />
  ));

  // let content;

  // if (songStatus === 'loading') {
  //   content = (
  //     <div className='loader'>
  //       <Loading />
  //       Loading...
  //     </div>
  //   );
  // } else if (songStatus === 'succeeded') {
  //   content = renderSonglists;
  // } else if (songStatus === 'failed') {
  //   content = <div>{error}</div>;
  // }

  // return <CardDeck className='song-collection'>{content}</CardDeck>;
  return (
    <CardDeck className='song-collection'>
      <SortableComponent songs={renderSonglists} />
    </CardDeck>
  );
};

export default SongList;
