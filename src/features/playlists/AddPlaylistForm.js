import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Form, FormControl, Button, FormLabel } from 'react-bootstrap';

import { addPlaylist } from './playlistsSlice';
import { unwrapResult } from '@reduxjs/toolkit';

export const AddPlaylistForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [pic_url, setPic] = useState('');
  const [user, setUser] = useState('');

  const [addrequestStatus, setAddRequestStatus] = useState('idle');

  const dispatch = useDispatch();

  const onNameChanged = (e) => setName(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);
  const onPicChanged = (e) => setPic(e.target.value);
  const onUserChanged = (e) => setUser(e.target.value);

  const onSavePlaylistClick = () => {
    if (name && description && pic_url && user) {
      dispatch(addPlaylist({ name, description, pic_url, user }));
      setName('');
      setDescription('');
      setPic('');
      setUser('');
    }
  };

  return (
    <div>
      <Form inline>
        <FormLabel htmlFor='playlistPic'></FormLabel>
        <FormControl
          type='text'
          id='playlistPic'
          name='playlistPic'
          placeholder='Picture URL'
          value={pic_url}
          onChange={onPicChanged}
        />
        <FormLabel htmlFor='playlistTitle'></FormLabel>
        <FormControl
          type='text'
          id='playlistTitle'
          name='playlistTitle'
          placeholder='Title'
          value={name}
          onChange={onNameChanged}
        />
        <FormLabel htmlFor='playlistDescription'></FormLabel>
        <FormControl
          id='playlistDescription'
          name='playlistDescription'
          placeholder='Description'
          value={description}
          onChange={onDescriptionChanged}
        />
        <Form.Group
          id='playlistUser'
          name='playlistUser'
          value={user}
          onChange={onUserChanged}
        >
          <FormControl as='select' defaultValue='-User-'>
            <option>-User-</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </FormControl>
        </Form.Group>
        <Button type='button' onClick={onSavePlaylistClick}>
          Create
        </Button>
      </Form>
    </div>
  );
};

export default AddPlaylistForm;
