import {
  BookOpen, Brain,
  CheckCircle2, ArrowRight, Star, Quote
} from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "../assets/hero-bg.jpg";

const fontStyle = { fontFamily: "'Inter', sans-serif" };

export default function HomePage() {
  return (
    <div style={fontStyle}>
      <Hero />
      <HowItWorks />
      <Reviews />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col" style={{ background: "#0a0f0d" }}>
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none select-none"
        style={{ opacity: 0.65 }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to right, rgba(10,15,13,0.92), rgba(10,15,13,0.5), transparent)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.3), transparent, rgba(10,15,13,0.8))" }}
      />

      <nav className="relative z-20 w-full px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" style={fontStyle}>
          <BookOpen className="w-8 h-8 text-white" strokeWidth={2.5} />
          <span style={{ fontSize: "1.4rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>LevelUp</span>
        </Link>

        <div className="hidden sm:flex items-center gap-16" style={{ fontSize: "1rem", fontWeight: 600, color: "rgba(255,255,255,0.85)", ...fontStyle }}>
          <a href="#reading" style={{ color: "inherit", textDecoration: "none" }}>Reading</a>
          <a href="#grammar" style={{ color: "inherit", textDecoration: "none" }}>Grammar</a>
          <a href="#vocabulary" style={{ color: "inherit", textDecoration: "none" }}>Vocabulary</a>
        </div>

        <Link
          to="/register"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            borderRadius: "0.75rem", border: "1px solid rgba(255,255,255,0.3)",
            background: "rgba(255,255,255,0.1)", color: "#fff",
            padding: "0.6rem 1.25rem", fontSize: "0.875rem", fontWeight: 500,
            textDecoration: "none", backdropFilter: "blur(8px)", ...fontStyle,
          }}
        >
          Get started <ArrowRight style={{ width: "1rem", height: "1rem" }} />
        </Link>
      </nav>

      <div className="relative z-10 flex-1 flex items-center w-full px-8 py-20">
        <div style={{ maxWidth: "650px" }}>
          <h1 style={{ fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.08, fontSize: "clamp(2.5rem, 5vw, 4rem)", ...fontStyle }}>
          Level up your English
        </h1>
        <p style={{ marginTop: "0.4rem", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#22c55e", ...fontStyle }}>
          Find your level. Start learning.
        </p>
        <p style={{ marginTop: "1.5rem", color: "rgba(255,255,255,0.7)", fontSize: "1.15rem", lineHeight: 1.7, maxWidth: "520px", ...fontStyle }}>
          A personalized English learning platform. Take a placement test,
          get your CEFR level and improve your skills through Reading, Grammar and Vocabulary exercises.
        </p>
          <div style={{ marginTop: "2.5rem" }}>
            <Link
              to="/register"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                borderRadius: "0.75rem", padding: "0.9rem 2rem",
                fontSize: "1rem", fontWeight: 700,
                backgroundColor: "#22c55e", color: "#fff",
                textDecoration: "none", boxShadow: "0 8px 25px rgba(34,197,94,0.3)", ...fontStyle,
              }}
            >
              Get started free <ArrowRight style={{ width: "1.1rem", height: "1.1rem" }} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const exerciseTypes = [
  {
    id: "reading",
    icon: BookOpen,
    title: "Reading",
    desc: "Read texts of different levels and answer comprehension questions to test your understanding.",
  },
  {
    id: "grammar",
    icon: CheckCircle2,
    title: "Grammar",
    desc: "Practice filling in missing words, choosing correct forms and transforming sentences.",
  },
  {
    id: "vocabulary",
    icon: Brain,
    title: "Vocabulary",
    desc: "Learn new words in context and practice using them correctly in sentences.",
  },
];

