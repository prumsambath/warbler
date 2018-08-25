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

  handleSubmit = e => {
    e.preventDefault();
    const authType = this.props.signUp ? 'signup' : 'signin';
    this.props.onAuth(authType, this.state).then(() => {
      console.log('Log in successfully');
    });
  };

  render() {
    const { email, username, password, imageProfileUrl } = this.state;
    const {
      buttonText,
      heading,
      signUp,
      error,
      history,
      removeError,
    } = this.props;

    history.listen(() => {
      removeError();
    });

    return (
      <div className="row justify-content-md-center text-center">
        <div className="col-md-6">
          <form onSubmit={this.handleSubmit}>
            <h2>{heading}</h2>
            {error.message && (
              <div className="alert alert-danger">{error.message}</div>
            )}
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
            <button className="btn btn-primary btn-block btn-lg" type="submit">
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AuthForm;
