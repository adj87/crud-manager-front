import { combineReducers } from 'redux';
import tableReducer from '../../../components/Table/duck';
import { SECTION_EXAMPLE } from './types';

export default combineReducers({
    table: tableReducer(SECTION_EXAMPLE)
});
