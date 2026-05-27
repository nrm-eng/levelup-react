import { useState } from "react";
import {
  BookOpen, Brain,
  CheckCircle2, ArrowRight, Star, Quote,
  ClipboardList, LogIn, GraduationCap, User
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import heroBg from "../assets/hero-bg.jpg";


const fontStyle = { fontFamily: "'Inter', sans-serif" };

function isLoggedIn() {
  return !!localStorage.getItem("token");
}

export default function HomePage() {
  return (
    <div style={fontStyle}>
      <Hero />
      <HowItWorks />
      <ExerciseTypes />
      <Reviews />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Hero() {
  const navigate = useNavigate();

  function handlePlacementTest() {
    if (isLoggedIn()) {
      navigate("/placement-test");
    } else {
      navigate("/login");
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col" style={{ background: "#0a0f0d" }}>
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none select-none"
        style={{ opacity: 0.65 }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to right, rgba(10,15,13,0.92), rgba(10,15,13,0.5), transparent)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.3), transparent, rgba(10,15,13,0.8))" }} />

      <nav className="relative z-20 w-full px-8 h-20 flex items-center justify-between">
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
          <BookOpen style={{ width: "2rem", height: "2rem", color: "#fff" }} strokeWidth={2.5} />
          <span style={{ fontSize: "1.4rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", ...fontStyle }}>LevelUp</span>
        </Link>

        <div className="hidden sm:flex items-center gap-16" style={{ fontSize: "1rem", fontWeight: 600, color: "rgba(255,255,255,0.85)", ...fontStyle }}>
          <a href="#reading" style={{ color: "inherit", textDecoration: "none" }}>Reading</a>
          <a href="#grammar" style={{ color: "inherit", textDecoration: "none" }}>Grammar</a>
          <a href="#vocabulary" style={{ color: "inherit", textDecoration: "none" }}>Vocabulary</a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {isLoggedIn() ? (
            <Link to="/profile" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              borderRadius: "0.75rem", border: "1px solid rgba(255,255,255,0.3)",
              background: "rgba(255,255,255,0.1)", color: "#fff",
              padding: "0.6rem 1.25rem", fontSize: "0.875rem", fontWeight: 500,
              textDecoration: "none", backdropFilter: "blur(8px)", ...fontStyle,
            }}>
              <User style={{ width: "1rem", height: "1rem" }} />
              Профіль
            </Link>
          ) : (
            <Link to="/login" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              borderRadius: "0.75rem", border: "1px solid rgba(255,255,255,0.3)",
              background: "rgba(255,255,255,0.1)", color: "#fff",
              padding: "0.6rem 1.25rem", fontSize: "0.875rem", fontWeight: 500,
              textDecoration: "none", backdropFilter: "blur(8px)", ...fontStyle,
            }}>
              <LogIn style={{ width: "1rem", height: "1rem" }} />
              Увійти
            </Link>
          )}
        </div>
      </nav>

      <div className="relative z-10 flex-1 flex items-center w-full px-8 py-20">
        <div style={{ maxWidth: "650px" }}>
          <h1 style={{ fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.08, fontSize: "clamp(2.5rem, 5vw, 4rem)", ...fontStyle }}>
            Level up your English
          </h1>
          <p style={{ marginTop: "0.4rem", fontSize: "clamp(1rem, 2vw, 1.4rem)", fontWeight: 700, color: "#22c55e", ...fontStyle }}>
            Знайди свій рівень. Почни навчатись.
          </p>
          <p style={{ marginTop: "1.5rem", color: "rgba(255,255,255,0.7)", fontSize: "1.15rem", lineHeight: 1.7, maxWidth: "520px", ...fontStyle }}>
            Персоналізована платформа для вивчення англійської мови.
            Пройди вступний тест, отримай рівень за шкалою CEFR та вдосконалюй знання через вправи.
          </p>
          <div style={{ marginTop: "2.5rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link to="/register" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              borderRadius: "0.75rem", padding: "0.9rem 2rem",
              fontSize: "1rem", fontWeight: 700,
              backgroundColor: "#22c55e", color: "#fff",
              textDecoration: "none", boxShadow: "0 8px 25px rgba(34,197,94,0.3)", ...fontStyle,
            }}>
              Розпочати безкоштовно <ArrowRight style={{ width: "1.1rem", height: "1.1rem" }} />
            </Link>

            <button
              onClick={handlePlacementTest}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                borderRadius: "0.75rem", padding: "0.9rem 2rem",
                fontSize: "1rem", fontWeight: 600,
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.35)",
                color: "#fff",
                cursor: "pointer",
                ...fontStyle,
              }}
            >
              <ClipboardList style={{ width: "1.1rem", height: "1.1rem" }} />
              Тест рівня
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    num: "1",
    icon: LogIn,
    title: "Реєстрація",
    desc: "Створи акаунт безкоштовно — потрібні лише ім'я та email.",
    action: { label: "Зареєструватись", to: "/register" },
  },
  {
    num: "2",
    icon: ClipboardList,
    title: "Визначення рівня",
    desc: "Пройди вступний тест для визначення свого рівня англійської за шкалою CEFR (A1–C1).",
    actionFn: true,
  },
  {
    num: "3",
    icon: BookOpen,
    title: "Виконання вправ",
    desc: "Практикуй англійську через вправи з Reading, Grammar та Vocabulary відповідно до свого рівня.",
    action: null,
  },
  {
    num: "4",
    icon: GraduationCap,
    title: "Підвищення рівня",
    desc: "Перездай тест у будь-який момент щоб перейти на наступний рівень коли відчуєш прогрес.",
    action: null,
  },
];

