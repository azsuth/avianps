import React from 'react';
import PropTypes from 'prop-types';

import BirdRow from 'app/components/BirdList/BirdRow';

import 'app/styles/BirdList.scss';

const BirdList = ({
  birds,
  onClickDetails,
  onClickRate,
  sortByChanged,
  sortBy,
  sortTypes
}) => {
  const renderSortButtons = () => {
    return sortTypes.map(sortType => (
      <button
        key={sortType.key}
        className={
          'BirdListSort__button btn' +
          (sortBy === sortType.key ? ' btn--selected' : '')
        }
        onClick={() => sortByChanged(sortType.key)}
      >
        {sortType.value}
      </button>
    ));
  };

  return (
    <div className="BirdList">
      <h1>Birds of New Zealand</h1>

      <div className="BirdListSort">
        <span className="BirdListSort__label">Sort By:</span>
        <div className="BirdListSort__buttons">{renderSortButtons()}</div>
      </div>

      {birds.map(bird => (
        <div className="BirdList__row" key={bird.id}>
          <BirdRow
            bird={bird}
            onClickDetails={onClickDetails}
            onClickRate={onClickRate}
          />
        </div>
      ))}
    </div>
  );
};

BirdList.propTypes = {
  birds: PropTypes.array.isRequired,
  onClickDetails: PropTypes.func.isRequired,
  onClickRate: PropTypes.func.isRequired,
  sortByChanged: PropTypes.func.isRequired,
  sortBy: PropTypes.string,
  sortTypes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default BirdList;
