import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    pic_url: '',
  },
  reducers: {
    addUser: (state) => {
      state.name = '';
    },
    editUser: (state) => {
      state.name = '';
    },
    removeUser: (state) => {
      state.name = '';
    },
  },
});

export const { addUser, editUser, removeUser } = usersSlice.actions;

export default usersSlice.reducer;
