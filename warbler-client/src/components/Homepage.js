import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => (
  <div className="home-hero">
    <h1>What's happening?</h1>
    <h4>New to Warbler</h4>
    <Link className="btn btn-primary" to="/signup">
      Sign up here
    </Link>
  </div>
);

export default Homepage;
