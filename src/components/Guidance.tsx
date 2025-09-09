import cartImage from "../assets/test1.png";
import React from "react";
import "../styles/guidance.css";
import ActionButtons from "./ActionButtons";

const Guidance: React.FC = () => {
  return (
    <section className="guidance">
      <div className="guidance-left">
        <div className="guidance-card">
          <img
            src={cartImage}
            alt="Consultation"
            className="guidance-img"
          />
        </div>
      </div>

      <div className="guidance-right">
        <h2 className="guidance-title">Get Expert Guidance</h2>
        <p className="guidance-text">
          Our experts help you choose the best loan or credit card for your needs.  
          Schedule a meeting or chat with us instantly.
        </p>

        <ActionButtons className="guidance-buttons" /> {/* ✅ reused */}
      </div>
    </section>
  );
};

export default Guidance;
