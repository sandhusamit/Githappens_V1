import "../styles/About.css";

export default function About() {
  return (
    <main className="gh-about-page">

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="gh-about-hero">
        <p className="gh-about-kicker">
          Engineering / Systems / Growth
        </p>

        <h1>About GitHappens</h1>

        <p className="gh-about-intro">
          GitHappens is my long-term software engineering and development
          journey focused on building real systems, improving technical depth,
          and engineering tools that solve meaningful problems.
        </p>
      </section>
      {/* ===================================================== */}
          {/* FOUNDER */}
        {/* ===================================================== */}

        <section className="gh-about-section">
        <div className="gh-about-heading">
            <p>Founder</p>
            <h2>GitHappens Founder</h2>
        </div>

        <div className="gh-founder-card">
            <div className="gh-founder-left">
            <div className="gh-founder-avatar">
                SS
            </div>
            </div>

            <div className="gh-founder-right">
            <h3>Samit Sandhu</h3>

            <span className="gh-founder-role">
                Founder / Software Engineering Student / Full-Stack Developer
            </span>

            <p>
                GitHappens is currently a solo engineering journey focused on
                learning through building real systems, deploying applications,
                improving software engineering depth, and exploring long-term
                technical growth across full-stack development, automation,
                infrastructure, and game systems.
            </p>

            <p>
                The long-term vision is to continue evolving GitHappens into a
                larger engineering-focused creative studio capable of building
                ambitious systems, tools, applications, and interactive experiences.
            </p>
            </div>
        </div>
        </section>


      {/* ===================================================== */}
      {/* ENGINEERING STACK */}
      {/* ===================================================== */}

      <section className="gh-about-section">
        <div className="gh-about-heading">
          <p>Engineering Stack</p>
          <h2>Active Development & Skill Progression</h2>
        </div>

        <div className="gh-stack-grid">

          <article className="gh-stack-card">
            <h3>MERN Stack</h3>

            <p>
              Building full-stack systems through StudyZone and portfolio
              infrastructure using React, Node.js, Express, MongoDB, JWT auth,
              APIs, deployment workflows, and scalable frontend architecture.
            </p>
          </article>

          <article className="gh-stack-card">
            <h3>C# / WPF</h3>

            <p>
              Growing through desktop engineering, MVVM patterns, data binding,
              software architecture, and enterprise-style application planning
              through Mortana.
            </p>
          </article>

          <article className="gh-stack-card">
            <h3>Unreal Engine & C++</h3>

            <p>
              Exploring gameplay systems, interaction design, worldbuilding,
              AI-assisted systems, and game architecture through Broken Raj.
            </p>
          </article>

          <article className="gh-stack-card">
            <h3>Linux / Automation</h3>

            <p>
              Experimenting with servers, deployment, scripting, networking,
              automation workflows, and infrastructure-oriented development.
            </p>
          </article>

        </div>
      </section>

      {/* ===================================================== */}
      {/* CURRENT WORKFLOW */}
      {/* ===================================================== */}

      <section className="gh-about-section">
        <div className="gh-about-heading">
          <p>Current Workflow</p>
          <h2>Agile Engineering Workflow</h2>
        </div>

        <div className="gh-workflow-card">

          <div className="gh-workflow-column">
            <h3>Primary Build Focus</h3>

            <ul>
              <li>StudyZone development & deployment</li>
              <li>Portfolio & GitHappens infrastructure</li>
              <li>Mortana SWE planning & architecture</li>
            </ul>
          </div>

          <div className="gh-workflow-column">
            <h3>Parallel Growth Tracks</h3>

            <ul>
              <li>LeetCode & DSA practice</li>
              <li>Software Engineering foundations</li>
              <li>Linux experimentation & automation</li>
              <li>Unreal Engine & C++ exploration</li>
              <li>Mathematics & systems thinking</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ===================================================== */}
      {/* GITHAPPENS VISION */}
      {/* ===================================================== */}

      <section className="gh-about-section">
        <div className="gh-about-heading">
          <p>Vision</p>
          <h2>Why GitHappens Exists</h2>
        </div>

        <div className="gh-about-paragraphs">

          <p>
            GitHappens started as a way to organize the systems, tools, and
            software projects I wanted to build while growing as a developer.
          </p>

          <p>
            Over time, it evolved into a long-term engineering identity focused
            on building meaningful systems instead of endlessly consuming
            tutorials.
          </p>

          <p>
            The goal is not just to create projects, but to continuously improve
            how software is designed, engineered, optimized, automated, and
            scaled.
          </p>

          <p>
            GitHappens also represents the possibility of future collaboration
            with developers, artists, designers, and engineers interested in
            building ambitious systems, applications, and games together.
          </p>

        </div>
      </section>

      {/* ===================================================== */}
      {/* PROJECT PHILOSOPHY */}
      {/* ===================================================== */}

      <section className="gh-about-section">
        <div className="gh-about-heading">
          <p>Project Philosophy</p>
          <h2>Building Systems I Personally Wanted</h2>
        </div>

        <div className="gh-purpose-grid">

          <article className="gh-purpose-card">
            <h3>StudyZone</h3>

            <p>
              Built to strengthen learning workflows, engineering skills,
              frontend architecture, backend systems, and scalable quiz tooling.
            </p>
          </article>

          <article className="gh-purpose-card">
            <h3>Mortana</h3>

            <p>
              Originally created to improve productivity and workflow management
              within the mortgage and real estate industry.
            </p>
          </article>

          <article className="gh-purpose-card">
            <h3>Research Highlighter</h3>

            <p>
              Designed to improve research organization, learning efficiency,
              note extraction, and information processing.
            </p>
          </article>

          <article className="gh-purpose-card">
            <h3>Broken Raj</h3>

            <p>
              A game concept inspired by historical themes and gameplay systems
              I always wanted to experience myself.
            </p>
          </article>

        </div>
      </section>

      {/* ===================================================== */}
      {/* LEARNING PROCESS */}
      {/* ===================================================== */}

      <section className="gh-about-section">
        <div className="gh-about-heading">
          <p>Learning Process</p>
          <h2>How I Learn & Progress</h2>
        </div>

        <div className="gh-learning-grid">

          <div className="gh-learning-card">
            <h3>Project-Driven Learning</h3>

            <p>
              Most technical growth happens by applying concepts directly into
              real systems rather than isolated tutorial exercises.
            </p>
          </div>

          <div className="gh-learning-card">
            <h3>Software Engineering</h3>

            <p>
              Applying software engineering principles, planning, architecture,
              UML, and systems thinking into future projects.
            </p>
          </div>

          <div className="gh-learning-card">
            <h3>DSA & Optimization</h3>

            <p>
              Using LeetCode and algorithm practice to improve software
              efficiency, scalability, and engineering thinking.
            </p>
          </div>

          <div className="gh-learning-card">
            <h3>Continuous Exploration</h3>

            <p>
              Combining school, independent study, experimentation, tutorials,
              and deployment experience into a continuous engineering workflow.
            </p>
          </div>

        </div>
      </section>

      {/* ===================================================== */}
      {/* ROADMAP */}
      {/* ===================================================== */}

      <section className="gh-about-section">
        <div className="gh-about-heading">
          <p>Roadmap</p>
          <h2>Engineering Direction</h2>
        </div>

        <div className="gh-roadmap">

          <div className="gh-roadmap-item">
            <span>01</span>

            <div>
              <h3>StudyZone Expansion</h3>

              <p>
                Continue improving deployment, architecture, systems,
                multiplayer/social features, analytics, and scalability.
              </p>
            </div>
          </div>

          <div className="gh-roadmap-item">
            <span>02</span>

            <div>
              <h3>Mortana Rebuild</h3>

              <p>
                Rebuild the CRM using proper software engineering principles,
                WPF architecture, and cleaner system design.
              </p>
            </div>
          </div>

          <div className="gh-roadmap-item">
            <span>03</span>

            <div>
              <h3>Broken Raj Prototype</h3>

              <p>
                Develop foundational gameplay systems, interaction systems,
                worldbuilding, and narrative structure.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}