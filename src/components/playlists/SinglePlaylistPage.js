import React from 'react';
import { useSelector } from 'react-redux';

export const SinglePlaylistPage = ({ match }) => {
  const { playlistId } = match.params;

  const playlist = useSelector((state) =>
    state.playlists.find((playlist) => playlist.id === playlistId)
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
        <h2>{playlist.title}</h2>
        <p className='playlist-content'>{playlist.content}</p>
      </article>
    </section>
  );
};
