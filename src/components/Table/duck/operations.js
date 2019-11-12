import actions from './actions';

export const fetchData = (api, prefix) => dispatch => {
    dispatch(actions.setLoading(prefix)(true));
    api()
        .then(res => {
            dispatch(actions.setData(prefix)(res.data));
            dispatch(actions.setLoading(prefix)(false));
        })
        .catch(err => {
            dispatch(actions.setLoading(prefix)(false));
            dispatch({ type: 'error', payload: true });
        });
};

export const resetDataTable = prefix => dispatch => dispatch(actions.setData(prefix)([]));

export default {
    fetchData,
    resetDataTable
};
