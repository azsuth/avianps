import React from 'react';
import PropTypes from 'prop-types';

import 'app/styles/BPS.scss';

const BPS = ({ bps, condensed = true }) => {
  const label = condensed ? 'BPS:' : 'Bird Promoter Score:';

  return (
    <span className="BPS">
      <span className="BPS__label">{label}</span>
      <span className="BPS__value">{bps}</span>
    </span>
  );
};

BPS.propTypes = {
  bps: PropTypes.number.isRequired,
  condensed: PropTypes.bool
};

export default BPS;
