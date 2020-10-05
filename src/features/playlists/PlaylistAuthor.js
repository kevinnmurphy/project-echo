import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserById, selectUsersByPlaylist } from '../users/usersSlice';

export const PlaylistAuthor = ({ userId, playlistId }) => {
  const author = useSelector(
    (state) => selectUserById(state, userId[0].id).name
  );
  let authorList;

  // const author = useSelector((state) =>
  //   selectUsersByPlaylist(state, playlistId)
  // );
  // debugger;
  return <p>by {author ? author : 'Unknown'}</p>;
};
