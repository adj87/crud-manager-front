import React from 'react';
import { connect } from 'react-redux';
import { operations } from './duck';
import { TableComponent } from './TableComponent';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  user: state.authentication.user
});
const mapDispatchToProps = { ...operations };

class Table extends React.Component {
  componentDidMount() {
    const { setData, prefix, api } = this.props;
    this.props.fetchData(api, prefix);
  }

  render() {
    const prefix = this.props;
    return (
      <TableComponent
      //setData={this.props.setData(prefix)}
      //setPage={this.props.setPage(prefix)}
      />
    );
  }
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Table)
);
