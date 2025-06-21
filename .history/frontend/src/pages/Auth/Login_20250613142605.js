import React, { useState } from 'react';
import {}
import './Login.css';
import AuthLayout from '../../components/layout/AuthLayout';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  return (
    <AuthLayout>
      <div className='heading-login'>
        <h3 className='h3-login'>Welcome Back</h3>
        <p className='p-login'>Please enter your details to log in</p>


      </div>
    </AuthLayout>
  )
}

export default Login
