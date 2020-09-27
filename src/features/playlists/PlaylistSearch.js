import React, { useState, useSelector } from 'react';
import { Form, FormControl } from 'react-bootstrap';

function PlaylistSearch({ query, setQuery }) {
  const handleOnChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <Form inline>
        <FormControl
          className='mr-sm-2'
          type='text'
          placeholder='Search'
          value={query}
          onChange={handleOnChange}
        />
      </Form>
    </div>
  );
}

export default PlaylistSearch;
