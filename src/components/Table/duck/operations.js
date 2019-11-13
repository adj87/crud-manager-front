import actions from './actions';

const fetchData = (api, prefix) => dispatch => {
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

const resetDataTable = prefix => dispatch => dispatch(actions.setData(prefix)([]));
const setRowsPerPage = (prefix, rowsPerPage) => dispatch => dispatch(actions.setRowsPerPage(prefix)(rowsPerPage));

export default {
    fetchData,
    resetDataTable,
    setRowsPerPage
};
