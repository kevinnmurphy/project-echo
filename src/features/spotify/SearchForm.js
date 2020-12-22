import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    props.handleSearch(searchTerm);
  };

  return (
    <div>
      <Form onSubmit={handleSearch}>
        <Form.Group controlId='formBasicEmail'>
          {/* <Form.Label>Enter search term</Form.Label> */}
          <Form.Control
            type='search'
            name='searchTerm'
            value={searchTerm}
            placeholder='Search for track'
            onChange={handleInputChange}
            autoComplete='off'
          />
        </Form.Group>
        <Button variant='info' type='submit'>
          Search
        </Button>
      </Form>
    </div>
  );
};
export default SearchForm;
