import { signOut } from '../../Auth/duck/operations';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

export const isAuthenticated = () => dispatch => {
  const token = cookie.load('token');
  try {
    jwt.verify(token, 'jauregui');
    return true;
  } catch {
    dispatch(signOut());
    return false;
  }
};

export default { signOut, isAuthenticated };
