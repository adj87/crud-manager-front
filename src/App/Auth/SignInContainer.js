import React from 'react';
import { connect } from 'react-redux';
import { operations } from './duck';
import { SignInComponent } from './SignInComponent';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    user: state.authentication.user
});
const mapDispatchToProps = { ...operations };
class SignInConnected extends React.Component {
    render() {
        return <SignInComponent {...this.props} />;
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignInConnected));
