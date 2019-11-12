import types from './types';
import { combineReducers } from 'redux';

const userReducer = (state = null, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.SIGN_IN:
            return payload;
        case types.SIGN_OUT:
            return null;
        default:
            return state;
    }
};

export default combineReducers({
    user: userReducer
});
