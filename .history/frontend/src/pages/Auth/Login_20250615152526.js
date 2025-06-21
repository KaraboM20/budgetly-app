import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import AuthLayout from '../../components/layout/AuthLayout';
import Input from '../../components/Inputs/Input';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import axiosInstance from '../../utils/axiosInstance';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Handle Login Form Submit
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError ("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");

    //LOGIN API Call
    try {
      const response = await axiosInstance.post(API_PATHS, Auth.LOGIN, {
        email,
        password,
      });
      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        navigate("/dashboard");
      }
    } catch (error) {
    if (error.response)
    }
  }
  return (
    <AuthLayout>
      <div className='heading-login'>
        <h2 className='h2-login'>Welcome</h2>
        <p className='p-login'>Please enter your details to log in</p>

       <div className="center-container">
        <form className="form-login" onSubmit={handleLogin}>
          <Input className="input-field" value={email} onChange={({target}) => setEmail(target.value)}
          label= "Email Address"
          placeholder= "Email Address"
          type="text"
          />

          <Input className="input-field" value={password} onChange={({target}) => setPassword(target.value)}
          label= "Password"
          placeholder= "Password"
          type="password"
          />

          {error && <p>{error}</p>}

          <button type='submit' className="login-button">
            LOGIN
          </button>

          <p>
            Don't have an account?{""}
            <Link to="/signup">SignUp</Link>
          </p>
        </form>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Login
