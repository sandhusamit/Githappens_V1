import { Link, useParams } from "react-router-dom";
import { projectDetails } from "../../data/projects.js";
import "../../styles/ProjectShowcase.css";
import ProjectShowcase from "../../components/ProjectShowcase.jsx";

export default function Project() {
  const { slug } = useParams();

  const project = projectDetails.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="gh-project-showcase-page">
        <section className="gh-project-showcase-hero">
          <h1>Project Not Found</h1>
          <p>The project you are looking for does not exist.</p>

          <Link to="/projects" className="gh-project-back">
            ← Back to Projects
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="gh-project-showcase-page">
      <Link to="/projects" className="gh-project-back">
        ← Back to Projects
      </Link>

      <ProjectShowcase project={project} />
    </main>
  );
}