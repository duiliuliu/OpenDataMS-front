import React from 'react';
const Function = ({ match }) => {
  return (
    <div>
      <h2>function: {match.params.functionName}</h2>
    </div>
  );
};

export default Function;
