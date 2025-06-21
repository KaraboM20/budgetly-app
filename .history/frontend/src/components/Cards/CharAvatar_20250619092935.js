import React from 'react'

const CharAvatar = ({fullName, width,}) => {
  return (
    <div>
      {getInitials(fullName || "")}
    </div>
  )
}

export default CharAvatar
