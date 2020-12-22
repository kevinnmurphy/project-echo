import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import { client } from '../../api/client';
import echo from '../../api/echo';
// import spotify, { spotify_api } from '../../api/spotify';

const songsAdapter = createEntityAdapter();
const initialState = songsAdapter.getInitialState({
  status: 'idle',
  error: null,
});

export const fetchSongs = createAsyncThunk('songs/fetchSongs', async () => {
  const response = await client.get(`${echo.baseURL}/playlist_songs`);
  return response.data.map((song) => {
    return {
      id: song.id,
      ...song.attributes,
      ...song.relationships,
    };
  }, []);
});

export const addSong = createAsyncThunk('songs/addSong', async (data) => {
  const response = await client.post(`${echo.baseURL}/playlist_song`, {
    song: data,
  });
  const songData = response.data;
  //attach to playlist
  // const playlistId = songData.relationships.playlists.data.map(
  //   (playlist) => playlist.id
  // );
  return { id: songData.id, ...songData.attributes };
});

export const removeSong = createAsyncThunk('songs/removeSong', async (id) => {
  const response = await client.delete(`${echo.baseURL}/playlist_songs/${id}`);
  const songData = response.data;
  return songData.id;
});

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    setPosition(state, action) {
      // const { songId, position } = action.payload;
    },
  },
  extraReducers: {
    [fetchSongs.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchSongs.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      songsAdapter.upsertMany(state, action.payload);
    },
    [fetchSongs.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    [addSong.fulfilled]: songsAdapter.addOne,
    [removeSong.fulfilled]: songsAdapter.removeOne,
  },
});

export const { setPosition } = songsSlice.actions;

export default songsSlice.reducer;

export const {
  selectAll: selectAllSongs,
  selectById: selectSongById,
  selectIds: selectSongIds,
} = songsAdapter.getSelectors((state) => state.songs);

export const selectSongsByPlaylist = createSelector(
  [selectAllSongs, (state, playlistId) => playlistId],
  (songs, playlistId) => songs.filter((song) => song.playlist === playlistId)
);
