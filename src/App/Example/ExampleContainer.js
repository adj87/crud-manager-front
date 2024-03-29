import React from 'react';
import { connect } from 'react-redux';
import { operations } from './duck';
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
                name: 'id',
                selector: 'id',
                sortable: true
            },
            {
                name: 'Nombre',
                selector: 'nombre',
                sortable: true
            },

            {
                name: 'Cif',
                selector: 'cif',
                sortable: true
            },
            {
                name: 'Poblacion',
                selector: 'poblacion',
                sortable: true
            },
            {
                name: 'Provincia',
                selector: 'provincia',
                sortable: true
            },

            {
                name: 'Teléfono',
                selector: 'telefono',
                sortable: true
            }
        ];
        const { data, loading, paginationPerPage } = this.props.table;
        return (
            <Table
                prefix={SECTION_EXAMPLE}
                api={api.fetchDataExample}
                data={data}
                columns={columns}
                title={'Example'}
                pagination
                loading
                progressPending={loading}
                highlightOnHover
                paginationPerPage={paginationPerPage}
            />
        );
    }
}
export default connect(mapStateToProps, null)(ExampleContainer);
