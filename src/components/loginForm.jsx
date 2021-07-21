import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // Code that goes to server
    console.log("Form Submitted");
  };
  handleChange = (e) => {
    const account = { ...this.state.account };
    account.username = e.target.value;
    this.setState({ account });
  };
  render() {
    return (
      <div>
        <h1>Login Form </h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input
              autoFocus
              name='username'
              id='username'
              type='text'
              className='form-control'
              value={this.state.account.username}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              type='text'
              className='form-control'
              name='password'
              onChange={this.handleChange}
            />
          </div>
          <button className='btn btn-primary'>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
