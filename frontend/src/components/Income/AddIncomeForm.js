import React, { useState } from 'react';
import Input from '../Inputs/Input';
import EmojiPickerPopup from '../EmojiPickerPopup';


const AddIncomeForm = ({ onAddIncome }) => {
  const [income, setIncome] = useState({
    source: '',
    amount: '',
    date: '',
    icon: '💰',
  });

  const handleChange = (key, value) => {
    setIncome((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('INCOME FORM SUBMIT:', {
      source: income.source,
      amount: Number(income.amount),
      date: income.date,
      icon: income.icon || '💰',
    });
    onAddIncome({
      source: income.source,
      amount: Number(income.amount),
      date: income.date,
      icon: income.icon || '💰',
    });
  };

  return (
    <form className="add-income-form" onSubmit={handleSubmit}>
      <EmojiPickerPopup
        icon={income.icon}
        onSelect={(selectedIcon) => handleChange('icon', selectedIcon)}
      />
      <Input
        value={income.source}
        onChange={({ target }) => handleChange('source', target.value)}
        label="Income Source"
        placeholder="Freelance, Salary, etc"
        type="text"
        required
      />
      <Input
        value={income.amount}
        onChange={({ target }) => handleChange('amount', target.value)}
        label="Amount"
        placeholder="0.00"
        type="number"
        min="0"
        step="0.01"
        required
      />
      <Input
        value={income.date}
        onChange={({ target }) => handleChange('date', target.value)}
        label="Date"
        placeholder=""
        type="date"
        required
      />
      <div className="form-actions">
        <button type="submit" className="button-primary submit-btn">
          Add Income
        </button>
      </div>
    </form>
  );
};

export default AddIncomeForm;