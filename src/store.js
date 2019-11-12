import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import signInReducer from './App/Auth/duck';
import exampleReducer from './App/Example/duck';

const rootReducer = combineReducers({
    authentication: signInReducer,
    example: exampleReducer
});

const middlewares = [thunk];

export const store = createStore(rootReducer, compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
