import React, { useEffect, useState } from "react";
import "../styles/guidance.css";
import cartImage from "../assets/test1.png";
import ActionButtons from "./ActionButtons";

const Guidance: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 5000;
    const duration = 2000;
    const increment = Math.ceil(end / (duration / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else setCount(start);
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="guidance">
      <div className="guidance-left">
        <div className="guidance-card">
          <img src={cartImage} alt="Consultation" className="guidance-img" />
        </div>
      </div>

      <div className="guidance-right">
        <h2 className="guidance-title">Get Expert Guidance</h2>
        <p className="guidance-text">
          Our experts help you choose the best loan or credit card for your needs. Schedule a meeting or chat instantly.
        </p>

        <div className="guidance-counter">
          Trusted by <span>{Math.floor(count / 1000)}k+</span> happy users 🚀
        </div>

        <ActionButtons className="guidance-cta" />
      </div>
    </section>
  );
};

export default Guidance;
