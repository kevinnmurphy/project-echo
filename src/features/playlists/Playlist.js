import React from 'react';

const Playlist = ({ playlist, updatePlaylist, deletePlaylist }) => (
  <div>
    <li>
      {playlist.name}
      <button onClick={updatePlaylist}></button>
      <button onClick={() => deletePlaylist(playlist.id)}>X</button>
    </li>
  </div>
);

export default Playlist;
