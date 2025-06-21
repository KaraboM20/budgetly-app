import React from 'react'

const CharAvatar = ({fullName}) => {
  return (
    <div>
      {getInitials(fullName )}
    </div>
  )
}

export default CharAvatar
