import { createStore, applyMiddleware, compose } from 'redux';
// @ts-ignore
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const configureStore = (preloadedState : any) => {
  return createStore (
    rootReducer,
    preloadedState,
    compose (
      applyMiddleware(createLogger)
    )
  );
}

// @ts-ignore
const store = configureStore();

export default store;
