import React from 'react';
import Image from 'react-bootstrap/Image';

function UserPic(props) {
  return (
    <div>
      <Image src={props.pic} roundedCircle height='30' />
    </div>
  );
}

export default UserPic;
