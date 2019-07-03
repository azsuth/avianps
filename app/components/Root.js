import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from 'app/reducers';

const Root = ({ children }) => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );
};

export default Root;
