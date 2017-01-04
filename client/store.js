import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';


//import the root reducer
import rootReducer from './reducer/index';

import comments from "./data/comments";
import posts from "./data/posts";

//create an object for default data
const defaultState = {
  posts,
  comments
};

//redux dev tools
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)
const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

//hot reload allow

if(module.hot) {
  module.hot.accept('./reducer/', () => {
    const nextRootReducer = require('./reducer/index').default;
    store.replaceReducer(nextRootReducer);
  })
}

export default store;
