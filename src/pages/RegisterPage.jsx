import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TrendingUp, Eye, EyeOff } from "lucide-react";
import api from "../api/axios";
import authBg from "../assets/auth-bg.jpg";

const fontStyle = { fontFamily: "'Inter', sans-serif" };

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
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
      await api.post("/auth/register", form);
      const loginRes = await api.post("/auth/login", {
        email: form.email,
        password: form.password,
      });
      localStorage.setItem("token", loginRes.data.token);
      navigate("/");
    } catch (err) {
      setError(err.response?.data || "Помилка реєстрації. Спробуй ще раз.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", ...fontStyle }}>
      {/* Ліва частина — форма */}
      <div style={{
        width: "100%", maxWidth: "520px", padding: "3rem 4rem",
        display: "flex", flexDirection: "column", background: "#fff",
      }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", marginBottom: "3rem" }}>
          <TrendingUp style={{ width: "1.75rem", height: "1.75rem", color: "#22c55e" }} strokeWidth={2.5} />
          <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0f172a", letterSpacing: "-0.02em" }}>LevelUp</span>
        </Link>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{ fontWeight: 800, color: "#0f172a", fontSize: "1.75rem", letterSpacing: "-0.03em", marginBottom: "0.4rem", textAlign: "center" }}>
            Створити акаунт
        </h1>
        <p style={{ color: "#6b7280", fontSize: "0.9rem", marginBottom: "2rem", textAlign: "center" }}>
            Будь ласка, заповніть дані для реєстрації
        </p>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "0.5rem" }}>
                Ім'я
              </label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Твоє ім'я"
                required
                style={{
                  width: "100%", padding: "0.75rem 1rem",
                  borderRadius: "0.5rem", border: "1.5px solid #e5e7eb",
                  fontSize: "0.95rem", outline: "none",
                  background: "#fff", boxSizing: "border-box", ...fontStyle,
                  transition: "border-color 0.2s",
                }}
                onFocus={e => e.target.style.borderColor = "#22c55e"}
                onBlur={e => e.target.style.borderColor = "#e5e7eb"}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "0.5rem" }}>
                Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                style={{
                  width: "100%", padding: "0.75rem 1rem",
                  borderRadius: "0.5rem", border: "1.5px solid #e5e7eb",
                  fontSize: "0.95rem", outline: "none",
                  background: "#fff", boxSizing: "border-box", ...fontStyle,
                }}
                onFocus={e => e.target.style.borderColor = "#22c55e"}
                onBlur={e => e.target.style.borderColor = "#e5e7eb"}
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
                  placeholder="Мінімум 8 символів"
                  required
                  style={{
                    width: "100%", padding: "0.75rem 3rem 0.75rem 1rem",
                    borderRadius: "0.5rem", border: "1.5px solid #e5e7eb",
                    fontSize: "0.95rem", outline: "none",
                    background: "#fff", boxSizing: "border-box", ...fontStyle,
                  }}
                  onFocus={e => e.target.style.borderColor = "#22c55e"}
                  onBlur={e => e.target.style.borderColor = "#e5e7eb"}
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
              <p style={{ color: "#ef4444", fontSize: "0.85rem", background: "#fef2f2", padding: "0.75rem 1rem", borderRadius: "0.5rem", border: "1px solid #fecaca", margin: 0 }}>
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                padding: "0.85rem", borderRadius: "0.5rem",
                backgroundColor: loading ? "#86efac" : "#22c55e",
                color: "#fff", fontWeight: 700, fontSize: "1rem",
                border: "none", cursor: loading ? "not-allowed" : "pointer",
                marginTop: "0.25rem", ...fontStyle,
              }}
            >
              {loading ? "Реєстрація..." : "Зареєструватись"}
            </button>
          </form>

          <p style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.9rem", color: "#6b7280" }}>
            Вже маєш акаунт?{" "}
            <Link to="/login" style={{ color: "#22c55e", fontWeight: 600, textDecoration: "none" }}>
              Увійти
            </Link>
          </p>
        </div>
      </div>

      {/* Права частина — фото */}
      <div style={{
        flex: 1, position: "relative", overflow: "hidden",
        display: "flex",
      }}>
        <img
          src={authBg}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(255,255,255,0.1), transparent)",
        }} />
      </div>
    </div>
  );
}