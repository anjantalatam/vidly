import React, { Component } from "react";

class LoginForm extends Component {
  username = React.createRef();
  componentDidMount() {
    // this.username.current.focus();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // Code that goes to server
    console.log(this.username.current.value);
    console.log("Form Submitted");
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
              ref={this.username}
              id='username'
              type='text'
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input id='password' type='text' className='form-control' />
          </div>
          <button className='btn btn-primary'>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
