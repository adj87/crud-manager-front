import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import signInReducer from './App/Auth/duck';
import tableReducer from './components/Table/duck/reducers';

const rootReducer = combineReducers({
  authentication: signInReducer,
  example: tableReducer('example')
});

const middlewares = [thunk];

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
