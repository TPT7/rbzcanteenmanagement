import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./KitchenDashboard.css";

export default function KitchenDashboard() {
  const [orders, setOrders] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    // Fetch all customer orders from localStorage
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div className="kitchen-container">
      <div className="kitchen-card">
        <h2 className="kitchen-title">Kitchen – Incoming Orders</h2>

        {orders.length === 0 ? (
          <p className="kitchen-empty">No orders yet.</p>
        ) : (
          orders.map((o, index) => (
            <div className="order-card" key={index}>
              <p>
                <span className="label">Starch:</span> {o.starch}
              </p>
              <p>
                <span className="label">Meat:</span> {o.meat}
              </p>
              <p>
                <span className="label">Pickup Time:</span> {o.time}
              </p>
              <p>
                <span className="label">Status:</span> {o.status || "Incoming"}
              </p>

              <button className="print-btn" onClick={() => nav("/printorder")}>
                Print
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
