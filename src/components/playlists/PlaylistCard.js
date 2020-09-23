import React from 'react';
import SongCard from '../songs/SongCard';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import { Link } from 'react-router-dom';

function PlaylistCard(props) {
  return (
    <Card className='playlist-card' style={{ width: '18rem' }}>
      <Card.Img
        variant='top'
        src={props.pic_url}
        className='playlist-pic'
        alt={props.id}
      />
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>{props.description}</Card.Text>

      <Link to={`/playlists/${props.id}`} className='button muted-button'>
        View Playlist
      </Link>

      <Button className='save-btn'>Save Playlist</Button>
      <Card.Footer>Last saved: {props.updated_at}</Card.Footer>
    </Card>
  );
}

export default PlaylistCard;

{
  /* <Card.Img variant='top' src={props.pic_url} className='playlist-pic' alt={props.id} />
<h2>{props.name}</h2>
<p>{props.description}</p>
<img src={props.pic_url} className='playlist-pic' alt={props.id} />
<button className='save-btn'>Save Playlist</button>
</Card> */
}

{
  /* <SongList /> */
}
