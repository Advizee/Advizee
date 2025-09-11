import React, { useState } from "react";
import { createPortal } from "react-dom";
import Schedule from "../pages/Schedule";
import "../styles/actionsButtons.css";

interface ActionButtonsProps {
  className?: string; // allows passing hero-buttons / guidance-cta
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <button className="btn primary" onClick={() => setOpen(true)}>
        Schedule a Meeting
      </button>

      <a
        href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn whatsapp"
      >
        Chat on WhatsApp
      </a>

      {open &&
        createPortal(
          <Schedule onClose={() => setOpen(false)} />,
          document.body
        )}
    </div>
  );
};

export default ActionButtons;
