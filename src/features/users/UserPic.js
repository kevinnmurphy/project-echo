import React from 'react';
import Image from 'react-bootstrap/Image';

function UserPic(props) {
  return (
    <div className='profile-pic'>
      <Image src={props.pic} roundedCircle height={props.height} />
    </div>
  );
}

export default UserPic;
