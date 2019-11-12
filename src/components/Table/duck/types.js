const SECTION_TABLE = 'TABLE_';

const SET_DATA = prefix => prefix + SECTION_TABLE + 'SET_DATA';
const SET_PAGE = prefix => prefix + SECTION_TABLE + 'SET_PAGE';
const SET_LOADING = prefix => prefix + SECTION_TABLE + 'SET_LOADING';
const SET_ROWS_PER_PAGE = prefix => prefix + SECTION_TABLE + 'SET_ROWS_PER_PAGE';

export default {
    SET_LOADING,
    SET_DATA,
    SET_PAGE,
    SET_ROWS_PER_PAGE
};
