import React from 'react';
import C

const CharAvatar = ({fullName}) => {
  return (
    <div>
      {getInitials(fullName || "")}
    </div>
  );
};

export default CharAvatar
