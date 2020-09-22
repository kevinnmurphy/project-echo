import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

function Playlists() {
  return (
    <div>
      <h4>Playlists</h4>
      <Form inline>
        <FormControl type='text' placeholder='Search' className='mr-sm-2' />
        <Button variant='outline-success'>Search</Button>
      </Form>
    </div>
  );
}

export default Playlists;
