import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class Login extends Component {

  render() {
    const {fields: { username, password}, handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="username">Username</label>
          <Field name="username" component="input" type="text" />
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

// Decorate the form component
export default reduxForm({
  form: 'contact', // a unique name for this form
  fields: ['username', 'password']
})(Login);

