import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import SongCard from './SongCard';
import CardDeck from 'react-bootstrap/CardDeck';
// import { selectAllSongs, fetchSongs, removeSong } from './songsSlice';
// import Loading from '../../app/Loading';

// import songsSlice from './songsSlice';

// import { songPlaylistObj } from '../../db/songs';

import SortableComponent from './Sort';

function msToTime(duration) {
  let seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60);
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return minutes + ':' + seconds;
}

export const SongList = ({ query }) => {
  // const dispatch = useDispatch();
  // const songs = useSelector((state) => selectAllSongs(state));
  // const songs = [songPlaylistObj];

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
