import React, { useState, useEffect } from "react";
import "../styles/comparison.css";
import { X } from "lucide-react";

const Comparison: React.FC = () => {
  const [open, setOpen] = useState(false);

  // 🔒 Lock/unlock scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const features = [
    { feature: "Processing Fee Waiver", advizee: "✅ Available on select loans via tie-ups", others: "❌ Usually not offered" },
    { feature: "Unbiased Recommendations", advizee: "✅ Based on your needs", others: "❌ Driven by commissions" },
    { feature: "Consultation", advizee: "✅ Real experts, 1-on-1", others: "❌ Bots or FAQs" },
    { feature: "Spam Policy", advizee: "✅ Zero spam / cold calls", others: "❌ Frequent follow-ups" },
    { feature: "Application Support", advizee: "✅ Full journey assistance", others: "❌ Limited / DIY" },
  ];

  return (
    <section className="comparison">
      <h2 className="comparison-title">Why Choose Advizee</h2>

      {/* ... feature cards here ... */}

      <div className="compare-section">
        <button className="compare-btn" onClick={() => setOpen(true)}>
          Compare Policies
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
            <h3 className="modal-title">Advizee vs Other Platforms</h3>

            <div className="comparison-details">
              <div className="row header">
                <div className="col feature">Feature</div>
                <div className="col advizee">Advizee</div>
                <div className="col others">Other Platforms</div>
              </div>

              {features.map((row, i) => (
                <div key={i} className="row">
                  <div className="col feature">{row.feature}</div>
                  <div className="col advizee">{row.advizee}</div>
                  <div className="col others">{row.others}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Comparison;
