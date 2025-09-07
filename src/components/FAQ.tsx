import React from "react";
import "../styles/faq.css";

const FAQ: React.FC = () => {
  return (
    <section className="faq" data-aos="fade-up" data-aos-delay="800">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>How do I book a consultation?</h3>
        <p>Click on “Book a Free Consultation” and select a time slot.</p>
      </div>
      <div className="faq-item">
        <h3>Can I chat on WhatsApp?</h3>
        <p>Yes! Click on the WhatsApp button to start chatting with us.</p>
      </div>
      <div className="faq-item">
        <h3>Is the service free?</h3>
        <p>We offer a free consultation; further services may have fees.</p>
      </div>
    </section>
  );
};

export default FAQ;
