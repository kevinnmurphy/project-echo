import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import echo from '../../api/echo';
import { client } from '../../api/client';

const usersAdapter = createEntityAdapter();
const initialState = usersAdapter.getInitialState({
  status: 'idle',
  error: null,
  currentUser: null,
});

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get(`${echo.baseURL}/users`);
  return response.data.map((user) => {
    return {
      id: user.id,
      ...user.attributes,
      ...user.relationships,
    };
  }, []);
});

export const addUser = createAsyncThunk('users/addUser', async (data) => {
  const response = await client.post(`${echo.baseURL}/users`, {
    user: data,
  });
  const userData = response.data;
  return { id: userData.id, ...userData.attributes };
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    currentUserAdd(state, action) {
      state.currentUser = action.payload;
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      usersAdapter.upsertMany(state, action.payload);
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    [addUser.fulfilled]: usersAdapter.addOne,
  },
});

export const { currentUserAdd } = usersSlice.actions;

export default usersSlice.reducer;

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
} = usersAdapter.getSelectors((state) => state.users);

export const selectUsersByPlaylist = createSelector(
  [selectAllUsers, (state, playlistId) => playlistId],
  (users, playlistId) =>
    users.filter((user) => user.playlists.data.id === playlistId)
);
