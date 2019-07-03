import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import BirdListContainer from 'app/components/BirdList/BirdListContainer';

import { getBirds } from 'app/actions/bird';

const App = ({ getBirds }) => {
  useEffect(() => {
    getBirds();
  });

  return (
    <div className="App">
      <Route path="/" exact component={BirdListContainer} />
      <Route path="/:birdId" />
    </div>
  );
};

export default connect(
  null,
  { getBirds }
)(App);
