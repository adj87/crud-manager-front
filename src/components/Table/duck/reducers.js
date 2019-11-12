import types from './types';
import { combineReducers } from 'redux';

const dataReducer = prefix => (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case types.SET_DATA(prefix):
            return payload;
        default:
            return state;
    }
};

const pageReducer = prefix => (state = 1, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.SET_PAGE(prefix):
            return payload;
        default:
            return state;
    }
};

const rowsPerPage = prefix => (state = 10, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.SET_ROWS_PER_PAGE(prefix):
            return payload;
        default:
            return state;
    }
};

const loadingReducer = prefix => (state = false, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.SET_LOADING(prefix):
            return payload;
        default:
            return state;
    }
};

export default prefix =>
    combineReducers({
        data: dataReducer(prefix),
        page: pageReducer(prefix),
        loading: loadingReducer(prefix)
    });
