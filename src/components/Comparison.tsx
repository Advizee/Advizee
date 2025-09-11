import React, { useState, useEffect } from "react";
import "../styles/comparison.css";
import {
  X,
  UserCheck,
  Ban,
  ShieldCheck,
  PhoneCall,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { createPortal } from "react-dom";
import Schedule from "../pages/Schedule"; // ✅ import your popup

const Comparison: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [openSchedule, setOpenSchedule] = useState(false);

  // 🔒 Lock/unlock scroll when modal is open
  useEffect(() => {
    if (open || openSchedule) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open, openSchedule]);

  const features = [
    {
      number: "01",
      title: "Trusted Experts",
      text: "Get unbiased guidance from real financial experts, not bots.",
      points: ["Certified professionals", "Personalized advice", "No hidden agenda"],
      badge: "Top Rated",
      icon: <UserCheck className="card-icon" />,
    },
    {
      number: "02",
      title: "Zero Spam",
      text: "Your privacy matters — no cold calls, no spam, only genuine help.",
      points: ["No data sharing", "100% secure", "You stay in control"],
      badge: "Privacy First",
      icon: <Ban className="card-icon" />,
    },
    {
      number: "03",
      title: "End-to-End Support",
      text: "We assist you throughout your loan journey, from application to approval.",
      points: ["Application tracking", "Step-by-step guidance", "Dedicated support"],
      badge: "Full Journey",
      icon: <ShieldCheck className="card-icon" />,
    },
    {
      number: "04",
      title: "One-on-One Consultation",
      text: "Talk to real advisors for personalized recommendations.",
      points: ["Live consultation", "Flexible timings", "Expert-backed solutions"],
      badge: "Premium",
      icon: <PhoneCall className="card-icon" />,
    },
  ];

  const comparisonTable = [
    { feature: "Processing Fee Waiver", advizee: true, others: false },
    { feature: "Unbiased Recommendations", advizee: true, others: false },
    { feature: "Consultation", advizee: true, others: false },
    { feature: "Spam Policy", advizee: true, others: false },
    { feature: "Application Support", advizee: true, others: false },
  ];

  const handleGetStarted = () => {
    setOpen(false);        // close comparison modal
    setOpenSchedule(true); // open schedule popup
  };

  return (
    <section className="comparison">
      <h2 className="comparison-title">Why Choose Advizee</h2>

      {/* Feature Cards */}
      <div className="card-grid">
        {features.map((card, i) => (
          <div key={i} className="card" data-badge={card.badge}>
            <span className="card-number">{card.number}</span>
            {card.icon}
            <h3 className="card-title">{card.title}</h3>
            <p className="card-text">{card.text}</p>
            <ul className="card-list">
              {card.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Compare Button */}
      <div className="compare-section">
        <button className="compare-btn" onClick={() => setOpen(true)}>
          🚀 Compare Platforms
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
            <h3 className="modal-title">Advizee vs Other Platforms</h3>

            <div className="comparison-details">
              <div className="row header">
                <div className="col feature">Feature</div>
                <div className="col advizee">Advizee</div>
                <div className="col others">Others</div>
              </div>

              {comparisonTable.map((row, i) => (
                <div
                  key={i}
                  className="row animate-row"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="col feature">{row.feature}</div>
                  <div className="col advizee">
                    {row.advizee ? (
                      <CheckCircle2 className="icon success" />
                    ) : (
                      <XCircle className="icon fail" />
                    )}
                  </div>
                  <div className="col others">
                    {row.others ? (
                      <CheckCircle2 className="icon success" />
                    ) : (
                      <XCircle className="icon fail" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="cta-box">
              <h4>Ready to choose smarter?</h4>
              <button className="cta-btn" onClick={handleGetStarted}>
                Get Started with Advizee
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Popup via Portal */}
      {openSchedule &&
        createPortal(
          <Schedule onClose={() => setOpenSchedule(false)} />,
          document.body
        )}
    </section>
  );
};

export default Comparison;
