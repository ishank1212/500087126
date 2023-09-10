import React from 'react';

const AllTrains = (props) => {
  return (
    <div>
      <ul>
        {props.trains.map((train) => (
          <li key={train.id}>{train.trainName}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllTrains;
