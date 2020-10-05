import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import PlaylistAuthor from './PlaylistAuthor';
import { selectPlaylistById } from './playlistsSlice';
import { selectUserById } from '../users/usersSlice';

import Loading from '../../app/Loading';

import SongsContainer from '../songs/SongsContainer';

export const SinglePlaylistPage = () => {
  const { slug } = useParams();

  const playlist = useSelector((state) => selectPlaylistById(state, slug));

  if (!playlist) {
    return (
      <section>
        {/* <Loading />
        <h2>Loading...</h2> */}
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
          style={{ height: '500px' }}
        />
        <h2>{playlist.name}</h2>
        <p className='playlist-content'>{playlist.description}</p>
        {/* <PlaylistAuthor userId={playlist.users.data} playlistId={playlist.id} /> */}
        <PlaylistAuthor userId={playlist.users.data} />
        <Link to={`/playlists/${playlist.id}/edit`} className='button'>
          Edit Playlist
        </Link>

        <SongsContainer />
      </article>
    </section>
  );
};
