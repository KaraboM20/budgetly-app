import React from 'react';
impo

const CharAvatar = ({fullName}) => {
  return (
    <div>
      {getInitials(fullName || "")}
    </div>
  );
};

export default CharAvatar
