import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

export default function Login() {
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
    domain: "",
    cellphone: "",
  });

  const submit = (e) => {
    e.preventDefault();

    // Here you would add validation + API call
    if (form.domain === "kitchen") {
      login("kitchen");
    } else {
      login("user");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>User Login</h2>

        <p className="login-sub">Log in to continue to your canteen dashboard.</p>

        <form onSubmit={submit} className="login-form">

          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <select
            value={form.domain}
            onChange={(e) => setForm({ ...form, domain: e.target.value })}
            required
          >
            <option value="">Select Domain</option>
            <option value="user">User</option>
            <option value="kitchen">Kitchen</option>
          </select>

          <input
            type="tel"
            placeholder="Cellphone Number"
            value={form.cellphone}
            onChange={(e) => setForm({ ...form, cellphone: e.target.value })}
            required
          />

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="login-footer">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
}
