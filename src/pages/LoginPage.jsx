import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TrendingUp, Eye, EyeOff } from "lucide-react";
import api from "../api/axios";
import authBg from "../assets/auth-bg.jpg";

const fontStyle = { fontFamily: "'Inter', sans-serif" };

const inputStyle = {
  width: "100%",
  padding: "0.875rem 1rem",
  borderRadius: "0.625rem",
  border: "1.5px solid #e5e7eb",
  fontSize: "0.95rem",
  outline: "none",
  background: "#fafafa",
  boxSizing: "border-box",
  color: "#0f172a",
  transition: "all 0.2s",
  ...fontStyle,
};

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      setError("Невірний email або пароль. Спробуйте ще раз.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", ...fontStyle }}>

      {/* Ліва частина */}
      <div style={{
        width: "100%", maxWidth: "520px",
        display: "flex", flexDirection: "column",
        padding: "2.5rem 3rem", background: "#fff",
        boxSizing: "border-box",
      }}>

        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
          <TrendingUp style={{ width: "2rem", height: "2rem", color: "#22c55e" }} strokeWidth={2.5} />
          <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em" }}>LevelUp</span>
        </Link>

        <div style={{ width: "100%" }}>
          <div style={{ marginBottom: "2rem" }}>
            <h1 style={{ fontWeight: 800, color: "#0f172a", fontSize: "2rem", letterSpacing: "-0.03em", marginBottom: "0.4rem", textAlign: "center", marginTop: "3rem" }}>
                Login
            </h1>
            <p style={{ color: "#6b7280", fontSize: "0.9rem", textAlign: "center" }}>
                Введіть ваш email та пароль для входу.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "0.5rem" }}>
                Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Введіть ваш email"
                required
                style={inputStyle}
                onFocus={e => { e.target.style.borderColor = "#22c55e"; e.target.style.background = "#fff"; e.target.style.boxShadow = "0 0 0 3px rgba(34,197,94,0.1)"; }}
                onBlur={e => { e.target.style.borderColor = "#e5e7eb"; e.target.style.background = "#fafafa"; e.target.style.boxShadow = "none"; }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "0.5rem" }}>
                Пароль
              </label>
              <div style={{ position: "relative" }}>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Введіть ваш пароль"
                  required
                  style={{ ...inputStyle, paddingRight: "3rem" }}
                  onFocus={e => { e.target.style.borderColor = "#22c55e"; e.target.style.background = "#fff"; e.target.style.boxShadow = "0 0 0 3px rgba(34,197,94,0.1)"; }}
                  onBlur={e => { e.target.style.borderColor = "#e5e7eb"; e.target.style.background = "#fafafa"; e.target.style.boxShadow = "none"; }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#9ca3af", display: "flex", padding: 0 }}
                >
                  {showPassword ? <EyeOff style={{ width: "1.1rem", height: "1.1rem" }} /> : <Eye style={{ width: "1.1rem", height: "1.1rem" }} />}
                </button>
              </div>
            </div>

            {error && (
              <div style={{ color: "#ef4444", fontSize: "0.85rem", background: "#fef2f2", padding: "0.75rem 1rem", borderRadius: "0.5rem", border: "1px solid #fecaca" }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                padding: "0.9rem", borderRadius: "0.625rem",
                backgroundColor: loading ? "#86efac" : "#22c55e",
                color: "#fff", fontWeight: 700, fontSize: "1rem",
                border: "none", cursor: loading ? "not-allowed" : "pointer",
                marginTop: "0.25rem",
                boxShadow: "0 4px 15px rgba(34,197,94,0.35)",
                transition: "all 0.2s",
                ...fontStyle,
              }}
              onMouseEnter={e => { if (!loading) e.currentTarget.style.backgroundColor = "#16a34a"; }}
              onMouseLeave={e => { if (!loading) e.currentTarget.style.backgroundColor = "#22c55e"; }}
            >
              {loading ? "Вхід..." : "Увійти"}
            </button>
          </form>
        </div>

        <p style={{ fontSize: "0.875rem", color: "#6b7280", marginTop: "1.5rem", textAlign: "center" }}>
          Не маєте акаунту?{" "}
         <Link to="/register" style={{ color: "#22c55e", fontWeight: 700, textDecoration: "none" }}>
          Зареєструватись
        </Link>
        </p>
      </div>

      {/* Права частина — фото */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        <img
          src={authBg}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(34,197,94,0.1), rgba(0,0,0,0.2))",
        }} />
      </div>
    </div>
  );
}