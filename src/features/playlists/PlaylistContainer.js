import React, { useState } from 'react';
import PlaylistList from './PlaylistList';
import { Button } from 'react-bootstrap';
import PlaylistSearch from './PlaylistSearch';
import AddPlaylistForm from './AddPlaylistForm';
import { Accordion, Card } from 'react-bootstrap';

import SongsContainer from '../songs/SongsContainer';

const PlaylistContainer = (props) => {
  const [query, setQuery] = useState('');

  return (
    <div>
      <Accordion>
        <Card>
          <Card.Header className='playlist-header'>
            <Accordion.Toggle
              as={Button}
              variant='link'
              eventKey='0'
              className='playlist-new'
            >
              New Playlist
            </Accordion.Toggle>

            <PlaylistSearch query={query} setQuery={setQuery} />
          </Card.Header>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>
              <AddPlaylistForm />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <PlaylistList query={query} />

      {/* <SongsContainer /> */}
    </div>
  );
};

export default PlaylistContainer;
