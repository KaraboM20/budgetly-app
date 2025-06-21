import React, { useContext, useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/layout/AuthLayout';
import Input from '../../components/Inputs/Input';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import './SignUp.css';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';
import axiosInstance from '../../utils/axiosInstance';
import { UserContext } from '../../context/userContext';

const SignUp = () => {
 const [profilePic, setProfilePic] = useState(null);
 const [fullName, setFullNname] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

 const [error, setError] = useState(null);

 const { updateUser } = useContext(UserContext)
 const navigate = useNavigate();

 const handleSignup = async (e) => {
  e.preventDefault();

  let profileImageUrl = "";

  if (!fullName) {
    setError("Please enter your name");
    return;
  }

  if (!validateEmail(email)) {
    setError("Please enter a valid email address.");
    return;
  }

  if (!password) {
    setError("Please enter the password");
    return
  }

  setError("");

  // SignUp API Call
  try {

    // Upload image if present
    if (profilePic) {
      
    }
    const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
      fullName,
      email,
      password,
    });

    const { token, user } = response.data;

    if (token) {
      localStorage.setItem("token", token);
      updateUser(user);
      navigate("/dashboard");
    }
  } catch (error) {
    if (error.response && error.response.data.message) {
      setError(error.response.data.message);
    } else {
      setError("Something went wrong. Please try again.");
    }
  }
 };

  return (
    <AuthLayout>
     <div className="signup-container">
      <h3>Create an Account</h3>
      <p>Join Budgetly by entering your details below</p>

      <form onSubmit={handleSignup}  className="signup-form">
        <div>
          <Input
          value={fullName}
          onChange= {({ target }) => setFullNname(target.value)}
          label= "Full Name"
          placeholder="Full Name"
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
        
          <button type='submit' className="login-button" >
            SIGN UP
          </button>
        
            <p className="signup-link">
              Already have an account?{""}
              <Link to="/login">Login</Link>
            </p>
      </form>
     </div>
    </AuthLayout>
  )
}

export default SignUp
