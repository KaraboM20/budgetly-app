import React from 'react'

const Modal = ({children, isClose, onClose, title}) => {
  return (
    <div>
      <div>
        {/* Modal content */}
        <div>
            {/*Modal header*/}
            <h3>{title}</h3>

            <button></button>
        </div>
      </div>
    </div>
  )
}

export default Modal
