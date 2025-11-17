import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./TimeSelection.css";

export default function TimeSelection() {
  const nav = useNavigate();
  const [time, setTime] = useState("");

  const submit = () => {
    if (!time) {
      alert("Please select a pickup time.");
      return;
    }

    const order = JSON.parse(localStorage.getItem("order"));
    order.time = time;
    localStorage.setItem("order", JSON.stringify(order));
    nav("/userconfirmation");
  };

  return (
    <div className="time-container">
      <div className="time-card">
        
        <h2 className="time-title">Select Pickup Time</h2>
        <p className="time-sub">Choose when you would like to collect your meal.</p>

        <div className="time-input-wrapper">
          <label>Pickup Time</label>
          <input 
            type="time" 
            className="time-input" 
            onChange={(e) => setTime(e.target.value)} 
          />
        </div>

        <button className="time-btn" onClick={submit}>
          Confirm Order
        </button>

      </div>
    </div>
  );
}
