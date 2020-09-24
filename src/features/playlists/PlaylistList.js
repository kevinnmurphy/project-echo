import React from 'react';
import { useSelector } from 'react-redux';
import Playlist from './Playlist';
import PlaylistCard from './PlaylistCard';
import CardDeck from 'react-bootstrap/CardDeck';
import { selectAllPlaylists } from './playlistsSlice';

export const PlaylistList = () => {
  const playlists = useSelector(selectAllPlaylists);

  const renderPlaylists = playlists.map((playlist) => (
    <PlaylistCard
      key={playlist.id}
      name={playlist.name}
      description={playlist.description}
      pic_url={playlist.pic_url}
      updated_at={playlist.updated_at}
      id={playlist.id}
    />
  ));

  return <CardDeck className='playlist-collection'>{renderPlaylists}</CardDeck>;
};

export default PlaylistList;
