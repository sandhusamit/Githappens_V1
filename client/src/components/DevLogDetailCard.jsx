import "../styles/DevLogDetailCard.css";

export default function DevLogDetailCard({ log }) {
  return (
    <article className="gh-devlog-detail-card">
      <div className="gh-devlog-detail-header">
        <p className="gh-devlog-kicker">{log.category}</p>
        <h1>{log.title}</h1>

        <div className="gh-devlog-detail-meta">
          <span>{log.project}</span>
          <span>{log.date}</span>
          <span>{log.durationMinutes} min</span>
          <span>Energy {log.energyLevel}/10</span>
          <span>Difficulty {log.difficultyRating}/10</span>
        </div>
      </div>

      <section>
        <h2>Public Summary</h2>
        <p>{log.publicSummary}</p>
      </section>

      <section>
        <h2>Objective</h2>
        <p>{log.objective}</p>
      </section>

      <section>
        <h2>Problem Trigger</h2>
        <p>{log.problemTrigger}</p>
      </section>

      <section>
        <h2>What Happened</h2>
        <p>{log.whatHappened}</p>
      </section>

      <section>
        <h2>Outcome</h2>
        <p>{log.outcome}</p>
      </section>

      <section>
        <h2>Concepts Learned</h2>
        <div className="gh-devlog-tags">
          {(log.conceptsLearned || []).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section>
        <h2>Reusable Patterns</h2>

        {(log.reusablePatterns || []).map((pattern) => (
          <div className="gh-devlog-pattern" key={pattern.title}>
            <h3>{pattern.title}</h3>
            <p>{pattern.description}</p>

            {pattern.codeSnippet && (
              <pre>
                <code>{pattern.codeSnippet}</code>
              </pre>
            )}
          </div>
        ))}
      </section>

      <section>
        <h2>Mistakes</h2>
        <ul>
          {(log.mistakes || []).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Watch Out For Next Time</h2>
        <ul>
          {(log.watchOutForNextTime || []).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Can Be Applied Again In</h2>
        <div className="gh-devlog-tags">
          {(log.canBeAppliedAgainIn || []).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section>
        <h2>Reflection</h2>
        <p>{log.reflection}</p>
      </section>

      <section>
        <h2>Next Steps</h2>
        <ul>
          {(log.nextSteps || []).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {log.links?.length > 0 && (
        <section>
          <h2>Links</h2>

          <div className="gh-devlog-links">
            {log.links.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}