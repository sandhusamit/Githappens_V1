import { Link } from "react-router-dom";
import "../styles/Projects.css";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="gh-project-card">
      <div className="gh-project-top">
        <span>{project.status}</span>
        <small>{project.type}</small>
      </div>

      <h2>{project.title}</h2>

      <p>{project.desc}</p>

      <div className="gh-stack-row">
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <div className="gh-project-footer">
        <span>View Project</span>
        <span>→</span>
      </div>
    </Link>
  );
}