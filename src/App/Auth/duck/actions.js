import types from './types';

const signIn = user => ({
  type: types.SIGN_IN,
  payload: user
});

const signOut = () => ({
  type: types.SIGN_OUT
});

export default {
  signIn,
  signOut
};
