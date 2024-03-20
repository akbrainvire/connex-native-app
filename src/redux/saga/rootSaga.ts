// authSaga.js

import {all, fork} from 'redux-saga/effects';
import {watchLoginUser} from './authSaga';

export default function* rootSaga() {
  yield all([fork(watchLoginUser)]);
}
