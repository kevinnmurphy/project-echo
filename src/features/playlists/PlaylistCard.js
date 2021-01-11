import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from 'react-router-dom';
// import parsejson from date-fns
import { formatRelative } from 'date-fns';
import parseJSON from 'date-fns/parseJSON';

function PlaylistCard({
  id,
  name,
  description,
  pic_url,
  updated_at,
  deletePlaylist,
}) {
  const parseDateJson = parseJSON(updated_at);
  const parseDate = formatRelative(parseDateJson, new Date());

  let history = useHistory();
  const handleCardClick = () => {
    history.push(`/playlists/${id}`);
  };

  return (
    <Card
      className='playlist-card button muted-button'
      key={id}
      style={{ width: '18rem' }}
      onClick={handleCardClick}
    >
      <Card.Img variant='top' src={pic_url} className='playlist-pic' alt={id} />
      <Card.Title>{name}</Card.Title>
      <Card.Text>{description}</Card.Text>

      <Link to={`/playlists/${id}`} className='button muted-button'>
        View Playlist
      </Link>

      <Button className='delete-btn' onClick={deletePlaylist}>
        X
      </Button>
      <Card.Footer>
        <small className='text-muted'>Updated {parseDate}</small>
      </Card.Footer>
    </Card>
  );
}

export default PlaylistCard;
