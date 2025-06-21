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
      label="Income Source"
      placeholder="Freelance, Salary, etc"
      text="text"
      />

      <Input
      value={income.amount}
      onChange={({ target }) => handleChange("amount", target.value)}
      labels="Amount"
      placeholder=""
      type="number"
      />

      <Input
      value={income.date}
      onChange={({ target }) => handleChange("date", target.value)}
      labels="Date"
      placeholder=""
      type="date"
      />

      <div>
        <button
        type="button"
        onC
      </div>

    </div>
  )
}

export default AddIncomeForm
