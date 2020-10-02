import React from 'react';

import Card from 'react-bootstrap/card';

// function SongCard({ id, name, artist, spotify_id }) {
//   const handleCardClick = () => {};

function SongCard({ id, name, artist, position, time }) {
  return (
    <Card
      className='song-card button muted-button'
      style={{ width: 'auto' }}
      // onClick={handleCardClick}
    >
      {/* <Card.Img variant='top' src={pic_url} className='song-pic' alt={id} /> */}
      <Card.Text>{position}</Card.Text>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{artist}</Card.Text>
      <Card.Text>{time}</Card.Text>

      {/* <Card.Img variant='top' src={pic_url} className='song-pic' alt={id} /> */}
    </Card>
  );
}

export default SongCard;
