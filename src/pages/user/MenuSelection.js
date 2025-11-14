import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MenuSelection.css";

export default function MenuSelection() {
  const nav = useNavigate();

  const [order, setOrder] = useState({
    starch: "",
    meat: ""
  });

  const submit = () => {
    if (!order.starch || !order.meat) {
      alert("Please select both a starch and a meat.");
      return;
    }

    localStorage.setItem("order", JSON.stringify(order));
    nav("/time-selection");
  };

  return (
    <div className="menu-container">
      <div className="menu-card">

        <h2 className="menu-title">Select Your Meal</h2>
        <p className="menu-sub">Choose your preferred starch and meat combination.</p>

        <div className="menu-section">
          <label>Starch</label>
          <select
            className="menu-select"
            onChange={(e) => setOrder({ ...order, starch: e.target.value })}
          >
            <option value="">Select…</option>
            <option>Rice</option>
            <option>Fufu</option>
            <option>Yam</option>
          </select>
        </div>

        <div className="menu-section">
          <label>Meat</label>
          <select
            className="menu-select"
            onChange={(e) => setOrder({ ...order, meat: e.target.value })}
          >
            <option value="">Select…</option>
            <option>Chicken</option>
            <option>Beef</option>
            <option>Fish</option>
          </select>
        </div>

        <button className="menu-btn" onClick={submit}>
          Continue
        </button>

      </div>
    </div>
  );
}
