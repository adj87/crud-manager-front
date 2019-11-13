import React from 'react';
import { connect } from 'react-redux';
import { operations } from './duck';
import { withRouter } from 'react-router-dom';
import DataTable from 'react-data-table-component';

const mapStateToProps = state => ({
    user: state.authentication.user
});
const mapDispatchToProps = { ...operations };

class Table extends React.Component {
    componentDidMount() {
        const rowHeight = 47; //px
        const spaceLeft = window.innerHeight - 380;
        const rowsPerPage = Math.floor(spaceLeft / rowHeight);
        this.props.setRowsPerPage(this.props.prefix, rowsPerPage);
    }

    componentDidUpdate(prevPos) {
        const { prefix, api, fetchData, paginationPerPage } = this.props;
        if (paginationPerPage !== prevPos.paginationPerPage) {
            fetchData(api, prefix);
        }
    }
    componentWillUnmount() {
        const { prefix } = this.props;
        this.props.resetDataTable(prefix);
        this.props.setRowsPerPage(prefix, null);
    }

    render() {
        const { prefix, api, ...datatableProps } = this.props;
        return <>{this.props.paginationPerPage && <DataTable {...datatableProps}></DataTable>}</>;
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Table));
