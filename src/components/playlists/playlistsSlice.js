import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
  nanoid,
} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux/lib/hooks/useDispatch';

import echo from '../../api/echo';

import playlistObj from '../../db/playlists';

const playlistsAdapter = createEntityAdapter();
// const initialState = playlistsAdapter.getInitialState({});
const initialState = [
  {
    id: '1',
    name: 'Electro',
    description: 'Light me up!',
    pic_url:
      'https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?ixlib=rb-1.2.1\u0026auto=format\u0026fit=crop\u0026w=1050\u0026q=80',
    updated_at: '2020-09-22T02:02:02.331Z',
  },
  {
    id: '2',
    name: 'Mood',
    description: 'Rhythm and freestyle.',
    pic_url:
      'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1\u0026ixid=eyJhcHBfaWQiOjEyMDd9\u0026auto=format\u0026fit=crop\u0026w=1050\u0026q=80',
    updated_at: '2020-09-22T02:02:02.336Z',
  },
  {
    id: '3',
    name: 'Club',
    description: "When you're just feeling it.",
    pic_url:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1\u0026ixid=eyJhcHBfaWQiOjEyMDd9\u0026auto=format\u0026fit=crop\u0026w=1050\u0026q=80',
    updated_at: '2020-09-22T02:02:02.340Z',
  },
  {
    id: '4',
    name: 'Classical',
    description: 'Timeless music.',
    pic_url:
      'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1\u0026ixid=eyJhcHBfaWQiOjEyMDd9\u0026auto=format\u0026fit=crop\u0026w=1050\u0026q=80',
    updated_at: '2020-09-22T02:02:02.347Z',
  },
];

export const playlistsSlice = createSlice({
  name: 'playlists',
  initialState,
  reducers: {
    addPlaylist(state, action) {
      state.push(action.payload);
    },
    prepare(name, description, pic_url) {
      return {
        payload: {
          id: nanoid(),
          name,
          description,
          pic_url,
        },
      };
    },
    editPlaylist(state, action) {
      const { id, name, description, pic_url } = action.payload;
      const existingPlaylist = state.find((playlist) => (playlist.id = id));
      if (existingPlaylist) {
        existingPlaylist.name = name;
        existingPlaylist.description = description;
        existingPlaylist.pic_url = pic_url;
      }
    },
  },
});

// export const playlistsSlice = createSlice({
//   name: 'playlists',
//   initialState,
//   reducers: {
//     getPlaylists: (state) => {},
//     addPlaylist: (playlist) => dispatch({ type: 'ADD_PLAYLIST', playlist }),
//     editPlaylist: (playlist) => dispatch({ type: 'UPDATE_PLAYLIST', playlist }),
//     removePlaylist: (id) => dispatch({ type: 'DELETE_PLAYLIST', id }),
//   },
// });

export const fetchPlaylists = createAsyncThunk(
  'playlists/fetchPlaylists',
  async () => {
    const response = await echo.get('/playlists');
    return response.data.data.map((playlist) => {
      // const songIds = playlist.relationships.songs.data.map((song) => song.id);
      // return { id: playlist.id, ...playlist.attributes, songIds: songIds };
      return { id: playlist.id, ...playlist.attributes };
    });
  }
);

export const {
  getPlaylists,
  addPlaylist,
  editPlaylist,
  removePlaylist,
} = playlistsSlice.actions;

export default playlistsSlice.reducer;
