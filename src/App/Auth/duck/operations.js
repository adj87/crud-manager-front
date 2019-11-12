import api from './api';
import actions from './actions';

const signIn = (credentials, history) => dispatch => {
    //dispatch(actions.setLoading(true));
    api.signIn(credentials).then(res => {
        dispatch(actions.signIn(res.data));
        history.push('1pagina');
    });
};

export const signOut = actions.signOut;

export default {
    signIn,
    signOut
};
