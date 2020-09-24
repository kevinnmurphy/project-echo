import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { editPlaylist, selectPlaylistById } from './playlistsSlice';

export const EditPlaylistForm = ({ match }) => {
  const { playlistId } = match.params;

  const playlist = useSelector((state) =>
  selectPlaylistById(state, playlistId))
  );

  const [name, setName] = useState(playlist.name);
  const [description, setDescription] = useState(playlist.description);
  const [pic_url, setPic] = useState(playlist.pic_url);

  const dispatch = useDispatch();
  const history = useHistory();

  const onNameChanged = (e) => setName(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);
  const onPicChanged = (e) => setPic(e.target.value);

  const onSavePlaylistClick = () => {
    if (name && description && pic_url) {
      dispatch(
        editPlaylist({
          id: playlistId,
          name,
          description,
          pic_url,
        })
      );
      history.push(`/playlists/${playlistId}`);
    }
  };

  return (
    <div>
      <h2>Edit Playlist</h2>
      <form>
        <label htmlFor='playlistPic'>Playlist Pic:</label>
        <input
          type='text'
          id='playlistPic'
          name='playlistPic'
          value={pic_url}
          onChange={onPicChanged}
        />
        <label htmlFor='playlistTitle'>Playlist Title:</label>
        <input
          type='text'
          id='playlistTitle'
          name='playlistTitle'
          value={name}
          onChange={onNameChanged}
        />
        <label htmlFor='playlistDescription'>Description:</label>
        <input
          id='playlistDescription'
          name='playlistDescription'
          value={description}
          onChange={onDescriptionChanged}
        />
        <button type='button' onClick={onSavePlaylistClick}>
          Save Playlist
        </button>
      </form>
    </div>
  );
};

export default EditPlaylistForm;
