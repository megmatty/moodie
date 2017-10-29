import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Register from './Register';
import Login from './Login';
import { registerUser, loginUser } from '../../actions/auth';

class Home extends Component {

  register = (values) => {
    this.props.registerUser(values);
    this.props.changePage();
  }

  login = (values) => {
    this.props.loginUser(values);
    this.props.changePage();
  }

  render() {
    return (
      <div>
        <Register onSubmit={this.register}/>
        <br />
        <hr />
        <Login onSubmit={this.login} />
      </div>
    );
  }

}

const mapStateToProps = state => ({
  user: state.entries.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
  registerUser,
  loginUser,
  changePage: () => push('/profile')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
