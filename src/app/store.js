import { configureStore } from '@reduxjs/toolkit';

import usersReducer from '../features/users/usersSlice';
import playlistsReducer from '../features/playlists/playlistsSlice';
import songsReducer from '../features/songs/songsSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    playlists: playlistsReducer,
    songs: songsReducer,
  },
});
