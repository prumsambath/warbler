import React from 'react';
import { Link } from 'react-router-dom';
import MessageTimeline from './MessageTimeLine';

const Homepage = ({ currentUser }) => {
  if (currentUser.isAuthenticated) {
    return <MessageTimeline />;
  } else {
    return (
      <div className="home-hero">
        <h1>What's happening?</h1>
        <h4>New to Warbler</h4>
        <Link className="btn btn-primary" to="/signup">
          Sign up here
        </Link>
      </div>
    );
  }
};

export default Homepage;
