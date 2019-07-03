import React from 'react';
import { connect } from 'react-redux';

import BirdList from './BirdList';

const BirdListContainer = () => {
  return <BirdList />;
};

export default connect(
  null,
  {}
)(BirdListContainer);
