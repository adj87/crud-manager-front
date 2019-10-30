import axios from 'axios';

const API_AUTH = '/authentication/';

const signIn = credentials => {
  const url = `${API_AUTH}sign-in`;
  return axios.post(url, credentials);
};

export default {
  signIn
};
