import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SongCard from './SongCard';
import CardDeck from 'react-bootstrap/CardDeck';
import { selectAllSongs, fetchSongs, removeSong } from './songsSlice';
import Loading from '../../app/Loading';

import songsSlice from './songsSlice';

export const SongList = ({ query }) => {
  const dispatch = useDispatch();
  // const songs = useSelector((state) => selectAllSongs(state));

  const songs = [{}];

  const songStatus = useSelector((state) => state.songs.status);
  // useEffect(() => {
  //   if (songStatus === 'idle') {
  //     dispatch(songsSlice.fetchSongs());
  //   }
  // }, [songStatus, dispatch]);

  const error = useSelector((state) => state.songs.error);

  const deleteSong = (id) => {
    dispatch(songsSlice.removeSong(id));
  };

  const renderSonglists = songs.map((song) => (
    <SongCard
      key={song.id}
      name={song.name}
      description={song.description}
      id={song.id}
    />
  ));

  let content;

  if (songStatus === 'loading') {
    content = (
      <div className='loader'>
        <Loading />
        Loading...
      </div>
    );
  } else if (songStatus === 'succeeded') {
    content = renderSonglists;
  } else if (songStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return <CardDeck className='song-collection'>{content}</CardDeck>;
};

export default SongList;
