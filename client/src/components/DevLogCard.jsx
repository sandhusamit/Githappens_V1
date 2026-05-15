import { Link } from "react-router-dom";
import "../styles/DevLogCard.css";

export default function DevLogCard({ log }) {
  return (
    <Link to={`/devlog/${log.slug}`} className="gh-devlog-card">
      <div className="gh-devlog-top">
        <span>{log.category}</span>
        <small>{log.project}</small>
      </div>

      <h2>{log.title}</h2>

      <p>{log.publicSummary}</p>

      <div className="gh-devlog-meta">
        <span>{log.date}</span>
        <span>{log.durationMinutes} min</span>
        <span>Difficulty {log.difficultyRating}/10</span>
      </div>

      <div className="gh-devlog-tags">
        {(log.tags || []).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="gh-devlog-footer">
        <span>Read Log</span>
        <span>→</span>
      </div>
    </Link>
  );
}