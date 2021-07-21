import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { username: undefined, password: "" },
    //   If it is undefined or username is deleted from the state(which also means it is undefined)=> throws an error when input is changed
    //   the above code (username:null) throws an error in the console as soon as the component mounts
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // Code that goes to server
    console.log("Form Submitted");
  };
  handleChange = ({ target: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    const { account } = this.state;
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
              value={account.username}
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
              value={account.password}
            />
          </div>
          <button className='btn btn-primary'>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
