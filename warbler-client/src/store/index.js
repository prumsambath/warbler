import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export function configStore() {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.devToosExtension ? window.devToosExtension() : f => f
    )
  );
}
