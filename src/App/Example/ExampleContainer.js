import React from 'react';
import { connect } from 'react-redux';
import { operations } from './duck';
import { withRouter } from 'react-router-dom';
import api from './duck/api';
import Table from '../../components/Table/TableContainer';
import { SECTION_EXAMPLE } from './duck/types';

const mapStateToProps = state => ({
    user: state.authentication.user,
    data: state.example.table.data
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

        return <Table prefix={SECTION_EXAMPLE} api={api.fetchDataExample} data={this.props.data} columns={columns} title={'Example'} pagination />;
    }
}
export default connect(mapStateToProps, null)(ExampleContainer);
