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
      value={}
    </div>
  )
}

export default AddExpenseForm
