import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { Form, FormControl, Button, FormLabel } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';

import { editPlaylist, selectPlaylistById } from './playlistsSlice';
import { selectAllUsers } from '../users/usersSlice';

export const EditPlaylistForm = () => {
  const { slug } = useParams();

  const playlist = useSelector((state) => selectPlaylistById(state, slug));

  const [name, setName] = useState(playlist.name);
  const [description, setDescription] = useState(playlist.description);
  const [pic_url, setPic] = useState(playlist.pic_url);
  const [user_ids, setUser_ids] = useState({});

  const dispatch = useDispatch();
  const history = useHistory();
  const users = useSelector(selectAllUsers);

  const onNameChanged = (e) => setName(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);
  const onPicChanged = (e) => setPic(e.target.value);
  const onUserChanged = (e) => setUser_ids(e.target.value);

  const onSavePlaylistClick = () => {
    if (name && description && pic_url) {
      dispatch(
        editPlaylist({
          id: slug,
          data: { name, description, pic_url, user_ids },
        })
      );
      history.push(`/playlists/${slug}`);
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

export default EditPlaylistForm;
