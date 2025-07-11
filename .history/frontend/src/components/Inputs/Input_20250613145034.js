import React from 'react'
import { FaRegEye, FaRegEyeSlash} from 'react-icons';

const Input = ({value, onChange, placeholder, label, type}) => {
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
              <FaRegEye size={22}  onClick = {() => toggleShowPassword()}
              />
            ) : (
                <FaRegEyeSlash size={22} onClick=
            )}
            </>
        )}
      </div>
    </div>
  )
}

export default Input
