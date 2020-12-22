import React from 'react';

import Card from 'react-bootstrap/card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SongCard({ id, name, artist, position, time }) {
  return (
    <Card
      className='song-card button muted-button'
      style={{ width: 'auto' }}
      // onClick={handleCardClick}
    >
      <Container>
        <Row>
          {/* <Card.Img variant='top' src={pic_url} className='song-pic' alt={id} /> */}
          <Col>
            <Card.Text>{position}</Card.Text>
          </Col>
          <Col>
            <Card.Title>{name}</Card.Title>
          </Col>
          <Col>
            <Card.Text>{artist}</Card.Text>
          </Col>
          <Col>
            <Card.Text>{time}</Card.Text>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default SongCard;
