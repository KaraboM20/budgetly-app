import React, { useState } from 'react'

const AddIncomeForm = ({onAddIncome}) => {
    const [income, setIncome] = useState({
        source: "",
        amount: "",
        date: "",
        icon: "",
    });

    const handleChange = (key, value) => setIncome({...income, [key]: value});

  return (
    <div>
      <Input
      value={income.source}
      onChange={({ target }) => handleChange("source", target.value)}
    </div>
  )
}

export default AddIncomeForm
