import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from '@reduxjs/toolkit';

export const playlistsSlice = createSlice({
  name: 'playlist',
  initialState: {
    value: {},
  },
  reducers: {
    addPlaylist: (state) => {},
    editPlaylist: (state) => {},
    removePlaylist: (state) => {},
  },
});

// export const fetchPlaylists = createAsyncThunk(
//   'playlists/fetchPlaylists',
//   async () => {
//     const response = await fetch('/playlists');
//     return response.data.data.map((playlist) => {
//       const songIds = playlist.relationships.songs.data.map((song) => song.id);
//       return { id: playlist.id, ...playlist.attributes, songIds: songIds };
//     });
//   }
// );

export const {
  addPlaylist,
  editPlaylist,
  removePlaylist,
} = playlistsSlice.actions;

export default playlistsSlice.reducer;
