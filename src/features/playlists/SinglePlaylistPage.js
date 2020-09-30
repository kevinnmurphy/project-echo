import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { PlaylistAuthor } from './PlaylistAuthor';
import { selectPlaylistById } from './playlistsSlice';
import { selectUserById } from '../users/usersSlice';
import { SongList } from '../songs/SongList';

export const SinglePlaylistPage = () => {
  const { slug } = useParams();

  const playlist = useSelector((state) => selectPlaylistById(state, slug));

  // const user = useSelector((state) => selectUserById(state, userId));

  if (!playlist) {
    return (
      <section>
        <h2>Playlist not found!</h2>
      </section>
    );
  }
  // debugger;
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
        {/* <PlaylistAuthor userId={playlist.users.data[0]} /> */}
        <Link to={`/playlists/${playlist.id}/edit`} className='button'>
          Edit Playlist
        </Link>
        <SongList />
      </article>
    </section>
  );
};
