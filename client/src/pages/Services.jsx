import "../styles/Services.css";

export default function Services() {
  return (
    <main className="gh-services-page">
      <section className="gh-services-hero">
        <p className="gh-services-kicker">Development / Systems / Consulting</p>
        <h1>Services</h1>
        <p>
          Practical software, web, automation, and technical support services
          built around real business problems and developer-focused execution.
        </p>
      </section>

      <section className="gh-services-grid">
        <article className="gh-service-card">
          <span>01</span>
          <h2>Web App Development</h2>
          <p>
            Full-stack websites, dashboards, portals, and internal tools using
            modern React-based architecture.
          </p>
        </article>

        <article className="gh-service-card">
          <span>02</span>
          <h2>Business Automation</h2>
          <p>
            Scripts, workflows, data cleanup tools, and process automation for
            repetitive business tasks.
          </p>
        </article>

        <article className="gh-service-card">
          <span>03</span>
          <h2>CRM / Workflow Systems</h2>
          <p>
            Custom systems for organizing leads, clients, documents, tasks,
            notes, and operational workflows.
          </p>
        </article>

        <article className="gh-service-card">
          <span>04</span>
          <h2>Technical Support</h2>
          <p>
            Help with websites, deployment, troubleshooting, data handling,
            systems setup, and general tech support.
          </p>
        </article>

        <article className="gh-service-card">
          <span>05</span>
          <h2>Data & Reporting Tools</h2>
          <p>
            Lightweight reporting systems, dashboards, database-backed tools,
            and structured data workflows.
          </p>
        </article>

        <article className="gh-service-card">
          <span>06</span>
          <h2>Project Planning</h2>
          <p>
            Requirements gathering, software planning, UML-style thinking,
            workflow mapping, and MVP scoping.
          </p>
        </article>
      </section>
    </main>
  );
}