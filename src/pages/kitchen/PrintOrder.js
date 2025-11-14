import "./PrintOrder.css";

export default function PrintOrder() {
  const order = JSON.parse(localStorage.getItem("order"));

  const doPrint = () => {
    window.print();
  };

  return (
    <div className="print-container">
      <div className="print-card">

        <h2 className="print-title">Print Order</h2>

        <div className="print-details">
          <p><span className="label">Starch:</span> {order.starch}</p>
          <p><span className="label">Meat:</span> {order.meat}</p>
          <p><span className="label">Pickup Time:</span> {order.time}</p>
        </div>

        <button className="print-btn" onClick={doPrint}>Print Now</button>
      </div>
    </div>
  );
}
