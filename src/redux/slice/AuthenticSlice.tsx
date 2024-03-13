import {createSlice} from '@reduxjs/toolkit';

const Authenticate = createSlice({
  name: 'authenticate',
  initialState: {
    isAuthorized: false,
  },
  reducers: {
    authorize: (state: any, action) => {
      state.isAuthorized = true;
      state.userDetails = action.payload;
    },
    logout: (state: any) => {
      state.isAuthorized = false;
      state.userDetails = {
        email: '',
        password: '',
      };
    },
  },
});

export const {authorize, logout} = Authenticate.actions;
export default Authenticate.reducer;
