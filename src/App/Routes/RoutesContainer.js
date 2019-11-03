import React from 'react';
import { connect } from 'react-redux';
import { RoutesComponent } from './RoutesComponent';
import { operations } from './duck';

const mapStateToProps = state => ({
  user: state.authentication.user
});

const mapDispatchToProps = { ...operations };

class RoutesConnected extends React.Component {
  render() {
    return <RoutesComponent {...this.props} />;
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoutesConnected);
