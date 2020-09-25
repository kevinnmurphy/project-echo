import React from 'react';
// import { useSelector } from 'react-redux/lib/hooks/useSelector';
import UserPic from '../features/users/UserPic';
import user from '../features/users/usersSlice';
import pic from '../img/profile.jpg';

function Profile() {
  // const currentUser = useSelector((state) => state.users.currentUser);
  return (
    <div>
      <h4>Profile</h4>
      <UserPic pic={pic} />
      <h2>{user.name}</h2>
      <p>{user.updated_at}</p>
    </div>
  );
}

export default Profile;
