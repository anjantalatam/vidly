import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  validate = () => {
    const errors = {};
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    error &&
      error.details.forEach((error) => (errors[error.path[0]] = error.message));
    return Object.keys(errors).length !== 0 ? errors : null;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema, { abortEarly: false });
    return error ? error.details[0].message : null;
  };

  handleChange = ({ target: input }) => {
    const errors = { ...this.state.errors };
    const account = { ...this.state.account };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate() || {};
    this.setState({ errors });
    if (errors) return;

    // Code that goes to server
    console.log("Form Submitted");
  };
  render() {
    const { account, errors } = this.state;
    console.log(errors);
    return (
      <div>
        <h1>Login Form </h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name='username'
            value={account.username}
            label='Username'
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name='password'
            value={account.password}
            label='Password'
            onChange={this.handleChange}
            error={errors.password}
          />

          <button disabled={this.validate()} className='btn btn-primary'>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
