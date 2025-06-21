import React from 'react';
import {}

const CharAvatar = ({fullName}) => {
  return (
    <div>
      {getInitials(fullName || "")}
    </div>
  );
};

export default CharAvatar
