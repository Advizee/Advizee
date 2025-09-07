import React from "react";
import { Link } from "react-router-dom";

interface ActionButtonsProps {
  className?: string; // allow passing hero-buttons / guidance-buttons
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ className }) => {
  return (
    <div className={className}>
      <Link to="/schedule">
        <button className="btn primary">Schedule a Meeting</button>
      </Link>

      <a
        href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn whatsapp"
      >
        Chat on WhatsApp
      </a>
    </div>
  );
};

export default ActionButtons;
