import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from '../reducers';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middleWares.push(logger)
}

export default createStore(rootReducer, applyMiddleware(...middleWares))
