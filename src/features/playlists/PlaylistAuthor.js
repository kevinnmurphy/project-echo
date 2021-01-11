import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserById } from '../users/usersSlice';
// import { selectUsersByPlaylist } from '../users/usersSlice';

const PlaylistAuthor = ({ userId, playlistId }) => {
  // const authors = useSelector((state) =>
  //   selectUsersByPlaylist(state, playlistId)
  // );

  const authors = useSelector((state) => {
    if (userId.length > 0) {
      return userId.map((user, i) => selectUserById(state, userId[i].id));
    }
    return null;
  });

  // debugger;
  return (
    <p>
      by {authors ? authors.map((author) => author.name).join(', ') : 'Unknown'}
    </p>
  );
};

export default PlaylistAuthor;
