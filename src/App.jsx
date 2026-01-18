import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo.png";

const PHONE = "07501 524137";
const PHONE_TEL = "tel:07501524137";
const EMAIL = "tara.petservices@gmail.com";
const INSTAGRAM = "tara_petservices";

/* ========== LAYOUT ========== */
function Layout({ children }) {
  return (
    <div className="tps">
      <header className="tps-header">
        <div className="container nav-bar">
          <Link to="/" className="brand">
            <img src={logo} alt="Tara Pet Services logo" className="logo" />
            <div>
              <div className="brand-name">Tara Pet Services ✨</div>
              <div className="brand-tag">Dog Walking & Pet Sitting · extra cuddles included</div>
            </div>
          </Link>

          <nav className="nav-links">
            <Link to="/services">🦴 Services</Link>
            <Link to="/about">🐾 About</Link>
            <Link to="/areas">📍 Areas</Link>
            <Link to="/contact">💌 Contact</Link>
          </nav>

          <div className="nav-actions">
            <Link to="/login" className="btn btn-light">🔐 Login</Link>
            <Link to="/register" className="btn btn-solid">📅 Request Booking</Link>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="tps-footer">
        <div className="container footer-grid">
          <div>
            <strong>Tara Pet Services</strong>
            <p>Dog walking & pet sitting in and around Trawsfynydd.</p>
            <em>“Willing to go the extra mile 🐾”</em>
          </div>

          <div>
            <strong>Contact</strong>
            <p>📞 <a href={PHONE_TEL}>{PHONE}</a></p>
            <p>✉ <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            <p>📷 <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noreferrer">@{INSTAGRAM}</a></p>
          </div>

          <div>
            <strong>Quick Links</strong>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/register">Request Booking</Link>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Tara Pet Services 🐾
        </div>
      </footer>
    </div>
  );
}

/* ========== HOME ========== */
function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1>Happy walks, cozy sits & lots of tail wags 🐕✨</h1>
            <p>
              Based in <strong>Trawsfynydd</strong> — kind, reliable pet care you can trust 🐾
            </p>

            <div className="hero-buttons">
              <Link to="/register" className="btn btn-solid">🐶 Request a Booking</Link>
              <a href={PHONE_TEL} className="btn btn-light">📞 Call {PHONE}</a>
            </div>

            <div className="pill-grid">
              <div className="pill">💗 Friendly & caring</div>
              <div className="pill">📍 Local & flexible</div>
              <div className="pill">📸 GPS + photos</div>
            </div>
          </div>

          <div className="card hero-card">
            <h3>How it works 🦴</h3>
            <ol>
              <li>Create an account</li>
              <li>Add your pets</li>
              <li>Send a booking request</li>
              <li>Receive updates + photos 🐾</li>
            </ol>
            <Link to="/register" className="btn btn-solid">✨ Get Started</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Services 🐾</h2>
        <div className="card-grid">
          <div className="card">
            <h3>🦮 Dog Walking</h3>
            <p>
              Dog walking and adventures with options for a GPS tracked route and photos.
            </p>
          </div>

          <div className="card">
            <h3>🏡 Pet Sitting</h3>
            <p>Drop-in visits or overnight care so your pets feel safe at home.</p>
          </div>

          <div className="card">
            <h3>🧾 Invoices & Records</h3>
            <p>Clear visit history and invoices in your portal.</p>
          </div>
        </div>
      </section>

      <section className="section soft">
        <h2>Meet the Pets 📸</h2>
        <div className="gallery">
          <div className="gallery-card">🐶 Paws McFluff</div>
          <div className="gallery-card">🐕 Sir Barks-a-lot</div>
          <div className="gallery-card">🐾 Miss Wiggles</div>
          <div className="gallery-card">🐱 Captain Purr</div>
        </div>
      </section>

      <section className="section">
        <h2>Happy Client Reviews 💬</h2>
        <div className="testimonials">
          <div className="card">“So kind and reliable — our dog adores her!” 🐶</div>
          <div className="card">“Loved the updates and photos.” 📸</div>
          <div className="card">“Couldn’t recommend more.” 💗</div>
        </div>

        <Link to="/register" className="btn btn-solid center">✨ Request a Booking</Link>
      </section>
    </>
  );
}

/* ========== OTHER PAGES (PLACEHOLDERS) ========== */
const Services = () => <Page title="Services 🦴" />;
const About = () => <Page title="About 🐾" />;
const Areas = () => <Page title="Areas Covered 📍" />;
const Contact = () => <Page title="Contact 💌" />;
const Login = () => <Page title="Client Login 🔐" />;
const Register = () => <Page title="Request Booking 📅" />;

function Page({ title }) {
  return (
    <div className="section">
      <h1>{title}</h1>
      <p>Content coming soon ✨</p>
    </div>
  );
}

/* ========== APP ========== */
export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
