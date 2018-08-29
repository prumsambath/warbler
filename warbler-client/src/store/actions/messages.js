import { apiCall } from '../../services/api';
import { addError } from './error';
import { LOAD_MESSAGES } from '../actionTypes';

export const loadMessages = messages => ({
  type: LOAD_MESSAGES,
  messages,
});

export const fetchMessages = () => {
  return dispatch => {
    return apiCall('get', '/api/messages')
      .then(res => {
        dispatch(loadMessages(res));
      })
      .catch(err => {
        addError(err.message);
      });
  };
};