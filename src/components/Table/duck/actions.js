import types from './types';

const setData = prefix => data => ({
    type: types.SET_DATA(prefix),
    payload: data
});

const setPage = prefix => page => ({
    type: types.SET_PAGE(prefix),
    payload: page
});

const setLoading = prefix => loading => ({
    type: types.SET_LOADING(prefix),
    payload: loading
});

const setRowsPerPage = prefix => loading => ({
    type: types.SET_ROWS_PER_PAGE(prefix),
    payload: loading
});

export default {
    setRowsPerPage,
    setLoading,
    setData,
    setPage
};
