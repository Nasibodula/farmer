import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { useLogin } from "../hooks/useLogin";
import { useAuthContext } from '../hooks/useAuthContext';
import { Link } from 'react-router-dom';
import './Login.css';
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, error: signupError, isLoading: isSignupLoading } = useSignup();
  const { login, error: loginError, isLoading: isLoginLoading } = useLogin();
  const { user } = useAuthContext();
  const [isSignupActive, setIsSignupActive] = useState(false); // State to track whether signup or login is active

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    await signup(name, email, password);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  const togglePanel = () => {
    setIsSignupActive((prevIsSignupActive) => !prevIsSignupActive);
  };

  return (
    <div className={`container ${isSignupActive ? 'active' : ''}`} id="container">
      <div className="form-container sign-up">
        
        <form className="signup" onSubmit={handleSignupSubmit}>
          <h3>Create Account</h3>
          <div className="social-icons">
            <a href="#" className="icon"><FaGooglePlusG /></a>
            <a href="#" className="icon"><FaFacebookF /></a>
            <a href="#" className="icon"><FaGithub /></a>
            <a href="#" className="icon"><FaLinkedinIn /></a>
          </div>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="User name"/>
          <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" />
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />

          <button disabled={isSignupLoading}>Sign up</button>
          {signupError && <div className="error">{signupError}</div>}
        </form>
      </div>
      <div className="form-container sign-in">
        <form className="login" onSubmit={handleLoginSubmit}>
          <h3>Log In</h3>
          <div className="social-icons">
            <a href="#" className="icon"><FaGooglePlusG /></a>
            <a href="#" className="icon"><FaFacebookF /></a>
            <a href="#" className="icon"><FaGithub /></a>
            <a href="#" className="icon"><FaLinkedinIn /></a>
          </div>
          <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" />
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />

          <button disabled={isLoginLoading}>Log in</button>
          {loginError && <div className="error">{loginError}</div>}
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className={`toggle-panel toggle-left ${isSignupActive ? '' : 'hidden'}`}>
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="hidden" id="login" onClick={togglePanel}>Sign In</button>
          </div>
          <div className={`toggle-panel toggle-right ${isSignupActive ? 'hidden' : ''}`}>
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all site features</p>
            <button className="hidden" id="register" onClick={togglePanel}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;