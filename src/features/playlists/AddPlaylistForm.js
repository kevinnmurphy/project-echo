import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Form, FormControl, Button, FormLabel } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';

import { addPlaylist } from './playlistsSlice';
import { unwrapResult } from '@reduxjs/toolkit';

export const AddPlaylistForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [pic_url, setPic] = useState('');
  const [user_ids, setUser_ids] = useState('');

  const [addrequestStatus, setAddRequestStatus] = useState('idle');

  const dispatch = useDispatch();

  const onNameChanged = (e) => setName(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);
  const onPicChanged = (e) => setPic(e.target.value);
  const onUserChanged = (e) => setUser_ids(e.target.value);

  const onSavePlaylistClick = () => {
    if (name && description && pic_url && user_ids) {
      dispatch(addPlaylist({ name, description, pic_url, user_ids }));
      setName('');
      setDescription('');
      setPic('');
      setUser_ids('');
    }
  };

  return (
    <div>
      <InputGroup>
        <InputGroup.Prepend className='edit-input'>
          <InputGroup.Text>Picture URL</InputGroup.Text>
        </InputGroup.Prepend>
        <FormLabel htmlFor='playlistPic'></FormLabel>
        <FormControl
          type='text'
          id='playlistPic'
          name='playlistPic'
          placeholder='Picture URL'
          value={pic_url}
          onChange={onPicChanged}
        />
        <InputGroup.Prepend className='edit-input'>
          <InputGroup.Text>Title</InputGroup.Text>
        </InputGroup.Prepend>
        <FormLabel htmlFor='playlistTitle'></FormLabel>
        <FormControl
          type='text'
          id='playlistTitle'
          name='playlistTitle'
          placeholder='Title'
          value={name}
          onChange={onNameChanged}
        />
        <InputGroup.Prepend className='edit-input'>
          <InputGroup.Text>Description</InputGroup.Text>
        </InputGroup.Prepend>
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
          value={user_ids}
          onChange={onUserChanged}
        >
          <FormControl as='select' defaultValue='-User-'>
            <option>-Add User-</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </FormControl>
        </Form.Group>
        <Button
          className='edit-input'
          type='button'
          onClick={onSavePlaylistClick}
        >
          Create
        </Button>
      </InputGroup>
    </div>
  );
};

export default AddPlaylistForm;
