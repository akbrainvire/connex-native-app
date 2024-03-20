import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isAuthorized: false,
  userDetails: {
    email: '',
    password: '',
    accessToken: '',
  },
  error: '',
  loading: false,
};
const Authenticate = createSlice({
  name: 'authenticate',
  initialState: initialState,
  reducers: {
    logout: (state: any) => {
      return initialState;
    },
    loginUser: (state: any, action) => {},
    // signupUser: (state: any, action) => {},

    loginUserSuccess: (state, action) => {
      console.log('enter in the loginusersuccess');
      state.isAuthorized = true;
      state.userDetails = action.payload;
      state.error = '';
    },
    loginUserError: (state, action) => {
      state.error = action.payload;
    },

    // signupUserSuccess: (state, action) => {
    //   console.log('enter in the loginusersuccess');
    //   state.isAuthorized = true;
    //   state.userDetails = action.payload;
    //   state.error = '';
    // },
    // signupUserError: (state, action) => {
    //   state.error = action.payload;
    // },

    setLoading: state => {
      console.log(state, 'hellostate');
      state.loading = true;
    },
    unsetLoading: state => {
      state.loading = false;
    },
    removeError: state => {
      state.error = '';
    },
  },
});

export const {
  logout,
  loginUserError,
  loginUserSuccess,
  loginUser,
  // signupUser,
  // signupUserError,
  // signupUserSuccess,
  setLoading,
  unsetLoading,
  removeError,
} = Authenticate.actions;
export default Authenticate.reducer;
