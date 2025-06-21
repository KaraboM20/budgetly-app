import React, {useState} from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import



const Input = ({value, onChange, placeholder, label, type, className}) => {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
  return (
    <div>
      <label>{label}</label>

      <div>
        <input
        type={type == 'password' ? showPassword ? 'text' : 'password' : type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        />

        {type === "password" && (
            <>
            {showPassword ? (
              <FaEye size={22}  onClick = {() => toggleShowPassword()}
              />
            ) : (
                <FaEyeSlash size={22} onClick={() => toggleShowPassword()}
                />
            )}
            </>
        )}
      </div>
    </div>
  )
}

export default Input
