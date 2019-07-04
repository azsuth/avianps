import React from 'react';
import PropTypes from 'prop-types';

const BPS = ({ bps }) => (
  <span className="BPS">
    <span className="BPS__label">BPS:</span>
    <span className="BPS__value">{bps}</span>
  </span>
);

BPS.propTypes = {
  bps: PropTypes.number.isRequired
};

export default BPS;
