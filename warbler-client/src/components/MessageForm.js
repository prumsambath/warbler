import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewMessage } from '../store/actions/messages';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  handleNewMessage = e => {
    e.preventDefault();
    this.props.postNewMessage(this.state.message);
    this.setState({ message: '' });
    this.props.history.push('/');
  };

  render() {
    const { message } = this.props.error;

    return (
      <form onSubmit={this.handleNewMessage}>
        {message && <div className="alert alert-danger">{message}</div>}
        <input
          type="text"
          value={this.state.message}
          className="form-control"
          onChange={e => this.setState({ message: e.target.value })}
        />
        <button className="btn btn-success pull-right" type="submit">
          Add Message
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    error: state.error,
  };
}

export default connect(
  mapStateToProps,
  { postNewMessage }
)(MessageForm);
