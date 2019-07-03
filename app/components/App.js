import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import BirdListContainer from 'app/components/BirdList/BirdListContainer';
import BirdDetailsContainer from 'app/components/BirdDetails/BirdDetailsContainer';

import { getBirds } from 'app/actions/bird';

const App = ({ getBirds, numBirds }) => {
  useEffect(() => {
    getBirds();
  });

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={BirdListContainer} />

        {numBirds > 0 ? (
          <Route path="/:birdId" component={BirdDetailsContainer} />
        ) : (
          <Route render={() => <Redirect to="/" />} />
        )}
      </Switch>
    </div>
  );
};

const mapStateToProps = ({ Birds }) => ({
  numBirds: Birds.birds.length
});

export default connect(
  mapStateToProps,
  { getBirds }
)(App);
