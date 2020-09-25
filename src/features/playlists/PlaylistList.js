import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PlaylistCard from './PlaylistCard';
import CardDeck from 'react-bootstrap/CardDeck';
import {
  selectAllPlaylists,
  fetchPlaylists,
  removePlaylist,
} from './playlistsSlice';
import Loading from '../../app/Loading';

export const PlaylistList = () => {
  const dispatch = useDispatch();
  const playlists = useSelector(selectAllPlaylists);

  const playlistStatus = useSelector((state) => state.playlists.status);
  const error = useSelector((state) => state.playlists.error);

  useEffect(() => {
    if (playlistStatus === 'idle') {
      dispatch(fetchPlaylists());
    }
  }, []);

  const deletePlaylist = (id) => {
    dispatch(removePlaylist(id));
  };

  const renderPlaylists = playlists.map((playlist) => (
    <PlaylistCard
      key={playlist.id}
      name={playlist.name}
      description={playlist.description}
      pic_url={playlist.pic_url}
      updated_at={playlist.updated_at}
      id={playlist.id}
      deletePlaylist={() => deletePlaylist(playlist.id)}
    />
  ));

  let content;

  if (playlistStatus === 'loading') {
    content = (
      <div className='loader'>
        <Loading />
        Loading...
      </div>
    );
  } else if (playlistStatus === 'succeeded') {
    content = renderPlaylists;
  } else if (playlistStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return <CardDeck className='playlist-collection'>{content}</CardDeck>;
};

export default PlaylistList;
