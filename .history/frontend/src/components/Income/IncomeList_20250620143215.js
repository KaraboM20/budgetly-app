import React from 'react';
import { LuDownload } from 'react-icons/lu';

const IncomeList = ({transactions, onDelete, onDownload}) => {
  return (
    <div>
      <div>
        <h5>Income Sources</h5>

        <button onClick={onDownload}>
            <LuDownload />
        </button>
      </div>
    </div>
  )
}

export default IncomeList
