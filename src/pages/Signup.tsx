import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { Mail, Lock, Phone, User } from "lucide-react";
import signup from "../assets/signup.png";

const Signup: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, phone, password });
    navigate("/login"); // redirect after signup
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <img src={signup} alt="Signup Image" />
      </div>

      <div className="auth-card-right">
        <h2 className="auth-title">Create Your Advizee Account</h2>
        <form onSubmit={handleSignup} className="auth-form">
          <div className="auth-input-group">
            <User size={20} />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              required
              className="auth-input"
            />
          </div>
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
            <Phone size={20} />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
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
            Sign Up
          </button>
        </form>
        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
