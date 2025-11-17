import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MenuSelection.css";

export default function MenuSelection() {
  const nav = useNavigate();

  const starchOptions = ["Rice", "Fufu", "Yam", "Plantain", "Banku"];
  const meatOptions = ["Chicken", "Beef", "Fish", "Goat", "Turkey"];

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
    nav("/timeselection");
  };

  return (
    <div className="menu-container">
      <div className="menu-card">

        <h2 className="menu-title">Select Your Meal</h2>
        <p className="menu-sub">Tap a starch and meat to build your order.</p>

        {/* STARCH SECTION */}
        <div className="menu-section">
          <h3 className="section-title">Choose a Starch</h3>
          <div className="card-grid">
            {starchOptions.map((item) => (
              <div
                key={item}
                className={`food-card ${
                  order.starch === item ? "selected" : ""
                }`}
                onClick={() => setOrder({ ...order, starch: item })}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* MEAT SECTION */}
        <div className="menu-section">
          <h3 className="section-title">Choose a Meat</h3>
          <div className="card-grid">
            {meatOptions.map((item) => (
              <div
                key={item}
                className={`food-card ${
                  order.meat === item ? "selected" : ""
                }`}
                onClick={() => setOrder({ ...order, meat: item })}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <button className="menu-btn" onClick={submit}>Continue</button>

      </div>
    </div>
  );
}
