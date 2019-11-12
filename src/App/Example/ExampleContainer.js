import React from 'react';
import { connect } from 'react-redux';
import { operations } from './duck';
import { withRouter } from 'react-router-dom';
import api from './duck/api';
import Table from '../../components/Table/TableContainer';
import { SECTION_EXAMPLE } from './duck/types';

const mapStateToProps = state => ({
    user: state.authentication.user,
    table: state.example.table
});
const mapDispatchToProps = { ...operations };

class ExampleContainer extends React.Component {
    render() {
        const columns = [
            {
                name: 'Nombre',
                selector: 'nombre',
                sortable: true
            },
            {
                name: 'id',
                selector: 'id',
                sortable: true
            }
        ];
        const { data, loading } = this.props.table;
        return <Table prefix={SECTION_EXAMPLE} api={api.fetchDataExample} data={data} columns={columns} title={'Example'} pagination loading progressPending={loading} highlightOnHover />;
    }
}
export default connect(
    mapStateToProps,
    null
)(ExampleContainer);
