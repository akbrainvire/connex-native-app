import {combineReducers} from '@reduxjs/toolkit';
import AuthenticSlice from './slice/AuthenticSlice';

export let rootReducer = combineReducers({
  authenticate: AuthenticSlice,
});
