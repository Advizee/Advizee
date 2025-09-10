import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { Mail, Lock } from "lucide-react";
import login from "../assets/login image1.png"; // add your image here

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    navigate("/"); // redirect after login
  };

  return (
    <div className="auth-page">
      {/* Left Illustration */}
      <div className="auth-left">
        <img src={login} alt="Login Image" />
      </div>

      {/* Right Form */}
      <div className="auth-card-right">
        <h2 className="auth-title">Login to Advizee</h2>
        <form onSubmit={handleLogin} className="auth-form">
          <div className="auth-input-group">
            <Mail size={20} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="auth-input"
            />
          </div>
          <div className="auth-input-group">
            <Lock size={20} />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="auth-input"
            />
          </div>
          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>
        <p className="auth-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
