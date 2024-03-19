import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isAuthorized: false,
  userDetails: {
    email: '',
    password: '',
    token: '',
  },
  error: '',
};
const Authenticate = createSlice({
  name: 'authenticate',
  initialState: initialState,
  reducers: {
    logout: (state: any) => {
      state.isAuthorized = false;
      state.userDetails = {
        email: '',
        password: '',
      };
    },
    loginUser: (state: any, action) => {},
    signupUser: (state: any, action) => {},

    loginUserSuccess: (state, action) => {
      console.log('enter in the loginusersuccess');
      state.isAuthorized = true;
      state.userDetails = action.payload;
      state.error = '';
    },
    loginUserError: (state, action) => {
      state.error = action.payload;
    },

    signupUserSuccess: (state, action) => {
      console.log('enter in the loginusersuccess');
      state.isAuthorized = true;
      state.userDetails = action.payload;
      state.error = '';
    },
    signupUserError: (state, action) => {
      state.error = action.payload;
    },
    resetTemporaryState: state => {
      return initialState;
    },
  },
});

export const {
  logout,
  loginUserError,
  loginUserSuccess,
  resetTemporaryState,
  loginUser,
  signupUser,
  signupUserError,
  signupUserSuccess,
} = Authenticate.actions;
export default Authenticate.reducer;
