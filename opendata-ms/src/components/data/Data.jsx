import React from 'react';
const Data = ({ match }) => {
  return (
    <div>
      <h2>data: {match.params.id}</h2>
    </div>
  );
};

export default Data;
