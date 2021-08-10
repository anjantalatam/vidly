import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };

  validate = () => {
    const errors = {};

    const output = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });
    console.log(output);

    const { username, password } = this.state.account;
    if (username.trim() === "") errors.username = "Username is required";
    if (password.trim() === "") errors.password = "Password is required";

    return errors;
  };

  validateProperty = ({ name, value }) => {
    const errors = { ...this.state.errors };
    if (value.trim() === "") errors[name] = `${name} is required`;
    else delete errors[name];
    return errors;
  };

  handleChange = ({ target: input }) => {
    const account = { ...this.state.account };
    const errors = this.validateProperty(input);
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors });
    if (errors) return;

    // Code that goes to server
    console.log("Form Submitted");
  };
  render() {
    const { account, errors } = this.state;
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

          <button className='btn btn-primary'>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
