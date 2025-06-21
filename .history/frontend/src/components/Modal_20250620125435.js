import React from 'react'

const Modal = ({children, isClose, onClose, title}) => {

    if(!isClose)
  return (
    <div>
      <div>
        {/* Modal content */}
        <div>
            {/*Modal header*/}
            <h3>{title}</h3>

            <button
            type="button"
            className=''
            onClick={onClose}>
                X
            </button>
        </div>

        <div>{children}</div>
      </div>
    </div>
  )
}

export default Modal
