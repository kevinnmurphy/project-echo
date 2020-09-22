import { configureStore } from '@reduxjs/toolkit';

import usersReducer from '../components/users/usersSlice';
import playlistsReducer from '../components/playlists/playlistsSlice';
import songsReducer from '../components/songs/songsSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    playlists: playlistsReducer,
    songs: songsReducer,
  },
});
