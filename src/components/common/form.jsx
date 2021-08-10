import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";

class Form extends Component {
  validate = () => {
    const errors = {};
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
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
    const data = { ...this.state.data };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    data[input.name] = input.value;
    this.setState({ data, errors });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate() || {};
    this.setState({ errors });
    if (Object.keys(errors).length > 0) return;

    this.doSubmit();
  };

  renderButton = (label) => {
    return (
      <button disabled={this.validate()} className='btn btn-primary'>
        {label}
      </button>
    );
  };

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };
}

export default Form;
