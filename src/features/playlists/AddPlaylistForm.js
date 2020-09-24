import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addPlaylist } from './playlistsSlice';

export const AddPlaylistForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [pic_url, setPic] = useState('');

  const dispatch = useDispatch();

  const onNameChanged = (e) => setName(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);
  const onPicChanged = (e) => setPic(e.target.value);

  const onSavePlaylistClick = () => {
    if (name && description && pic_url) {
      dispatch(addPlaylist({ name, description, pic_url }));
      setName('');
      setDescription('');
      setPic('');
    }
  };

  return (
    <div>
      <h2>Add a New Playlist</h2>
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

export default AddPlaylistForm;
