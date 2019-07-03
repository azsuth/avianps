import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';

import Root from 'app/components/Root';
import App from 'app/components/App';

import 'app/styles/index.scss';

ReactDOM.render(
  <Root>
    <Route path="/" component={App} />
  </Root>,
  document.getElementById('root')
);
