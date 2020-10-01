import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PlaylistCard from './PlaylistCard';
import CardDeck from 'react-bootstrap/CardDeck';
import {
  selectAllPlaylists,
  fetchPlaylists,
  removePlaylist,
  selectPlaylistById,
} from './playlistsSlice';
import Loading from '../../app/Loading';

export const PlaylistList = ({ query }) => {
  const dispatch = useDispatch();
  const playlists = useSelector((state) => selectAllPlaylists(state));

  const playlistStatus = useSelector((state) => state.playlists.status);
  useEffect(() => {
    if (playlistStatus === 'idle') {
      dispatch(fetchPlaylists());
    }
  }, [playlistStatus, dispatch]);

  const error = useSelector((state) => state.playlists.error);

  const deletePlaylist = (id) => {
    dispatch(removePlaylist(id));
  };

  let filteredPlaylists = playlists;
  if (query !== '') {
    filteredPlaylists = playlists.filter((playlist) =>
      playlist.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  const renderPlaylists = filteredPlaylists.map((playlist) => (
    <PlaylistCard
      key={playlist.id}
      name={playlist.name}
      description={playlist.description}
      pic_url={playlist.pic_url}
      updated_at={playlist.updated_at}
      id={playlist.id}
      deletePlaylist={(e) => {
        deletePlaylist(playlist.id);
        e.stopPropagation();
      }}
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
