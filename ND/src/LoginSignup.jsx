import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || (!isLogin && !confirmPassword)) {
      setError("All fields are required!");
      return;
    }
    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError("");
    alert(isLogin ? "Login Successful!" : "Signup Successful!");
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {!isLogin && (
            <div className="input-group">
              <label>Confirm Password</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
          )}
          <button type="submit" className="login-btn">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <br />
          <span onClick={() => setIsLogin(!isLogin)} className="toggle-link">
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
