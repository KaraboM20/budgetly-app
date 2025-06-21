import React from 'react'

const Input = ({value, onChange, placeholder, label, type}) => {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
  return (
    <div>
      <label>{label}</label>
      
    </div>
  )
}

export default Input
