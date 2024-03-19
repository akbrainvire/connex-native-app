// authSaga.js

import {all} from 'redux-saga/effects';
import {watchLoginUser, watchRegisterUser} from './authSaga';

export default function* rootSaga() {
  yield all([watchLoginUser(), watchRegisterUser()]);
}