function HowItWorks() {
  return (
    <section style={{ padding: "7rem 2rem", background: "#f9fafb", borderTop: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#22c55e", marginBottom: "0.75rem", ...fontStyle }}>
            Exercise types
          </p>
          <h2 style={{ fontWeight: 800, color: "#0f172a", lineHeight: 1.15, letterSpacing: "-0.03em", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", ...fontStyle }}>
            Three types of exercises for comprehensive learning
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
          {exerciseTypes.map((s) => (
            <div key={s.id} id={s.id} style={{
              background: "#fff", borderRadius: "1.25rem",
              border: "1px solid #e5e7eb", padding: "2rem",
              boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
            }}>
              <div style={{
                width: "3.5rem", height: "3.5rem", borderRadius: "1rem",
                backgroundColor: "rgba(34,197,94,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "1.25rem",
              }}>
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
  { name: "Anna Kovalenko", role: "University student", quote: "Finally a platform that adapts to my level. I started at B1 and I can already feel the progress.", rating: 5 },
  { name: "Mykola Petrenko", role: "Software developer", quote: "The grammar exercises are exactly what I needed. Clear, structured, no distractions.", rating: 5 },
  { name: "Sofia Marchenko", role: "Marketing manager", quote: "I love that it saves my results. Seeing my progress keeps me motivated to continue.", rating: 5 },
  { name: "Dmytro Savchenko", role: "Teacher", quote: "Great structure. The CEFR levels help me understand where I am and where I am going.", rating: 5 },
  { name: "Olena Bondar", role: "Translator", quote: "The vocabulary exercises are brilliant. Learning words in context is so much more effective.", rating: 5 },
  { name: "Ivan Kravchenko", role: "Business analyst", quote: "Clean interface, no ads, no distractions. Just focused English practice. Love it.", rating: 5 },
];

function Reviews() {
  return (
    <section id="reviews" style={{ padding: "7rem 2rem", background: "#fff" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#22c55e", marginBottom: "0.75rem", ...fontStyle }}>
            Reviews
          </p>
          <h2 style={{ fontWeight: 800, color: "#0f172a", lineHeight: 1.15, letterSpacing: "-0.03em", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", ...fontStyle }}>
            Loved by English learners
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {reviews.map((r) => (
            <div key={r.name} style={{
              position: "relative", borderRadius: "1rem",
              border: "1px solid #f0f0f0", background: "#fff",
              padding: "1.5rem", boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
            }}>
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
          Ready to level up your English?
        </h2>
        <p style={{ marginTop: "1rem", color: "rgba(255,255,255,0.6)", maxWidth: "400px", margin: "1rem auto 0", lineHeight: 1.7, ...fontStyle }}>
          Join LevelUp and start improving your English today with personalized exercises for your level.
        </p>
        <Link
          to="/register"
          style={{
            marginTop: "2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem",
            borderRadius: "0.75rem", padding: "1rem 2rem",
            backgroundColor: "#22c55e", color: "#fff",
            textDecoration: "none", fontSize: "0.95rem", fontWeight: 700,
            boxShadow: "0 8px 25px rgba(34,197,94,0.3)", ...fontStyle,
          }}
        >
          Get started free <ArrowRight style={{ width: "1rem", height: "1rem" }} />
        </Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #f0f0f0", padding: "3rem 2rem", background: "#fff" }}>
      <div style={{
        maxWidth: "1100px", margin: "0 auto",
        display: "flex", flexWrap: "wrap",
        alignItems: "center", justifyContent: "space-between", gap: "1.5rem",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <BookOpen style={{ width: "1.5rem", height: "1.5rem", color: "#111" }} strokeWidth={2.5} />
          <span style={{ fontWeight: 700, color: "#111", fontSize: "0.9rem", ...fontStyle }}>LevelUp</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", fontSize: "0.875rem", color: "#9ca3af", ...fontStyle }}>
          <a href="#reading" style={{ color: "inherit", textDecoration: "none" }}>Reading</a>
          <a href="#grammar" style={{ color: "inherit", textDecoration: "none" }}>Grammar</a>
          <a href="#vocabulary" style={{ color: "inherit", textDecoration: "none" }}>Vocabulary</a>
          <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>Sign in</Link>
          <Link to="/register" style={{ color: "inherit", textDecoration: "none" }}>Get started</Link>
        </div>
        <p style={{ fontSize: "0.75rem", color: "#9ca3af", ...fontStyle }}>© {new Date().getFullYear()} LevelUp</p>
      </div>
    </footer>
  );
}