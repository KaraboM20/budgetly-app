import React from 'react'

const CharAvatar = ({fullName, width, height, style}) => {
  return (
    <div>
      {getInitials(fullName || "")}
    </div>
  )
}

export default CharAvatar
