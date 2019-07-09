import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import BirdListContainer from 'app/components/BirdList/BirdListContainer';
import BirdDetailsContainer from 'app/components/BirdDetails/BirdDetailsContainer';
import BirdRatingContainer from 'app/components/BirdRating/BirdRatingContainer';

import { getBirds } from 'app/actions/bird';

import 'app/styles/App.scss';

const App = ({ getBirds, numBirds, loading, error }) => {
  useEffect(() => {
    getBirds();
  }, []);

  const renderOverlay = () => {
    if (error) {
      return (
        <div className="App__message-container">
          <span className="App__message">{error.message}</span>
          <span className="App__sub-message">Please try again later</span>
        </div>
      );
    }

    if (loading) {
      return (
        <div className="App__message-container">
          <span className="App__message">Loading...</span>
        </div>
      );
    }
  };

  return (
    <div className="App">
      {numBirds > 0 ? (
        <Switch>
          <Route path="/" exact component={BirdListContainer} />
          <Route path="/:birdId/rate/:scoreId?" component={BirdRatingContainer} />
          <Route path="/:birdId" component={BirdDetailsContainer} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact component={BirdListContainer} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      )}

      {renderOverlay()}
    </div>
  );
};

const mapStateToProps = ({ Birds }) => ({
  numBirds: Birds.birds.length,
  loading: Birds.loading,
  error: Birds.error
});

export default connect(
  mapStateToProps,
  { getBirds }
)(App);
