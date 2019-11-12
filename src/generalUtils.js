export const generalFetchOperation = (api, setterAction, cbOnSuccess) => () => dispatch => {
    dispatch({ type: 'carga', payload: true });
    api()
        .then(res => {
            if (setterAction) {
                dispatch(setterAction(res.data));
            }
            if (cbOnSuccess) {
                cbOnSuccess(res.data, dispatch, res);
            }
            dispatch({ type: 'carga', payload: false });
        })
        .catch(err => {
            dispatch({ type: 'carga', payload: false });
            dispatch({ type: 'error', payload: true });
        });
};
