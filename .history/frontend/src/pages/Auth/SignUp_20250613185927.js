import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/layout/AuthLayout';
import Input from '../../components/Inputs/Input';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import './SignUp.css';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';

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
          value={fullName}
          onChange= {({ target }) => setFullNname(target.value)}
          label= "Full Name"
          placeholder="Karabo"
          type="text"
          />

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

          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
        </div>

        {error && <p>{error}</p>}
        
          <button type='submit' className="login-button">
                    SIGN UP
          </button>
        
            <p>
                    A have account?{""}
                    <Link to="/signup">SignUp</Link>
            </p>
      </form>
     </div>
    </AuthLayout>
  )
}

export default SignUp
