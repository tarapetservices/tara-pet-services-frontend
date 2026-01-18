import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

const PHONE = "07501 524137";
const PHONE_TEL = "tel:07501524137";
const EMAIL = "tara.petservices@gmail.com";
const INSTAGRAM = "tara_petservices";

function BoneDivider({ label = "paw-some vibes" }) {
  return (
    <div className="divider">
      <span className="divider-line" />
      <span className="divider-bone" aria-hidden="true">
        🦴
      </span>
      <span className="divider-text">{label} 🐾</span>
      <span className="divider-line" />
    </div>
  );
}

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="tps">
      <header className="tps-header">
        <div className="container header-row">
          <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
            {/* ORIGINAL (NO LOGO FILE) */}
            <div className="logo-circle" aria-hidden="true">
              🐾
            </div>
            <div>
              <div className="logo-title">Tara Pet Services ✨</div>
              <div className="logo-sub">Dog Walking &amp; Pet Sitting • extra cuddles included</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="tps-nav desktop-nav" aria-label="Main">
            <Link to="/services">🦴 Services</Link>
            <Link to="/about">🐾 About</Link>
            <Link to="/areas">🗺️ Areas</Link>
            <Link to="/contact">💌 Contact</Link>
          </nav>

          <div className="tps-actions">
            <Link to="/login" className="btn btn-light" onClick={() => setMenuOpen(false)}>
              🔐 Login
            </Link>
            <Link to="/register" className="btn btn-solid" onClick={() => setMenuOpen(false)}>
              📅 Request Booking
            </Link>

            {/* Burger (tablet/mobile) */}
            <button
              className="burger"
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen ? "true" : "false"}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="burger-line" />
              <span className="burger-line" />
              <span className="burger-line" />
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        {menuOpen && (
          <>
            <div className="menu-backdrop" onClick={() => setMenuOpen(false)} />
            <div className="menu-drawer" role="dialog" aria-label="Menu">
              <div className="menu-top">
                <div className="menu-title">🐾 Menu</div>
                <button className="menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                  ✖
                </button>
              </div>

              <div className="menu-links">
                <Link to="/services" onClick={() => setMenuOpen(false)}>
                  🦴 Services
                </Link>
                <Link to="/about" onClick={() => setMenuOpen(false)}>
                  🐾 About
                </Link>
                <Link to="/areas" onClick={() => setMenuOpen(false)}>
                  🗺️ Areas
                </Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>
                  💌 Contact
                </Link>
              </div>

              <div className="menu-cta">
                <Link to="/register" className="btn btn-solid" onClick={() => setMenuOpen(false)}>
                  ✨ Request a Booking
                </Link>
                <a href={PHONE_TEL} className="btn btn-light" onClick={() => setMenuOpen(false)}>
                  📞 Call {PHONE}
                </a>
              </div>

              <div className="menu-mini">
                <div>
                  📷 Instagram:{" "}
                  <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noreferrer">
                    @{INSTAGRAM}
                  </a>
                </div>
                <div>
                  ✉ Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </div>
              </div>
            </div>
          </>
        )}
      </header>

      <main>{children}</main>

      <footer className="tps-footer">
        <div className="container footer-grid">
          <div>
            <strong>Tara Pet Services</strong>
            <p>Dog walking &amp; pet sitting in and around Trawsfynydd.</p>
            <em>“Willing to go the extra mile 🐾”</em>
          </div>

          <div>
            <strong>Contact</strong>
            <p>
              📞 <a href={PHONE_TEL}>{PHONE}</a>
            </p>
            <p>
              ✉ <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
            <p>
              📷{" "}
              <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noreferrer">
                @{INSTAGRAM}
              </a>
            </p>
          </div>

          <div>
            <strong>Quick Links</strong>
            <p>
              <Link to="/services">🦴 Services</Link>
            </p>
            <p>
              <Link to="/contact">💌 Contact</Link>
            </p>
            <p>
              <Link to="/register">📅 Request Booking</Link>
            </p>
            <p>
              <Link to="/login">🔐 Client Login</Link>
            </p>
          </div>
        </div>

        <small>© {new Date().getFullYear()} Tara Pet Services (TPS) • made with love &amp; paw prints 🐾💗</small>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="tps-hero">
        <div className="container hero-grid">
          <div>
            <div className="hero-kicker">🐶✨ Friendly local pet care</div>
            <h1>Happy walks, cozy sits &amp; lots of tail wags 🐾</h1>
            <p>
              Based in <strong>Trawsfynydd</strong> — kind, reliable care… and I’ll always go the extra mile 💗
            </p>

            <div className="tps-actions">
              <Link to="/register" className="btn btn-solid">
                🐕‍🦺 Request a Booking
              </Link>
              <a href={PHONE_TEL} className="btn btn-light">
                📞 Call {PHONE}
              </a>
            </div>

            <div className="pill-grid">
              <div className="pill">
                <strong>Reliable &amp; caring</strong>
                <br />
                gentle, patient &amp; friendly
              </div>
              <div className="pill">
                <strong>Local &amp; flexible</strong>
                <br />
                Trawsfynydd + nearby
              </div>
              <div className="pill">
                <strong>Walk updates</strong>
                <br />
                GPS + photos + videos
              </div>
            </div>
          </div>

          <div className="card hero-card">
            <div className="card-title">How bookings work 📨</div>
            <ol className="steps">
              <li>
                <span className="step-badge">1</span> Create an account &amp; add your pets
              </li>
              <li>
                <span className="step-badge">2</span> Send a booking request message
              </li>
              <li>
                <span className="step-badge">3</span> I accept/decline (then it’s booked!)
              </li>
              <li>
                <span className="step-badge">4</span> Get updates after walks 🐾
              </li>
            </ol>
            <div className="hero-card-cta">
              <Link to="/register" className="btn btn-solid">
                ✨ Get Started
              </Link>
              <Link to="/services" className="btn btn-light">
                🦴 View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BoneDivider label="services" />

      <section className="section">
        <div className="container">
          <div className="section-title">Services 🐾</div>

          <div className="card-grid">
            <div className="card">
              <div className="card-title">🦮 Dog Walking</div>
              <p>Dog walking and adventures with options for a GPS tracked route and photos.</p>
              <div className="tags">
                <span className="tag">fresh air</span>
                <span className="tag">sniffari</span>
                <span className="tag">tail wags</span>
              </div>
            </div>

            <div className="card">
              <div className="card-title">🏡 Pet Sitting</div>
              <p>Drop-ins or overnight care so your pets feel safe and happy at home.</p>
              <div className="tags">
                <span className="tag">cuddles</span>
                <span className="tag">feeding</span>
                <span className="tag">playtime</span>
              </div>
            </div>

            <div className="card">
              <div className="card-title">🧾 Invoices &amp; Records</div>
              <p>Clear visit history and invoices inside your client portal.</p>
              <div className="tags">
                <span className="tag">simple</span>
                <span className="tag">transparent</span>
                <span className="tag">easy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BoneDivider label="meet the pets" />

      <section className="section section-soft">
        <div className="container">
          <div className="section-title">Meet the Pets (coming soon!) 📸</div>
          <p className="section-sub">Cute walk snaps and happy faces (with owner permission, of course).</p>

          <div className="gallery-grid">
            <div className="gallery-card">
              <div className="gallery-emoji">🐶</div>
              <div className="gallery-name">Paws McFluff</div>
              <div className="gallery-note">professional tail-wagger</div>
            </div>
            <div className="gallery-card">
              <div className="gallery-emoji">🐕</div>
              <div className="gallery-name">Sir Barks-a-lot</div>
              <div className="gallery-note">sniff detective</div>
            </div>
            <div className="gallery-card">
              <div className="gallery-emoji">🐾</div>
              <div className="gallery-name">Miss Wiggles</div>
              <div className="gallery-note">treat connoisseur</div>
            </div>
            <div className="gallery-card">
              <div className="gallery-emoji">🐱</div>
              <div className="gallery-name">Captain Purr</div>
              <div className="gallery-note">nap supervisor</div>
            </div>
          </div>
        </div>
      </section>

      <BoneDivider label="reviews" />

      <section className="section">
        <div className="container">
          <div className="section-title">Happy client reviews 💬</div>

          <div className="testimonials">
            <div className="card">
              <div className="quote">“Tara is so lovely — our dog came back absolutely buzzing!”</div>
              <div className="quote-by">— A happy owner 🐶</div>
            </div>
            <div className="card">
              <div className="quote">“Amazing updates and photos. It really put my mind at ease.”</div>
              <div className="quote-by">— A relieved human 🐾</div>
            </div>
            <div className="card">
              <div className="quote">“Super reliable and genuinely cares — you can tell.”</div>
              <div className="quote-by">— A returning client 💗</div>
            </div>
          </div>

          <div className="center-cta">
            <Link to="/register" className="btn btn-solid">
              ✨ Request a Booking
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function SimplePage({ title, text, emoji = "🐾" }) {
  return (
    <section className="section">
      <div className="container column">
        <div className="page-title">
          {emoji} {title}
        </div>
        <div className="card">
          {text}
          <div className="mini-cta">
            <Link to="/register" className="btn btn-solid">
              📅 Request Booking
            </Link>
            <Link to="/contact" className="btn btn-light">
              💌 Ask a Question
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/services"
            element={<SimplePage emoji="🦴" title="Services" text="Services and pricing are confirmed during booking requests. Tell me what you need and I’ll do my best to help! 🐶💗" />}
          />
          <Route
            path="/about"
            element={<SimplePage emoji="🐾" title="About" text="Hi, I’m Tara 👋 I provide friendly, reliable pet care you can trust. I treat every pet like they’re my own (with extra cuddles and kind energy). ✨" />}
          />
          <Route
            path="/areas"
            element={<SimplePage emoji="🗺️" title="Areas Covered" text="Based in Trawsfynydd and covering surrounding areas. If you’re not sure, send a message — I’m happy to check! 🐾" />}
          />
          <Route
            path="/contact"
            element={<SimplePage emoji="💌" title="Contact" text={`You can call/text ${PHONE}, email ${EMAIL}, or message on Instagram @${INSTAGRAM}. For bookings, please create an account so I can manage everything properly. 🐶`} />}
          />
          <Route path="/login" element={<SimplePage emoji="🔐" title="Client Login" text="Client portal coming next — this page is a placeholder for now. ✨" />} />
          <Route path="/register" element={<SimplePage emoji="✨" title="Create Account" text="Account system coming soon — you’ll be able to add pets and send booking requests right here. 🐾" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
