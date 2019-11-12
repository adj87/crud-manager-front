import React, { Component } from 'react';
import DataTable from 'react-data-table-component';

export class TableComponent extends Component {
    /*   state = {
    data: [],
    loading: false,
    totalRows: 0,
    perPage: 10
  }; */

    /*   handlePageChange = async page => {
    const { perPage } = this.props;

    const response = await axios.get(
      `https://reqres.in/api/users?page=${page}&per_page=${perPage}&delay=1`
    );

    this.setState({
      loading: false,
      data: response.data.data
    });
  };

  handlePerRowsChange = async (perPage, page) => {
    this.setState({ loading: true });

    const response = await axios.get(
      `https://reqres.in/api/users?page=${page}&per_page=${perPage}&delay=1`
    );

    this.setState({
      loading: false,
      data: response.data.data,
      perPage
    });
  }; */

    render() {
        const { data, columns, pagination } = this.props;

        return (
            <DataTable
                title="Users"
                columns={columns}
                data={data}
                pagination={pagination}
                paginationDefaultPage={3}
                /*         progressPending={loading}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        onChangeRowsPerPage={this.handlePerRowsChange}
        onChangePage={this.handlePageChange} */
            />
        );
    }
}
