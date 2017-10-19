import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { registerUser } from '../auth/auth';

class Register extends Component {

  render() {
    const {fields: {firstName, lastName, email, password}, handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text" />
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

// Decorate the form component
export default reduxForm({
  form: 'contact', // a unique name for this form
  fields: ['firstName', 'lastName', 'email', 'password']
})(Register);



// const Register = props => {
//   console.log(props);
//   const { handleSubmit } = props;

//   logIt = (values) => {
//     console.log(values);
//   }

//   return (
//     <form onSubmit={handleSubmit(this.logIt)}>
//       <div>
//         <label>First Name</label>
//         <div>
//           <Field
//             name="firstName"
//             component="input"
//             type="text"
//             placeholder="First Name"
//           />
//         </div>
//         <button type="submit" >
//           Submit
//         </button>
//       </div>
//     </form>
//     ); 
// }

// export default reduxForm({
//   form: 'simple' // a unique identifier for this form
// })(Register)








// const form = reduxForm({
//   form: 'register',
//   validate,
// });

// const renderField = field => {  
//   console.log(field);

//   return (
//   <div>
//     {/* {field.touched && field.error && <div className="error">{field.error}</div>} */}
//     <input className="form-control" {...field.input} />
    
//   </div>
// );}

// function validate(formProps) {
//   const errors = {};

//   if (!formProps.firstName) {
//     errors.firstName = 'Please enter a first name';
//   }

//   if (!formProps.lastName) {
//     errors.lastName = 'Please enter a last name';
//   }

//   if (!formProps.email) {
//     errors.email = 'Please enter an email';
//   }

//   if (!formProps.password) {
//     errors.password = 'Please enter a password';
//   }

//   return errors;
// }

// class Register extends Component {
//   handleFormSubmit = (formProps) => {
//     formProps.preventDefault();
//     console.log(this);
//     console.log(formProps);
//     this.props.registerUser(formProps);
//   }

//   renderAlert() {
//     if (this.props.errorMessage) {
//       return (
//         <div>
//           <span><strong>Error!</strong> {this.props.errorMessage}</span>
//         </div>
//       );
//     }
//   }

//   render() {
//     const { handleSubmit } = this.props;

//     return (
//       <form onSubmit={this.handleFormSubmit}>
//         {this.renderAlert()}
//         <div className="row">
//           <div className="col-md-6">
//             <label>First Name</label>
//             <Field name="firstName" className="form-control" component={renderField} type="text" />
//           </div>
//           <div className="col-md-6">
//             <label>Last Name</label>
//             <Field name="lastName" className="form-control" component={renderField} type="text" />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-12">
//             <label>Email</label>
//             <Field name="email" className="form-control" component={renderField} type="text" />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-12">
//             <label>Password</label>
//             <Field name="password" className="form-control" component={renderField} type="password" />
//           </div>
//         </div>
//         <button type="submit" className="btn btn-primary">Register</button>
//       </form>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     // errorMessage: state.auth.error,
//     // message: state.auth.message,
//     // authenticated: state.auth.authenticated,
//   };
// }

// export default connect(mapStateToProps, { registerUser })(form(Register));