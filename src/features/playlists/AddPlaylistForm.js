import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Form, FormControl, Button, FormLabel } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';

import { addPlaylist, selectAllPlaylists } from './playlistsSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';

export const AddPlaylistForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [pic_url, setPic] = useState(
    'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
  );
  const [user_ids, setUser_ids] = useState('');

  const [addrequestStatus, setAddRequestStatus] = useState('idle');

  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const onNameChanged = (e) => setName(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);
  const onPicChanged = (e) => setPic(e.target.value);
  const onUserChanged = (e) => setUser_ids(e.target.value);

  const onSavePlaylistClick = () => {
    if (name && description && pic_url) {
      dispatch(addPlaylist({ name, description, pic_url, user_ids }));
      setName('');
      setDescription('');
      // setPic('');
      setUser_ids('');
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

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
          placeholder='...'
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
          placeholder='...'
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
          placeholder='...'
          value={description}
          onChange={onDescriptionChanged}
        />
        <InputGroup.Prepend className='edit-input'>
          <InputGroup.Text>User</InputGroup.Text>
        </InputGroup.Prepend>
        {/* <select id='postAuthor' 
        value={userId} 
        onChange={onAuthorChanged}
        >
          <option value=''></option>
          {usersOptions}
        </select> */}
        <FormControl
          as='select'
          id='playlistUser'
          name='playlistUser'
          placeholder='...'
          value={user_ids}
          onChange={onUserChanged}
        >
          <option value='1'>...</option>
          {usersOptions}
        </FormControl>
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
