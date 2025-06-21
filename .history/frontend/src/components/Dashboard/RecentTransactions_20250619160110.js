import React from 'react'

const RecentTransactions = ({transactions, onSeeMore}) => {
  return (
    <div>
      <div>
        <h5>Recent Transactions</h5>

        <button onClick={onSeeMore}>
            See All </button>
      </div>
    </div>
  )
}

export default RecentTransactions
