import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import { client } from '../../api/client';
import echo from '../../api/echo';
import spotify, { spotify_api } from '../../api/spotify';

const songsAdapter = createEntityAdapter();
const initialState = songsAdapter.getInitialState({
  status: 'idle',
  error: null,
});

export const fetchSongs = createAsyncThunk('songs/fetchSongs', async () => {
  const response = await client.get(`${echo.baseURL}/songs`);
  return response.data.map((song) => {
    return {
      id: song.id,
      ...song.attributes,
      ...song.relationships,
    };
  }, []);
});

export const addSong = createAsyncThunk('songs/addSong', async (data) => {
  const response = await client.post(`${echo.baseURL}/songs`, {
    song: data,
  });
  const songData = response.data;
  //attach to playlist
  const playlistId = songData.relationships.playlists.data.map(
    (user) => user.id
  );
  return { id: songData.id, ...songData.attributes };
});

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {},
  extraReducers: {},
});

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
