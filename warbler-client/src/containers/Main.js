import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import { authUser } from '../store/actions/auth';
import { removeError } from '../store/actions/error';

const Main = props => {
  const { authUser, error, removeError, currentUser } = props;
  return (
    <div className="container">
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Homepage currentUser={currentUser} {...props} />}
        />
        <Route
          exact
          path="/signin"
          render={props => {
            return (
              <AuthForm
                removeError={removeError}
                error={error}
                onAuth={authUser}
                buttonText="Log in"
                heading="Welcome back."
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/signup"
          render={props => {
            return (
              <AuthForm
                removeError={removeError}
                error={error}
                onAuth={authUser}
                signUp={true}
                buttonText="Sign up"
                heading="Join Warbler today!"
                {...props}
              />
            );
          }}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user,
  error: state.error,
});

export default withRouter(
  connect(
    mapStateToProps,
    { authUser, removeError }
  )(Main)
);
