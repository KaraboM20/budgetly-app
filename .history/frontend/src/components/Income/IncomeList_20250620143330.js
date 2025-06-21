import React from 'react';
import { LuDownload } from 'react-icons/lu';

const IncomeList = ({transactions, onDelete, onDownload}) => {
  return (
    <div>
      <div>
        <h5>Income Sources</h5>

        <button onClick={onDownload}>
            <LuDownload />Download
        </button>
      </div>

      <div>
        {transactions?.map((income))}
      </div>
    </div>
  )
}

export default IncomeList
