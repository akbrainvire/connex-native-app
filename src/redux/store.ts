import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './saga/rootSaga';

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleWare: any) =>
    getDefaultMiddleWare().concat(sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga);

export default store;
