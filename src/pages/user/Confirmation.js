import "./Confirmation.css";
import { useNavigate } from "react-router-dom";

export default function Confirmation() {
  const order = JSON.parse(localStorage.getItem("order"));
  const navigate = useNavigate();

  const handleReturnHome = () => {
    localStorage.removeItem("order"); // optional
    navigate("/");
  };

  return (
    <div className="confirm-container">
      <div className="confirm-card">

        <h2 className="confirm-title">Order Confirmed!</h2>
        <p className="confirm-message">
          Your meal has been successfully placed.
        </p>

        <div className="confirm-summary">
          <div className="summary-item">
            <span className="label">Starch:</span>
            <span className="value">{order?.starch}</span>
          </div>

          <div className="summary-item">
            <span className="label">Meat:</span>
            <span className="value">{order?.meat}</span>
          </div>

          <div className="summary-item">
            <span className="label">Pickup Time:</span>
            <span className="value">{order?.time}</span>
          </div>
        </div>

        <hr className="divider" />

        <p className="confirm-footer">
          Your order has been sent to the kitchen.  
          You will be notified when it’s ready.
        </p>

        <button className="time-btn" onClick={handleReturnHome}>
          Return to Home
        </button>

      </div>
    </div>
  );
}
