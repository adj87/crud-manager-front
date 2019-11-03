import types from './types';

const setDataExample = user => ({
  type: types.SET_DATA,
  payload: user
});

export default {
  setDataExample
};
