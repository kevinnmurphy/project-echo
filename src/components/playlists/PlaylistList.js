import React from 'react';
import { useSelector } from 'react-redux';
import Playlist from './Playlist';
import PlaylistCard from './PlaylistCard';
import CardDeck from 'react-bootstrap/CardDeck';

export const PlaylistList = () => {
  const playlists = useSelector((state) => state.playlists);

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
