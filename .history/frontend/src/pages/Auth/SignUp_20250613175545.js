import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/layout/AuthLayout';
import Input from '../../components/Inputs/Input';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import './SignUp.css';


const SignUp = () => {
 const [profilePic, setProfilePic] = useState(null);
 const [fullName, setFullNname] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

 const [error, setError] = useState(null);
 const navigate = useNavigate();

 const handleSignup = async (e) => {}

  return (
    <AuthLayout>
     <div>
      <h3>Create an Account</h3>
      <p>Join Budgetly by entering your details below</p>

      <form onSubmit={handleSignup}>
        <div>
          <Input
          value={full}
        </div>
      </form>
     </div>
    </AuthLayout>
  )
}

export default SignUp
