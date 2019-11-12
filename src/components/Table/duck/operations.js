import actions from './actions';
import { generalFetchOperation } from '../../../generalUtils';

export const fetchData = (api, prefix) => generalFetchOperation(() => api(), actions.setData(prefix))();

export const resetDataTable = prefix => dispatch => dispatch(actions.setData(prefix)([]));

export default {
    fetchData,
    resetDataTable
};
