import { Link } from "react-router-dom";
import GH_Logo from "../assets/GH_Logo.png";
import "../styles/Navbar.css";
import { useAuth } from "../contexts/AuthContext";

function NavBar() {
  const { user, handleLogout } = useAuth();

  return (
    <header className="gh-navbar-wrap">
      <nav className="gh-navbar">

        {/* ========================================================
            BRAND
        ======================================================== */}

        <Link to="/" className="gh-brand">
          <img
            src={GH_Logo}
            alt="GitHappens logo"
            className="gh-logo"
          />

          <span className="gh-brand-text">
            GitHappens
          </span>
        </Link>

        {/* ========================================================
            NAV LINKS
        ======================================================== */}

        <div className="gh-navbar-links">
          <Link to="/">Home</Link>

          <Link to="/projects">
            Projects
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/devlog">
            DevLog
          </Link>

          <Link to="/services">
            Services
          </Link>

          <Link to="/contact">
            Contact
          </Link>
        </div>

        {/* ========================================================
            ACTIONS
        ======================================================== */}

        <div className="gh-navbar-actions">

          <a
            href="https://github.com/sandhusamit"
            target="_blank"
            rel="noreferrer"
            className="gh-nav-btn"
          >
            GitHub
          </a>

          <a
            href="/Samit_Sandhu_SWE_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="gh-nav-btn"
          >
            Resume
          </a>

          {user && (
            <Link
              to="/devlogentry"
              className="gh-nav-btn gh-admin-btn"
            >
              New Log
            </Link>
          )}

          {user ? (
            <Link
              to="/"
              className="gh-nav-btn"
              onClick={handleLogout}
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="gh-nav-btn"
            >
              Admin
            </Link>
          )}

        </div>
      </nav>
    </header>
  );
}

export default NavBar;