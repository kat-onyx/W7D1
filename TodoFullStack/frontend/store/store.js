import { createStore, applyMiddleware } from 'redux';
// import reduxLogger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk';

const logger = store => next => (action) => {
  console.log('Prev state: ', store.getState());
  console.log(action);
  next(action);
  console.log('Next state: ', store.getState());
};

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk, logger));
export default configureStore;
