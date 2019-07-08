import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import BirdListContainer from 'app/components/BirdList/BirdListContainer';
import BirdDetailsContainer from 'app/components/BirdDetails/BirdDetailsContainer';
import BirdRatingContainer from 'app/components/BirdRating/BirdRatingContainer';

import { getBirds } from 'app/actions/bird';

const App = ({ getBirds, numBirds }) => {
  useEffect(() => {
    getBirds();
  }, []);

  return (
    <div className="App">
      {numBirds > 0 ? (
        <Switch>
          <Route path="/" exact component={BirdListContainer} />
          <Route path="/:birdId/rate" component={BirdRatingContainer} />
          <Route path="/:birdId" component={BirdDetailsContainer} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact component={BirdListContainer} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      )}
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
