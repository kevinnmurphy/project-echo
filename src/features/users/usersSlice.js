import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from '@reduxjs/toolkit';

const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState({
  name: '',
  pic_url: '',
});

// export const fetchUser = createAsyncThunk('users/fetchUsers', async () > {
//   const res = await {}.get('/users')
// })

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUsers: (state) => {},
    addUser: (state) => {},
    editUser: (state) => {},
    removeUser: (state) => {},
  },
});

export const { addUser, editUser, removeUser } = usersSlice.actions;

export default usersSlice.reducer;
