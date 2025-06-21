import React from 'react'

const DeleteAlert = ({content, onDelete}) => {
  return (
    <div>
      <p>{content}</p>

     <div>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </div> 
    </div>
  );
};

export default DeleteAlert
