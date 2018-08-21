import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      imageProfileUrl: '',
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, username, password, imageProfileUrl } = this.state;
    const { buttonText, heading, signUp } = this.props;
    return (
      <div className="row justify-content-md-center text-center">
        <div className="col-md-6">
          <form action={this.handleSubmit}>
            <h2>{heading}</h2>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className="form-control"
            />
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              id="password"
              name="password"
              onChange={this.handleChange}
              className="form-control"
            />
            {signUp && (
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                  className="form-control"
                />
                <label htmlFor="imageProfileUrl">Image Profile URL:</label>
                <input
                  type="text"
                  id="imageProfileUrl"
                  name="imageProfileUrl"
                  value={imageProfileUrl}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default AuthForm;
