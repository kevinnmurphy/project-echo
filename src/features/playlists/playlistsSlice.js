import {
  createSlice,
  createAsyncThunk,
  // createSelector,
  // createEntityAdapter,
} from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux/lib/hooks/useDispatch';

// import echo from '../../api/echo';
import { client } from '../../api/client';

// const playlistsAdapter = createEntityAdapter();
// const initialState = playlistsAdapter.getInitialState({});
const initialState = {
  playlists: [],
  // data: [],
  status: 'idle',
  error: null,
};

export const fetchPlaylists = createAsyncThunk(
  'playlists/fetchPlaylists',
  async () => {
    const response = await client.get('http://localhost:3001/playlists');
    return response.data.map((playlist) => {
      // const songIds = playlist.relationships.songs.data.map((song) => song.id);
      // return { id: playlist.id, ...playlist.attributes, songIds: songIds };
      return { id: playlist.id, ...playlist.attributes };
    });
  }
);

export const addPlaylist = createAsyncThunk(
  'playlists/addPlaylist',
  async (initialPlaylist) => {
    const response = await client.post('http://localhost:3001/playlists', {
      playlist: initialPlaylist,
    });
    const playlistData = response.data.data;
    //attach to user
    const userId = playlistData.relationships.users.data.map((user) => user.id);
    // return response.playlist;
    return { id: playlistData.id, ...playlistData.attributes };
  }
);

export const editPlaylist = createAsyncThunk(
  'playlists/editPlaylist',
  async ({ id, data }) => {
    const response = await client.post(
      `http://localhost:3001/playlists/${id}`,
      {
        playlist: data,
      }
    );
    const playlistData = response.data;
    return { id: playlistData.id, ...playlistData.data.attributes };
  }
);

export const removePlaylist = createAsyncThunk(
  'playlists/removePlaylist',
  async (id) => {
    const response = await client.delete(
      `http://localhost:3001/playlists/${id}`
    );
    const playlistData = response.data;
    debugger;
    //returns correct list
    return { playlistData };
  }
);

export const playlistsSlice = createSlice({
  name: 'playlists',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPlaylists.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchPlaylists.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.playlists = state.playlists.concat(action.payload);
    },
    [fetchPlaylists.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [addPlaylist.fulfilled]: (state, action) => {
      state.playlists.push(action.payload);
    },
    [editPlaylist.fulfilled]: (state, action) => {
      state.playlists.push(action.payload);
    },
    [removePlaylist.fulfilled]: (state, action) => {
      // debugger;
      state.playlists.filter((playlist) => playlist.id !== action.id);
    },
  },
});

// export const {
//   likePlaylists,
// } = playlistsSlice.actions;

export default playlistsSlice.reducer;

export const selectAllPlaylists = (state) => state.playlists.playlists;
export const selectPlaylistById = (state, playlistId) => {
  state.playlists.playlists.find((playlist) => playlist.id === playlistId);
};
