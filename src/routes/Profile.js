import React from 'react';
import { useSelector } from 'react-redux/lib/hooks/useSelector';
import UserPic from '../components/users/UserPic';
import user from '../components/users/usersSlice';
import pic from '../img/profile.jpg';

function Profile() {
  // const currentUser = useSelector((state) => state.users.currentUser);
  return (
    <div>
      Profile
      <UserPic pic={pic} />
      <h2>{user.name}</h2>
      <p>{user.updated_at}</p>
    </div>
  );
}

export default Profile;
