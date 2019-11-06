import React from 'react';
import { connect } from 'react-redux';
import { operations } from './duck';
import { withRouter } from 'react-router-dom';
import api from './duck/api';
import Table from '../../components/Table/TableContainer';

const mapStateToProps = state => ({
  user: state.authentication.user,
  data: state.example.data
});
const mapDispatchToProps = { ...operations };

export class ExampleContainer extends React.Component {
  render() {
    return (
      <Table
        prefix={'example'}
        api={api.fetchDataExample}
        data={this.props.data}
      />
    );
  }
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ExampleContainer)
);
