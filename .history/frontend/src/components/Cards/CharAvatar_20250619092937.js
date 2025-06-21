import React from 'react'

const CharAvatar = ({fullName, width, height}) => {
  return (
    <div>
      {getInitials(fullName || "")}
    </div>
  )
}

export default CharAvatar
