import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import { watchWeather } from './saga';

const saga = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(saga));

saga.run(watchWeather);

export default store;
