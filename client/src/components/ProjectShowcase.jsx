import "../styles/ProjectShowcase.css";

export default function ProjectShowcase({ project }) {
  return (
    <article className="gh-project-showcase">
      <section className="gh-project-showcase-hero">
        <div className="gh-project-copy">
          <p className="gh-project-kicker">{project.status}</p>

          <h1>{project.title}</h1>

          <p className="gh-project-summary">{project.summary}</p>

          <div className="gh-project-links">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live Site
              </a>
            )}

            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}

            {project.caseStudyUrl && (
              <a href={project.caseStudyUrl}>
                Case Study
              </a>
            )}
          </div>
        </div>

        <div className="gh-project-cover-wrap">
          <img
            src={project.coverImage}
            alt={`${project.title} cover`}
            className="gh-project-cover"
          />
        </div>
      </section>

      <section className="gh-project-section">
        <h2>Developer Overview</h2>
        <p>{project.developerOverview}</p>
      </section>

      <section className="gh-project-section">
        <h2>Tech Stack</h2>

        <div className="gh-project-chip-row">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="gh-project-grid-section">
        <div className="gh-project-panel">
          <h2>What I Built</h2>

          <ul>
            {project.built.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="gh-project-panel">
          <h2>Engineering Focus</h2>

          <ul>
            {project.engineeringFocus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="gh-project-section">
        <h2>Walkthrough</h2>

        <p className="gh-project-muted">
          A quick look at the system from a developer and architecture
          perspective.
        </p>

        <div className="gh-project-media-grid">
          {project.walkthrough?.length > 0 ? (
            project.walkthrough.map((media) => (
              <div className="gh-project-media-card" key={media.title}>
                <div className="gh-project-media-frame">
                  {media.type === "video" ? (
                    <video controls src={media.src} />
                ) : (
                  <img src={media.src} alt={media.title} />
                )}
              </div>

                <h3>{media.title}</h3>
                <p>{media.description}</p>
              </div>
            ))
          ) : (
            <p>Walkthrough content coming soon...</p>
          )} 

          {project.documents?.length > 0 && (
            <div className="gh-project-documents">
              <h3>Related Documents</h3>
              <ul>
                {project.documents.map((doc) => (
                  <li key={doc}>
                    <a href={doc} target="_blank" rel="noreferrer">
                      {doc.split("/").pop()}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>


      <section className="gh-project-grid-section">
        <div className="gh-project-panel">
          <h2>Problems Solved</h2>

          <ul>
            {project.problemsSolved.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="gh-project-panel">
          <h2>What I Learned</h2>

          <ul>
            {project.lessonsLearned.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="gh-project-section">
        <h2>Next Improvements</h2>

        <div className="gh-project-chip-row">
          {project.nextImprovements.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
    </article>
  );
}