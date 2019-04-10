import React from 'react';
const User = ({ match }) => {
  return (
    <div>
      <h2>user: {match.params.userName}</h2>
    </div>
  );
};

export default User;