function HowItWorks() {
  const navigate = useNavigate();

  function handlePlacementTest() {
    if (isLoggedIn()) {
      navigate("/placement-test");
    } else {
      navigate("/login");
    }
  }

  return (
    <section style={{ padding: "7rem 2rem", background: "#fff" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#22c55e", marginBottom: "0.75rem", ...fontStyle }}>
            Як це працює
          </p>
          <h2 style={{ fontWeight: 800, color: "#0f172a", lineHeight: 1.15, letterSpacing: "-0.03em", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", ...fontStyle }}>
            Починай навчатись вже сьогодні
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {steps.map((s, i) => (
            <div key={s.num} style={{ display: "flex", gap: "2rem", alignItems: "flex-start", paddingBottom: i < steps.length - 1 ? "2.5rem" : 0, position: "relative" }}>
              {i < steps.length - 1 && (
                <div style={{ position: "absolute", left: "1.5rem", top: "3.5rem", bottom: 0, width: "2px", background: "linear-gradient(to bottom, #22c55e, rgba(34,197,94,0.1))", transform: "translateX(-50%)" }} />
              )}
              <div style={{ flexShrink: 0, width: "3rem", height: "3rem", borderRadius: "50%", backgroundColor: "#22c55e", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", fontWeight: 800, boxShadow: "0 4px 12px rgba(34,197,94,0.3)", zIndex: 1, ...fontStyle }}>
                {s.num}
              </div>
              <div style={{ paddingTop: "0.4rem", flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <s.icon style={{ width: "1.2rem", height: "1.2rem", color: "#22c55e" }} />
                  <h3 style={{ fontWeight: 700, color: "#0f172a", fontSize: "1.1rem", ...fontStyle }}>{s.title}</h3>
                </div>
                <p style={{ fontSize: "0.95rem", color: "#6b7280", lineHeight: 1.7, ...fontStyle }}>{s.desc}</p>
                {s.action && (
                  <Link to={s.action.to} style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    marginTop: "0.75rem", padding: "0.5rem 1.25rem",
                    backgroundColor: "#22c55e", color: "#fff",
                    borderRadius: "0.6rem", fontSize: "0.875rem", fontWeight: 600,
                    textDecoration: "none", boxShadow: "0 4px 12px rgba(34,197,94,0.2)", ...fontStyle,
                  }}>
                    {s.action.label} <ArrowRight style={{ width: "0.9rem", height: "0.9rem" }} />
                  </Link>
                )}
                {s.actionFn && (
                  <button
                    onClick={handlePlacementTest}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "0.4rem",
                      marginTop: "0.75rem", padding: "0.5rem 1.25rem",
                      backgroundColor: "#22c55e", color: "#fff",
                      borderRadius: "0.6rem", fontSize: "0.875rem", fontWeight: 600,
                      border: "none", cursor: "pointer",
                      boxShadow: "0 4px 12px rgba(34,197,94,0.2)", ...fontStyle,
                    }}
                  >
                    Пройти тест <ArrowRight style={{ width: "0.9rem", height: "0.9rem" }} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const exerciseTypes = [
  { id: "reading", icon: BookOpen, title: "Reading", desc: "Читай тексти різних рівнів та відповідай на запитання для перевірки розуміння прочитаного." },
  { id: "grammar", icon: CheckCircle2, title: "Grammar", desc: "Вправляйся у вставці пропущених слів, виборі правильних форм та трансформації речень." },
  { id: "vocabulary", icon: Brain, title: "Vocabulary", desc: "Вивчай нові слова у контексті та практикуй їх правильне вживання в реченнях." },
];

function ExerciseTypes() {
  return (
    <section style={{ padding: "7rem 2rem", background: "#f9fafb", borderTop: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#22c55e", marginBottom: "0.75rem", ...fontStyle }}>
            Типи вправ
          </p>
          <h2 style={{ fontWeight: 800, color: "#0f172a", lineHeight: 1.15, letterSpacing: "-0.03em", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", ...fontStyle }}>
            Три типи вправ для комплексного навчання
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
          {exerciseTypes.map((s) => (
            <div key={s.id} id={s.id} style={{ background: "#fff", borderRadius: "1.25rem", border: "1px solid #e5e7eb", padding: "2rem", boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <div style={{ width: "3.5rem", height: "3.5rem", borderRadius: "1rem", backgroundColor: "rgba(34,197,94,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                <s.icon style={{ width: "1.5rem", height: "1.5rem", color: "#22c55e" }} />
              </div>
              <h3 style={{ fontWeight: 700, color: "#0f172a", fontSize: "1.2rem", marginBottom: "0.75rem", ...fontStyle }}>{s.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "#6b7280", lineHeight: 1.7, ...fontStyle }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reviews = [
  { name: "Анна Коваленко", role: "Студентка університету", quote: "Нарешті платформа, яка підбирає вправи під мій рівень. Почала з B1 і вже відчуваю прогрес.", rating: 5 },
  { name: "Микола Петренко", role: "Розробник програмного забезпечення", quote: "Вправи з граматики — саме те що мені потрібно. Чітко, структуровано, без зайвого.", rating: 5 },
  { name: "Софія Марченко", role: "Менеджер з маркетингу", quote: "Подобається що система зберігає мої результати. Бачу свій прогрес і це мотивує.", rating: 5 },
  { name: "Дмитро Савченко", role: "Вчитель", quote: "Чудова структура. Рівні CEFR допомагають зрозуміти де ти знаходишся і куди рухатись.", rating: 5 },
  { name: "Олена Бондар", role: "Перекладач", quote: "Вправи на словниковий запас чудові. Вивчати слова в контексті набагато ефективніше.", rating: 5 },
  { name: "Іван Кравченко", role: "Бізнес-аналітик", quote: "Чистий інтерфейс, без реклами. Просто зосереджена практика англійської. Чудово.", rating: 5 },
];

function Reviews() {
  return (
    <section id="reviews" style={{ padding: "7rem 2rem", background: "#fff" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#FDAA3E", marginBottom: "0.75rem", ...fontStyle }}>
            Відгуки
          </p>
          <h2 style={{ fontWeight: 800, color: "#0f172a", lineHeight: 1.15, letterSpacing: "-0.03em", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", ...fontStyle }}>
            Що кажуть наші користувачі
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {reviews.map((r) => (
            <div key={r.name} style={{ position: "relative", borderRadius: "1rem", border: "1px solid #f0f0f0", background: "#fff", padding: "1.5rem", boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}>
              <Quote style={{ position: "absolute", top: "1rem", right: "1rem", width: "2.5rem", height: "2.5rem", color: "rgba(253,170,62,0.1)", transform: "rotate(180deg)" }} />
              <div style={{ display: "flex", gap: "2px", marginBottom: "1rem" }}>
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} style={{ width: "1rem", height: "1rem", fill: "#FDAA3E", color: "#FDAA3E" }} />
                ))}
              </div>
              <p style={{ fontSize: "0.875rem", color: "#374151", lineHeight: 1.7, marginBottom: "1.25rem", ...fontStyle }}>"{r.quote}"</p>
              <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#111", ...fontStyle }}>{r.name}</p>
              <p style={{ fontSize: "0.75rem", color: "#9ca3af", ...fontStyle }}>{r.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "7rem 2rem", background: "#0a0f0d" }}>
      <div style={{ position: "relative", zIndex: 10, maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontWeight: 800, color: "#fff", lineHeight: 1.15, letterSpacing: "-0.03em", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", ...fontStyle }}>
          Готовий підняти свій рівень англійської?
        </h2>
        <p style={{ marginTop: "1rem", color: "rgba(255,255,255,0.6)", maxWidth: "400px", margin: "1rem auto 0", lineHeight: 1.7, ...fontStyle }}>
          Приєднуйся до LevelUp і починай покращувати свою англійську вже сьогодні.
        </p>
        <Link to="/register" style={{
          marginTop: "2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem",
          borderRadius: "0.75rem", padding: "1rem 2rem",
          backgroundColor: "#22c55e", color: "#fff",
          textDecoration: "none", fontSize: "0.95rem", fontWeight: 700,
          boxShadow: "0 8px 25px rgba(34,197,94,0.3)", ...fontStyle,
        }}>
          Розпочати безкоштовно <ArrowRight style={{ width: "1rem", height: "1rem" }} />
        </Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #f0f0f0", padding: "3rem 2rem", background: "#fff" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <BookOpen style={{ width: "1.5rem", height: "1.5rem", color: "#111" }} strokeWidth={2.5} />
          <span style={{ fontWeight: 700, color: "#111", fontSize: "0.9rem", ...fontStyle }}>LevelUp</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", fontSize: "0.875rem", color: "#9ca3af", ...fontStyle }}>
          <a href="#reading" style={{ color: "inherit", textDecoration: "none" }}>Reading</a>
          <a href="#grammar" style={{ color: "inherit", textDecoration: "none" }}>Grammar</a>
          <a href="#vocabulary" style={{ color: "inherit", textDecoration: "none" }}>Vocabulary</a>
          <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>Увійти</Link>
          <Link to="/register" style={{ color: "inherit", textDecoration: "none" }}>Розпочати</Link>
        </div>
        <p style={{ fontSize: "0.75rem", color: "#9ca3af", ...fontStyle }}>© {new Date().getFullYear()} LevelUp</p>
      </div>
    </footer>
  );
}