import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import AuthLayout from '../../components/layout/AuthLayout';
import Input from '../../components/Inputs/Input';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Handle Login Form Submit
  const handleLogin = async (e) => {}
  return (
    <AuthLayout>
      <div className='heading-login'>
        <h2 className='h2-login'>Welcome</h2>
        <p className='p-login'>Please enter your details to log in</p>

       <div className="center-container">
        <form className="form-login" onSubmit={handleLogin}>
          <Input value={email} onChange={({target}) => setEmail(target.value)}
          label= "Email Address"
          placeholder= "Email Address"
          type="text"
          />

          <Input value={password} onChange={({target}) => setPassword(target.value)}
          label= "Password"
          placeholder= "Password"
          type="password"
          />

          {error && <p>{error}</p>}

          <button type='submit'>
            LOGIN
          </button>

          <p>
            Don't have an account?{""}
            <Link to="/signup">SignUp</Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Login
