import React, { useState } from "react";
import "../styles/schedule.css";
import { Calendar, Clock, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Schedule: React.FC = () => {
  const [platform, setPlatform] = useState<string | null>(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!platform || !date || !time) {
      alert("⚠️ Please select a platform, date, and time.");
      return;
    }

    // Normally: send booking to backend here.
    // For now → redirect based on platform.
    if (platform === "Google Meet") {
      window.open("https://meet.google.com/", "_blank");
    } else if (platform === "Zoom") {
      window.open("https://zoom.us/", "_blank");
    } else if (platform === "Outlook") {
      window.open("https://outlook.live.com/calendar/", "_blank");
    }

    // Optional: Redirect user back to home after confirmation
    navigate("/");
  };

  return (
    <section className="schedule">
      <h1 className="schedule-title">Schedule a Meeting</h1>
      <p className="schedule-subtitle">Choose your platform and time</p>

      {/* Platforms */}
      <div className="schedule-options">
        <button
          type="button"
          className={`schedule-card google ${
            platform === "Google Meet" ? "active" : ""
          }`}
          onClick={() => setPlatform("Google Meet")}
        >
          <Video size={28} /> Google Meet
        </button>

        <button
          type="button"
          className={`schedule-card zoom ${
            platform === "Zoom" ? "active" : ""
          }`}
          onClick={() => setPlatform("Zoom")}
        >
          <Video size={28} /> Zoom
        </button>

        <button
          type="button"
          className={`schedule-card outlook ${
            platform === "Outlook" ? "active" : ""
          }`}
          onClick={() => setPlatform("Outlook")}
        >
          <Video size={28} /> Outlook
        </button>
      </div>

      {/* Form */}
      <form className="schedule-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">
            <Calendar size={20} /> Select Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">
            <Clock size={20} /> Select Time
          </label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <button type="submit" className="btn confirm-btn">
          Confirm Booking
        </button>
      </form>
    </section>
  );
};

export default Schedule;
