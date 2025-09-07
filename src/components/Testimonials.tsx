import React from "react";
import "../styles/testimonials.css";
import testimonial1 from "../assets/test1.png";

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials" data-aos="fade-up" data-aos-delay="600">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <img src={testimonial1} alt="Client" />
          <p>★★★★★</p>
          <p>"Great experience with Advizee!"</p>
        </div>
        <div className="testimonial-card">
          <img src={testimonial1} alt="Client" />
          <p>★★★★★</p>
          <p>"Helped me find the best loan option!"</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
