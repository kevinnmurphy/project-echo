import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';

function SongSearchForm({ query, setQuery }) {
  const handleOnChange = (event) => {
    setQuery(event.target.value);
  };

  const handleOnSubmit = (event) => {
    setQuery(event.target.value);
    event.preventDefault();
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
          onSubmit={handleOnSubmit}
        />
      </Form>
    </div>
  );
}

export default SongSearchForm;
