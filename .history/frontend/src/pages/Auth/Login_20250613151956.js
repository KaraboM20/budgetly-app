import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import AuthLayout from '../../components/layout/AuthLayout';
import Input from '../../components/Inputs/Input';

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
        <h3 className='h3-login'>Welcome Back</h3>
        <p className='p-login'>Please enter your details to log in</p>


        <form onSubmit={handleLogin}>
          <Input value={pass} onChange={({target}) => setEmail(target.value)}
          label= "Email Address"
          placeholder= "Email Address"
          type="text"
          />
        </form>
      </div>
    </AuthLayout>
  )
}

export default Login
