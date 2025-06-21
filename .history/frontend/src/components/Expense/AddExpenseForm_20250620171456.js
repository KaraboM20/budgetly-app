import React from 'react';
import Input from '../Inputs/Input';
import EmojiPickerPopup from '../EmojiPickerPopup';

const AddExpenseForm = ({ onAddExpense }) => {
    const [income, setIncome] = useState({
        category: "",
        amount: "",
        date: "",
        icon: "",
    });

    const handleChange = (key, value) => setIncome({...income, [key]: value});

  return (
    <div>
      <EmojiPickerPopup
      icon={income.icon}
      onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
      />

      <Input
      value={income.category}
      onChange={({ target }) => handleChange("category", target.value)} 
      label="Category"
      placeholder="Rent, Groceries, etc"
      type=
    </div>
  )
}

export default AddExpenseForm
