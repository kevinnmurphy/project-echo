import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addPlaylist } from './playlistsSlice';

import { Form, FormControl, Button, FormLabel } from 'react-bootstrap';

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
      <Form inline>
        <FormLabel htmlFor='playlistPic'>Picture URL:</FormLabel>
        <FormControl
          type='text'
          id='playlistPic'
          name='playlistPic'
          value={pic_url}
          onChange={onPicChanged}
        />
        <FormLabel htmlFor='playlistTitle'>Title:</FormLabel>
        <FormControl
          type='text'
          id='playlistTitle'
          name='playlistTitle'
          value={name}
          onChange={onNameChanged}
        />
        <FormLabel htmlFor='playlistDescription'>Description:</FormLabel>
        <FormControl
          id='playlistDescription'
          name='playlistDescription'
          value={description}
          onChange={onDescriptionChanged}
        />
        <Button type='button' onClick={onSavePlaylistClick}>
          Create
        </Button>
      </Form>
      {/* <form>
        <label htmlFor='playlistPic'>Picture URL:</label>
        <input
          type='text'
          id='playlistPic'
          name='playlistPic'
          value={pic_url}
          onChange={onPicChanged}
        />
        <label htmlFor='playlistTitle'>Title:</label>
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
          Create
        </button>
      </form> */}
    </div>
  );
};

export default AddPlaylistForm;
