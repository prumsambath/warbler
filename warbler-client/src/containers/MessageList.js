import { connect } from '../../node_modules/react-redux';
import React, { Component } from 'react';
import { fetchMessages } from '../store/actions/messages';
import MessageItem from '../components/MessageItem';

class MessageList extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }
  render() {
    const { messages } = this.props;

    return messages.map(m => (
      <MessageItem
        key={m._id}
        date={m.createdAt}
        text={m.text}
        username={m.user.username}
        imageProfileUrl={m.user.imageProfileUrl}
      />
    ));
  }
}

function mapStateToProps(state) {
  return { messages: state.messages };
}

export default connect(
  mapStateToProps,
  { fetchMessages }
)(MessageList);
