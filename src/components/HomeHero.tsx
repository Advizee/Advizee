import React from "react";
import "../styles/homeHero.css";

import member1 from "../assets/test1.png";
import member2 from "../assets/test2.jpeg";
import member3 from "../assets/test3.jpeg";
import ActionButtons from "./ActionButtons";

const HomeHero: React.FC = () => {
  const members = [
    { src: member1, alt: "Member 1" },
    { src: member2, alt: "Member 2" },
    { src: member3, alt: "Member 3" },
  ];

  return (
    <section className="home-hero">
      <div className="hero-left">
        <h1 className="hero-title">
          Your Financial Solutions, Simplified
        </h1>
        <p className="hero-subtitle">
          Advizee helps you get unbiased loans & credit recommendations.
        </p>

        <ActionButtons className="hero-buttons" /> {/* ✅ reused */}
      </div>

      <div className="hero-right">
        <div className="hero-images">
          {members.map((member, index) => (
            <img
              key={index}
              src={member.src}
              alt={member.alt}
              className={`float-img img${index + 1}`}
              style={{ animationDelay: `${index * 0.5}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
