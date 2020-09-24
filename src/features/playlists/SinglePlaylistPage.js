import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import selectPlaylistById from './playlistsSlice';

export const SinglePlaylistPage = ({ match }) => {
  const { playlistId } = match.params;

  const playlist = useSelector((state) =>
    selectPlaylistById(state, playlistId)
  );

  if (!playlist) {
    return (
      <section>
        <h2>Playlist not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className='playlist'>
        <img
          src={playlist.pic_url}
          className='playlist-pic'
          alt={playlist.id}
        />
        <h2>{playlist.name}</h2>
        <p className='playlist-content'>{playlist.description}</p>
        <Link to={`/editPlaylist/${playlist.id}`} className='button'>
          Edit Playlist
        </Link>
      </article>
    </section>
  );
};
