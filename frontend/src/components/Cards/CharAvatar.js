import React from 'react';
import { getInitials } from '../../utils/helper';

const CharAvatar = ({fullName}) => {
  return (
    <div>
      {getInitials(fullName || "")}
    </div>
  );
};

export default CharAvatar
