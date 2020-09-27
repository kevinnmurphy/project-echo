import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux/lib/hooks/useDispatch';

import echo from '../../api/echo';
import { client } from '../../api/client';

const playlistsAdapter = createEntityAdapter();
const initialState = playlistsAdapter.getInitialState({
  status: 'idle',
  error: null,
});

export const fetchPlaylists = createAsyncThunk(
  'playlists/fetchPlaylists',
  async () => {
    const response = await client.get(`${echo.baseURL}/playlists`);
    return response.data.map((playlist) => {
      // const songIds = playlist.relationships.songs.data.map((song) => song.id);
      // return { id: playlist.id, ...playlist.attributes, songIds: songIds };
      return { id: playlist.id, ...playlist.attributes };
    }, []);
  }
);

export const addPlaylist = createAsyncThunk(
  'playlists/addPlaylist',
  async (data) => {
    const response = await client.post(`${echo.baseURL}/playlists`, {
      playlist: data,
    });
    const playlistData = response.data;
    //attach to user
    const userId = playlistData.relationships.users.data.map((user) => user.id);
    return { id: playlistData.id, ...playlistData.attributes };
  }
);

export const editPlaylist = createAsyncThunk(
  'playlists/editPlaylist',
  async ({ id, data }) => {
    const response = await client.patch(`${echo.baseURL}/playlists/${id}`, {
      playlist: data,
    });
    const playlistData = response.data;
    return { id: playlistData.id, ...playlistData.attributes };
  }
);

export const removePlaylist = createAsyncThunk(
  'playlists/removePlaylist',
  async (id) => {
    const response = await client.delete(`${echo.baseURL}/playlists/${id}`);
    const playlistData = response.data;
    return playlistData.id;
  }
);

const playlistsSlice = createSlice({
  name: 'playlists',
  initialState,
  reducers: {
    likeAdded(state, action) {
      const { playlistId, like } = action.payload;
      const existingPlaylist = state.entities[playlistId];
      if (existingPlaylist) {
        existingPlaylist.likes[like]++;
      }
    },
  },
  extraReducers: {
    [fetchPlaylists.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchPlaylists.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      playlistsAdapter.upsertMany(state, action.payload);
    },
    [fetchPlaylists.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    [addPlaylist.fulfilled]: playlistsAdapter.addOne,
    [addPlaylist.fulfilled]: playlistsAdapter.addOne,
    [editPlaylist.fulfilled]: playlistsAdapter.upsertOne,
    [removePlaylist.fulfilled]: playlistsAdapter.removeOne,
  },
});

export default playlistsSlice.reducer;

export const {
  selectAll: selectAllPlaylists,
  selectById: selectPlaylistById,
  selectIds: selectPlaylistIds,
} = playlistsAdapter.getSelectors((state) => state.playlists);

export const selectPlaylistsByUser = createSelector(
  [selectAllPlaylists, (state, userId) => userId],
  (playlists, userId) =>
    playlists.filter((playlist) => playlist.user === userId)
);
