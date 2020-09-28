import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { Form, FormControl, Button, FormLabel } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';

import { editPlaylist, selectPlaylistById } from './playlistsSlice';

export const EditPlaylistForm = () => {
  const { slug } = useParams();

  const playlist = useSelector((state) => selectPlaylistById(state, slug));

  const [name, setName] = useState(playlist.name);
  const [description, setDescription] = useState(playlist.description);
  const [pic_url, setPic] = useState(playlist.pic_url);
  const [user_ids, setUser_ids] = useState({});

  const dispatch = useDispatch();
  const history = useHistory();

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
          value={user_ids}
          onChange={onUserChanged}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </FormControl>
        <Button
          className='edit-input'
          type='button'
          onClick={onSavePlaylistClick}
        >
          Save
        </Button>
      </InputGroup>
    </div>
  );
};

export default EditPlaylistForm;
