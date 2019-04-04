import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

//creating the sagamiddleware
const sagaMiddleware = createSagaMiddleware();

//creating the store to provide for the app
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger),
)

sagaMiddleware.run(rootSaga);

export default store;