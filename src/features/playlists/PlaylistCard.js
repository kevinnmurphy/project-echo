import React from 'react';
// import SongCard from '../songs/SongCard';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import { Link } from 'react-router-dom';

function PlaylistCard({
  id,
  name,
  description,
  pic_url,
  updated_at,
  deletePlaylist,
}) {
  return (
    <Card className='playlist-card' style={{ width: '18rem' }}>
      <Card.Img variant='top' src={pic_url} className='playlist-pic' alt={id} />
      <Card.Title>{name}</Card.Title>
      <Card.Text>{description}</Card.Text>

      <Link to={`/playlists/${id}`} className='button muted-button'>
        View Playlist
      </Link>

      {/* <Button className='save-btn'>Save Playlist</Button> */}
      <Button className='delete-btn' onClick={deletePlaylist}>
        X
      </Button>
      <Card.Footer>Last saved: {updated_at}</Card.Footer>
    </Card>
  );
}

export default PlaylistCard;

{
  /* <SongList /> */
}
