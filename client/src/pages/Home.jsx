import { Link } from "react-router-dom";
import "../styles/Home.css";
import heroImage from "../assets/hero-banner.png";

export default function Home() {
  return (
    <main className="gh-home">
      <section
        className="gh-hero"
        style={{ backgroundImage: `url(${heroImage})` }}

        
      >

        {/* Small HTML overlay only */}
        <div className="gh-kicker-wrap">
          <p className="gh-kicker">
            Developer Studio / Portfolio
          </p>
        </div>
        <div className="gh-hero-shade">
          <div className="gh-hero-actions">
            <Link to="/projects" className="gh-btn">
              Explore Projects
            </Link>

            <Link to="/about" className="gh-btn gh-btn-secondary">
              About Me
            </Link>
          </div>

          <div className="gh-pill-row">
            <span>AI Tools</span>
            <span>Web Apps</span>
            <span>Games</span>
            <span>Automation</span>
          </div>
        </div>
      </section>
      <section className="gh-home-section">
        <div className="gh-section-heading">
          <p>Systems In Progress</p>
          <h2>Projects</h2>
        </div>

        <div className="gh-mini-grid">
          <Link to="/projects" className="gh-mini-card">
            <h3>StudyZone</h3>
            <p>Deployed MERN quiz platform.</p>
          </Link>

          <Link to="/projects" className="gh-mini-card">
            <h3>Mortana</h3>
            <p>C# WPF CRM rebuild.</p>
          </Link>

          <Link to="/projects" className="gh-mini-card">
            <h3>Broken Raj</h3>
            <p>Unreal Engine passion project.</p>
          </Link>

          <Link to="/projects" className="gh-mini-card">
            <h3>Research Highlighter</h3>
            <p>Browser extension concept.</p>
          </Link>
        </div>
      </section>

      <section className="gh-home-section">
        <div className="gh-section-heading">
          <p>Engineering Philosophy</p>
          <h2>Development Style</h2>
        </div>

        <div className="gh-mini-grid">
          <div className="gh-mini-card">
            <h3>Faster</h3>
            <p>Can this be improved with DSA?</p>
          </div>

          <div className="gh-mini-card">
            <h3>Cleaner</h3>
            <p>Can SWE principles improve structure?</p>
          </div>

          <div className="gh-mini-card">
            <h3>Automated</h3>
            <p>Can Linux or scripting remove repetition?</p>
          </div>

          <div className="gh-mini-card">
            <h3>Scalable</h3>
            <p>Can system design make it last?</p>
          </div>
        </div>
      </section>

      <section className="gh-home-section">
        <div className="gh-section-heading">
          <p>Current Focus</p>
          <h2>Agile Workflow</h2>
        </div>

        <div className="gh-focus-card">
          <p>
            Current build priority: <strong>StudyZone</strong>.  
            Parallel growth tracks: <strong>Pressman SWE → Mortana planning</strong>, 
            <strong> LeetCode DSA + discrete math</strong>, 
            <strong> Unreal/C++ exploration</strong>, and 
            <strong> Linux automation/server practice</strong>.
          </p>
        </div>
      </section>

      <section className="gh-business-section">
        <div className="gh-business-copy">
          <p className="gh-business-kicker">For Small Business Owners</p>

          <h2>More than a basic website - Tech Solutions.</h2>

          <p>
            Many small businesses pay hundreds of dollars for simple brochure sites
            that look fine, but do not actually improve how the business operates.
            GitHappens focuses on building practical web apps — websites with useful
            tools, forms, dashboards, automation, lead capture, reporting, and systems
            behind them.
          </p>

          <p>
            The goal is simple: give business owners a stronger digital system without
            paying agency-level prices for a basic template.
          </p>

          <div className="gh-business-actions">
            <Link to="/services" className="gh-btn">
              View Services
            </Link>

            <Link to="/contact" className="gh-btn gh-btn-secondary">
              Start a Project
            </Link>
          </div>
        </div>

        <div className="gh-business-list">
          <div>
            <span>01</span>
            <p>Custom websites that feel like real business tools.</p>
          </div>

          <div>
            <span>02</span>
            <p>Lead forms, dashboards, automation, broadcast emailing, and internal workflows.</p>
          </div>

          <div>
            <span>03</span>
            <p>NoSQL/SQL databases integrated that can provide analytics for better decisions.</p>
          </div>

          <div>
            <span>04</span>
            <p>Servers that are optimized for performance and reliability.</p>
          </div>

          <div>
            <span>05</span>
            <p>Built by someone who understands both software and business operations.</p>
          </div>
        </div>
      </section>
    </main>
  );
}