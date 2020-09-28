import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { Form, FormControl, Button, FormLabel } from 'react-bootstrap';

import { editPlaylist, selectPlaylistById } from './playlistsSlice';

export const EditPlaylistForm = () => {
  const { slug } = useParams();

  const playlist = useSelector((state) => selectPlaylistById(state, slug));

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
        editPlaylist({ id: slug, data: { name, description, pic_url } })
      );
      history.push(`/playlists/${slug}`);
    }
  };

  return (
    <div>
      <h2>Edit Playlist</h2>
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
          Save
        </Button>
      </Form>
    </div>
  );
};

export default EditPlaylistForm;
