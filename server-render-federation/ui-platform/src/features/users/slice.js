import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userList: []
};

export const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers: (state, action) => {
      console.log('slice:', action.payload)
      state.userList = action.payload;
    },
  },
});

export const { addUsers } = slice.actions;

export const selectUsers = (state) => state.users.userList;
export default slice.reducer;
