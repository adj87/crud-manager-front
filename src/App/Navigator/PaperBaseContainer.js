import React from 'react';
import { connect } from 'react-redux';
import Paperbase from './PaperbaseComponent';
import { withRouter } from 'react-router-dom';
import { operations } from './duck';

const mapStateToProps = state => ({
    user: state.authentication.user
});

const mapDispatchToProps = { hallo: a => console.log(a), ...operations };

class PaperbaseConnected extends React.Component {
    render() {
        return <Paperbase {...this.props} />;
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PaperbaseConnected));
