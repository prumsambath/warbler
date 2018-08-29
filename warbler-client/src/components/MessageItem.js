import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import DefaultProfileImg from '../images/default-profile-image.jpg';

const MessageItem = ({ date, text, username, imageProfileUrl }) => (
  <div>
    <img
      src={imageProfileUrl || DefaultProfileImg}
      alt={username}
      height="100"
      width="100"
    />
    <div className="messge-area">
      <Link to="/">@{username} &nbsp;</Link>
      <span className="text-muted">
        <Moment className="text-muted" format="Do MMM YYYY">
          {date}
        </Moment>
      </span>
      <p>{text}</p>
    </div>
  </div>
);

export default MessageItem;
