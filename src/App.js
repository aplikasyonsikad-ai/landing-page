import { useEffect, useState } from 'react';
import './App.css';


// ── Navbar ─────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Roles', href: '#roles' },
    { label: 'Screenshots', href: '#screenshots' },
  ];

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container">
        <div className="navbar-inner">
          <a href="#top" className="nav-logo" aria-label="SIKAD Home">
            <img src="/sikad-logo.png" alt="SIKAD Logo" className="nav-logo-img" />
            <span className="nav-logo-text">SIKAD</span>
          </a>

          <ul className="nav-links">
            {navLinks.map(l => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>

          <a href="#download" className="btn-primary nav-cta" id="nav-download-btn">
            <span>⬇</span> Download APK
          </a>

          <button
            className="nav-mobile-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(o => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {menuOpen && (
          <div style={{
            padding: '16px 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            marginTop: '12px',
          }}>
            {navLinks.map(l => (
              <a
                key={l.label}
                href={l.href}
                style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', fontWeight: 500 }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href="#download" className="btn-primary" style={{ width: 'fit-content' }}>
              ⬇ Download APK
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

// ── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero" id="top" aria-label="Hero">
      {/* Background elements */}
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />
      <div className="hero-orb hero-orb-3" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="container">
        <div className="hero-content">
          {/* Left: Text */}
          <div>
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Version 1.0 · Now Available
            </div>

            <h1 className="hero-title">
              Ride Smarter<br />
              with <span className="gradient-text">SIKAD</span>
            </h1>

            <p className="hero-subtitle">
              The first shared ride booking app built for Filipino communities using
              the <strong>Bokyo</strong> — the iconic multi-passenger vehicle of the Philippines.
              Book rides, track your driver in real time, and pay seamlessly — all in one app.
            </p>

            <div className="hero-actions">
              <a
                href="#download"
                className="btn-primary"
                id="hero-download-btn"
              >
                <span>⬇</span> Download APK
              </a>
              <a
                href="#features"
                className="btn-secondary"
                id="hero-features-btn"
              >
                <span>✦</span> Explore Features
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <div className="hero-stat-value">3</div>
                <div className="hero-stat-label">User Roles</div>
              </div>
              <div>
                <div className="hero-stat-value">v1.0</div>
                <div className="hero-stat-label">Stable Release</div>
              </div>
              <div>
                <div className="hero-stat-value">Real-time</div>
                <div className="hero-stat-label">GPS Tracking</div>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="hero-visual">
            <div className="hero-ring hero-ring-1" aria-hidden="true" />
            <div className="hero-ring hero-ring-2" aria-hidden="true" />

            <div className="hero-img-wrapper">
              <img
                src="/yellow_bajaj_re.png"
                alt="SIKAD Yellow Bajaj RE illustration"
                className="hero-img"
                loading="eager"
              />
            </div>

            <div className="hero-chip hero-chip-1">
              <span className="hero-chip-icon">📍</span>
              Live GPS Tracking
            </div>

            <div className="hero-chip hero-chip-2">
              <span className="hero-chip-icon">💳</span>
              In-app Wallet
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Features ────────────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: '🗺️',
    title: 'Interactive Map Booking',
    desc: 'Book rides with an intuitive map interface. Drop pins for precise pickup and drop-off locations using OpenStreetMap integration.',
  },
  {
    icon: '📡',
    title: 'Real-time Tracking',
    desc: 'Track your driver live on the map. See exact location, estimated arrival, and route progress with live GPS updates.',
  },
  {
    icon: '💳',
    title: 'Digital Wallet',
    desc: 'Top up your in-app wallet and pay for rides cashlessly. Instant balance updates and complete transaction history.',
  },
  {
    icon: '💬',
    title: 'In-App Messaging',
    desc: 'Chat directly with your driver before and during the ride. No need to share personal phone numbers.',
  },
  {
    icon: '🔐',
    title: 'Verified Accounts',
    desc: 'Email verification and driver approval system ensures only trusted drivers are on the platform.',
  },
  {
    icon: '📋',
    title: 'Trip History & Reports',
    desc: 'Full ride history for passengers and drivers. Exportable PDF reports for LGU administrators.',
  },
  {
    icon: '⭐',
    title: 'Favorite Routes',
    desc: 'Save your most-traveled destinations for faster booking. One-tap to rebook your favorite spots.',
  },
  {
    icon: '🏛️',
    title: 'LGU Dashboard',
    desc: 'A powerful web-based admin panel for local government units to monitor, manage, and generate reports on all rides and users.',
  },
  {
    icon: '📸',
    title: 'QR Code & Profile',
    desc: 'Drivers have unique QR codes. Complete profile management with photo upload support.',
  },
];

function Features() {
  return (
    <section className="features" id="features" aria-labelledby="features-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Features</span>
          <h2 className="section-title" id="features-heading">
            Everything You Need to <span className="gradient-text">Ride & Manage</span>
          </h2>
          <p className="section-subtitle">
            Packed with powerful features for passengers, drivers, and local government units — all in one platform.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <div className="feature-card" key={i} id={`feature-${i + 1}`}>
              <div className="feature-icon-wrap" aria-hidden="true">
                {f.icon}
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── How It Works ─────────────────────────────────────────────────────────────
const STEPS = [
  {
    num: '1',
    title: 'Download & Register',
    desc: 'Install the SIKAD APK on your Android device. Sign up with your email, verify it, and create your profile in minutes.',
  },
  {
    num: '2',
    title: 'Book Your Shared Ride',
    desc: 'Open the map, choose your destination, and submit your ride request. Available Bokyo drivers are notified instantly.',
  },
  {
    num: '3',
    title: 'Track & Pay',
    desc: 'Watch your Bokyo driver arrive in real time on the map, complete your shared ride, and pay from your wallet — seamlessly.',
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works" aria-labelledby="how-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">How It Works</span>
          <h2 className="section-title" id="how-heading">
            Up and Running in <span className="gradient-text">3 Simple Steps</span>
          </h2>
          <p className="section-subtitle">
            Getting started with SIKAD takes less than 5 minutes.
          </p>
        </div>

        <div className="steps-grid">
          {STEPS.map((s, i) => (
            <div className="step-card" key={i} id={`step-${i + 1}`}>
              <div className="step-number">{s.num}</div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Roles ────────────────────────────────────────────────────────────────────
const ROLES = [
  {
    emoji: '🧑‍💼',
    cls: 'role-card-passenger',
    title: 'Passenger',
    desc: 'Book shared Bokyo rides anytime, track your driver live, manage your wallet, and save your favorite routes for faster future bookings.',
    features: [
      'Interactive map booking with pin drop',
      'Real-time driver location tracking',
      'In-app wallet & top-up',
      'Chat with driver',
      'Ride history & receipts',
      'Favorite routes',
    ],
  },
  {
    emoji: '🛺',
    cls: 'role-card-driver',
    title: 'Driver',
    desc: 'Receive shared ride requests, navigate to passengers with GPS, manage your trips, and earn income with in-app earnings tracking.',
    features: [
      'Real-time ride request notifications',
      'Turn-by-turn navigation mode',
      'Earnings & wallet dashboard',
      'Passenger chat',
      'Trip history with reports',
      'QR code identity',
    ],
  },
  {
    emoji: '🏛️',
    cls: 'role-card-lgu',
    title: 'LGU Admin',
    desc: 'Monitor all rides and users, approve drivers, analyze trip data, and export comprehensive reports for your municipality.',
    features: [
      'Full dashboard with analytics',
      'Driver approval & management',
      'Ride monitoring in real time',
      'User management panel',
      'Exportable PDF reports',
      'Revenue & statistics overview',
    ],
  },
];

function Roles() {
  return (
    <section className="roles" id="roles" aria-labelledby="roles-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">User Roles</span>
          <h2 className="section-title" id="roles-heading">
            Built for <span className="gradient-text">Everyone</span>
          </h2>
          <p className="section-subtitle">
            Three distinct experiences, one unified platform serving your entire community.
          </p>
        </div>

        <div className="roles-grid">
          {ROLES.map((r, i) => (
            <div className={`role-card ${r.cls}`} key={i} id={`role-${r.title.toLowerCase()}`}>
              <div className="role-card-bg" aria-hidden="true" />
              <span className="role-emoji" aria-hidden="true">{r.emoji}</span>
              <h3 className="role-title">{r.title}</h3>
              <p className="role-desc">{r.desc}</p>
              <ul className="role-features" aria-label={`${r.title} features`}>
                {r.features.map((f, j) => (
                  <li className="role-feature-item" key={j}>
                    <span className="role-feature-dot" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Screenshots ───────────────────────────────────────────────────────────────
function Screenshots() {
  return (
    <section className="screens" id="screenshots" aria-labelledby="screens-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">App Preview</span>
          <h2 className="section-title" id="screens-heading">
            See SIKAD <span className="gradient-text">In Action</span>
          </h2>
          <p className="section-subtitle">
            A premium mobile experience designed for shared Bokyo rides — clarity, speed, and elegance in one app.
          </p>
        </div>

        <div className="screens-three-col">
          <div className="screen-frame" id="screen-login">
            <div className="screen-label">Login Screen</div>
            <img
              src="/pictures/LoginPage.jpg"
              alt="SIKAD login screen"
              className="screen-phone-img"
              loading="lazy"
            />
          </div>
          <div className="screen-frame screen-frame-center" id="screen-home">
            <div className="screen-label">Passenger Home</div>
            <img
              src="/pictures/Sikad_dasgboard.jpg"
              alt="SIKAD passenger home screen"
              className="screen-phone-img"
              loading="lazy"
            />
          </div>
          <div className="screen-frame" id="screen-map">
            <div className="screen-label">Live Map Navigation</div>
            <img
              src="/pictures/LiveTracking.jpg"
              alt="SIKAD live map navigation"
              className="screen-phone-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Download ─────────────────────────────────────────────────────────────────
function Download() {
  return (
    <section className="download" id="download" aria-labelledby="download-heading">
      <div className="container">
        <div className="download-card">
          <div className="download-card-content">
            <div className="download-version-badge">🚀 Version 1.0 · Stable</div>

            <h2 className="download-title" id="download-heading">
              Get SIKAD<br />on Android
            </h2>

            <p className="download-subtitle">
              Download the APK and install it on any Android device (5.0+).
              Enable "Install from unknown sources" in your settings to get started.
            </p>

            <a
              href="/sikad Version-1.apk"
              className="download-btn"
              id="apk-download-btn"
              download
              aria-label="Download SIKAD Version 1 APK"
            >
              <span className="download-btn-icon">📱</span>
              Download SIKAD v1.apk
            </a>

            <p className="download-note">
              Android 5.0+ · ~60MB · Free to install
            </p>

            <div className="download-stats">
              <div>
                <div className="download-stat-value">60 MB</div>
                <div className="download-stat-label">File Size</div>
              </div>
              <div>
                <div className="download-stat-value">v1.0.0</div>
                <div className="download-stat-label">Version</div>
              </div>
              <div>
                <div className="download-stat-value">Android</div>
                <div className="download-stat-label">Platform</div>
              </div>
              <div>
                <div className="download-stat-value">Free</div>
                <div className="download-stat-label">Price</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <img src="/sikad-logo.png" alt="SIKAD" className="footer-logo-img" />
            <span className="footer-logo-text">SIKAD</span>
          </div>

          <p className="footer-tagline">
            Smart & Innovative Shared Bokyo App for Digital rides — connecting communities, one trip at a time.
          </p>

          <ul className="footer-links">
            <li><a href="#top">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#roles">Roles</a></li>
            <li><a href="#screenshots">Screenshots</a></li>
            <li><a href="#download">Download</a></li>
          </ul>

          <div className="footer-divider" />

          <p className="footer-copy">
            © {year} SIKAD. All rights reserved. · Built with Flutter & Firebase.
          </p>
        </div>
      </div>
    </footer>
  );
}


// ── App ────────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Roles />
        <Screenshots />
        <Download />
      </main>
      <Footer />
    </>
  );
}
