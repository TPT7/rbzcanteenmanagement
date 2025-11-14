import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./KitchenLogin.css";

export default function KitchenLogin() {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = (e) => {
    e.preventDefault();
    login("kitchen", form); // you can handle email/password in context if needed
  };

  return (
    <div className="kitchen-login-container">
      <div className="kitchen-login-card">
        <h2 className="kitchen-login-title">Kitchen Login</h2>
        <p className="kitchen-login-sub">Enter your credentials to access the kitchen dashboard.</p>
        
        <form onSubmit={submit}>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="kitchen-login-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            className="kitchen-login-input"
            required
          />
          <button type="submit" className="kitchen-login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}
