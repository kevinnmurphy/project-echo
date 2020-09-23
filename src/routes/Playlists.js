import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import PlaylistContainer from '../components/playlists/PlaylistContainer';
import AddPlaylistForm from '../components/playlists/AddPlaylistForm';
import { Accordion, Card } from 'react-bootstrap';

function Playlists() {
  return (
    <div>
      <h4>Playlists</h4>
      <Accordion>
        <Card>
          <Card.Header className='playlist-header'>
            <Accordion.Toggle
              as={Button}
              variant='link'
              eventKey='0'
              className='playlist-new'
            >
              New
            </Accordion.Toggle>

            <Form inline>
              <FormControl
                type='text'
                placeholder='Search'
                className='mr-sm-2'
              />
              <Button variant='outline-success'>Search</Button>
            </Form>
          </Card.Header>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>
              <AddPlaylistForm />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <PlaylistContainer />
    </div>
  );
}

export default Playlists;
