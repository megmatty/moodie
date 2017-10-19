import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Register from './Register';
import Login from './Login';
import { registerUser, loginUser } from '../auth/auth';

class Home extends Component {

  register = (values) => {
    console.log(values);
    console.log(this);
    this.props.registerUser(values);
  }

  login = (values) => {
    this.props.loginUser(values);
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
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  registerUser,
  loginUser
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
