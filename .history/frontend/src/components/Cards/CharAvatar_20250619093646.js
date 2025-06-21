import React from 'react';
import {get}

const CharAvatar = ({fullName}) => {
  return (
    <div>
      {getInitials(fullName || "")}
    </div>
  );
};

export default CharAvatar
