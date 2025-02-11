import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    logoutUser: (state) => {
      state.currentUser = null;
      state.error = null;
    }
  }
});

// Export the action creators
export const { setUser, setError, logoutUser } = userSlice.actions;

// Export the reducer
export default userSlice.reducer; 