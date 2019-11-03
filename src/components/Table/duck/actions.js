import types from './types';

const setData = prefix => data => ({
  type: types.SET_DATA(prefix),
  payload: data
});

const setPage = prefix => page => ({
  type: types.SET_PAGE(prefix),
  payload: page
});

export default {
  setData,
  setPage
};
