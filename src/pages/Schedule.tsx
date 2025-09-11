import React, { useState } from "react";
import "../styles/schedule.css";
import { Calendar, Clock, Video, X } from "lucide-react";

interface ScheduleProps {
  onClose: () => void;
}

const Schedule: React.FC<ScheduleProps> = ({ onClose }) => {
  const [platform, setPlatform] = useState<string | null>(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!platform || !date || !time) {
      alert("⚠️ Please select a platform, date, and time.");
      return;
    }
    setConfirmed(true);
  };

  const meetingLink =
    platform === "Google Meet"
      ? "https://meet.google.com/xyz-123"
      : "https://outlook.live.com/calendar/";

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-btn" onClick={onClose}>
          <X size={22} />
        </button>

        {!confirmed ? (
          <>
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
                <Video size={24} /> Google Meet
              </button>

              <button
                type="button"
                className={`schedule-card outlook ${
                  platform === "Outlook" ? "active" : ""
                }`}
                onClick={() => setPlatform("Outlook")}
              >
                <Video size={24} /> Outlook
              </button>
            </div>

            {/* Form */}
            <form className="schedule-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="date">
                  <Calendar size={18} /> Select Date
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
                  <Clock size={18} /> Select Time
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
          </>
        ) : (
          <div className="confirmation-box">
            <h2>✅ Your Meeting is Scheduled!</h2>
            <p>
              <strong>Platform:</strong> {platform}
            </p>
            <p>
              <strong>Date:</strong> {date}
            </p>
            <p>
              <strong>Time:</strong> {time}
            </p>
            <p>
              <strong>Meeting Link:</strong>{" "}
              <a
                href={meetingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="meeting-link"
              >
                {meetingLink}
              </a>
            </p>

            <button className="btn primary" onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;
