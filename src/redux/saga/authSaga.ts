import {takeLatest, put, call} from 'redux-saga/effects';
import axios from 'axios';
import {
  loginUser,
  loginUserError,
  loginUserSuccess,
  signupUser,
  signupUserError,
  signupUserSuccess,
} from '../slice/AuthenticSlice';

interface loginI {
  data: {
    user: string;
    accessToken: string;
    userId: string;
    role: string;
    firstName: string;
    lastName: string;
    previousUser: string;
    isImpersonate: false;
    isSubscribed: true;
    isUserEnabled: true;
    totalUnreadNotifications: 380;
    isAppStoreUser: null;
    shopifyAppURL: null;
    stripeCustomerId: null;
    userLiecense: string;
    maxChannelsAllowed: number;
  };
  status: number;
}

export function* loginUserSaga(action: any) {
  try {
    const {username, password} = action.payload;
    const response: loginI = yield call(
      axios.post,
      'https://connexreporting-api-staging.azurewebsites.net/api/Account/Login',
      {
        username,
        password,
        deviceId: '',
      },
    );
    console.log(response, 'response - user login');
    if (response.status === 200) {
      yield put(loginUserSuccess(response.data));
    } else {
      yield put(loginUserError('Invalid username or password'));
    }
  } catch (error: any) {
    console.log(error, 'error login user');
    yield put(loginUserError(error.message));
  }
}

export function* watchLoginUser() {
  yield takeLatest(loginUser, loginUserSaga);
}

function* signupUserSaga(action: any) {
  try {
    const response = yield call(
      axios.post,
      'https://connexreporting-api-staging.azurewebsites.net/api/Account/Register',
      action.payload,
    );
    if (response.status === 200) {
      yield put(signupUserSuccess(response.data));
    } else {
      yield put(signupUserError('Invalid username or password'));
    }
  } catch (error: any) {
    yield put(signupUserError(error.message));
  }
}

export function* watchRegisterUser() {
  yield takeLatest(signupUser, signupUserSaga);
}
