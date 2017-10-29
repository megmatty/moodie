import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { registerUser } from '../../actions/auth';

class Register extends Component {

  render() {
    const {fields: {username, email, password}, handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">User Name</label>
          <Field name="username" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}


// const mapDispatchToProps = dispatch => bindActionCreators({
//   findAll,
//   refreshData,
//   getUser,
//   changePage: () => push('/profile')
// }, dispatch)

// Decorate the form component
export default reduxForm({
  form: 'contact', // a unique name for this form
  fields: ['username', 'email', 'password']
})(Register);
