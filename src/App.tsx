import React from "react";
import Schedule from "./pages/Schedule";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Loans from "./pages/Loans";
import CreditCard from "./pages/Creditcard.tsx";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx"; 
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule onClose={() => { /* handle close */ }} />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/credit-card" element={<CreditCard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
