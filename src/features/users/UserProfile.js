import React from 'react';
// import { useSelector } from 'react-redux/lib/hooks/useSelector';
import UserPic from './UserPic';
// import user from './usersSlice';
// import pic from '../../img/profile.jpg';

import { useAuth0 } from '@auth0/auth0-react';

// function Profile() {
//   // const currentUser = useSelector((state) => state.users.currentUser);
//   return (
//     <div>
//       <h4>Profile</h4>
//       <UserPic pic={pic} />
//       <h2>{user.name}</h2>
//       <p>{user.updated_at}</p>
//     </div>
//   );
// }

// export default Profile;

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <UserPic pic={user.picture} height={300} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
