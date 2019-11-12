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
        const { prefix, api } = this.props;
        this.props.fetchData(api, prefix);
    }

    componentWillUnmount() {
        const { prefix } = this.props;
        this.props.resetDataTable(prefix);
    }

    render() {
        const { columns, pagination, paginationDefaultPage, data, title } = this.props;
        return <DataTable title={title} columns={columns} data={data} pagination={pagination} paginationDefaultPage={paginationDefaultPage}></DataTable>;
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Table));
