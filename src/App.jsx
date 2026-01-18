import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";

const PHONE = "07501 524137";
const PHONE_TEL = "tel:07501524137";
const EMAIL = "tara.petservices@gmail.com";
const INSTAGRAM = "tara_petservices";

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  return (
    <div className="tps">
      {/* HEADER */}
      <header className="tps-header">
        <div className="container header-row">
          {/* LOGO */}
          <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
            <img
              src={logo}
              alt="Tara Pet Services logo"
              className="logo-image"
            />
            <div>
              <div className="logo-title">Tara Pet Services ✨</div>
              <div className="logo-sub">
                Dog Walking &amp; Pet Sitting • extra cuddles included
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="tps-nav desktop-nav">
            <Link to="/services">🦴 Services</Link>
            <Link to="/about">🐾 About</Link>
            <Link to="/areas">🗺️ Areas</Link>
            <Link to="/contact">💌 Contact</Link>
          </nav>

          {/* ACTIONS */}
          <div className="tps-actions">
            <Link to="/login" className="btn btn-light">🔐 Login</Link>
            <Link to="/register" className="btn btn-solid">📅 Request Booking</Link>

            <button
              className="burger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <>
            <div className="menu-backdrop" onClick={() => setMenuOpen(false)} />
            <div className="menu-drawer">
              <Link to="/services" onClick={() => setMenuOpen(false)}>🦴 Services</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>🐾 About</Link>
              <Link to="/areas" onClick={() => setMenuOpen(false)}>🗺️ Areas</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>💌 Contact</Link>
              <Link to="/register" className="btn btn-solid" onClick={() => setMenuOpen(false)}>
                ✨ Book Now
              </Link>
            </div>
          </>
        )}
      </header>

      {/* MAIN */}
      <main>{children}</main>

      {/* FOOTER */}
      <footer className="tps-footer">
        <p>© {new Date().getFullYear()} Tara Pet Services 🐾</p>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <section className="tps-hero">
      <div className="container hero-grid">
        <div>
          <h1>Happy walks, cozy sits &amp; lots of tail wags 🐶✨</h1>
          <p>
            Based in <strong>Trawsfynydd</strong> — kind, reliable pet care
            you can trust 🐾
          </p>

          <div className="tps-actions">
            <Link to="/register" className="btn btn-solid">
              🐕‍🦺 Request a Booking
            </Link>
            <a href={PHONE_TEL} className="btn btn-light">
              📞 Call {PHONE}
            </a>
          </div>
        </div>

        <div className="card">
          <h3>How it works 🦴</h3>
          <ol>
            <li>Create an account</li>
            <li>Add your pets</li>
            <li>Send a booking request</li>
            <li>Receive updates + photos 🐾</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

function SimplePage({ title, emoji }) {
  return (
    <div className="container page">
      <h1>{emoji} {title}</h1>
      <p>Page content coming soon 💗</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<SimplePage title="Services" emoji="🦴" />} />
          <Route path="/about" element={<SimplePage title="About" emoji="🐾" />} />
          <Route path="/areas" element={<SimplePage title="Areas" emoji="🗺️" />} />
          <Route path="/contact" element={<SimplePage title="Contact" emoji="💌" />} />
          <Route path="/login" element={<SimplePage title="Login" emoji="🔐" />} />
          <Route path="/register" element={<SimplePage title="Register" emoji="✨" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
